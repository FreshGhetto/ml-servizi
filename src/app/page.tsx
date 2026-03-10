import {headers} from "next/headers";
import type {Metadata} from "next";
import {redirect} from "next/navigation";
import {pickLocaleFromAcceptLanguage} from "@/i18n/routing";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false
  }
};

export default async function RootPage() {
  const h = await headers();
  const acceptLanguage = h.get("accept-language");
  const locale = pickLocaleFromAcceptLanguage(acceptLanguage);
  redirect(`/${locale}`);
}
