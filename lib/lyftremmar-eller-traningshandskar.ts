import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  fitgriffStrapsProduct,
  ihuanGlovesProduct,
} from "@/lib/products";

export const lyftremmarEllerTraningshandskarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på lyftremmar och träningshandskar?","answer":"Lyftremmar avlastar greppet vid tunga lyft så du orkar hålla i stången längre. Träningshandskar skyddar handflatorna mot skavsår och valkar och ger ett stadigare grepp i allmän träning."},{"question":"Vilket behöver jag för tunga marklyft?","answer":"Lyftremmar, om du märker att greppet ger upp innan musklerna i drag- och lyftövningar. De hjälper dig få ut mer av ryggen och benen utan att greppet blir begränsningen."},{"question":"Skyddar handskar mot valkar?","answer":"Ja, träningshandskar minskar risken för skavsår och valkar i handflatorna, vilket många uppskattar i allmän styrketräning och när man tränar ofta."},{"question":"Kan jag använda båda?","answer":"Ja, många har handskar för komfort i vardagsträningen och lyftremmar för de allra tyngsta lyften. De löser olika saker och kompletterar varandra bra."}];

export const lyftremmarEllerTraningshandskarComparisonRows = [["Snabba signaler","Avlastar greppet vid tunga lyft","Skyddar händerna; stadigare grepp"],["Bäst för","Marklyft, rodd, tunga drag","Allmän träning, handskydd"],["Löser","Greppet ger upp före musklerna","Skavsår och valkar"],["När","De tyngsta lyften","Vardagsträning"],["Passform","Runt handled och stång","På händerna"],["Nybörjarvänligt","Bra – lär dig tekniken","Ja"],["Elins poäng","86/100","84/100"]] as const;

export const lyftremmarEllerTraningshandskarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: fitgriffStrapsProduct,
    path: "/traning/lifting-straps",
    badge: "Avlastar greppet",
    headline: "Fitgriff lyftremmar – håll i stången längre",
    shortBody: "Välj lyftremmar om du lyfter tungt och greppet ger upp innan musklerna. De avlastar greppet i marklyft och rodd så du orkar fler repetitioner.",
  },
  {
    product: ihuanGlovesProduct,
    path: "/traning/traningshandskar",
    badge: "Skyddar händerna",
    headline: "ihuan träningshandskar – skydd och stadigt grepp",
    shortBody: "Välj träningshandskar om du vill skydda handflatorna mot skavsår och valkar och ha ett stadigare grepp i allmän träning.",
  },
];

export const lyftremmarEllerTraningshandskarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/lifting-straps","label":"Lyftremmar","text":"Läs Elins recension av Fitgriff lyftremmar."},{"href":"/traning/traningshandskar","label":"Träningshandskar","text":"Läs Elins recension av ihuan träningshandskar."},{"href":"/traning","label":"Träning","text":"Se alla Elins gymtillbehör."}];
