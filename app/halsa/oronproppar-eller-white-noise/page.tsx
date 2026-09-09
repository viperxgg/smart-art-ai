import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { earplugsNoiseGuide } from "@/lib/oronproppar-eller-white-noise";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${earplugsNoiseGuide.title} | Elins val`,
  description: "Loop Quiet 2 eller Magicteam? Jämför passform, ljud i rummet, timer och strömkrav utan löften om tystnad eller bättre sömn.",
  url: `${siteConfig.url}${earplugsNoiseGuide.path}`,
});

export default function OronpropparEllerWhiteNoisePage() {
  return <DecisionGuidePage guide={earplugsNoiseGuide} />;
}
