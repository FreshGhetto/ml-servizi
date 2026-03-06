"use client";

import {useEffect, useRef, useState} from "react";
import {useTheme} from "next-themes";
import {cn} from "@/lib/cn";
import {Moon, Sun} from "lucide-react";

type UiTheme = "dark" | "light";

export function ThemeSwitch() {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [uiTheme, setUiTheme] = useState<UiTheme>("dark");
  const applyingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || applyingRef.current) return;
    const rt: UiTheme = resolvedTheme === "light" ? "light" : "dark";
    setUiTheme(rt);
  }, [mounted, resolvedTheme]);

  const isDark = uiTheme === "dark";

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  function toggle() {
    if (!mounted) return;
    const next: UiTheme = isDark ? "light" : "dark";
    applyingRef.current = true;
    setUiTheme(next);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setTheme(next);
      applyingRef.current = false;
      timerRef.current = null;
    }, 170);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "ui-smooth relative inline-flex h-9 w-[78px] items-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1 shadow-sm"
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-y-0 left-[10px] z-10 inline-flex items-center justify-center transition-colors duration-200",
          isDark ? "text-white" : "text-[rgb(var(--muted))]"
        )}
      >
        <Moon className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "pointer-events-none absolute inset-y-0 right-[10px] z-10 inline-flex items-center justify-center transition-colors duration-200",
          isDark ? "text-[rgb(var(--muted))]" : "text-white"
        )}
      >
        <Sun className="h-4 w-4" />
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 z-0 inline-flex w-7 rounded-full bg-blue-600 shadow-md"
        )}
        style={{
          left: isDark ? "4px" : "calc(100% - 28px - 4px)",
          transition: "left 560ms cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />
    </button>
  );
}
