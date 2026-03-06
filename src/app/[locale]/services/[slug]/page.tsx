import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {services} from "@/content/services";

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{locale: Locale; slug: string}>;
}) {
  const {locale, slug} = await params;
  const d = getDict(locale as any);
  const c = d.Common;
  const L = (obj: any) => (obj?.[locale] ?? obj?.it ?? obj?.en ?? "");

  const s = services.find((x) => x.slug === slug);
  if (!s) {
    return (
      <Container className="py-14">
        <p className="link-underline text-[rgb(var(--muted))]">{locale === "it" ? "Servizio non trovato." : "Service not found."}</p>
        <Link className="mt-4 inline-block link-underline text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200" href={`/${locale}/services`}>
          ← {d.Nav.services}
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-14">
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
