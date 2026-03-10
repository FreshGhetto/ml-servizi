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
      about: "Chi sono",
      contact: "Contatti",
      cta: "Richiedi consulenza"
    },
    Home: {
      heroTitle: "Servizi tecnici per rilievi, contabilità lavori e modellazione 3D",
      heroSubtitle:
        "Operativo in Veneto. Disponibile per collaborazioni e trasferte anche fuori Italia (CH inclusa).",
      primaryCta: "Vedi servizi",
      secondaryCta: "Contattami",
      servicesTitle: "Servizi principali",
      servicesDesc: "Una selezione dei servizi più richiesti, con deliverable e casi d'uso.",
      workTitle: "Lavori selezionati",
      workDesc: "Esempi e casi studio (pubblica solo ciò che puoi condividere).",
      seeWork: "Vedi",
      locationTitle: "Dove trovarci",
      locationDesc: "Sede e recapiti. Su appuntamento per sopralluoghi e trasferte.",
      openInMaps: "Apri su Google Maps",
      talkTitle: "Parliamone",
      talkDesc: "Scrivimi due righe: ti rispondo con domande mirate e una proposta chiara.",
      requestQuote: "Richiedi preventivo"
    },
    Common: {
      requestQuote: "Richiedi preventivo",
      learnMore: "Approfondisci",
      backToTop: "Torna su"
    },
    Contact: {
      title: "Contatti",
      subtitle: "Richieste, preventivi, collaborazioni.",
      cardHint: "Compila il form: si aprirà il tuo client mail con il messaggio già pronto (nessun account richiesto).",
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
      about1: "Geometra – rilievi, contabilità lavori, modellazione 3D.",
      about2: "Operativo in Veneto · Disponibile per trasferte e collaborazioni anche fuori Italia.",
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
      about: "About",
      contact: "Contact",
      cta: "Request a quote"
    },
    Home: {
      heroTitle: "Technical services for surveying, construction accounting and 3D modelling",
      heroSubtitle:
        "Based in Veneto (Italy). Available for collaborations and travel, including Switzerland (CH).",
      primaryCta: "View services",
      secondaryCta: "Contact",
      servicesTitle: "Key services",
      servicesDesc: "A curated selection of the most requested services, with deliverables and use cases.",
      workTitle: "Selected work",
      workDesc: "Examples and case studies (publish only what you can share).",
      seeWork: "View",
      locationTitle: "Where to find us",
      locationDesc: "Office location and contacts. By appointment for site visits and travel.",
      openInMaps: "Open in Google Maps",
      talkTitle: "Let’s talk",
      talkDesc: "Write a couple of lines: I’ll reply with focused questions and a clear proposal.",
      requestQuote: "Request a quote"
    },
    Common: {
      requestQuote: "Request a quote",
      learnMore: "Learn more",
      backToTop: "Back to top"
    },
    Contact: {
      title: "Contact",
      subtitle: "Requests, quotes, collaborations.",
      cardHint: "Fill the form: it will open your email client with a prefilled message (no account needed).",
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
      about1: "Surveyor – site surveys, construction accounting, 3D modeling.",
      about2: "Based in Veneto (Italy) · Available for travel and cross-border collaborations.",
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
