import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  paulasChoiceBhaProduct,
  purestAhaBhaPeelingProduct,
} from "@/lib/products";

export const bhaEllerAhaBhaPeelingFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på BHA och en AHA/BHA-peeling?","answer":"En ren BHA (salicylsyra) är fettlöslig och går ner i porerna, vilket passar oljig och ojämn hud. En AHA/BHA-peeling kombinerar syror för både ytlig och lite djupare exfoliering – mer allround."},{"question":"Vilken passar oljig hud bäst?","answer":"En ren BHA passar ofta oljig och ojämn hud bäst eftersom salicylsyran jobbar i porerna. En AHA/BHA-peeling fungerar också men är mer inriktad på allround-uppfräschning."},{"question":"Hur ofta ska jag exfoliera med syror?","answer":"Börja långsamt, ett par gånger i veckan, och trappa upp när huden vant sig. Överexfoliering kan reta huden. Använd alltid fuktkräm efteråt."},{"question":"Kan jag använda båda?","answer":"Man behöver sällan båda samtidigt. Välj en att börja med utifrån din hud, och lyssna på hur den reagerar. Blanda inte för många syror på samma gång."}];

export const bhaEllerAhaBhaPeelingComparisonRows = [["Snabba signaler","Ren BHA; går ner i porerna","AHA + BHA; allround-exfoliering"],["Bäst för","Oljig, ojämn hud, pormaskar","Allround glow och ytstruktur"],["Typ av syra","Salicylsyra (BHA)","Kombination AHA och BHA"],["Hur ofta","Börja ett par gånger i veckan","Börja ett par gånger i veckan"],["Känsla","Riktar in sig på porer","Fräschar upp hela ytan"],["Efteråt","Fuktkräm efteråt","Fuktkräm efteråt"],["Elins poäng","88/100","86/100"]] as const;

export const bhaEllerAhaBhaPeelingPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: paulasChoiceBhaProduct,
    path: "/skonhet/bha-exfoliant",
    badge: "Jobbar i porerna",
    headline: "Paula's Choice BHA – för oljig, ojämn hud",
    shortBody: "Välj en ren BHA om du har oljig eller ojämn hud. Salicylsyran går ner i porerna och hjälper huden att kännas jämnare och mattare med tiden.",
  },
  {
    product: purestAhaBhaPeelingProduct,
    path: "/skonhet/ansiktspeeling",
    badge: "Allround glow",
    headline: "AHA/BHA-peeling – fräschar upp hela ytan",
    shortBody: "Välj en AHA/BHA-peeling om du vill ha en allround-exfoliering. Syrorna jobbar både ytligt och lite djupare för en jämnare, piggare hy.",
  },
];

export const bhaEllerAhaBhaPeelingRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/bha-exfoliant","label":"BHA","text":"Läs Elins recension av Paula's Choice BHA."},{"href":"/skonhet/ansiktspeeling","label":"AHA/BHA-peeling","text":"Läs Elins recension av AHA/BHA-peelingen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
