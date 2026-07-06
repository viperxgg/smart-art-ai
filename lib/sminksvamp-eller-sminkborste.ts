import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  realTechniquesSpongeProduct,
  realTechniquesBrushesProduct,
} from "@/lib/products";

export const sminksvampEllerSminkborsteFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad ger mest naturlig finish – svamp eller borste?","answer":"En fuktad sminksvamp ger oftast den mest naturliga, hudlika finishen eftersom du klappar in produkten. En borste bygger tydligare, jämnare täckning."},{"question":"Vilken tar minst produkt?","answer":"En sminkborste tar mindre produkt eftersom svampen suger upp en del. Vill du spara på din foundation kan borsten vara mer ekonomisk."},{"question":"Ska jag fukta sminksvampen?","answer":"Ja, fukta svampen och krama ur överflödigt vatten innan du klappar in foundation. Då får du en fräschare finish och svampen suger inte upp lika mycket produkt."},{"question":"Kan jag använda båda?","answer":"Ja, ett vanligt knep är att lägga på foundation med borste för täckning och sedan klappa ut kanterna med en fuktad svamp för en naturlig finish."}];

export const sminksvampEllerSminkborsteComparisonRows = [["Snabba signaler","Klappar in; naturlig, hudlik finish","Bygger täckning snabbt och jämnt"],["Finish","Fräsch och naturlig","Jämn och mer täckande"],["Produktåtgång","Suger upp lite mer produkt","Tar mindre produkt"],["Snabbhet","Lite mer pillande","Snabbt"],["Rengöring","Tvätta ofta – fuktig miljö","Tvätta regelbundet"],["Bäst för","Naturlig vardagslook","Täckande look eller bråttom"],["Elins poäng","86/100","86/100"]] as const;

export const sminksvampEllerSminkborstePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: realTechniquesSpongeProduct,
    path: "/skonhet/sminksvamp",
    badge: "Naturlig finish",
    headline: "Real Techniques sminksvamp – hudlik och fräsch",
    shortBody: "Välj sminksvampen om du vill ha en naturlig, fräsch finish. Fuktad klappar den in foundation för en lätt, hudlik look som smälter in.",
  },
  {
    product: realTechniquesBrushesProduct,
    path: "/skonhet/sminkborstar",
    badge: "Snabb täckning",
    headline: "Real Techniques sminkborstar – jämnt och effektivt",
    shortBody: "Välj sminkborste om du vill bygga täckning snabbt och jämnt. Den tar mindre produkt och ger en tydligare finish på kort tid.",
  },
];

export const sminksvampEllerSminkborsteRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/sminksvamp","label":"Sminksvamp","text":"Läs Elins recension av Real Techniques sminksvamp."},{"href":"/skonhet/sminkborstar","label":"Sminkborstar","text":"Läs Elins recension av Real Techniques sminkborstar."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins makeupval."},{"href":"/skonhet/bronzing-drops","label":"Glow","text":"Bronzing drops för en solkysst finish."}];
