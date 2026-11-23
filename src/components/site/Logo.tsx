import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M10 26c2-7 5-11 10-11s8 4 10 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 26h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20" cy="11.5" r="2" fill="var(--rose)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("flex items-center gap-2.5 text-primary", className)} aria-label="ماری کیک - خانه">
      <LogoMark />
      <span className="flex flex-col leading-none" dir="ltr">
        <span className="font-display text-2xl font-semibold italic tracking-wide">Mari Cake</span>
        <span className="mt-0.5 text-[10px] tracking-[0.35em] text-muted-foreground" dir="rtl">ماری کیک</span>
      </span>
    </a>
  );
}
