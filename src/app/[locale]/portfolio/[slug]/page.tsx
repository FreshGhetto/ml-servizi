import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MotionCard} from "@/components/motion/MotionCard";
import {TechnicalGallery} from "@/components/portfolio/TechnicalGallery";
import {portfolio} from "@/content/portfolio";
import {SafeImage} from "@/components/ui/SafeImage";

export default async function PortfolioDetail({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  const item = portfolio.find((x) => x.slug === slug);
  if (!item) {
    return (
      <Container className="py-14">
        <p className="link-underline text-[rgb(var(--muted))]">
          {locale === "it" ? "Caso studio non trovato." : "Case study not found."}
        </p>
        <Link
          className="mt-4 inline-block link-underline text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          href={`/${locale}/portfolio`}
        >
          ← {d.Nav.portfolio}
        </Link>
      </Container>
    );
  }

  const technicalGallery = [
    {
      src: item.coverImage,
      alt: `${L(item.title)} - ${locale === "it" ? "copertina" : "cover"}`
    },
    ...item.gallery.map((img, index) => ({
      src: img,
      alt: `${L(item.title)} - ${locale === "it" ? "galleria" : "gallery"} ${index + 1}`
    }))
  ];

  return (
    <Container className="py-14">
      <Link className="link-underline text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href={`/${locale}/portfolio`}>
        ← {d.Nav.portfolio}
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[rgb(var(--border))]">
          <SafeImage
            src={item.coverImage}
            alt={`${L(item.title)} - ${L(item.location)}`}
            fallbackSrc="/hero/03.jpg"
            fill
            className="object-cover scale-[1.03] transform-gpu"
            sizes="(max-width: 1024px) 100vw, 62vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.16em] opacity-90">{item.year}</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{L(item.title)}</h1>
            <p className="mt-2 text-sm opacity-95">{L(item.location)}</p>
          </div>
        </div>

        <MotionCard className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-300">
            {locale === "it" ? "Scheda progetto" : "Project profile"}
          </p>
          <div className="mt-5 space-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                {locale === "it" ? "Ambito" : "Sector"}
              </p>
              <p className="mt-1 font-medium text-[rgb(var(--fg))]">{L(item.sector)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                {locale === "it" ? "Intervento" : "Intervention"}
              </p>
              <p className="mt-1 text-[rgb(var(--muted))]">{L(item.summary)}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs font-medium text-[rgb(var(--muted))]"
              >
                {tag}
              </span>
            ))}
          </div>
        </MotionCard>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <MotionCard className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
            {locale === "it" ? "Descrizione" : "Overview"}
          </p>
          <p className="mt-4 leading-relaxed text-[rgb(var(--muted))]">{L(item.description)}</p>
        </MotionCard>

        <MotionCard className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
            {locale === "it" ? "Attivita svolte" : "Scope of work"}
          </p>
          <ul className="mt-4 space-y-3">
            {L(item.scope).map((point: string) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </MotionCard>
      </div>

      <TechnicalGallery images={technicalGallery} locale={locale} />
    </Container>
  );
}
