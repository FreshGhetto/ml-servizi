import Link from "next/link";
import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MotionCard} from "@/components/motion/MotionCard";
import {portfolio} from "@/content/portfolio";
import {SafeImage} from "@/components/ui/SafeImage";
import {buildBreadcrumbJsonLd, buildItemListJsonLd, buildLocalizedMetadata, localizedUrl} from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;

  return buildLocalizedMetadata({
    locale,
    pathname: "/portfolio",
    title: locale === "it" ? "Portfolio lavori tecnici" : "Technical Project Portfolio",
    description:
      locale === "it"
        ? "Casi studio su rilievi, documentazione tecnica, supporto cantiere e modellazione."
        : "Case studies on surveying, technical documentation, site support and modelling.",
    keywords:
      locale === "it"
        ? ["portfolio rilievi", "casi studio edilizia", "documentazione tecnica"]
        : ["surveying portfolio", "construction case studies", "technical documentation projects"]
  });
}

export default async function PortfolioPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");
  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: locale === "it" ? "Lavori" : "Work", url: localizedUrl(locale, "/portfolio")}
    ]),
    buildItemListJsonLd(
      locale === "it" ? "Portfolio tecnico" : "Technical portfolio",
      portfolio.map((item) => ({
        name: L(item.title),
        url: localizedUrl(locale, `/portfolio/${item.slug}`)
      }))
    )
  ];

  return (
    <Container className="py-14 sm:py-16">
      <StructuredData data={structuredData} />
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          {locale === "it" ? "Portfolio tecnico" : "Technical portfolio"}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
          {d.Portfolio?.title ?? d.Nav.portfolio}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted))]">
          {d.Portfolio?.subtitle ??
            (locale === "it"
              ? "Interventi selezionati con descrizione sintetica, ambito operativo e materiali visivi."
              : "Selected projects with concise description, operational scope and visual materials.")}
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:gap-7 md:grid-cols-2">
        {portfolio.map((item) => (
          <MotionCard key={item.slug} className="h-full">
            <div className="relative -mb-px aspect-[4/3] sm:aspect-[16/10]">
              <SafeImage
                src={item.cardImage ?? item.coverImage}
                alt={`${L(item.title)} - ${L(item.location)}`}
                fallbackSrc="/hero/03.jpg"
                fill
                quality={46}
                className="object-cover scale-[1.015] transform-gpu"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/14 via-black/4 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/4 to-transparent opacity-0 transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex flex-col items-start gap-3">
                  <p className="inline-flex w-fit rounded-full bg-black/70 px-2.5 py-1 text-sm font-medium tracking-[0.08em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                    {item.year}
                  </p>
                  <p className="inline-flex w-fit rounded-full bg-black/70 px-2.5 py-1 text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                    {L(item.sector)}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7">
              <div className="text-base font-semibold text-[rgb(var(--fg))] sm:text-lg">{L(item.title)}</div>
              <div className="mt-2 text-sm text-[rgb(var(--muted))]">{L(item.location)}</div>
              <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">{L(item.summary)}</p>

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

              <Link
                className="mt-6 inline-flex text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                href={`/${locale}/portfolio/${item.slug}`}
              >
                {d.Portfolio?.viewCase ?? (locale === "it" ? "Vedi caso studio" : "View case study")}
                {" →"}
              </Link>
            </div>
          </MotionCard>
        ))}
      </div>
    </Container>
  );
}

