import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import {
  breadcrumbJsonLd,
  business,
  faqJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  serviceCatalogJsonLd,
  websiteJsonLd
} from "@/data/site";

export default function HomePage({ locale, content }) {
  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={websiteJsonLd(locale)} />
      <StructuredData data={localBusinessJsonLd(locale)} />
      <StructuredData data={serviceCatalogJsonLd(locale)} />
      <StructuredData data={faqJsonLd(locale)} />
      <StructuredData data={breadcrumbJsonLd(locale, "home")} />
      <Header locale={locale} content={content} />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="lead">{content.hero.text}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                {content.hero.primary}
              </a>
              <a className="button button-secondary" href="#contact">
                {content.hero.secondary}
              </a>
            </div>
            <dl className="hero-stats">
              {content.hero.stats.map((stat) => (
                <div key={stat.value}>
                  <img src={stat.icon} alt="" width="26" height="26" />
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero-media" aria-label="Jedina Nada DOO">
            <picture>
              <source srcSet="/assets/hero/materials.webp" type="image/webp" />
              <img
                src="/resources/gallery/2.jpg"
                alt={content.hero.imageAlt}
                width="900"
                height="506"
                fetchPriority="high"
              />
            </picture>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-heading">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <h2>{content.about.title}</h2>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="fact-panel">
              {content.about.facts.map((fact) => (
                <div key={fact.title}>
                  <img src={fact.icon} alt="" width="36" height="36" loading="lazy" />
                  <span>
                    <strong>{fact.title}</strong>
                    <small>{fact.text}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">{content.services.eyebrow}</p>
              <h2>{content.services.title}</h2>
              <p>{content.services.text}</p>
            </div>
            <div className="service-grid">
              {content.services.items.map((service) => (
                <article className={`service-card service-${service.key}`} key={service.key}>
                  <div className="service-card-head">
                    <span className="service-icon">
                      <img src={service.icon} alt="" width="54" height="54" loading="lazy" />
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recycling-section section-shell" id="recycling">
          <div className="recycling-visual">
            <picture>
              <source srcSet="/resources/gallery/11.webp" type="image/webp" />
              <img src="/resources/gallery/11.jpg" alt={content.recycling.imageAlt} width="960" height="720" loading="lazy" />
            </picture>
            <span>{content.recycling.imageBadge}</span>
          </div>
          <div className="recycling-copy">
            <p className="eyebrow">{content.recycling.eyebrow}</p>
            <h2>{content.recycling.title}</h2>
            <p>{content.recycling.text}</p>
            <ul className="impact-list">
              {content.recycling.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="gallery-preview">
          <div className="section-shell preview-layout">
            <picture>
              <source srcSet="/resources/gallery/10.webp" type="image/webp" />
              <img src="/resources/gallery/10.jpg" alt={content.gallery.previewAlt} width="960" height="720" loading="lazy" />
            </picture>
            <div>
              <p className="eyebrow">{content.gallery.eyebrow}</p>
              <h2>{content.gallery.title}</h2>
              <p>{content.gallery.text}</p>
              <a className="button button-primary" href={content.galleryHref}>
                {content.nav.gallery}
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">{content.faq.eyebrow}</p>
              <h2>{content.faq.title}</h2>
            </div>
            <FaqAccordion items={content.faq.items} />
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <div className="contact-list">
              <p>
                <img src="/vectors/location.svg" alt="" width="32" height="32" loading="lazy" />
                <span>
                  <strong>{content.contact.addressLabel}</strong>
                  <a className="contact-address-link" href={business.mapUrl} target="_blank" rel="noreferrer">
                    {business.address}
                  </a>
                </span>
              </p>
              <p>
                <img src="/vectors/contact-person.svg" alt="" width="32" height="32" loading="lazy" />
                <span>
                  <strong>{content.contact.personLabel}</strong>
                  <span>{business.person}</span>
                </span>
              </p>
              <p>
                <img src="/vectors/contact-hours.svg" alt="" width="32" height="32" loading="lazy" />
                <span>
                  <strong>{content.contact.hoursLabel}</strong>
                  <span className="hours-list">
                    {content.contact.hours.map((item) => (
                      <span className="hours-line" key={`${item.label}-${item.value}`}>
                        <span className="hours-day">{item.label}:</span>
                        <span className="hours-time">{item.value}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={`tel:${business.phone}`}>
                {content.contact.call}
              </a>
              <a className="button button-secondary" href={`mailto:${business.email}`}>
                {content.contact.email}
              </a>
              <a className="button-icon facebook-button" href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <img src="/vectors/facebook.svg" alt="" width="24" height="24" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              src={business.mapEmbed}
              title="Jedina Nada DOO Google mapa"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
