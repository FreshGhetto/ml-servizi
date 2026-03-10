import type {Metadata} from "next";
import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {Container} from "@/components/Container";
import {StructuredData} from "@/components/StructuredData";
import {buildBreadcrumbJsonLd, buildLocalizedMetadata, localizedUrl} from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;

  return buildLocalizedMetadata({
    locale,
    pathname: "/cookie-policy",
    title: locale === "it" ? "Cookie Policy" : "Cookie Policy",
    description:
      locale === "it"
        ? "Cookie Policy di mlservizi.eu con dettaglio dei cookie tecnici e dei servizi Cloudflare."
        : "Cookie Policy for mlservizi.eu with details on technical cookies and Cloudflare services.",
    keywords:
      locale === "it"
        ? ["cookie policy", "cookie tecnici", "cloudflare cookies"]
        : ["cookie policy", "technical cookies", "cloudflare cookies"]
  });
}

export default async function CookiePolicyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const isIt = locale === "it";
  const lastUpdated = isIt ? "10 marzo 2026" : "March 10, 2026";

  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: "Cookie Policy", url: localizedUrl(locale, "/cookie-policy")}
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Cookie Policy - ML Servizi",
      url: localizedUrl(locale, "/cookie-policy"),
      inLanguage: isIt ? "it-IT" : "en-US"
    }
  ];

  return (
    <Container className="py-14 sm:py-16">
      <StructuredData data={structuredData} />

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          {isIt ? "Informativa cookie" : "Cookie notice"}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
          {isIt
            ? "Questa pagina descrive l'uso dei cookie e di tecnologie simili sul sito mlservizi.eu."
            : "This page describes the use of cookies and similar technologies on mlservizi.eu."}
        </p>
        <p className="mt-3 text-xs text-[rgb(var(--muted))]">
          {isIt ? "Ultimo aggiornamento" : "Last updated"}: {lastUpdated}
        </p>
      </header>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[rgb(var(--muted))]">
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "1. Cosa sono i cookie" : "1. What cookies are"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "I cookie sono piccoli file di testo che un sito puo salvare nel browser del dispositivo durante la navigazione."
              : "Cookies are small text files that a website can store in your browser during navigation."}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "2. Cookie utilizzati da questo sito" : "2. Cookies used by this site"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "mlservizi.eu utilizza principalmente cookie tecnici e di sicurezza, necessari al funzionamento del sito e alla protezione da traffico malevolo."
              : "mlservizi.eu mainly uses technical and security cookies required for website operation and protection against malicious traffic."}
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border border-[rgb(var(--border))]">
            <table className="min-w-full divide-y divide-[rgb(var(--border))]">
              <thead className="bg-black/5 dark:bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                    {isIt ? "Cookie" : "Cookie"}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                    {isIt ? "Provider" : "Provider"}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                    {isIt ? "Finalita" : "Purpose"}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--muted))]">
                    {isIt ? "Durata indicativa" : "Indicative duration"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgb(var(--border))]">
                <tr>
                  <td className="px-4 py-3 font-medium text-[rgb(var(--fg))]">__cf_bm</td>
                  <td className="px-4 py-3">Cloudflare</td>
                  <td className="px-4 py-3">
                    {isIt
                      ? "Rilevazione automatica di traffico anomalo e mitigazione bot."
                      : "Automated anomalous traffic detection and bot mitigation."}
                  </td>
                  <td className="px-4 py-3">
                    {isIt ? "Breve durata (in genere minuti)." : "Short-lived (typically minutes)."}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[rgb(var(--fg))]">cf_clearance</td>
                  <td className="px-4 py-3">Cloudflare</td>
                  <td className="px-4 py-3">
                    {isIt
                      ? "Memorizza l'esito di eventuali challenge di sicurezza."
                      : "Stores the outcome of security challenge checks."}
                  </td>
                  <td className="px-4 py-3">
                    {isIt ? "Variabile in base alla configurazione." : "Variable, based on configuration."}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[rgb(var(--fg))]">__cflb</td>
                  <td className="px-4 py-3">Cloudflare</td>
                  <td className="px-4 py-3">
                    {isIt
                      ? "Session affinity per bilanciamento del carico (se attivo)."
                      : "Session affinity for load balancing (if enabled)."}
                  </td>
                  <td className="px-4 py-3">
                    {isIt ? "Da pochi secondi fino a 24 ore." : "From seconds up to 24 hours."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            {isIt
              ? "L'elenco puo variare in base alla configurazione Cloudflare attiva in un determinato momento."
              : "The list may vary depending on the Cloudflare configuration active at a given time."}
          </p>
          <p className="mt-2">
            {isIt ? "Riferimento ufficiale Cloudflare: " : "Official Cloudflare reference: "}
            <a
              className="link-underline text-[rgb(var(--fg))]"
              href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
              target="_blank"
              rel="noreferrer"
            >
              developers.cloudflare.com/.../cloudflare-cookies
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "3. Cookie di profilazione e analytics" : "3. Profiling and analytics cookies"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "Al momento questo sito non utilizza cookie di profilazione o marketing di prima/terza parte."
              : "At the moment, this website does not use first-party or third-party profiling/marketing cookies."}
          </p>
          <p className="mt-2">
            {isIt
              ? "Google Search Console viene utilizzato dal titolare solo per monitoraggio SEO lato proprietario e non richiede script di tracciamento aggiuntivi nel browser degli utenti."
              : "Google Search Console is used by the owner for SEO monitoring and does not require additional end-user browser tracking scripts."}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "4. Gestione e disattivazione dei cookie" : "4. Managing and disabling cookies"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "Puoi controllare o cancellare i cookie dalle impostazioni del browser. La disattivazione dei cookie tecnici di sicurezza puo compromettere il corretto funzionamento del sito."
              : "You can control or delete cookies from your browser settings. Disabling technical security cookies may affect proper site operation."}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "5. Aggiornamenti della policy" : "5. Policy updates"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "La presente Cookie Policy puo essere aggiornata in caso di modifiche tecniche o normative. In caso di introduzione di cookie non tecnici, il sito verra adeguato con meccanismi di consenso ove richiesto."
              : "This Cookie Policy may be updated due to technical or regulatory changes. If non-technical cookies are introduced, the site will be updated with consent mechanisms where required."}
          </p>
          <p className="mt-2">
            {isIt ? "Per informazioni complete sul trattamento dati consulta la " : "For full data processing details, see the "}
            <Link className="link-underline text-[rgb(var(--fg))]" href={`/${locale}/privacy-policy`}>
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
