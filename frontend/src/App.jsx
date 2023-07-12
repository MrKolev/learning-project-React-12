import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { EventsPage, loadredData } from "./pages/Events";
import { EventDetailPage, actionToDeleteEvent, eventDetail } from "./pages/EventDetail";
import { NewEventPage, actionSubmitNewEvant } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { RootLayout } from "./pages/Root";
import { EventsRootLayout } from "./pages/EventsRoot";
import { ErrorPage } from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loadredData
          },
          {
            path: ':id',
            id: "event-detail",
            loader: eventDetail,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: actionToDeleteEvent,
              },
              {
                path: 'edit',
                element: <EditEventPage />
              }

            ]
          },
          { path: 'new', 
          element: <NewEventPage />,
          action: actionSubmitNewEvant
         },

        ]
      }
    ]
  }


])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
