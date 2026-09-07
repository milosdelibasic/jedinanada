import { business } from "@/data/site";
import Icon from "@/components/Icon";

export default function Footer({ content }) {
  const hu = content.lang === "hu";
  return <footer className="site-footer"><div className="section-shell">
    <div className="footer-grid"><div><a className="footer-brand" href={content.homeHref}><img className="original-logo" src="/resources/logo/logo.webp" alt="" width="76" height="50" /><span>Jedina Nada<small>{hu ? "ÚJ ÉLET AZ ANYAGOKNAK." : "NOVI ŽIVOT ZA SIROVINE."}</small></span></a><p>{hu ? "Másodlagos nyersanyagok felvásárlása és újrahasznosítása. Zenta, 2010 óta." : "Otkup sekundarnih sirovina i reciklaža.\nSenta, od 2010. godine."}</p></div>
    <nav aria-label={content.footer.navigation}><strong>{content.footer.navigation}</strong><a href={`${content.homeHref}#services`}>{content.nav.services}</a><a href={`${content.homeHref}#about`}>{content.nav.about}</a><a href={content.galleryHref}>{content.nav.gallery}</a><a href={`${content.homeHref}#contact`}>{content.nav.contact}</a></nav>
    <div className="footer-contact"><strong>{content.contact.details}</strong><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a><a href={`mailto:${business.email}`}>{business.email}</a><a href={business.mapUrl} target="_blank" rel="noreferrer">{business.address}</a><a className="footer-social" aria-label="Facebook" href={business.facebook} target="_blank" rel="noreferrer"><Icon name="facebook" size={20} /></a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Jedina Nada DOO. {content.footer.copyright}</span><a href="#main-content">{hu ? "Vissza a tetejére" : "Nazad na vrh"}<Icon name="diagonal" size={15} /></a></div>
    </div><div className="mobile-contact-bar" aria-label={content.contact.details}><a href={`tel:${business.phone}`}><Icon name="phone" size={18} />{hu ? "Hívjon minket" : "Pozovite nas"}</a><a href={business.mapUrl} target="_blank" rel="noreferrer"><Icon name="pin" size={18} />{hu ? "Útvonaltervezés" : "Kako do nas"}</a></div></footer>;
}
