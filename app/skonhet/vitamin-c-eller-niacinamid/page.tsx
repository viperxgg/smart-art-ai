import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { vitaminCOrNiacinamideGuide } from "@/lib/vitamin-c-eller-niacinamid";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: vitaminCOrNiacinamideGuide.title,
  description: vitaminCOrNiacinamideGuide.intro,
  url: `${siteConfig.url}${vitaminCOrNiacinamideGuide.path}`,
});

export default function VitaminCEllerNiacinamidPage() {
  return <DecisionGuidePage guide={vitaminCOrNiacinamideGuide} />;
}
