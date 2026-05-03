"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import { NordicNodeLogo } from "@/components/ui/NordicNodeLogo";
import { getLocalizedHref, type AppLocale } from "@/lib/site";

const footerCopy = {
  sv: {
    description:
      "Smart Art AI bygger tydliga AI-system för restauranger, städföretag och verksamheter som behöver mindre admin och bättre drift.",
    contact: "Kontakt",
    location: "Jämtland, Sverige",
    copyright: "© 2026 Smart Art AI. Alla rättigheter förbehållna.",
    columns: [
      {
        title: "Produkter",
        links: [
          { label: "Nord Smart Menu", href: "/om-oss" },
          { label: "StädSync AI", href: "/stadsync-ai" },
          { label: "AI-konsultation", href: "mailto:hello@smartartai.se?subject=AI%20Konsultation" },
        ],
      },
      {
        title: "Företag",
        links: [
          { label: "Smart Art AI", href: "/" },
          { label: "Teknik", href: "/stadsync-ai" },
          { label: "Karriär", href: "mailto:hello@smartartai.se?subject=Karriar" },
        ],
      },
      {
        title: "Resurser",
        links: [
          { label: "Blogg", href: "/blog" },
          { label: "Kundsupport", href: "mailto:hello@smartartai.se" },
          { label: "Integritetspolicy", href: "mailto:hello@smartartai.se?subject=GDPR" },
        ],
      },
    ],
  },
  en: {
    description:
      "Smart Art AI builds clear AI systems for restaurants, cleaning companies, and teams that need less admin and better operations.",
    contact: "Contact",
    location: "Jämtland, Sweden",
    copyright: "© 2026 Smart Art AI. All rights reserved.",
    columns: [
      {
        title: "Products",
        links: [
          { label: "Nord Smart Menu", href: "/om-oss" },
          { label: "StädSync AI", href: "/stadsync-ai" },
          { label: "AI consultation", href: "mailto:hello@smartartai.se?subject=AI%20Consultation" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Smart Art AI", href: "/" },
          { label: "Technology", href: "/stadsync-ai" },
          { label: "Careers", href: "mailto:hello@smartartai.se?subject=Careers" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Customer support", href: "mailto:hello@smartartai.se" },
          { label: "Privacy policy", href: "mailto:hello@smartartai.se?subject=GDPR" },
        ],
      },
    ],
  },
} as const;

export default function Footer() {
  const locale = useLocale() as AppLocale;
  const t = footerCopy[locale];

  const resolveFooterHref = (href: string) => {
    if (href === "/") {
      return getLocalizedHref("/", locale);
    }

    if (href === "/om-oss") {
      return getLocalizedHref("/om-oss", locale);
    }

    if (href === "/stadsync-ai") {
      return getLocalizedHref("/stadsync-ai", locale);
    }

    if (href === "/blog") {
      return getLocalizedHref("/blog", locale);
    }

    return href;
  };

  return (
    <footer className="scroll-mt-24 border-t border-[var(--border-soft)] bg-[var(--bg-main)] px-6 py-16 text-[var(--text-main)]">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr_1.7fr_0.95fr]">
        <div>
          <Link href={getLocalizedHref("/", locale)} className="flex items-center gap-3">
            <NordicNodeLogo className="h-11 w-11" />
            <p className="text-lg font-black tracking-tight text-white">Smart Art AI</p>
          </Link>

          <p className="mt-6 max-w-md text-base leading-7 text-[var(--text-muted)]">
            {t.description}
          </p>
        </div>

        <div className="grid gap-9 sm:grid-cols-3">
          {t.columns.map((column) => (
            <div key={column.title}>
              <p className="sai-eyebrow text-[var(--text-muted)]">{column.title}</p>
              <div className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={resolveFooterHref(link.href)}
                    className="flex min-h-10 items-center text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="sai-eyebrow text-[var(--text-muted)]">{t.contact}</p>
          <div className="mt-5 space-y-3">
            <a
              href="mailto:hello@smartartai.se"
              className="sai-card-hover inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border-soft)] bg-white/[0.035] px-4 py-3 text-sm font-medium text-[var(--text-main)]"
            >
              <Mail className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
              <span>hello@smartartai.se</span>
            </a>
            <div className="inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border-soft)] bg-white/[0.035] px-4 py-3 text-sm font-medium text-[var(--text-muted)]">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
              <span>{t.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--text-muted)]">
        {t.copyright}
      </div>
    </footer>
  );
}
