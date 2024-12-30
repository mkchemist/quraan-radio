import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/Home/HomePage";

import RadiosList from "./pages/Radios/RadiosList";
import Tadabor from "./pages/Tadabor/Tadabor";

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/radios",
          element: <RadiosList />,
        },
        {
          path: "/tadabor",
          element: <Tadabor />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
