import {
  beurerHc25Product,
  remingtonProluxeAc9140Product,
  type Product,
} from "@/lib/products";

export type HartorkQuote = {
  text: string;
  attribution: string;
};

export type HartorkPick = {
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
  amazonQuotes: HartorkQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const hartorkFaqItems = [
  {
    question: "Hur många watt behöver en hårtork?",
    answer:
      "Cirka 1600 W räcker för normalt hår. Har du tjockt hår eller vill torka snabbare hemma är 2000-2400 W ofta smidigare.",
  },
  {
    question: "Vad gör jonteknik?",
    answer:
      "Jonteknik hjälper till att minska statisk elektricitet, vilket kan ge slätare, glansigare hår och mindre frizz.",
  },
  {
    question: "Resetork eller fullstorlek?",
    answer:
      "Välj en resemodell som Beurer HC 25 om du vill ha något kompakt och hopfällbart. Välj fullstorlek som Remington PROluxe om snabb torkning hemma är viktigast.",
  },
];

export const hartorkComparisonRows = [
  ["Bäst för", "Budget & resa", "Salongskvalitet (Elins val)"],
  ["Effekt", "1600 W", "2400 W AC-motor"],
  ["Vikt", "430 g", "580 g"],
  [
    "Extra",
    "Hopfällbar, internationell spänning",
    "3 munstycken, jon, 3 m sladd, diffusor",
  ],
  ["Elins poäng", "86/100", "95/100"],
] as const;

export const hartorkPicks: HartorkPick[] = [
  {
    product: remingtonProluxeAc9140Product,
    path: "/skonhet/hartork/remington-proluxe-ac9140",
    badge: "Elins val",
    headline: "Remington PROluxe AC9140 – salongskvalitet hemma",
    shortBody:
      "Salongskvalitet hemma till ett förvånansvärt lågt pris. Stark motor, jonteknik och diffusor gör den till Elins huvudval.",
    valueHook: "Salongskvalitet hemma – till ett förvånansvärt lågt pris.",
    valueStatement:
      "2400 W AC-motor i proffsklass som håller längre, jonteknik för frizzfritt och glansigt hår, tre munstycken inklusive diffusor och en lång 3 m sladd.",
    passFor: [
      "Vill ha snabb, salongslik torkning hemma.",
      "Vill ha mer kraft för tjockare eller längre hår.",
      "Vill ha diffusor och flera munstycken i samma paket.",
    ],
    caution:
      "Det är en fullstor salongstork, så den väger lite mer än en resemodell. Men kraften och kvaliteten märks direkt.",
    verdict: "Elins val – mest hårtork för pengarna i premiumklass.",
    amazonSummary:
      "En av de mest sålda hårtorkarna, mycket högt betyg.",
    amazonQuotes: [
      {
        text: "Very happy with this, especially for the price!",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Best quality and affordable.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Fungerar bra – enda minuset är att den är lite tung.",
        attribution: "Svensk köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha något lättare för resan? Se Beurer HC 25.",
    comparisonCta: "Se Beurer HC 25",
    comparisonHref: "/skonhet/hartork/beurer-hc-25",
    reviewSectionId: "remington-proluxe-ac9140-recensioner",
    reviewFormId: "remington-proluxe-ac9140-skriv-recension",
    targetKeyword: "remington proluxe ac9140",
    metaTitle: "Remington PROluxe AC9140 hårtork – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Remington PROluxe AC9140: 2400 W AC-motor, jonteknik, diffusor och varför den är Elins prisvärda salongsval.",
  },
  {
    product: beurerHc25Product,
    path: "/skonhet/hartork/beurer-hc-25",
    badge: "Budget & resa",
    headline: "Beurer HC 25 – kompakt hårtork för resa",
    shortBody:
      "Mest hårtork för pengarna när du vill ha något lätt, hopfällbart och enkelt att packa.",
    valueHook: "Mest hårtork för pengarna – och perfekt för resan.",
    valueStatement:
      "Lätt (430 g), hopfällbar och med internationell spänning. Jonteknik för glansigt hår, till ett riktigt lågt pris – och en av de mest sålda.",
    passFor: [
      "Vill ha en billig och kompakt hårtork.",
      "Vill kunna packa hårtorken på resa.",
      "Vill ha något enkelt för vardag utan salongskraft.",
    ],
    caution:
      "Det är en enkel 1600 W-modell – inte en salongstork. Har du mycket tjockt hår torkar Remington snabbare. Men för vardag och resa gör den jobbet utmärkt.",
    verdict: "Det prisvärda rese- och budgetvalet.",
    amazonSummary:
      "En av de mest sålda hårtorkarna, mycket högt betyg.",
    amazonQuotes: [
      {
        text: "Pris-/prestanda-förhållandet är mycket bra – bra för resor och hemma.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Liten och smidig, mycket nöjd.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Enkel och billig – gör sitt jobb.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha salongskraft? Se Remington PROluxe, Elins val.",
    comparisonCta: "Se Remington PROluxe",
    comparisonHref: "/skonhet/hartork/remington-proluxe-ac9140",
    reviewSectionId: "beurer-hc-25-recensioner",
    reviewFormId: "beurer-hc-25-skriv-recension",
    targetKeyword: "beurer hc 25",
    metaTitle: "Beurer HC 25 hårtork – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Beurer HC 25: lätt, hopfällbar resehårtork med jonteknik och när budgetvalet räcker.",
  },
];

export function getOtherHartorkPick(productSlug: string) {
  return hartorkPicks.find((pick) => pick.product.slug !== productSlug);
}
