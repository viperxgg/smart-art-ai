import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { portableDeskFanGuide } from "@/lib/handflakt-eller-bordsflakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Handfläkt eller bordsfläkt – plats och ström först | Elins val",
  description: "Xiaomi 2 Lite kan stå på bord eller golv. Kontrollera måtten och läs varför JISULIFE Pro1-varianten ännu inte är bekräftad. Ingen ljud- eller styrkevinnare utses.",
  url: `${siteConfig.url}${portableDeskFanGuide.path}`,
});
export default function HandflaktEllerBordsflaktPage() {
  return <DecisionGuidePage guide={portableDeskFanGuide} />;
}
