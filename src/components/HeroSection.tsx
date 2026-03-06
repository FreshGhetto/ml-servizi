"use client";

import {useState} from "react";
import type {Locale} from "@/i18n/routing";
import {Container} from "@/components/Container";
import {HeroBackgroundCarousel} from "@/components/HeroBackgroundCarousel";
import {MotionPrimaryButton, MotionSecondaryButton} from "@/components/motion/MotionButton";

type Slide = {
  src: string;
  alt: string;
  textTone?: "light" | "dark";
};

type HeroSectionProps = {
  locale: Locale;
  slides: Slide[];
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export function HeroSection({
  locale,
  slides,
  title,
  subtitle,
  primaryCta,
  secondaryCta
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tone = slides[activeIndex]?.textTone ?? "light";
  const isDarkText = tone === "dark";

  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackgroundCarousel slides={slides} onIndexChange={setActiveIndex} />

      <Container className="relative z-20 py-24 sm:py-32">
        <div
          className={`max-w-2xl rounded-3xl p-8 shadow-[0_14px_52px_rgba(2,6,23,0.28)] backdrop-blur-[3px] sm:p-10 ${
            isDarkText
              ? "bg-white/42"
              : "bg-black/18"
          } motion-safe:transition-colors motion-safe:duration-300 motion-safe:delay-75 motion-safe:ease-out motion-reduce:transition-none`}
        >
          <h1
            className={`text-3xl font-semibold leading-tight tracking-tight sm:text-5xl [text-wrap:balance] ${
              isDarkText ? "text-slate-900" : "text-white"
            } motion-safe:transition-[color,text-shadow] motion-safe:duration-280 motion-safe:delay-75 motion-safe:ease-out motion-reduce:transition-none`}
            style={
              isDarkText
                ? {textShadow: "0 2px 10px rgba(255,255,255,0.35), 0 1px 3px rgba(255,255,255,0.25)"}
                : {textShadow: "0 8px 18px rgba(2,6,23,0.46), 0 2px 6px rgba(2,6,23,0.38)"}
            }
          >
            {title}
          </h1>

          <p
            className={`mt-4 max-w-xl text-lg [text-wrap:pretty] ${isDarkText ? "text-slate-800" : "text-slate-100/95"} motion-safe:transition-[color,text-shadow] motion-safe:duration-280 motion-safe:delay-75 motion-safe:ease-out motion-reduce:transition-none`}
            style={
              isDarkText
                ? {textShadow: "0 2px 8px rgba(255,255,255,0.28), 0 1px 3px rgba(255,255,255,0.2)"}
                : {textShadow: "0 6px 16px rgba(2,6,23,0.44), 0 2px 6px rgba(2,6,23,0.34)"}
            }
          >
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MotionPrimaryButton href={`/${locale}/services`}>
              {primaryCta}
            </MotionPrimaryButton>
            <MotionSecondaryButton
              className="!border-transparent !bg-black/[0.42] !text-white hover:!bg-black/[0.56] dark:!bg-black/[0.42] dark:!text-white dark:hover:!bg-black/[0.56]"
              href={`/${locale}/contact`}
            >
              {secondaryCta}
            </MotionSecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
