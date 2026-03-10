import type {Locale} from "@/i18n/routing";

export type InsightMedia = {
  src: string;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
};

export type Insight = {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string[]>;
  gallery?: InsightMedia[];
};

export const insights: Insight[] = [
  {
    slug: "cos-e-la-fotogrammetria",
    title: { it: "Cos’è la fotogrammetria e a cosa serve", en: "What is photogrammetry and what is it for?" },
    excerpt: {
      it: "Una spiegazione semplice: che cosa produce, quando conviene e quando no.",
      en: "A practical explanation: outputs, when it’s worth it and when it’s not."
    },
    body: {
      it: [
        "La fotogrammetria converte immagini in un modello 3D metrico, utile per rilievi rapidi e documentazione tecnica.",
        "Funziona bene quando la scena ha buona texture, illuminazione stabile e una pianificazione accurata delle riprese.",
        "I deliverable tipici includono ortofoto, nuvole di punti e mesh, con precisione coerente al metodo di acquisizione."
      ],
      en: [
        "Photogrammetry turns images into a metric 3D model, useful for fast surveys and technical documentation.",
        "It performs best with textured surfaces, stable lighting and a properly planned capture workflow.",
        "Typical outputs include orthophotos, point clouds and meshes, with accuracy tied to acquisition quality."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/rilievo-tempio-possagno.webp",
        alt: {
          it: "Esempio di restituzione fotogrammetrica tridimensionale",
          en: "Example of photogrammetric 3D reconstruction"
        },
        caption: {
          it: "Nuvola di punti e mesh integrate per analisi metrica.",
          en: "Integrated point cloud and mesh for metric analysis."
        }
      },
      {
        src: "/media/presentazioni/rilievo-condominio-modello3d.webp",
        alt: {
          it: "Modello 3D di edificio da rilievo misto",
          en: "3D building model from mixed survey"
        },
        caption: {
          it: "Output utile per restauro, progettazione e verifica geometrica.",
          en: "Useful output for restoration, design, and geometric verification."
        }
      }
    ]
  },
  {
    slug: "cos-e-la-termografia",
    title: { it: "Cos’è la termografia (anche da drone)", en: "What is thermal imaging (including drone thermal)" },
    excerpt: {
      it: "Dove aiuta davvero, quali limiti ha e che report aspettarsi.",
      en: "Where it helps, its limits, and what a report typically includes."
    },
    body: {
      it: [
        "La termografia misura differenze di temperatura superficiale e aiuta a individuare anomalie non visibili a occhio nudo.",
        "Per risultati affidabili servono condizioni ambientali corrette, strumenti calibrati e interpretazione tecnica.",
        "Il report finale evidenzia aree critiche, immagini termiche annotate e indicazioni operative."
      ],
      en: [
        "Thermal imaging captures surface temperature differences to reveal issues not visible to the naked eye.",
        "Reliable results depend on proper environmental conditions, calibrated sensors and technical interpretation.",
        "Final reports usually include annotated thermal imagery, critical areas and operational recommendations."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/agricoltura-indici-multispettrali.webp",
        alt: {
          it: "Confronto tra layer multispettrali e mappe di vigore",
          en: "Comparison between multispectral layers and vigor maps"
        },
        caption: {
          it: "Lettura combinata di indici per localizzare anomalie e trend.",
          en: "Combined index reading to localize anomalies and trends."
        }
      }
    ]
  },
  {
    slug: "rilievo-topografico-e-fotogrammetria-quando-scegliere-cosa",
    title: {
      it: "Rilievo topografico o fotogrammetria: quando scegliere cosa",
      en: "Topographic survey or photogrammetry: how to choose"
    },
    excerpt: {
      it: "Due metodi complementari: differenze, costi/tempi e output da aspettarsi.",
      en: "Two complementary methods: differences, time/cost tradeoffs, and expected outputs."
    },
    body: {
      it: [
        "Il rilievo topografico tradizionale e la fotogrammetria non sono alternative assolute: nella maggior parte dei casi lavorano meglio insieme.",
        "La topografia offre controllo geometrico puntuale e alta affidabilita su quote e allineamenti; la fotogrammetria accelera la copertura di aree estese e la documentazione visiva.",
        "Quando il progetto richiede precisioni locali elevate, conviene impostare una rete di controllo topografica e usarla per vincolare il modello fotogrammetrico.",
        "Il risultato migliore e un dataset coerente: coordinate affidabili, nuvola di punti completa e output 2D/3D pronti per progettazione e contabilita."
      ],
      en: [
        "Traditional topographic surveying and photogrammetry are not strict alternatives: in most projects they perform best together.",
        "Topography provides robust geometric control for elevations and alignments; photogrammetry speeds up coverage and visual documentation over larger areas.",
        "When local high accuracy is required, a topographic control network should constrain the photogrammetric model.",
        "The strongest outcome is a consistent dataset: reliable coordinates, complete point cloud, and 2D/3D outputs ready for design and cost control."
      ]
    }
  },
  {
    slug: "gnss-stazione-totale-e-gcp-precisione-metrica",
    title: {
      it: "GNSS, stazione totale e GCP: come garantire precisione metrica",
      en: "GNSS, total station, and GCPs: ensuring metric accuracy"
    },
    excerpt: {
      it: "La precisione non dipende solo dal software: conta la rete di controllo.",
      en: "Accuracy is not just software-dependent: control network quality matters."
    },
    body: {
      it: [
        "La precisione finale nasce da una corretta combinazione di strumentazione, metodo e controllo.",
        "GNSS e stazione totale servono a materializzare punti affidabili sul terreno e a verificare eventuali derive durante l'elaborazione.",
        "I GCP devono essere distribuiti in modo equilibrato su tutto il rilievo, evitando concentrazioni solo ai margini o su una singola quota.",
        "Una validazione seria include check point indipendenti e report degli scarti, cosi da dichiarare una tolleranza realistica e difendibile."
      ],
      en: [
        "Final accuracy comes from the right combination of instrumentation, method, and quality control.",
        "GNSS and total station provide reliable ground control and help verify drift during processing.",
        "GCPs should be evenly distributed across the whole survey, not clustered only on edges or a single elevation.",
        "A proper validation includes independent check points and residual reporting, so delivered tolerances are realistic and defensible."
      ]
    }
  },
  {
    slug: "nuvola-di-punti-da-rilievo-a-deliverable-utili",
    title: {
      it: "Nuvola di punti: dal dato grezzo a deliverable utili",
      en: "Point cloud: from raw capture to usable deliverables"
    },
    excerpt: {
      it: "Acquisire non basta: serve una pipeline chiara per ottenere elaborati utilizzabili.",
      en: "Capture is not enough: a clear pipeline is needed to produce usable outputs."
    },
    body: {
      it: [
        "Una nuvola di punti ha valore quando e pulita, georeferenziata e coerente con gli obiettivi del progetto.",
        "La fase di filtraggio elimina rumore, elementi temporanei e artefatti che altrimenti compromettono sezioni e misure.",
        "Dalla nuvola si derivano piante, prospetti, sezioni e modelli 3D, con livelli di dettaglio calibrati sulle decisioni da prendere.",
        "Consegne ben impostate includono formati interoperabili, legenda degli elaborati e criteri di accuratezza dichiarati."
      ],
      en: [
        "A point cloud is valuable when it is clean, georeferenced, and aligned with project goals.",
        "Filtering removes noise, temporary objects, and artifacts that would otherwise degrade sections and measurements.",
        "From the cloud you can derive plans, elevations, sections, and 3D models, with detail levels matched to decision needs.",
        "Well-structured delivery includes interoperable formats, drawing legends, and clearly stated accuracy criteria."
      ]
    }
  },
  {
    slug: "sal-computi-e-contabilita-lavori-senza-errori",
    title: {
      it: "SAL, computi e contabilita lavori: metodo pratico per ridurre errori",
      en: "Progress statements, BOQs, and cost accounting: a practical method to reduce errors"
    },
    excerpt: {
      it: "Come collegare misure, prezzi e documenti di cantiere in modo tracciabile.",
      en: "How to connect measurements, pricing, and site documents in a traceable workflow."
    },
    body: {
      it: [
        "La contabilita lavori funziona bene quando ogni voce e collegata a una misura verificabile e a un criterio di computo chiaro.",
        "Un SAL robusto richiede tracciabilita tra rilievo, libretto misure, stato avanzamento e quadro economico.",
        "Gli errori piu frequenti nascono da incongruenze tra elaborati aggiornati, varianti non consolidate e listini non allineati.",
        "Impostare una routine di controllo periodica riduce contestazioni e migliora la previsione di costi e tempi."
      ],
      en: [
        "Construction accounting is reliable when each item is tied to verifiable measurements and a clear takeoff rule.",
        "A solid progress statement requires traceability between survey data, measurement logs, progress records, and cost framework.",
        "Most issues come from mismatched revisions, unconsolidated change orders, and outdated price references.",
        "A periodic review routine reduces disputes and improves cost and schedule forecasting."
      ]
    }
  },
  {
    slug: "as-built-digitale-per-ristrutturazioni-e-restauri",
    title: {
      it: "As-built digitale per ristrutturazioni e restauri",
      en: "Digital as-built for renovation and restoration projects"
    },
    excerpt: {
      it: "Perche partire da un as-built affidabile evita varianti e perdite di tempo.",
      en: "Why starting from a reliable as-built prevents rework and delays."
    },
    body: {
      it: [
        "Nei contesti esistenti, l'as-built e la base tecnica che riduce incertezze prima della progettazione esecutiva.",
        "Un as-built digitale integra geometria, quote critiche, deformazioni e vincoli reali non sempre leggibili dalla documentazione storica.",
        "Questo approccio migliora il coordinamento tra progettisti, impresa e direzione lavori, specialmente in fasi con accessi complessi.",
        "Il beneficio principale e operativo: meno sorprese in cantiere, varianti piu controllate e decisioni piu rapide."
      ],
      en: [
        "In existing buildings, as-built documentation is the technical baseline that reduces uncertainty before detailed design.",
        "A digital as-built captures geometry, critical dimensions, deformations, and real constraints often missing in legacy drawings.",
        "This improves coordination between designers, contractors, and site management, especially where access is complex.",
        "The main benefit is operational: fewer on-site surprises, better controlled changes, and faster decisions."
      ]
    }
  },
  {
    slug: "termografia-involucro-edilizio-cosa-leggere-davvero",
    title: {
      it: "Termografia dell'involucro edilizio: cosa leggere davvero nei risultati",
      en: "Building envelope thermal imaging: how to correctly read results"
    },
    excerpt: {
      it: "Una mappa termica non e una diagnosi automatica: serve contesto tecnico.",
      en: "A thermal map is not an automatic diagnosis: technical context is essential."
    },
    body: {
      it: [
        "Le immagini termiche mostrano differenze di temperatura, ma non spiegano da sole la causa dell'anomalia.",
        "Per interpretare correttamente i risultati servono dati su esposizione, meteo, materiali, emissivita e condizioni di esercizio.",
        "Le verifiche incrociate con rilievo visivo e conoscenza costruttiva aiutano a distinguere dispersioni reali da falsi positivi.",
        "Un report utile deve proporre priorita di intervento e non solo una sequenza di immagini colorate."
      ],
      en: [
        "Thermal images show temperature differences, but they do not automatically explain root causes.",
        "Correct interpretation requires exposure data, weather conditions, material behavior, emissivity, and operating context.",
        "Cross-checking with visual inspection and construction knowledge helps separate real defects from false positives.",
        "A useful report should provide intervention priorities, not only a sequence of colored images."
      ]
    }
  },
  {
    slug: "drone-in-cantiere-sicurezza-autorizzazioni-e-workflow",
    title: {
      it: "Drone in cantiere: sicurezza, autorizzazioni e workflow",
      en: "Drones on site: safety, authorizations, and workflow"
    },
    excerpt: {
      it: "Pianificazione operativa per usare il drone in modo efficace e conforme.",
      en: "Operational planning to use drones effectively and in compliance."
    },
    body: {
      it: [
        "L'uso del drone in cantiere richiede una pianificazione che unisca obiettivi tecnici, sicurezza operativa e vincoli normativi.",
        "Prima del volo e fondamentale verificare scenario, interferenze, finestre temporali e autorizzazioni applicabili.",
        "Un workflow ordinato prevede checklist pre-volo, piano acquisizione, backup immediato e registrazione dei metadati.",
        "Quando il processo e standardizzato, il drone diventa uno strumento stabile per monitoraggio, rilievo e documentazione periodica."
      ],
      en: [
        "Using drones on construction sites requires planning that combines technical goals, operational safety, and regulatory constraints.",
        "Before flight, teams should verify scenario conditions, interferences, time windows, and applicable permissions.",
        "A robust workflow includes pre-flight checklists, capture planning, immediate backup, and metadata logging.",
        "With a standardized process, drones become a reliable tool for monitoring, surveying, and periodic documentation."
      ]
    }
  },
  {
    slug: "modellazione-3d-archicad-lod-e-obiettivi",
    title: {
      it: "Modellazione 3D in Archicad: LOD giusto e obiettivi reali",
      en: "3D modeling in Archicad: the right LOD for real project goals"
    },
    excerpt: {
      it: "Più dettaglio non significa sempre più valore: conta l'uso del modello.",
      en: "More detail does not always mean more value: model use is what matters."
    },
    body: {
      it: [
        "Un modello 3D e efficace quando il livello di dettaglio e allineato alle decisioni che deve supportare.",
        "Spingere il LOD oltre il necessario aumenta tempi e costi senza migliorare realmente la qualita delle scelte progettuali.",
        "Per questo conviene definire fin da subito usi, responsabilita e deliverable, evitando sovra-modellazione.",
        "Un modello ben calibrato facilita coordinamento, verifiche dimensionali e comunicazione con cliente e cantiere."
      ],
      en: [
        "A 3D model is effective when its level of detail matches the decisions it must support.",
        "Pushing LOD beyond project needs increases time and cost without improving decision quality.",
        "That is why model uses, responsibilities, and deliverables should be defined early to avoid over-modeling.",
        "A well-calibrated model improves coordination, dimensional checks, and communication with clients and site teams."
      ]
    }
  },
  {
    slug: "capitolato-di-rilievo-cosa-scrivere-prima-di-partire",
    title: {
      it: "Capitolato di rilievo: cosa scrivere prima di iniziare",
      en: "Survey specification: what to define before starting"
    },
    excerpt: {
      it: "Brief e requisiti chiari evitano rilievi inutilizzabili o da rifare.",
      en: "A clear brief prevents unusable surveys and rework."
    },
    body: {
      it: [
        "Molti problemi nascono da richieste generiche: senza requisiti espliciti, anche un buon rilievo puo risultare non utilizzabile.",
        "Il capitolato dovrebbe indicare scala, tolleranze, sistema di riferimento, formati di consegna e milestones di controllo.",
        "E utile chiarire anche limiti operativi attesi: accessibilita, aree escluse, condizioni meteo e vincoli di sicurezza.",
        "Definire questi elementi all'inizio accelera la produzione e riduce il rischio di rilavorazioni costose."
      ],
      en: [
        "Many failures come from vague requests: without explicit requirements, even a good survey can be unusable.",
        "A specification should define scale, tolerances, reference system, delivery formats, and control milestones.",
        "Operational constraints should also be stated: accessibility, excluded zones, weather conditions, and safety limits.",
        "Setting these points early speeds up production and reduces costly rework."
      ]
    }
  },
  {
    slug: "errori-comuni-nei-rilievi-e-come-prevenirli",
    title: {
      it: "Errori comuni nei rilievi e come prevenirli",
      en: "Common survey mistakes and how to prevent them"
    },
    excerpt: {
      it: "Checklist pratica per migliorare affidabilita, tempi e qualita finale.",
      en: "A practical checklist to improve reliability, timing, and final quality."
    },
    body: {
      it: [
        "Tra gli errori piu frequenti ci sono copertura insufficiente, controllo geometrico debole e naming disordinato dei file.",
        "Anche la mancanza di verifica intermedia in campo porta spesso a scoprire lacune solo in fase di elaborazione.",
        "Una checklist standard con controlli minimi riduce drasticamente il rischio: completezza, nitidezza, ridondanza e backup.",
        "Prevenire e sempre piu economico che correggere: pochi minuti di controllo in campo evitano ore di post-produzione."
      ],
      en: [
        "Frequent mistakes include insufficient coverage, weak geometric control, and inconsistent file naming.",
        "Missing on-site intermediate checks often means gaps are discovered only during processing.",
        "A standard checklist with minimum controls sharply reduces risk: completeness, sharpness, redundancy, and backup.",
        "Prevention is always cheaper than correction: a few minutes in the field can save hours of post-processing."
      ]
    }
  },
  {
    slug: "termografia-fotovoltaico-diagnosi-precoce-e-performance",
    title: {
      it: "Termografia su fotovoltaico: diagnosi precoce e performance impianto",
      en: "Thermal inspections on PV systems: early diagnosis and performance"
    },
    excerpt: {
      it: "Hotspot, mismatch, bypass diode e degrado: cosa si vede davvero e come trasformarlo in manutenzione efficace.",
      en: "Hotspots, mismatch, bypass diodes, and degradation: what thermal data actually reveals and how to turn it into effective maintenance."
    },
    body: {
      it: [
        "La termografia su impianti fotovoltaici consente di individuare in modo rapido anomalie locali che riducono rendimento e affidabilita nel medio periodo.",
        "Tra i pattern piu frequenti si osservano hotspot puntuali, surriscaldamenti distribuiti su stringa, disuniformita tra moduli contigui e zone con comportamento termico anomalo legato a difetti elettrici o installativi.",
        "La sola immagine termica non basta: e fondamentale contestualizzare i rilievi con orientamento, irraggiamento, stato di carico, sporco superficiale, ombreggiamenti e storico manutentivo.",
        "Un approccio tecnico solido prevede classificazione per severita, geolocalizzazione dei moduli critici e priorita di intervento per minimizzare perdita energetica e rischio di guasto progressivo.",
        "Il vantaggio operativo e doppio: manutenzione predittiva invece che reattiva, e miglioramento del rapporto costo/beneficio degli interventi su grandi superfici.",
        "Quando ripetuta con cadenza periodica, la termografia costruisce una baseline prestazionale utile per verificare se le correzioni effettuate hanno realmente riportato l'impianto entro una fascia termica attesa."
      ],
      en: [
        "Thermal inspection of photovoltaic systems enables rapid detection of local anomalies that reduce yield and long-term reliability.",
        "Typical patterns include point hotspots, string-level overheating, non-uniform behavior across adjacent modules, and thermal anomalies linked to electrical or installation defects.",
        "Thermal frames alone are not enough: results must be interpreted against orientation, irradiance, load condition, surface soiling, shading, and maintenance history.",
        "A robust technical workflow includes severity ranking, geolocation of critical modules, and intervention priorities to minimize energy loss and progressive failure risk.",
        "The operational benefit is twofold: predictive rather than reactive maintenance, and better cost/benefit on large plants.",
        "When repeated periodically, thermal inspections build a performance baseline to verify whether corrective actions actually restore expected thermal behavior."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/agricoltura-zonazione-vigore.webp",
        alt: {
          it: "Esempio di mappa classificata per severita delle anomalie",
          en: "Example of severity-classified anomaly map"
        },
        caption: {
          it: "Metodo di classificazione applicabile anche al monitoraggio fotovoltaico per priorita di intervento.",
          en: "Classification workflow also applicable to PV monitoring and intervention prioritization."
        }
      }
    ]
  },
  {
    slug: "agricoltura-di-precisione-con-termografia-da-drone",
    title: {
      it: "Agricoltura di precisione con termografia da drone",
      en: "Precision agriculture with drone thermal imaging"
    },
    excerpt: {
      it: "Stress idrico, variabilita intra-parcella e decisioni irrigue: come usare il dato termico in modo tecnico.",
      en: "Water stress, intra-field variability, and irrigation decisions: using thermal data as a technical tool."
    },
    body: {
      it: [
        "In agricoltura di precisione la termografia da drone permette di leggere differenze termiche tra aree apparentemente uniformi, anticipando segnali di stress prima dei sintomi visivi evidenti.",
        "Le mappe termiche georeferenziate aiutano a segmentare il campo in zone omogenee di comportamento, supportando strategie irrigue differenziate e uso piu efficiente delle risorse.",
        "Il dato termico acquista valore quando viene integrato con rilievo RGB, conoscenza pedologica, stadio fenologico e informazioni operative del campo.",
        "Una pianificazione corretta dei voli e decisiva: finestre orarie, condizioni meteo, quota, sovrapposizione e protocolli costanti consentono confronti affidabili tra campagne diverse.",
        "I vantaggi principali riguardano ottimizzazione dell'acqua, riduzione degli stress prolungati, aumento dell'uniformita produttiva e supporto alla priorita di intervento agronomico.",
        "Il risultato non e solo una mappa: e un sistema decisionale tecnico che collega anomalia termica, causa probabile e azione consigliata sul terreno."
      ],
      en: [
        "In precision agriculture, drone thermal imaging reveals temperature differences within apparently uniform fields, often before visible stress symptoms appear.",
        "Georeferenced thermal maps help segment fields into homogeneous behavior zones, supporting variable-rate irrigation and more efficient resource use.",
        "Thermal data becomes truly useful when combined with RGB imagery, soil knowledge, phenological stage, and field operational context.",
        "Flight planning is critical: time windows, weather constraints, altitude, overlap, and consistent protocols are required for reliable multi-campaign comparison.",
        "Main benefits include water optimization, reduced prolonged stress, improved production uniformity, and clearer agronomic intervention priorities.",
        "The outcome is not just a map: it is a technical decision framework linking thermal anomaly, probable cause, and recommended action."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/agricoltura-indici-multispettrali.webp",
        alt: {
          it: "Set di indici multispettrali su filari agricoli",
          en: "Multispectral index set on crop rows"
        },
        caption: {
          it: "Confronto tra layer per diagnosi differenziale delle criticita vegetative.",
          en: "Cross-layer comparison for differential diagnosis of crop issues."
        }
      },
      {
        src: "/media/presentazioni/agricoltura-mappa-ndvi.webp",
        alt: {
          it: "Mappa NDVI con variabilita spaziale del vigore",
          en: "NDVI map with spatial variability of vigor"
        },
        caption: {
          it: "Supporto a irrigazione di precisione e gestione intra-parcella.",
          en: "Support for precision irrigation and intra-field management."
        }
      }
    ]
  },
  {
    slug: "monitoraggio-termico-multitemporale-benefici-e-kpi",
    title: {
      it: "Monitoraggio termico multitemporale: vantaggi, KPI e ritorno operativo",
      en: "Multi-temporal thermal monitoring: benefits, KPIs, and operational return"
    },
    excerpt: {
      it: "Dal controllo spot a una strategia misurabile: cosa tracciare e perche conviene.",
      en: "From one-off checks to a measurable strategy: what to track and why it pays off."
    },
    body: {
      it: [
        "Le ispezioni termiche isolate sono utili, ma il salto di qualita arriva con un piano multitemporale che confronta dati acquisiti con protocollo coerente.",
        "Il confronto periodico consente di distinguere anomalie episodiche da trend strutturali, riducendo interventi impulsivi e migliorando la pianificazione tecnica.",
        "Per ottenere dati comparabili servono KPI chiari: numero anomalie per classe, estensione aree critiche, delta termico medio e tempo di risoluzione dopo intervento.",
        "Nei fotovoltaici questo approccio migliora manutenzione e continuita produttiva; in edilizia supporta piani di riqualificazione; in agricoltura orienta irrigazione e gestione differenziata.",
        "Il beneficio economico deriva dalla riduzione dei guasti tardivi, da una migliore allocazione delle risorse e dalla possibilita di misurare l'efficacia delle azioni correttive.",
        "In sintesi, la termografia periodica trasforma un rilievo tecnico in un processo di controllo continuo basato su evidenze oggettive e indicatori verificabili."
      ],
      en: [
        "Single thermal inspections are useful, but the real value comes from a multi-temporal plan based on a consistent acquisition protocol.",
        "Periodic comparison separates occasional anomalies from structural trends, reducing impulsive interventions and improving technical planning.",
        "Comparable datasets require clear KPIs: anomaly count by severity, critical area extent, average thermal delta, and post-intervention resolution time.",
        "In PV plants this improves maintenance and production continuity; in buildings it supports retrofit planning; in agriculture it guides irrigation and zone-based management.",
        "Economic return comes from fewer late-stage failures, better resource allocation, and measurable verification of corrective actions.",
        "In short, periodic thermal work turns a one-time survey into a continuous control process based on objective evidence and verifiable indicators."
      ]
    },
    gallery: [
      {
        src: "/media/presentazioni/agricoltura-zonazione-vigore.webp",
        alt: {
          it: "Zonazione tecnica utile al confronto multitemporale",
          en: "Technical zonation map for multi-temporal comparison"
        },
        caption: {
          it: "Le classi territoriali diventano KPI monitorabili nel tempo.",
          en: "Spatial classes become trackable KPIs over time."
        }
      }
    ]
  }
];
