import Image from "next/image";

const facts = [
  { label: "Based in", value: "Sydney, AU" },
  { label: "Focus", value: "Full-stack + LLM" },
  { label: "Currently using", value: "Next.js, TypeScript" },
  { label: "Status", value: "Open to work", highlight: true },
];

export default function About() {
  return (
    <section id="about" className="max-w-[860px] mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Image
            src="/image-shiva.webp"
            alt="Shiva Kumarr"
            width={80}
            height={80}
            className="rounded-full border border-neutral-200 dark:border-neutral-700 mb-6 object-cover"
          />
          <h2 className="text-3xl font-medium tracking-tight mb-5">About me</h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
            I&apos;m a full-stack engineer with a passion for building products
            that are fast, intuitive, and well-crafted under the hood. I care as
            much about the developer experience as I do the end user&apos;s.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            When I&apos;m not shipping features, I&apos;m building side projects
            — most recently an educational app for my kid and experimenting with
            LLM-powered workflows.
          </p>
        </div>

        <div className="pt-4">
          <p className="mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
            Quick facts
          </p>
          <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex justify-between items-center py-3 text-sm"
              >
                <span className="text-neutral-500 dark:text-neutral-400">
                  {f.label}
                </span>
                <span
                  className={
                    f.highlight
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-neutral-900 dark:text-neutral-100"
                  }
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}