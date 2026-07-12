/**
 * Thin, typed wrapper around `@next/third-parties/google`'s `sendGAEvent`.
 * Client-only — import this from Client Components alone (it pulls in a
 * 'use client' module), never from the root layout or other Server
 * Components. `sendGAEvent` pushes straight onto the GA dataLayer queue, so
 * these calls are safe to fire even for a click that happens before the
 * external gtag.js script has finished loading — they just queue.
 */
"use client";

import { sendGAEvent } from "@next/third-parties/google";

import type { ConsentChoice } from "@/lib/consent";

/**
 * Updates Google Consent Mode v2 in real time. GA4 only starts sending real
 * (non-modeled) analytics data once `analytics_storage` is "granted"; ad
 * signals stay denied always since this site runs analytics only, no ads.
 */
export function updateAnalyticsConsent(choice: ConsentChoice): void {
  sendGAEvent("consent", "update", { analytics_storage: choice });
}

type AmazonClickDetails = {
  pagePath: string;
  pageTitle: string;
  destinationUrl: string;
  linkText?: string;
};

/**
 * Fires the GA4 `amazon_click` event so GA reports show which page/slug is
 * actually driving visitors to Amazon (the Pinterest → site → Amazon funnel).
 * Consent Mode v2 decides in the background whether this turns into a full
 * hit or a cookieless/modeled ping — no manual consent check needed here.
 */
export function trackAmazonClick(details: AmazonClickDetails): void {
  sendGAEvent("event", "amazon_click", {
    page_path: details.pagePath,
    page_title: details.pageTitle,
    destination_url: details.destinationUrl,
    ...(details.linkText ? { link_text: details.linkText } : {}),
  });
}
