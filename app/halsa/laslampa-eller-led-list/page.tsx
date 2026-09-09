import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { readingLightGuide } from "@/lib/laslampa-eller-led-list";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: readingLightGuide.title,
  description: readingLightGuide.intro,
  url: `${siteConfig.url}${readingLightGuide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={readingLightGuide} />;
}
