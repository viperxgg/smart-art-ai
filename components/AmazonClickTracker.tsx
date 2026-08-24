"use client";

import { useEffect } from "react";

import { trackAmazonClick } from "@/lib/gtag";

/**
 * Fires a GA4 `amazon_click` event whenever a visitor clicks any outbound
 * Amazon affiliate link, so GA reports show exactly which page/slug drives
 * clicks (and eventually commission).
 *
 * Delegated at the document level and matched via the `rel="sponsored"`
 * marker every Amazon link already carries site-wide (AmazonCta, ProductCard,
 * ElinChat, ProductDiscoveryLanding, every per-category review page, …) — this
 * way none of those ~15 call sites need to become Client Components or thread
 * an onClick prop just to report a click. Mounted only when GA is configured
 * (see app/layout.tsx), so it's a no-op — literally not mounted — otherwise.
 */
export function AmazonClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest('a[rel~="sponsored"]');
      if (!(link instanceof HTMLAnchorElement)) return;

      trackAmazonClick({
        pagePath: window.location.pathname,
        pageTitle: document.title,
        destinationUrl: link.href,
        linkText: link.textContent?.trim().slice(0, 120) || undefined,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
