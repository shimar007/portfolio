"use client";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 px-8" role="main" id="main-content">
      <div className="max-w-lg text-center">
        <div className="mb-6 flex justify-center" aria-hidden="true">
          <div className="relative w-24 h-24">
            {/* Animated outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neutral-900 dark:border-t-neutral-100 border-r-neutral-900 dark:border-r-neutral-100 animate-spin"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center animate-pulse">
              <span className="text-5xl">🚧</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Work in Progress
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
          I&apos;m building something interesting here.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Check back soon, or get in touch if you can&apos;t wait!
        </p>
        <a
          href="mailto:shimar007@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 dark:focus:ring-offset-neutral-950"
          aria-label="Send email to get in touch"
        >
          Say hello →
        </a>
      </div>
    </div>
  );
}
