import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  beurerLv50Product,
  xiaomiStandingFanProduct,
} from "@/lib/products";

export const luftkylareEllerFlaktFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på luftkylare och fläkt?","answer":"En fläkt rör bara luften så det känns svalare. En liten luftkylare drar luft genom vatten och ger en extra sval, fuktad bris framför dig. Ingen av dem är en AC som kyler ett helt rum."},{"question":"Kyler en luftkylare på riktigt?","answer":"En liten bordsluftkylare ger en svalare känsla på nära håll tack vare det fuktade luftflödet, men den kyler inte ett helt rum. Se den som en personlig svalka, inte en luftkonditionering."},{"question":"Vilken är billigast?","answer":"En vanlig fläkt är oftast billigare och enklare. Luftkylaren kostar lite mer och kräver att du fyller på vatten, men ger en extra sval känsla precis framför dig."},{"question":"Vilken är bäst vid skrivbordet?","answer":"Båda fungerar vid skrivbordet. Vill du ha maximal, sval känsla på nära håll är luftkylaren skön. Vill du ha en enkel, stark luftström räcker en fläkt gott."}];

export const luftkylareEllerFlaktComparisonRows = [["Snabba signaler","Drar luft genom vatten; sval, fuktad bris","Rör luften; enkel, stark luftström"],["Känsla","Extra sval på nära håll","Svalkande luftström"],["Vatten behövs?","Ja – vattentank","Nej"],["Räckvidd","Personlig, nära håll","Kan riktas eller sprida i rummet"],["Kyler ett helt rum?","Nej – personlig","Nej – personlig/rummet delvis"],["Prisläge","Mellan","Budget"],["Elins poäng","82/100","84/100"]] as const;

export const luftkylareEllerFlaktPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: beurerLv50Product,
    path: "/halsa/luftkylare",
    badge: "Fuktad kyla",
    headline: "Beurer LV 50 luftkylare – sval bris med vattentank",
    shortBody: "Välj luftkylaren om du vill ha en extra sval, fuktad bris precis framför dig vid skrivbordet. Fyll på vatten i tanken – men se den som en personlig modell.",
  },
  {
    product: xiaomiStandingFanProduct,
    path: "/halsa/bordsflakt",
    badge: "Enkel luftström",
    headline: "Xiaomi fläkt – enkel, stark svalka",
    shortBody: "Välj fläkten om du vill ha en enkel, stark luftström. Den rör om luften och svalkar dig direkt, ofta till ett lägre pris än en luftkylare.",
  },
];

export const luftkylareEllerFlaktRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/luftkylare","label":"Luftkylare","text":"Läs Elins recension av Beurer LV 50 luftkylare."},{"href":"/halsa/bordsflakt","label":"Fläkt","text":"Läs Elins recension av Xiaomi bordsfläkt."},{"href":"/halsa/tornflakt-eller-bordsflakt","label":"Jämförelse","text":"Tornfläkt eller bordsfläkt? Se den jämförelsen."},{"href":"/halsa/flakt","label":"Fläkt","text":"Se alla Elins fläktar för sommaren."}];
