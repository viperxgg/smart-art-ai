import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  cantuLeaveInProduct,
  moroccanoilHaroljaProduct,
} from "@/lib/products";

export const leaveInEllerHaroljaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på leave-in och hårolja?","answer":"En leave-in är en lätt, återfuktande vård du applicerar i fuktigt hår för att reda ut och skydda. En hårolja är mer koncentrerad och används oftast i topparna för glans och att tämja frissighet."},{"question":"Vilken är bäst för torrt hår?","answer":"En leave-in ger lätt återfuktning i hela håret och är skön för torrt, trassligt hår. En hårolja tillför glans men fokuserar mer på topparna och frissighet."},{"question":"Kan jag använda båda?","answer":"Ja, ett vanligt upplägg är leave-in i fuktigt hår efter duschen och sedan några droppar hårolja i topparna när håret torkat. Då får du både fukt och glans."},{"question":"Hur mycket hårolja ska jag använda?","answer":"Börja med några få droppar och jobba in i topparna. Tar du för mycket kan håret kännas tyngt eller flottigt. Det är lättare att lägga till än att tvätta bort."}];

export const leaveInEllerHaroljaComparisonRows = [["Snabba signaler","Lätt återfuktning; reder ut","Koncentrerad glans; tämjer frissighet"],["Bäst för","Torrt, trassligt hår","Frissigt, matt hår"],["Applicering","I fuktigt hår, hela längden","På lite torra toppar"],["Känsla","Lätt och återfuktande","Rik men bör doseras sparsamt"],["Risk att tynga","Låg","Om du tar för mycket"],["När","Efter dusch","Efter dusch eller på torrt hår"],["Elins poäng","84/100","88/100"]] as const;

export const leaveInEllerHaroljaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: cantuLeaveInProduct,
    path: "/skonhet/leave-in-conditioner",
    badge: "Återfuktar & reder ut",
    headline: "Cantu leave-in – mjukt, lättkammat hår",
    shortBody: "Välj leave-in om du vill återfukta och göra håret lättkammat direkt efter duschen. Skönt för torrt eller trassligt hår som behöver fukt och skydd.",
  },
  {
    product: moroccanoilHaroljaProduct,
    path: "/skonhet/harolja",
    badge: "Glans & antifriss",
    headline: "Moroccanoil hårolja – glans och tämjd frissighet",
    shortBody: "Välj håroljan om du vill tämja frissighet och ge glans. Några droppar i topparna gör håret blankare och mjukare utan att tynga.",
  },
];

export const leaveInEllerHaroljaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/leave-in-conditioner","label":"Leave-in","text":"Läs Elins recension av Cantu leave-in."},{"href":"/skonhet/harolja","label":"Hårolja","text":"Läs Elins recension av Moroccanoil hårolja."},{"href":"/skonhet/harolja-eller-varmeskydd","label":"Jämförelse","text":"Hårolja eller värmeskydd? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårvårdsval."}];
