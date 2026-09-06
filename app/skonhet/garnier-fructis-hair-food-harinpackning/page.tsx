// 2026-09-06: new wave product page (Fas 1, A2 — Hårinpackning bäst i test 2026,
// D3 override: the budget exception under Elins prisspann).
import { createWaveProductMetadata, WaveProductPage } from "@/app/(products)/_components/WaveProductPage";

const productSlug = "garnier-fructis-hair-food-harinpackning";

export const revalidate = 3600;

export const metadata = createWaveProductMetadata(productSlug);

export default function SkonhetGarnierFructisHairFoodHarinpackningPage() {
  return <WaveProductPage productSlug={productSlug} />;
}
