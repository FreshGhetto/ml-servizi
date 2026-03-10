import type {Locale} from "@/i18n/routing";

export type ServiceCategory = "survey" | "drone" | "thermal" | "accounting" | "modeling";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  useCases: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    slug: "fotogrammetria-drone",
    category: "drone",
    title: { it: "Fotogrammetria da drone", en: "Drone photogrammetry" },
    short: {
      it: "Rilievi fotogrammetrici con drone per ortofoto georeferenziate, modelli 3D e basi metriche affidabili.",
      en: "Drone photogrammetric surveys for georeferenced orthophotos, 3D models and reliable metric baselines."
    },
    deliverables: {
      it: ["Ortofoto georeferenziata (GeoTIFF/PDF)", "Modello 3D", "Sezioni e quote", "Report tecnico"],
      en: ["Georeferenced orthophoto (GeoTIFF/PDF)", "3D model", "Sections and elevations", "Technical report"]
    },
    useCases: {
      it: ["Rilievi rapidi di aree e coperture", "Verifiche volumetriche", "Monitoraggio avanzamento lavori"],
      en: ["Fast surveys of areas and roofs", "Volumetric assessments", "Construction progress monitoring"]
    }
  },
  {
    slug: "termografia-drone",
    category: "thermal",
    title: { it: "Ispezioni termiche con drone", en: "Drone thermal inspections" },
    short: {
      it: "Ispezioni termiche per individuare anomalie su coperture, involucri e impianti con lettura tecnica dei risultati.",
      en: "Thermal inspections to detect anomalies on roofs, envelopes and systems with technical interpretation of results."
    },
    deliverables: {
      it: ["Mappa termica", "Report con immagini annotate", "Indicazioni tecniche operative"],
      en: ["Thermal map", "Report with annotated imagery", "Operational technical notes"]
    },
    useCases: {
      it: ["Verifica ponti termici e dispersioni", "Supporto alla lettura di criticità su coperture", "Controlli termici su impianti fotovoltaici"],
      en: ["Verification of thermal bridges and heat loss", "Supportive interpretation of roof criticalities", "Thermal checks on photovoltaic systems"]
    }
  },
  {
    slug: "contabilita-sal",
    category: "accounting",
    title: { it: "Contabilità lavori e SAL", en: "Construction accounting & progress statements" },
    short: {
      it: "Controllo tecnico-economico dell'opera tramite computi metrici, analisi prezzi, SAL e contabilità lavori.",
      en: "Technical and cost control of works through BOQs, price analysis, progress statements and construction accounting."
    },
    deliverables: {
      it: ["Computo metrico estimativo", "SAL", "Quadri economici", "Elenco prezzi e nuovi prezzi"],
      en: ["Bill of quantities", "Progress statements", "Cost summaries", "Price list and new prices"]
    },
    useCases: {
      it: ["Supporto a direzione lavori e imprese", "Verifica misure e forniture", "Rendicontazione tecnica di cantiere"],
      en: ["Support to site management and contractors", "Measurement and supply checks", "Technical site reporting"]
    }
  },
  {
    slug: "modello-3d-archicad",
    category: "modeling",
    title: { it: "Modellazione 3D", en: "3D modelling" },
    short: {
      it: "Produzione di elaborati 2D/3D e modelli tecnici per supportare progettazione, coordinamento e condivisione.",
      en: "Production of 2D/3D deliverables and technical models to support design, coordination and communication."
    },
    deliverables: {
      it: ["Modello 3D", "Planimetrie, prospetti e sezioni", "Tavole tecniche e viste di coordinamento"],
      en: ["3D model", "Plans, elevations and sections", "Technical sheets and coordination views"]
    },
    useCases: {
      it: ["Supporto alla progettazione", "Verifica interferenze e congruenze", "Presentazioni e condivisione tecnica"],
      en: ["Design support", "Clash and consistency checks", "Technical presentation and sharing"]
    }
  }
];
