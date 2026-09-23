"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useSyncExternalStore } from "react";

import {
  getServerConsentSnapshot,
  getStoredConsentSnapshot,
  subscribeToStoredConsent,
} from "@/lib/consent";

/** Loads Google Analytics only after the visitor has granted analytics consent. */
export function ConsentGatedAnalytics({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(
    subscribeToStoredConsent,
    getStoredConsentSnapshot,
    getServerConsentSnapshot,
  );

  return consent === "granted" ? <GoogleAnalytics gaId={gaId} /> : null;
}
