import daisyui from 'daisyui';
import { DEFAULT_THEMES } from './src/shared/consts/daisyui.const';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: DEFAULT_THEMES,
  },
};
