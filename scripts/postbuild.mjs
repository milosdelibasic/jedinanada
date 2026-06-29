import { copyFile, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const aliases = [
  ["out/gallery/index.html", "out/gallery.html"],
  ["out/hu/index.html", "out/hu.html"],
  ["out/hu/gallery/index.html", "out/hu/gallery.html"]
];

for (const [source, target] of aliases) {
  if (existsSync(source)) {
    await copyFile(source, target);
  }
}

const hungarianPages = ["out/hu/index.html", "out/hu.html", "out/hu/gallery/index.html", "out/hu/gallery.html"];

for (const page of hungarianPages) {
  if (existsSync(page)) {
    const html = await readFile(page, "utf8");
    await writeFile(page, html.replace("<html lang=\"sr\">", "<html lang=\"hu\">"));
  }
}
