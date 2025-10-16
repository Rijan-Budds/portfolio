"use client";

import { useEffect } from "react";

export default function FirstLoad() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (localStorage.getItem("hasVisited")) return;

      const el = document.documentElement;
      el.classList.add("first-visit");
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add("play"), 50);
      });

      const cleanupTimeout = setTimeout(() => {
        el.classList.remove("first-visit", "play");
        try { localStorage.setItem("hasVisited", "1"); } catch {}
      }, 1600);

      return () => clearTimeout(cleanupTimeout);
    } catch {
    }
  }, []);

  return null;
}
