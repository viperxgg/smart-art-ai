import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  anortrekStrandfiltProduct,
  utopiaCabanaStrandhandduk,
} from "@/lib/products";

export const strandfiltEllerStrandhanddukFaqItems: DecisionComparisonFaqItem[] = [{"question":"Behöver jag både strandfilt och strandhandduk?","answer":"Ofta ja – de löser olika saker. Filten är den sandfria basen att sitta och ligga på, medan handduken torkar dig och är skön att svepa om dig efter badet."},{"question":"Är en strandfilt bättre än en handduk att ligga på?","answer":"För att ligga och sitta på, ja. Den är större, sandfri och rymmer hela sällskapet. En handduk blir liten som underlag och samlar sand."},{"question":"Kan jag torka mig med en strandfilt?","answer":"Den är gjord som sandfri sittyta, inte för att torka kroppen. Till att torka dig är en sugande frottéhandduk mycket bättre."},{"question":"Vad är lättast att packa?","answer":"Strandfilten viks ihop till en liten påse och är mycket lätt. Ett 4-pack frottéhanddukar tar mer plats, men du kan nöja dig med en handduk per person."}];

export const strandfiltEllerStrandhanddukComparisonRows = [["Snabba signaler","Stor sandfri sittyta; 300x300 cm","Mjuk frotté; torkar dig"],["Bäst för","Sitta/ligga, hela sällskapet","Torka sig, svepa in sig"],["Sandfri","Ja – sanden borstas av","Nej – frotté samlar sand"],["Personlig eller gemensam","Gemensam bas","Personlig"],["Torkar dig","Nej","Ja"],["Packmått","Viks litet med påse","Skrymmer mer (4-pack)"],["Elins poäng","77/100","77/100"]] as const;

export const strandfiltEllerStrandhanddukPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: anortrekStrandfiltProduct,
    path: "/sommar/resa/strandfilt",
    badge: "Sandfri bas",
    headline: "AnorTrek strandfilt – stor sandfri sittyta",
    shortBody: "Välj filten som bas på stranden. Extra stor (300x300 cm), lätt och sandfri – plats för hela sällskapet att sitta och ligga.",
  },
  {
    product: utopiaCabanaStrandhandduk,
    path: "/sommar/resa/frottehandduk",
    badge: "Torka & mysa",
    headline: "Utopia strandhandduk – mjuk frotté",
    shortBody: "Välj handduken till att torka dig och svepa in dig. Mjuk, sugande bomullsfrotté i personlig storlek – den du ändå vill ha med efter badet.",
  },
];

export const strandfiltEllerStrandhanddukRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/strandfilt","label":"Strandfilt","text":"Läs Elins genomgång av AnorTrek sandfria strandfilt."},{"href":"/sommar/resa/frottehandduk","label":"Strandhandduk","text":"Läs Elins genomgång av Utopia frottéhandduk."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins val för resan och stranden."}];
