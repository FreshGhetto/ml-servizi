"use client";

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useMemo, useRef, useState} from "react";
import {cn} from "@/lib/cn";
import {locales, type Locale} from "@/i18n/routing";

function replaceLocale(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  if (parts.length > 1 && locales.includes(parts[1] as any)) {
    parts[1] = locale;
    return parts.join("/") || `/${locale}`;
  }
  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export function LanguageSwitchPill({currentLocale}:{currentLocale: Locale}) {
  const router = useRouter();
  const pathname = usePathname() || `/${currentLocale}`;

  const hrefIt = useMemo(() => replaceLocale(pathname, "it"), [pathname]);
  const hrefEn = useMemo(() => replaceLocale(pathname, "en"), [pathname]);

  const [uiLocale, setUiLocale] = useState<Locale>(currentLocale);
  const navigating = useRef(false);

  useEffect(() => {
    if (!navigating.current) setUiLocale(currentLocale);
  }, [currentLocale]);

  const isIt = uiLocale === "it";

  function go(locale: Locale, href: string) {
    if (navigating.current) return;
    if (locale === currentLocale) return;

    navigating.current = true;
    setUiLocale(locale);

    requestAnimationFrame(() => {
      window.setTimeout(() => {
        router.push(href);
        window.setTimeout(() => {
          navigating.current = false;
        }, 260);
      }, 220);
    });
  }

  return (
    <div
      className={cn(
        "ui-smooth relative inline-flex h-9 w-[78px] items-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1 shadow-sm",
        "transition-colors duration-200"
      )}
    >
      {/* Thumb */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 w-[34px] rounded-full bg-blue-600 shadow-md",
          "ui-smooth will-change-[left]"
        )}
        style={{left: isIt ? "4px" : "calc(100% - 34px - 4px)"}}
      />

      <div className="relative z-10 grid h-full w-full grid-cols-2 text-xs font-semibold">
        <button
          type="button"
          onClick={() => go("it", hrefIt)}
          className={cn(
            "flex items-center justify-center rounded-full transition-colors duration-200",
            isIt ? "text-white" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
          )}
          aria-pressed={isIt}
          aria-label="Italiano"
        >
          IT
        </button>

        <button
          type="button"
          onClick={() => go("en", hrefEn)}
          className={cn(
            "flex items-center justify-center rounded-full transition-colors duration-200",
            !isIt ? "text-white" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
          )}
          aria-pressed={!isIt}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
