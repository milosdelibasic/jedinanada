# Jedina Nada — redizajn, septembar 2026.

Novi izgled koristi toplu belu pozadinu, tamnozelenu i svetlu limetu, lokalno učitan Manrope font i originalni logo firme. Početna strana, navigacija, galerija i kontakt prilagođeni su računaru, tabletu i telefonu, na srpskom i mađarskom jeziku.

## Fotografije

Nove ilustrativne fotografije generisane su ugrađenim imagegen alatom. Fotografije stvarne firme i dvorišta ostale su u delu „O nama” i galeriji.

- `public/assets/redesign/recycling-hero.webp` — naslovna fotografija, 1536 px.
- `public/assets/redesign/recycling-hero-mobile.webp` — optimizovana verzija naslovne fotografije, 768 px.
- `public/assets/redesign/materials-grid.webp` — četiri grupe materijala, prikazane kroz pojedinačne kadrove u karticama.

Naslovna fotografija koristi različite rezolucije u zavisnosti od veličine prikaza. Izvorni generisani fajlovi sačuvani su u direktorijumu Codex generated_images; optimizovane slike koje sajt koristi nalaze se u ovom projektu.

### Prompt za naslovnu fotografiju

Use case: photorealistic-natural. Asset type: editorial hero photograph for a sophisticated Serbian recycling and scrap buying business website. Create a premium, tactile, genuinely photographic image of tightly compressed rectangular bales of used aluminum cans and recyclable metal stacked in a sculptural staggered arrangement, with an adjacent compact bale of translucent green and clear PET plastic bottles. Close three-quarter perspective, cropped intimate view emphasizing silver crushed metal textures with subdued emerald green, tiny warm copper details and natural imperfections. Outdoor recycling materials in beautiful warm late-afternoon side light, pale warm concrete floor, background softly out of focus with subtle leafy trees and industrial surroundings. Subject fills most of frame; clean ordered composition, premium architectural editorial photography, realistic, calm, optimistic circular economy aesthetic. Landscape 3:2 image. No people, no legible text, no graphics, no typography, no logos, no watermark. This represents recycling materials, not a specific named business premises.

### Prompt za fotografije materijala

Use case: product-mockup. Asset type: four coordinated photographic material-category images on a single 2-by-2 contact sheet for a premium recycling website. Exact equal four quadrant grid, no gutters, no dividing lines, NO TEXT. Each square is its own independent beautiful editorial still life with centered objects and generous space around them on a warm off-white light gray studio floor and background, soft directional sunlight, tactile realism. TOP LEFT: a small pile of crumpled clear and pale green PET plastic bottles without labels, two loose green bottle caps. TOP RIGHT: an elegant still life of short bundled copper tubes, several pieces of silver aluminum profile and a curled strip of steel. BOTTOM LEFT: a compact stack of folded brown corrugated cardboard and old folded newspapers, tied with natural twine, no legible words. BOTTOM RIGHT: three green and amber used glass bottles and one clear glass jar, without labels, with glass reflections. Same warm neutral backdrop in each quadrant, same scale, premium catalog art direction, photographic not illustration. Each composition entirely within its own quadrant. Objects isolated against background, no edges of objects cut off. Output square image, 2x2 grid.

## Provera

- Uspešna produkciona izrada svih stranica i postojećih statičkih putanja.
- Provera širina 320, 375, 390, 768, 1024, 1120, 1280 i 1440 px kroz srpsku i mađarsku verziju.
- Mobilni meni: otvaranje, zatvaranje i navigacija do kontakta.
- Galerija: otvaranje, sledeća fotografija, zatvaranje tasterom Escape i vraćanje fokusa.
- Česta pitanja: otvaranje odgovora i ažuriranje pristupačnog stanja.
- Telefon, email, upiti za konkretne materijale i mapa koriste postojeće poslovne podatke.

Pregled: `npm run dev`. Produkciona izrada: `npm run build`. Izlaz za statički hosting nalazi se u `out/`.

## Dorade nakon komentara

Vraćen originalni logo u zaglavlje i podnožje. Naslov precizira otkup sekundarnih sirovina u Senti. Materijali su prikazani u vertikalnim listama, fotografije galerije imaju jednaku visinu, a dekorativne kružne strelice i inicijali NC su uklonjeni. Približene su ikonice tekstu, optički poravnate oznake sekcija i dodate centrirane SVG kontrole za FAQ.
