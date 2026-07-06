import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  mielleRosemaryOilProduct,
  inkeyScalpScrubProduct,
} from "@/lib/products";

export const rosmarinoljaEllerScalpScrubFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på rosmarinolja och scalp scrub?","answer":"Rosmarinolja masserar du in i hårbotten som en omtyckt del av hårrutinen. En scalp scrub exfolierar hårbotten och tar bort produktrester och flagor för en renare känsla. De gör alltså olika saker."},{"question":"Hur ofta ska jag använda dem?","answer":"Rosmarinolja masseras ofta in några gånger i veckan. En scalp scrub används mer sällan, ungefär en gång i veckan, eftersom du inte vill överexfoliera hårbotten."},{"question":"Kan jag använda båda?","answer":"Ja, många exfolierar med scalp scrub ibland för en ren hårbotten och masserar in rosmarinolja däremellan som en skön rutin. Anpassa efter hur hårbotten känns."},{"question":"Hur masserar jag in rosmarinolja?","answer":"Applicera några droppar på hårbotten och massera in med fingertopparna i cirkelrörelser en stund. Det är både skönt och hjälper produkten att fördelas jämnt."}];

export const rosmarinoljaEllerScalpScrubComparisonRows = [["Snabba signaler","Massera in i hårbotten; vårdar","Exfolierar; tar bort produktrester"],["Bäst för","Pyssla om och massera hårbotten","Fet, kladdig hårbotten eller flagor"],["Typ","Olja att massera in","Peeling i duschen"],["Hur ofta","Några gånger i veckan","Ungefär en gång i veckan"],["Känsla","Avslappnande massage","Renare och fräschare"],["Sköljs av?","Kan lämnas eller tvättas ur","Ja – sköljs ur"],["Elins poäng","84/100","84/100"]] as const;

export const rosmarinoljaEllerScalpScrubPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: mielleRosemaryOilProduct,
    path: "/skonhet/rosmarinolja",
    badge: "Vårdar & masserar",
    headline: "Mielle rosmarinolja – pyssla om hårbotten",
    shortBody: "Välj rosmarinoljan om du vill massera in en omtyckt olja i hårbotten som en del av din rutin. Skönt, avslappnande och ger håret liv.",
  },
  {
    product: inkeyScalpScrubProduct,
    path: "/skonhet/scalp-scrub",
    badge: "Exfolierar & rengör",
    headline: "The INKEY List scalp scrub – renare hårbotten",
    shortBody: "Välj scalp scrub om hårbotten känns fet eller kladdig. Den exfolierar och tar bort produktrester och flagor för en renare, fräschare känsla.",
  },
];

export const rosmarinoljaEllerScalpScrubRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/rosmarinolja","label":"Rosmarinolja","text":"Läs Elins recension av Mielle rosmarinolja."},{"href":"/skonhet/scalp-scrub","label":"Scalp scrub","text":"Läs Elins recension av INKEY scalp scrub."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hår- och hårbottenval."}];
