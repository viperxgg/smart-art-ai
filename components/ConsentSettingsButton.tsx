"use client";

import { CONSENT_REOPEN_EVENT } from "@/lib/consent";

/**
 * Reopens the cookie banner so a visitor can review, change or withdraw a
 * stored choice. Withdrawal must be as easy as giving consent; before this
 * control existed a stored choice was permanent per browser, because the banner
 * never rendered again and the cookie policy page carried no control.
 *
 * Opening the panel changes NOTHING: not the stored choice, not the GA consent
 * signal, not the cookies. An earlier version cleared the stored choice on
 * open, which looked harmless because the current page kept its granted state —
 * but the `ga-consent-default` script reads localStorage on the NEXT page load,
 * so a visitor who opened settings and navigated away had their consent
 * silently reverted to denied. Only an explicit "Neka" or "Acceptera" writes.
 */
export function ConsentSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        window.dispatchEvent(
          new CustomEvent(CONSENT_REOPEN_EVENT, {
            detail: { returnFocusTo: event.currentTarget },
          }),
        );
      }}
    >
      Cookieinställningar
    </button>
  );
}
