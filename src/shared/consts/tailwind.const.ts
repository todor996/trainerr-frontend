// TODO@theme: After finishing theme functionality, remove unused consts and functions
import tailwindConfig from 'tailwindcss/defaultConfig.js';
import resolveConfig from 'tailwindcss/resolveConfig';
import daisyuiColors from 'daisyui/src/theming/themes';

export const TW_CONFIG = tailwindConfig;
export const TW_FULL_CONFIG = resolveConfig(tailwindConfig);

export const DAISYUI_COLORS = daisyuiColors;
