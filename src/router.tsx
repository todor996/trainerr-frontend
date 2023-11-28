import { Outlet, createBrowserRouter } from "react-router-dom";
import { homeRouter } from "./modules/Home/Home.router";
import { settingsRouter } from "./modules/Settings/Settings.router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [homeRouter, settingsRouter],
  },
]);
