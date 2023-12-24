import * as React from "react";

const homeRouter = {
  path: "/",
  component: React.lazy(() => import("./Home.page")),
  children: [],
};

export default homeRouter;
