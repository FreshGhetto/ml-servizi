"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {useMemo} from "react";
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
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function WorkCard({item, locale, seeWorkLabel}: {item: CaseStudy; locale: Locale; seeWorkLabel: string}) {
  return (
    <MotionCard className="h-full">
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
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5200,
        stopOnMouseEnter: true,
        stopOnInteraction: false
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: items.length > 1,
      align: "start",
      duration: 28
    },
    [autoplay]
  );

  if (items.length === 0) return null;

  const canSlide = items.length > 1;
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

  return (
    <div className="relative mt-8">
      <button
        type="button"
        aria-label={locale === "it" ? "Lavoro precedente" : "Previous work"}
        onClick={onPrev}
        disabled={!canSlide}
        className="ui-smooth absolute left-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/88 text-[rgb(var(--muted))] shadow-[0_8px_22px_rgba(2,6,23,0.12)] backdrop-blur-sm transition-[transform,box-shadow,border-color,color,background-color] duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[52%] hover:border-blue-300/70 hover:bg-[rgb(var(--bg))] hover:text-blue-700 hover:shadow-[0_12px_24px_rgba(2,6,23,0.16)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-[-50%] md:-left-5 dark:hover:border-blue-500/60 dark:hover:text-blue-300"
      >
        <Chevron dir="left" />
      </button>

      <button
        type="button"
        aria-label={locale === "it" ? "Lavoro successivo" : "Next work"}
        onClick={onNext}
        disabled={!canSlide}
        className="ui-smooth absolute right-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/88 text-[rgb(var(--muted))] shadow-[0_8px_22px_rgba(2,6,23,0.12)] backdrop-blur-sm transition-[transform,box-shadow,border-color,color,background-color] duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[52%] hover:border-blue-300/70 hover:bg-[rgb(var(--bg))] hover:text-blue-700 hover:shadow-[0_12px_24px_rgba(2,6,23,0.16)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-[-50%] md:-right-5 dark:hover:border-blue-500/60 dark:hover:text-blue-300"
      >
        <Chevron dir="right" />
      </button>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-6 flex touch-pan-y">
          {items.map((item) => (
            <div key={item.slug} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%]">
              <WorkCard item={item} locale={locale} seeWorkLabel={seeWorkLabel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

