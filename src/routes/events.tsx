import * as React from "react";
import { FileRoute, Link, Outlet } from "@tanstack/react-router";

export type ImageType = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export type LeagueType = {
  id: number;
  name: string;
  round: number;
  season: string;
};

export type EventRowType = {
  id: number;
  home: string;
  away: string;
  startTime: Date;
  leagueId: number;
};

export const Route = new FileRoute('/events').createRoute({
  loader: async () => {
    console.log("Fetching events...");
    const response = await fetch("https://web-poc-astro.vercel.app/api/soccer")
      .then(
        (d) =>
          d.json() as Promise<{
            events: EventRowType[];
            leagues: LeagueType[];
          }>,
      )
      .then((d) => d.events.slice(0, 20));

    return response;
  },
  component: PostsComponent,
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <>
      <div className="w-80">
        <div className="p-2 flex flex-col gap-y-2">
          {posts?.map((post) => {
            return (
              <div className="flex flex-row" key={post.id}>
                <div className="w-1/12 text-center">
                  <button className="opacity-25 hover:opacity-75">
                    {post.id}
                  </button>
                </div>
                <div className="w-4/12 text-center">
                  <strong className="text-red-500">
                    {new Date(post.startTime)
                      .toLocaleTimeString("cs")
                      .replace(/:00$/, "")}
                  </strong>
                </div>
                <h3 className="w-full">
                  <Link
                    to="/events/$eventId"
                    params={{
                      eventId: String(post.id),
                    }}
                    className="text-blue-800 hover:text-blue-600"
                    activeProps={{ className: "text-black font-bold" }}
                  >
                    <strong>{post.home}</strong> - <strong>{post.away}</strong>
                  </Link>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
}
