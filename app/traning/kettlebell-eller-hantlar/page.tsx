import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { kettlebellDumbbellGuide } from "@/lib/kettlebell-eller-hantlar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Kettlebell eller hantlar – vad saknas hemma? | Elins val",
  description: "Jämför övningar, vikt per redskap och antal i paketet. Se när du kan avstå och vilka varianter som inte är verifierade.",
  url: `${siteConfig.url}${kettlebellDumbbellGuide.path}`,
});
export default function Page() {
  return <DecisionGuidePage guide={kettlebellDumbbellGuide} />;
}
