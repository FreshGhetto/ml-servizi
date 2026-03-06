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
  const prev = useRef<UiTheme>("dark");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const rt: UiTheme = resolvedTheme === "light" ? "light" : "dark";
    setUiTheme(rt);
  }, [mounted, resolvedTheme]);

  const isDark = uiTheme === "dark";

  function toggle() {
    const next: UiTheme = isDark ? "light" : "dark";
    setUiTheme(next);
    setTheme(next);
  }

  // Determine animation direction
  const anim =
    prev.current === uiTheme
      ? ""
      : uiTheme === "light"
      ? "animate-[knob-slide-right_420ms_cubic-bezier(0.22,1,0.36,1)_both]"
      : "animate-[knob-slide-left_420ms_cubic-bezier(0.22,1,0.36,1)_both]";

  useEffect(() => {
    prev.current = uiTheme;
  }, [uiTheme]);

  // Keep position in sync (in case of refresh)
  const posClass = isDark ? "translate-x-0" : "translate-x-[42px]";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "ui-smooth relative inline-flex h-9 w-[78px] items-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1 shadow-sm"
      )}
    >
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[rgb(var(--muted))]">
        <Moon className="h-4 w-4" />
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[rgb(var(--muted))]">
        <Sun className="h-4 w-4" />
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "relative z-10 h-7 w-7 rounded-full bg-blue-600 shadow-md will-change-transform",
          posClass,
          anim
        )}
      />
    </button>
  );
}
