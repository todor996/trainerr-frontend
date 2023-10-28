export const homeRouter = {
    path: "/",
    async lazy() {
        let { Home } = await import("./Home.page.tsx");
        return { Component: Home };
    },
    children: [],
};