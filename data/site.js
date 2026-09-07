export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://jedinanada.rs").replace(/\/$/, "");
export const siteName = "Jedina Nada DOO";

export const cleanRoutes = {
  sr: {
    home: "/",
    gallery: "/gallery/"
  },
  hu: {
    home: "/hu/",
    gallery: "/hu/gallery/"
  }
};

export const business = {
  name: siteName,
  legalName: "Jedina Nada DOO Senta",
  address: "Karađorđeva 109, 24400 Senta",
  phone: "+381621788781",
  phoneDisplay: "062 178 87 81",
  email: "jedinanada.nc@gmail.com",
  facebook: "https://facebook.com/pages/category/Company/DOO-Jedina-Nada-reciklaza-305049839618844/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Kara%C4%91or%C4%91eva%20109%2C%2024400%20Senta",
  person: "Nada Cvijanović",
  founded: "2010",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.853178241099!2d20.094086600832522!3d45.914245211800015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDU0JzUxLjMiTiAyMMKwMDUnNDMuNCJF!5e0!3m2!1ssr!2srs!4v1618260878952!5m2!1ssr!2srs",
  coordinates: {
    latitude: 45.914245,
    longitude: 20.095389
  }
};

const absoluteUrl = (path = "/") => `${siteUrl}${path}`;
const pageRouteKey = (page) => (page === "gallery" ? "gallery" : "home");
const pageTitle = (content, page) => (page === "gallery" ? content.meta.galleryTitle : content.meta.homeTitle);
const pageDescription = (content, page) => (page === "gallery" ? content.meta.galleryDescription : content.meta.homeDescription);
const pageKeywords = (content, page) => (page === "gallery" ? content.meta.galleryKeywords : content.meta.homeKeywords);

export const galleryImages = [
  [1, 1536, 2048],
  [2, 960, 540],
  [3, 720, 960],
  [4, 2048, 1152],
  [5, 1536, 2048],
  [6, 1152, 2048],
  [7, 1152, 2048],
  [8, 1152, 2048],
  [9, 2048, 1152],
  [10, 960, 720],
  [11, 960, 720],
  [12, 720, 960],
  [13, 960, 720],
  [14, 2048, 1152],
  [15, 1152, 2048],
  [16, 720, 960],
  [17, 900, 1600],
  [18, 1080, 1440],
  [19, 900, 1600],
  [20, 900, 1600],
  [21, 900, 1600],
  [22, 900, 1600]
].map(([id, width, height]) => ({
  id,
  width,
  height,
  thumb: `/assets/gallery/thumbs/${id}.webp`,
  fullWebp: `/resources/gallery/${id}.webp`,
  fullJpg: `/resources/gallery/${id}.jpg`
}));

const common = {
  navIds: ["services", "process", "about", "gallery", "recycling", "faq", "contact"]
};

