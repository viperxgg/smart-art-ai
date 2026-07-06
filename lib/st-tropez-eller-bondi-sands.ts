import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  stTropezSelfTanExpressProduct,
  bondiSandsMousseProduct,
} from "@/lib/products";

export const stTropezEllerBondiSandsFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på St.Tropez och Bondi Sands?","answer":"St.Tropez Self Tan Express sköljs av efter en till tre timmar och låter dig styra hur mörk du blir, med ett naturligt resultat. Bondi Sands är en färgad mousse som är extra enkel att lägga jämnt eftersom du ser var du redan applicerat."},{"question":"Vilken är enklast för nybörjare?","answer":"Bondi Sands mousse brukar upplevas som lättast för nybörjare eftersom den är färgad och visar var du lagt, vilket minskar risken för fläckar. St.Tropez ger mer kontroll men kräver lite mer vana."},{"question":"Hur får jag jämnast resultat?","answer":"Oavsett vilken du väljer: exfoliera huden dagen innan, torka torrt, och applicera med en självbrunevante i cirkelrörelser. Var extra försiktig runt knän, armbågar och anklar."},{"question":"Hur länge håller färgen?","answer":"Båda håller vanligtvis i några dagar och tonas sedan bort naturligt. Återfukta huden dagligen så håller färgen jämnare och längre."}];

export const stTropezEllerBondiSandsComparisonRows = [["Snabba signaler","Snabb, naturlig; styr färgdjupet själv","Färgad mousse; enkel och jämn applicering"],["Bäst för","Den som vill ha kontroll och naturligt","Den som vill ha lätt applicering"],["Resultat","Naturlig brun, justerbar","Guldig ton, tydlig färg"],["Applicering","Sköljs av efter timmar","Färgen guidar var du lagt"],["Tips","Exfoliera och använd vante","Exfoliera och använd vante"],["Passar nybörjare","Bra","Mycket bra"],["Elins poäng","88/100","86/100"]] as const;

export const stTropezEllerBondiSandsPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: stTropezSelfTanExpressProduct,
    path: "/skonhet/brun-utan-sol",
    badge: "Mest kontroll",
    headline: "St.Tropez Self Tan Express – naturlig och snabb",
    shortBody: "Välj St.Tropez om du vill styra färgdjupet själv och ha ett naturligt resultat. Du sköljer av efter en till tre timmar beroende på hur mörk du vill bli.",
  },
  {
    product: bondiSandsMousseProduct,
    path: "/skonhet/brun-utan-sol-mousse",
    badge: "Lättast att lägga",
    headline: "Bondi Sands mousse – enkel och jämn",
    shortBody: "Välj Bondi Sands om du vill ha enklast applicering. Den färgade moussen visar var du lagt och ger en jämn, guldig ton.",
  },
];

export const stTropezEllerBondiSandsRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/brun-utan-sol","label":"St.Tropez","text":"Läs Elins recension av St.Tropez Self Tan Express."},{"href":"/skonhet/brun-utan-sol-mousse","label":"Bondi Sands","text":"Läs Elins recension av Bondi Sands mousse."},{"href":"/skonhet/bronzing-drops","label":"Bronzer","text":"Vill du ha glow utan att bli brun? Prova bronzing drops."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins sommar-glow-favoriter."}];
