"use client";

import { useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com", ariaLabel: "Visit GitHub profile" },
  { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "Visit LinkedIn profile" },
  { label: "Email", href: "mailto:hello@shiva.dev", ariaLabel: "Send email" },
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
        <div
          role="status"
          aria-live="polite"
          aria-label="Message sent successfully"
          className="text-sm text-emerald-600 dark:text-emerald-400 mb-10"
        >
          Message sent — I&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[520px] mb-12">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Your name
            </label>
            <input
              id="name"
              required
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-neutral-100/10 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Email address
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-neutral-100/10 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Your message
            </label>
            <textarea
              id="message"
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full px-4 py-2.5 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-500 focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-neutral-100/10 transition-colors resize-y"
            />
          </div>

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
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.ariaLabel}
            className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-px transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 rounded"
          >
            {s.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}