export const locales = {
  sr: {
    ...common,
    lang: "sr",
    alternateLang: "HU",
    alternateHref: cleanRoutes.hu.home,
    galleryAlternateHref: cleanRoutes.hu.gallery,
    homeHref: cleanRoutes.sr.home,
    galleryHref: cleanRoutes.sr.gallery,
    meta: {
      homeTitle: "Jedina Nada DOO Senta - Otkup i reciklaža neopasnog otpada",
      galleryTitle: "Galerija - Jedina Nada DOO Senta",
      homeDescription:
        "Jedina Nada DOO iz Sente vrši otkup, preradu i reciklažu sekundarnih sirovina i neopasnog otpada: plastike, metala, stakla i papira.",
      galleryDescription:
        "Pogledajte galeriju firme Jedina Nada DOO iz Sente, preduzeća za otkup i reciklažu neopasnog otpada.",
      homeKeywords: [
        "Jedina Nada DOO",
        "reciklaža Senta",
        "otkup sekundarnih sirovina",
        "otkup plastike",
        "otkup metala",
        "otkup papira",
        "otkup stakla",
        "neopasan otpad"
      ],
      galleryKeywords: [
        "Jedina Nada galerija",
        "reciklažno dvorište Senta",
        "sekundarne sirovine fotografije",
        "otkup otpada Senta"
      ]
    },
    nav: {
      home: "Početna",
      about: "O nama",
      services: "Otkup",
      process: "Kako do otkupa",
      gallery: "Galerija",
      recycling: "Značaj reciklaže",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Reciklaža i sekundarne sirovine u Senti",
      title: "Otkup sekundarnih sirovina u Senti.",
      text:
        "Otkupljujemo metal, plastiku, papir i staklo od građana i firmi. Pozovite nas za uslove otkupa i dogovor o prijemu.",
      imageAlt: "Utovar metala u dvorištu firme Jedina Nada DOO",
      vanAlt: "Vozilo firme Jedina Nada DOO za otkup i reciklažu",
      photoLabel: "Otkup · sortiranje · priprema",
      primary: "Šta otkupljujemo?",
      secondary: "Pozovite nas",
      stats: [
        { icon: "/vectors/calendar.svg", value: "Od 2010.", label: "iskustvo u reciklaži" },
        { icon: "/vectors/materials.svg", value: "Širok otkup", label: "plastika, metali, papir, staklo i više" },
        { icon: "/vectors/location.svg", value: "Senta i okolina", label: "saradnja sa građanima i firmama" }
      ]
    },
    about: {
      eyebrow: "Upoznajte Jedinu Nadu",
      title: "Iz Sente. Za čistije sutra.",
      paragraphs: [
        "Naša priča počinje 2010. godine u Senti. Od tada pomažemo građanima i firmama da materijalima koje više ne koriste pronađu novu svrhu.",
        "Iza Jedine Nade stoje ljudi koji veruju u jasan dogovor i odgovoran rad. Preduzeće vodi Nada Cvijanović, a poverenje gradimo kroz svakodnevnu saradnju sa našim komšijama i poslovnim partnerima.",
        "Na adresi Karađorđeva 109 otkupljujemo, sortiramo i pripremamo neopasan otpad za dalju preradu. Lokalno radimo. Dugoročno razmišljamo.",
        "Neopasni otpad je svaki otpad koji nema karakteristike opasnog otpada, uključujući plastične i staklene boce, papir, plastiku, gvožđe i tekstil."
      ],
      facts: [
        {
          icon: "/vectors/materials.svg",
          title: "Otkup sekundarnih sirovina",
          text: "Jasan dogovor i prijem različitih vrsta neopasnog otpada."
        },
        {
          icon: "/vectors/recycling-prepare.svg",
          title: "Priprema za reciklažu",
          text: "Sortiranje i priprema materijala za dalju preradu."
        },
        {
          icon: "/vectors/citizens-business.svg",
          title: "Rad sa građanima i firmama",
          text: "Praktična saradnja sa domaćinstvima, preduzetnicima i kompanijama."
        },
        {
          icon: "/vectors/woman-led.svg",
          title: "Firma koju vodi žena",
          text: "Direktorka Nada Cvijanović vodi poslovanje i svakodnevnu organizaciju."
        }
      ]
    },
    services: {
      eyebrow: "Šta otkupljujemo",
      title: "Za vas višak. Za nas sirovina.",
      text: "Plastika, metali, papir i staklo. Javite nam vrstu i količinu materijala da proverimo uslove otkupa.",
      ask: "Pitajte za ovaj materijal",
      items: [
        {
          key: "plastic",
          title: "Plastika",
          icon: "/vectors/plastic.svg",
          items: ["PET ambalaža", "Čepovi", "Stolice", "Stolovi", "Kofe", "Gajbe"]
        },
        {
          key: "metal",
          title: "Metal",
          icon: "/vectors/metal.svg",
          items: ["Gvožđe", "Čelik", "Bakar", "Mesing", "Aluminijum", "Prohrom", "Olovo"]
        },
        {
          key: "glass",
          title: "Staklo",
          icon: "/vectors/glass.svg",
          items: ["Staklene flaše", "Staklene tegle", "Prozori", "Slomljeno staklo", "Ostale vrste stakala"]
        },
        {
          key: "paper",
          title: "Papir",
          icon: "/vectors/paper.svg",
          items: ["Papir", "Arhivski papir", "Karton", "Knjige", "Sveske", "Novine"]
        }
      ]
    },
    process: {
      eyebrow: "Jednostavan dogovor",
      title: "Jednostavno do dogovora.",
      text:
        "Bez komplikovanja. U tri koraka materijal koji vam više nije potreban kreće ka novoj nameni.",
      cta: "Pozovite i proverite materijal",
      items: [
        {
          icon: "/vectors/contact-person.svg",
          title: "Javite nam šta imate",
          text: "Telefonom ili emailom nam opišite vrstu i približnu količinu materijala."
        },
        {
          icon: "/vectors/recycling-buy.svg",
          title: "Dogovorimo otkup",
          text: "Potvrđujemo da li materijal otkupljujemo i dogovaramo praktičan način prijema."
        },
        {
          icon: "/vectors/recycling-prepare.svg",
          title: "Dajemo novu svrhu",
          text: "Primljeni materijal razvrstavamo i pripremamo za sledeću fazu reciklaže."
        }
      ]
    },
    recycling: {
      eyebrow: "Značaj reciklaže",
      title: "Reciklaža čuva resurse i smanjuje otpad na deponijama.",
      text:
        "Svaki materijal koji vratimo u upotrebu znači manje otpada u prirodi i manju potrebu za novim sirovinama. Velike promene počinju malim, lokalnim koracima.",
      imageAlt: "Balirane PET boce pripremljene za dalju reciklažu",
      imageBadge: "Pripremljeno za dalju reciklažu",
      points: [
        "Smanjuje potrošnju prirodnih resursa poput vode, minerala, nafte i šuma.",
        "Čuva prirodna staništa jer smanjuje potrebu za sečom šuma i vađenjem novih sirovina.",
        "Smanjuje zagađenje vode, zemlje i vazduha jer manje otpada završava u prirodi.",
        "Štedi energiju, naročito kod materijala kao što su aluminijum i papir."
      ]
    },
    gallery: {
      title: "Galerija",
      eyebrow: "Iz našeg dvorišta",
      text: "Pogledajte fotografije prostora, materijala i rada preduzeća Jedina Nada DOO.",
      open: "Otvori fotografiju",
      openGallery: "Sve fotografije",
      photoCount: "Fotografija",
      close: "Zatvori",
      previous: "Prethodna",
      next: "Sledeća",
      previewAlt: "Sekundarne sirovine pripremljene za transport",
      imageAlt: "Jedina Nada DOO reciklaža, fotografija"
    },
    faq: {
      eyebrow: "Česta pitanja",
      title: "Dobro je znati.",
      items: [
        {
          question: "Koje materijale otkupljujete?",
          answer:
            "Otkupljujemo plastiku, metale, papir, staklo i druge sekundarne sirovine. Za konkretan materijal najbolje je da nas kontaktirate direktno."
        },
        {
          question: "Da li radite sa građanima i firmama?",
          answer: "Da. Sarađujemo sa građanima, domaćinstvima, preduzetnicima i firmama iz Sente, okoline i drugih delova Srbije."
        },
        {
          question: "Gde se nalazi Jedina Nada DOO?",
          answer: "Nalazimo se na adresi Karađorđeva 109, 24400 Senta."
        },
        {
          question: "Koje je radno vreme?",
          answer: "Radimo od ponedeljka do petka od 07:00 do 15:00, subotom od 07:00 do 12:00, a nedeljom ne radimo."
        }
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Imate sirovine? Čujemo se.",
      details: "Kontakt podaci",
      addressLabel: "Adresa",
      personLabel: "Kontakt osoba",
      hoursLabel: "Radno vreme",
      hours: [
        { label: "Ponedeljak - Petak", value: "07:00 - 15:00" },
        { label: "Subota", value: "07:00 - 12:00" },
        { label: "Nedelja", value: "neradna" }
      ],
      call: "Pozovi",
      email: "Pošalji email"
    },
    footer: {
      navigation: "Navigacija",
      copyright: "Sva prava zadržana."
    }
  },
  hu: {
    ...common,
    lang: "hu",
    alternateLang: "SR",
    alternateHref: cleanRoutes.sr.home,
    galleryAlternateHref: cleanRoutes.sr.gallery,
    homeHref: cleanRoutes.hu.home,
    galleryHref: cleanRoutes.hu.gallery,
    meta: {
      homeTitle: "Jedina Nada DOO Zenta - Újrahasznosítás",
      galleryTitle: "Galéria - Jedina Nada DOO Zenta",
      homeDescription:
        "A zentai Jedina Nada DOO másodlagos nyersanyagok és nem veszélyes hulladék felvásárlásával, feldolgozásával és újrahasznosításával foglalkozik.",
      galleryDescription:
        "Tekintse meg a zentai Jedina Nada DOO galériáját, a nem veszélyes hulladék felvásárlásával és újrahasznosításával foglalkozó vállalkozást.",
      homeKeywords: [
        "Jedina Nada DOO",
        "újrahasznosítás Zenta",
        "másodlagos nyersanyagok felvásárlása",
        "műanyag felvásárlás",
        "fém felvásárlás",
        "papír felvásárlás",
        "üveg felvásárlás",
        "nem veszélyes hulladék"
      ],
      galleryKeywords: [
        "Jedina Nada galéria",
        "újrahasznosító telephely Zenta",
        "másodlagos nyersanyagok fotók",
        "hulladékfelvásárlás Zenta"
      ]
    },
    nav: {
      home: "Kezdőlap",
      about: "Rólunk",
      services: "Felvásárlás",
      process: "Az átvétel menete",
      gallery: "Galéria",
      recycling: "Az újrahasznosítás",
      faq: "FAQ",
      contact: "Kapcsolat"
    },
    hero: {
      eyebrow: "Újrahasznosítás és másodlagos nyersanyagok Zentán",
      title: "Másodlagos nyersanyagok felvásárlása Zentán.",
      text:
        "Fémet, műanyagot, papírt és üveget vásárolunk fel magánszemélyektől és cégektől. Hívjon minket a feltételek és az átvétel egyeztetéséhez.",
      imageAlt: "Fém rakodása a Jedina Nada DOO telephelyén",
      vanAlt: "A Jedina Nada DOO járműve hulladékfelvásárláshoz és újrahasznosításhoz",
      photoLabel: "Felvásárlás · válogatás · előkészítés",
      primary: "Mit vásárolunk fel?",
      secondary: "Hívjon minket",
      stats: [
        { icon: "/vectors/calendar.svg", value: "2010 óta", label: "tapasztalat az újrahasznosításban" },
        { icon: "/vectors/materials.svg", value: "Széles körű", label: "műanyag, fém, papír, üveg és egyéb anyagok" },
        { icon: "/vectors/location.svg", value: "Zenta és környéke", label: "lakossági és céges együttműködés" }
      ]
    },
    about: {
      eyebrow: "A vállalkozásról",
      title: "Zentáról. Egy tisztább holnapért.",
      paragraphs: [
        "A Jedina Nada DOO 2010-es alapítása óta sikeresen működik, székhelye Zentán, a Karađorđeva 109 címen található.",
        "A vállalkozást Nada Cvijanović igazgatónő vezeti. Női vezetésű cégként különösen fontos számunkra a felelős, pontos és korrekt együttműködés.",
        "Nem veszélyes hulladékkal foglalkozunk: másodlagos nyersanyagokat vásárolunk fel, válogatunk és készítünk elő további feldolgozásra.",
        "A nem veszélyes hulladék minden olyan hulladék, amely nem rendelkezik veszélyes tulajdonságokkal, például műanyag és üveg palack, papír, műanyag, vas és textil."
      ],
      facts: [
        {
          icon: "/vectors/materials.svg",
          title: "Másodlagos nyersanyagok felvásárlása",
          text: "Átlátható megállapodás és különböző nem veszélyes anyagok átvétele."
        },
        {
          icon: "/vectors/recycling-prepare.svg",
          title: "Előkészítés újrahasznosításra",
          text: "Válogatás és anyag-előkészítés további feldolgozásra."
        },
        {
          icon: "/vectors/citizens-business.svg",
          title: "Lakossági és céges együttműködés",
          text: "Gyakorlati együttműködés háztartásokkal, vállalkozókkal és cégekkel."
        },
        {
          icon: "/vectors/woman-led.svg",
          title: "Női vezetésű cég",
          text: "A működést és a mindennapi szervezést Nada Cvijanović igazgatónő vezeti."
        }
      ]
    },
    services: {
      eyebrow: "Anyagfelvásárlás",
      title: "Önnek felesleg. Nekünk alapanyag.",
      text: "Mondja el az anyag fajtáját és hozzávetőleges mennyiségét, mi pedig tájékoztatjuk a felvásárlás feltételeiről.",
      ask: "Kérdezzen erről az anyagról",
      items: [
        {
          key: "plastic",
          title: "Műanyag",
          icon: "/vectors/plastic.svg",
          items: ["PET csomagolás", "Kupakok", "Székek", "Asztalok", "Vödrök", "Ládák"]
        },
        {
          key: "metal",
          title: "Fém",
          icon: "/vectors/metal.svg",
          items: ["Vas", "Acél", "Réz", "Sárgaréz", "Alumínium", "Rozsdamentes acél", "Ólom"]
        },
        {
          key: "glass",
          title: "Üveg",
          icon: "/vectors/glass.svg",
          items: ["Üvegpalackok", "Befőttesüvegek", "Ablaküveg", "Törött üveg", "Egyéb üvegfajták"]
        },
        {
          key: "paper",
          title: "Papír",
          icon: "/vectors/paper.svg",
          items: ["Papír", "Irattári papír", "Karton", "Könyvek", "Füzetek", "Újságok"]
        }
      ]
    },
    process: {
      eyebrow: "Egyszerű egyeztetés",
      title: "Egyszerűen megegyezünk.",
      text:
        "Lakossággal, vállalkozókkal és cégekkel dolgozunk. Mondja el, mije van, mi pedig elmagyarázzuk a következő lépést.",
      cta: "Hívjon és érdeklődjön az anyagról",
      items: [
        {
          icon: "/vectors/contact-person.svg",
          title: "Mondja el, mije van",
          text: "Telefonon vagy emailben írja le az anyag fajtáját és hozzávetőleges mennyiségét."
        },
        {
          icon: "/vectors/recycling-buy.svg",
          title: "Egyeztetjük az átvételt",
          text: "Megerősítjük, hogy átvesszük-e az anyagot, és egyeztetjük az átvétel gyakorlati módját."
        },
        {
          icon: "/vectors/recycling-prepare.svg",
          title: "Új célt adunk neki",
          text: "Az átvett anyagot szétválogatjuk és előkészítjük az újrahasznosítás következő szakaszára."
        }
      ]
    },
    recycling: {
      eyebrow: "Miért fontos",
      title: "Az újrahasznosítás erőforrásokat takarít meg és csökkenti a hulladékot.",
      text:
        "Az újrahasznosítás a használt tárgyak és anyagok gyűjtését, válogatását, feldolgozását és új termékké alakítását jelenti. Így kevesebb új nyersanyagra van szükség, és kisebb a környezeti terhelés.",
      imageAlt: "Bálázott PET palackok további újrahasznosításra előkészítve",
      imageBadge: "Előkészítve további újrahasznosításra",
      points: [
        "Csökkenti a víz, ásványi anyagok, kőolaj és erdők felhasználását.",
        "Védi a természetes élőhelyeket, mert kevesebb új nyersanyagot kell kitermelni.",
        "Csökkenti a víz, talaj és levegő szennyezését, mert kevesebb hulladék kerül a természetbe.",
        "Energiát takarít meg, különösen az alumínium és a papír újrahasznosításánál."
      ]
    },
    gallery: {
      title: "Galéria",
      eyebrow: "Telephelyünk és anyagaink",
      text: "Tekintse meg a Jedina Nada DOO telephelyéről, anyagairól és munkájáról készült fotókat.",
      open: "Fotó megnyitása",
      openGallery: "A teljes galéria megtekintése",
      photoCount: "Fotó",
      close: "Bezárás",
      previous: "Előző",
      next: "Következő",
      previewAlt: "Szállításra előkészített másodlagos nyersanyagok",
      imageAlt: "Jedina Nada DOO újrahasznosítás, fotó"
    },
    faq: {
      eyebrow: "Gyakori kérdések",
      title: "Jó tudni.",
      items: [
        {
          question: "Milyen anyagokat vásárolnak fel?",
          answer:
            "Műanyagot, fémeket, papírt, üveget és más másodlagos nyersanyagokat vásárolunk fel. Konkrét anyag esetén érdemes közvetlenül felvenni velünk a kapcsolatot."
        },
        {
          question: "Lakossággal és cégekkel is dolgoznak?",
          answer: "Igen. Háztartásokkal, vállalkozókkal és cégekkel is együttműködünk Zentáról, a környékről és Szerbia más részeiről."
        },
        {
          question: "Hol található a Jedina Nada DOO?",
          answer: "Címünk: Karađorđeva 109, 24400 Senta."
        },
        {
          question: "Mi a munkaidő?",
          answer: "Hétfőtől péntekig 07:00 és 15:00 között, szombaton 07:00 és 12:00 között dolgozunk. Vasárnap zárva vagyunk."
        }
      ]
    },
    contact: {
      eyebrow: "Kapcsolat",
      title: "Van eladó anyaga? Beszéljünk.",
      details: "Elérhetőségek",
      addressLabel: "Cím",
      personLabel: "Kapcsolattartó",
      hoursLabel: "Munkaidő",
      hours: [
        { label: "Hétfő - Péntek", value: "07:00 - 15:00" },
        { label: "Szombat", value: "07:00 - 12:00" },
        { label: "Vasárnap", value: "zárva" }
      ],
      call: "Hívás",
      email: "Email küldése"
    },
    footer: {
      navigation: "Navigáció",
      copyright: "Minden jog fenntartva."
    }
  }
};

export function createPageMetadata(locale, page) {
  const content = locales[locale];
  const routeKey = pageRouteKey(page);
  const route = cleanRoutes[locale][routeKey];
  const title = pageTitle(content, page);
  const description = pageDescription(content, page);

  return {
    title,
    description,
    keywords: pageKeywords(content, page),
    category: "recycling",
    alternates: {
      canonical: absoluteUrl(route),
      languages: {
        sr: absoluteUrl(cleanRoutes.sr[routeKey]),
        hu: absoluteUrl(cleanRoutes.hu[routeKey]),
        "x-default": absoluteUrl(cleanRoutes.sr[routeKey])
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(route),
      siteName,
      locale: locale === "sr" ? "sr_RS" : "hu_HU",
      alternateLocale: locale === "sr" ? "hu_HU" : "sr_RS",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Jedina Nada DOO Senta"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.jpg`]
    },
    other: {
      "content-language": locale,
      "geo.region": "RS-02",
      "geo.placename": locale === "hu" ? "Zenta" : "Senta",
      "geo.position": `${business.coordinates.latitude};${business.coordinates.longitude}`,
      ICBM: `${business.coordinates.latitude}, ${business.coordinates.longitude}`
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: business.legalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/resources/logo/logo.png`,
      width: 378,
      height: 250
    },
    sameAs: [business.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      email: business.email,
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["sr", "hu"]
    }
  };
}

export function websiteJsonLd(locale = "sr") {
  const content = locales[locale];

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: locale,
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    description: content.meta.homeDescription
  };
}

export function localBusinessJsonLd(locale = "sr") {
  const content = locales[locale];

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "@id": `${siteUrl}/#jedina-nada`,
    name: business.name,
    legalName: business.legalName,
    description: content.meta.homeDescription,
    url: siteUrl,
    logo: `${siteUrl}/resources/logo/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.founded,
    slogan:
      locale === "hu" ? "Megbízható felvásárlás és újrahasznosítás" : "Pouzdan otkup i reciklaža neopasnog otpada",
    priceRange: "$$",
    parentOrganization: {
      "@id": `${siteUrl}/#organization`
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Karađorđeva 109",
      postalCode: "24400",
      addressLocality: locale === "hu" ? "Zenta" : "Senta",
      addressCountry: "RS"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude
    },
    areaServed: [
      {
        "@type": "City",
        name: locale === "hu" ? "Zenta" : "Senta"
      },
      {
        "@type": "Country",
        name: "Serbia"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      email: business.email,
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["sr", "hu"]
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: locale === "hu" ? "Másodlagos nyersanyagok felvásárlása" : "Otkup sekundarnih sirovina",
          serviceType: "Waste purchase and recycling preparation",
          areaServed: "Serbia"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: locale === "hu" ? "Nem veszélyes hulladék újrahasznosítása" : "Reciklaža neopasnog otpada",
          serviceType: "Non-hazardous waste recycling",
          areaServed: "Serbia"
        }
      }
    ],
    knowsAbout:
      locale === "hu"
        ? ["műanyag", "fém", "papír", "üveg", "másodlagos nyersanyagok", "nem veszélyes hulladék"]
        : ["plastika", "metal", "papir", "staklo", "sekundarne sirovine", "neopasan otpad"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00"
      }
    ],
    sameAs: [business.facebook]
  };
}

