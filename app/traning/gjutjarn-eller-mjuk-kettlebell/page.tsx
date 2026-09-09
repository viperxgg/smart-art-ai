import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { kettlebellMaterialGuide } from "@/lib/gjutjarn-eller-mjuk-kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: kettlebellMaterialGuide.title,
  description: kettlebellMaterialGuide.intro,
  url: `${siteConfig.url}${kettlebellMaterialGuide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={kettlebellMaterialGuide} />;
}
