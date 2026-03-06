import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MotionCard} from "@/components/motion/MotionCard";
import {insights} from "@/content/insights";

export default async function InsightsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  return (
    <Container className="py-14">
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
