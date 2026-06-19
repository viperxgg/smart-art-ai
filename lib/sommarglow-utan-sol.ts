import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  elfSkinBronzingDropsProduct,
  stTropezSelfTanExpressProduct,
} from "@/lib/products";

export const sommarglowUtanSolFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Vad är skillnaden på självbruna och bronzing drops?",
    answer:
      "Självbruna utvecklar en färg som sitter kvar i flera dagar. Bronzing drops blandas i kräm eller olja och ger en mer flexibel glow som du tvättar bort.",
  },
  {
    question: "Vilken är enklast för nybörjare?",
    answer:
      "Bronzing drops är enklast om du vill börja försiktigt och kunna tvätta bort resultatet. Självbruna kräver jämn applicering, men ger mer hållbar färg.",
  },
];

export const sommarglowUtanSolComparisonRows = [
  [
    "Snabba signaler",
    "Express-mousse; 1-3 timmar; vegansk",
    "Pigmenterade droppar; blandas i kräm; vegansk",
  ],
  [
    "Bäst för",
    "Hållbar solbränna utan sol",
    "Flexibel, tvättbar lyster",
  ],
  [
    "Resultat",
    "Färg som utvecklas och tonas ut gradvis",
    "Glow du doserar själv och tvättar bort",
  ],
  [
    "Caveat",
    "Applicera jämnt med handske för att undvika ränder",
    "Blanda väl och börja med få droppar",
  ],
  ["Elins poäng", "83/100", "81/100"],
] as const;

export const sommarglowUtanSolPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: stTropezSelfTanExpressProduct,
    path: "/skonhet/brun-utan-sol",
    badge: "Håller i dagar",
    headline: "St.Tropez Self Tan Express - riktig tan",
    shortBody:
      "Välj St.Tropez när du vill ha en brun-utan-sol som utvecklas på 1-3 timmar och ger en jämn färg som håller i flera dagar.",
  },
  {
    product: elfSkinBronzingDropsProduct,
    path: "/skonhet/bronzing-drops",
    badge: "Tvättbar glow",
    headline: "e.l.f. SKIN Bronzing Drops - glow du blandar själv",
    shortBody:
      "Välj e.l.f. om du vill blanda glow i din egen kräm, dosera färgen själv och kunna tvätta bort resultatet.",
  },
];

export const sommarglowUtanSolRelatedLinks: DecisionComparisonRelatedLink[] = [
  {
    href: "/skonhet/harolja-eller-varmeskydd",
    label: "Sommarvård",
    text: "Jämför hårolja och värmeskydd för sommarhår.",
  },
  {
    href: "/sommar",
    label: "Sommar",
    text: "Se Elins samlade sommarfavoriter.",
  },
  {
    href: "/skonhet/brun-utan-sol",
    label: "Självbruna",
    text: "Läs recensionen av St.Tropez Self Tan Express.",
  },
  {
    href: "/skonhet/bronzing-drops",
    label: "Bronzing drops",
    text: "Läs recensionen av e.l.f. SKIN Bronzing Drops.",
  },
];
