import type {Locale} from "@/i18n/routing";
import {Container} from "@/components/Container";
import {getDict} from "@/i18n/dict";

export default async function AboutPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const d = getDict(locale as any);

  return (
    <Container className="py-14">
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
