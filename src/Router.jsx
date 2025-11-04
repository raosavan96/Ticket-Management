import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/ui/application/Loading";

const App = lazy(() => import("./App"));
const Tickets = lazy(() => import("./pages/tickets/Tickets"));
const AddTicket = lazy(() => import("./pages/tickets/AddTicket"));
const View = lazy(() => import("./pages/tickets/ticketPage/View"));
const HqPage = lazy(() => import("./pages/tickets/ticketPage/HqPage"));
const DraggableTextBox = lazy(() => import("./pages/draggableTextBox/DraggableTextBox"));

const Router = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading name={'App'}/>}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: "tickets",
          element: (
            <Suspense fallback={ <Loading name={'Tickets'}/>}>
              <Tickets />
            </Suspense>
          ),
          children: [
            {
              path: "add-ticket",
              element: (
                <Suspense fallback={<Loading name={'Add Ticket'}/>}>
                  <AddTicket />
                </Suspense>
              ),
            },
            {
              path: "view",
              element: (
                <Suspense fallback={<Loading name={'Add Ticket'}/>}>
                  <View />
                </Suspense>
              ),
            },
            {
              path: "",
              element: (
                <Suspense fallback={<Loading name={'Add Ticket'}/>}>
                  <HqPage />
                </Suspense>
              ),
            },
            {
              path: "drag-box",
              element: (
                <Suspense fallback={<Loading name={'Add Ticket'}/>}>
                  <DraggableTextBox />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading name={'Page'}/>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Router;
