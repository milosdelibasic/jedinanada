"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { business } from "@/data/site";

export default function Header({ locale, content, active = "home" }) {
  const [open, setOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(active);
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);
  const alternateHref =
    active === "gallery"
      ? content.galleryAlternateHref
      : currentActive === "home"
        ? content.alternateHref
        : `${content.alternateHref}#${currentActive}`;
  const menuLabel = locale === "hu" ? "Menü megnyitása" : "Otvori meni";
  const closeLabel = locale === "hu" ? "Menü bezárása" : "Zatvori meni";
  const navigationLabel = locale === "hu" ? "Fő navigáció" : "Glavna navigacija";
  const brandTagline = locale === "hu" ? "Újrahasznosítás · Zenta" : "Reciklaža · Senta";
  const skipLabel = locale === "hu" ? "Ugrás a tartalomhoz" : "Preskoči na sadržaj";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.toggle("nav-open", open);
    body.classList.toggle("nav-open", open);

    return () => {
      root.classList.remove("nav-open");
      body.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const keepFocusInMenu = (event) => {
      if (event.key !== "Tab") return;

      const navLinks = [...(navigationRef.current?.querySelectorAll("a") || [])];
      const focusable = [menuButtonRef.current, ...navLinks].filter(Boolean);
      const first = focusable[0];
      const firstLink = navLinks[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault();
        first?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      } else if (!event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        firstLink?.focus();
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 1120px)");
    const closeAtDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("keydown", keepFocusInMenu);
    desktopQuery.addEventListener("change", closeAtDesktop);
    window.requestAnimationFrame(() => navigationRef.current?.querySelector("a")?.focus({ preventScroll: true }));

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("keydown", keepFocusInMenu);
      desktopQuery.removeEventListener("change", closeAtDesktop);
    };
  }, [open]);

  useEffect(() => {
    if (active === "gallery") {
      setCurrentActive("gallery");
      return undefined;
    }

    const sectionIds = ["home", ...content.navIds];
    const updateActiveSection = () => {
      const headerOffset = 132;
      let nextActive = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= headerOffset) {
          nextActive = id;
        }
      });

      setCurrentActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [active, content.navIds]);

  const homePrefix = content.homeHref;
  const links = [
    ["services", content.nav.services, `${homePrefix}#services`],
    ["process", content.nav.process, `${homePrefix}#process`],
    ["about", content.nav.about, `${homePrefix}#about`],
    ["gallery", content.nav.gallery, content.galleryHref],
    ["contact", content.nav.contact, `${homePrefix}#contact`]
  ];

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const closeForNavigation = () => {
    setOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{skipLabel}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href={content.homeHref} aria-label="Jedina Nada DOO">
            <img className="original-logo" src="/resources/logo/logo.webp" alt="" width="76" height="50" />
            <span className="brand-copy">
              <strong>Jedina Nada</strong>
              <small>{brandTagline}</small>
            </span>
          </a>

          <nav id="primary-navigation" ref={navigationRef} className={open ? "main-nav is-open" : "main-nav"} aria-label={navigationLabel}>
            <a
              href={content.homeHref}
              className={currentActive === "home" ? "is-active" : ""}
              aria-current={currentActive === "home" ? "page" : undefined}
              onClick={() => closeForNavigation("home", content.homeHref)}
            >
              {content.nav.home}
            </a>
            {links.map(([key, label, href]) => (
              <a
                key={key}
                href={href}
                className={currentActive === key ? "is-active" : ""}
                aria-current={currentActive === key ? (active === "gallery" ? "page" : "location") : undefined}
                onClick={() => closeForNavigation(key, href)}
              >
                {label}
              </a>
            ))}
            <a className="nav-call" href={`tel:${business.phone}`} onClick={closeMenu}>
              <Icon name="phone" size={17} /><strong>{business.phoneDisplay}</strong>
            </a>
            <a className="language-link" href={alternateHref} hrefLang={locale === "sr" ? "hu" : "sr"} lang={locale === "sr" ? "hu" : "sr"}>
              <img src={locale === "sr" ? "/resources/icons/lang/hungary.png" : "/resources/icons/lang/serbia.png"} alt="" width="24" height="16" />
              <span>{locale === "sr" ? "Magyar" : "Srpski"}</span>
              <small>{content.alternateLang}</small>
            </a>
          </nav>

          <div className="header-actions">
            <a className="header-call" href={`tel:${business.phone}`}>
              <Icon name="phone" size={17} /><strong>{business.phoneDisplay}</strong>
            </a>
            <a className="header-language" href={alternateHref} hrefLang={locale === "sr" ? "hu" : "sr"}>
              {content.alternateLang}
            </a>
            <button
              ref={menuButtonRef}
              className={open ? "menu-button is-open" : "menu-button"}
              type="button"
              aria-label={open ? closeLabel : menuLabel}
              aria-expanded={open}
              aria-controls="primary-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <button
        className={open ? "nav-backdrop is-open" : "nav-backdrop"}
        type="button"
        aria-label={closeLabel}
        tabIndex={-1}
        onClick={closeMenu}
      />
    </>
  );
}
