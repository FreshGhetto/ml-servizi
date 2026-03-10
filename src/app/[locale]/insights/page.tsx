import Link from "next/link";
import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MotionCard} from "@/components/motion/MotionCard";
import {insights} from "@/content/insights";
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
    pathname: "/insights",
    title: locale === "it" ? "Approfondimenti tecnici" : "Technical Insights",
    description:
      locale === "it"
        ? "Guide pratiche su fotogrammetria, termografia e metodi di rilievo."
        : "Practical guides on photogrammetry, thermal imaging and survey methods.",
    keywords:
      locale === "it"
        ? ["guide fotogrammetria", "approfondimenti termografia", "metodi rilievo tecnico"]
        : ["photogrammetry guides", "thermal survey insights", "survey method articles"]
  });
}

export default async function InsightsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");
  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: locale === "it" ? "Approfondimenti" : "Insights", url: localizedUrl(locale, "/insights")}
    ]),
    buildItemListJsonLd(
      locale === "it" ? "Approfondimenti tecnici" : "Technical insights",
      insights.map((item) => ({
        name: L(item.title),
        url: localizedUrl(locale, `/insights/${item.slug}`)
      }))
    )
  ];

  return (
    <Container className="py-14">
      <StructuredData data={structuredData} />
      <h1 className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{d.Nav.insights}</h1>
      <p className="link- mt-3 text-[rgb(var(--muted))]">
        {locale === "it"
          ? "Spiegazioni semplici per capire metodi di rilievo, fotogrammetria e termografia."
          : "Plain-language guides on surveying, photogrammetry and thermal imaging."}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {insights.map((item) => (
          <MotionCard key={item.slug} className="p-7">
            <div className="text-lg font-semibold text-[rgb(var(--fg))]">{L(item.title)}</div>
            <p className="link- mt-2 text-sm text-[rgb(var(--muted))]">{L(item.excerpt)}</p>
            <Link
              className="ui-smooth mt-4 inline-flex text-sm font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
              href={`/${locale}/insights/${item.slug}`}
            >
              {locale === "it" ? "Leggi" : "Read"} →
            </Link>
          </MotionCard>
        ))}
      </div>
    </Container>
  );
}
