import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { runningCarryGuide } from "@/lib/loparvast-eller-midjevaska";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Löparväst eller midjeväska – vad ska du bära? | Elins val",
  description: "Jämför packning, flaskor och passform. Se vad som ingår i Salomon ACTIVE SKIN 4 och vad som ännu inte är verifierat om HAISSKY.",
  url: `${siteConfig.url}${runningCarryGuide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={runningCarryGuide} />;
}
