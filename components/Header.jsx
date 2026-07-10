"use client";

import { useEffect, useState } from "react";

export default function Header({ locale, content, active = "home" }) {
  const [open, setOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(active);
  const alternateHref = currentActive === "gallery" ? content.galleryAlternateHref : content.alternateHref;

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.toggle("nav-open", open);
    body.classList.toggle("nav-open", open);

    if (!open) {
      return () => {
        root.classList.remove("nav-open");
        body.classList.remove("nav-open");
      };
    }

    const scrollY = window.scrollY;
    const previousBodyStyle = {
      position: body.style.position,
      top: body.style.top,
      right: body.style.right,
      left: body.style.left,
      width: body.style.width
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.right = "0";
    body.style.left = "0";
    body.style.width = "100%";

    return () => {
      root.classList.remove("nav-open");
      body.classList.remove("nav-open");
      body.style.position = previousBodyStyle.position;
      body.style.top = previousBodyStyle.top;
      body.style.right = previousBodyStyle.right;
      body.style.left = previousBodyStyle.left;
      body.style.width = previousBodyStyle.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (active === "gallery") {
      setCurrentActive("gallery");
      return undefined;
    }

    const sectionIds = ["home", ...content.navIds.filter((id) => id !== "gallery")];
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
    ["about", content.nav.about, `${homePrefix}#about`],
    ["services", content.nav.services, `${homePrefix}#services`],
    ["gallery", content.nav.gallery, content.galleryHref],
    ["recycling", content.nav.recycling, `${homePrefix}#recycling`],
    ["faq", content.nav.faq, `${homePrefix}#faq`],
    ["contact", content.nav.contact, `${homePrefix}#contact`]
  ];

  return (
    <>
      <header className="site-header">
        <a className="brand" href={content.homeHref} aria-label="Jedina Nada DOO">
          <img src="/resources/logo/logo.webp" alt="" width="76" height="50" />
          <span>Jedina Nada</span>
        </a>

        <button
          className={open ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <button
        className={open ? "nav-backdrop is-open" : "nav-backdrop"}
        type="button"
        aria-label="Close navigation"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
        <a
          href={content.homeHref}
          className={currentActive === "home" ? "is-active" : ""}
          aria-current={currentActive === "home" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          {content.nav.home}
        </a>
        {links.map(([key, label, href]) => (
          <a
            key={key}
            href={href}
            className={currentActive === key ? "is-active" : ""}
            aria-current={currentActive === key ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="language-link" href={alternateHref} hrefLang={locale === "sr" ? "hu" : "sr"}>
          {content.alternateLang}
        </a>
      </nav>
    </>
  );
}
