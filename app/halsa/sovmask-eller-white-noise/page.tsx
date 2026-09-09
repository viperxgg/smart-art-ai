import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { maskNoiseGuide } from "@/lib/sovmask-eller-white-noise";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${maskNoiseGuide.title} | Elins val`, description: maskNoiseGuide.intro, url: `${siteConfig.url}${maskNoiseGuide.path}` });
export default function SovmaskEllerWhiteNoisePage() { return <DecisionGuidePage guide={maskNoiseGuide} />; }
