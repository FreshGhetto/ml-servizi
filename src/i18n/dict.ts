export type Lang = "it" | "en";

// TODO: Replace with the exact address shown on Google Business / Google Maps.
const ADDRESS: Record<Lang, string> = {
  it: "Via Banchina dell' Azoto, 15, 30175 Venezia VE",
  en: "Via Banchina dell' Azoto, 15, 30175 Venice, Italy"
};

export const dict: Record<Lang, any> = {
  it: {
    Nav: {
      services: "Servizi",
      portfolio: "Lavori",
      insights: "Approfondimenti",
      about: "Studio",
      contact: "Contatti",
      cta: "Richiedi preventivo"
    },
    Home: {
      heroTitle: "Studio tecnico per rilievi, contabilità lavori e modellazione 3D",
      heroSubtitle:
        "ML Servizi è lo studio tecnico del Geom. Diego Bacci. Affianchiamo studi professionali, imprese, enti, amministratori e committenza privata nella gestione di rilievi tecnici, documentazione di cantiere, computi metrici, contabilità lavori e restituzioni digitali 2D/3D.",
      primaryCta: "Richiedi un preventivo",
      secondaryCta: "Contatti",
      servicesTitle: "Servizi principali",
      servicesDesc:
        "Una realtà tecnica organizzata, flessibile e orientata alla precisione, in grado di seguire sia incarichi puntuali sia commesse più articolate.",
      workTitle: "Lavori selezionati",
      workDesc: "Interventi tecnici selezionati, sviluppati con metodo, controllo documentale e chiarezza operativa.",
      seeWork: "Vedi",
      locationTitle: "Dove trovarci",
      locationDesc: "Sede operativa e recapiti. Disponibilità su appuntamento per sopralluoghi e trasferte.",
      openInMaps: "Apri su Google Maps",
      talkTitle: "Parliamone",
      talkDesc: "Contattaci per definire obiettivi, elaborati richiesti, tempi operativi e modalità di supporto.",
      requestQuote: "Richiedi un preventivo"
    },
    Common: {
      requestQuote: "Richiedi un preventivo",
      learnMore: "Approfondisci",
      backToTop: "Torna su"
    },
    Contact: {
      title: "Contatti",
      subtitle: "Richieste di preventivo, collaborazioni e informazioni sui servizi.",
      cardHint:
        "Per richieste di preventivo, collaborazioni o informazioni sui servizi, è possibile contattare ML Servizi tramite i riferimenti presenti in questa pagina. Ogni richiesta viene valutata in relazione al tipo di intervento, agli elaborati necessari e alle tempistiche richieste.",
      detailsTitle: "Recapiti",
      addressLabel: "Indirizzo",
      hoursLabel: "Orari",
      emailLabel: "Email",
      pecLabel: "PEC",
      phoneLabel: "Telefono",
      hours: "Lunedì – Venerdì • 08:30 – 12:30 / 14:00 – 18:00\nSu appuntamento per sopralluoghi e trasferte.",
      formTitle: "Invia un messaggio",
      name: "Nome",
      fromEmail: "La tua email",
      subject: "Oggetto",
      message: "Messaggio",
      send: "Apri email"
    },
    Footer: {
      about1: "ML Servizi è lo studio tecnico del Geom. Diego Bacci.",
      about2: "Realtà professionale organizzata per rilievi, contabilità lavori e modellazione digitale 2D/3D.",
      menuTitle: "Menu",
      services: "Servizi",
      work: "Lavori",
      insights: "Approfondimenti",
      contact: "Contatti",
      contactsTitle: "Contatti",
      email: "Email",
      phone: "Telefono",
      vatPec: "P.IVA / PEC",
      privacy: "Privacy",
      cookies: "Cookie",
      rights: "Tutti i diritti riservati."
    },
    Search: {
      placeholder: "Cerca servizi, lavori, guide…",
      tip: "Suggerimento: Ctrl + K",
      none: "Nessun risultato.",
      hintService: "Servizio",
      hintInsight: "Guida",
      hintWork: "Lavoro"
    }
  },
  en: {
    Nav: {
      services: "Services",
      portfolio: "Work",
      insights: "Insights",
      about: "Studio",
      contact: "Contact",
      cta: "Request a quote"
    },
    Home: {
      heroTitle: "Technical studio for surveying, construction accounting and 3D modelling",
      heroSubtitle:
        "ML Servizi is the technical studio of Geom. Diego Bacci. We support professional firms, contractors, institutions, property managers and private clients in technical surveys, site documentation, bills of quantities, construction accounting and 2D/3D digital deliverables.",
      primaryCta: "Request a quote",
      secondaryCta: "Contact us",
      servicesTitle: "Key services",
      servicesDesc:
        "An organized and flexible technical practice focused on precision, able to manage both targeted assignments and more complex commissions.",
      workTitle: "Selected work",
      workDesc: "Selected technical projects developed with method, document control and operational clarity.",
      seeWork: "View",
      locationTitle: "Where to find us",
      locationDesc: "Office location and contacts. Available by appointment for site visits and travel.",
      openInMaps: "Open in Google Maps",
      talkTitle: "Let’s talk",
      talkDesc: "Contact us to define objectives, required deliverables, timing and support workflow.",
      requestQuote: "Request a quote"
    },
    Common: {
      requestQuote: "Request a quote",
      learnMore: "Learn more",
      backToTop: "Back to top"
    },
    Contact: {
      title: "Contact",
      subtitle: "Quote requests, collaborations and service information.",
      cardHint:
        "For quote requests, collaborations or service information, you can contact ML Servizi through the details on this page. Each request is assessed according to the type of intervention, required deliverables and expected timing.",
      detailsTitle: "Details",
      addressLabel: "Address",
      hoursLabel: "Hours",
      emailLabel: "Email",
      pecLabel: "PEC",
      phoneLabel: "Phone",
      hours: "Mon – Fri • 08:30 – 12:30 / 14:00 – 18:00\nBy appointment for site visits and travel.",
      formTitle: "Send a message",
      name: "Name",
      fromEmail: "Your email",
      subject: "Subject",
      message: "Message",
      send: "Open email"
    },
    Footer: {
      about1: "ML Servizi is the technical studio of Geom. Diego Bacci.",
      about2: "A structured professional practice for surveying, construction accounting and 2D/3D digital modeling.",
      menuTitle: "Menu",
      services: "Services",
      work: "Work",
      insights: "Insights",
      contact: "Contact",
      contactsTitle: "Contacts",
      email: "Email",
      phone: "Phone",
      vatPec: "VAT / PEC",
      privacy: "Privacy",
      cookies: "Cookies",
      rights: "All rights reserved."
    },
    Search: {
      placeholder: "Search services, work, guides…",
      tip: "Tip: Ctrl + K",
      none: "No results.",
      hintService: "Service",
      hintInsight: "Guide",
      hintWork: "Work"
    }
  }
};

export function getDict(lang: Lang) {
  return dict[lang] ?? dict.it;
}

export function getAddress(lang: Lang) {
  return ADDRESS[lang] ?? ADDRESS.it;
}
