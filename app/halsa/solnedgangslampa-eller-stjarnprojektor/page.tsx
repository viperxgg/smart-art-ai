import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { sunsetStarsGuide } from "@/lib/solnedgangslampa-eller-stjarnprojektor";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${sunsetStarsGuide.title} | Elins val`,
  description: "Jämför Aniepaa USB-lampa och Mexllex med motivskivor: färgval, strömförsörjning, placering och när du inte behöver köpa något.",
  url: `${siteConfig.url}${sunsetStarsGuide.path}`,
});

export default function SolnedgangslampaEllerStjarnprojektorPage() {
  return <DecisionGuidePage guide={sunsetStarsGuide} />;
}
