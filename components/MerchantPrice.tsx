import { getVerifiedMerchantPrice, type MerchantPriceSnapshot } from "@/lib/merchant-price";

export function MerchantPrice({ price }: { price: MerchantPriceSnapshot }) {
  const verified = getVerifiedMerchantPrice(price);
  return (
    <div className="mt-4 min-h-44 rounded-xl bg-bg p-4" data-merchant-price>
      {verified ? <>
        <p className="text-xs font-semibold text-ink-soft">Senast kontrollerat pris</p>
        <p className="mt-1 font-display text-3xl font-bold text-wine">{new Intl.NumberFormat("sv-SE", { style: "currency", currency: price.currency, minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(price.amount)}</p>
        <p className="mt-2 text-xs text-ink-soft"><time dateTime={price.checkedAt}>{new Intl.DateTimeFormat("sv-SE", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Stockholm" }).format(new Date(price.checkedAt))}</time> · svensk tid</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-soft">Frakt kan tillkomma. Priset kan ändras; butikens pris gäller vid köp.</p>
      </> : <p className="text-sm leading-relaxed text-ink-soft">Prisuppgiften behöver kontrolleras på nytt. Se aktuellt pris hos butiken.</p>}
    </div>
  );
}
