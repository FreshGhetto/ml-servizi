import Link from "next/link";
import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MotionCard} from "@/components/motion/MotionCard";
import {services} from "@/content/services";
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
    pathname: "/services",
    title: locale === "it" ? "Servizi tecnici" : "Technical Services",
    description:
      locale === "it"
        ? "Rilievi, drone, termografia, contabilita lavori e modellazione 3D con deliverable tecnici chiari."
        : "Surveying, drones, thermal inspections, construction accounting and 3D modelling with clear technical deliverables.",
    keywords:
      locale === "it"
        ? ["servizi rilievo", "fotogrammetria drone", "contabilita sal", "modellazione 3d"]
        : ["surveying services", "drone photogrammetry service", "construction accounting service", "3d modelling service"]
  });
}

export default async function ServicesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const c = d.Common;
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");
  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: locale === "it" ? "Servizi" : "Services", url: localizedUrl(locale, "/services")}
    ]),
    buildItemListJsonLd(
      locale === "it" ? "Servizi tecnici" : "Technical services",
      services.map((service) => ({
        name: L(service.title),
        url: localizedUrl(locale, `/services/${service.slug}`)
      }))
    )
  ];

  return (
    <Container className="py-14">
      <StructuredData data={structuredData} />
      <h1 className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{d.Nav.services}</h1>
      <p className="link- mt-3 text-[rgb(var(--muted))]">
        {locale === "it"
          ? "Rilievi, drone, termografia, contabilità lavori e modellazione 3D."
          : "Surveying, drones, thermal inspections, construction accounting and 3D modelling."}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((item) => (
          <MotionCard key={item.slug} className="p-7">
            <div className="text-lg font-semibold text-[rgb(var(--fg))]">{L(item.title)}</div>
            <p className="link- mt-2 text-sm text-[rgb(var(--muted))]">{L(item.short)}</p>

            <div className="mt-4 flex gap-4 text-sm">
              <Link
                className="font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                href={`/${locale}/services/${item.slug}`}
              >
                {c.learnMore} →
              </Link>
              <Link
                className="link- text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                href={`/${locale}/contact`}
              >
                {c.requestQuote}
              </Link>
            </div>
          </MotionCard>
        ))}
      </div>
    </Container>
  );
}
