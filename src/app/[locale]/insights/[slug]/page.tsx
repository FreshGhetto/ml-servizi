import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {insights} from "@/content/insights";

export default async function InsightDetail({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale: localeParam, slug} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  const post = insights.find((x) => x.slug === slug);
  if (!post) {
    return (
      <Container className="py-14">
        <p className="link-underline text-[rgb(var(--muted))]">{locale === "it" ? "Articolo non trovato." : "Article not found."}</p>
        <Link className="mt-4 inline-block link-underline text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200" href={`/${locale}/insights`}>
          ← {d.Nav.insights}
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-14">
      <Link className="link-underline text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href={`/${locale}/insights`}>
        ← {d.Nav.insights}
      </Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{L(post.title)}</h1>
      <p className="link-underline mt-3 text-[rgb(var(--muted))]">{L(post.excerpt)}</p>

      <div className="mt-10 space-y-4">
        {(L(post.body) as any[]).map((para: string, i: number) => (
          <p key={i} className="link-underline text-[rgb(var(--muted))] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </Container>
  );
}
