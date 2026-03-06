import Link from "next/link";
import {cn} from "@/lib/cn";

const baseMotion =
  "transition-[transform,box-shadow,background-color] transition-transform duration-200 ease-out will-change-transform " +
  "hover:-translate-y-[1px] hover:shadow-md active:translate-y-0 active:shadow-sm";

export function MotionPrimaryButton(props: any) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-medium shadow-sm " +
    "bg-blue-600 text-white hover:bg-blue-700 " +
    baseMotion;
  if (props.href) return <Link {...props} className={cn(base, props.className)} />;
  return <button {...props} className={cn(base, props.className)} />;
}

export function MotionSecondaryButton(props: any) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-xl " +
    "bg-slate-100 px-5 text-sm font-medium text-slate-900 " +
    "hover:bg-slate-200 dark:bg-black/30 dark:text-white/90 dark:hover:bg-black/40 backdrop-blur-sm " +
    baseMotion;
  if (props.href) return <Link {...props} className={cn(base, props.className)} />;
  return <button {...props} className={cn(base, props.className)} />;
}
