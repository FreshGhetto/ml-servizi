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
              ML Servizi è lo studio tecnico del Geom. Diego Bacci, attivo nei rilievi, nella documentazione tecnica, nella
              contabilità lavori e nella modellazione digitale 2D/3D.
            </p>
            <p>
              Lo studio opera con un approccio basato su precisione, organizzazione e chiarezza degli elaborati, affiancando studi
              professionali, imprese, committenza privata ed enti in attività tecniche di diversa complessità.
            </p>
            <p>
              L’esperienza maturata nel settore edilizio si integra con l’utilizzo di strumenti e software evoluti per il rilievo e la
              restituzione tecnica, tra cui fotogrammetria da drone, laser scanner, ortofoto, nuvole di punti, modellazione 3D/BIM,
              computi metrici, analisi prezzi e contabilità di cantiere.
            </p>
            <p>
              ML Servizi si propone come realtà tecnico-professionale flessibile e strutturata, capace di seguire sia incarichi
              puntuali sia commesse più articolate, anche in coordinamento con altri professionisti e imprese.
            </p>
          </>
        ) : (
          <>
            <p>
              ML Servizi is the technical studio of Geom. Diego Bacci, operating in surveying, technical documentation, construction
              accounting and 2D/3D digital modelling.
            </p>
            <p>
              The practice works with a method based on precision, organization and clarity of deliverables, supporting professional
              firms, contractors, private clients and institutions across technical activities of different complexity.
            </p>
            <p>
              Field experience in construction integrates with advanced tools and software for survey and technical restitution,
              including drone photogrammetry, laser scanning, orthophotos, point clouds, 3D/BIM modelling, BOQs, price analysis and
              construction accounting.
            </p>
            <p>
              ML Servizi positions itself as a flexible yet structured technical practice, able to handle both targeted assignments and
              more articulated commissions, also in coordination with other professionals and contractors.
            </p>
          </>
        )}
      </div>
    </Container>
  );
}
