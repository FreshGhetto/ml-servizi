export const locales = ["it", "en"] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "IT",
  en: "EN"
};

export function pickLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  if (!acceptLanguage) return defaultLocale;

  const entries = acceptLanguage
    .split(",")
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((part) => {
      const [tagRaw, ...params] = part.split(";").map((s) => s.trim());
      const tag = (tagRaw || "").toLowerCase();

      let q = 1;
      for (const p of params) {
        if (!p.startsWith("q=")) continue;
        const parsed = Number.parseFloat(p.slice(2));
        if (Number.isFinite(parsed)) q = parsed;
      }

      return {tag, q};
    })
    .sort((a, b) => b.q - a.q);

  for (const {tag} of entries) {
    if (tag === "it" || tag.startsWith("it-")) return "it";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }

  return defaultLocale;
}
