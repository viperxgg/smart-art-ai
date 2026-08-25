import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  anuaAzelaicSerumProduct,
  cosrxAhaBhaTonerProduct,
} from "@/lib/products";

export const azelainsyraEllerAhaBhaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad gör azelainsyra för huden?","answer":"Azelainsyra är en mild aktiv ingrediens som hjälper hudtonen att se jämnare ut och brukar tolereras väl även av känslig och rodnadsbenägen hy. Det är därför den ofta rekommenderas som första \"aktiva\" steget i en rutin."},{"question":"Kan jag använda azelainsyra och AHA/BHA samtidigt?","answer":"Inte samma kväll när du är ny med aktiva – börja med en av dem och låt huden vänja sig i några veckor. Därefter varvar många: azelainsyra dagligen och AHA/BHA-tonern ett par kvällar i veckan."},{"question":"Hur ofta ska man exfoliera med AHA/BHA?","answer":"För de flesta räcker två till tre kvällar i veckan. Mer är inte bättre – överexfoliering gör huden stram och irriterad. Lyssna på huden och backa om den stramar."},{"question":"När i rutinen används de?","answer":"Båda används på kvällen efter rengöring: azelainsyra-serumet före din kräm, tonern som eget steg de kvällar du exfolierar. Håll morgonrutinen enkel och mild så trivs huden bäst."}];

export const azelainsyraEllerAhaBhaComparisonRows = [["Typ av aktiv","Azelainsyra 10% + hyaluron","AHA + BHA i mild toner"],["Gör mest för","Jämnare hudton, rodnadsbenägen hy","Slätare hudyta, renare porer"],["Hur ofta","Kan användas dagligen av många","Ett par kvällar i veckan"],["Känslig hy","Ja – känd som den milda aktiven","Med försiktighet, trappa in långsamt"],["Känsla","Lugnt serum, svider inte för de flesta","Lätt toner, kan kännas lite aktiv först"],["Nybörjarval","Ja","Andra steget"],["Elins poäng","83/100","87/100"]] as const;

export const azelainsyraEllerAhaBhaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: anuaAzelaicSerumProduct,
    path: "/skonhet/azelainsyra-serum",
    badge: "Milda aktiven",
    headline: "Anua Azelaic 10 – den snälla vardagsaktiven",
    shortBody: "Välj azelainsyra om du har känslig eller rodnadsbenägen hy och vill ha jämnare hudton utan att det svider. 10 procent azelainsyra mjukas upp av hyaluron.",
  },
  {
    product: cosrxAhaBhaTonerProduct,
    path: "/skonhet/exfolierande-toner",
    badge: "Ytputsaren",
    headline: "COSRX AHA/BHA – klassisk exfolierande toner",
    shortBody: "Välj AHA/BHA-tonern om huden tål mer och du vill ha slätare hudyta och renare porer. Används ett par kvällar i veckan, inte dagligen.",
  },
];

export const azelainsyraEllerAhaBhaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/azelainsyra-serum","label":"Azelainsyra","text":"Läs Elins genomgång av Anua Azelaic 10."},{"href":"/skonhet/exfolierande-toner","label":"AHA/BHA","text":"Läs Elins genomgång av COSRX-tonern."},{"href":"/skonhet/bha-exfoliant","label":"BHA","text":"Riktad BHA för porer och glans."},{"href":"/skonhet/niacinamide-serum","label":"Niacinamide","text":"Ännu ett milt val för jämnare hudton."}];
