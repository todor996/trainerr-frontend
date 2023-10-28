export const settingsRouter = {
    path: "/settings",
    async lazy() {
        let { Settings } = await import("./Settings.page.tsx");
        return { Component: Settings };
    },
    children: [],
};