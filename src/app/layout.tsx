import "@/app/globals.css";
import type {Metadata} from "next";
import {SITE_NAME, SITE_URL} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale?: string}>;
}) {
  const {locale} = await params;
  const currentLocale = locale === "en" ? "en" : "it";

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
