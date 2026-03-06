"use client";

import {useEffect, useMemo, useState} from "react";
import type {Locale} from "@/i18n/routing";
import {SafeImage} from "@/components/ui/SafeImage";

type GalleryImage = {
  src: string;
  alt: string;
};

type TechnicalGalleryProps = {
  images: GalleryImage[];
  locale: Locale;
};

export function TechnicalGallery({images, locale}: TechnicalGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const prepared = useMemo(() => {
    const seen = new Set<string>();
    return images.filter((img) => {
      if (seen.has(img.src)) return false;
      seen.add(img.src);
      return true;
    });
  }, [images]);

  const isOpen = openIndex !== null;

  function close() {
    setOpenIndex(null);
  }

  function next() {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % prepared.length);
  }

  function prev() {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + prepared.length) % prepared.length);
  }

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        return;
      }
      if (e.key === "ArrowRight") {
        setOpenIndex((current) => (current === null ? current : (current + 1) % prepared.length));
        return;
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((current) => (current === null ? current : (current - 1 + prepared.length) % prepared.length));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, prepared.length]);

  if (prepared.length === 0) return null;

  const selected = openIndex !== null ? prepared[openIndex] : null;

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
          {locale === "it" ? "Galleria tecnica" : "Technical gallery"}
        </h2>
        <p className="text-sm text-[rgb(var(--muted))]">
          {locale === "it" ? `${prepared.length} immagini` : `${prepared.length} images`}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {prepared.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-left"
            aria-label={locale === "it" ? `Apri immagine ${index + 1}` : `Open image ${index + 1}`}
          >
            <SafeImage
              src={img.src}
              alt={img.alt}
              fallbackSrc="/hero/03.jpg"
              fill
              className="object-cover scale-[1.03] transform-gpu transition-transform duration-200 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
              {locale === "it" ? "Ingrandisci" : "Zoom"}
            </span>
          </button>
        ))}
      </div>

      {isOpen && selected && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 pb-3 text-white">
              <p className="text-sm">
                {openIndex! + 1} / {prepared.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/35 px-3 py-1 text-xs font-medium hover:bg-white/10"
              >
                {locale === "it" ? "Chiudi" : "Close"}
              </button>
            </div>

            <div className="relative flex-1">
              <SafeImage
                src={selected.src}
                alt={selected.alt}
                fallbackSrc="/hero/03.jpg"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 text-white">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-white/35 px-4 py-2 text-xs font-medium hover:bg-white/10"
              >
                {locale === "it" ? "Precedente" : "Previous"}
              </button>
              <a
                href={selected.src}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/85 underline underline-offset-4 hover:text-white"
              >
                {locale === "it" ? "Apri file originale" : "Open original file"}
              </a>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-white/35 px-4 py-2 text-xs font-medium hover:bg-white/10"
              >
                {locale === "it" ? "Successiva" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
