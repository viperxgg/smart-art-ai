import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { balanceBallGuide } from "@/lib/balansplatta-eller-gymboll";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${balanceBallGuide.title} | Elins val`,
  description: "Jämför träplattan Wood PRO 40 cm och fitnessbollen 65 cm utifrån övning, utrymme och paket. Läs också när du kan avstå och vad vi inte har testat.",
  url: `${siteConfig.url}${balanceBallGuide.path}`,
});

export default function BalansplattaEllerGymbollPage() {
  return <DecisionGuidePage guide={balanceBallGuide} />;
}
