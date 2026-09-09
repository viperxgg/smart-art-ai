import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { airStylerDecision } from "@/lib/air-styler-decisions";
import { straightOrCurlDecision } from "@/lib/platta-eller-locka";

export const airStylerOrStraightenerDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [airStylerDecision.options[0], straightOrCurlDecision.options[0]],
  payMoreWhen: "Verktyget tillför en funktion du saknar: utbytbara luftstylingtillbehör eller plattor med valbar temperatur. Vi har inte belagt att ett alternativ ger slätare hår, tar mindre tid eller ersätter alla andra verktyg.",
  noPurchaseWhen: "Du redan får önskat resultat med det du har. Köp inte en plattång enbart för en förmodat mer polerad finish eller en varmluftsborste för en tidsbesparing vi inte har mätt.",
  swedishContext: "S8540:s svenska produktsida har en avvikande modellrubrik, därför behöver modellbeteckningen kontrolleras extra noga. Matcha även AS126E:s tillbehör och båda apparaternas kontakt mot säljarens paket.",
  testing: "Jämförelsen bygger på manualer och produktdokumentation. Vi har inte jämfört resultat, värmepåverkan, volym, lockar eller morgonrutinens tidsåtgång i praktiken.",
  limitations: "AS126E används efter förtorkning; S8540 kräver helt torrt, rent och utrett hår. Varmluft är inte bevis för mindre skada. Följ respektive manual och börja med lägre värme där den anvisas. Bildrättigheter och aktuella butikserbjudanden är inte verifierade.",
  sources: [airStylerDecision.sources[0], ...straightOrCurlDecision.sources.filter(source => source.id !== "C2")],
};
export const airStylerOrStraightenerGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/varmluftsborste-eller-plattang",
  title: "Varmluftsborste eller plattång – vilket moment saknar du?",
  intro: "AS126E formar med luft och utbytbara tillbehör efter förtorkning. S8540 använder plattor på torrt hår. Börja med arbetsmomentet, inte ett obestyrkt löfte om snabbare eller slätare resultat.",
  decision: airStylerOrStraightenerDecision,
  productPaths: ["/skonhet/varmluftsborste/babyliss-as126e", "/skonhet/plattang/remington-s8540"],
  questions: [
    { question: "Vilket verktyg är snabbast?", answer: "Det har vi inte testat. Räkna även in förtorkning, uppdelning i slingor och eventuella tillbehörsbyten. Apparaternas inställningar säger inte hur lång tid hela din frisyr tar." },
    { question: "Är varmluft skonsammare än plattor?", answer: "Vi har inte mätt hårpåverkan och kan inte rangordna modellerna så. Följ respektive manuals förberedelse och värmeinställning; en annan teknik gör inte användningen riskfri." },
  ],
  related: [{ href: "/skonhet/varmluftsborste", text: "Vilka borsttillbehör behöver du?" }, { href: "/skonhet/plattang", text: "Behöver du ett mindre format eller temperaturval?" }],
};
