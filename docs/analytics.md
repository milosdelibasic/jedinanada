# Analitika poseta

Sajt koristi Firebase Analytics / Google Analytics 4 za projekat `jedina-nada-5e8fb`, sa measurement ID-em `G-Q3JBV9T4HH`.

Analitika se pokreće u pregledaču na svim stranicama, uključujući srpsku i mađarsku verziju i galeriju. Isključena je u razvojnom režimu i na localhost adresama kako lokalne provere ne bi ulazile u statistiku. U nepodržanim pregledačima ili kada je analitika blokirana, sajt nastavlja normalno da radi.

SDK automatski beleži posete, sesije i preglede stranica. Ne šaljemo dodatne ručne `page_view` događaje da ne bi došlo do dupliranja. Za praćenje navigacije bez ponovnog učitavanja, u GA4 web stream-u treba da ostane uključeno **Enhanced measurement → Page views → Page changes based on browser history events** (podrazumevano uključeno).

## Gde gledati posete

1. Otvoriti [Firebase projekat](https://console.firebase.google.com/project/jedina-nada-5e8fb/overview) i odabrati **Analytics**, ili otvoriti povezani projekat u [Google Analytics](https://analytics.google.com/).
2. U **Realtime** proveriti da li se pojavljuju posete nakon objave sajta.
3. U **Reports → Engagement → Pages and screens** pogledati preglede pojedinačnih stranica.
4. U **Reports → Acquisition → Traffic acquisition** pogledati izvore poseta.

Za proveru posle objave otvoriti sajt bez blokatora analitike, obići početnu, galeriju i mađarsku verziju i proveriti događaje `page_view` u Realtime izveštaju.

## Klikovi za kontakt

Svi linkovi za telefon i email, uključujući zaglavlje, podnožje, mobilnu traku i kartice materijala na oba jezika, šalju događaje:

- `phone_click` — klik na telefonski link (`tel:`).
- `email_click` — klik na email link (`mailto:`).
- `directions_click` — klik na link „Kako do nas” / „Útvonaltervezés” ili adresu koja otvara Google Maps.

Uz događaj šaljemo `contact_method` (`phone`, `email` ili `directions`), `page_path` i `link_location` (zaglavlje, podnožje, mobilna traka ili ID sekcije). Ne šaljemo adresu, broj telefona, predmet, sadržaj emaila ili parametre adrese. Linkovi i dalje odmah otvaraju odgovarajuću aplikaciju.

U **Realtime → Event count by Event name** može se proveriti prijem događaja. U redovnom izveštaju **Events** broj događaja pokazuje broj klikova, a **Total users** broj korisnika koji su kliknuli; jedan korisnik može kliknuti više puta. To su pokušaji kontakta, ne potvrđeni pozivi ili poslati emailovi.

Dokumentacija: [Firebase Analytics za web](https://firebase.google.com/docs/analytics/web/get-started), [automatsko praćenje pregleda stranica](https://developers.google.com/analytics/devguides/collection/ga4/views).
