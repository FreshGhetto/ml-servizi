import Link from "next/link";
import Image from "next/image";
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
  const deliverables = s.deliverables[locale] ?? s.deliverables.it ?? s.deliverables.en;
  const useCases = s.useCases[locale] ?? s.useCases.it ?? s.useCases.en;
  const deepDive = s.deepDive?.[locale] ?? s.deepDive?.it ?? s.deepDive?.en ?? [];
  const advantages = s.advantages?.[locale] ?? s.advantages?.it ?? s.advantages?.en ?? [];
  const gallery = s.gallery ?? [];
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
      {deepDive.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Approccio tecnico" : "Technical approach"}
          </h2>
          {deepDive.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-[rgb(var(--muted))]">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Deliverable" : "Deliverables"}
          </h2>
          <ul className="link-underline mt-3 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
            {deliverables.map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Casi d'uso" : "Use cases"}
          </h2>
          <ul className="link-underline mt-3 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
            {useCases.map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      {advantages.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Vantaggi operativi" : "Operational benefits"}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
            {advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {gallery.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[rgb(var(--fg))]">
            {locale === "it" ? "Galleria tecnica" : "Technical gallery"}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
