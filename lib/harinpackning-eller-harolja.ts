import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  lorealAbsolutRepairProduct,
  moroccanoilHaroljaProduct,
} from "@/lib/products";

export const harinpackningEllerHaroljaFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Kan jag använda både hårinpackning och hårolja?",
    answer:
      "Ja. Många använder en inpackning i duschen någon gång i veckan och en hårolja efteråt för glans och mjukhet i längderna.",
  },
  {
    question: "Hur ofta ska jag använda en hårinpackning?",
    answer:
      "Oftast räcker en till två gånger i veckan, beroende på hur torrt håret känns. Håroljan kan användas oftare som finish.",
  },
];

export const harinpackningEllerHaroljaComparisonRows = [
  [
    "Snabba signaler",
    "Intensiv inpackning; sköljs ur; reparerande kur",
    "Leave-in-olja; arganbaserad; glans direkt",
  ],
  [
    "Bäst för",
    "Mycket torrt, soltrött och slitet hår",
    "Hår som behöver glans och en len finish",
  ],
  [
    "När används den?",
    "I duschen, 3-5 min, någon gång i veckan",
    "På fuktigt eller torrt hår som finish",
  ],
  [
    "Effekt",
    "Bygger upp och mjukgör håret i längderna",
    "Slätar ytan, tämjer frizz och ger glans",
  ],
  ["Elins poäng", "86/100", "85/100"],
] as const;

export const harinpackningEllerHaroljaPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: lorealAbsolutRepairProduct,
    path: "/skonhet/harinpackning",
    badge: "Djup kur",
    headline: "L'Oréal Absolut Repair - inpackning för torrt hår",
    shortBody:
      "Välj inpackningen om sommarhåret känns mycket torrt och slitet och behöver en intensiv kur som sköljs ur.",
  },
  {
    product: moroccanoilHaroljaProduct,
    path: "/skonhet/harolja",
    badge: "Glans & finish",
    headline: "Moroccanoil Treatment - hårolja för glans",
    shortBody:
      "Välj håroljan om du främst vill ha glans, mjukhet och mindre frizz som en snabb leave-in-finish.",
  },
];

export const harinpackningEllerHaroljaRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/skonhet/harolja-eller-varmeskydd",
      label: "Hårvård",
      text: "Jämför hårolja och värmeskydd.",
    },
    {
      href: "/skonhet/harinpackning",
      label: "Hårinpackning",
      text: "Läs recensionen av L'Oréal Absolut Repair.",
    },
    {
      href: "/guider/harinpackning",
      label: "Bäst i test",
      text: "Hårinpackning – bäst i test 2026",
    },
    {
      href: "/skonhet/harolja",
      label: "Hårolja",
      text: "Läs recensionen av Moroccanoil Treatment.",
    },
    {
      href: "/sommar",
      label: "Sommar",
      text: "Se Elins samlade sommarfavoriter.",
    },
  ];
