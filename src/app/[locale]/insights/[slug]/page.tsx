import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import type {Locale} from "@/i18n/routing";
import {locales} from "@/i18n/routing";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {insights} from "@/content/insights";
import {buildArticleJsonLd, buildBreadcrumbJsonLd, buildLocalizedMetadata, localizedUrl} from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => insights.map((post) => ({locale, slug: post.slug})));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    return buildLocalizedMetadata({
      locale,
      pathname: `/insights/${slug}`,
      title: locale === "it" ? "Articolo non trovato" : "Article not found",
      description: locale === "it" ? "L'articolo richiesto non e disponibile." : "The requested article is unavailable.",
      noIndex: true
    });
  }

  return buildLocalizedMetadata({
    locale,
    pathname: `/insights/${slug}`,
    title: post.title[locale],
    description: post.excerpt[locale],
    type: "article",
    keywords:
      locale === "it"
        ? ["approfondimento tecnico", "fotogrammetria", "termografia", "rilievo"]
        : ["technical article", "photogrammetry", "thermal imaging", "surveying"]
  });
}

export default async function InsightDetail({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  const post = insights.find((x) => x.slug === slug);
  if (!post) {
    notFound();
  }
  const gallery = post.gallery ?? [];

  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: locale === "it" ? "Approfondimenti" : "Insights", url: localizedUrl(locale, "/insights")},
      {name: L(post.title), url: localizedUrl(locale, `/insights/${post.slug}`)}
    ]),
    buildArticleJsonLd(locale, post)
  ];

  return (
    <Container className="py-14">
      <StructuredData data={structuredData} />
      <Link className="link-underline text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href={`/${locale}/insights`}>
        ← {d.Nav.insights}
      </Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{L(post.title)}</h1>
      <p className="mt-3 text-[rgb(var(--muted))]">{L(post.excerpt)}</p>

      <div className="mt-10 space-y-4">
        {(L(post.body) as any[]).map((para: string, i: number) => (
          <p key={i} className="text-[rgb(var(--muted))] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
      {gallery.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Immagini e mappe" : "Images and maps"}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-3 text-xs leading-relaxed text-[rgb(var(--muted))]">
                    {item.caption[locale]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
