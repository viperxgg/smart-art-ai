import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { tystFlaktSovrum } from "@/lib/bast-i-test/tyst-flakt-sovrum";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${tystFlaktSovrum.title} | Elins val`,
  description: "Välj sovrumsfläkt efter behov, reglage och verifierad variant. Fem modeller, tydliga källgränser och när du kan avstå från köp.",
  url: `${siteConfig.url}${tystFlaktSovrum.path}`,
});

export default function TystFlaktSovrumPage() {
  return <DecisionGuidePage guide={tystFlaktSovrum} />;
}
