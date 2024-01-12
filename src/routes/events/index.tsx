import { FileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = new FileRoute('/events/').createRoute({
  component: EvenstIndexComponent,
});

function EvenstIndexComponent() {
  return <div>Event not found!</div>;
}
