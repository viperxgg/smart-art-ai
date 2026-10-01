// 2026-10-01: Source-led wave-2 question; existing URL preserved where applicable.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";
const product = getSelectedProduct("maria-nila-shaping-heat-spray-250ml");
export const revalidate = 3600;
export const metadata = selectedProductMetadata(product);
export default function Page() { return <SelectedProductPage product={product} />; }
