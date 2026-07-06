import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  veetWaxStripsProduct,
  merkurSafetyRazorProduct,
} from "@/lib/products";

export const vaxremsorEllerRakhyvelFaqItems: DecisionComparisonFaqItem[] = [{"question":"Gör vaxremsor ont?","answer":"Det kan svida till en kort stund när du drar av remsan, eftersom håret tas med roten. De flesta tycker att det går fort över. Rakning med hyvel är smärtfritt."},{"question":"Vilken håller längst?","answer":"Vaxremsor håller klart längst – ofta flera veckor – eftersom håret tas med roten. Rakhyveln klipper vid ytan, så håret växer tillbaka på några dagar."},{"question":"Behöver vaxremsor en värmare?","answer":"Nej, färdiga vaxremsor värms genom att du gnuggar dem mellan händerna. Du slipper alltså krångel med en vaxvärmare. Håret behöver vara några millimeter långt för att fästa."},{"question":"Vilken är bäst inför en resa?","answer":"Vaxremsor om du vill vara slät hela resan utan att raka varje dag. Rakhyveln om du bara vill göra en snabb koll precis innan avresa."}];

export const vaxremsorEllerRakhyvelComparisonRows = [["Snabba signaler","Drar håret med roten; slät i veckor","Klipper vid ytan; snabbt och smärtfritt"],["Håller","Veckor","Några dagar"],["Känsla","Kort stund av känsla när du drar","Smärtfritt"],["Förberedelse","Ingen värmare behövs","Blöt hud och rakgel"],["Snabbhet","Tar en stund","Mycket snabbt"],["Bäst för","Slät länge inför sommar/resa","Snabb koll innan du ska ut"],["Elins poäng","84/100","84/100"]] as const;

export const vaxremsorEllerRakhyvelPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: veetWaxStripsProduct,
    path: "/skonhet/vaxremsor",
    badge: "Slät i veckor",
    headline: "Veet vaxremsor – slät längre utan värmare",
    shortBody: "Välj vaxremsor om du vill vara slät i veckor. De drar bort håret med roten och behöver ingen värmare – du gnuggar bara varma remsorna mellan händerna.",
  },
  {
    product: merkurSafetyRazorProduct,
    path: "/skonhet/safety-razor",
    badge: "Snabbt & smärtfritt",
    headline: "Merkur safety razor – snabb, skonsam rakning",
    shortBody: "Välj rakhyveln om du vill ha en snabb, smärtfri lösning. En klassisk safety razor ger en nära rakning och är snäll mot både plånbok och miljö.",
  },
];

export const vaxremsorEllerRakhyvelRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/vaxremsor","label":"Vaxremsor","text":"Läs Elins recension av Veet vaxremsor."},{"href":"/skonhet/safety-razor","label":"Safety razor","text":"Läs Elins recension av Merkur safety razor."},{"href":"/skonhet/epilator-eller-rakhyvel","label":"Jämförelse","text":"Epilator eller rakhyvel? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårborttagningsval."}];
