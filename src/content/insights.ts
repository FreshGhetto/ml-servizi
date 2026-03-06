import type {Locale} from "@/i18n/routing";

export type Insight = {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string[]>;
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
    }
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
    }
  }
];
