"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {localeLabels, locales, type Locale} from "@/i18n/routing";
import {cn} from "@/lib/cn";

function replaceLocale(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  // pathname: /it/... or /en/...
  if (parts.length > 1 && locales.includes(parts[1] as any)) {
    parts[1] = locale;
    return parts.join("/") || "/";
  }
  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export function LanguageSwitch({currentLocale}: {currentLocale: Locale}) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      {locales.map((loc, idx) => {
        const active = loc === currentLocale;
        return (
          <span key={loc} className="flex items-center gap-2">
            <Link
              className={cn(
                "rounded-md px-2 py-1 transition hover:text-gray-900",
                active && "text-gray-900 underline"
              )}
              href={replaceLocale(pathname || `/${currentLocale}`, loc)}
            >
              {localeLabels[loc]}
            </Link>
            {idx === 0 && <span className="select-none text-gray-300">|</span>}
          </span>
        );
      })}
    </div>
  );
}
