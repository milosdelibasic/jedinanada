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
      .then(async ([{ getApp, getApps, initializeApp }, { getAnalytics, isSupported }]) => {
        if (!(await isSupported())) return;
        const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
        // GA4 automatically measures page loads and browser history changes.
        getAnalytics(app);
      })
      .catch(() => {
        // Analytics is optional when storage or network access is blocked.
        initialization = undefined;
      });
  }, []);

  return null;
}
