export const homeRoutes = {
  path: "/",
  async lazy() {
    let { Home } = await import("../pages/Home/Home.page.tsx");
    return { Component: Home };
  },
  children: [],
};
