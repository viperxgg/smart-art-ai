"use client";

import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLocalizedHref, switchConcretePathname, type AppLocale } from "@/lib/site";

const navItems = [
  { label: "Hem", href: "#home" },
  { label: "Smart Menu", href: "#smart-menu" },
  { label: "Menydesign", href: "#menu-design" },
  { label: "Exempel", href: "#examples" },
  { label: "Process", href: "#process" },
  { label: "Pris", href: "#pricing" },
  { label: "Kontakt", href: "#contact" },
];

export function RestaurantNavbar() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nextLocale: AppLocale = locale === "sv" ? "en" : "sv";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLocaleSwitch() {
    const query = searchParams.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(`${switchConcretePathname(pathname, nextLocale)}${query ? `?${query}` : ""}${hash}`);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--restaurant-border)] bg-[rgba(255,248,239,0.9)] py-3 shadow-[var(--restaurant-shadow)] backdrop-blur-2xl"
          : "bg-[rgba(255,248,239,0.72)] py-5 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-6">
        <Link
          href={getLocalizedHref("/", locale)}
          className="flex min-h-11 items-center gap-3 text-[var(--restaurant-text)]"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--restaurant-dark)] text-sm font-black text-[var(--restaurant-gold)]">
            SA
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black">Smart Art AI</span>
            <span className="block text-xs font-semibold text-[var(--restaurant-muted)]">
              Nord Smart Menu
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-bold text-[var(--restaurant-muted)] transition hover:bg-[var(--restaurant-surface-warm)] hover:text-[var(--restaurant-text)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="restaurant-button restaurant-button-ghost min-h-11 px-4 text-xs uppercase tracking-[0.18em]"
          >
            <Globe className="h-4 w-4" />
            {nextLocale.toUpperCase()}
          </button>
          <a href="#contact" className="restaurant-button restaurant-button-primary">
            Boka gratis menygenomgång
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="restaurant-button restaurant-button-ghost min-h-10 px-3 text-xs uppercase tracking-[0.18em]"
          >
            <Globe className="h-4 w-4" />
            {nextLocale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--restaurant-border)] bg-[var(--restaurant-surface)] text-[var(--restaurant-text)]"
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-[var(--restaurant-border)] bg-[var(--restaurant-surface)] px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-[var(--restaurant-border)] px-4 py-3 text-sm font-bold text-[var(--restaurant-text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="restaurant-button restaurant-button-primary mt-2 w-full"
            >
              Boka gratis menygenomgång
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
