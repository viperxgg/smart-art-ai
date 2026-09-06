// 2026-09-06: new wave product page (Fas 1, A2 — Hårinpackning bäst i test 2026).
import { createWaveProductMetadata, WaveProductPage } from "@/app/(products)/_components/WaveProductPage";

const productSlug = "moroccanoil-harinpackning";

export const revalidate = 3600;

export const metadata = createWaveProductMetadata(productSlug);

export default function SkonhetMoroccanoilHarinpackningPage() {
  return <WaveProductPage productSlug={productSlug} />;
}
