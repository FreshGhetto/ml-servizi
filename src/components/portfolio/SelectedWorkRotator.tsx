"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {useEffect, useMemo, useState} from "react";
import type {Locale} from "@/i18n/routing";
import type {CaseStudy} from "@/content/portfolio";
import {MotionCard} from "@/components/motion/MotionCard";
import {SafeImage} from "@/components/ui/SafeImage";

type SelectedWorkRotatorProps = {
  locale: Locale;
  items: CaseStudy[];
  seeWorkLabel: string;
};

function Chevron({dir}: {dir: "left" | "right"}) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function WorkCard({item, locale, seeWorkLabel}: {item: CaseStudy; locale: Locale; seeWorkLabel: string}) {
  return (
    <MotionCard className="h-full rounded-[1.35rem] border-[rgb(var(--border))] bg-[rgb(var(--bg))]/96 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
      <Link
        href={`/${locale}/portfolio/${item.slug}`}
        className="group/image relative block aspect-[4/3] overflow-hidden no-underline sm:aspect-[16/10]"
        aria-label={`${locale === "it" ? "Apri lavoro" : "Open work"}: ${item.title[locale]}`}
      >
        <SafeImage
          src={item.cardImage ?? item.coverImage}
          alt={`${item.title[locale]} - ${item.location[locale]}`}
          fallbackSrc="/hero/03.jpg"
          fill
          quality={46}
          className="ui-smooth object-cover scale-[1.01] transform-gpu group-hover/image:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/8 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/10 to-transparent opacity-0 transition-opacity duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:opacity-100 group-focus-within/image:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-medium tracking-[0.03em] text-white/92 backdrop-blur-sm">
          {item.location[locale]}
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <div className="text-[1.04rem] font-semibold leading-snug text-[rgb(var(--fg))] sm:text-[1.1rem]">{item.title[locale]}</div>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{item.summary[locale]}</p>
        <Link
          className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          href={`/${locale}/portfolio/${item.slug}`}
        >
          {seeWorkLabel}
          <span className="ui-smooth text-base leading-none group-hover/link:translate-x-0.5">→</span>
        </Link>
      </div>
    </MotionCard>
  );
}

export function SelectedWorkRotator({locale, items, seeWorkLabel}: SelectedWorkRotatorProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        jump: false,
        stopOnMouseEnter: true,
        stopOnInteraction: false
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: items.length > 1,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": {slidesToScroll: 2}
      },
      duration: 36
    },
    [autoplay]
  );

  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const canSlide = items.length > 1;

  useEffect(() => {
    if (!emblaApi) return;

    const syncState = () => {
      setSelectedSnap(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };

    syncState();
    emblaApi.on("select", syncState);
    emblaApi.on("reInit", syncState);

    return () => {
      emblaApi.off("select", syncState);
      emblaApi.off("reInit", syncState);
    };
  }, [emblaApi]);

  if (items.length === 0) return null;

  const onPrev = () => {
    if (!emblaApi || !canSlide) return;
    emblaApi.scrollPrev();
    autoplay.reset();
  };
  const onNext = () => {
    if (!emblaApi || !canSlide) return;
    emblaApi.scrollNext();
    autoplay.reset();
  };

  const onSnapClick = (index: number) => {
    if (!emblaApi || !canSlide) return;
    emblaApi.scrollTo(index);
    autoplay.reset();
  };

  return (
    <div className="relative mt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-4 h-36 w-36 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-900/25"
      />

      <div className="relative rounded-[1.7rem] border border-[rgb(var(--border))] bg-gradient-to-b from-[rgb(var(--bg))] via-[rgb(var(--bg))]/98 to-[rgb(var(--bg))] p-3 shadow-[0_20px_45px_rgba(15,23,42,0.09)] sm:p-4">
      <button
        type="button"
        aria-label={locale === "it" ? "Lavoro precedente" : "Previous work"}
        onClick={onPrev}
        disabled={!canSlide}
        className="ui-smooth absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/88 text-[rgb(var(--muted))] shadow-[0_12px_28px_rgba(2,6,23,0.14)] backdrop-blur-sm transition-[transform,box-shadow,border-color,color,background-color] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[53%] hover:border-blue-300/70 hover:bg-[rgb(var(--bg))] hover:text-blue-700 hover:shadow-[0_16px_34px_rgba(2,6,23,0.18)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-[-50%] md:inline-flex dark:hover:border-blue-500/60 dark:hover:text-blue-300"
      >
        <Chevron dir="left" />
      </button>

      <button
        type="button"
        aria-label={locale === "it" ? "Lavoro successivo" : "Next work"}
        onClick={onNext}
        disabled={!canSlide}
        className="ui-smooth absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/88 text-[rgb(var(--muted))] shadow-[0_12px_28px_rgba(2,6,23,0.14)] backdrop-blur-sm transition-[transform,box-shadow,border-color,color,background-color] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[53%] hover:border-blue-300/70 hover:bg-[rgb(var(--bg))] hover:text-blue-700 hover:shadow-[0_16px_34px_rgba(2,6,23,0.18)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-[-50%] md:inline-flex dark:hover:border-blue-500/60 dark:hover:text-blue-300"
      >
        <Chevron dir="right" />
      </button>

      <div ref={emblaRef} className="overflow-hidden rounded-[1.28rem] py-1">
        <div className="-ml-5 flex touch-pan-y transform-gpu will-change-transform sm:-ml-6">
          {items.map((item) => (
            <div key={item.slug} className="min-w-0 flex-[0_0_100%] pl-5 sm:pl-6 md:flex-[0_0_50%]">
              <WorkCard item={item} locale={locale} seeWorkLabel={seeWorkLabel} />
            </div>
          ))}
        </div>
      </div>

      {canSlide ? (
        <div className="mt-5 flex items-center justify-between gap-4 px-2 sm:px-3">
          <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--muted))]">
            {String(selectedSnap + 1).padStart(2, "0")} / {String(Math.max(snapCount, 1)).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-2">
            {Array.from({length: snapCount || 1}).map((_, index) => {
              const active = index === selectedSnap;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`${locale === "it" ? "Vai allo slide" : "Go to slide"} ${index + 1}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => onSnapClick(index)}
                  className={[
                    "ui-smooth h-2.5 rounded-full",
                    active
                      ? "w-7 bg-blue-600 shadow-[0_0_0_1px_rgba(37,99,235,0.15)] dark:bg-blue-300"
                      : "w-2.5 bg-[rgb(var(--border))] hover:bg-[rgb(var(--muted))]/55"
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
}
