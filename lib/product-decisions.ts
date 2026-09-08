import { bedroomFanDecision } from "@/lib/bedroom-fan-decision";
import { kettlebellDumbbellDecision } from "@/lib/kettlebell-dumbbell-decision";
import { hairStylingDecision } from "@/lib/hair-styling-decision";
import { indoorAirDecision } from "@/lib/indoor-air-decision";
import { hairMaskDecision } from "@/lib/hair-mask-decision";
import { hantlarEllerGummibandDecision } from "@/lib/hantlar-eller-gummiband";
import { ceraveEllerCetaphilDecision } from "@/lib/cerave-eller-cetaphil";
import type { DecisionRecord } from "@/lib/decision-record";
import { ereaderDecision } from "@/lib/ereader-decision";

export type ProductDecision = DecisionRecord & {
  category: { label: string; href: string };
  comparison: { label: string; href: string };
};

export function getProductDecision(slug: string): ProductDecision | undefined {
  const fanOption = bedroomFanDecision.options.find((item) => item.productSlug === slug);
  if (fanOption) return {
    ...bedroomFanDecision, options: [fanOption],
    sources: bedroomFanDecision.sources.filter((source) => fanOption.sourceIds.includes(source.id)),
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Välj fläkt efter dina behov", href: "/guider/tyst-flakt-sovrum" },
  };
  const weightOption = kettlebellDumbbellDecision.options.find((item) => item.productSlug === slug);
  if (weightOption) return {
    ...kettlebellDumbbellDecision, options: [weightOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför kettlebell och hantelset", href: "/traning/kettlebell-eller-hantlar" },
  };
  const airOption = indoorAirDecision.options.find((item) => item.productSlug === slug);
  if (airOption) return {
    ...indoorAirDecision, options: [airOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Jämför luftfuktare och luftrenare", href: "/halsa/luftfuktare-eller-luftrenare" },
  };
  const maskOption = hairMaskDecision.options.find((item) => item.productSlug === slug);
  if (maskOption) return {
    ...hairMaskDecision, options: [maskOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför hårmasker efter användning", href: "/guider/harinpackning" },
  };
  const hairOption = hairStylingDecision.options.find((item) => item.productSlug === slug);
  if (hairOption) return {
    ...hairStylingDecision, options: [hairOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför hårolja och värmeskydd", href: "/skonhet/harolja-eller-varmeskydd" },
  };
  const trainingOption = hantlarEllerGummibandDecision.options.find((item) => item.productSlug === slug);
  if (trainingOption) return {
    ...hantlarEllerGummibandDecision,
    options: [trainingOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför fasta hantlar och korta miniband", href: "/traning/hantlar-eller-gummiband" },
  };
  const readerOption = ereaderDecision.options.find((item) => item.productSlug === slug);
  if (readerOption) return {
    ...ereaderDecision,
    options: [readerOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Jämför Kindle och Kobo", href: "/halsa/kindle-eller-kobo" },
  };
  const option = ceraveEllerCetaphilDecision.options.find((item) => item.productSlug === slug);
  if (!option) return undefined;
  return {
    ...ceraveEllerCetaphilDecision,
    options: [option],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför CeraVe och Cetaphil", href: "/skonhet/cerave-eller-cetaphil" },
    noPurchaseWhen: "Den rengöring du redan har fyller ditt behov och fungerar för dig. Att byta varumärke är inte ett mål i sig.",
  };
}
