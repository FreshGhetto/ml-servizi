import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {Container} from "@/components/Container";
import {StructuredData} from "@/components/StructuredData";
import {getAddress} from "@/i18n/dict";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  buildBreadcrumbJsonLd,
  buildLocalizedMetadata,
  localizedUrl
} from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;

  return buildLocalizedMetadata({
    locale,
    pathname: "/privacy-policy",
    title: locale === "it" ? "Privacy Policy" : "Privacy Policy",
    description:
      locale === "it"
        ? "Informativa privacy di ML Servizi per mlservizi.eu, con dettagli sui trattamenti dati e sui fornitori tecnici."
        : "ML Servizi privacy notice for mlservizi.eu, including data processing details and technical providers.",
    keywords:
      locale === "it"
        ? ["privacy policy", "gdpr", "ml servizi", "cloudflare", "vercel"]
        : ["privacy policy", "gdpr", "ml servizi", "cloudflare", "vercel"]
  });
}

export default async function PrivacyPolicyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const isIt = locale === "it";
  const address = getAddress(locale as any);
  const lastUpdated = isIt ? "10 marzo 2026" : "March 10, 2026";

  const structuredData = [
    buildBreadcrumbJsonLd([
      {name: "Home", url: localizedUrl(locale, "/")},
      {name: "Privacy Policy", url: localizedUrl(locale, "/privacy-policy")}
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy - ML Servizi",
      url: localizedUrl(locale, "/privacy-policy"),
      inLanguage: isIt ? "it-IT" : "en-US"
    }
  ];

  return (
    <Container className="py-14 sm:py-16">
      <StructuredData data={structuredData} />

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          {isIt ? "Informativa privacy" : "Privacy notice"}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
          {isIt
            ? "Questa informativa descrive come ML Servizi tratta i dati personali raccolti tramite il sito mlservizi.eu ai sensi del Regolamento (UE) 2016/679 (GDPR)."
            : "This notice describes how ML Servizi processes personal data collected through mlservizi.eu under Regulation (EU) 2016/679 (GDPR)."}
        </p>
        <p className="mt-3 text-xs text-[rgb(var(--muted))]">
          {isIt ? "Ultimo aggiornamento" : "Last updated"}: {lastUpdated}
        </p>
      </header>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[rgb(var(--muted))]">
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "1. Titolare del trattamento" : "1. Data controller"}
          </h2>
          <div className="mt-3 space-y-2">
            <p>ML Servizi</p>
            <p>{address}</p>
            <p>
              Email:{" "}
              <a className="link-underline text-[rgb(var(--fg))]" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              {isIt ? "Telefono" : "Phone"}:{" "}
              <a className="link-underline text-[rgb(var(--fg))]" href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
                {CONTACT_PHONE}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "2. Tipologie di dati trattati" : "2. Categories of data"}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              {isIt
                ? "Dati di navigazione tecnici (es. indirizzo IP, user-agent, log di accesso, richieste HTTP)."
                : "Technical browsing data (e.g. IP address, user-agent, access logs, HTTP requests)."}
            </li>
            <li>
              {isIt
                ? "Dati comunicati volontariamente dall'utente via email o telefono (nome, recapiti, contenuto della richiesta)."
                : "Data voluntarily provided by the user by email or phone (name, contact details, message content)."}
            </li>
            <li>
              {isIt
                ? "Dati tecnici necessari per sicurezza, protezione anti-abuso e continuita del servizio."
                : "Technical data required for security, anti-abuse protection, and service continuity."}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "3. Finalita e base giuridica" : "3. Purposes and legal basis"}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              {isIt
                ? "Erogazione e sicurezza del sito web (art. 6.1.f GDPR, legittimo interesse)."
                : "Website delivery and security (GDPR art. 6.1.f, legitimate interest)."}
            </li>
            <li>
              {isIt
                ? "Gestione di richieste di contatto e preventivo (art. 6.1.b GDPR, misure precontrattuali/contrattuali)."
                : "Handling contact and quote requests (GDPR art. 6.1.b, pre-contractual/contractual measures)."}
            </li>
            <li>
              {isIt
                ? "Adempimenti di legge (art. 6.1.c GDPR)."
                : "Compliance with legal obligations (GDPR art. 6.1.c)."}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "4. Modalita del trattamento e conservazione" : "4. Processing methods and retention"}
          </h2>
          <div className="mt-3 space-y-2">
            <p>
              {isIt
                ? "Il trattamento avviene con strumenti informatici e misure organizzative adeguate a prevenire accessi non autorizzati, perdita o uso illecito dei dati."
                : "Data is processed with IT systems and suitable organizational safeguards to prevent unauthorized access, loss, or unlawful use."}
            </p>
            <p>
              {isIt
                ? "I dati sono conservati per il tempo strettamente necessario alle finalita indicate, nel rispetto di obblighi di legge e tempi tecnici applicati dai fornitori infrastrutturali."
                : "Data is retained for the time strictly necessary for the purposes above, in accordance with legal obligations and technical retention windows applied by infrastructure providers."}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "5. Fornitori e destinatari dei dati" : "5. Processors and data recipients"}
          </h2>
          <div className="mt-3 space-y-2">
            <p>
              {isIt
                ? "Per la gestione tecnica del sito, ML Servizi si avvale di fornitori che operano come responsabili esterni del trattamento:"
                : "For technical website operations, ML Servizi relies on providers acting as external data processors:"}
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Vercel (hosting e piattaforma di deployment) -{" "}
                <a
                  className="link-underline text-[rgb(var(--fg))]"
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>
                Cloudflare (DNS, CDN, protezione e sicurezza edge) -{" "}
                <a
                  className="link-underline text-[rgb(var(--fg))]"
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cloudflare.com/privacypolicy
                </a>
              </li>
              <li>
                Google Search Console (monitoraggio indicizzazione e prestazioni SEO) -{" "}
                <a
                  className="link-underline text-[rgb(var(--fg))]"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p>
              {isIt
                ? "I dati possono inoltre essere comunicati ad autorita competenti quando previsto dalla legge."
                : "Data may also be disclosed to competent authorities when required by law."}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "6. Trasferimenti extra SEE" : "6. Transfers outside the EEA"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "Alcuni fornitori possono trattare dati in paesi extra SEE. In tali casi il trattamento avviene con garanzie adeguate previste dal GDPR (es. clausole contrattuali standard e misure supplementari ove applicabili)."
              : "Some providers may process data outside the EEA. In such cases, processing is based on GDPR-compliant safeguards (e.g. standard contractual clauses and supplementary measures where applicable)."}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "7. Diritti dell'interessato" : "7. Data subject rights"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "L'interessato puo esercitare i diritti previsti dagli artt. 15-22 GDPR (accesso, rettifica, cancellazione, limitazione, opposizione, portabilita)."
              : "You can exercise your rights under GDPR arts. 15-22 (access, rectification, erasure, restriction, objection, data portability)."}
          </p>
          <p className="mt-2">
            {isIt ? "Per esercitare i diritti: " : "To exercise your rights: "}
            <a className="link-underline text-[rgb(var(--fg))]" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-2">
            {isIt
              ? "Resta salvo il diritto di proporre reclamo al Garante per la protezione dei dati personali."
              : "You also have the right to lodge a complaint with your competent data protection authority."}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            {isIt ? "8. Aggiornamenti della policy" : "8. Policy updates"}
          </h2>
          <p className="mt-3">
            {isIt
              ? "La presente informativa puo essere aggiornata in qualsiasi momento. Le modifiche rilevanti saranno pubblicate su questa pagina con la nuova data di aggiornamento."
              : "This notice may be updated at any time. Material changes will be published on this page with an updated revision date."}
          </p>
        </section>
      </div>
    </Container>
  );
}
