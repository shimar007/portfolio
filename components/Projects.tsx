import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="max-w-[860px] mx-auto px-8 py-24">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="text-3xl font-medium tracking-tight">Selected work</h2>
        <Link
          href="#projects"
          className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
          aria-label="View all projects"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden divide-x divide-y divide-neutral-100 dark:divide-neutral-800">
        {projects.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}

        {/* CTA card */}
        <article className="bg-white dark:bg-neutral-950 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors border border-neutral-200 dark:border-neutral-800">
          <p className="mono text-xs text-neutral-400 mb-3">04</p>
          <h3 className="text-base font-medium mb-2">Your next project</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
            Interested in working together? I&apos;m available for freelance
            work, consulting, and full-time roles.
          </p>
          <Link
            href="#contact"
            className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-px transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
            aria-label="Go to contact section to get in touch"
          >
            Get in touch →
          </Link>
        </article>
      </div>
    </section>
  );
}