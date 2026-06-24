import {
  babylissC325eProduct,
  tymoCurlproProduct,
  type Product,
} from "@/lib/products";

export type LocktangQuote = {
  text: string;
  attribution: string;
};

export type LocktangPick = {
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
  amazonQuotes: LocktangQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const locktangFaqItems = [
  {
    question: "Vilken storlek på locktång ska jag välja?",
    answer:
      "Mindre fat, cirka 19-25 mm, ger tightare lockar. Större fat, cirka 32-38 mm, ger lösare och mjukare vågor.",
  },
  {
    question: "Manuell eller automatisk locktång?",
    answer:
      "Manuell locktång som BaByliss ger mer kontroll till lågt pris. Automatisk locktång som TYMO gör lockarna åt dig och är enklare, men dyrare.",
  },
  {
    question: "Vilken temperatur passar för lockar?",
    answer:
      "Cirka 150-170°C räcker ofta för fint hår. Tjockare hår kan behöva högre temperatur. Använd alltid värmeskydd.",
  },
];

export const locktangComparisonRows = [
  ["Snabba signaler", "Mest värde; 10 värmelägen; Stora lockar", "Automatisk; Anti-tangle; För långt hår"],
  ["Bäst för", "Bäst värde, klassiska lockar (Elins val)", "Automatisk, effortless"],
  ["Typ", "Manuell tång", "Automatisk (roterar själv)"],
  ["Temp", "10 lägen (110-180°C)", "3 lägen (160-210°C)"],
  ["Extra", "Flera storlekar och tusentals omdömen", "Anti-tangle, en-knapp, jon"],
  ["Elins poäng", "81/100", "80/100"],
] as const;

export const locktangPicks: LocktangPick[] = [
  {
    product: babylissC325eProduct,
    path: "/skonhet/locktang/babyliss-c325e",
    badge: "Elins val",
    headline: "BaByliss C325E - klassiska lockar till lågt pris",
    shortBody:
      "Stora, fina lockar utan att göra köpet krångligt. Keramisk yta, 10 värmelägen och snabb uppvärmning gör den till Elins värdeval.",
    valueHook: "Stora, fina lockar - till ett riktigt lågt pris.",
    valueStatement:
      "Marknadens mest sålda locktång: keramisk yta, 10 värmelägen och snabb uppvärmning på 45 sekunder. Flera storlekar för olika lockar - till ett mycket lågt pris.",
    passFor: [
      "Vill ha fina lockar till lågt pris.",
      "Gillar klassisk, manuell styling med kontroll.",
      "Vill ha flera storlekar att välja mellan.",
    ],
    caution:
      "Högsta temperaturen på 180°C passar fint och normalt hår men kan vara i underkant för väldigt tjockt hår. Av/på-knappen sitter mitt på handtaget, så du kan råka stänga av den. Småsaker för priset.",
    verdict: "Elins val - mest locktång för pengarna.",
    amazonSummary: "Marknadens mest sålda locktång, mycket högt betyg.",
    amazonQuotes: [
      {
        text: "Lätt att använda, ger stora fina lockar. Mycket prisvärd.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Bra tång, blir snabbt uppvärmd.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Högsta temperaturen inte så hög och av/på-knappen sitter olämpligt.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha automatiska lockar utan teknik? Se TYMO CURLPRO.",
    comparisonCta: "Se TYMO CURLPRO",
    comparisonHref: "/skonhet/locktang/tymo-curlpro",
    reviewSectionId: "babyliss-c325e-recensioner",
    reviewFormId: "babyliss-c325e-skriv-recension",
    targetKeyword: "babyliss c325e",
    metaTitle: "BaByliss C325E locktång - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av BaByliss C325E: keramisk locktång med 10 värmelägen, snabb uppvärmning och varför den är ett prisvärt val för klassiska lockar.",
  },
  {
    product: tymoCurlproProduct,
    path: "/skonhet/locktang/tymo-curlpro",
    badge: "Automatisk",
    headline: "TYMO CurlPro locktång - omdöme & betyg",
    shortBody:
      "TYMO CurlPro locktång är för dig som vill ha effortless styling: den roterar själv, har anti-tangle och jonteknik för enklare lockar.",
    valueHook: "Automatisk locktång - lockar utan teknik.",
    valueStatement:
      "TYMO roterar själv med ett knapptryck och har ett smart anti-tangle-system. Tre temperaturlägen (160-210°C) för alla hårtyper och jonteknik för glans - ett prisvärt alternativ till de riktigt dyra automatiska modellerna.",
    passFor: [
      "Vill ha automatisk styling utan mycket teknik.",
      "Har långt eller tjockt hår.",
      "Vill få lockar snabbare med mindre handarbete.",
    ],
    caution:
      "Den är klart dyrare, fungerar mindre bra på kort hår, och lockarna håller inte nödvändigtvis längre än med en vanlig tång. Men slipper du tekniken är den underbart enkel.",
    verdict: "Premiumvalet - effortless för långt och tjockt hår.",
    amazonSummary: "Mycket högt betyg, en av de mest sålda.",
    amazonQuotes: [
      {
        text: "Wow, jättebra! Långt och tjockt hår och fina lockar.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Surprisingly amazing - klar på 5 minuter.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Lockarna håller inte längre än med en vanlig tång, och mindre bra för kort hår.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha mest för pengarna? Se BaByliss C325E, Elins val.",
    comparisonCta: "Se BaByliss C325E",
    comparisonHref: "/skonhet/locktang/babyliss-c325e",
    reviewSectionId: "tymo-curlpro-recensioner",
    reviewFormId: "tymo-curlpro-skriv-recension",
    targetKeyword: "tymo locktång",
    metaTitle: "TYMO CurlPro locktång omdöme & betyg | Elins val",
    metaDescription:
      "TYMO locktång omdöme: Elin går igenom TYMO CurlPro med anti-tangle, tre temperaturlägen, betyg och när den är värd priset.",
  },
];

export function getOtherLocktangPick(productSlug: string) {
  return locktangPicks.find((pick) => pick.product.slug !== productSlug);
}
