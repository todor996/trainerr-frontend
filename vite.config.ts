import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import eslintPlugin from "vite-plugin-eslint";

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
  ],
});
