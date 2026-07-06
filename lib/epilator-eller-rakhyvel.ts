import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  braunSilkEpil9Product,
  merkurSafetyRazorProduct,
} from "@/lib/products";

export const epilatorEllerRakhyvelFaqItems: DecisionComparisonFaqItem[] = [{"question":"Gör epilering ont?","answer":"Det kan kännas lite, särskilt de första gångerna, eftersom epilatorn drar upp håret med roten. De flesta tycker att det blir mindre kännbart med tiden. Rakning med hyvel är smärtfritt."},{"question":"Vilken håller längst?","answer":"Epilatorn håller klart längst – ofta flera veckor – eftersom håret tas med roten. Rakhyveln klipper vid ytan, så håret växer tillbaka på några dagar."},{"question":"Växer håret tillbaka finare med epilator?","answer":"Många upplever att håret växer tillbaka finare och glesare med tiden när man epilerar regelbundet, eftersom håret tas med roten. Med rakhyvel växer det tillbaka som vanligt."},{"question":"Vilken är bäst inför en resa?","answer":"Epilatorn om du vill vara slät hela resan utan att behöva raka varje dag. Rakhyveln om du vill göra en snabb koll precis innan avresa."}];

export const epilatorEllerRakhyvelComparisonRows = [["Snabba signaler","Drar upp håret med roten; slät i veckor","Klipper vid ytan; snabbt och smärtfritt"],["Håller","Veckor","Några dagar"],["Känsla","Lite känsla, särskilt i början","Smärtfritt"],["Med tiden","Håret växer ofta tillbaka finare","Växer tillbaka som vanligt"],["Snabbhet","Tar lite längre tid","Mycket snabbt"],["Bäst för","Slät länge inför sommar/resa","Snabb koll innan du ska ut"],["Elins poäng","88/100","84/100"]] as const;

export const epilatorEllerRakhyvelPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: braunSilkEpil9Product,
    path: "/skonhet/epilator/braun-silk-epil-9",
    badge: "Slät i veckor",
    headline: "Braun Silk-épil 9 – slät längre",
    shortBody: "Välj epilatorn om du vill vara slät i veckor. Den drar upp håret med roten, och med tiden brukar håret växa tillbaka finare och glesare.",
  },
  {
    product: merkurSafetyRazorProduct,
    path: "/skonhet/safety-razor",
    badge: "Snabbt & smärtfritt",
    headline: "Merkur safety razor – snabb och skonsam rakning",
    shortBody: "Välj rakhyveln om du vill ha en snabb, smärtfri lösning. En klassisk safety razor ger en nära rakning och är dessutom snäll mot både plånbok och miljö.",
  },
];

export const epilatorEllerRakhyvelRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/epilator/braun-silk-epil-9","label":"Epilator","text":"Läs Elins recension av Braun Silk-épil 9."},{"href":"/skonhet/safety-razor","label":"Safety razor","text":"Läs Elins recension av Merkur safety razor."},{"href":"/skonhet/ipl-harborttagning","label":"IPL","text":"Vill du ha mer långvarigt? Läs om IPL."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårborttagningsval."}];
