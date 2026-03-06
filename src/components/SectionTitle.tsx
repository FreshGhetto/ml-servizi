import {cn} from "@/lib/cn";

export function SectionTitle({title, subtitle, className}: {title: string; subtitle?: string; className?: string}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-[rgb(var(--muted))]">{subtitle}</p> : null}
    </div>
  );
}
