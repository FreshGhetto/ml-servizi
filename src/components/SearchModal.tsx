"use client";

import {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import type {Locale} from "@/i18n/routing";
import {getDict} from "@/i18n/dict";
import {services} from "@/content/services";
import {insights} from "@/content/insights";
import {portfolio} from "@/content/portfolio";
import {cn} from "@/lib/cn";

function Magnifier({className}:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
  );
}

export function SearchButton({onClick}:{onClick:()=>void}) {
  return (
    <button
      type="button"
      aria-label="Search"
      onClick={onClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      <Magnifier className="text-[rgb(var(--muted))]" />
    </button>
  );
}

type Item = {type: "service"|"insight"|"work"; title: string; href: string; hint: string};

export function SearchModal({locale, open, onClose}:{locale: Locale; open: boolean; onClose: ()=>void}) {
  const router = useRouter();
  const sT = getDict(locale as any).Search;
  const [q, setQ] = useState("");

  const items: Item[] = useMemo(() => {
    return [
      ...services.map((s) => ({
        type: "service" as const,
        title: s.title[locale],
        href: `/${locale}/services/${s.slug}`,
        hint: sT.hintService
      })),
      ...insights.map((i) => ({
        type: "insight" as const,
        title: i.title[locale],
        href: `/${locale}/insights/${i.slug}`,
        hint: sT.hintInsight
      })),
      ...portfolio.map((p) => ({
        type: "work" as const,
        title: p.title[locale],
        href: `/${locale}/portfolio/${p.slug}`,
        hint: sT.hintWork
      }))
    ];
  }, [locale, sT]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items.slice(0, 8);
    return items
      .filter((x) => x.title.toLowerCase().includes(needle) || x.hint.toLowerCase().includes(needle))
      .slice(0, 12);
  }, [q, items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <div className="absolute left-1/2 top-20 w-[92vw] max-w-xl -translate-x-1/2">
        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-xl">
          <div className="flex items-center gap-3 border-b border-[rgb(var(--border))] px-4 py-3">
            <Magnifier className="text-[rgb(var(--muted))]" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={sT.placeholder}
              className="w-full bg-transparent text-sm text-[rgb(var(--fg))] placeholder:text-[rgb(var(--muted))] outline-none"
            />
            <span className="hidden text-xs text-[rgb(var(--muted))] sm:inline">ESC</span>
          </div>

          <div className="max-h-[360px] overflow-auto p-2">
            {results.map((r) => (
              <button
                key={r.href}
                onClick={() => {
                  onClose();
                  router.push(r.href);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div className="text-sm font-medium text-[rgb(var(--fg))]">{r.title}</div>
                <div className="text-xs text-[rgb(var(--muted))]">{r.hint}</div>
              </button>
            ))}
            {results.length === 0 && (
              <div className="px-3 py-8 text-center text-sm text-[rgb(var(--muted))]">
                {sT.none}
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 text-center text-xs text-[rgb(var(--muted))]">
          {sT.tip}
        </div>
      </div>
    </div>
  );
}
