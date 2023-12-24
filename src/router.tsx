import { Outlet, createBrowserRouter } from "react-router-dom";
import homeRouter from "./modules/home/Home.router";
import settingsRouter from "./modules/settings/Settings.router";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Outlet />,
      children: [homeRouter, settingsRouter],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/trainerr-frontend/",
  }
);

export default router;
