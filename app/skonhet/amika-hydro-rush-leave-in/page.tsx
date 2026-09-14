import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

const product = getSelectedProduct("amika-hydro-rush-leave-in-200ml");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
