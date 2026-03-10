import type {Locale} from "@/i18n/routing";

export type ServiceCategory = "survey" | "drone" | "thermal" | "accounting" | "modeling";

export type ServiceMedia = {
  src: string;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  useCases: Record<Locale, string[]>;
  advantages?: Record<Locale, string[]>;
  deepDive?: Record<Locale, string[]>;
  gallery?: ServiceMedia[];
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
    },
    gallery: [
      {
        src: "/media/presentazioni/rilievo-tempio-possagno.webp",
        alt: {
          it: "Modello 3D fotogrammetrico del Tempio di Possagno",
          en: "Photogrammetric 3D model of the Possagno Temple"
        },
        caption: {
          it: "Rilievo misto con restituzione tridimensionale e controllo geometrico.",
          en: "Mixed survey with 3D reconstruction and geometric control."
        }
      },
      {
        src: "/media/presentazioni/rilievo-condominio-modello3d.webp",
        alt: {
          it: "Nuvola di punti e modello 3D di edificio residenziale",
          en: "Point cloud and 3D model of a residential building"
        },
        caption: {
          it: "Output utilizzabile per restauro, riqualificazione e verifica quote.",
          en: "Output suitable for restoration, retrofit, and dimensional checks."
        }
      }
    ]
  },
  {
    slug: "termografia-drone",
    category: "thermal",
    title: { it: "Ispezioni termiche con drone", en: "Drone thermal inspections" },
    short: {
      it: "Ispezioni termiche radiometriche su involucri, coperture, impianti fotovoltaici e scenari di agricoltura di precisione, con analisi tecnica e priorita di intervento.",
      en: "Radiometric thermal inspections for envelopes, roofs, photovoltaic systems and precision agriculture scenarios, with technical analysis and intervention priorities."
    },
    deliverables: {
      it: [
        "Ortomosaico termico georeferenziato (se richiesto)",
        "Immagini termiche radiometriche calibrate",
        "Mappa delle anomalie con classificazione per gravita",
        "Schede hotspot su moduli/stringhe fotovoltaiche",
        "Report tecnico con immagini annotate RGB + termico",
        "Priorita di intervento (breve/medio termine)",
        "Dataset per confronto multitemporale",
        "Nota metodologica su limiti e condizioni di rilievo"
      ],
      en: [
        "Georeferenced thermal orthomosaic (if required)",
        "Calibrated radiometric thermal imagery",
        "Anomaly map with severity classification",
        "Hotspot sheets for PV modules/strings",
        "Technical report with annotated RGB + thermal imagery",
        "Intervention priorities (short/medium term)",
        "Dataset for multi-temporal comparison",
        "Method note on survey limits and conditions"
      ]
    },
    useCases: {
      it: [
        "Verifica ponti termici, dispersioni e disomogeneita dell'involucro",
        "Controllo di coperture piane/inclinate e ricerca anomalie localizzate",
        "Screening termico di impianti fotovoltaici (hotspot, mismatch, celle degradate)",
        "Supporto alla manutenzione predittiva in contesti industriali",
        "Agricoltura di precisione: individuazione stress idrico e disuniformita vegetative",
        "Valutazione termica di serre e gestione microclimatica",
        "Confronti periodici per monitoraggio evolutivo delle criticita",
        "Supporto tecnico a perizie e piani di efficientamento"
      ],
      en: [
        "Verification of thermal bridges, heat loss, and envelope discontinuities",
        "Roof inspections and localized anomaly detection",
        "PV thermal screening (hotspots, mismatch, degraded cells)",
        "Predictive maintenance support in industrial settings",
        "Precision agriculture: water stress and vegetation variability detection",
        "Greenhouse thermal assessment and microclimate optimization",
        "Periodic comparison workflows for trend monitoring",
        "Technical support for assessments and energy retrofit planning"
      ]
    },
    advantages: {
      it: [
        "Riduzione dei tempi di ispezione rispetto a rilievi manuali estesi",
        "Copertura rapida di aree ampie o di difficile accesso",
        "Individuazione precoce di anomalie prima del guasto visibile",
        "Prioritizzazione oggettiva degli interventi manutentivi",
        "Migliore allocazione del budget tecnico su criticita reali",
        "Riduzione dei fermi impianto (es. fotovoltaico) grazie a diagnosi anticipata",
        "Supporto documentale misurabile per decisioni tecniche",
        "Base dati comparabile nel tempo per controllo performance"
      ],
      en: [
        "Faster inspections compared to large manual surveys",
        "Rapid coverage of wide or hard-to-access areas",
        "Early anomaly detection before visible failure",
        "Objective prioritization of maintenance interventions",
        "Better budget allocation toward actual critical issues",
        "Reduced downtime (e.g., PV systems) through early diagnostics",
        "Measurable technical evidence for decision-making",
        "Time-comparable baseline for performance tracking"
      ]
    },
    deepDive: {
      it: [
        "Il servizio e impostato in modalita radiometrica: ogni immagine conserva informazioni termiche utilizzabili in post-analisi, non solo una rappresentazione cromatica qualitativa.",
        "La fase preliminare definisce obiettivo tecnico, scala del rilievo, finestre orarie e condizioni meteo utili a ridurre falsi positivi legati a ombreggiamento, vento o inerzia termica.",
        "In ambito fotovoltaico l'acquisizione viene pianificata per leggere in modo coerente moduli, stringhe e aree di disomogeneita, cosi da distinguere anomalie elettriche, degrado localizzato e criticita installative.",
        "In agricoltura di precisione la termografia supporta mappe di variabilita intra-parcella, evidenziando zone con stress idrico o comportamento termico anomalo per irrigazione e gestione agronomica piu mirate.",
        "L'elaborazione integra immagini RGB e termiche, classificazione delle anomalie, georeferenziazione e confronto con rilievi precedenti quando disponibili.",
        "L'output finale non si limita alla segnalazione: include priorita operative, livello di affidabilita della lettura e indicazioni concrete per approfondimenti o interventi."
      ],
      en: [
        "The service is delivered in radiometric mode: each frame retains thermal values for post-analysis, not only qualitative color representation.",
        "The preliminary phase defines technical goals, survey scale, suitable time windows, and weather constraints to reduce false positives caused by shading, wind, or thermal inertia.",
        "For PV inspections, acquisition is planned to consistently read modules, strings, and heterogeneity zones, separating electrical anomalies, local degradation, and installation-related issues.",
        "In precision agriculture, thermal data supports intra-field variability mapping, highlighting water stress and thermal anomalies for more targeted irrigation and agronomic actions.",
        "Processing combines RGB and thermal imagery, anomaly classification, georeferencing, and comparison with previous surveys when available.",
        "Final output goes beyond anomaly flagging: it provides operational priorities, confidence level, and concrete recommendations for follow-up or intervention."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/agricoltura-indici-multispettrali.webp",
        alt: {
          it: "Confronto tra indici multispettrali su coltivazione",
          en: "Comparison of multispectral indices on crop rows"
        },
        caption: {
          it: "Analisi comparata RGB, NDVI, NDRE e altri layer per lettura agronomica.",
          en: "Combined reading of RGB, NDVI, NDRE, and related layers for agronomic interpretation."
        }
      },
      {
        src: "/media/presentazioni/agricoltura-zonazione-vigore.webp",
        alt: {
          it: "Mappa di zonazione per gestione differenziata del campo",
          en: "Zonation map for variable field management"
        },
        caption: {
          it: "Classi operative utili per irrigazione e priorita di intervento.",
          en: "Operational classes for irrigation and intervention prioritization."
        }
      },
      {
        src: "/media/presentazioni/agricoltura-mappa-ndvi.webp",
        alt: {
          it: "Mappa NDVI georeferenziata con variabilita intra-parcella",
          en: "Georeferenced NDVI map with intra-field variability"
        },
        caption: {
          it: "Identificazione di stress e disuniformita prima dei sintomi visivi.",
          en: "Detection of stress and non-uniformity before visible symptoms."
        }
      }
    ]
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
