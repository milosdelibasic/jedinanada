import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public/assets/seo", { recursive: true });
const photo = await sharp("public/resources/gallery/14.webp").resize(490, 630, {fit: "cover"}).toBuffer();
const logo = await sharp("public/resources/logo/logo.webp").resize(104, 69).toBuffer();
for (const locale of ["sr", "hu"]) {
  const lines = locale === "sr"
    ? ["Otkup sekundarnih", "sirovina u Senti."]
    : ["Másodlagos nyersanyagok", "felvásárlása Zentán."];
  const sub = locale === "sr" ? "Metal · Plastika · Papir · Staklo" : "Fém · Műanyag · Papír · Üveg";
  const size = locale === "sr" ? 48 : 40;
  const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><g font-family="Arial, sans-serif" fill="#20392f"><text x="166" y="92" font-size="32" font-weight="700">Jedina Nada</text><text x="166" y="121" font-size="14" letter-spacing="2">${locale === "sr" ? "RECIKLAŽA · OD 2010." : "ÚJRAHASZNOSÍTÁS · 2010 ÓTA"}</text><text x="52" y="250" font-size="${size}" font-weight="700">${lines[0]}</text><text x="52" y="310" font-size="${size}" font-weight="700" fill="#63865a">${lines[1]}</text><text x="52" y="368" font-size="24">${sub}</text><rect x="52" y="428" width="324" height="66" rx="8" fill="#d5ee9c"/><text x="78" y="472" font-size="32" font-weight="700">062 178 87 81</text><text x="52" y="548" font-size="21">Karađorđeva 109 · ${locale === "sr" ? "Senta" : "Zenta"}</text><text x="52" y="584" font-size="18">jedinanada.rs</text></g></svg>`);
  await sharp({create:{width:1200,height:630,channels:3,background:"#f8f9f4"}})
    .composite([{input:photo,left:710,top:0},{input:logo,left:52,top:56},{input:overlay}])
    .jpeg({quality:88}).toFile(`public/assets/seo/share-${locale}.jpg`);
}
await import("./generate-icons.mjs");
