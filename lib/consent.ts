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

// Used only when browser storage cannot persist a choice. Never shared on SSR.
let fallbackChoice: ConsentChoice | null = null;

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
    return fallbackChoice;
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
    fallbackChoice = null;
  } catch {
    fallbackChoice = choice;
  }
  notifyConsentChanged();
}

/**
 * Event the footer's "Cookieinställningar" control dispatches to reopen the
 * banner. A custom event keeps the control and the banner decoupled, so the
 * control can live anywhere in the tree (footer, cookie policy page).
 */
export const CONSENT_REOPEN_EVENT = "elinsval:consent-reopen";

/**
 * Dispatched whenever the stored choice changes in this tab. `storage` only
 * fires in OTHER tabs, so a same-tab subscriber needs this to stay in sync.
 */
export const CONSENT_CHANGED_EVENT = "elinsval:consent-changed";

function notifyConsentChanged(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

/**
 * Subscribe/snapshot pair for `useSyncExternalStore`. localStorage is an
 * external store, so reading it through this pair keeps the banner off the
 * server render and out of the "setState inside an effect" pattern, while
 * still reacting to a change made in this tab or another one.
 */
export function subscribeToStoredConsent(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
  };
}

/**
 * What `useSyncExternalStore` reports about the stored choice.
 *
 * Three distinct states, deliberately kept apart:
 *  - "granted" / "denied" — the visitor answered.
 *  - null                 — the visitor has NOT answered; the banner must ask.
 *  - "unknown"            — server render: the choice cannot be known.
 *
 * "unknown" is not consent and is not an answer. It exists so the server never
 * has to express the visitor's state as either a choice or "no choice", and so
 * the banner is never rendered into shared server HTML. An earlier version used
 * "granted" for this and conflated "unknown during SSR" with consent given.
 */
export type StoredConsentSnapshot = ConsentChoice | null | "unknown";

/** Client snapshot: the actual stored choice, or null when none is stored. */
export function getStoredConsentSnapshot(): StoredConsentSnapshot {
  return fallbackChoice ?? readStoredConsent();
}

/**
 * Server snapshot. Grants nothing and denies nothing: analytics consent is
 * applied exclusively by the `ga-consent-default` script in app/layout.tsx,
 * which runs pre-hydration in the visitor's own browser, reads their stored
 * choice, and defaults analytics_storage to "denied" when there is none.
 */
export function getServerConsentSnapshot(): StoredConsentSnapshot {
  return "unknown";
}

/**
 * Removes the stored choice so the banner asks again. On its own this does not
 * withdraw anything — withdrawal happens when the visitor then chooses "Neka",
 * which also calls `clearAnalyticsCookies`.
 */
export function clearStoredConsent(): void {
  if (typeof window === "undefined") return;
  fallbackChoice = null;

  try {
    window.localStorage.removeItem(GA_CONSENT_STORAGE_KEY);
    notifyConsentChanged();
  } catch {
    // Storage may be unavailable; the banner still reopens for this page view.
  }
}

/**
 * Deletes the GA4 first-party cookies (_ga and _ga_<container>) so a withdrawal
 * actually removes the identifiers already stored in the browser. Consent Mode
 * stops new writes, but it does not delete what is already there, and a
 * withdrawal that leaves the client id in place is not a real withdrawal.
 *
 * Cookies are cleared on both the exact host and the registrable domain,
 * because GA writes on the registrable domain (".smartartai.se").
 */
export function clearAnalyticsCookies(): void {
  if (typeof document === "undefined") return;

  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  const registrableDomain = parts.length > 2 ? `.${parts.slice(-2).join(".")}` : `.${hostname}`;
  const domains = [undefined, hostname, registrableDomain];

  document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      });
    });
}
