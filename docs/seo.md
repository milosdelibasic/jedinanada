# SEO — priprema za objavu

## Urađeno u projektu

- Jedinstveni naslovi sa lokalnom namerom: „Otkup sekundarnih sirovina Senta | Jedina Nada” i odgovarajući mađarski naslov. Uklonjeno dupliranje naziva firme iz Next.js title template-a.
- Posebni opisi početne strane i galerije na oba jezika, sa stvarnim materijalima, lokacijom i kontaktom.
- Samoreferentni canonical URL-ovi i uzajamni `sr`, `hu`, `x-default` alternates u HTML-u i sitemap-u.
- Ažuriran sitemap sa stvarnim datumom izmene sadržaja i fotografijama. Datum menjati samo prilikom izmene sadržaja, ne automatski na svakom buildu.
- Robots dozvoljava indeksiranje i učitavanje CSS-a, JavaScript-a i slika; sadrži adresu sitemap-a.
- Jedan povezan JSON-LD graf po stranici: lokalna firma/reciklažni centar, sajt, stranica, navigaciona putanja i katalog usluga. Uklonjena nepotvrđena cenovna kategorija i netačan odnos matične i zavisne firme.
- Stvarna adresa, telefon, radno vreme, godina osnivanja i fotografije dvorišta. Nema izmišljenih ocena, recenzija ili cena.
- FAQ o ceni i pripremi materijala na oba jezika. JSON-LD odgovori odgovaraju tekstu stranice; ne predstavljamo FAQ kao obećanje posebnog prikaza u Google rezultatima.
- Novi prikazi za deljenje (1200×630), zasebno srpski i mađarski, sa originalnim logotipom i stvarnom fotografijom dvorišta.
- Kvadratni favicon i Apple/PWA ikonice izvedeni iz originalnog logotipa.
- Bezbedna JSON-LD serijalizacija: `<` se escape-uje da sadržaj ne može prekinuti script tag.
- Stare `.html` putanje ostaju dostupne sa canonical oznakama ka novim URL-ovima.
- Prerenderovan sadržaj i metadata postoje u statičkom HTML-u. Mađarski `html lang` proverava se posle obavezne postbuild obrade.

## Provera

Pokrenuti `npm run check:seo`. Komanda gradi sajt, izvršava postbuild i proverava izvezeni HTML za sve četiri stranice: jedan tačan naslov i H1, description, canonical, recipročne jezike, indeksiranje, OG URL/sliku, JSON-LD reference, poslovne podatke, vidljive FAQ odgovore i lokalne resurse. Proverava i sitemap, robots, dimenzije slika i canonical URL-ove starih putanja.

`node scripts/generate-social-images.mjs` ponovo generiše kartice za deljenje i ikonice.

Prilikom objave koristiti ceo `out/` nakon `npm run build`, a ne stare korenske HTML fajlove niti dev server. Provere su lokalne, na produkcionom exportu; ovo nije Google Rich Results Test ni merenje stvarnih korisničkih Core Web Vitals podataka.

## Podešavanje pri deployu

1. Preferirani produkcioni origin ostaje `https://jedinanada.rs`. Ako se promeni, postaviti `NEXT_PUBLIC_SITE_URL` pre builda. Ne graditi produkcionu verziju sa localhost ili privremenim preview domenom kao canonical origin-om.
2. Na izabranom hostingu podesiti trajna preusmerenja HTTP → HTTPS i www → preferirani host, bez lanaca i petlji.
3. Gde hosting podržava redirect pravila, postaviti 301: `/index.html` → `/`, `/gallery.html` → `/gallery/`, `/hu.html` → `/hu/`, `/hu/gallery.html` → `/hu/gallery/`, kao i direktne `/.../index.html` putanje na odgovarajuću čistu putanju. Ne preusmeravati sve nepoznate URL-ove na početnu; moraju vratiti stvaran 404.
4. Proveriti da preview zaštita ili `X-Robots-Tag: noindex` nisu ostali na produkciji. Privremeni preview zaštititi od indeksiranja kroz hosting.
5. Po objavi proveriti HTTP status, canonical, hreflang, robots i sitemap na javnom domenu sa običnim i Googlebot zahtevom. Pokrenuti Google Rich Results Test za lokalnu firmu i PageSpeed Insights na novoj javnoj verziji.
6. U Search Console potvrditi domen i poslati `https://jedinanada.rs/sitemap.xml`. Ako se koristi HTML potvrda vlasništva, `GOOGLE_SITE_VERIFICATION` je podržan kao build promenljiva. DNS potvrda ne zahteva izmenu koda. Za Bing je opciono podržan `BING_SITE_VERIFICATION`. Nijedan token nije izmišljen niti postavljen.
7. U Google Business Profile-u povezati isti sajt i uskladiti naziv, adresu, telefon i radno vreme. Dodavati stvarne fotografije i tražiti autentične recenzije. To se radi kroz nalog vlasnika firme, odvojeno od deploya sajta.

## Zvanične smernice

- [Google: LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: višejezične stranice](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google: smernice za strukturirane podatke](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Schema.org: RecyclingCenter](https://schema.org/RecyclingCenter)
