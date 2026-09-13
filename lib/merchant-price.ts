export type MerchantPriceSnapshot = {
  amount: number;
  currency: "SEK";
  checkedAt: string;
  source: string;
};

/** Keep the last verified snapshot until an evidence-backed replacement is available. */
export function getVerifiedMerchantPrice(price: MerchantPriceSnapshot, now = Date.now()) {
  const checked = Date.parse(price.checkedAt);
  if (!Number.isFinite(now) || !Number.isFinite(checked)
    || !Number.isFinite(price.amount) || price.amount <= 0 || price.currency !== "SEK"
    || now < checked) return undefined;
  return price;
}
