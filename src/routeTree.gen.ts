import { Route as rootRoute } from './routes/__root'
import { Route as EventsImport } from './routes/events'
import { Route as IndexImport } from './routes/index'
import { Route as EventsIndexImport } from './routes/events/index'
import { Route as EventsEventIdImport } from './routes/events/$eventId'

const EventsRoute = EventsImport.update({
  path: '/events',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EventsIndexRoute = EventsIndexImport.update({
  path: '/',
  getParentRoute: () => EventsRoute,
} as any)

const EventsEventIdRoute = EventsEventIdImport.update({
  path: '/$eventId',
  getParentRoute: () => EventsRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/events': {
      preLoaderRoute: typeof EventsImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventId': {
      preLoaderRoute: typeof EventsEventIdImport
      parentRoute: typeof EventsImport
    }
    '/events/': {
      preLoaderRoute: typeof EventsIndexImport
      parentRoute: typeof EventsImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  EventsRoute.addChildren([EventsEventIdRoute, EventsIndexRoute]),
])
