import { DAISYUI_COLORS } from '@shared/consts/tailwind.const';
import { Theme } from 'daisyui';
import { formatHex } from 'culori';

export function getHexColor({ color, theme }: { color: string; theme?: Theme }): string {
  if (!theme) {
    return formatHex(color) || color;
  }

  const daisyColor = DAISYUI_COLORS[theme][color];
  const hex = daisyColor ? formatHex(daisyColor) : formatHex(color);

  return hex || color;
}
