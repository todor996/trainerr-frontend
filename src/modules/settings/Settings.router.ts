import * as React from "react";

const settingsRouter = {
  path: "/settings",
  component: React.lazy(() => import("./Settings.page")),
  children: [],
};

export default settingsRouter;
