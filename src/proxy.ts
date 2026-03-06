import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {pickLocaleFromAcceptLanguage} from "@/i18n/routing";

export function proxy(req: NextRequest) {
  const {pathname} = req.nextUrl;
  const isPublicFile = /\.[^/]+$/.test(pathname);

  if (isPublicFile) {
    return NextResponse.next();
  }

  // If already on /it or /en, continue
  if (pathname.startsWith("/it") || pathname.startsWith("/en") || pathname.startsWith("/_next") || pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  // Redirect root to best language
  if (pathname === "/") {
    const locale = pickLocaleFromAcceptLanguage(req.headers.get("accept-language"));
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // For other routes without locale prefix, use browser preferred locale
  const locale = pickLocaleFromAcceptLanguage(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
