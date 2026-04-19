"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check current state from DOM
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const newDarkMode = !isDark;
    
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    if (newDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="dark-mode-toggle focus:ring-2"
    >
      {isDark ? (
        <span aria-hidden="true" className="text-lg">
          ☀️
        </span>
      ) : (
        <span aria-hidden="true" className="text-lg">
          🌙
        </span>
      )}
    </button>
  );
}
