"use client";

import {cn} from "@/lib/cn";
import {useEffect, useRef} from "react";
import type {HTMLAttributes, MouseEvent, FocusEvent} from "react";

/**
 * Premium hover card:
 * - Outer lift + subtle scale
 * - Glow tracks cursor position
 * - Resets glow on mouse leave / blur / tab switch (prevents "stuck" gradient)
 * - No text blur (we avoid scaling inner content)
 */
export function MotionCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pointerFxEnabledRef = useRef(true);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const nextPosRef = useRef<{el: HTMLDivElement; x: number; y: number} | null>(null);

  function setVars(el: HTMLDivElement, xPct: number, yPct: number) {
    el.style.setProperty("--mx", `${xPct}%`);
    el.style.setProperty("--my", `${yPct}%`);
  }

  function reset(el?: HTMLDivElement | null) {
    const target = el ?? ref.current;
    if (!target) return;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    nextPosRef.current = null;
    rectRef.current = null;
    setVars(target, 50, 50);
  }

  function measureRect(el: HTMLDivElement) {
    rectRef.current = el.getBoundingClientRect();
  }

  function flushMove() {
    if (!nextPosRef.current) {
      rafRef.current = null;
      return;
    }
    const {el, x, y} = nextPosRef.current;
    setVars(el, x, y);
    rafRef.current = null;
  }

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!pointerFxEnabledRef.current) return;
    const el = e.currentTarget;
    const rect = rectRef.current ?? el.getBoundingClientRect();
    rectRef.current = rect;
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    nextPosRef.current = {el, x, y};
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(flushMove);
    }
  }

  function onEnter(e: MouseEvent<HTMLDivElement>) {
    if (!pointerFxEnabledRef.current) return;
    measureRect(e.currentTarget);
  }

  function onLeave(e: MouseEvent<HTMLDivElement>) {
    reset(e.currentTarget);
  }

  function onBlurCapture(e: FocusEvent<HTMLDivElement>) {
    reset(e.currentTarget as HTMLDivElement);
  }

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    pointerFxEnabledRef.current = canHover && !reduced;

    const handle = () => reset();
    // When switching tab / minimizing, reset glow so it won't look "active" when coming back
    document.addEventListener("visibilitychange", handle);
    window.addEventListener("blur", handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
      window.removeEventListener("blur", handle);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      data-motion-card="1"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onBlurCapture={onBlurCapture}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] transform-gpu",
        "motion-safe:hover:will-change-transform motion-safe:focus-within:will-change-transform",
        "motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-180 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "hover:-translate-y-0.5 focus-within:-translate-y-0.5",
        "hover:shadow-[0_8px_16px_rgba(0,0,0,.16)] focus-within:shadow-[0_8px_16px_rgba(0,0,0,.16)]",
        "motion-safe:hover:scale-[1.002] motion-safe:focus-within:scale-[1.002]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,.12), transparent 44%)"
        }}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-x-24 -inset-y-8 hidden rotate-12 opacity-0 sm:block",
          "transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.07) 45%, transparent 70%)"
        }}
      />

      <div
        className={cn(
          "relative rounded-2xl",
          "transition-transform duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:translate-y-[-1px] group-focus-within:translate-y-[-1px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
