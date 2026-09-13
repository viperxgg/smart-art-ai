"use client";

import { useEffect } from "react";

import { trackAffiliateClick, trackAmazonClick } from "@/lib/gtag";
import { getPartnerClick, isAmazonDestination } from "@/lib/affiliate-tracking";

/**
 * Keeps historical Amazon clicks separate from tagged Adtraction links.
 * Each intended click follows exactly one event path. Partner events require
 * analytics consent and contain page/product/merchant/placement, never the full URL.
 *
 * Delegated at the document level and matched via the `rel="sponsored"`
 * marker every affiliate link already carries site-wide (AmazonCta, ProductCard,
 * ElinChat, ProductDiscoveryLanding, every per-category review page, …) — this
 * way none of those ~15 call sites need to become Client Components or thread
 * an onClick prop just to report a click. Mounted only when GA is configured
 * (see app/layout.tsx), so it's a no-op — literally not mounted — otherwise.
 */
export function AmazonClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.type === "auxclick" && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest('a[rel~="sponsored"]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const partner = getPartnerClick(link.href, link.dataset);
      if (partner) {
        trackAffiliateClick({ pagePath: window.location.pathname, ...partner });
        return;
      }
      if (!isAmazonDestination(link.href)) return;

      trackAmazonClick({
        pagePath: window.location.pathname,
        pageTitle: document.title,
        destinationUrl: link.href,
        linkText: link.textContent?.trim().slice(0, 120) || undefined,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("auxclick", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("auxclick", handleClick, { capture: true });
    };
  }, []);

  return null;
}
