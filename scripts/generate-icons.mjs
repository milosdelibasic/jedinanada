import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";

await mkdir("public/assets/seo", { recursive: true });
const source = await readFile("public/favicon.svg");
for (const [size, name] of [[96, "favicon"], [180, "apple-touch-icon"], [192, "icon-192"], [512, "icon-512"]]) {
  await sharp(source).resize(size, size).png().toFile(`public/assets/seo/${name}.png`);
}

// Include native tab sizes for browsers that request /favicon.ico directly.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + index * 16;
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
}
await writeFile("public/favicon.ico", Buffer.concat([header, ...images]));
