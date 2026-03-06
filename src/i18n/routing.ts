export const locales = ["it", "en"] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "IT",
  en: "EN"
};
