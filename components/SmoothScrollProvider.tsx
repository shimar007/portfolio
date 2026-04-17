"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_HEIGHT = 60; // keep in sync with --nav-h in globals.css

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length === 1) return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();

      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return <>{children}</>;
}