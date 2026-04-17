"use client";

import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 z-50 flex items-center justify-between px-8">
      <span className="mono text-sm font-semibold tracking-tight">
        shiva.dev
      </span>
      <ul className="flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}