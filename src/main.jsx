import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { appRouter } from "./router.jsx";
import { registerI18n } from "./plugins/i18n.js";
import "./assets/css/index.css";
import "./assets/css/animations.css";
import "boxicons/css/boxicons.min.css";
import { RecoilRoot } from "recoil";

registerI18n();

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={appRouter}></RouterProvider>
  </RecoilRoot>
);
