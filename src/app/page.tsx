import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {pickLocaleFromAcceptLanguage} from "@/i18n/routing";

export default async function RootPage() {
  const h = await headers();
  const acceptLanguage = h.get("accept-language");
  const locale = pickLocaleFromAcceptLanguage(acceptLanguage);
  redirect(`/${locale}`);
}
