import type {Metadata} from "next";
import type {Locale} from "@/i18n/routing";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Providers} from "@/components/Providers";
import {BackToTop} from "@/components/BackToTop";
import {getDict} from "@/i18n/dict";

export const metadata: Metadata = {
  title: "ML Servizi",
  description: "Surveying, construction accounting and 3D modelling."
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const d = getDict(locale as any);

  return (
    <Providers>
      <Header locale={locale} />
      <main className="pt-16">{children}</main>
      <BackToTop label={d.Common?.backToTop ?? (locale === "it" ? "Torna su" : "Back to top")} />
      <Footer locale={locale} />
    </Providers>
  );
}
