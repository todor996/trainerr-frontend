/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import { DEFAULT_THEMES } from './src/shared/consts/daisyui.const';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
