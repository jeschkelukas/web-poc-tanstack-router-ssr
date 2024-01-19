# POC of tanstack router with SSR and reverse proxy

To run this POC:

- `npm install` or `yarn`
- `npm i @types/react --save-dev` or `yarn add  --dev @types/react`
- `npm i @types/react-dom --save-dev` or `yarn add --dev @types/react-dom`
- `npm start` or `yarn start`

For dev run purposes install CORS extension in your browser to avoid CORS issues. For example `Who CORS?` and set `Origin:` to `https://web-poc-astro.vercel.app/`.

-----
## Test with reverse proxy

Test with reverse proxy, using Varnish running locally via Docker and mapped to the default backend localhost:3000, where the production version of the server (production build) is running.

1. Start the reverse proxy (Varnish) using Docker:
   ```bash
   docker run \
           -v /ABSOLUTE_PATH_TO/web-poc-tanstack-router-ssr/default.vcl:/etc/varnish/default.vcl:ro \
           --tmpfs /var/lib/varnish/varnishd:exec \
           --add-host=host.docker.internal:host-gateway \
           -p 8080:80 \
           varnish
   ```

2. Generate the production build of the server using `npm run build:server` in `./dist/server/entry-server.js`


3. Start the server (http://localhost:3000/) using `npm run serve`


4. Open the web browser and navigate to http://localhost:8080/

During interaction, you can filter out `Doc` in the console, enable `Preserve log`, and observe the results.

For the first request to a specific URL (cached based on host and params), the header should be `X-Cache: MISS`. Upon subsequent requests, it should be `X-Cache: HIT`, indicating the result is served from the cache. The same behavior should occur if the backend server (localhost:3000) is killed under Varnish, and the same request is retried.

You can also test this using curl:
```bash
curl -v 127.0.0.1:8080/events/2
curl --head -v 127.0.0.1:8080/events/2
```
