import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  philipsFacialTrimmerProduct,
  philipsLadyShaverProduct,
} from "@/lib/products";

export const ansiktstrimmerEllerRakapparatFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på ansiktstrimmer och rakapparat för dam?","answer":"En ansiktstrimmer är liten och exakt för detaljer som bryn, överläpp och fina hår. En rakapparat för dam täcker större ytor snabbt och skonsamt, både i ansiktet och på kroppen."},{"question":"Vilken är bäst för överläppen?","answer":"En ansiktstrimmer är ofta bäst för överläpp och andra små, känsliga områden eftersom den är exakt. En rakapparat fungerar också men är främst gjord för större ytor."},{"question":"Kan jag använda en rakapparat i ansiktet?","answer":"Många rakapparater för dam går bra att använda i ansiktet på fina hår, men kolla att just din modell är avsedd för ansiktet. För exakt formning är en trimmer smidigare."},{"question":"Är de skonsamma?","answer":"Ja, båda är skonsamma och ger ingen risk för skärsår som en rakhyvel. Rengör bladen regelbundet och var extra försiktig runt känsliga områden."}];

export const ansiktstrimmerEllerRakapparatComparisonRows = [["Snabba signaler","Litet och exakt; för detaljer","Täcker större ytor snabbt"],["Bäst för","Bryn, överläpp, fina hår","Ansikte och kropp, större ytor"],["Precision","Hög","Medel"],["Snabbhet","Långsammare, exakt","Snabbt"],["Skonsamt","Ja","Ja – ingen risk för skärsår"],["Torr användning","Ja","Oftast ja"],["Elins poäng","84/100","84/100"]] as const;

export const ansiktstrimmerEllerRakapparatPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: philipsFacialTrimmerProduct,
    path: "/skonhet/ansiktstrimmer",
    badge: "Exakt",
    headline: "Philips ansiktstrimmer – forma med precision",
    shortBody: "Välj ansiktstrimmern om du vill ha ett litet, exakt verktyg. Perfekt för att snygga till bryn och ta bort fina hår på överläpp och kinder.",
  },
  {
    product: philipsLadyShaverProduct,
    path: "/skonhet/rakapparat-dam",
    badge: "Snabbt & skonsamt",
    headline: "Philips rakapparat för dam – större ytor snabbt",
    shortBody: "Välj rakapparaten om du vill sköta större ytor snabbt och skonsamt, i ansiktet eller på kroppen, utan risk för skärsår.",
  },
];

export const ansiktstrimmerEllerRakapparatRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/ansiktstrimmer","label":"Ansiktstrimmer","text":"Läs Elins recension av Philips ansiktstrimmer."},{"href":"/skonhet/rakapparat-dam","label":"Rakapparat","text":"Läs Elins recension av Philips rakapparat för dam."},{"href":"/skonhet/epilator-eller-rakhyvel","label":"Jämförelse","text":"Epilator eller rakhyvel? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårborttagningsval."}];
