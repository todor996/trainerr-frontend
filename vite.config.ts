import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import eslintPlugin from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// TODO@pavle: Enable PWA
// TODO@pavle: Add aliases
//   plugins: [svgr(), react(), VitePWA({ registerType: "autoUpdate" })],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    eslintPlugin(),
    tsconfigPaths(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  base: process.env.NODE_ENV === "production" ? "/trainerr-frontend/" : "/",
});
