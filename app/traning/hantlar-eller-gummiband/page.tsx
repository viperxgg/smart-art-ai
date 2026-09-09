import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { dumbbellBandGuide } from "@/lib/hantlar-eller-gummiband";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Hantlar eller miniband – vad kräver dina övningar? | Elins val",
  description: "Fasta hantlar eller korta miniband? Se behov, begränsningar och en enkel lista att kontrollera före köp.",
  url: `${siteConfig.url}${dumbbellBandGuide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={dumbbellBandGuide} />;
}
