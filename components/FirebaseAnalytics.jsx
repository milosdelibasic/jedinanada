"use client";

import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBopgbPWE6epFYdVbqEzM_FWO7YZxgoOg8",
  authDomain: "jedina-nada-5e8fb.firebaseapp.com",
  projectId: "jedina-nada-5e8fb",
  storageBucket: "jedina-nada-5e8fb.firebasestorage.app",
  messagingSenderId: "320404172522",
  appId: "1:320404172522:web:1fcc2320a328b7bce97193",
  measurementId: "G-Q3JBV9T4HH"
};

let initialization;

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname)) return;

    // Share initialization across mounts; keep the SDK out of server rendering.
    initialization ??= Promise.all([import("firebase/app"), import("firebase/analytics")])
      .then(async ([{ getApp, getApps, initializeApp }, { getAnalytics, isSupported, logEvent }]) => {
        if (!(await isSupported())) return;
        const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
        // GA4 automatically measures page loads and browser history changes.
        return { analytics: getAnalytics(app), logEvent };
      })
      .catch(() => {
        // Analytics is optional when storage or network access is blocked.
        initialization = undefined;
      });

    const onContactClick = event => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;
      const protocol = link.protocol.toLowerCase();
      if (protocol !== "tel:" && protocol !== "mailto:") return;

      const method = protocol === "tel:" ? "phone" : "email";
      const parameters = {
        contact_method: method,
        page_path: window.location.pathname,
        link_location: link.closest(".mobile-contact-bar") ? "mobile_contact_bar"
          : link.closest("header") ? "header"
          : link.closest("footer") ? "footer"
          : link.closest("section[id]")?.id || "content"
      };

      // Do not delay opening the phone/email app or send addresses and subjects.
      initialization?.then(client => {
        if (client) client.logEvent(client.analytics, `${method}_click`, parameters);
      }).catch(() => { /* Contact links work even when analytics is blocked. */ });
    };

    document.addEventListener("click", onContactClick, true);
    return () => document.removeEventListener("click", onContactClick, true);
  }, []);

  return null;
}
