import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { rollerSliderGuide } from "@/lib/maghjul-eller-core-slider";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${rollerSliderGuide.title} | Elins val`,
  description: "Jämför Amonax 3-i-1-paket med Gorilla Sports glidplattor: rätt redskap, underlag och innehåll – och när du kan avstå från köp.",
  url: `${siteConfig.url}${rollerSliderGuide.path}`,
});

export default function MaghjulEllerCoreSliderPage() {
  return <DecisionGuidePage guide={rollerSliderGuide} />;
}
