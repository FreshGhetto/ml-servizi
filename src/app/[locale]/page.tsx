import type {Locale} from "@/i18n/routing";
import Link from "next/link";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MapEmbed, MAPS_PLACE_URL} from "@/components/MapEmbed";
import {SectionTitle} from "@/components/SectionTitle";
import {HeroSection} from "@/components/HeroSection";
import {services} from "@/content/services";
import {portfolio} from "@/content/portfolio";
import {MotionCard} from "@/components/motion/MotionCard";
import {SafeImage} from "@/components/ui/SafeImage";

export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const d = getDict(locale as any);
  const t = d.Home;
  const c = d.Common;

  const slides = [
    {src: "/hero/hero-photogrammetry-church-complex.webp", alt: "Fotogrammetria 3D complesso storico", textTone: "light" as const},
    {src: "/hero/hero-floorplan-bim.webp", alt: "Pianta architettonica e modellazione BIM", textTone: "dark" as const},
    {src: "/hero/hero-pointcloud-industrial-site.webp", alt: "Nuvola di punti di sito industriale", textTone: "light" as const},
    {src: "/hero/hero-pointcloud-monument.webp", alt: "Rilievo 3D monumentale e paesaggistico", textTone: "light" as const},
    {src: "/hero/hero-bim-modern-building.webp", alt: "Modello BIM edificio moderno", textTone: "light" as const},
    {src: "/hero/hero-bim-church-facade.webp", alt: "Modello BIM facciata di chiesa storica", textTone: "dark" as const}
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        locale={locale}
        slides={slides}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryCta={t.primaryCta}
        secondaryCta={t.secondaryCta}
      />

      {/* Key services */}
      <section className="py-14">
        <Container>
          <SectionTitle title={t.servicesTitle} subtitle={t.servicesDesc} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.slice(0, 4).map((s) => (
              <MotionCard key={s.slug} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-[rgb(var(--fg))]">{s.title[locale]}</div>
                    <p className="link- mt-2 text-sm text-[rgb(var(--muted))]">{s.short[locale]}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                    href={`/${locale}/services/${s.slug}`}
                  >
                    {c.requestQuote}
                  </a>
                  <a
                    className="link-underline text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                    href={`/${locale}/insights`}
                  >
                    {c.learnMore}
                  </a>
                </div>
              </MotionCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-14">
        <Container>
          <SectionTitle title={t.workTitle} subtitle={t.workDesc} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {portfolio.slice(0, 2).map((p) => (
              <MotionCard key={p.slug} className="h-full overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <SafeImage
                    src={p.cardImage ?? p.coverImage}
                    alt={`${p.title[locale]} - ${p.location[locale]}`}
                    fallbackSrc="/hero/03.jpg"
                    fill
                    quality={46}
                    className="object-cover scale-[1.015] transform-gpu"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/14 via-black/4 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/4 to-transparent opacity-0 transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-base font-semibold text-[rgb(var(--fg))] sm:text-[1.05rem]">{p.title[locale]}</div>
                  <p className="link- mt-1 text-sm text-[rgb(var(--muted))]">{p.location[locale]}</p>
                  <p className="link- mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{p.summary[locale]}</p>
                  <a
                    className="mt-4 inline-flex text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                    href={`/${locale}/portfolio/${p.slug}`}
                  >
                    {t.seeWork} →
                  </a>
                </div>
              </MotionCard>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              className="group inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-blue-300/70 hover:bg-blue-50/55 hover:text-blue-600 active:bg-blue-100/60 dark:text-blue-300 dark:hover:border-blue-500/60 dark:hover:bg-blue-950/40 dark:hover:text-blue-200 dark:active:bg-blue-950/50"
              href={`/${locale}/portfolio`}
            >
              {t.allWork ?? (locale === "it" ? "Vedi tutti i lavori" : "View all work")}
              <span className="ui-smooth text-base leading-none group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Location (after work) */}
      <section className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
        <Container className="py-14">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">{t.locationTitle}</h2>
              <p className="link- mt-3 text-[rgb(var(--muted))]">{t.locationDesc}</p>
              <MotionCard className="mt-6 p-6">
                <div className="link- text-sm font-medium text-[rgb(var(--muted))]">
                  {t.hoursLabel ?? (locale === "it" ? "Orari" : "Hours")}
                </div>
                <div className="mt-2 text-[rgb(var(--fg))]">
                  {t.hoursValue ??
                    (locale === "it"
                      ? "Lunedì – Venerdì • 08:30 – 12:30 / 14:00 – 18:00"
                      : "Mon – Fri • 08:30 – 12:30 / 14:00 – 18:00")}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <Link className="ui-smooth link- text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 link-underline" href={`/${locale}/contact`}>
                    {c.requestQuote} →
                  </Link>
                  <a
                    className="ui-smooth link- text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                    href={MAPS_PLACE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.openInMaps} →
                  </a>
                </div>
              </MotionCard>
            </div>
            <MapEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}


