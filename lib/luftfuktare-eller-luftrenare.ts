import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  levoitHumidifierProduct,
  levoitCore200sProduct,
} from "@/lib/products";

export const luftfuktareEllerLuftrenareFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på luftfuktare och luftrenare?","answer":"En luftfuktare tillför fukt till torr luft, medan en luftrenare filtrerar bort damm och partiklar ur luften. De löser alltså två helt olika problem – fukt respektive renare luft."},{"question":"Vilken behöver jag om luften känns torr?","answer":"Då är det en luftfuktare du vill ha. Den tillför fukt och hjälper mot torr hud, torr hals och statisk elektricitet, som är vanligt på vintern när elementen är på."},{"question":"Vilken är bäst om jag har husdjur?","answer":"En luftrenare, eftersom den filtrerar bort damm och partiklar i luften. Många med husdjur eller dammkänslighet uppskattar renare inomhusluft."},{"question":"Kan jag ha båda igång?","answer":"Ja, de stör inte varandra och kan användas samtidigt. Luftfuktaren håller luften mindre torr medan luftrenaren håller den renare."}];

export const luftfuktareEllerLuftrenareComparisonRows = [["Snabba signaler","Tillför fukt till torr luft","Filtrerar bort damm och partiklar"],["Löser","Torr hud, torr hals, statisk luft","Damm och partiklar i luften"],["Bäst för","Torra vintermånader med element på","Dammkänsliga hem och husdjur"],["Behöver påfyllning?","Ja – vattentank","Nej – men filter byts ibland"],["Kan användas ihop?","Ja","Ja"],["När märks nyttan mest","När luften känns torr","När du vill ha renare luft"],["Elins poäng","86/100","86/100"]] as const;

export const luftfuktareEllerLuftrenarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: levoitHumidifierProduct,
    path: "/halsa/luftfuktare",
    badge: "Mot torr luft",
    headline: "Levoit luftfuktare – mer fukt i luften",
    shortBody: "Välj luftfuktaren om luften hemma känns torr. Den tillför fukt och gör inomhusluften skönare när element och kyla torkar ut den.",
  },
  {
    product: levoitCore200sProduct,
    path: "/halsa/luftrenare",
    badge: "Renare luft",
    headline: "Levoit Core 200S luftrenare – filtrerar luften",
    shortBody: "Välj luftrenaren om du vill ha renare luft. Den filtrerar bort damm och partiklar, vilket många uppskattar med husdjur eller dammkänslighet.",
  },
];

export const luftfuktareEllerLuftrenareRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/luftfuktare","label":"Luftfuktare","text":"Läs Elins recension av Levoit luftfuktare."},{"href":"/halsa/luftrenare","label":"Luftrenare","text":"Läs Elins recension av Levoit Core 200S."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för smart hem och klimat."},{"href":"/halsa/tornflakt-eller-bordsflakt","label":"Fläkt","text":"Tornfläkt eller bordsfläkt? Se den jämförelsen."}];
