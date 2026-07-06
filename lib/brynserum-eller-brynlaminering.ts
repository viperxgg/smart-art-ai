import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  nanobrowBrynserumProduct,
  sorellaBrowLamProduct,
} from "@/lib/products";

export const brynserumEllerBrynlamineringFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på brynserum och brynlaminering?","answer":"Ett brynserum används dagligen och ger med tiden intrycket av tätare, fylligare bryn. Brynlaminering hemma sätter och borstar upp håren för en fyllig look direkt som håller i några veckor."},{"question":"Vilken ger resultat direkt?","answer":"Brynlaminering ger en fyllig, uppborstad look direkt, medan ett brynserum jobbar långsiktigt och märks först efter en tids daglig användning."},{"question":"Hur ofta gör man om en laminering?","answer":"En brynlaminering håller ofta i några veckor. Sedan gör du om den. Följ tiderna i kitet noga, eftersom håren är känsliga för hur länge produkterna sitter på."},{"question":"Kan jag använda båda?","answer":"Ja, många använder ett brynserum i vardagen för det långsiktiga uttrycket och lamineringen inför tillfällen då de vill ha en extra fyllig look."}];

export const brynserumEllerBrynlamineringComparisonRows = [["Snabba signaler","Dagligt serum; fylligt uttryck med tiden","Kit som sätter håren; fyllig look direkt"],["Resultat","Gradvis, med daglig användning","Direkt, håller i veckor"],["Insats","Enkel daglig rutin","Ett par steg med kit"],["Håller","Så länge du fortsätter","Ofta några veckor per laminering"],["Bäst för","Långsiktigt uttryck","Fyllig look inför tillfällen"],["Nybörjarvänligt","Mycket","Bra – följ stegen noga"],["Elins poäng","86/100","86/100"]] as const;

export const brynserumEllerBrynlamineringPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: nanobrowBrynserumProduct,
    path: "/skonhet/brynserum",
    badge: "Daglig rutin",
    headline: "Nanobrow brynserum – fylligare uttryck med tiden",
    shortBody: "Välj brynserum om du vill ha en enkel daglig rutin. Du stryker på och låter tiden ge intrycket av tätare, fylligare bryn.",
  },
  {
    product: sorellaBrowLamProduct,
    path: "/skonhet/brynlaminering",
    badge: "Fyllig look direkt",
    headline: "Sorella brynlaminering – uppborstat direkt",
    shortBody: "Välj brynlaminering hemma om du vill ha en fyllig, uppborstad look direkt som håller i veckor. Kitet sätter håren på plats i ett par enkla steg.",
  },
];

export const brynserumEllerBrynlamineringRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/brynserum","label":"Brynserum","text":"Läs Elins recension av Nanobrow brynserum."},{"href":"/skonhet/brynlaminering","label":"Brynlaminering","text":"Läs Elins recension av Sorella brynlaminering."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins bryn- och fransval."}];
