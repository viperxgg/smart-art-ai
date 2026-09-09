"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

import {
  CONSENT_REOPEN_EVENT,
  clearAnalyticsCookies,
  getServerConsentSnapshot,
  getStoredConsentSnapshot,
  subscribeToStoredConsent,
  writeStoredConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { updateAnalyticsConsent } from "@/lib/gtag";

/**
 * GDPR-style consent banner for Google Analytics 4. Only ever mounted when
 * NEXT_PUBLIC_GA_ID is set (see app/layout.tsx) — no GA, no banner.
 *
 * Privacy-first by default: nothing is granted until the visitor chooses.
 * The `beforeInteractive` consent-default script in app/layout.tsx already
 * tells gtag to deny analytics_storage before this component even mounts.
 *
 * Three behaviours matter beyond asking once:
 *
 * - Reopening. `CONSENT_REOPEN_EVENT` (dispatched by ConsentSettingsButton)
 *   shows the banner again so a visitor can change or withdraw a stored choice.
 *   Without it a stored "granted" was permanent per browser.
 * - Real withdrawal. Choosing "Neka" also deletes the GA cookies already in the
 *   browser. Consent Mode stops new writes but never removes the existing id.
 * - Focus. Closing immediately unmounts the banner, without retaining focusable
 *   controls during an exit animation. Reopened settings restore trigger focus.
 */
export function CookieConsentBanner() {
  // localStorage is an external store, so it is read through
  // useSyncExternalStore rather than copied into state inside an effect. The
  // snapshot distinguishes a saved choice from missing or unavailable server
  // state; SSR never assumes that consent was granted.
  //
  // Analytics consent itself is applied only by the ga-consent-default script
  // in app/layout.tsx, pre-hydration, from the visitor's own storage.
  const snapshot = useSyncExternalStore(
    subscribeToStoredConsent,
    getStoredConsentSnapshot,
    getServerConsentSnapshot,
  );
  // "unknown" is the server render: never ask there, never treat it as consent.
  const mustAsk = snapshot === null;
  // Reopened from the footer control. Set from an event handler, never from an
  // effect body, and it changes no stored or applied consent on its own.
  const [reopened, setReopened] = useState(false);
  const visible = mustAsk || reopened;
  const storedChoice = snapshot === null || snapshot === "unknown" ? null : snapshot;

  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const lastAppliedRef = useRef<ConsentChoice | null | "unknown" | undefined>(undefined);

  useEffect(() => {
    function onReopen(event: Event) {
      returnFocusRef.current =
        (event as CustomEvent<{ returnFocusTo?: HTMLElement }>).detail?.returnFocusTo
        ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
      setReopened(true);
    }

    window.addEventListener(CONSENT_REOPEN_EVENT, onReopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, onReopen);
  }, []);

  // Cross-tab: a choice made in another tab must reach THIS tab's analytics,
  // not just hide its banner. The layout script only runs on a fresh load, and
  // a granted -> denied change leaves the banner hidden either way, so this has
  // to key on the stored choice itself. Keying it on "must we ask?" silently
  // missed exactly that transition.
  useEffect(() => {
    if (snapshot === "unknown") return;
    if (lastAppliedRef.current === undefined) {
      // First client render: the layout script already applied the stored choice.
      lastAppliedRef.current = snapshot;
      return;
    }
    if (snapshot === lastAppliedRef.current) return;
    lastAppliedRef.current = snapshot;
    const nextChoice = snapshot ?? "denied";
    updateAnalyticsConsent(nextChoice);
    if (nextChoice === "denied") clearAnalyticsCookies();
  }, [snapshot]);

  useEffect(() => {
    if (visible) {
      headingRef.current?.focus();
    }
  }, [visible]);

  function restoreFocus() {
    const returnTo = returnFocusRef.current;
    returnFocusRef.current = null;
    if (returnTo?.isConnected) returnTo.focus();
  }

  /** Dismiss the reopened panel without touching the existing choice. */
  function close() {
    setReopened(false);
    restoreFocus();
  }

  function respond(choice: ConsentChoice) {
    writeStoredConsent(choice);
    updateAnalyticsConsent(choice);
    lastAppliedRef.current = choice;
    if (choice === "denied") {
      // Withdrawal has to remove what is already stored, not only stop new writes.
      clearAnalyticsCookies();
    }
    setReopened(false);
    restoreFocus();
  }

  return (
    <>
      {visible ? (
        <motion.div
          key="cookie-consent-banner"
          onKeyDown={(event) => { if (event.key === "Escape" && reopened) close(); }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
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
                  att förlora funktioner. Du kan ändra ditt val när som helst via
                  «Cookieinställningar» längst ned på sidan.{" "}
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

            {storedChoice ? (
              <p className="mt-3 text-sm font-bold text-wine">
                Ditt nuvarande val:{" "}
                {storedChoice === "granted" ? "Statistik tillåten" : "Statistik nekad"}
                . Välj nedan för att ändra, eller stäng för att behålla det.
              </p>
            ) : null}

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
              {reopened ? (
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-black text-ink-soft transition hover:bg-surface/60 sm:order-0"
                >
                  Stäng utan att ändra
                </button>
              ) : null}
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
    </>
  );
}
