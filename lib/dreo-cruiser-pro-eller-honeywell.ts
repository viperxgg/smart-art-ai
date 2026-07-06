import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  dreoCruiserProFlaktProduct,
  honeywellTurboforceFlaktProduct,
} from "@/lib/products";

export const dreoEllerHoneywellFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Vilken är tystast – Dreo Cruiser Pro eller Honeywell HT900E?",
    answer:
      "Dreo Cruiser Pro är den tystare av de två och är gjord för att kunna stå på i sovrummet utan att störa sömnen. Honeywell HT900E är en kraftfull liten luftcirkulator som märks mer, så den passar bättre där ljudet inte spelar lika stor roll.",
  },
  {
    question: "Vilken kyler ett helt rum bäst?",
    answer:
      "Dreo Cruiser Pro är en tornfläkt som oscillerar och sprider luften brett över rummet, vilket gör den bäst för att svalka ett helt sovrum eller vardagsrum. Honeywell HT900E ger en kraftfull, riktad luftström som känns även på flera meters håll – bäst som punktkyla mot dig själv.",
  },
  {
    question: "Vilken tar minst plats?",
    answer:
      "Honeywell HT900E är liten och kompakt och får plats på skrivbordet eller en hylla. Dreo Cruiser Pro är en golvstående tornfläkt som tar mer plats men samtidigt sprider luften högre och bredare.",
  },
  {
    question: "Vilken ska jag välja för sovrummet?",
    answer:
      "För sovrummet väljer de flesta Dreo Cruiser Pro tack vare den tystare gången och oscilleringen. Vill du ha billig, kraftfull punktkyla vid skrivbordet eller i köket är Honeywell HT900E ett prisvärt val.",
  },
];

export const dreoEllerHoneywellComparisonRows = [
  [
    "Snabba signaler",
    "Tyst tornfläkt; oscillerar; sprider luft i hela rummet",
    "Liten kraftfull luftcirkulator; riktad, stark luftström",
  ],
  [
    "Bäst för",
    "Svalka i sovrum och vardagsrum, tyst nattetid",
    "Punktkyla vid skrivbord/kök, billigt och kompakt",
  ],
  ["Ljudnivå", "Tystare – gjord för att stå på när du sover", "Hörs mer – kraft framför tystnad"],
  ["Luftspridning", "Brett, oscillerande över rummet", "Riktad – känns även flera meter bort"],
  ["Storlek & placering", "Golvstående torn, tar mer plats", "Liten, får plats på bord/hylla"],
  ["Prisläge", "Mellan", "Budget"],
  ["Elins poäng", "88/100", "84/100"],
] as const;

export const dreoEllerHoneywellPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: dreoCruiserProFlaktProduct,
    path: "/halsa/flakt/dreo-cruiser-pro",
    badge: "Tystast för sovrummet",
    headline: "Dreo Cruiser Pro – tyst tornfläkt för hela rummet",
    shortBody:
      "Välj Dreo om du vill ha en tyst tornfläkt som oscillerar och svalkar hela sovrummet – tillräckligt tyst för att stå på när du sover.",
  },
  {
    product: honeywellTurboforceFlaktProduct,
    path: "/halsa/flakt/honeywell-turboforce",
    badge: "Kraftfull & billig",
    headline: "Honeywell HT900E – kompakt kraft där du sitter",
    shortBody:
      "Välj Honeywell om du vill ha billig, kraftfull punktkyla vid skrivbordet eller i köket, i ett litet format som tar minimalt med plats.",
  },
];

export const dreoEllerHoneywellRelatedLinks: DecisionComparisonRelatedLink[] = [
  {
    href: "/halsa/flakt/dreo-cruiser-pro",
    label: "Tornfläkt",
    text: "Läs Elins recension av Dreo Cruiser Pro.",
  },
  {
    href: "/halsa/flakt/honeywell-turboforce",
    label: "Luftcirkulator",
    text: "Läs Elins recension av Honeywell HT900E.",
  },
  {
    href: "/halsa/flakt",
    label: "Fläkt",
    text: "Se alla Elins fläktar för sommaren.",
  },
  {
    href: "/sommar",
    label: "Sommar",
    text: "Elins samlade sommarfavoriter för svalkan.",
  },
];
