export const aboutRoutes = {
  path: "/about",
  async lazy() {
    let { About } = await import("../pages/About/About.page.tsx");
    return { Component: About };
  },
  children: [],
};
