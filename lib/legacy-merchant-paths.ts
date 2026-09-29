/** Existing reviewed offers only; no catalog URL becomes verified by inclusion here. */
export const legacyMerchantPaths = new Set([
  "/skonhet/cerave-eller-cetaphil",
  "/skonhet/harolja-eller-varmeskydd",
  "/skonhet/varmluftsborste-eller-plattang",
  "/skonhet/olaplex-eller-harinpackning",
]);

// The old decision slug describes PLUS 100 ml. Its reviewed selected record
// supplies the same variant; the old Hair Perfector Amazon link is not reused.
export const legacySelectedProductIds: Readonly<Record<string, string>> = {
  "olaplex-no3-treatment": "olaplex-no3-plus",
};

// Capture one observation time per server-rendered merchant block.
export function getLegacyOfferTime() { return Date.now(); }

export function isBrandProductSource(url: string) {
  const parsed = new URL(url);
  if (/\.pdf(?:$|\?)|\/manual|\/support|\/specs\//i.test(url)) return false;
  return /(?:^|\.)(cerave\.se|cetaphil\.se|moroccanoil\.com|lorealparis\.se|lorealprofessionnel\.se|babyliss\.com|remington-europe\.com|olaplex\.com|nivea\.se|naissance\.com|levoit\.com|midea\.com|dreo\.com|mi\.com)$/.test(parsed.hostname);
}
