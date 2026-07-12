/**
 * Cookie-consent storage — pure, dependency-free (safe to import from Server
 * Components too, e.g. the root layout's inline consent-default script).
 *
 * Today the only non-essential category is Google Analytics 4, so consent is
 * a single granted/denied flag. If a second category is ever added (e.g. ad
 * personalization), extend `StoredConsent` rather than adding new keys.
 */

export const GA_CONSENT_STORAGE_KEY = "elinsval:consent";

export type ConsentChoice = "granted" | "denied";

type StoredConsent = {
  analytics: ConsentChoice;
  updatedAt: string;
};

function isConsentChoice(value: unknown): value is ConsentChoice {
  return value === "granted" || value === "denied";
}

/** Reads the visitor's previously stored consent choice, if any. Client-only. */
export function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(GA_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    return isConsentChoice(parsed.analytics) ? parsed.analytics : null;
  } catch {
    return null;
  }
}

/** Persists the visitor's choice so the banner doesn't reappear next visit. */
export function writeStoredConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;

  try {
    const payload: StoredConsent = {
      analytics: choice,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(GA_CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Storage may be unavailable (private mode / quota). The banner will
    // simply reappear next visit — an acceptable, non-crashing fallback.
  }
}
