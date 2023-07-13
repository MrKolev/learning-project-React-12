import { Route, Routes,  } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { RootLayout } from "./pages/Root";
import { EventsRootLayout } from "./pages/EventsRoot";
import { ErrorBoundary } from "react-error-boundary";
import { EventsList } from "./components/EventsList";
import { EventItemDetails } from "./components/EventItem";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />
//       },
//       {
//         path: 'events',
// element: <EventsRootLayout />,
//         children: [
//           {
//             index: true,
//             element: <EventsPage />,
//             loader: loadredData
//           },
//           {
//             path: ':id',
//             id: "event-detail",
//             loader: actionEventDetail,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetailPage />,
//                 action: manipulateAction,
//               },
//               {
//                 path: 'edit',
//                 element: <EditEventPage />
//               }

//             ]
//           },
//           {
//             path: 'new',
//             element: <NewEventPage />,
//             action: manipulateAction
//           },

//         ]
//       }
//     ]
//   }


// ])



function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/*" element={<RootLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="events/*" element={<EventsRootLayout />}>
            <Route index={true} element={<EventsList />} />
            <Route path=":id/*">
              <Route index={true} element={<EventItemDetails />} />
              <Route path="edit" element={<EditEventPage />} />
            </Route>
            <Route path="new" element={<NewEventPage />} />
          </Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App;
