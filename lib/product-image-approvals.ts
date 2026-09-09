/** Only independently permitted local assets belong here, never cached partner API images.
 * Each entry needs exact-model visual review and a traceable permission record.
 * Empty means imagery is unfinished, not that text-only presentation meets acceptance.
 */
type ApprovedProductImage = {
  productSlug: string;
  image: string;
  model: string;
  alt: string;
  sha256: string;
  source: string;
  permissionEvidence: string;
  reviewedAt: string;
  allowedUse: "local-optimized-editorial";
  displayScope?: "decision-card";
  attribution?: { creator: string; title: string; originalPost: string; license: string; licenseUrl: string; note: string };
};
const approvedImages: readonly ApprovedProductImage[] = [{
  productSlug: "oralb-io6",
  image: "/products/licensed/oralb-io6-electricteeth.jpg",
  model: "Oral-B iO Series 6",
  alt: "Grå Oral-B iO Series 6 med borsthuvud, stående på laddare.",
  sha256: "0f88d3fc06dc81499abc19a3b797edb757038f96e09eedba44366b9309fd6b28",
  source: "https://www.flickr.com/photos/electricteeth/52303241336",
  permissionEvidence: "https://www.flickr.com/photos/electricteeth/52303241336",
  reviewedAt: "2026-09-09", allowedUse: "local-optimized-editorial", displayScope: "decision-card",
  attribution: {
    creator: "Electric Teeth", title: "Oral-B iO Series 6 Electric Toothbrush", originalPost: "https://www.electricteeth.com/oral-b-io6-review/",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    note: "Grå referensmodell; färg och tillbehör i aktuellt erbjudande är inte verifierade. Visas i anpassad storlek. Fotot är inte vårt produkttest.",
  },
}];
export function getApprovedProductImage(productSlug: string, image: string) {
  return approvedImages.find(asset => !asset.displayScope && asset.productSlug === productSlug && asset.image === image);
}
export function getApprovedDecisionImage(productSlug: string, model: string) {
  return approvedImages.find(asset => asset.displayScope === "decision-card" && asset.productSlug === productSlug && asset.model === model && asset.attribution);
}
/** True when at least one of a product's gallery images carries a permission record. */
export function hasApprovedProductImages(productSlug: string, images: readonly { src: string }[]) {
  return images.some(image => Boolean(getApprovedProductImage(productSlug, image.src)));
}
