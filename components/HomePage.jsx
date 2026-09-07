import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { breadcrumbJsonLd, business, faqJsonLd, localBusinessJsonLd, organizationJsonLd, serviceCatalogJsonLd, websiteJsonLd } from "@/data/site";

export default function HomePage({ locale, content }) {
  const hu = locale === "hu";
  const materialOrder = ["plastic", "metal", "paper", "glass"];
  const services = materialOrder.map(key => content.services.items.find(item => item.key === key));
  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={websiteJsonLd(locale)} />
      <StructuredData data={localBusinessJsonLd(locale)} />
      <StructuredData data={serviceCatalogJsonLd(locale)} />
      <StructuredData data={faqJsonLd(locale)} />
      <StructuredData data={breadcrumbJsonLd(locale, "home")} />
      <Header locale={locale} content={content} />
      <main id="main-content" lang={locale}>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="location-pill"><span className="status-dot" />{hu ? "ZENTA ÉS KÖRNYÉKE · 2010 ÓTA" : "SENTA I OKOLINA · OD 2010."}</p>
              <h1>{hu ? <>Másodlagos<br /><span>nyersanyagok<br />felvásárlása</span><br />Zentán.</> : <>Otkup<br /><span>sekundarnih<br />sirovina</span><br />u Senti.</>}</h1>
              <p className="hero-description">{content.hero.text}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">{content.hero.primary}<Icon name="diagonal" /></a>
                <a className="hero-phone" href={`tel:${business.phone}`}><Icon name="phone" />{content.hero.secondary}</a>
              </div>
              <div className="hero-note"><span className="check-circle"><Icon name="check" size={12} /></span>{hu ? "Lakosságnak és vállalkozásoknak" : "Za građane, preduzetnike i firme"}</div>
            </div>
            <div className="hero-media">
              <img className="hero-image" src="/assets/redesign/recycling-hero.webp" srcSet="/assets/redesign/recycling-hero-mobile.webp 768w, /assets/redesign/recycling-hero.webp 1536w" sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1392px) 46vw, 620px" alt={hu ? "Fém- és műanyagbálák – az újrahasznosítást szemléltető kép" : "Bale metala i plastike — ilustrativni prikaz materijala za reciklažu"} width="1536" height="1024" fetchPriority="high" />
              <div className="hero-media-top"><span><span className="status-dot" />{hu ? "ÚJRAHASZNOSÍTÁS" : "DAJEMO SIROVINAMA NOVI ŽIVOT"}</span><Icon name="diagonal" size={24} /></div>
              <div className="hero-image-caption"><span>{hu ? "Érték ma.\nErőforrás holnap." : "Vrednost danas.\nResurs za sutra."}</span></div>
              <div className="hero-floating-card"><span className="floating-icon"><Icon name="recycle" size={28} /></span><span><strong>{hu ? "Egy új kezdet." : "Za novi početak."}</strong><small>{hu ? "Felvásárlás. Válogatás. Újrahasznosítás." : "Otkup. Sortiranje. Reciklaža."}</small></span></div>
            </div>
          </div>
          <div className="trust-strip">
            <div className="trust-intro">{hu ? <>Helyi partner.<br /><strong>Hosszú távú bizalom.</strong></> : <>Vaš lokalni partner.<br /><strong>Za dugoročno poverenje.</strong></>}</div>
            <div><strong><Icon name="clock" size={24} />2010</strong><small>{hu ? "éve kezdődött a történetünk" : "godine počinje naša priča"}</small></div>
            <div><strong><Icon name="recycle" size={24} />4+</strong><small>{hu ? "fő anyagcsoport" : "osnovne grupe sirovina"}</small></div>
            <div><strong><Icon name="pin" size={24} />{hu ? "Zenta" : "Senta"}</strong><small>Karađorđeva 109</small></div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-shell">
            <div className="section-heading section-heading-split">
              <div><p className="eyebrow"><span />{content.services.eyebrow}</p><h2>{content.services.title}</h2></div>
              <p>{content.services.text}</p>
            </div>
            <div className="service-grid">
              {services.map((service) => <article className={`service-card service-${service.key}`} key={service.key}>
                <div className="material-image"><img src="/assets/redesign/materials-grid.webp" alt="" width="1254" height="1254" loading="lazy" /></div>
                <div className="service-card-body"><div className="service-title-row"><h3>{service.title}</h3><a className="round-link" href={`mailto:${business.email}?subject=${encodeURIComponent(`${hu ? "Érdeklődés" : "Upit za otkup"}: ${service.title}`)}`} aria-label={`${content.services.ask}: ${service.title}`}><Icon name="diagonal" size={18} /></a></div><ul className="service-materials">{service.items.map(item => <li key={item}>{item}</li>)}</ul></div>
              </article>)}
            </div>
            <div className="materials-note"><span><Icon name="recycle" size={20} />{hu ? "Más anyaga van? Beszéljük meg a részleteket." : "Imate nešto drugo? Proverimo zajedno da li otkupljujemo."}</span><a className="text-link" href={`tel:${business.phone}`}>{hu ? "Kérdezzen minket" : "Pitajte nas"}<Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-shell">
            <div className="section-heading section-heading-split"><div><p className="eyebrow"><span />{content.process.eyebrow}</p><h2>{content.process.title}</h2></div><p>{content.process.text}</p></div>
            <ol className="process-list">{content.process.items.map((item, index) => <li key={item.title}><div className="process-step-top"><span className="process-number">0{index + 1}</span><Icon name={["phone", "check", "recycle"][index]} size={26} /></div><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
            <div className="process-bottom"><span>{hu ? "Az első lépés csak egy hívás." : "Prvi korak je samo jedan poziv."}</span><a href={`tel:${business.phone}`}><Icon name="phone" size={18} />{business.phoneDisplay}</a></div>
          </div>
        </section>

        <section className="about-section section-pad section-shell" id="about">
          <div className="about-photo"><img src="/resources/gallery/14.webp" alt={content.gallery.previewAlt} width="2048" height="1152" loading="lazy" /><div className="about-photo-tag"><span className="status-dot" />Jedina Nada · {hu ? "Zenta" : "Senta"}</div><div className="year-card"><strong>2010.</strong><span>{hu ? "óta együtt egy tisztább jövőért" : "od tada, zajedno za čistije sutra"}</span><Icon name="diagonal" size={27} /></div></div>
          <div className="about-copy"><p className="eyebrow"><span />{content.about.eyebrow}</p><h2>{content.about.title}</h2>{content.about.paragraphs.slice(0, 3).map(p => <p key={p}>{p}</p>)}<div className="about-signature"><span><strong>{business.person}</strong><small>{hu ? "Igazgató, Jedina Nada DOO" : "Direktorka, Jedina Nada DOO"}</small></span></div></div>
        </section>

        <section className="gallery-preview section-pad" id="gallery"><div className="section-shell">
          <div className="section-heading section-heading-split"><div><p className="eyebrow"><span />{content.gallery.eyebrow}</p><h2>{hu ? "A munka, a képek mögött." : "Naš posao, izbliza."}</h2></div><a className="button button-outline" href={content.galleryHref}>{content.gallery.openGallery}<Icon name="diagonal" /></a></div>
          <div className="gallery-preview-grid">{[11, 4, 13].map((id, index) => <a href={content.galleryHref} key={id} className="gallery-preview-photo" aria-label={`${content.gallery.openGallery} — ${[hu ? "Műanyag" : "Plastika", hu ? "Fém" : "Metal", hu ? "Szállítás" : "Transport"][index]}`}><img src={`/resources/gallery/${id}.webp`} alt={[content.recycling.imageAlt, hu ? "Fém a telephelyünkön" : "Metal u našem dvorištu", hu ? "Előkészített anyag szállítása" : "Pripremljene sirovine na transportu"][index]} width={index === 1 ? 2048 : 960} height={index === 1 ? 1152 : 720} loading="lazy" /><span>{[hu ? "Anyag-előkészítés" : "Priprema materijala", hu ? "Másodlagos nyersanyagok felvásárlása" : "Otkup sekundarnih sirovina", hu ? "A következő lépés" : "Spremno za sledeći korak"][index]}<Icon name="diagonal" size={18} /></span></a>)}</div>
        </div></section>

        <section className="recycling-section section-shell" id="recycling"><div className="recycling-banner"><div><p className="eyebrow"><span />{content.recycling.eyebrow}</p><h2>{hu ? <>Kevesebb hulladék.<br /><span>Több lehetőség.</span></> : <>Manje otpada.<br /><span>Više mogućnosti.</span></>}</h2></div><div className="recycling-copy"><p>{content.recycling.text}</p><a className="text-link" href="#contact">{hu ? "Tegyük meg az első lépést" : "Hajde da napravimo prvi korak"}<Icon name="arrow" /></a></div></div></section>

        <section className="faq-section section-pad" id="faq"><div className="section-shell faq-layout"><div className="section-heading"><p className="eyebrow"><span />{content.faq.eyebrow}</p><h2>{content.faq.title}</h2><p>{hu ? "Nem találja a választ? Hívjon minket, szívesen segítünk." : "Niste pronašli odgovor? Pozovite nas, tu smo da pomognemo."}</p><a className="faq-call" href={`tel:${business.phone}`}><span className="faq-call-icon"><Icon name="phone" size={20} /></span><span><small>{hu ? "Hívjon minket" : "Pozovite nas"}</small><strong>{business.phoneDisplay}</strong></span></a></div><FaqAccordion items={content.faq.items} /></div></section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-banner"><div><p className="eyebrow"><span />{content.contact.eyebrow}</p><h2>{content.contact.title}</h2><p>{hu ? "Mondja el, milyen anyaga van. A többit megbeszéljük." : "Recite nam šta imate. Ostalo ćemo dogovoriti."}</p><a className="contact-big-phone" href={`tel:${business.phone}`}>{business.phoneDisplay}<Icon name="diagonal" size={34} /></a><a className="contact-email" href={`mailto:${business.email}`}><Icon name="mail" size={18} />{business.email}</a></div><div className="contact-hours"><Icon name="clock" size={28} /><h3>{content.contact.hoursLabel}</h3>{content.contact.hours.map(item => <div className="hours-line" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}<span className="contact-person">{content.contact.personLabel}: {business.person}</span></div></div>
          <div className="contact-location"><div><Icon name="pin" size={23} /><span><strong>{hu ? "Várjuk Zentán." : "Vidimo se u Senti."}</strong><small>{business.address}</small></span></div><a className="text-link" href={business.mapUrl} target="_blank" rel="noreferrer">{hu ? "Útvonaltervezés" : "Kako do nas"}<Icon name="diagonal" size={20} /></a></div>
          <div className="map-frame"><iframe src={business.mapEmbed} title={hu ? "Jedina Nada DOO térkép" : "Jedina Nada DOO mapa"} width="1200" height="340" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
