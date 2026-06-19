import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  babylissAs126eProduct,
  remingtonProluxeAc9140Product,
} from "@/lib/products";

export const varmluftsborsteEllerFonFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Ersätter en varmluftsborste en vanlig hårfön?",
    answer:
      "Inte helt. En varmluftsborste är bäst när håret redan är handdukstorrt och du vill forma samtidigt. För blött, tjockt hår torkar en riktig fön snabbare.",
  },
  {
    question: "Vad är snällast mot håret?",
    answer:
      "Båda kräver värmeskydd och lagom värme. En fön med bra kraft kan torka snabbare, medan en varmluftsborste kan minska behovet av extra stylingverktyg om du vill ha mjuk volym.",
  },
];

export const varmluftsborsteEllerFonComparisonRows = [
  [
    "Snabba signaler",
    "4-i-1; volym & brushing; jonteknik",
    "2400 W; AC-motor; jonteknik; diffusor",
  ],
  [
    "Bäst för",
    "Torka och styla i samma moment",
    "Snabb, kraftfull torkning hemma",
  ],
  ["Effekt", "1000 W", "2400 W AC-motor"],
  [
    "Tillbehör",
    "4 (volym, rätning, kort hår, munstycke)",
    "3 munstycken inklusive diffusor",
  ],
  ["Elins poäng", "78/100", "88/100"],
] as const;

export const varmluftsborsteEllerFonPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: babylissAs126eProduct,
    path: "/skonhet/varmluftsborste/babyliss-as126e",
    badge: "Torka + styla",
    headline: "BaByliss AS126E - volym och brushing i ett steg",
    shortBody:
      "En 4-i-1-varmluftsborste för dig som vill forma håret medan det torkar: volymborste, rätningsborste, borste för kort hår och munstycke.",
  },
  {
    product: remingtonProluxeAc9140Product,
    path: "/skonhet/hartork/remington-proluxe-ac9140",
    badge: "Mest torkkraft",
    headline: "Remington PROluxe AC9140 - kraftfull hårtork",
    shortBody:
      "Det starkare valet när snabb torkning är viktigast: 2400 W AC-motor, jonteknik, tre munstycken och diffusor.",
  },
];

export const varmluftsborsteEllerFonRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/skonhet/platta-eller-locka",
      label: "Hårverktyg",
      text: "Välj mellan plattång och locktång.",
    },
    {
      href: "/skonhet/varmluftsborste-eller-plattang",
      label: "Hårverktyg",
      text: "Jämför varmluftsborste med plattång.",
    },
    {
      href: "/skonhet/varmluftsborste",
      label: "Varmluftsborste",
      text: "Se Elins guide till varmluftsborstar.",
    },
    {
      href: "/skonhet/hartork",
      label: "Hårtork",
      text: "Se Elins hårtorksguide.",
    },
  ];
