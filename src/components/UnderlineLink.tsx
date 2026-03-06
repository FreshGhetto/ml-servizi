"use client";

import Link from "next/link";
import {cn} from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function UnderlineLink({href, children, className, external = false}: Props) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn("link-underline text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn("link-underline text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]", className)}>
      {children}
    </Link>
  );
}
