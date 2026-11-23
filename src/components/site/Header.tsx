import { useEffect, useState } from "react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500", scrolled ? "pt-2" : "pt-5")}>
      <div className={cn("glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 md:px-6", scrolled ? "py-2" : "py-3")}>
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="منوی اصلی">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-underline text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#courses" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex">
            مشاهده دوره‌ها
          </a>
          <button
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label="منو"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("absolute h-0.5 w-5 bg-primary transition-transform duration-300", open ? "rotate-45" : "-translate-y-1.5")} />
            <span className={cn("absolute h-0.5 w-5 bg-primary transition-opacity duration-300", open && "opacity-0")} />
            <span className={cn("absolute h-0.5 w-5 bg-primary transition-transform duration-300", open ? "-rotate-45" : "translate-y-1.5")} />
          </button>
        </div>
      </div>
      <div className={cn("glass mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl transition-all duration-500 lg:hidden", open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0")}>
        <nav className="flex flex-col p-4" aria-label="منوی موبایل">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-medium text-foreground hover:bg-secondary">
              {n.label}
            </a>
          ))}
          <a href="#courses" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-bold text-primary-foreground">
            مشاهده دوره‌ها
          </a>
        </nav>
      </div>
    </header>
  );
}
