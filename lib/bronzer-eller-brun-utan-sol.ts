import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  elfSkinBronzingDropsProduct,
  bondiSandsMousseProduct,
} from "@/lib/products";

export const bronzerEllerBrunUtanSolFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på bronzer och brun utan sol?","answer":"Bronzing drops ger en glow som du blandar i kräm och sköljer av på kvällen. Brun-utan-sol utvecklas till en verklig färg som håller i flera dagar innan den tonas bort."},{"question":"Vilken är enklast för nybörjare?","answer":"Bronzing drops är väldigt lättanvända – du doserar dem själv i din kräm. Brun-utan-sol kräver lite mer teknik, men en färgad mousse gör det enklare att lägga jämnt."},{"question":"Vilken ser mest naturlig ut?","answer":"Bägge kan se naturliga ut om du bygger upp försiktigt. Bronzing drops ger en subtil glow, medan brun-utan-sol ger en tydligare, mer solbränd färg. Börja lätt och bygg på."},{"question":"Kan jag använda båda?","answer":"Ja, många har bronzing drops för snabb glow i vardagen och brun-utan-sol inför tillfällen då de vill ha en hållbar färg som sitter i flera dagar."}];

export const bronzerEllerBrunUtanSolComparisonRows = [["Snabba signaler","Glow i kräm; tvättas av","Utvecklas till färg som håller"],["Håller","Tills du tvättar av (samma dag)","Flera dagar"],["Styr intensitet","Ja – doseras i kräm","Delvis – via lagertjocklek"],["Applicering","Bland i din kräm/foundation","Applicera med vante på ren hud"],["Bäst för","Snabb glow inför en dag","Hållbar färg inför tillfällen"],["Nybörjarvänligt","Mycket","Bra – exfoliera först"],["Elins poäng","86/100","86/100"]] as const;

export const bronzerEllerBrunUtanSolPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: elfSkinBronzingDropsProduct,
    path: "/skonhet/bronzing-drops",
    badge: "Glow för dagen",
    headline: "e.l.f. bronzing drops – solkysst direkt",
    shortBody: "Välj bronzing drops om du vill ha en glow för dagen. Du blandar dem i kräm eller foundation, styr intensiteten och sköljer av på kvällen.",
  },
  {
    product: bondiSandsMousseProduct,
    path: "/skonhet/brun-utan-sol-mousse",
    badge: "Håller i dagar",
    headline: "Bondi Sands brun utan sol – verklig färg som sitter",
    shortBody: "Välj brun-utan-sol om du vill ha en verklig, jämn färg som håller i flera dagar. Moussen är enkel att lägga jämnt och ger en solbränd ton.",
  },
];

export const bronzerEllerBrunUtanSolRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/bronzing-drops","label":"Bronzing drops","text":"Läs Elins recension av e.l.f. bronzing drops."},{"href":"/skonhet/brun-utan-sol-mousse","label":"Brun utan sol","text":"Läs Elins recension av Bondi Sands mousse."},{"href":"/skonhet/st-tropez-eller-bondi-sands","label":"Jämförelse","text":"St.Tropez eller Bondi Sands? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins sommar-glow-favoriter."}];
