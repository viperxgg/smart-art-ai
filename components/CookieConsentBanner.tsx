"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

import { readStoredConsent, writeStoredConsent, type ConsentChoice } from "@/lib/consent";
import { updateAnalyticsConsent } from "@/lib/gtag";

/**
 * GDPR-style consent banner for Google Analytics 4. Only ever mounted when
 * NEXT_PUBLIC_GA_ID is set (see app/layout.tsx) — no GA, no banner.
 *
 * Privacy-first by default: nothing is granted until the visitor chooses.
 * The `beforeInteractive` consent-default script in app/layout.tsx already
 * tells gtag to deny analytics_storage before this component even mounts, so
 * the only job left here is to (a) ask, and (b) relay the answer to GA and
 * localStorage. Entrance/exit motion runs through framer-motion, which the
 * root layout's <MotionConfig reducedMotion="user"> already collapses to an
 * instant cut for prefers-reduced-motion — no extra handling needed here.
 */
export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!readStoredConsent()) {
        setVisible(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (visible) {
      headingRef.current?.focus();
    }
  }, [visible]);

  function respond(choice: ConsentChoice) {
    writeStoredConsent(choice);
    updateAnalyticsConsent(choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="cookie-consent-banner"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-[calc(6.75rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4 md:bottom-6"
        >
          <div
            role="region"
            aria-label="Cookiemeddelande"
            className="w-full max-w-2xl rounded-[1.75rem] border border-line bg-surface/95 p-5 shadow-[0_24px_70px_rgba(109,60,77,0.24)] backdrop-blur-xl md:p-6"
          >
            <div className="flex items-start gap-3">
              <span
                className="grid size-10 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine"
                aria-hidden="true"
              >
                <Cookie size={20} />
              </span>
              <div>
                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="font-display text-lg font-black text-ink"
                >
                  Vi använder cookies för statistik
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  Elins val vill förstå vilka sidor som faktiskt hjälper dig — inget
                  mer. Analysdata sparas bara om du godkänner, och du kan neka utan
                  att förlora funktioner.{" "}
                  <Link
                    href="/cookies"
                    className="font-bold text-wine underline underline-offset-2"
                  >
                    Läs vår cookiepolicy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => respond("denied")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-rose/45 bg-surface/60 px-6 text-sm font-black text-wine transition hover:-translate-y-0.5 hover:bg-rose/8 sm:order-1"
              >
                Neka
              </button>
              <button
                type="button"
                onClick={() => respond("granted")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-6 text-sm font-black text-bg shadow-[0_16px_36px_rgba(109,60,77,0.28)] transition hover:-translate-y-0.5 hover:bg-wine/90 sm:order-2"
              >
                Acceptera
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
