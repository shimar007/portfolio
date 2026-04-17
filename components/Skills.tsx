import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-[860px] mx-auto px-8 py-24">
      <h2 className="text-3xl font-medium tracking-tight mb-10">Skills</h2>
      <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}