import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {getAddress, getDict} from "@/i18n/dict";
import {Container} from "@/components/Container";
import {MapEmbed, MAPS_PLACE_URL} from "@/components/MapEmbed";
import {MotionCard} from "@/components/motion/MotionCard";

function toMailto(opts: {to: string; subject?: string; body?: string}) {
  const p = new URLSearchParams();
  if (opts.subject) p.set("subject", opts.subject);
  if (opts.body) p.set("body", opts.body);
  const qs = p.toString();
  return `mailto:${opts.to}${qs ? `?${qs}` : ""}`;
}

export default async function ContactPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const d = getDict(locale as any);
  const t = d.Contact;

  const EMAIL = "mlservizi13@gmail.com";
  const PEC = "pec@mlservizi.it";
  const PHONE_DISPLAY = "+39 351 544 7413";
  const PHONE_TEL = "+393515447413";
  const ADDRESS = getAddress(locale as any);

  const mailto = toMailto({
    to: EMAIL,
    subject: locale === "it" ? "Richiesta informazioni" : "Information request",
    body:
      locale === "it"
        ? "Buongiorno ML Servizi,%0A%0AScrivo per richiedere informazioni su..."
        : "Hello ML Servizi,%0A%0AI am writing to request information about..."
  });

  return (
    <Container className="py-14 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          {locale === "it" ? "Contatto diretto" : "Direct contact"}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted))]">{t.subtitle}</p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <MotionCard className="h-full p-0">
          <div className="relative p-6 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">{t.cardHint}</p>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <div className="text-[rgb(var(--muted))]">{t.emailLabel}</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 inline-flex font-medium text-[rgb(var(--fg))] link-underline"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <div className="text-[rgb(var(--muted))]">{t.pecLabel}</div>
                  <a
                    href={`mailto:${PEC}`}
                    className="mt-1 inline-flex font-medium text-[rgb(var(--fg))] link-underline"
                  >
                    {PEC}
                  </a>
                </div>

                <div>
                  <div className="text-[rgb(var(--muted))]">{t.phoneLabel}</div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 inline-flex font-medium text-[rgb(var(--fg))] link-underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <div>
                  <div className="text-[rgb(var(--muted))]">{t.addressLabel}</div>
                  <div className="mt-1 leading-relaxed text-[rgb(var(--fg))]">{ADDRESS}</div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={mailto}
                  className="no-underline ui-smooth inline-flex items-center justify-center rounded-full border border-blue-500/25 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/35"
                >
                  {t.send}
                </a>
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline ui-smooth inline-flex items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-5 py-2.5 text-sm font-medium text-[rgb(var(--fg))] hover:border-blue-300/60 hover:bg-blue-500/10 dark:hover:border-blue-500/55 dark:hover:bg-blue-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/25"
                >
                  {locale === "it" ? "Apri su Maps" : "Open in Maps"}
                </a>
              </div>
            </div>
          </div>
        </MotionCard>

        <MotionCard className="h-full p-0">
          <div className="relative p-6 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-500/5 via-transparent to-transparent" />
            <div className="relative">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-[rgb(var(--muted))]">
                {t.hoursLabel}
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[rgb(var(--fg))]">
                {t.hours}
              </p>

              <div className="mt-6 border-t border-[rgb(var(--border))] pt-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-[rgb(var(--muted))]">
                  {locale === "it" ? "Flusso rapido" : "Quick flow"}
                </div>
                <div className="mt-3 grid gap-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  <p>
                    <span className="font-medium text-[rgb(var(--fg))]">1.</span>{" "}
                    {locale === "it"
                      ? "Invia una breve richiesta via email."
                      : "Send a short request by email."}
                  </p>
                  <p>
                    <span className="font-medium text-[rgb(var(--fg))]">2.</span>{" "}
                    {locale === "it"
                      ? "Ricevi risposta con domande tecniche mirate."
                      : "Get a reply with focused technical questions."}
                  </p>
                  <p>
                    <span className="font-medium text-[rgb(var(--fg))]">3.</span>{" "}
                    {locale === "it"
                      ? "Definiamo tempi, output e prossimi step."
                      : "Define timing, outputs, and next steps."}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link
                  className="link-underline font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                  href={`/${locale}/services`}
                >
                  {locale === "it" ? "Vedi servizi" : "View services"} →
                </Link>
                <Link
                  className="link-underline font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                  href={`/${locale}/portfolio`}
                >
                  {locale === "it" ? "Esplora lavori" : "Explore work"} →
                </Link>
              </div>
            </div>
          </div>
        </MotionCard>
      </div>

      <div className="mt-8">
        <MapEmbed title={locale === "it" ? "Mappa ML Servizi" : "ML Servizi map"} />
      </div>
    </Container>
  );
}

