"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AutomationRequestModal from "@/components/ui/AutomationRequestModal";
import ContactFormModal from "@/components/ui/ContactFormModal";
import { NordicNodeLogo } from "@/components/ui/NordicNodeLogo";
import {
  getLocalizedHref,
  switchConcretePathname,
  type AppLocale,
  type InternalPathname,
} from "@/lib/site";

const copy = {
  sv: {
    consultation: "Boka Konsultation",
    discover: "Upptäck Lösningar",
    nav: {
      about: "Nord Smart Menu",
      products: "StädSync AI",
      blog: "Blogg",
    },
    products: [
      {
        label: "StädSync AI",
        description: "AI-drift för svenska städföretag",
        href: "/stadsync-ai" as const,
      },
      {
        label: "Nord Smart Menu",
        description: "Digital meny och restaurangflöde",
        href: "/om-oss" as const,
      },
    ],
  },
  en: {
    consultation: "Book Consultation",
    discover: "Explore Solutions",
    nav: {
      about: "Nord Smart Menu",
      products: "StädSync AI",
      blog: "Blog",
    },
    products: [
      {
        label: "StädSync AI",
        description: "AI operations for Swedish cleaning companies",
        href: "/stadsync-ai" as const,
      },
      {
        label: "Nord Smart Menu",
        description: "Digital menu and restaurant flow",
        href: "/om-oss" as const,
      },
    ],
  },
} as const;

export default function Navbar() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = copy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false);

  const homeHref = getLocalizedHref("/", locale);
  const aboutHref = getLocalizedHref("/om-oss", locale);
  const stadSyncHref = getLocalizedHref("/stadsync-ai", locale);
  const blogHref = getLocalizedHref("/blog", locale);
  const nextLocale: AppLocale = locale === "sv" ? "en" : "sv";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLocaleSwitch = () => {
    const query = searchParams.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const targetPathname = switchConcretePathname(pathname, nextLocale);

    router.replace(`${targetPathname}${query ? `?${query}` : ""}${hash}`);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--border-soft)] bg-[rgba(5,6,7,0.86)] py-4 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            : "bg-[rgba(5,6,7,0.72)] py-6 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href={homeHref} className="flex items-center gap-3" onClick={closeMobileMenu}>
            <NordicNodeLogo className="h-11 w-11" />
            <p className="text-lg font-black tracking-tight text-white">Smart Art AI</p>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              href={stadSyncHref}
              className="inline-flex min-h-11 min-w-11 items-center px-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {t.nav.products}
            </Link>

            <Link
              href={aboutHref}
              className="inline-flex min-h-11 min-w-11 items-center px-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {t.nav.about}
            </Link>

            <Link
              href={blogHref}
              className="inline-flex min-h-11 min-w-11 items-center px-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {t.nav.blog}
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={handleLocaleSwitch}
              className="sai-button sai-button-secondary min-h-11 px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              <Globe className="h-3.5 w-3.5" />
              {nextLocale.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="sai-button sai-button-secondary min-h-11 px-5 py-3"
            >
              {t.consultation}
            </button>
            <button
              type="button"
              onClick={() => setIsAutomationModalOpen(true)}
              className="sai-button sai-button-primary min-h-11 px-5 py-3"
            >
              {t.discover}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={handleLocaleSwitch}
              className="sai-button sai-button-secondary min-h-10 px-3 py-2 text-xs uppercase tracking-[0.2em]"
            >
              <Globe className="h-3.5 w-3.5" />
              {nextLocale.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/[0.035] text-[var(--text-main)]"
              aria-label="Öppna meny"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-[var(--border-soft)] bg-[rgba(5,6,7,0.96)] px-6 py-6 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              <Link
                href={aboutHref}
                onClick={closeMobileMenu}
                className="sai-card px-5 py-4 text-base font-semibold text-[var(--text-main)]"
              >
                {t.nav.about}
              </Link>
              {t.products.map((product) => {
                const href = getLocalizedHref(product.href as InternalPathname, locale);

                return (
                  <Link
                    key={product.label}
                    href={href}
                    onClick={closeMobileMenu}
                    className="sai-card px-5 py-4"
                  >
                    <span className="block text-base font-semibold text-white/86">
                      {product.label}
                    </span>
                    <span className="mt-1 block text-sm text-white/46">
                      {product.description}
                    </span>
                  </Link>
                );
              })}
              <Link
                href={blogHref}
                onClick={closeMobileMenu}
                className="sai-card px-5 py-4 text-base font-semibold text-[var(--text-main)]"
              >
                {t.nav.blog}
              </Link>
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setIsModalOpen(true);
                }}
                className="sai-button sai-button-secondary mt-2 w-full py-4"
              >
                {t.consultation}
              </button>
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setIsAutomationModalOpen(true);
                }}
                className="sai-button sai-button-primary w-full py-4"
              >
                {t.discover}
              </button>
            </div>
          </div>
        ) : null}
      </nav>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
        serviceType={locale === "sv" ? "AI-konsultation" : "AI consultation"}
        sourcePage={pathname}
        ctaContext="navbar"
        introMessage={
          locale === "sv"
            ? "Berätta kort om din verksamhet så återkommer vi med ett konkret nästa steg."
            : "Tell us briefly about your business and we will follow up with a concrete next step."
        }
      />

      <AutomationRequestModal
        isOpen={isAutomationModalOpen}
        onClose={() => setIsAutomationModalOpen(false)}
        locale={locale}
        sourcePage={pathname}
        ctaContext="navbar-discover-solutions"
      />
    </>
  );
}
