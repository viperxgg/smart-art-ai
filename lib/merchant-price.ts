export type MerchantPriceSnapshot = {
  amount: number;
  currency: "SEK";
  checkedAt: string;
  source: string;
};

/** Editorial freshness limit, not a claim that the merchant holds its price. */
export const PRICE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export function getFreshMerchantPrice(price: MerchantPriceSnapshot, now = Date.now()) {
  const checked = Date.parse(price.checkedAt);
  if (!Number.isFinite(now) || !Number.isFinite(checked)
    || !Number.isFinite(price.amount) || price.amount <= 0 || price.currency !== "SEK"
    || now < checked || now - checked >= PRICE_MAX_AGE_MS) return undefined;
  return price;
}
