"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";

type Slide = {
  src: string;
  alt: string;
  textTone?: "light" | "dark";
};

export function HeroBackgroundCarousel({
  slides,
  onIndexChange
}: {
  slides: Slide[];
  onIndexChange?: (index: number) => void;
}) {
  const FADE_MS = 820;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [activeVisible, setActiveVisible] = useState(true);

  const active = slides[index];
  const prev = prevIndex !== null ? slides[prevIndex] : null;

  function markLoaded(src: string) {
    setLoaded((current) => (current[src] ? current : {...current, [src]: true}));
  }

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => {
        setActiveVisible(false);
        setPrevIndex(current);
        return (current + 1) % slides.length;
      });
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (!activeVisible) return;
    onIndexChange?.(index);
  }, [activeVisible, index, onIndexChange]);

  useEffect(() => {
    if (slides.length < 2 || !active) return;
    const next = slides[(index + 1) % slides.length];
    if (!next) return;

    const img = new window.Image();
    img.decoding = "async";
    img.src = next.src;
  }, [active, index, slides]);

  useEffect(() => {
    if (!active) return;
    if (prevIndex === null) {
      setActiveVisible(true);
      return;
    }
    if (!loaded[active.src]) return;

    const raf = window.requestAnimationFrame(() => setActiveVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, [active, loaded, prevIndex]);

  useEffect(() => {
    if (prevIndex === null || !activeVisible) return;
    const t = window.setTimeout(() => setPrevIndex(null), FADE_MS + 40);
    return () => window.clearTimeout(t);
  }, [FADE_MS, activeVisible, prevIndex]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.setProperty("--hero-pan-x", "0%");
      return;
    }

    let rafId = 0;
    const tick = (time: number) => {
      const x = Math.sin(time / 5000) * 0.8;
      el.style.setProperty("--hero-pan-x", `${x}%`);
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      el.style.removeProperty("--hero-pan-x");
    };
  }, []);

  if (slides.length === 0) return null;

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 z-0">
      {prev && (
        <div
          key={`prev-${prev.src}`}
          className={`absolute inset-0 z-10 transition-opacity ease-out ${activeVisible ? "opacity-0" : "opacity-100"}`}
          style={{transitionDuration: `${FADE_MS}ms`}}
        >
          <Image
            src={prev.src}
            alt={prev.alt}
            fill
            className="object-cover will-change-transform"
            style={{transform: "scale(1.03) translate3d(var(--hero-pan-x,0%),0,0)"}}
            sizes="100vw"
            quality={68}
            loading="eager"
            onLoad={() => markLoaded(prev.src)}
            onError={() => markLoaded(prev.src)}
          />
        </div>
      )}

      <div
        key={`active-${active.src}`}
        className={`absolute inset-0 z-20 transition-opacity ease-out ${activeVisible ? "opacity-100" : "opacity-0"}`}
        style={{transitionDuration: `${FADE_MS}ms`}}
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-cover will-change-transform"
          style={{transform: "scale(1.03) translate3d(var(--hero-pan-x,0%),0,0)"}}
          sizes="100vw"
          quality={68}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          onLoad={() => {
            markLoaded(active.src);
            window.requestAnimationFrame(() => setActiveVisible(true));
          }}
          onError={() => {
            markLoaded(active.src);
            setActiveVisible(true);
          }}
        />
      </div>

      <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/10 via-transparent to-black/4" />
    </div>
  );
}
