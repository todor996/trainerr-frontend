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
