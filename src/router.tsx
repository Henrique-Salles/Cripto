import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Details } from "./pages/details/details";
import { NotFound } from "./pages/notfound/notfound";

const router = createBrowserRouter([
  {
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
