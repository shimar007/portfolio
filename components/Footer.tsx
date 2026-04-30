export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 py-8 text-center">
      <p className="mono text-xs text-neutral-400">
        &copy; {new Date().getFullYear()}&nbsp;Shiva — built with Next.js &amp; care.
      </p>
    </footer>
  );
}