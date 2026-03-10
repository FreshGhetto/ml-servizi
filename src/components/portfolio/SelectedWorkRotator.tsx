"use client";

import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import type {FocusEvent} from "react";
import type {Locale} from "@/i18n/routing";
import type {CaseStudy} from "@/content/portfolio";
import {MotionCard} from "@/components/motion/MotionCard";
import {SafeImage} from "@/components/ui/SafeImage";

const ROTATION_MS = 5200;
const TRANSITION_MS = 760;

type SelectedWorkRotatorProps = {
  locale: Locale;
  items: CaseStudy[];
  seeWorkLabel: string;
};

function Chevron({dir}: {dir: "left" | "right"}) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function getPair(items: CaseStudy[], start: number) {
  if (items.length === 0) return [];
  if (items.length === 1) return [items[0]];
  return [items[start], items[(start + 1) % items.length]];
}

function WorkCard({item, locale, seeWorkLabel}: {item: CaseStudy; locale: Locale; seeWorkLabel: string}) {
  return (
    <MotionCard key={item.slug} className="h-full">
      <Link
        href={`/${locale}/portfolio/${item.slug}`}
        className="relative block aspect-[4/3] overflow-hidden no-underline sm:aspect-[16/10]"
        aria-label={`${locale === "it" ? "Apri lavoro" : "Open work"}: ${item.title[locale]}`}
      >
        <SafeImage
          src={item.cardImage ?? item.coverImage}
          alt={`${item.title[locale]} - ${item.location[locale]}`}
          fallbackSrc="/hero/03.jpg"
          fill
          quality={46}
          className="object-cover scale-[1.006] transform-gpu"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/14 via-black/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/4 to-transparent opacity-0 transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100" />
      </Link>
      <div className="p-5 sm:p-6">
        <div className="text-base font-semibold text-[rgb(var(--fg))] sm:text-[1.05rem]">{item.title[locale]}</div>
        <p className="link- mt-1 text-sm text-[rgb(var(--muted))]">{item.location[locale]}</p>
        <p className="link- mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{item.summary[locale]}</p>
        <Link
          className="mt-4 inline-flex text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          href={`/${locale}/portfolio/${item.slug}`}
        >
          {seeWorkLabel} →
        </Link>
      </div>
    </MotionCard>
  );
}

export function SelectedWorkRotator({locale, items, seeWorkLabel}: SelectedWorkRotatorProps) {
  const [activeStart, setActiveStart] = useState(0);
  const [nextStart, setNextStart] = useState<number | null>(null);
  const [nextVisible, setNextVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<1 | -1>(1);

  const currentPair = useMemo(() => getPair(items, activeStart), [items, activeStart]);
  const incomingPair = useMemo(() => {
    if (nextStart === null) return [];
    return getPair(items, nextStart);
  }, [items, nextStart]);

  const beginTransition = (direction: 1 | -1) => {
    if (items.length <= 1 || nextStart !== null) return;
    setTransitionDirection(direction);
    setNextStart((value) => {
      if (value !== null) return value;
      return (activeStart + direction + items.length) % items.length;
    });
  };

  useEffect(() => {
    if (items.length <= 2 || isPaused || nextStart !== null) return;

    const intervalId = window.setInterval(() => {
      setTransitionDirection(1);
      setNextStart((value) => {
        if (value !== null) return value;
        return (activeStart + 1) % items.length;
      });
    }, ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, [activeStart, isPaused, items.length, nextStart]);

  useEffect(() => {
    if (nextStart === null) return;

    const rafId = window.requestAnimationFrame(() => setNextVisible(true));
    const timeoutId = window.setTimeout(() => {
      setActiveStart(nextStart);
      setNextStart(null);
      setNextVisible(false);
    }, TRANSITION_MS);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [nextStart]);

  if (items.length === 0) return null;

  const onBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={onBlurCapture}
    >
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label={locale === "it" ? "Lavoro precedente" : "Previous work"}
          onClick={() => beginTransition(-1)}
          disabled={items.length <= 1 || nextStart !== null}
          className="ui-smooth inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 text-[rgb(var(--muted))] shadow-sm transition-[transform,box-shadow,border-color,color] duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 dark:hover:border-blue-500/60 dark:hover:text-blue-300"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          aria-label={locale === "it" ? "Lavoro successivo" : "Next work"}
          onClick={() => beginTransition(1)}
          disabled={items.length <= 1 || nextStart !== null}
          className="ui-smooth inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 text-[rgb(var(--muted))] shadow-sm transition-[transform,box-shadow,border-color,color] duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 dark:hover:border-blue-500/60 dark:hover:text-blue-300"
        >
          <Chevron dir="right" />
        </button>
      </div>

      <div
        className={`grid gap-6 md:grid-cols-2 transition-all duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          nextStart === null
            ? "translate-x-0 opacity-100"
            : transitionDirection === 1
              ? "-translate-x-6 opacity-0 pointer-events-none"
              : "translate-x-6 opacity-0 pointer-events-none"
        }`}
      >
        {currentPair.map((item, index) => (
          <div key={item.slug} className={index === 1 ? "hidden md:block" : undefined}>
            <WorkCard item={item} locale={locale} seeWorkLabel={seeWorkLabel} />
          </div>
        ))}
      </div>

      {nextStart !== null && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 grid gap-6 md:grid-cols-2 transition-all duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            nextVisible
              ? "translate-x-0 opacity-100"
              : transitionDirection === 1
                ? "translate-x-6 opacity-0"
                : "-translate-x-6 opacity-0"
          }`}
        >
          {incomingPair.map((item, index) => (
            <div key={item.slug} className={index === 1 ? "hidden md:block" : undefined}>
              <WorkCard item={item} locale={locale} seeWorkLabel={seeWorkLabel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
