import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import type {Locale} from "@/i18n/routing";
import {locales} from "@/i18n/routing";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {services} from "@/content/services";
import {buildBreadcrumbJsonLd, buildLocalizedMetadata, buildServiceJsonLd, localizedUrl} from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({locale, slug: service.slug})));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return buildLocalizedMetadata({
      locale,
      pathname: `/services/${slug}`,
      title: locale === "it" ? "Servizio non trovato" : "Service not found",
      description: locale === "it" ? "Il servizio richiesto non e disponibile." : "The requested service is unavailable.",
      noIndex: true
    });
  }

  return buildLocalizedMetadata({
    locale,
    pathname: `/services/${slug}`,
    title: service.title[locale],
    description: service.short[locale],
    keywords: service.category ? [service.category, service.title[locale]] : [service.title[locale]]
  });
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const c = d.Common;
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  const s = services.find((x) => x.slug === slug);
  if (!s) {
    notFound();
  }
  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: locale === "it" ? "Servizi" : "Services", url: localizedUrl(locale, "/services")},
      {name: L(s.title), url: localizedUrl(locale, `/services/${s.slug}`)}
    ]),
    buildServiceJsonLd(locale, s)
  ];

  return (
    <Container className="py-14">
      <StructuredData data={structuredData} />
      <Link className="link-underline text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href={`/${locale}/services`}>
        ← {d.Nav.services}
      </Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{L(s.title)}</h1>
      <p className="link-underline mt-3 text-[rgb(var(--muted))]">{L(s.short)}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Deliverable" : "Deliverables"}
          </h2>
          <ul className="link-underline mt-3 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
            {L(s.deliverables).map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Casi d'uso" : "Use cases"}
          </h2>
          <ul className="link-underline mt-3 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
            {L(s.useCases).map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6">
        <div className="text-base font-semibold text-[rgb(var(--fg))]">{d.Home.talkTitle}</div>
        <p className="link-underline mt-1 text-sm text-[rgb(var(--muted))]">{d.Home.talkDesc}</p>
        <Link
          href={`/${locale}/contact`}
          className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 active:shadow-sm"
        >
          {c.requestQuote}
        </Link>
      </div>
    </Container>
  );
}
