import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { EventsPage, loadredData } from "./pages/Events";
import { EventDetailPage, actionEventDetail } from "./pages/EventDetail";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { RootLayout } from "./pages/Root";
import { EventsRootLayout } from "./pages/EventsRoot";
import { ErrorPage } from "./pages/ErrorPage";
import { action as manipulateAction } from "./components/EventForm";


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
            loader: actionEventDetail,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: manipulateAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />
              }

            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateAction
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
