import { business } from "@/data/site";

export default function Footer({ content }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="footer-brand" href={content.homeHref}>
            <img src="/resources/logo/logo.webp" alt="" width="76" height="50" loading="lazy" />
            <span>Jedina Nada DOO</span>
          </a>
          <p>{content.meta.homeDescription}</p>
        </div>
        <nav aria-label={content.footer.navigation}>
          <strong>{content.footer.navigation}</strong>
          <a href={content.homeHref}>{content.nav.home}</a>
          <a href={`${content.homeHref}#services`}>{content.nav.services}</a>
          <a href={content.galleryHref}>{content.nav.gallery}</a>
          <a href={`${content.homeHref}#contact`}>{content.nav.contact}</a>
        </nav>
        <div className="footer-contact">
          <strong>{content.contact.details}</strong>
          <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <a href={business.mapUrl} target="_blank" rel="noreferrer">
            {business.address}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © {new Date().getFullYear()} Jedina Nada DOO.</span>
        <span>{content.footer.copyright}</span>
      </div>
      <div className="mobile-contact-bar" aria-label={content.contact.details}>
        <a href={`tel:${business.phone}`}>{content.contact.call}</a>
        <a href={business.mapUrl} target="_blank" rel="noreferrer">
          {content.contact.addressLabel}
        </a>
      </div>
    </footer>
  );
}
