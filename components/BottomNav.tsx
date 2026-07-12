"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, FolderOpen, Heart, Home, Search } from "lucide-react";

const navItems = [
  {
    label: "Hem",
    href: "/",
    icon: Home,
    isActive: (pathname: string) => pathname === "/",
  },
  {
    label: "Sök",
    href: "/sok",
    icon: Search,
    isActive: (pathname: string) => pathname === "/sok",
  },
  {
    label: "Kategorier",
    href: "/kategorier",
    icon: FolderOpen,
    isActive: (pathname: string) =>
      pathname === "/kategorier" ||
      pathname.startsWith("/traning") ||
      pathname.startsWith("/halsa") ||
      pathname.startsWith("/skonhet"),
  },
  {
    label: "Elins val",
    href: "/elins-val",
    icon: Heart,
    isActive: (pathname: string) => pathname === "/elins-val",
  },
  {
    label: "Sparat",
    href: "/sparat",
    icon: Bookmark,
    isActive: (pathname: string) => pathname === "/sparat",
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobil huvudnavigering"
      className="mobile-bottom-nav fixed left-4 z-30 grid w-[calc(100%-2rem)] max-w-[24rem] grid-cols-5 rounded-full border border-line bg-surface/82 p-2 shadow-[0_18px_60px_rgba(122,71,83,0.18)] backdrop-blur-2xl sm:left-1/2 sm:-translate-x-1/2 md:hidden"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = item.isActive(pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-full px-0.5 text-[0.6rem] font-bold leading-none tracking-normal transition min-[380px]:text-[0.68rem] ${
              active
                ? "bg-rose/15 text-wine"
                : "text-ink-soft hover:bg-rose/8 hover:text-wine"
            }`}
          >
            <Icon size={20} aria-hidden="true" />
            <span className="max-w-full truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
