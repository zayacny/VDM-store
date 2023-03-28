import { createBrowserRouter } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import AdminPanel from "./routes/AdminPanel";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieDescription/>,
      errorElement: <div><h1>Wrong way !  Todo error page</h1></div>,
      // action: someActionFunction,
      // loader: someLoaderFunction,
      // children: [
      //   {
      //     path: "contacts/:contactId",
      //     element: <Contact />,
      //     action: someActionFunction,
      //     loader: someLoaderFunction,
      //   },
      // ],
    },
    {
      path: "/admin",
      element: <AdminPanel/>,
    }
  ]);

export default router;

