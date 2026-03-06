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
      it: "Ortofoto, modelli 3D e misure affidabili per cantieri, coperture e aree.",
      en: "Orthomosaics, 3D models and reliable measurements for sites, roofs and areas."
    },
    deliverables: {
      it: ["Ortofoto (GeoTIFF/PDF)", "Modello 3D", "Sezioni/quote", "Report tecnico"],
      en: ["Orthomosaic (GeoTIFF/PDF)", "3D model", "Sections/elevations", "Technical report"]
    },
    useCases: {
      it: ["Rilievo rapido di aree e coperture", "Volumetrie terre/cumuli", "Monitoraggio avanzamento"],
      en: ["Fast surveys for areas and roofs", "Stockpile/earthworks volumes", "Progress monitoring"]
    }
  },
  {
    slug: "termografia-drone",
    category: "thermal",
    title: { it: "Ispezioni termiche con drone", en: "Drone thermal inspections" },
    short: {
      it: "Individuazione di anomalie termiche su edifici, coperture e impianti (dove applicabile).",
      en: "Detect thermal anomalies on buildings, roofs and systems (where applicable)."
    },
    deliverables: {
      it: ["Mappa termica", "Report con immagini annotate", "Indicazioni operative"],
      en: ["Thermal map", "Report with annotated images", "Operational notes"]
    },
    useCases: {
      it: ["Ponti termici e dispersioni", "Verifica coperture e infiltrazioni (supporto)", "Controllo fotovoltaico (hotspots)"],
      en: ["Thermal bridges & heat loss", "Roof checks & moisture indications (support)", "PV hotspot checks"]
    }
  },
  {
    slug: "contabilita-sal",
    category: "accounting",
    title: { it: "Contabilità lavori e SAL", en: "Construction accounting & progress statements" },
    short: {
      it: "Computi, SAL, analisi prezzi e controllo costi con documentazione ordinata e difendibile.",
      en: "BOQs, progress statements, price analysis and cost control with clear documentation."
    },
    deliverables: {
      it: ["Computo metrico", "SAL", "Quadri economici", "Elenco prezzi/nuovi prezzi"],
      en: ["Bill of quantities", "Progress statements", "Cost summaries", "Price list / new prices"]
    },
    useCases: {
      it: ["Supporto a DL e imprese", "Verifica forniture e misure", "Rendicontazioni"],
      en: ["Support for site management and contractors", "Supply/measurement checks", "Reporting"]
    }
  },
  {
    slug: "modello-3d-archicad",
    category: "modeling",
    title: { it: "Modellazione 3D (Archicad)", en: "3D modelling (Archicad)" },
    short: {
      it: "Modelli tecnici puliti e render essenziali per comunicare scelte e interferenze.",
      en: "Clean technical models and minimal renders to communicate decisions and clashes."
    },
    deliverables: {
      it: ["Modello 3D", "Viste e tavole", "Render tecnici essenziali"],
      en: ["3D model", "Views & sheets", "Minimal technical renders"]
    },
    useCases: {
      it: ["Verifica interferenze", "Presentazioni tecniche", "Supporto progettazione"],
      en: ["Clash awareness", "Technical presentations", "Design support"]
    }
  }
];
