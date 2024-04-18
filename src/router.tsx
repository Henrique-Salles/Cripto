import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Details } from "./pages/details/details";
import { NotFound } from "./pages/notfound/notfound";
import { Layout } from "./components/layout/layout";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:cripto",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
