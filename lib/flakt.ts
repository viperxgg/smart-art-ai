import {
  dreoCruiserProFlaktProduct,
  honeywellTurboforceFlaktProduct,
  mideaFz10FlaktProduct,
  type Product,
} from "@/lib/products";

export type FlaktPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  caution: string;
  verdict: string;
  passFor: string[];
  comparisonVerdict: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const flaktFaqItems = [
  {
    question: "Är dyra fläktar tystare?",
    answer:
      "Ofta ja. Tornfläktar som Dreo ligger runt 20 dB, medan många billiga bordsfläktar låter betydligt mer. Vill du sova med fläkten på är tystnaden värd extra.",
  },
  {
    question: "Vilken fläkt är bäst för sovrummet?",
    answer:
      "En tyst tornfläkt med oscillering och en display som slocknar passar bäst nattetid. En kraftfull budgetfläkt kyler snabbt men kan störa sömnen med ljud.",
  },
] as const;

export const flaktComparisonRows = [
  [
    "Bäst för",
    "Tyst svalka i hela rummet",
    "Sovrumsvänligt värdeval",
    "Riktad svalka vid skrivbord eller litet rum",
  ],
  [
    "Ljud",
    "Runt 20 dB på låg nivå",
    "Ca 38 dB och tystare nattläge",
    "Mer ljud, särskilt nattetid",
  ],
  [
    "Funktioner",
    "Oscillering, timer, 9 hastigheter, fjärrkontroll",
    "Oscillering, 7h timer, fjärrkontroll, nattläge",
    "3 hastigheter och 90° lutning",
  ],
  [
    "Format",
    "Slimmad tornfläkt på golvet",
    "Tornfläkt med mellanpris",
    "Kompakt bordsfläkt, även för vägg",
  ],
  [
    "Kompromiss",
    "Du betalar för tystnad och bekvämlighet",
    "Inte lika tyst som premium på högsta läget",
    "Du får kraft men inte premiumkänsla",
  ],
] as const;

export const flaktPicks: FlaktPick[] = [
  {
    product: dreoCruiserProFlaktProduct,
    path: "/halsa/flakt/dreo-cruiser-pro",
    badge: "Tyst premiumval",
    headline: "Dreo Cruiser Pro – tyst premiumval för hela rummet",
    shortBody:
      "En slimmad tornfläkt för dig som prioriterar låg ljudnivå, oscillering och enkel styrning.",
    valueHook: "Den tysta premiumfläkten",
    valueStatement:
      "Dreo Cruiser Pro är valet när du vill svalka ett helt rum och betalar extra för tystare drift, fler lägen, timer och fjärrkontroll.",
    caution:
      "Premiumkänslan sitter främst i tystnaden och bekvämligheten. Behöver du bara snabb, riktad svalka kan en enklare bordsfläkt räcka.",
    verdict:
      "Premiumvalet – tyst, mångsidig tornfläkt för hela rummet.",
    passFor: [
      "Du vill ha svalka i hela rummet.",
      "Du prioriterar låg ljudnivå, särskilt kväll och natt.",
      "Du vill ha oscillering, timer och fjärrkontroll.",
    ],
    comparisonVerdict:
      "Välj Dreo om du vill ha tystare drift, oscillering och en mer komplett fläkt för hela rummet. Vill du mest ha riktad svalka till låg kostnad, se Honeywell.",
    reviewSectionId: "dreo-cruiser-pro-recensioner",
    reviewFormId: "dreo-cruiser-pro-skriv-recension",
    targetKeyword: "dreo cruiser pro tornfläkt",
    metaTitle: "Dreo Cruiser Pro T1 tornfläkt - Elins recension | Elins val",
    metaDescription:
      "Elin går igenom Dreo Cruiser Pro T1: tyst drift, 9 hastigheter, oscillering, Amazon-signaler och när premiumfläkten är värd priset.",
  },
  {
    product: honeywellTurboforceFlaktProduct,
    path: "/halsa/flakt/honeywell-turboforce",
    badge: "Budgetvalet",
    headline: "Honeywell TurboForce – kraftfull budgetfläkt",
    shortBody:
      "En liten bordsfläkt med starkt, riktat luftflöde. Prisvärd för skrivbord och mindre rum, men inte tyst.",
    valueHook: "Mest kraft för pengarna",
    valueStatement:
      "Honeywell TurboForce passar när du vill ha snabb, riktad svalka utan premiumfunktioner. Den är kompakt, flyttbar och kan även väggmonteras.",
    caution:
      "Den stora kompromissen är ljudet. Den ger mycket luft för pengarna, men är inget självklart sovrumsval om du är ljudkänslig.",
    verdict:
      "Budgetvalet – kraftfull och prisvärd, men räkna med mer ljud.",
    passFor: [
      "Du vill ha riktad svalka vid skrivbordet.",
      "Du vill ha en kompakt fläkt som är lätt att flytta.",
      "Du accepterar mer ljud för att få starkt luftflöde.",
    ],
    comparisonVerdict:
      "Välj Honeywell om du vill ha mest riktad luft för pengarna och kan leva med mer ljud. Vill du ha tystare svalka för hela rummet, se Dreo.",
    reviewSectionId: "honeywell-turboforce-recensioner",
    reviewFormId: "honeywell-turboforce-skriv-recension",
    targetKeyword: "honeywell turboforce ht900e",
    metaTitle: "Honeywell TurboForce HT900E - Elins recension | Elins val",
    metaDescription:
      "Elin går igenom Honeywell TurboForce HT900E: starkt luftflöde, 3 hastigheter, ljudnivå, Amazon-signaler och när budgetfläkten räcker.",
  },
  {
    product: mideaFz10FlaktProduct,
    path: "/halsa/flakt/midea-fz10",
    badge: "Bäst värde",
    headline: "Midea FZ10 – bäst värde för sovrummet",
    shortBody:
      "En prisvärd tornfläkt med nattläge, timer och fjärrkontroll för dig som vill ha sovrumsvänlig svalka utan premiumpris.",
    valueHook: "Bäst värde – och sovrumsvänlig",
    valueStatement:
      "Midea FZ10 passar när du vill ha en tornfläkt med oscillering, fjärrkontroll, 7-timmarstimer och ett tystare nattläge till ett mellanpris.",
    caution:
      "Den är tystare på de lägre lägena, men räkna med mer ljud på högsta hastigheten. Vill du ha absolut tystast drift är Dreo mer relevant.",
    verdict:
      "Bäst värde – prisvärd tornfläkt med nattläge för sovrummet.",
    passFor: [
      "Du vill ha en tornfläkt med nattläge och timer.",
      "Du vill ha mer sovrumskomfort än en enkel bordsfläkt.",
      "Du vill hålla priset lägre än ett tydligt premiumval.",
    ],
    comparisonVerdict:
      "Välj Midea om du vill ha nattläge, timer och tornfläktens bekvämlighet till ett mellanpris. Är du extremt ljudkänslig är Dreo tystare, och vill du bara ha billig riktad luft är Honeywell enklare.",
    reviewSectionId: "midea-fz10-recensioner",
    reviewFormId: "midea-fz10-skriv-recension",
    targetKeyword: "midea fz10 tornfläkt",
    metaTitle: "Midea FZ10 tornfläkt - Elins recension | Elins val",
    metaDescription:
      "Elin går igenom Midea FZ10-17JR: nattläge, timer, ljudnivå, Amazon-signaler och när den är ett prisvärt val för sovrummet.",
  },
];

export function getOtherFlaktPick(productSlug: string) {
  return flaktPicks.find((pick) => pick.product.slug !== productSlug);
}
