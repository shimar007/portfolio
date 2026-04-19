import Link from "next/link";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="max-w-[860px] mx-auto px-8 py-24">
      <h2 className="text-3xl font-medium tracking-tight mb-10">Writing</h2>
      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800" role="list">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="grid grid-cols-[90px_1fr] gap-6 py-5 group"
            role="listitem"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="col-span-full focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 rounded"
              aria-label={`Read: ${post.title}`}
            >
              <span className="mono text-xs text-neutral-400 pt-0.5 block">
                {post.date}
              </span>
              <div className="mt-3">
                <h3 className="text-sm font-medium mb-1 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}