import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
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
    const al = req.headers.get("accept-language") || "";
    const prefersIt = al.toLowerCase().startsWith("it");
    const url = req.nextUrl.clone();
    url.pathname = prefersIt ? "/it" : "/en";
    return NextResponse.redirect(url);
  }

  // For other routes without locale prefix, default to /it
  const url = req.nextUrl.clone();
  url.pathname = `/it${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
