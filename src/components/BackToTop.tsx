"use client";

import {useEffect, useState} from "react";
import {ChevronUp} from "lucide-react";
import {cn} from "@/lib/cn";

export function BackToTop({label}: {label: string}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nextVisible = window.scrollY > 280;
      setIsVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={cn(
        "group fixed bottom-6 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full",
        "border border-[rgb(var(--border)/0.72)] bg-[rgb(var(--bg)/0.9)] text-[rgb(var(--fg))]",
        "dark:border-white/10 dark:bg-[rgb(var(--bg)/0.82)]",
        "shadow-[0_10px_30px_rgba(2,6,23,0.18)] dark:shadow-[0_10px_26px_rgba(0,0,0,0.55)]",
        "motion-safe:transition-all motion-safe:duration-220 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-blue-400 hover:text-blue-700 motion-safe:hover:-translate-y-1 dark:hover:text-blue-300",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ChevronUp
        size={18}
        strokeWidth={2}
        className="motion-safe:transition-transform motion-safe:duration-220 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">{label}</span>
    </button>
  );
}
