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
      it: "Contesto: intervento preliminare in ambito urbano con necessita di coordinamento tra piu interlocutori. Obiettivo: predisporre una base tecnica leggibile per le fasi successive. Attivita svolte: impostazione documentale, controllo elaborati e supporto al coordinamento operativo. Elaborati/output: tavole di inquadramento, prospettive e documentazione tecnica condivisibile.",
      en: "Context: preliminary urban intervention requiring coordination among multiple stakeholders. Objective: prepare a readable technical baseline for subsequent phases. Activities performed: document setup, deliverable control and operational coordination support. Deliverables/output: framing sheets, perspectives and shareable technical documentation."
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
      it: "Contesto: edificio storico con necessita di elaborati accurati e facilmente consultabili. Obiettivo: fornire una base tecnica affidabile per valutazioni progettuali e operative. Attivita svolte: rilievo geometrico, organizzazione delle informazioni e strutturazione degli elaborati. Elaborati/output: documentazione tecnica per committenza e team di progetto.",
      en: "Context: historic building requiring accurate and easily consultable deliverables. Objective: provide a reliable technical baseline for design and operational evaluations. Activities performed: geometric survey, information organization and deliverable structuring. Deliverables/output: technical documentation for client and project team."
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
      it: "Contesto: aggiornamento tecnico in ambito produttivo/commerciale con necessita di allineamento documentale. Obiettivo: migliorare la coerenza tra stato di fatto ed elaborati operativi. Attivita svolte: verifica tecnica, revisione disegni e coordinamento delle informazioni. Elaborati/output: disegni aggiornati e documentazione ordinata per uso operativo.",
      en: "Context: technical update in a production/commercial setting requiring documentation alignment. Objective: improve consistency between as-built conditions and operational deliverables. Activities performed: technical verification, drawing revision and information coordination. Deliverables/output: updated drawings and organized documentation for operational use."
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
      it: "Contesto: contesto storico con necessita di riferimenti tecnici chiari per piu figure professionali. Obiettivo: rendere immediata la lettura tecnica per direzione lavori, progettisti e committenza. Attivita svolte: elaborazione grafica di base, supporto interpretativo e organizzazione documentale. Elaborati/output: materiale tecnico consultabile e coerente con le esigenze operative.",
      en: "Context: heritage setting requiring clear technical references for multiple professional roles. Objective: make technical interpretation immediate for site management, designers and client. Activities performed: baseline graphic processing, interpretative support and documentation organization. Deliverables/output: consultable technical material aligned with operational needs."
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
      it: "Contesto: attivita preliminare in ambito ambientale per la definizione dello stato di fatto. Obiettivo: costruire una base informativa ordinata e tracciabile per sviluppi successivi. Attivita svolte: acquisizione dati, restituzione sintetica e organizzazione degli output. Elaborati/output: riferimenti tecnici utili alla pianificazione delle fasi successive.",
      en: "Context: preliminary environmental activity aimed at defining existing conditions. Objective: build an organized and traceable information baseline for subsequent developments. Activities performed: data acquisition, concise restitution and output organization. Deliverables/output: technical references supporting planning of next phases."
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
      it: "Contesto: studio tecnico preliminare a supporto di valutazioni in ambito infrastrutturale locale. Obiettivo: facilitare il confronto decisionale tra i soggetti coinvolti. Attivita svolte: raccolta elementi tecnici, strutturazione tavole e sintesi operativa. Elaborati/output: quadro tecnico leggibile per analisi e condivisione.",
      en: "Context: preliminary technical study supporting evaluations in local infrastructure context. Objective: facilitate decision discussions among stakeholders. Activities performed: collection of technical elements, sheet structuring and operational synthesis. Deliverables/output: readable technical framework for analysis and sharing."
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
      it: "Contesto: elaborato prospettico per contesto residenziale con esigenza di comunicazione tecnica immediata. Obiettivo: rendere piu chiaro il confronto tra alternative e scelte progettuali. Attivita svolte: impostazione visuale, verifica coerenza dei riferimenti tecnici e preparazione materiali. Elaborati/output: prospettive e tavole orientate alla lettura tecnica del progetto.",
      en: "Context: perspective deliverable for a residential context requiring immediate technical communication. Objective: clarify comparisons between alternatives and design choices. Activities performed: visual setup, consistency checks of technical references and material preparation. Deliverables/output: perspectives and sheets focused on technical project readability."
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
      it: "Contesto: intervento su viabilita locale con necessita di continuita tra rilievo e fase esecutiva. Obiettivo: supportare lettura tecnica e coordinamento delle attivita di cantiere. Attivita svolte: rilievi di supporto, impostazione elaborati e condivisione operativa delle informazioni. Elaborati/output: documentazione tecnica utile al confronto progettuale e alla gestione in cantiere.",
      en: "Context: local road intervention requiring continuity between survey data and execution phase. Objective: support technical interpretation and coordination of site activities. Activities performed: support surveys, deliverable setup and operational sharing of information. Deliverables/output: technical documentation useful for design review and site management."
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
      it: "Contesto: bene monumentale con necessita di restituzioni ordinate e coerenti con il valore del contesto. Obiettivo: fornire una base tecnica utile alla pianificazione delle lavorazioni. Attivita svolte: produzione grafica, strutturazione contenuti e coordinamento delle informazioni. Elaborati/output: elaborati tecnici consultabili per programmazione e confronto operativo.",
      en: "Context: monumental asset requiring structured deliverables consistent with the heritage setting. Objective: provide a technical baseline useful for planning work phases. Activities performed: graphic production, content structuring and information coordination. Deliverables/output: technical outputs suitable for planning and operational review."
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
      it: "Contesto: cantiere infrastrutturale con necessita di monitoraggio visivo ordinato dello stato avanzamento. Obiettivo: rendere chiara e tempestiva la lettura dell'avanzamento per soggetti tecnici e decisionali. Attivita svolte: raccolta immagini, verifica visiva e organizzazione del report. Elaborati/output: documentazione fotografica strutturata a supporto del controllo operativo.",
      en: "Context: infrastructure site requiring structured visual monitoring of work progress. Objective: provide clear and timely progress interpretation for technical and decision stakeholders. Activities performed: image collection, visual checks and report organization. Deliverables/output: structured photographic documentation supporting operational control."
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
      it: "Contesto: supporto grafico in ambito urbano con esigenza di uniformare riferimenti tecnici e materiali condivisi. Obiettivo: consolidare una base tecnica ordinata per revisioni e sviluppi successivi. Attivita svolte: impostazione elaborati, controllo coerenza dati e preparazione della documentazione. Elaborati/output: materiale tecnico pronto per confronto, verifica e aggiornamenti.",
      en: "Context: graphic support in an urban setting with need to align technical references and shared materials. Objective: consolidate an ordered technical baseline for revisions and further development. Activities performed: deliverable setup, data consistency checks and documentation preparation. Deliverables/output: technical material ready for review, verification and updates."
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



