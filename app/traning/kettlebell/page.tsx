import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { kettlebellMaterialGuide } from "@/lib/gjutjarn-eller-mjuk-kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const guide = { ...kettlebellMaterialGuide, path: "/traning/kettlebell", title: "Vilken kettlebell passar dina övningar?" };
export const metadata = createSeoMetadata({
  title: guide.title,
  description: guide.intro,
  url: `${siteConfig.url}${guide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={guide} />;
}
