import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { projectionGuide } from "@/lib/mini-projektor-eller-stjarnprojektor";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${projectionGuide.title} | Elins val`,
  description: "Film eller motivskivor? Jämför Alwtniet 720p och Mexllex med tolv skivor: faktisk upplösning, appstöd, placering och vad vi inte har testat.",
  url: `${siteConfig.url}${projectionGuide.path}`,
});

export default function MiniProjektorEllerStjarnprojektorPage() {
  return <DecisionGuidePage guide={projectionGuide} />;
}
