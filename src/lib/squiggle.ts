// A deterministic 0-1 value per string, so each hand-drawn stroke gets
// its own wave instead of one shape stamped out everywhere it's used —
// enough variation to read as drawn by hand, not randomized on every
// build (same seed in, same path out).
function seedFrom(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

// A short hand-inked squiggle in a 0 0 24 10 viewBox, meant to be run
// through the sketch-wobble-small SVG filter for the loose-ink finish.
export function squigglePath(seed: string) {
  const a = seedFrom(seed);
  const b = seedFrom(`${seed}-b`);
  const c = seedFrom(`${seed}-c`);
  const sign = a > 0.5 ? 1 : -1;
  const amp = 0.5 + b * 0.6; // 0.5–1.1, just enough to notice
  const qx = 6.5 + c * 2; // 6.5–8.5
  const y0 = 5.15 + (a - 0.5) * 0.3;
  const qy = 5 - sign * amp;
  const y1 = 5 + sign * amp * 0.55;
  const y2 = 5 - sign * amp * 0.25;
  return `M2 ${y0.toFixed(2)}Q${qx.toFixed(1)} ${qy.toFixed(2)} 11 ${y1.toFixed(2)}T20 ${y2.toFixed(2)}`;
}
