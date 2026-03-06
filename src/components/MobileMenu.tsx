"use client";

import Link from "next/link";
import {useState} from "react";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {cn} from "@/lib/cn";

function MenuIcon({className}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );
}

export function MobileMenu({locale}: {locale: Locale}) {
  const t = getDict(locale as any).Nav;
  const [open, setOpen] = useState(false);

  const Item = ({href, label}: {href: string; label: string}) => (
    <Link
      href={href}
      className="block rounded-xl px-3 py-2 text-sm text-[rgb(var(--fg))] hover:bg-black/5 dark:hover:bg-white/5"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(v => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--fg))]"
      >
        <MenuIcon />
      </button>

      {open && (
        <div className="dropdown-pop absolute left-0 right-0 top-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-1">
              <Item href={`/${locale}/services`} label={t.services} />
              <Item href={`/${locale}/portfolio`} label={t.portfolio} />
              <Item href={`/${locale}/insights`} label={t.insights} />
              <Item href={`/${locale}/about`} label={t.about} />
              <Item href={`/${locale}/contact`} label={t.contact} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
