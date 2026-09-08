import { massageGunDecision } from "@/lib/massage-gun-decision";
import { bodymateCareDecision } from "@/lib/foam-roller-decision";
import { yogaPropsDecision } from "@/lib/yogablock-eller-yogabalte";
import { tanningMittDecision } from "@/lib/tanning-mitt-decision";
import { bondiTanDecision } from "@/lib/bondi-tan-decision";
import { bronzingDropsDecision } from "@/lib/bronzing-drops-decision";
import { selfTanDecision } from "@/lib/self-tan-decision";
import { aftersunDecision } from "@/lib/aftersun-eller-aloe-vera";
import { moisturizerDecision } from "@/lib/cicaplast-b5-eller-cetaphil";
import { bottleDecision } from "@/lib/bottle-decision";
import { yogaMatDecision } from "@/lib/yoga-mat-decision";
import { bedroomFanDecision } from "@/lib/bedroom-fan-decision";
import { dehumidifierDecision } from "@/lib/dehumidifier-decision";
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
  const yogaPropOption = yogaPropsDecision.options.find(item => item.productSlug === slug);
  if (yogaPropOption) return {
    ...yogaPropsDecision, options: [yogaPropOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Stöd eller ett band att hålla i?", href: "/traning/yogablock-eller-yogabalte" },
  };
  if (slug === bodymateCareDecision.options[0].productSlug) return {
    ...bodymateCareDecision,
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Rulle eller massagepistol?", href: "/traning/foam-roller-eller-massagepistol" },
  };
  if (slug === massageGunDecision.options[0].productSlug) return {
    ...massageGunDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Vad behöver du kontrollera före köp?", href: "/halsa/massagepistol" },
  };
  if (slug === tanningMittDecision.options[0].productSlug) return {
    ...tanningMittDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilket användningssätt behöver du?", href: "/skonhet/bronzer-eller-brun-utan-sol" },
  };
  if (slug === bondiTanDecision.options[0].productSlug) return {
    ...bondiTanDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Tillfällig färg eller Ultra Dark?", href: "/skonhet/bronzer-eller-brun-utan-sol" },
  };
  if (slug === bronzingDropsDecision.options[0].productSlug) return {
    ...bronzingDropsDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Tillfällig färg eller brun utan sol?", href: "/skonhet/sommarglow-utan-sol" },
  };
  if (slug === selfTanDecision.options[0].productSlug) return {
    ...selfTanDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vad skulle motivera priset?", href: "/guider/brun-utan-sol-vart-det" },
  };
  const aftersunOption = aftersunDecision.options.find(item => item.productSlug === slug);
  if (aftersunOption) return {
    ...aftersunDecision, options: [aftersunOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du after sun eller gel?", href: "/skonhet/aftersun-eller-aloe-vera" },
  };
  const moisturizerOption = moisturizerDecision.options.find(item => item.productSlug === slug);
  if (moisturizerOption) return {
    ...moisturizerDecision, options: [moisturizerOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du byta kräm?", href: "/skonhet/cicaplast-b5-eller-cetaphil" },
  };
  const bottleOption = bottleDecision.options.find((item) => item.productSlug === slug);
  if (bottleOption) return {
    ...bottleDecision, options: [bottleOption],
    sources: bottleDecision.sources.filter((source) => bottleOption.sourceIds.includes(source.id)),
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Behöver du isolering?", href: "/halsa/termos-eller-vattenflaska" },
  };
  const yogaOption = yogaMatDecision.options.find((item) => item.productSlug === slug);
  if (yogaOption) return {
    ...yogaMatDecision, options: [yogaOption],
    sources: yogaMatDecision.sources.filter((source) => yogaOption.sourceIds.includes(source.id)),
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför dämpning och golvkontakt", href: "/traning/yogamatta" },
  };
  if (slug === dehumidifierDecision.options[0].productSlug) return {
    ...dehumidifierDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Minska fukt eller filtrera partiklar?", href: "/halsa/luftavfuktare-eller-luftrenare" },
  };
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
