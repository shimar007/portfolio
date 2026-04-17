import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[860px] mx-auto px-8 pt-[calc(60px+5rem)] pb-24"
    >
      <p className="mono text-xs text-neutral-400 mb-6">
        // available for new opportunities
      </p>
      <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.1] tracking-tight mb-6">
        Full-stack
        <br />
        engineer &amp;
        <br />
        builder.
      </h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-[520px] leading-relaxed mb-10">
        I design and build thoughtful digital products — from backend APIs to
        polished UIs. Currently focused on LLM-integrated applications and
        developer tooling.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link href="#projects" className="btn btn-solid">
          View my work
        </Link>
        <Link href="#contact" className="btn">
          Get in touch
        </Link>
      </div>
    </section>
  );
}