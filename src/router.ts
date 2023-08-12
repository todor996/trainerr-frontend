import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let { Home } = await import("./pages/Home/Home.page.tsx");
      return { Component: Home };
    },
  },
  {
    path: "/about",
    async lazy() {
      let { About } = await import("./pages/About/About.page.tsx");
      return { Component: About };
    },
  },
]);
