import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/ui/application/Loading";

const App = lazy(() => import("./App"));
const Tickets = lazy(() => import("./pages/tickets/Tickets"));
const AddTicket = lazy(() => import("./pages/tickets/AddTicket"));

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
