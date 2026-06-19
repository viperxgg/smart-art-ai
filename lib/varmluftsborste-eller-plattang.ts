import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  babylissAs126eProduct,
  remingtonS8540Product,
} from "@/lib/products";

export const varmluftsborsteEllerPlattangFaqItems: DecisionComparisonFaqItem[] =
  [
    {
      question: "Vad ger slätast resultat?",
      answer:
        "Remington S8540 ger slätast och mest polerat resultat eftersom den är en dedikerad plattång. Varmluftsborsten ger mjukare volym och böj.",
    },
    {
      question: "Vilket är snabbast på morgonen?",
      answer:
        "Om håret är fuktigt och du vill ha volym kan BaByliss AS126E spara tid genom att torka och forma i ett steg. Om håret redan är torrt och du vill ha slätt resultat är plattången snabbare.",
    },
  ];

export const varmluftsborsteEllerPlattangComparisonRows = [
  [
    "Snabba signaler",
    "4-i-1; 1000 W; volym & brushing",
    "Keratinplattor; 9 värmelägen; PRO+-läge",
  ],
  [
    "Bäst för",
    "Torka och forma med volym i ett steg",
    "Slätt, polerat hår och mjuka vågor",
  ],
  ["Typ", "Varmluftsborste", "Plattång i fullstorlek"],
  [
    "Tillbehör",
    "4 (volym, rätning, kort hår, munstycke)",
    "Värmetåligt fodral och keramiska plattor",
  ],
  ["Elins poäng", "78/100", "86/100"],
] as const;

export const varmluftsborsteEllerPlattangPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: babylissAs126eProduct,
    path: "/skonhet/varmluftsborste/babyliss-as126e",
    badge: "Allt-i-ett",
    headline: "BaByliss AS126E - mjuk volym i ett steg",
    shortBody:
      "Välj varmluftsborsten när du vill torka och forma samtidigt, med volym, brushing och ett mjukare resultat.",
  },
  {
    product: remingtonS8540Product,
    path: "/skonhet/plattang/remington-s8540",
    badge: "Slätt & polerat",
    headline: "Remington S8540 - mer polerad finish",
    shortBody:
      "Välj plattången när du vill ha slätt hår, mer kontroll och ett verktyg som även kan göra mjuka vågor.",
  },
];

export const varmluftsborsteEllerPlattangRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/skonhet/platta-eller-locka",
      label: "Hårverktyg",
      text: "Välj mellan plattång och locktång.",
    },
    {
      href: "/skonhet/varmluftsborste-eller-fon",
      label: "Hårverktyg",
      text: "Jämför varmluftsborste med vanlig fön.",
    },
    {
      href: "/skonhet/varmluftsborste",
      label: "Varmluftsborste",
      text: "Se Elins guide till varmluftsborstar.",
    },
    {
      href: "/skonhet/plattang",
      label: "Plattång",
      text: "Se Elins plattångsguide.",
    },
  ];
