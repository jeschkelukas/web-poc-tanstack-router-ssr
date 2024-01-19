# Web-poc-tanstack-router-ssr

To run this POC:

- `npm install` or `yarn`
- `npm i @types/react --save-dev` or `yarn add  --dev @types/react`
- `npm i @types/react-dom --save-dev` or `yarn add --dev @types/react-dom`
- `npm start` or `yarn start`

For dev run purposes install CORS extension in your browser to avoid CORS issues. For example `Who CORS?` and set `Origin:` to `https://web-poc-astro.vercel.app/`.

-----

CZECH (TODO english version)

----

Test s reverzni proxy, pouzit varnish pusteny lokalne pres pres 
docker a namapovany na defaultni backen localhost:3000, kde si pustime
produkcni verzi serveru (produkcni build).

Postup:

1) spustit reverzni proxy (varnish) pres docker
```
docker run \
        -v /ABSOLUTE_PATH_TO/web-poc-tanstack-router-ssr/default.vcl:/etc/varnish/default.vcl:ro \
        --tmpfs /var/lib/varnish/varnishd:exec \
        --add-host=host.docker.internal:host-gateway \
        -p 8080:80 \
        varnish
```
2) vygenerovat produkcni build serveru `npm run build:server` do `./dist/server/entry-server.js`
3) spustit server (http://localhost:3000/) pomoci `npm run serve`
4) jit na web (http://localhost:8080/)

Pri interakci je mozne si v konzoli vyfiltrovat `Doc`, dat si `Preserve log` a sledovat si vysledky.
Pri prvnim requestu na danou URL (cache dle hosta a params) by mel byt v hlavicce `X-Cache: MISS` a pri 
opakovanem requestu `X-Cache: HIT` a vysledek by mel byt z cache. To same pokud sestrelime pod 
varnishem backend server (localhost:3000) a zkusime stejny request znovu.


To same lze otestovat i pomoci curlu viz
```
curl -v 127.0.0.1:8080/events/2
curl --head -v 127.0.0.1:8080/events/2
```
