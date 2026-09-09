import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { ringBlockGuide } from "@/lib/pilatesring-eller-yogablock";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${ringBlockGuide.title} | Elins val`,
  description: "Jämför G5 Strong-ringen och BODYMATE korkblock utifrån övning, mått och paket. Läs begränsningarna och när du kan avstå från köp.",
  url: `${siteConfig.url}${ringBlockGuide.path}`,
});

export default function PilatesringEllerYogablockPage() {
  return <DecisionGuidePage guide={ringBlockGuide} />;
}
