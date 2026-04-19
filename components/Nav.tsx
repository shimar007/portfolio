"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 focus:z-50 focus:p-2 focus:bg-neutral-900 focus:text-white dark:focus:bg-neutral-100 dark:focus:text-neutral-900 focus:rounded"
      >
        Skip to main content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 h-[60px] border-b z-50 flex items-center justify-between px-8 transition-colors bg-primary border-divider text-primary"
        aria-label="Main navigation"
      >
        <Link href="/" className="mono text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity" aria-label="shiva.dev - Home">
          shiva.dev
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-secondary transition-colors hover:opacity-70"
                  aria-current={isHomePage ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}