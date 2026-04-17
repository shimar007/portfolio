import Link from "next/link";

interface Props {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export default function ProjectCard({ num, title, description, tags, github, live }: Props) {
  return (
    <div className="bg-white dark:bg-neutral-950 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
      <p className="mono text-xs text-neutral-400 mb-3">{num}</p>
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <Link
          href={github}
          className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-px transition-colors"
        >
          GitHub
        </Link>
        <Link
          href={live}
          className="text-sm text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-px transition-colors"
        >
          Live
        </Link>
      </div>
    </div>
  );
}