import {
  bodymateFoamRollerCareProduct,
  elvireDeepTissueMassageSetProduct,
  type Product,
} from "@/lib/products";

export type FoamRollerQuote = {
  text: string;
  attribution: string;
};

export type FoamRollerPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  passFor: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: FoamRollerQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const foamRollerFaqItems = [
  {
    question: "Hård eller mjuk foam roller?",
    answer:
      "En hård foam roller ger mer tryck och passar bättre när du vill komma åt rygg, säte och större muskelgrupper på djupet. En mjukare rulle är skonsammare om du är känslig, nybörjare eller mest vill ha lätt cirkulation.",
  },
  {
    question: "Slät eller texturerad yta?",
    answer:
      "En slät rulle är enklare att kontrollera och ofta bäst som första foam roller. En texturerad rulle känns mer intensiv och kan passa dig som vill ha deep-tissue-känsla, men den kan också bli för hård om du är känslig.",
  },
  {
    question: "Räcker en rulle eller behöver jag ett helt set?",
    answer:
      "För de flesta räcker en bra rulle långt. Ett set är mer relevant om du också vill komma åt fötter, vader, triggerpunkter och mindre områden med boll eller stickrulle.",
  },
  {
    question: "Hur ofta ska jag foam rolla?",
    answer:
      "Kort och regelbundet räcker ofta: några minuter efter träning, vid stelhet eller som del av uppvärmning. Undvik att pressa hårt över skarp smärta, svullnad eller skada.",
  },
];

export const foamRollerComparisonRows = [
  ["Snabba signaler", "Mest värde; Ryggränna; Fast densitet", "Komplett set; Deep-tissue; Massageboll + fotrulle ingår"],
  ["Bäst för", "En bra, slät rulle för rygg och enkel återhämtning (Elins val)", "Fler verktyg för triggerpunkter, fötter och djupare massage"],
  ["Typ", "Enkel rulle", "Komplett set"],
  ["Yta", "Slät med centrumränna", "Texturerad extra-fast rulle"],
  ["Fasthet", "Medium-hård till fast", "Extra-fast och mer intensiv"],
  ["Elins poäng", "84/100", "80/100"],
] as const;

export const foamRollerPicks: FoamRollerPick[] = [
  {
    product: bodymateFoamRollerCareProduct,
    path: "/traning/foam-roller/bodymate-care",
    badge: "Elins val",
    headline: "BODYMATE CARE - slät foam roller med ryggränna",
    shortBody:
      "En fokuserad, medium-hård foam roller för dig som vill ha en enkel rulle för rygg, säte och återhämtning utan att köpa ett helt set.",
    valueHook: "En bra rulle räcker långt.",
    valueStatement:
      "BODYMATE CARE är Elins val när du vill ha en gedigen och prisvärd foam roller utan extra smådelar. EPP-skummet är fast, rullen är plastfri och centrumrännan avlastar ryggraden när du rullar längs ryggen. Det gör den särskilt intressant om du vill ha ett tydligt, enkelt verktyg som inte tar över hemmet.",
    passFor: [
      "Vill ha en enda bra rulle, inte ett helt massagekit.",
      "Prioriterar rygg, säte och större muskelgrupper.",
      "Gillar fast tryck och vill ha en slät, kontrollerbar yta.",
    ],
    caution:
      "Den är ganska fast och hård. Det är bra för djupare avslappning, men mindre rätt om du vill ha en mjuk och skonsam rulle. Ingen förvaringspåse ingår.",
    verdict: "Elins val - bäst om du vill ha en enkel, fast och prisvärd rulle.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från 6 324 recensioner och #7 i Foam Rollers.",
    amazonQuotes: [
      {
        text: "Hard. Like it hard - firmaste rullen jag testat, rännan ger extra skjuts på djupet.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Stor men stabil, rännan för ryggraden - smärtorna försvann.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Väldigt hård och ganska stor.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha fler verktyg, massageboll och fotrulle? Se Elvire Deep Tissue massageset.",
    comparisonCta: "Se Elvire-setet",
    comparisonHref: "/traning/foam-roller/elvire-deep-tissue",
    reviewSectionId: "bodymate-foam-roller-recensioner",
    reviewFormId: "bodymate-foam-roller-skriv-recension",
    targetKeyword: "bodymate foam roller",
    metaTitle: "BODYMATE foam roller CARE - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av BODYMATE foam roller CARE: varför en fast, slät EPP-rulle med ryggränna är ett prisvärt val, och när den blir för hård.",
  },
  {
    product: elvireDeepTissueMassageSetProduct,
    path: "/traning/foam-roller/elvire-deep-tissue",
    badge: "Komplett set",
    headline: "Elvire Deep Tissue - komplett massageset för återhämtning",
    shortBody:
      "Ett texturerat återhämtningsset med foam roller, stickrulle, massageboll och fotmassör för dig som vill ha fler verktyg än en enkel rulle.",
    valueHook: "Fler verktyg för pengarna.",
    valueStatement:
      "Elvire är valet när en enda slät rulle känns för begränsad. Setet ger dig texturerad rulle, trigger-/stickrulle, massageboll, fotmassör, gympapåse och övningsguide. Det är mer mångsidigt än BODYMATE, särskilt för fötter, vader och små punkter där en stor rulle inte kommer åt lika bra.",
    passFor: [
      "Vill ha ett helt återhämtningskit i stället för bara en rulle.",
      "Gillar tydligare deep-tissue-känsla och texturerad yta.",
      "Vill komma åt fötter, vader och triggerpunkter med mindre verktyg.",
    ],
    caution:
      "Hållbarheten är den stora reservationen: några köpare rapporterar att rullen sprack efter en månad, även om kundtjänst bytte eller återbetalade snabbt. Den texturerade rullen är också hård och taggig, inte för den känsliga.",
    verdict:
      "Bästa setet när du vill ha många verktyg, men BODYMATE är tryggare som enkel rulle.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från 2 673 recensioner och #4 i Foam Rollers.",
    amazonQuotes: [
      {
        text: "Great deal - massagebollen är så bra.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Innehåller alla delar man behöver.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Mycket prisvärt, allt funkar perfekt.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Sprack efter någon månad.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du hellre ha en enklare, slät rulle med ryggränna? Se BODYMATE CARE.",
    comparisonCta: "Se BODYMATE CARE",
    comparisonHref: "/traning/foam-roller/bodymate-care",
    reviewSectionId: "elvire-foam-roller-recensioner",
    reviewFormId: "elvire-foam-roller-skriv-recension",
    targetKeyword: "elvire deep tissue massageset",
    metaTitle: "Elvire Deep Tissue massageset - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Elvire Deep Tissue massageset: texturerad foam roller, massageboll, fotmassör och vad du bör veta om hårdhet och hållbarhet.",
  },
];

export function getOtherFoamRollerPick(productSlug: string) {
  return foamRollerPicks.find((pick) => pick.product.slug !== productSlug);
}
