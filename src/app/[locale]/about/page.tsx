import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {Container} from "@/components/Container";
import {StructuredData} from "@/components/StructuredData";
import {getDict} from "@/i18n/dict";
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
    pathname: "/about",
    title: locale === "it" ? "Chi sono" : "About",
    description:
      locale === "it"
        ? "Profilo professionale ML Servizi: rilievi, contabilita lavori, modellazione 3D e metodo operativo."
        : "Professional profile of ML Servizi: surveying, construction accounting, 3D modelling and delivery method.",
    keywords:
      locale === "it"
        ? ["chi sono geometra", "rilievi venezia", "servizi tecnici edilizia"]
        : ["about surveyor italy", "technical surveying profile", "construction technical services"]
  });
}

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params;
  const locale = localeParam as Locale;
  const d = getDict(locale as any);
  const structuredData = buildBreadcrumbJsonLd([
    {name: "Home", url: localizedUrl(locale, "/")},
    {name: locale === "it" ? "Chi sono" : "About", url: localizedUrl(locale, "/about")}
  ]);

  return (
    <Container className="py-14">
      <StructuredData data={structuredData} />
      <h1 className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{d.Nav.about}</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-[rgb(var(--muted))]">
        {locale === "it" ? (
          <>
            <p>
              ML Servizi offre supporto tecnico per cantieri e studi: rilievi, restituzioni CAD, contabilità lavori (computi, SAL),
              analisi prezzi e modellazione 3D con flussi puliti e deliverable chiari.
            </p>
            <p>
              L’obiettivo è fornire documentazione affidabile, misurabile e pronta per le decisioni: dal rilievo in sito alla consegna finale.
            </p>
          </>
        ) : (
          <>
            <p>
              ML Servizi provides technical support for sites and design offices: surveys, CAD deliverables, construction accounting (BOQs, progress statements),
              price analysis and 3D modelling with clean workflows and clear outputs.
            </p>
            <p>
              The goal is reliable, measurable documentation that is ready for decisions—from field survey to final delivery.
            </p>
          </>
        )}
      </div>
    </Container>
  );
}
