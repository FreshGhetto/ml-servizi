"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {cn} from "@/lib/cn";

export function ThemeToggle({className}: {className?: string}) {
  const {theme, setTheme, systemTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? systemTheme : theme) : "light";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-900",
        className
      )}
    >
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border transition",
          isDark
            ? "border-gray-700 bg-gray-900"
            : "border-gray-200 bg-gray-100"
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
            isDark ? "translate-x-5" : "translate-x-0"
          )}
        />
      </span>
    </button>
  );
}
