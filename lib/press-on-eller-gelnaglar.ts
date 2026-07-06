import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  pressOnNaglarProduct,
  beurerMp48LampProduct,
} from "@/lib/products";

export const pressOnEllerGelnaglarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad håller längst – press-on eller gelnaglar?","answer":"Gelnaglar hemma håller längst, ofta två till tre veckor eftersom gellacket härdas i lampa. Press-on håller från en dag upp till någon vecka beroende på lim och hur du använder händerna."},{"question":"Vilket är enklast och snabbast?","answer":"Press-on naglar är klart snabbast – du trycker bara fast dem på några minuter utan lampa. Gelnaglar tar längre tid eftersom du bygger upp med baslack, färg och härdning."},{"question":"Skadar gelnaglar naglarna?","answer":"Naglarna mår bäst om du tar bort gellacket varsamt genom att blöta upp det istället för att peta bort det, och ger naglarna vilopauser mellan omgångar. Press-on är skonsammare eftersom de tas av lättare."},{"question":"Vilket passar bäst för nybörjare?","answer":"Press-on är lättast att lyckas med för nybörjare eftersom det inte kräver teknik eller lampa. Gelnaglar hemma går bra att lära sig men kräver lite övning för ett jämnt resultat."}];

export const pressOnEllerGelnaglarComparisonRows = [["Snabba signaler","Tryck fast på minuter; byt ofta","Härdas i lampa; håller i veckor"],["Tid att göra","Några minuter","Längre – baslack, färg, lampa"],["Håller","En dag till någon vecka","Ofta 2–3 veckor"],["Byta look","Enkelt – ta av och byt","Kräver borttagning"],["Utrustning","Ingen lampa behövs","UV/LED-lampa + gellack"],["Bäst för","Snabbt inför kväll/helg","Hållbar vardagsmanikyr"],["Elins poäng","84/100","86/100"]] as const;

export const pressOnEllerGelnaglarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: pressOnNaglarProduct,
    path: "/skonhet/press-on-naglar",
    badge: "Snabbast",
    headline: "Press-on naglar – fin manikyr på minuter",
    shortBody: "Välj press-on om du vill ha snygga naglar snabbt. Du trycker fast dem på några minuter, byter färg när du vill och tar av dem utan lampa.",
  },
  {
    product: beurerMp48LampProduct,
    path: "/skonhet/nagellampa",
    badge: "Håller i veckor",
    headline: "Gelnaglar hemma med Beurer MP 48 – håller längre",
    shortBody: "Välj gelnaglar hemma om du vill att manikyren ska hålla i veckor. Med UV/LED-lampan härdar du gellacket för ett salongsliknande, hållbart resultat.",
  },
];

export const pressOnEllerGelnaglarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/press-on-naglar","label":"Press-on","text":"Läs Elins recension av press-on naglar."},{"href":"/skonhet/nagellampa","label":"Nagellampa","text":"Läs Elins recension av Beurer MP 48 nagellampa."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins nagelval."},{"href":"/sommar","label":"Sommar","text":"Fler snygga sommarfixar från Elin."}];
