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
};
const approvedImages: readonly ApprovedProductImage[] = [];
export function getApprovedProductImage(productSlug: string, image: string) {
  return approvedImages.find(asset => asset.productSlug === productSlug && asset.image === image);
}
