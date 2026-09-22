// Content refresh 2026-09-22: first-screen cloud-storage answer and source review.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

// 2026-09-22: expired member offer removed and Kjell purchase price reverified.
const product = getSelectedProduct("tapo-c520ws-single");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
