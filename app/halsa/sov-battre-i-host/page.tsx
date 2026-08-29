// Content refresh 2026-08-28: länk till sovmask-eller-white-noise (ljus vs ljud).
// Hand-built seasonal guide, content batch 2026-08-27.
import { createWaveGuideMetadata, WaveGuidePage } from "@/app/(products)/_components/WaveGuidePage";

const guideId = "sov-battre-i-host";

export const revalidate = 3600;

export const metadata = createWaveGuideMetadata(guideId);

export default function HalsaSovBattreIHostPage() {
  return <WaveGuidePage guideId={guideId} />;
}
