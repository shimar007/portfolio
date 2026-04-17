"use client";

import { useState } from "react";

const socials = [
  { label: "GitHub ↗", href: "https://github.com" },
  { label: "LinkedIn ↗", href: "https://linkedin.com" },
  { label: "hello@shiva.dev", href: "mailto:hello@shiva.dev" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your preferred email service (Resend, Formspree, etc.)
    setSent(true);
  }

  return (
    <section id="contact" className="max-w-[860px] mx-auto px-8 py-24">
      <h2 className="text-3xl font-medium tracking-tight mb-2">Get in touch</h2>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10">
        Have a project in mind or just want to chat? My inbox is open.
      </p>

      {sent ? (
        <div className="text-sm text-emerald-600 dark:text-emerald-400 mb-10">
          Message sent — I&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[520px] mb-12">
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
          />
          <textarea
            required
            placeholder="Your message"
            rows={5}
            className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors resize-y"
          />
          <div>
            <button type="submit" className="btn btn-solid">
              Send message
            </button>
          </div>
        </form>
      )}

      <div className="flex gap-6 flex-wrap">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-px transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}