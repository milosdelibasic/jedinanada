"use client";

import { useEffect } from "react";

const pendingKey = "jedina-nada:section";
const pagePath = path => path.replace(/index\.html$/, "").replace(/\/$/, "") || "/";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const focusTarget = section.querySelector("h1, h2") || section;
  focusTarget.setAttribute("tabindex", "-1");
  focusTarget.focus({ preventScroll: true });
  focusTarget.addEventListener("blur", () => focusTarget.removeAttribute("tabindex"), { once: true });
  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start"
  });
}

export default function SectionNavigation() {
  useEffect(() => {
    // Keep real anchor destinations as a no-JavaScript fallback for visitors and crawlers.
    // Normal clicks scroll without adding fragments to the address bar.
    const onClick = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.("a[href]");
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !url.hash) return;
      const id = decodeURIComponent(url.hash.slice(1));
      const samePage = pagePath(url.pathname) === pagePath(window.location.pathname);
      if (samePage) {
        if (!document.getElementById(id)) return;
        event.preventDefault();
        if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
        window.requestAnimationFrame(() => scrollToSection(id));
      } else if (["/", "/hu"].includes(pagePath(url.pathname))) {
        try {
          window.sessionStorage.setItem(pendingKey, JSON.stringify({ id, path: pagePath(url.pathname), savedAt: Date.now() }));
        } catch {
          return; // Native anchor navigation still works when storage is unavailable.
        }
        event.preventDefault();
        window.location.assign(url.pathname + url.search);
      }
    };
    document.addEventListener("click", onClick);
    let frame;
    try {
      const pending = JSON.parse(window.sessionStorage.getItem(pendingKey) || "null");
      if (pending && pending.path === pagePath(window.location.pathname) && Date.now() - pending.savedAt < 30000) {
        frame = window.requestAnimationFrame(() => {
          window.sessionStorage.removeItem(pendingKey);
          scrollToSection(pending.id);
        });
      } else {
        window.sessionStorage.removeItem(pendingKey);
      }
    } catch { /* Storage is optional; normal anchor URLs remain functional. */ }
    return () => {
      document.removeEventListener("click", onClick);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
