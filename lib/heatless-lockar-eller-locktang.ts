import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  kitschHeatlessCurlsProduct,
  babylissC325eProduct,
} from "@/lib/products";

export const heatlessLockarEllerLocktangFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på heatless lockar och locktång?","answer":"Heatless lockar formar håret helt utan värme – du sätter upp håret och väntar eller sover. En locktång formar lockar snabbt med värme, men sliter mer på håret."},{"question":"Vilken är skonsammast för håret?","answer":"Heatless lockar är klart skonsammast eftersom de inte använder någon värme. En locktång ger snabbare resultat men värmen kan torka ut och slita på håret över tid – använd gärna värmeskydd."},{"question":"Hur länge behöver heatless lockar sitta?","answer":"Ofta några timmar, och många sätter upp dem på kvällen och sover med dem för att vakna med lockar. Ju längre de sitter på lätt fuktigt hår, desto tydligare blir vågorna."},{"question":"Vilken ger snabbast resultat?","answer":"Locktången, som formar lockar på minuter. Heatless lockar tar längre tid men är skonsammare. Många använder heatless i vardagen och locktången när det ska gå fort."}];

export const heatlessLockarEllerLocktangComparisonRows = [["Snabba signaler","Formar utan värme; skonsamt","Formar med värme; snabbt och exakt"],["Snällt mot håret","Ja – ingen värme","Mer slitage av värmen"],["Tid","Sitter i timmar/över natten","Klart på minuter"],["Kontroll över formen","Mjuka vågor","Exakt, olika lockstorlekar"],["Bäst för","Vardag och skonsamhet","När det ska gå fort"],["Nybörjarvänligt","Ja","Bra – lite övning"],["Elins poäng","84/100","86/100"]] as const;

export const heatlessLockarEllerLocktangPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: kitschHeatlessCurlsProduct,
    path: "/skonhet/heatless-curls",
    badge: "Snällt mot håret",
    headline: "Kitsch heatless curls – lockar utan värme",
    shortBody: "Välj heatless lockar om du vill skona håret. Du sätter upp håret på kvällen och vaknar med mjuka vågor – helt utan värme och slitage.",
  },
  {
    product: babylissC325eProduct,
    path: "/skonhet/locktang/babyliss-c325e",
    badge: "Snabbt & exakt",
    headline: "BaByliss locktång – lockar på minuter",
    shortBody: "Välj locktången om du vill ha lockar snabbt. Den formar snygga lockar på minuter och låter dig styra formen exakt när det är bråttom.",
  },
];

export const heatlessLockarEllerLocktangRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/heatless-curls","label":"Heatless curls","text":"Läs Elins recension av Kitsch heatless curls."},{"href":"/skonhet/locktang/babyliss-c325e","label":"Locktång","text":"Läs Elins recension av BaByliss locktång."},{"href":"/skonhet/platta-eller-locka","label":"Jämförelse","text":"Platta eller locka? Se den jämförelsen."},{"href":"/skonhet/varmluftsborste","label":"Varmluftsborste","text":"Elins varmluftsborste bäst i test 2026."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårstylingval."}];
