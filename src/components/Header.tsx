"use client";
import {usePathname, useRouter} from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import type {Locale} from "@/i18n/routing";
import {Container} from "./Container";
import {ThemeSwitch} from "./ThemeSwitch";
import {LanguageSwitchPill} from "./LanguageSwitchPill";
import {MobileMenu} from "./MobileMenu";
import {SearchButton, SearchModal} from "./SearchModal";
import {getDict} from "@/i18n/dict";

export function Header({locale}: {locale: Locale}) {
  const pathname = usePathname();

// Robust active section detection (works with and without /{locale}/ prefix)
const parts = (pathname || "").split("/").filter(Boolean);
const first = parts[0] || "";
const isLocale = first === "it" || first === "en";
const section = (isLocale ? (parts[1] || "") : first) || "";
const activeKey = section; // "", "services", "portfolio", "insights", "about", "contact"

  const d = getDict(locale as any);
  const t = d.Nav;
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 z-50 w-full backdrop-blur " +
          (scrolled ? "bg-[rgb(var(--bg))]/80 " : "bg-[rgb(var(--bg))] ") +
          (scrolled ? "shadow-sm shadow-black/10 dark:shadow-black/40" : "shadow-none")
        }
      >
        <Container className="flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href={`/${locale}`} className="flex items-center no-underline translate-y-[1px]">
              <Image
                src="/brand/logos/ml-servizi-logo-default-navbar.png"
                alt="ML Servizi"
                width={1053}
                height={374}
                className="h-10 w-auto dark:hidden"
              />
              <Image
                src="/brand/logos/ml-servizi-logo-white-navbar.png"
                alt="ML Servizi"
                width={1053}
                height={374}
                className="hidden h-10 w-auto dark:block"
              />
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
  <Link
    href={`/${locale}/services`}
    className={
      "relative no-underline px-0.5 text-sm leading-none transition-colors " +
      "after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
      "after:bg-blue-500 after:transition-transform after:duration-150 after:ease-out " +
      (activeKey === "services"
        ? "text-[rgb(var(--fg))] after:scale-x-100"
        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:after:scale-x-100")
    }
  >
    {t.services}
  </Link>

  <Link
    href={`/${locale}/portfolio`}
    className={
      "relative no-underline px-0.5 text-sm leading-none transition-colors " +
      "after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
      "after:bg-blue-500 after:transition-transform after:duration-150 after:ease-out " +
      (activeKey === "portfolio"
        ? "text-[rgb(var(--fg))] after:scale-x-100"
        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:after:scale-x-100")
    }
  >
    {t.portfolio}
  </Link>

  <Link
    href={`/${locale}/insights`}
    className={
      "relative no-underline px-0.5 text-sm leading-none transition-colors " +
      "after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
      "after:bg-blue-500 after:transition-transform after:duration-150 after:ease-out " +
      (activeKey === "insights"
        ? "text-[rgb(var(--fg))] after:scale-x-100"
        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:after:scale-x-100")
    }
  >
    {t.insights}
  </Link>

  <Link
    href={`/${locale}/about`}
    className={
      "relative no-underline px-0.5 text-sm leading-none transition-colors " +
      "after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
      "after:bg-blue-500 after:transition-transform after:duration-150 after:ease-out " +
      (activeKey === "about"
        ? "text-[rgb(var(--fg))] after:scale-x-100"
        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:after:scale-x-100")
    }
  >
    {t.about}
  </Link>

  <Link
    href={`/${locale}/contact`}
    className={
      "relative no-underline px-0.5 text-sm leading-none transition-colors " +
      "after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
      "after:bg-blue-500 after:transition-transform after:duration-150 after:ease-out " +
      (activeKey === "contact"
        ? "text-[rgb(var(--fg))] after:scale-x-100"
        : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:after:scale-x-100")
    }
  >
    {t.contact}
  </Link>
</nav>
          </div>

          <div className="flex items-center gap-3">
            <SearchButton onClick={() => setSearchOpen(true)} />
            <ThemeSwitch />
            <LanguageSwitchPill currentLocale={locale as any} />

            <Link
              href={`/${locale}/contact`}
              className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 active:shadow-sm md:inline-flex no-underline"
            >
              {t.cta}
            </Link>

            <MobileMenu locale={locale} />
          </div>
        </Container>
      </header>

      <SearchModal locale={locale as any} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
