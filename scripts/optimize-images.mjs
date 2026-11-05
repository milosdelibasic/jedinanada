import sharp from "sharp";
import { stat } from "node:fs/promises";

// Produce modern delivery formats from retained originals, without changing
// their content or the WebP fallbacks used by older browsers.
for (const name of ["recycling-hero-mobile", "recycling-hero", "materials-grid"]) {
  const source = `public/assets/redesign/${name}.webp`;
  const target = `public/assets/redesign/${name}.avif`;
  await sharp(source).avif({ quality: name.startsWith("recycling-hero") ? 32 : 48, effort: 7 }).toFile(target);
  const before = (await stat(source)).size;
  const after = (await stat(target)).size;
  console.log(`${name}: ${Math.round(before / 1024)} → ${Math.round(after / 1024)} KiB`);
}