export function serviceCatalogJsonLd(locale = "sr") {
  const content = locales[locale];

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteUrl}${cleanRoutes[locale].home}#services-catalog`,
    name: content.services.title,
    url: `${siteUrl}${cleanRoutes[locale].home}#services`,
    inLanguage: locale,
    itemListElement: content.services.items.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        serviceType: locale === "hu" ? "Másodlagos nyersanyagok felvásárlása" : "Otkup sekundarnih sirovina",
        provider: {
          "@id": `${siteUrl}/#jedina-nada`
        },
        areaServed: {
          "@type": "Country",
          name: "Serbia"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.title,
          itemListElement: service.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Thing",
              name: item
            }
          }))
        }
      }
    }))
  };
}

export function faqJsonLd(locale = "sr") {
  const content = locales[locale];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbJsonLd(locale = "sr", page = "home") {
  const content = locales[locale];
  const routeKey = pageRouteKey(page);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: content.nav.home,
      item: absoluteUrl(cleanRoutes[locale].home)
    }
  ];

  if (routeKey === "gallery") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: content.nav.gallery,
      item: absoluteUrl(cleanRoutes[locale].gallery)
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
  };
}

export function galleryPageJsonLd(locale = "sr") {
  const content = locales[locale];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}${cleanRoutes[locale].gallery}#webpage`,
    name: content.meta.galleryTitle,
    description: content.meta.galleryDescription,
    url: absoluteUrl(cleanRoutes[locale].gallery),
    inLanguage: locale,
    isPartOf: {
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@id": `${siteUrl}/#jedina-nada`
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/resources/gallery/10.jpg`,
      width: 960,
      height: 720
    },
    hasPart: galleryImages.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.fullJpg}`,
      thumbnailUrl: `${siteUrl}${image.thumb}`,
      width: image.width,
      height: image.height,
      caption: `${content.gallery.imageAlt} ${image.id}`
    }))
  };
}
