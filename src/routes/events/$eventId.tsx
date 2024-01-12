import { FileRoute } from "@tanstack/react-router";
import { Await, defer } from "@tanstack/react-router";
import * as React from "react";
import { ImageType, PostType } from "../events";
import { Spinner } from "../../components/Spinner";

async function fetchPrematchById(eventId: string) {
  console.log(`Fetching prematch for event with id ${eventId}...`);

  await new Promise((r) =>
    setTimeout(r, 100 + Math.round(Math.random() * 100)),
  );

  return fetch(`https://jsonplaceholder.typicode.com/posts/${eventId}`).then(
    (r) => r.json() as Promise<PostType>,
  );
}

async function fetchImageById(eventId: string) {
  await new Promise((r) => setTimeout(r, 1000));

  console.log(`Fetching image for event with id ${eventId}...`);

  return fetch(`https://jsonplaceholder.typicode.com/photos/${eventId}`).then(
    (r) => r.json() as Promise<ImageType>,
  );
}

export const Route = new FileRoute('/events/$eventId').createRoute({
  loader: async ({ params: { eventId } }) => {
    const imagePromise = fetchImageById(eventId);
    const prematch = await fetchPrematchById(eventId);

    return {
      eventId,
      prematch,
      imagePromise: defer(imagePromise),
    };
  },
  component: EventComponent,
});

function EventComponent() {
  const { eventId, prematch, imagePromise } = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{prematch.title}</h4>
      <div className="text-sm">{prematch.body}</div>
      <React.Suspense
        fallback={
          <div className="flex items-center gap-2">
            <Spinner />
            Loading image for event...
          </div>
        }
        key={eventId}
      >
        <Await promise={imagePromise}>
          {(image) => (
            <div className="space-y-2">
              <img src={image.url} alt={image.title} />
            </div>
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}
