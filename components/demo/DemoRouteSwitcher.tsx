"use client";

import Link from "next/link";
import { Monitor, ScanLine, Smartphone } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { getDemoHref, type AppLocale, type DemoRouteKind } from "@/lib/site";

interface DemoRouteSwitcherProps {
  locale: AppLocale;
  active: DemoRouteKind;
  className?: string;
}

const copy = {
  en: {
    eyebrow: "View",
    menu: "Guest",
    admin: "Admin",
    kitchen: "Kitchen",
  },
  sv: {
    eyebrow: "Vy",
    menu: "Gäst",
    admin: "Admin",
    kitchen: "Kök",
  },
} as const;

const items = [
  { kind: "menu" as const, icon: Smartphone },
  { kind: "admin" as const, icon: Monitor },
  { kind: "kitchen" as const, icon: ScanLine },
];

export function DemoRouteSwitcher({
  locale,
  active,
  className = "",
}: DemoRouteSwitcherProps) {
  const t = copy[locale] ?? copy.en;

  return (
    <div
      className={twMerge(
        "sai-card p-2",
        className,
      )}
    >
      <div className="sai-eyebrow mb-2 px-3 pt-1 text-[var(--text-muted)]">
        {t.eyebrow}
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map(({ kind, icon: Icon }) => {
          const isActive = active === kind;
          const label = t[kind];

          return (
            <Link
              key={kind}
              href={getDemoHref(locale, kind)}
              className={twMerge(
                "flex min-h-14 items-center gap-3 rounded-[1.25rem] border px-4 py-3 text-sm font-semibold transition",
                isActive
                  ? "border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-white"
                  : "border-[var(--border-soft)] bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-white",
              )}
            >
              <span
                className={twMerge(
                  "inline-flex h-10 w-10 items-center justify-center rounded-2xl border",
                  isActive
                    ? "border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-[var(--accent-primary)]"
                    : "border-[var(--border-soft)] bg-black/20 text-[var(--text-muted)]",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
