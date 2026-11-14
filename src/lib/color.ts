export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

export function rgbToHex([r, g, b]: number[]): string {
  return '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
}

function linearize(c: number) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function relativeLuminance([r, g, b]: number[]): number {
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

export function contrastRatio(a: number[], b: number[]): number {
  const [l1, l2] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

// Darkens a hex color by a fixed step until it clears minRatio against
// `against`, giving up after a bounded number of steps rather than
// looping forever on a color that can never get there.
export function darkenUntilContrast(hex: string, against: number[], minRatio = 4.5): string {
  let rgb = hexToRgb(hex);
  for (let i = 0; i < 60 && contrastRatio(rgb, against) < minRatio; i++) {
    rgb = rgb.map((c) => c * 0.95) as [number, number, number];
  }
  return rgbToHex(rgb);
}
