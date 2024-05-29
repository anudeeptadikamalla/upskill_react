import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { EventsLoader as eventsLoader } from "./pages/Events";
import EventDetails, {
  loader as eventsdetailsloader,
  action as deleteEventsAction
} from "./pages/EventDetailsPage";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import EditEvents from "./pages/EditEvents";
import RootLayout from "./pages/Root";
import EventRootLayout from "./pages/EventsRoot";
import Error from "./pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventsdetailsloader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventsAction,
              },
              {
                path: "edit",
                element: <EditEvents />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
