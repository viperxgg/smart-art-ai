import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  beurerMassagepistolProduct,
  bodymateFoamRollerCareProduct,
} from "@/lib/products";

export const foamRollerEllerMassagepistolFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Foam roller eller massagepistol för återhämtning?",
    answer:
      "Foam rollern jobbar med din kroppsvikt mot stora muskelgrupper och är billig och enkel. Massagepistolen ger riktade vibrationer på enskilda punkter och har fler funktioner.",
  },
  {
    question: "Kan jag använda båda?",
    answer:
      "Ja, många använder foam rollern för stora ytor och massagepistolen för riktade, stela punkter. De kompletterar varandra.",
  },
];

export const foamRollerEllerMassagepistolComparisonRows = [
  [
    "Snabba signaler",
    "Foam roller; egen kroppsvikt; större muskelgrupper",
    "Massagepistol; vibration; riktade punkter",
  ],
  [
    "Bäst för",
    "Rygg, lår och vader - stora ytor",
    "Riktad behandling på enskilda, stela punkter",
  ],
  [
    "Användning",
    "Rulla långsamt mot golvet, inga batterier",
    "Håll mot muskeln, laddbar med olika lägen",
  ],
  [
    "Pris & enkelhet",
    "Billigast och enklast - inget krångel",
    "Fler funktioner men kostar mer",
  ],
  ["Elins poäng", "84/100", "76/100"],
] as const;

export const foamRollerEllerMassagepistolPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: bodymateFoamRollerCareProduct,
    path: "/traning/foam-roller/bodymate-care",
    badge: "Mest värde",
    headline: "BODYMATE CARE foam roller - enkel återhämtning",
    shortBody:
      "Välj foam rollern om du vill ha ett enkelt, billigt redskap för rygg, lår och vader utan batterier.",
  },
  {
    product: beurerMassagepistolProduct,
    path: "/halsa/massagepistol/beurer-mg-99",
    badge: "Riktad vibration",
    headline: "Beurer MG 99 massagepistol - riktade punkter",
    shortBody:
      "Välj massagepistolen om du vill ha riktade vibrationer på enskilda, stela punkter och fler lägen att välja mellan.",
  },
];

export const foamRollerEllerMassagepistolRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/traning/foam-roller",
      label: "Foam roller",
      text: "Jämför foam rollers för återhämtning.",
    },
    {
      href: "/halsa/massagepistol",
      label: "Massagepistol",
      text: "Jämför massagepistoler.",
    },
    {
      href: "/traning/foam-roller/bodymate-care",
      label: "Foam roller",
      text: "Läs recensionen av BODYMATE CARE.",
    },
    {
      href: "/halsa/massagepistol/beurer-mg-99",
      label: "Massagepistol",
      text: "Läs recensionen av Beurer MG 99.",
    },
  ];
