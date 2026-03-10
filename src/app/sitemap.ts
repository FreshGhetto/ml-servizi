import type {MetadataRoute} from "next";
import {insights} from "@/content/insights";
import {portfolio} from "@/content/portfolio";
import {services} from "@/content/services";
import {locales, type Locale} from "@/i18n/routing";
import {SITE_URL, absoluteUrl, localizedPath} from "@/lib/seo";

type RouteConfig = {
  pathname: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: RouteConfig[] = [
  {pathname: "/", priority: 1, changeFrequency: "weekly"},
  {pathname: "/services", priority: 0.9, changeFrequency: "weekly"},
  {pathname: "/portfolio", priority: 0.9, changeFrequency: "weekly"},
  {pathname: "/insights", priority: 0.8, changeFrequency: "weekly"},
  {pathname: "/about", priority: 0.7, changeFrequency: "monthly"},
  {pathname: "/contact", priority: 0.8, changeFrequency: "monthly"},
  {pathname: "/privacy-policy", priority: 0.3, changeFrequency: "monthly"},
  {pathname: "/cookie-policy", priority: 0.3, changeFrequency: "monthly"}
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localizedEntries = (locales as readonly Locale[]).flatMap((locale) => {
    const staticEntries = STATIC_ROUTES.map(({pathname, priority, changeFrequency}) => ({
      url: absoluteUrl(localizedPath(locale, pathname)),
      lastModified,
      priority,
      changeFrequency
    }));

    const serviceEntries = services.map((service) => ({
      url: absoluteUrl(localizedPath(locale, `/services/${service.slug}`)),
      lastModified,
      priority: 0.75,
      changeFrequency: "monthly" as const
    }));

    const portfolioEntries = portfolio.map((item) => ({
      url: absoluteUrl(localizedPath(locale, `/portfolio/${item.slug}`)),
      lastModified,
      priority: 0.75,
      changeFrequency: "monthly" as const
    }));

    const insightEntries = insights.map((item) => ({
      url: absoluteUrl(localizedPath(locale, `/insights/${item.slug}`)),
      lastModified,
      priority: 0.7,
      changeFrequency: "monthly" as const
    }));

    return [...staticEntries, ...serviceEntries, ...portfolioEntries, ...insightEntries];
  });

  return [
    {
      url: SITE_URL,
      lastModified,
      priority: 0.4,
      changeFrequency: "monthly"
    },
    ...localizedEntries
  ];
}
