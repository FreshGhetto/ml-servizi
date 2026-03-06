import type {Locale} from "@/i18n/routing";

export type CaseStudy = {
  slug: string;
  title: Record<Locale, string>;
  location: Record<Locale, string>;
  sector: Record<Locale, string>;
  year: string;
  tags: string[];
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  scope: Record<Locale, string[]>;
  coverImage: string;
  cardImage: string;
  gallery: string[];
};

export const portfolio: CaseStudy[] = [
  {
    slug: "bibione",
    title: { it: "Riqualificazione urbana - Bibione", en: "Urban regeneration - Bibione" },
    location: { it: "Bibione (VE)", en: "Bibione, Venice (IT)" },
    sector: { it: "Spazio pubblico", en: "Public space" },
    year: "2025",
    tags: ["Rilievo", "Progetto", "Documentazione tecnica"],
    summary: {
      it: "Intervento preliminare con tavole di inquadramento, prospettive e supporto tecnico al coordinamento.",
      en: "Preliminary intervention with framing sheets, perspectives and technical coordination support."
    },
    description: {
      it: "Testo provvisorio: lavoro sviluppato per definire impostazione tecnica, controllo elaborati e chiarezza comunicativa verso committenza e imprese.",
      en: "Temporary text: project developed to define technical setup, control deliverables and communicate clearly with clients and contractors."
    },
    scope: {
      it: ["Raccolta e organizzazione documentazione", "Impostazione grafica tavole", "Supporto tecnico operativo"],
      en: ["Documentation collection and organization", "Technical sheet visual setup", "Operational technical support"]
    },
    coverImage: "/portfolio/projects/bibione/cover-opt.webp",
    cardImage: "/portfolio/projects/bibione/cover-lite.webp",
    gallery: [
      "/portfolio/projects/bibione/gallery-01.webp",
      "/portfolio/projects/bibione/gallery-02.webp",
      "/portfolio/projects/bibione/gallery-03.webp"
    ]
  },
  {
    slug: "chiesa-chioggia",
    title: { it: "Rilievo architettonico - Chiesa di Chioggia", en: "Architectural survey - Church of Chioggia" },
    location: { it: "Chioggia (VE)", en: "Chioggia, Venice (IT)" },
    sector: { it: "Edificio storico", en: "Historic building" },
    year: "2024",
    tags: ["Rilievo", "Restauro", "Elaborati grafici"],
    summary: {
      it: "Documentazione tecnica dedicata a un contesto storico con focus su precisione e leggibilita.",
      en: "Technical documentation for a heritage context focused on accuracy and readability."
    },
    description: {
      it: "Testo provvisorio: incarico impostato per produrre una base tecnica affidabile, utile a valutazioni progettuali e successive fasi operative.",
      en: "Temporary text: assignment structured to deliver a reliable technical baseline for design decisions and subsequent operational phases."
    },
    scope: {
      it: ["Rilievo geometrico di base", "Preparazione elaborati per committenza", "Coordinamento informazioni di progetto"],
      en: ["Base geometric survey", "Deliverables preparation for client", "Project information coordination"]
    },
    coverImage: "/portfolio/projects/chiesa-chioggia/cover-opt.webp",
    cardImage: "/portfolio/projects/chiesa-chioggia/cover-lite.webp",
    gallery: ["/portfolio/projects/chiesa-chioggia/gallery-01.webp"]
  },
  {
    slug: "cucine-zecchinon",
    title: { it: "Adeguamento tecnico - Cucine Zecchinon", en: "Technical adaptation - Cucine Zecchinon" },
    location: { it: "Veneto", en: "Veneto (IT)" },
    sector: { it: "Commerciale", en: "Commercial" },
    year: "2024",
    tags: ["Layout", "Supporto tecnico", "Documentazione"],
    summary: {
      it: "Aggiornamento documentale e revisione tecnica per spazi produttivi/commerciali.",
      en: "Documentation update and technical review for productive/commercial spaces."
    },
    description: {
      it: "Testo provvisorio: intervento mirato a migliorare organizzazione degli elaborati e coerenza delle informazioni operative.",
      en: "Temporary text: intervention focused on improving deliverable organization and consistency of operational information."
    },
    scope: {
      it: ["Verifica stato di fatto", "Aggiornamento disegni operativi", "Allineamento documentazione"],
      en: ["As-built verification", "Operational drawing updates", "Documentation alignment"]
    },
    coverImage: "/portfolio/projects/cucine-zecchinon/cover-opt.webp",
    cardImage: "/portfolio/projects/cucine-zecchinon/cover-lite.webp",
    gallery: []
  },
  {
    slug: "duomo-di-dolo",
    title: { it: "Supporto tecnico - Duomo di Dolo", en: "Technical support - Dolo Cathedral" },
    location: { it: "Dolo (VE)", en: "Dolo, Venice (IT)" },
    sector: { it: "Patrimonio storico", en: "Heritage" },
    year: "2025",
    tags: ["Rilievo", "Analisi", "Prospetti"],
    summary: {
      it: "Lavoro orientato alla produzione di riferimenti tecnici chiari per valutazioni su edificio storico.",
      en: "Work focused on producing clear technical references for evaluations on a historic building."
    },
    description: {
      it: "Testo provvisorio: commessa impostata per fornire materiale consultabile in modo rapido da direzione lavori, progettisti e committente.",
      en: "Temporary text: assignment structured to provide quickly consultable material for site management, designers and client."
    },
    scope: {
      it: ["Elaborazione base grafica", "Supporto alla lettura tecnica", "Condivisione struttura documentale"],
      en: ["Graphic base setup", "Technical interpretation support", "Documentation structure sharing"]
    },
    coverImage: "/portfolio/projects/duomo-di-dolo/cover-opt.webp",
    cardImage: "/portfolio/projects/duomo-di-dolo/cover-lite.webp",
    gallery: ["/portfolio/projects/duomo-di-dolo/gallery-01.webp"]
  },
  {
    slug: "lago-azzurro",
    title: { it: "Rilievo e inquadramento - Lago Azzurro", en: "Survey and framing - Lago Azzurro" },
    location: { it: "Veneto", en: "Veneto (IT)" },
    sector: { it: "Contesto ambientale", en: "Environmental context" },
    year: "2024",
    tags: ["Rilievo", "Studio preliminare", "Restituzione"],
    summary: {
      it: "Attivita preliminare per impostare dati e riferimenti utili alle fasi successive.",
      en: "Preliminary activity to structure data and references for following phases."
    },
    description: {
      it: "Testo provvisorio: lavoro finalizzato a ottenere una base informativa ordinata, con priorita su chiarezza e tracciabilita.",
      en: "Temporary text: project aimed at creating an ordered information baseline with priority on clarity and traceability."
    },
    scope: {
      it: ["Acquisizione contenuti", "Restituzione sintetica", "Organizzazione output"],
      en: ["Content acquisition", "Synthetic deliverable", "Output organization"]
    },
    coverImage: "/portfolio/projects/lago-azzurro/cover-opt.webp",
    cardImage: "/portfolio/projects/lago-azzurro/cover-lite.webp",
    gallery: []
  },
  {
    slug: "lido",
    title: { it: "Studio tecnico - Lido", en: "Technical study - Lido" },
    location: { it: "Venezia Lido (VE)", en: "Venice Lido (IT)" },
    sector: { it: "Infrastruttura locale", en: "Local infrastructure" },
    year: "2023",
    tags: ["Analisi", "Rilievo", "Supporto progetto"],
    summary: {
      it: "Impostazione tecnica a supporto di valutazioni e scelte preliminari.",
      en: "Technical setup supporting evaluations and preliminary choices."
    },
    description: {
      it: "Testo provvisorio: produzione di un quadro tecnico leggibile per facilitare confronto tra parti coinvolte.",
      en: "Temporary text: production of a readable technical framework to support stakeholder alignment."
    },
    scope: {
      it: ["Raccolta elementi utili", "Strutturazione tavole", "Sintesi informazioni operative"],
      en: ["Collection of relevant elements", "Sheet structuring", "Operational information synthesis"]
    },
    coverImage: "/portfolio/projects/lido/cover-opt.webp",
    cardImage: "/portfolio/projects/lido/cover-lite.webp",
    gallery: []
  },
  {
    slug: "oderzo",
    title: { it: "Bozza prospettica - Oderzo", en: "Perspective draft - Oderzo" },
    location: { it: "Oderzo (TV)", en: "Oderzo, Treviso (IT)" },
    sector: { it: "Residenziale", en: "Residential" },
    year: "2025",
    tags: ["Prospettive", "Comunicazione tecnica", "Elaborati"],
    summary: {
      it: "Elaborato grafico per supportare una comunicazione tecnica immediata con cliente e team.",
      en: "Graphic output designed for immediate technical communication with client and team."
    },
    description: {
      it: "Testo provvisorio: intervento centrato su qualita visiva, coerenza documentale e semplificazione del confronto decisionale.",
      en: "Temporary text: intervention focused on visual quality, documentation consistency and easier decision-making discussions."
    },
    scope: {
      it: ["Impostazione visuale", "Coerenza riferimenti tecnici", "Condivisione output"],
      en: ["Visual setup", "Technical references consistency", "Output sharing"]
    },
    coverImage: "/portfolio/projects/oderzo/cover-opt.webp",
    cardImage: "/portfolio/projects/oderzo/cover-lite.webp",
    gallery: []
  },
  {
    slug: "pellestrina",
    title: { it: "Intervento viabilita locale - Pellestrina", en: "Local road intervention - Pellestrina" },
    location: { it: "Pellestrina (VE)", en: "Pellestrina, Venice (IT)" },
    sector: { it: "Viabilita", en: "Roadworks" },
    year: "2023",
    tags: ["Tracciati", "Rilievo", "Supporto cantiere"],
    summary: {
      it: "Supporto tecnico su tratto stradale con documentazione per fasi operative e confronto progettuale.",
      en: "Technical support on a road segment with documentation for operational phases and design discussions."
    },
    description: {
      it: "Testo provvisorio: lavoro costruito per dare continuita tra rilievo, tavole e decisioni in cantiere.",
      en: "Temporary text: work built to ensure continuity between survey, technical drawings and on-site decisions."
    },
    scope: {
      it: ["Raccolta rilievi di supporto", "Impostazione elaborati di cantiere", "Lettura tecnica condivisa"],
      en: ["Support survey collection", "Site deliverables setup", "Shared technical interpretation"]
    },
    coverImage: "/portfolio/projects/pellestrina/cover-opt.webp",
    cardImage: "/portfolio/projects/pellestrina/cover-lite.webp",
    gallery: [
      "/portfolio/projects/pellestrina/gallery-01.webp",
      "/portfolio/projects/pellestrina/gallery-02.webp",
      "/portfolio/projects/pellestrina/gallery-03.webp"
    ]
  },
  {
    slug: "tempio-possagno",
    title: { it: "Rilievo prospettico - Tempio di Possagno", en: "Perspective survey - Tempio di Possagno" },
    location: { it: "Possagno (TV)", en: "Possagno, Treviso (IT)" },
    sector: { it: "Bene monumentale", en: "Monumental heritage" },
    year: "2024",
    tags: ["Rilievo", "Patrimonio", "Elaborati tecnici"],
    summary: {
      it: "Documentazione visuale di supporto in contesto monumentale.",
      en: "Visual documentation support in a monumental context."
    },
    description: {
      it: "Testo provvisorio: attivita tecnica orientata a una restituzione ordinata e utile alla pianificazione delle lavorazioni.",
      en: "Temporary text: technical activity aimed at an ordered deliverable useful for planning work phases."
    },
    scope: {
      it: ["Produzione base grafica", "Strutturazione contenuti", "Condivisione per team di lavoro"],
      en: ["Graphic baseline production", "Content structuring", "Sharing for project team"]
    },
    coverImage: "/portfolio/projects/tempio-possagno/cover-opt.webp",
    cardImage: "/portfolio/projects/tempio-possagno/cover-lite.webp",
    gallery: []
  },
  {
    slug: "tronchetto",
    title: { it: "Documentazione avanzamento - Tronchetto", en: "Progress documentation - Tronchetto" },
    location: { it: "Venezia (VE)", en: "Venice (IT)" },
    sector: { it: "Infrastrutture", en: "Infrastructure" },
    year: "2023",
    tags: ["Cantiere", "Stato avanzamento", "Report"],
    summary: {
      it: "Raccolta immagini e verifica visiva per monitorare avanzamento e confronto operativo.",
      en: "Image collection and visual checks to monitor progress and support operational reviews."
    },
    description: {
      it: "Testo provvisorio: commessa finalizzata a rendere immediata la lettura dello stato lavori per attori tecnici e decisionali.",
      en: "Temporary text: assignment aimed at making work-progress interpretation immediate for technical and decision stakeholders."
    },
    scope: {
      it: ["Report fotografico strutturato", "Allineamento stato lavori", "Supporto comunicazione tecnica"],
      en: ["Structured photographic report", "Work-progress alignment", "Technical communication support"]
    },
    coverImage: "/portfolio/projects/tronchetto/cover-opt.webp",
    cardImage: "/portfolio/projects/tronchetto/cover-lite.webp",
    gallery: ["/portfolio/projects/tronchetto/gallery-01.jpg"]
  },
  {
    slug: "umberto-primo",
    title: { it: "Supporto grafico - Umberto I", en: "Graphic support - Umberto I" },
    location: { it: "Veneto", en: "Veneto (IT)" },
    sector: { it: "Contesto urbano", en: "Urban context" },
    year: "2024",
    tags: ["Disegno tecnico", "Rilievo", "Documentazione"],
    summary: {
      it: "Elaborazione tecnica orientata alla chiarezza e alla fruibilita dei contenuti di progetto.",
      en: "Technical production focused on clarity and usability of project content."
    },
    description: {
      it: "Testo provvisorio: intervento impostato per consolidare una base tecnica ordinata, pronta per revisioni e sviluppi successivi.",
      en: "Temporary text: intervention structured to consolidate an ordered technical baseline ready for revisions and further development."
    },
    scope: {
      it: ["Impostazione elaborato", "Controllo coerenza dati", "Preparazione materiale condivisibile"],
      en: ["Deliverable setup", "Data consistency checks", "Preparation of shareable material"]
    },
    coverImage: "/portfolio/projects/umberto-primo/cover-opt.webp",
    cardImage: "/portfolio/projects/umberto-primo/cover-lite.webp",
    gallery: []
  }
];



