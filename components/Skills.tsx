import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-[860px] mx-auto px-8 py-24">
      <h2 className="text-3xl font-medium tracking-tight mb-10">Skills</h2>
      <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="mono text-xs text-secondary uppercase tracking-widest mb-3">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {group.items.map((skill) => (
                <li key={skill} className="skill-pill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}