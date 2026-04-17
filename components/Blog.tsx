import Link from "next/link";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="max-w-[860px] mx-auto px-8 py-24">
      <h2 className="text-3xl font-medium tracking-tight mb-10">Writing</h2>
      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="grid grid-cols-[90px_1fr] gap-6 py-5 group"
          >
            <span className="mono text-xs text-neutral-400 pt-0.5">
              {post.date}
            </span>
            <div>
              <p className="text-sm font-medium mb-1 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                {post.title}
              </p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}