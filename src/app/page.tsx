import {headers} from "next/headers";
import {redirect} from "next/navigation";

function pickLocale(acceptLanguage: string | null): "it" | "en" {
  if (!acceptLanguage) return "it";
  const al = acceptLanguage.toLowerCase();

  // Prefer Italian if any it-* appears, otherwise English if en-* appears
  // (you can extend this later for 'de', etc.)
  if (al.includes("it")) return "it";
  if (al.includes("en")) return "en";
  return "it";
}

export default async function RootPage() {
  const h = await headers();
  const acceptLanguage = h.get("accept-language");
  const locale = pickLocale(acceptLanguage);
  redirect(`/${locale}`);
}
