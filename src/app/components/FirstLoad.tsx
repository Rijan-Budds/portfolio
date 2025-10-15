"use client";

import { useEffect } from "react";

export default function FirstLoad() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (localStorage.getItem("hasVisited")) return;

      const el = document.documentElement;
      // mark first-visit, then trigger play to allow transitions
      el.classList.add("first-visit");
      // small delay to ensure styles apply
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add("play"), 50);
      });

      // remove the classes after animations complete
      const cleanupTimeout = setTimeout(() => {
        el.classList.remove("first-visit", "play");
        try { localStorage.setItem("hasVisited", "1"); } catch {}
      }, 1600);

      return () => clearTimeout(cleanupTimeout);
    } catch {
      // ignore
    }
  }, []);

  return null;
}
