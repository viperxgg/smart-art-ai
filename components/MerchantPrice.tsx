"use client";

import { useCallback, useSyncExternalStore } from "react";
import { getFreshMerchantPrice, PRICE_MAX_AGE_MS, type MerchantPriceSnapshot } from "@/lib/merchant-price";

export function MerchantPrice({ price }: { price: MerchantPriceSnapshot }) {
  const subscribe = useCallback((notify: () => void) => {
    const remaining = Date.parse(price.checkedAt) + PRICE_MAX_AGE_MS - Date.now();
    const timer = remaining > 0 && remaining <= PRICE_MAX_AGE_MS ? window.setTimeout(notify, remaining) : undefined;
    window.addEventListener("focus", notify);
    document.addEventListener("visibilitychange", notify);
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      window.removeEventListener("focus", notify);
      document.removeEventListener("visibilitychange", notify);
    };
  }, [price.checkedAt]);

  // Server-rendered content never displays a potentially expired price. Recheck on hydration,
  // expiry and tab return; without JavaScript the merchant CTA remains available.
  const fresh = useSyncExternalStore(subscribe, () => Boolean(getFreshMerchantPrice(price)), () => false);
  return (
    <div className="mt-4 min-h-44 rounded-xl bg-bg p-4" data-merchant-price>
      {fresh ? <>
        <p className="text-xs font-semibold text-ink-soft">Senast kontrollerat pris</p>
        <p className="mt-1 font-display text-3xl font-bold text-wine">{new Intl.NumberFormat("sv-SE", { style: "currency", currency: price.currency, minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(price.amount)}</p>
        <p className="mt-2 text-xs text-ink-soft"><time dateTime={price.checkedAt}>{new Intl.DateTimeFormat("sv-SE", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Stockholm" }).format(new Date(price.checkedAt))}</time> · svensk tid</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-soft">Frakt kan tillkomma. Priset kan ändras; butikens pris gäller vid köp.</p>
      </> : <p className="text-sm leading-relaxed text-ink-soft">Prisuppgiften behöver kontrolleras på nytt. Se aktuellt pris hos butiken.</p>}
    </div>
  );
}
