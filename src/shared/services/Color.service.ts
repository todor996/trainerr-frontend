export interface ColorSystem {
  base: ColorPalette[];

  primary: ColorPalette[];
  secondary: ColorPalette[];
  accent: ColorPalette[];
  neutral: ColorPalette[];
  info: ColorPalette[];
  success: ColorPalette[];
  warning: ColorPalette[];
  error: ColorPalette[];
}

export interface ColorPalette {
  name: string;
  color: string;
  colorContrast: string;
  variants: string[];
}

// #############################################################################
// #region Helpers

/**
 *
 * Returns array with lighter and darker colors based on the input color
 * Colors go from lightest to darkest
 * Base color is in the middle (baseColorIndex = lightCount)
 *
 */
export function generateColors({
  color,
  lightCount = 5,
  darkCount = 5,
}: {
  color: string;
  lightCount: number;
  darkCount: number;
}): string[] {
  // Helper function to convert hex color to RGB
  function hexToRgb(hex: string): [number, number, number] {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  // Helper function to convert RGB color to hex
  function rgbToHex(r: number, g: number, b: number): string {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
  }

  // Function to lighten a color
  function lighten(r: number, g: number, b: number, factor: number): string {
    const newR = Math.min(Math.round(r + factor * (255 - r)), 255);
    const newG = Math.min(Math.round(g + factor * (255 - g)), 255);
    const newB = Math.min(Math.round(b + factor * (255 - b)), 255);
    return rgbToHex(newR, newG, newB);
  }

  // Function to darken a color
  function darken(r: number, g: number, b: number, factor: number): string {
    const newR = Math.max(Math.round(r - factor * r), 0);
    const newG = Math.max(Math.round(g - factor * g), 0);
    const newB = Math.max(Math.round(b - factor * b), 0);
    return rgbToHex(newR, newG, newB);
  }

  // Convert the base color to RGB format
  const [baseR, baseG, baseB] = hexToRgb(color);

  // Arrays to hold the lighter and darker colors
  const lighterColors: string[] = [];
  const darkerColors: string[] = [];

  // Generate lighter colors
  for (let i = 1; i <= lightCount; i++) {
    const factor = i / (lightCount + 1);
    lighterColors.push(lighten(baseR, baseG, baseB, factor));
  }

  // Generate darker colors
  for (let i = 1; i <= darkCount; i++) {
    const factor = i / (darkCount + 1);
    darkerColors.push(darken(baseR, baseG, baseB, factor));
  }

  // Combine the arrays: lighter colors, base color, and darker colors
  const sortedColors = [...lighterColors.reverse(), color, ...darkerColors];

  return sortedColors;
}

// #endregion Helpers
// #############################################################################

export class ColorService {
  system: ColorSystem;
  tokens: Record<string, string>;

  static generateVariants(color: string, lightCount = 5, darkCount = 5): string[] {
    return generateColors({ color, lightCount, darkCount });
  }

  static generatePalette(color: string, name: string): ColorPalette {
    const variants = ColorService.generateVariants(color);

    return {
      name,
      color: variants[5],
      colorContrast: variants[1], // TODO@ceut: Use Ceut contrast function
      variants,
    };
  }

  static generateTokens(colorPalette: ColorPalette): Record<string, string> {
    const tokens = {};

    tokens[colorPalette.name] = colorPalette.color;
    tokens[`${colorPalette.name}-contrast`] = colorPalette.colorContrast;

    colorPalette.variants.forEach((variant, index) => {
      tokens[`${colorPalette.name}-${(index + 1) * 100}`] = variant;
    });

    return tokens;
  }

  /**
   * Generates tokens based on the color system
   *
   * eg.
   * tokens = [
   *  primary: #65c3c8,
   *  primary-contrast: #e5f5f6,
   *  primary-100: #e5f5f6,
   *  primary-200: #c1e4e8,
   *  ...
   *  primary-1000: #00403f,
   *  primary-1100: #002d2c,
   *
   *  secondary: #65c3c8,
   *  secondary-contrast: #e5f5f6,
   *  secondary-100: #e5f5f6,
   *  secondary-200: #c1e4e8,
   *  ...
   * ]
   *
   *
   */
  generateAllTokens(system: ColorSystem): Record<string, string> {
    const tokens = {};

    Object.entries(system).forEach(([key, colorPalette]) => {
      const colorPaletteTokens = ColorService.generateTokens(colorPalette);

      tokens[key] = colorPaletteTokens;
    });

    return tokens;
  }
}

/**
 * Ovako neki flow
 *
 * // Cuvamo colorSystem u store-u
 *
 * 1. User unese boju, mi sacuvamo paletu boja u colorSystem
 *
 * // Input => color => Output => ColorPalette
 * ```
 *  store.colorSystem[colorName] = ColorService.generatePalette(color, colorName);
 * ```
 *
 * 2. Promenimo color tokene u real-time-u (valjda moze?), user vidi boje u aplikaciji
 *
 * ```
 *  store.tokens = ColorService.generateAllTokens(store.colorSystem);
 *  tamagui.setColorTokens(store.tokens);
 * ```
 *
 * 3. Kad u user udari submit, sacuvamo colorSystem, a moze i tokene u bazu
 */
