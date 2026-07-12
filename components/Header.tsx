"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/site";

const primaryNav = [
  {
    label: "Skönhet",
    href: "/skonhet",
    isActive: (pathname: string) => pathname.startsWith("/skonhet"),
  },
  {
    label: "Hälsa",
    href: "/halsa",
    isActive: (pathname: string) => pathname.startsWith("/halsa"),
  },
  {
    label: "Träning",
    href: "/traning",
    isActive: (pathname: string) => pathname.startsWith("/traning"),
  },
  {
    label: "Guider",
    href: "/guider",
    isActive: (pathname: string) => pathname.startsWith("/guider"),
  },
] as const;

/**
 * Persistent desktop header — Wave 1. Hidden below `md` because mobile and
 * tablet-down already get top-of-page branding per template (see
 * ProductDiscoveryLanding's inline SiteHeader) plus BottomNav for nav.
 * Sticky (not fixed) so it simply pushes page content down in normal flow —
 * no per-page top-padding offset required.
 */
export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden border-b border-line bg-surface/85 backdrop-blur-xl md:block">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 md:h-20 md:gap-4 md:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <motion.span
            className="relative grid size-9 shrink-0 place-items-center rounded-full bg-gradient-signature md:size-10"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute inset-[2px] rounded-full bg-bg" />
            <span className="relative font-display text-base font-black text-ink md:text-lg">
              E
            </span>
          </motion.span>
          <span className="font-display text-lg font-black tracking-tight text-ink md:text-xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Huvudnavigering" className="flex items-center gap-0.5 lg:gap-1">
          {primaryNav.map((item) => {
            const active = item.isActive(pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-2.5 py-2 text-sm font-bold whitespace-nowrap transition lg:px-4 ${
                  active
                    ? "bg-rose/12 text-wine"
                    : "text-ink-soft hover:bg-rose/8 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/fraga-elin"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-wine px-3.5 text-sm font-black text-bg shadow-[0_16px_36px_rgba(109,60,77,0.28)] transition hover:-translate-y-0.5 hover:bg-wine/90 md:min-h-11 md:px-5"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden lg:inline">Fråga Elin</span>
          <span className="lg:hidden">Fråga</span>
        </Link>
      </div>
    </header>
  );
}
