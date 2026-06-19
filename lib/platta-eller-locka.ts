import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  babylissC325eProduct,
  remingtonS8540Product,
} from "@/lib/products";

export const plattaEllerLockaFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Kan en plattång också locka håret?",
    answer:
      "Ja, en fullstor plattång kan ofta göra mjuka vågor och böjda toppar, men den ger inte samma definierade lockar som en klassisk locktång.",
  },
  {
    question: "Vilket är bäst för nybörjare?",
    answer:
      "För slätt hår och mjuka vågor är Remington S8540 enklast att börja med. Vill du främst ha tydliga lockar är BaByliss C325E mer direkt, men kräver att du lär dig den manuella tekniken.",
  },
];

export const plattaEllerLockaComparisonRows = [
  [
    "Snabba signaler",
    "Keratinplattor; 9 värmelägen; PRO+-läge",
    "Keramisk yta; 10 värmelägen; snabb uppvärmning",
  ],
  [
    "Bäst för",
    "Slätt hår, polerad finish och mjuka vågor",
    "Definierade lockar och klassisk manuell styling",
  ],
  ["Typ", "Plattång i fullstorlek", "Manuell locktång"],
  ["Temperatur", "9 lägen (150-230°C)", "10 lägen (110-180°C)"],
  ["Elins poäng", "86/100", "81/100"],
] as const;

export const plattaEllerLockaPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: remingtonS8540Product,
    path: "/skonhet/plattang/remington-s8540",
    badge: "Mest mångsidig",
    headline: "Remington S8540 - slätt hår och mjuka vågor",
    shortBody:
      "Det tryggare valet för de flesta: en fullstor plattång med 9 värmelägen, PRO+-läge och keratinplattor som passar vardagsstyling hemma.",
  },
  {
    product: babylissC325eProduct,
    path: "/skonhet/locktang/babyliss-c325e",
    badge: "För lockar",
    headline: "BaByliss C325E - definierade lockar",
    shortBody:
      "Välj locktången om du oftast vill ha klassiska, tydliga lockar. Den har keramisk yta, 10 värmelägen och snabb uppvärmning.",
  },
];

export const plattaEllerLockaRelatedLinks: DecisionComparisonRelatedLink[] = [
  {
    href: "/skonhet/varmluftsborste-eller-fon",
    label: "Hårverktyg",
    text: "Jämför varmluftsborste och vanlig fön.",
  },
  {
    href: "/skonhet/varmluftsborste-eller-plattang",
    label: "Hårverktyg",
    text: "Välj mellan volym i ett steg och slät finish.",
  },
  {
    href: "/skonhet/plattang",
    label: "Plattång",
    text: "Se Elins plattångsguide.",
  },
  {
    href: "/skonhet/locktang",
    label: "Locktång",
    text: "Se Elins locktångsguide.",
  },
];
