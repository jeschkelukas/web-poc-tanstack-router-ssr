import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import * as React from "react";
import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { DehydrateRouter } from "@tanstack/react-router-server/client";
import { RouterContext } from "../routerContext";

export const Route = rootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
        <script src="https://cdn.tailwindcss.com" />
        <script
          type="module"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `,
          }}
        />
        <script type="module" src="/@vite/client" />
        <script type="module" src="/src/entry-client.tsx" />
      </head>
      <body className="bg-[#eee]">
        <header className="bg-[#001e28] w-full h-[88px] flex items-center justify-start">
          <div className="w-full max-w-[1188px] mx-auto">
            <svg
              className="w-[225px] h-[32px]"
              preserveAspectRatio="xMinYMid meet"
              enableBackground="new 0 0 544.5 100"
              height="100"
              viewBox="0 0 544.5 100"
              width="544.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m281.8 33.4h28.9c.2 0 .4-.2.4-.3v-7.9c0-.2-.2-.3-.4-.3h-29.2c-.9 0-1.8.3-2.4 1l-6.6 6.6c-.7.6-1 1.5-1 2.4v29.9c0 .9.3 1.8 1 2.4l6.6 6.6c.7.7 1.5 1 2.4 1h29.2c.2 0 .3-.2.3-.3v-8c0-.2-.2-.3-.3-.3h-29c-.4 0-.9-.2-1.2-.5s-.5-.8-.5-1.2v-8.6c0-.9.8-1.7 1.7-1.7h20.3c.2 0 .3-.1.3-.3v-7.9c0-.2-.2-.3-.3-.3h-20.3c-.9 0-1.7-.8-1.7-1.8v-8.6c.1-1.1.9-1.9 1.8-1.9z"></path>
                <path d="m544.1 24.8h-38.9c-.2 0-.3.2-.3.3v7.9c0 .2.2.3.3.3h13.4c.9 0 1.7.7 1.7 1.6v39.4c0 .2.2.3.3.3h8c.2 0 .3-.2.3-.3v-39.3c.1-.9.8-1.6 1.7-1.6h13.5c.2 0 .3-.2.3-.3v-7.9c0-.1-.1-.2-.1-.3 0 0-.1-.1-.2-.1z"></path>
                <path d="m175.6 74.8h-24.1c-.9 0-1.8-.4-2.4-1l-6.6-6.6c-.7-.7-1-1.5-1-2.4v-39.6c0-.2.2-.3.3-.3h7.9c.2 0 .3.2.3.3v39.3c0 .5.2.9.5 1.2s.8.5 1.2.5h23.8c.2 0 .3.2.3.3v8c0 .1 0 .2-.1.3.1 0 0 0-.1 0z"></path>
                <path d="m355.3 53.1-6.6-6.6c-.7-.7-1.5-1-2.4-1h-19.3c-.9 0-1.7-.8-1.7-1.7v-8.6c0-.9.8-1.7 1.7-1.7h27.2c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-27.5c-.9 0-1.8.3-2.4 1l-6.6 6.6c-.7.6-1 1.5-1 2.4v9.2c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h19.3c.9 0 1.7.8 1.7 1.7v8.6c0 1-.8 1.7-1.7 1.7h-27.2c-.2 0-.3.2-.3.3v8c0 .2.2.3.3.3h27.5c.9 0 1.8-.4 2.4-1l6.6-6.6c.6-.7 1-1.5 1-2.4v-9.2c0-1-.4-1.8-1-2.5z"></path>
                <path d="m448.6 32.4-6.6-6.6c-.7-.6-1.5-1-2.4-1h-23c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.7-1 1.5-1 2.4v29.9c0 .9.4 1.8 1 2.4l6.6 6.6c.7.7 1.5 1 2.4 1h23c.9 0 1.8-.4 2.4-1l6.6-6.6c.6-.7 1-1.5 1-2.4v-29.8c0-.9-.3-1.8-1-2.5zm-7.6 32.1c0 .5-.2.9-.5 1.2s-.8.5-1.2.5h-22.4c-1 0-1.8-.8-1.8-1.7v-29.3c0-.9.8-1.7 1.8-1.7h22.4c.9 0 1.7.8 1.7 1.7z"></path>
                <path d="m499.6 34.9c0-.9-.4-1.8-1-2.4l-6.5-6.6c-.7-.6-1.5-1-2.4-1h-32.8c-.2 0-.3.2-.3.3v49.3c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-18.7c0-.9.7-1.6 1.6-1.7h11.1l11.9 20.7h10l-11.9-20.7h1.9c.9 0 1.8-.4 2.4-1l6.5-6.6c.6-.7 1-1.5 1-2.4zm-8.6 8.9c0 .9-.8 1.7-1.7 1.7h-22.4c-.9 0-1.7-.8-1.7-1.7v-8.6c0-.9.8-1.7 1.7-1.7h22.4c.9 0 1.7.8 1.7 1.7v1.7z"></path>
                <path d="m224.2 24.8 11.7 49.7c.1.2.2.3.3.3h17.2c.2 0 .3-.1.3-.3l11.7-49.7h-9.4l-9.3 41.1c-.1.2-.2.3-.3.3h-2.9c-.2 0-.3-.1-.3-.3l-9.4-41.1z"></path>
                <path d="m401.4 34.9c0-.9-.4-1.8-1-2.4l-6.5-6.6c-.6-.6-1.5-1-2.4-1h-29.5c-.2 0-.3.2-.3.3v49.3c0 .2.2.3.3.3h8c.2 0 .3-.2.3-.3v-18.6c0-.9.7-1.6 1.6-1.7h19.5c.9 0 1.8-.3 2.4-1l6.5-6.6c.7-.6 1-1.5 1-2.4v-9.3zm-8.6 8.9c0 .9-.8 1.7-1.7 1.7h-19c-1 0-1.7-.8-1.7-1.7v-8.6c0-.9.8-1.7 1.7-1.7h19c.9 0 1.7.8 1.7 1.7z"></path>
                <path d="m207.3 33.4h11.7c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-35.5c-.2 0-.4.2-.4.3v7.9c0 .2.2.3.4.3h11.7c.9 0 1.7.7 1.7 1.6v29.6c-.1.9-.8 1.6-1.7 1.6h-11.7c-.2 0-.4.2-.4.3v8c0 .2.2.3.4.3h35.5c.2 0 .3-.2.3-.3v-8c0-.2-.2-.3-.3-.3h-11.7c-.9 0-1.7-.7-1.8-1.6v-29.6c.1-.9.9-1.6 1.8-1.6z"></path>
                <path d="m21.1 55.1c-.4-2.5-.6-5.1-.3-7.6l-20.6-1.8c-.8 8.7.8 17.5 4.5 25.4l18.7-8.7c-1.1-2.3-1.8-4.8-2.3-7.3z"></path>
                <path d="m27.5 68.9-15.8 13.2c4.7 5.6 10.5 10.1 17.2 13.2l8.7-18.8c-3.9-1.8-7.3-4.4-10.1-7.6z"></path>
                <path d="m55.1 78.9c-2.5.4-5.1.6-7.6.3l-1.8 20.6c4.4.4 8.7.2 13.1-.6 1.4-.3 2.8-.6 4.3-1l-5.4-20c-.9.3-1.8.5-2.6.7z"></path>
                <path d="m44.9 21.1c3.4-.6 6.9-.6 10.4.1l8.9-19.1c-7.4-2.2-15.2-2.7-22.9-1.3-19.7 3.4-34.7 18.1-39.6 36.3l20 5.3c2.9-10.6 11.6-19.3 23.2-21.3z"></path>
                <path d="m68.8 72.5 13.3 15.8c3.3-2.8 6.3-6 8.8-9.6l-16.9-11.9c-1.5 2.1-3.2 4-5.2 5.7z"></path>
                <path d="m99.8 45.7-20.6 1.8c.2 1.7.2 3.4 0 5.1l20.6 1.8c.3-3 .3-5.9 0-8.7z"></path>
              </g>
              <path d="m73.3 0-19.2 41.2 83.1-41.2z" fill="#ff0046"></path>
            </svg>
          </div>
        </header>
        <nav className="p-2 flex gap-2 text-lg border-b-[1px] border-gray-300">
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/events"
            activeProps={{
              className: "font-bold",
            }}
          >
            Events
          </Link>
        </nav>
        <div className="w-full max-w-[1188px] mx-auto pt-8 flex flex-row gap-x-4">
          <Outlet /> {/* Start rendering router matches */}
        </div>
        <TanStackRouterDevtools initialIsOpen={true} position="bottom-right" />
        <DehydrateRouter />
      </body>
    </html>
  );
}
