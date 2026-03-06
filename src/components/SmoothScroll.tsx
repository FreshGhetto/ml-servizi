"use client";

import {useEffect} from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    const nav = navigator as Navigator & {
      connection?: {saveData?: boolean};
      deviceMemory?: number;
      hardwareConcurrency?: number;
    };
    const saveDataEnabled = nav.connection?.saveData === true;
    if (saveDataEnabled) return;

    const deviceMemory = nav.deviceMemory ?? 8;
    const hardwareConcurrency = nav.hardwareConcurrency ?? 8;
    if (deviceMemory < 4 || hardwareConcurrency < 6) return;

    let rafId = 0;
    let lenis: Lenis | null = null;
    let disposed = false;

    const setupLenis = () => {
      if (disposed || lenis) return;

      lenis = new Lenis({
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.2,
        wheelMultiplier: 1,
        allowNestedScroll: true,
        autoRaf: false,
        anchors: true
      });

      const raf = (time: number) => {
        if (!lenis) return;
        lenis.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    };

    const scheduleStart = () => {
      const requestIdle = (window as Window & {requestIdleCallback?: (cb: IdleRequestCallback) => number})
        .requestIdleCallback;
      if (requestIdle) {
        requestIdle(() => setupLenis());
        return;
      }
      setTimeout(setupLenis, 32);
    };

    if (document.readyState === "complete") {
      scheduleStart();
    } else {
      window.addEventListener("load", scheduleStart, {once: true});
    }

    return () => {
      disposed = true;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("load", scheduleStart);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
