import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin';

const shouldExtract = process.env.EXTRACT === '1';

const tamaguiConfig = {
  components: ['tamagui'],
  config: 'src/tamagui.config.ts',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    eslintPlugin(),
    tsconfigPaths(),
    VitePWA({ registerType: 'autoUpdate' }),
    svgr(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ],
  base: process.env.NODE_ENV === 'production' ? '/trainerr-frontend/' : '/',
});
