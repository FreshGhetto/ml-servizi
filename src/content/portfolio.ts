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
  documents?: Array<{
    label: Record<Locale, string>;
    href: string;
  }>;
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
  },
  {
    slug: "garage-san-marco-venezia",
    title: { it: "Rilievo tecnico - Garage San Marco", en: "Technical survey - Garage San Marco" },
    location: { it: "Venezia (VE)", en: "Venice (IT)" },
    sector: { it: "Infrastruttura urbana", en: "Urban infrastructure" },
    year: "2026",
    tags: ["Rilievo", "Prospetto", "Documentazione tecnica"],
    summary: {
      it: "Restituzione tecnica di prospetto e geometrie per supporto a verifiche su edificio complesso.",
      en: "Technical restitution of facade and geometry to support checks on a complex building."
    },
    description: {
      it: "Contesto: edificio multipiano in ambito urbano con necessita di rappresentazione tecnica leggibile. Obiettivo: fornire un quadro geometrico chiaro per analisi e pianificazione interventi. Attivita svolte: acquisizione da drone, organizzazione riferimenti di misura e restituzione grafica di prospetto. Elaborati/output: modello e tavole tecniche per confronto operativo.",
      en: "Context: multi-storey urban building requiring clear technical representation. Objective: provide a readable geometric framework for analysis and intervention planning. Activities performed: drone acquisition, measurement reference organization, and facade restitution. Deliverables/output: model and technical sheets for operational review."
    },
    scope: {
      it: ["Acquisizione immagini da drone", "Controllo riferimenti geometrici", "Restituzione tecnica del prospetto"],
      en: ["Drone image acquisition", "Geometric reference checks", "Facade technical restitution"]
    },
    coverImage: "/portfolio/projects/garage-san-marco-venezia/cover-opt.webp",
    cardImage: "/portfolio/projects/garage-san-marco-venezia/cover-lite.webp",
    gallery: ["/portfolio/projects/garage-san-marco-venezia/gallery-01.webp"]
  },
  {
    slug: "golf-lido-malamocco",
    title: { it: "Ortofoto e modellazione - Golf Lido Malamocco", en: "Orthophoto and modeling - Golf Lido Malamocco" },
    location: { it: "Lido di Venezia (VE)", en: "Venice Lido (IT)" },
    sector: { it: "Ambiente e territorio", en: "Environment and territory" },
    year: "2026",
    tags: ["Ortofoto", "Inquadramento territoriale", "Drone"],
    summary: {
      it: "Rilievo aereo di area estesa con restituzione utile a lettura territoriale e pianificazione tecnica.",
      en: "Aerial survey of a wide area with deliverables for territorial interpretation and technical planning."
    },
    description: {
      it: "Contesto: area estesa con necessita di inquadramento planimetrico e supporto a valutazioni tecniche. Obiettivo: ottenere una base fotografica georeferenziabile e coerente con l'assetto del territorio. Attivita svolte: rilievo da drone, allineamento dati e preparazione degli elaborati. Elaborati/output: ortofoto e immagini tecniche per analisi di contesto.",
      en: "Context: wide area requiring planimetric framing and technical evaluation support. Objective: obtain a georeference-ready photographic base consistent with territorial layout. Activities performed: drone survey, data alignment, and deliverable preparation. Deliverables/output: orthophotos and technical imagery for context analysis."
    },
    scope: {
      it: ["Rilievo area estesa", "Inquadramento planimetrico", "Restituzione ortofotografica"],
      en: ["Wide-area survey", "Planimetric framing", "Orthophoto restitution"]
    },
    coverImage: "/portfolio/projects/golf-lido-malamocco/cover-opt.webp",
    cardImage: "/portfolio/projects/golf-lido-malamocco/cover-lite.webp",
    gallery: [
      "/portfolio/projects/golf-lido-malamocco/gallery-01.webp",
      "/portfolio/projects/golf-lido-malamocco/gallery-02.webp"
    ]
  },
  {
    slug: "marghera",
    title: { it: "Rilievo edificio residenziale - Marghera", en: "Residential building survey - Marghera" },
    location: { it: "Marghera (VE)", en: "Marghera, Venice (IT)" },
    sector: { it: "Residenziale", en: "Residential" },
    year: "2026",
    tags: ["Nuvola di punti", "Rilievo 3D", "Supporto progettazione"],
    summary: {
      it: "Acquisizione e modellazione dello stato di fatto per supportare verifiche e aggiornamento elaborati.",
      en: "As-built acquisition and modeling to support checks and deliverable updates."
    },
    description: {
      it: "Contesto: edificio residenziale con necessita di lettura precisa dello stato di fatto. Obiettivo: disporre di una base tridimensionale affidabile per valutazioni progettuali e operative. Attivita svolte: rilievo geometrico, acquisizione fotografica e organizzazione della restituzione tecnica. Elaborati/output: modello 3D e materiale tecnico per il coordinamento delle fasi successive.",
      en: "Context: residential building requiring accurate as-built understanding. Objective: provide a reliable 3D baseline for design and operational assessments. Activities performed: geometric survey, photographic acquisition, and technical restitution setup. Deliverables/output: 3D model and technical material for coordinating subsequent phases."
    },
    scope: {
      it: ["Rilievo geometrico di dettaglio", "Restituzione tridimensionale", "Supporto alla revisione progettuale"],
      en: ["Detailed geometric survey", "3D restitution", "Support for design revision"]
    },
    coverImage: "/portfolio/projects/marghera/cover-opt.webp",
    cardImage: "/portfolio/projects/marghera/cover-lite.webp",
    gallery: [
      "/portfolio/projects/marghera/gallery-01.webp",
      "/portfolio/projects/marghera/gallery-02.webp"
    ]
  },
  {
    slug: "marghera-veneziana",
    title: { it: "Analisi e documentazione tecnica - Marghera Veneziana", en: "Technical analysis and documentation - Marghera Veneziana" },
    location: { it: "Marghera (VE)", en: "Marghera, Venice (IT)" },
    sector: { it: "Condominio / patrimonio edilizio", en: "Condominium / built heritage" },
    year: "2026",
    tags: ["Rilievo", "Documentazione", "Relazione tecnica"],
    summary: {
      it: "Supporto tecnico con rilievo e allegati documentali per valutazioni sullo stato dell'immobile.",
      en: "Technical support with survey data and documentary attachments for building condition assessments."
    },
    description: {
      it: "Contesto: fabbricato residenziale con necessita di consolidare dati visivi e documentazione tecnica in un unico quadro operativo. Obiettivo: facilitare lettura, confronto e tracciabilita delle valutazioni tecniche. Attivita svolte: rilievo da drone, raccolta elaborati e strutturazione della documentazione. Elaborati/output: materiale tecnico con allegato PDF specialistico.",
      en: "Context: residential building requiring visual data and technical documentation to be consolidated into one operational framework. Objective: improve readability, comparison, and traceability of technical assessments. Activities performed: drone survey, deliverable collection, and documentation structuring. Deliverables/output: technical package with a specialist PDF attachment."
    },
    scope: {
      it: ["Rilievo e restituzione stato di fatto", "Organizzazione documentazione tecnica", "Supporto alla lettura specialistica"],
      en: ["As-built survey and restitution", "Technical documentation organization", "Support for specialist interpretation"]
    },
    coverImage: "/portfolio/projects/marghera-veneziana/cover-opt.webp",
    cardImage: "/portfolio/projects/marghera-veneziana/cover-lite.webp",
    gallery: [
      "/portfolio/projects/marghera-veneziana/gallery-01.webp",
      "/portfolio/projects/marghera-veneziana/gallery-02.webp"
    ],
    documents: [
      {
        label: {
          it: "Relazione termografica - Comune di Venezia (PDF)",
          en: "Thermal report - Municipality of Venice (PDF)"
        },
        href: "/portfolio/projects/marghera-veneziana/relazione-termografica-comune-venezia.pdf"
      }
    ]
  },
  {
    slug: "mestre-veneziana",
    title: { it: "Rilievo urbano - Mestre Veneziana", en: "Urban survey - Mestre Veneziana" },
    location: { it: "Mestre (VE)", en: "Mestre, Venice (IT)" },
    sector: { it: "Edilizia urbana", en: "Urban buildings" },
    year: "2026",
    tags: ["Rilievo 3D", "Prospetti", "Coordinamento tecnico"],
    summary: {
      it: "Documentazione geometrica e visuale per supportare analisi e pianificazione di interventi su fabbricati urbani.",
      en: "Geometric and visual documentation to support analysis and intervention planning on urban buildings."
    },
    description: {
      it: "Contesto: isolato urbano con necessita di elaborati coerenti per analisi tecnica e coordinamento operativo. Obiettivo: fornire una base aggiornata di prospetti e geometrie utili alla progettazione. Attivita svolte: acquisizione da drone, ordinamento delle viste e preparazione restituzione. Elaborati/output: set di immagini tecniche e supporto alla fase decisionale.",
      en: "Context: urban block requiring coherent deliverables for technical analysis and operational coordination. Objective: provide an updated baseline of facades and geometry for design activities. Activities performed: drone acquisition, view organization, and restitution preparation. Deliverables/output: technical image set and decision-support material."
    },
    scope: {
      it: ["Acquisizione su piu fronti", "Sintesi geometrica del costruito", "Condivisione output per revisione"],
      en: ["Multi-side acquisition", "Geometric synthesis of built environment", "Output sharing for review"]
    },
    coverImage: "/portfolio/projects/mestre-veneziana/cover-opt.webp",
    cardImage: "/portfolio/projects/mestre-veneziana/cover-lite.webp",
    gallery: [
      "/portfolio/projects/mestre-veneziana/gallery-01.webp",
      "/portfolio/projects/mestre-veneziana/gallery-02.webp",
      "/portfolio/projects/mestre-veneziana/gallery-03.webp",
      "/portfolio/projects/mestre-veneziana/gallery-04.webp"
    ]
  },
  {
    slug: "ospedale-dolo",
    title: { it: "Ispezione e rilievo tecnico - Ospedale di Dolo", en: "Technical inspection and survey - Dolo Hospital" },
    location: { it: "Dolo (VE)", en: "Dolo, Venice (IT)" },
    sector: { it: "Sanitario / infrastruttura complessa", en: "Healthcare / complex facility" },
    year: "2023",
    tags: ["Ispezione", "Drone", "Monitoraggio tecnico"],
    summary: {
      it: "Rilievo e ispezione su complesso ospedaliero con documentazione fotografica tecnica ad alta copertura.",
      en: "Survey and inspection of a hospital complex with high-coverage technical photographic documentation."
    },
    description: {
      it: "Contesto: struttura sanitaria estesa con esigenze di monitoraggio visivo e lettura tecnica di coperture e fronti. Obiettivo: raccogliere dati affidabili per verifica stato e pianificazione interventi manutentivi. Attivita svolte: voli ispettivi, acquisizione fotografica multi-angolo e organizzazione degli elaborati. Elaborati/output: set immagini tecnico-operativo e base per valutazioni successive.",
      en: "Context: large healthcare facility requiring visual monitoring and technical interpretation of roofs and facades. Objective: collect reliable data for condition checks and maintenance planning. Activities performed: inspection flights, multi-angle image acquisition, and deliverable organization. Deliverables/output: technical-operational image set and baseline for subsequent assessments."
    },
    scope: {
      it: ["Ispezione aerea delle coperture", "Documentazione fotografica tecnica", "Supporto a valutazioni manutentive"],
      en: ["Aerial roof inspection", "Technical photographic documentation", "Support for maintenance assessments"]
    },
    coverImage: "/portfolio/projects/ospedale-dolo/cover-opt.webp",
    cardImage: "/portfolio/projects/ospedale-dolo/cover-lite.webp",
    gallery: [
      "/portfolio/projects/ospedale-dolo/gallery-01.webp",
      "/portfolio/projects/ospedale-dolo/gallery-02.webp",
      "/portfolio/projects/ospedale-dolo/gallery-03.webp",
      "/portfolio/projects/ospedale-dolo/gallery-04.webp",
      "/portfolio/projects/ospedale-dolo/gallery-05.webp",
      "/portfolio/projects/ospedale-dolo/gallery-06.webp",
      "/portfolio/projects/ospedale-dolo/gallery-07.webp",
      "/portfolio/projects/ospedale-dolo/gallery-08.webp"
    ]
  }
];



