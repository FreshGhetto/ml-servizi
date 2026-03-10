import type {Metadata} from "next";
import type {CaseStudy} from "@/content/portfolio";
import type {Insight} from "@/content/insights";
import type {Service} from "@/content/services";
import {defaultLocale, locales, type Locale} from "@/i18n/routing";

export const SITE_URL = "https://mlservizi.eu";
export const SITE_NAME = "ML Servizi";
export const DEFAULT_OG_IMAGE = "/hero/hero-photogrammetry-church-complex.png";
export const CONTACT_EMAIL = "mlservizi13@pec.it";
export const CONTACT_PHONE = "+39 351 544 7413";
export const MAPS_URL = "https://maps.google.com/?q=ML+Servizi+Venezia";

const LOCAL_KEYWORDS_BY_LOCALE: Record<Locale, string[]> = {
  it: [
    "Marghera",
    "Venezia",
    "Veneto",
    "servizi tecnici Marghera",
    "rilievi Venezia",
    "geometra Veneto"
  ],
  en: [
    "Marghera",
    "Venice",
    "Veneto",
    "technical services in Marghera",
    "surveying in Venice",
    "surveyor in Veneto"
  ]
};

const BCP47_BY_LOCALE: Record<Locale, string> = {
  it: "it-IT",
  en: "en-US"
};

const OG_LOCALE_BY_LOCALE: Record<Locale, string> = {
  it: "it_IT",
  en: "en_US"
};

const BUSINESS_ADDRESS_BY_LOCALE: Record<
  Locale,
  {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    streetAddress?: string;
    postalCode?: string;
  }
> = {
  it: {
    addressLocality: "Marghera",
    addressRegion: "VE",
    addressCountry: "IT"
  },
  en: {
    addressLocality: "Marghera",
    addressRegion: "VE",
    addressCountry: "IT"
  }
};

type MetadataInput = {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  keywords?: string[];
  imagePaths?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function withSiteName(title: string): string {
  if (title.toLowerCase().includes(SITE_NAME.toLowerCase())) return title;
  return `${title} | ${SITE_NAME}`;
}

function mergeKeywords(locale: Locale, keywords?: string[]): string[] | undefined {
  const merged = [...(keywords ?? []), ...LOCAL_KEYWORDS_BY_LOCALE[locale]].map((value) => value.trim()).filter(Boolean);
  if (!merged.length) return undefined;

  return Array.from(new Set(merged));
}

export function localizedPath(locale: Locale, pathname = "/"): string {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === "/") return `/${locale}`;
  return `/${locale}${normalizedPath}`;
}

export function absoluteUrl(pathname: string): string {
  if (/^https?:\/\//i.test(pathname)) return pathname;
  return new URL(pathname, SITE_URL).toString();
}

export function localizedUrl(locale: Locale, pathname = "/"): string {
  return absoluteUrl(localizedPath(locale, pathname));
}

export function buildLocalizedMetadata(input: MetadataInput): Metadata {
  const canonicalUrl = localizedUrl(input.locale, input.pathname);
  const normalizedPath = normalizePath(input.pathname);
  const imagePaths = input.imagePaths?.length ? input.imagePaths : [DEFAULT_OG_IMAGE];
  const images = imagePaths.map((path) => absoluteUrl(path));
  const languageAlternates = Object.fromEntries(
    locales.map((locale) => [BCP47_BY_LOCALE[locale], localizedUrl(locale, normalizedPath)])
  ) as Record<string, string>;

  languageAlternates["x-default"] = localizedUrl(defaultLocale, normalizedPath);

  return {
    title: withSiteName(input.title),
    description: input.description,
    keywords: mergeKeywords(input.locale, input.keywords),
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates
    },
    openGraph: {
      type: input.type ?? "website",
      url: canonicalUrl,
      title: withSiteName(input.title),
      description: input.description,
      siteName: SITE_NAME,
      locale: OG_LOCALE_BY_LOCALE[input.locale],
      alternateLocale: locales
        .filter((locale) => locale !== input.locale)
        .map((locale) => OG_LOCALE_BY_LOCALE[locale]),
      images: images.map((url) => ({url, alt: withSiteName(input.title)}))
    },
    twitter: {
      card: "summary_large_image",
      title: withSiteName(input.title),
      description: input.description,
      images
    },
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
          }
        }
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

type ItemListEntry = {
  name: string;
  url: string;
};

export function buildOrganizationJsonLd(locale: Locale): Record<string, unknown> {
  const address = BUSINESS_ADDRESS_BY_LOCALE[locale];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    logo: absoluteUrl("/brand/logos/ml-servizi-logo-default.png"),
    image: [absoluteUrl(DEFAULT_OG_IMAGE)],
    hasMap: MAPS_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        contactType: "customer support",
        availableLanguage: locales.map((value) => BCP47_BY_LOCALE[value])
      }
    ],
    address: {
      "@type": "PostalAddress",
      ...address
    },
    areaServed: [
      {"@type": "City", name: locale === "it" ? "Marghera" : "Marghera"},
      {"@type": "City", name: locale === "it" ? "Venezia" : "Venice"},
      {"@type": "AdministrativeArea", name: "Veneto"},
      {"@type": "Country", name: "Italy"},
      {"@type": "Country", name: "Switzerland"}
    ],
    keywords: LOCAL_KEYWORDS_BY_LOCALE[locale].join(", "),
    availableLanguage: locales.map((value) => BCP47_BY_LOCALE[value]),
    sameAs: [MAPS_URL]
  };
}

export function buildWebsiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: BCP47_BY_LOCALE[locale],
    publisher: {"@id": absoluteUrl("/#organization")}
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function buildItemListJsonLd(name: string, entries: ItemListEntry[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      url: entry.url
    }))
  };
}

export function buildServiceJsonLd(locale: Locale, service: Service): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: service.short[locale],
    serviceType: service.category,
    provider: {"@id": absoluteUrl("/#organization")},
    areaServed: [
      {"@type": "City", name: locale === "it" ? "Marghera" : "Marghera"},
      {"@type": "City", name: locale === "it" ? "Venezia" : "Venice"},
      {"@type": "AdministrativeArea", name: "Veneto"},
      {"@type": "Country", name: "Italy"}
    ],
    availableLanguage: BCP47_BY_LOCALE[locale],
    url: localizedUrl(locale, `/services/${service.slug}`)
  };
}

export function buildArticleJsonLd(locale: Locale, insight: Insight): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title[locale],
    description: insight.excerpt[locale],
    inLanguage: BCP47_BY_LOCALE[locale],
    mainEntityOfPage: localizedUrl(locale, `/insights/${insight.slug}`),
    author: {"@id": absoluteUrl("/#organization")},
    publisher: {"@id": absoluteUrl("/#organization")},
    dateModified: new Date().toISOString()
  };
}

export function buildCaseStudyJsonLd(locale: Locale, caseStudy: CaseStudy): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title[locale],
    description: caseStudy.summary[locale],
    inLanguage: BCP47_BY_LOCALE[locale],
    dateCreated: `${caseStudy.year}-01-01`,
    keywords: caseStudy.tags.join(", "),
    locationCreated: caseStudy.location[locale],
    image: [absoluteUrl(caseStudy.coverImage), ...caseStudy.gallery.map((image) => absoluteUrl(image))],
    creator: {"@id": absoluteUrl("/#organization")},
    url: localizedUrl(locale, `/portfolio/${caseStudy.slug}`)
  };
}
