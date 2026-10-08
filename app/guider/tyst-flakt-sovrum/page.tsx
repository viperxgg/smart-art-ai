// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
// Content refresh 2026-09-29: reviewed merchant paths and source link attributes.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { tystFlaktSovrum } from "@/lib/bast-i-test/tyst-flakt-sovrum";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Tyst fläkt i sovrummet – vilken passar dig?",
  description: "Välj sovrumsfläkt efter reglage och ditt behov. Vi jämför fem modeller och deras begränsningar, men har inte mätt ljudet i ett eget test.",
  url: `${siteConfig.url}${tystFlaktSovrum.path}`,
});

export default function TystFlaktSovrumPage() {
  return <DecisionGuidePage guide={tystFlaktSovrum} />;
}
