import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
        The requested page is not available. You can continue in Italian or English.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/it"
          className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          Vai alla home IT
        </Link>
        <Link
          href="/en"
          className="inline-flex rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium text-[rgb(var(--fg))] transition hover:border-blue-300/70 hover:text-blue-700 dark:hover:border-blue-500/60 dark:hover:text-blue-300"
        >
          Go to EN home
        </Link>
      </div>
    </main>
  );
}
