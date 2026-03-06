import {cn} from "@/lib/cn";

export function Badge({children, className}: {children: React.ReactNode; className?: string}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgb(var(--border))] bg-transparent px-2.5 py-1 text-xs",
        "text-[rgb(var(--muted))]",
        className
      )}
    >
      {children}
    </span>
  );
}
