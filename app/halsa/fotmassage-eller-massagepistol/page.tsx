import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { footMassageGuide } from "@/lib/fotmassage-eller-massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Fotmassage eller massagepistol – vad passar användningen? | Elins val",
  description: "Beurer FM 90 eller MG 99? Jämför sittande fotmassage med ett handhållet redskap. Läs om passform, begränsningar och vad vi inte har testat.",
  url: `${siteConfig.url}${footMassageGuide.path}`,
});

export default function FotmassageEllerMassagepistolPage() {
  return <DecisionGuidePage guide={footMassageGuide} />;
}
