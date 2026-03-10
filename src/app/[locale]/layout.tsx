import type {Metadata} from "next";
import {defaultLocale, locales, type Locale} from "@/i18n/routing";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Providers} from "@/components/Providers";
import {BackToTop} from "@/components/BackToTop";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
import {buildLocalizedMetadata, buildOrganizationJsonLd, buildWebsiteJsonLd} from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale: localeParam} = await params;
  const locale = (locales as readonly string[]).includes(localeParam)
    ? (localeParam as Locale)
    : defaultLocale;
  const d = getDict(locale as any);

  return buildLocalizedMetadata({
    locale,
    pathname: "/",
    title: d.Metadata?.title ?? "ML Servizi",
    description: d.Metadata?.description ?? d.Home.heroSubtitle,
    keywords:
      locale === "it"
        ? [
            "rilievi tecnici",
            "fotogrammetria drone",
            "contabilita lavori",
            "modellazione 3D",
            "veneto"
          ]
        : [
            "technical surveying",
            "drone photogrammetry",
            "construction accounting",
            "3d modelling",
            "italy"
          ]
  });
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);

  return (
    <Providers>
      <StructuredData data={[buildOrganizationJsonLd(locale), buildWebsiteJsonLd(locale)]} />
      <Header locale={locale} />
      <main className="pt-16">{children}</main>
      <BackToTop label={d.Common?.backToTop ?? (locale === "it" ? "Torna su" : "Back to top")} />
      <Footer locale={locale} />
    </Providers>
  );
}
