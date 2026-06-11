"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, FolderOpen, Heart, Home } from "lucide-react";

const navItems = [
  {
    label: "Hem",
    href: "/",
    icon: Home,
    isActive: (pathname: string) => pathname === "/",
  },
  {
    label: "Kategorier",
    href: "/kategorier",
    icon: FolderOpen,
    isActive: (pathname: string) =>
      pathname === "/kategorier" ||
      pathname.startsWith("/traning") ||
      pathname.startsWith("/halsa"),
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
      className="fixed bottom-4 left-4 z-30 grid w-[calc(100%-2rem)] max-w-[22.5rem] grid-cols-4 rounded-full border border-[#efc6cc] bg-white/82 p-2 shadow-[0_18px_60px_rgba(122,71,83,0.18)] backdrop-blur-2xl sm:left-1/2 sm:-translate-x-1/2 md:hidden"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = item.isActive(pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-14 items-center justify-center gap-1 rounded-full px-2 text-xs font-bold transition ${
              active
                ? "bg-[#ffe4e8] text-[#6b3d4a]"
                : "text-[#8b737a] hover:bg-[#fff1f3] hover:text-[#6b3d4a]"
            }`}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
