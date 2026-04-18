"use client";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 px-8">
      <div className="max-w-lg text-center">
        <div className="mb-6 text-6xl">🚧</div>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Work in Progress
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
          I&apos;m building something interesting here.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Check back soon, or get in touch if you can&apos;t wait! 👀
        </p>
        <a
          href="mailto:shimar007@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          Say hello →
        </a>
      </div>
    </div>
  );
}
