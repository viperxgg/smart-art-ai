import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  reebokStepProduct,
  dhFitlifeTrampolineProduct,
} from "@/lib/products";

export const stepbradaEllerStudsmattaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på stepbräda och studsmatta?","answer":"En stepbräda tränar ben och puls med upp- och nedsteg i justerbar höjd, ofta i step-pass. En fitness-studsmatta ger skonsam, lekfull studsträning som är snäll mot lederna."},{"question":"Vilken är skonsammast för lederna?","answer":"Studsmattan är skonsammare eftersom mattan tar upp stöten i varje studs. Stepbrädan ger tydlig benträning men landningarna belastar knän lite mer, särskilt på högre höjd."},{"question":"Vilken ger bäst benträning?","answer":"Stepbrädan är mer inriktad på ben och kan även användas för styrkeövningar med höjd. Studsmattan tränar också ben och kondition men med fokus på skonsam puls."},{"question":"Kan jag justera intensiteten?","answer":"På stepbrädan justerar du höjden för att öka eller minska intensiteten. På studsmattan styr du intensiteten genom hur högt och snabbt du studsar."}];

export const stepbradaEllerStudsmattaComparisonRows = [["Snabba signaler","Upp- och nedsteg; justerbar höjd","Skonsam studsträning; ledvänlig"],["Bäst för","Ben, puls, step-pass","Skonsam, rolig kondition"],["Ledvänligt","Medel – landningar i steg","Ja – mjuk studs"],["Justerbart","Ja – höjden","Nej"],["Kul-faktor","Strukturerat","Lekfullt"],["Plats","Tar en bit golv","Tar en bit golv"],["Elins poäng","84/100","86/100"]] as const;

export const stepbradaEllerStudsmattaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: reebokStepProduct,
    path: "/traning/stepbrada",
    badge: "Justerbar benträning",
    headline: "Reebok stepbräda – puls och ben med höjd",
    shortBody: "Välj stepbrädan om du vill ha justerbar konditionsträning för ben och puls. Upp- och nedsteg i valbar höjd passar step-pass och styrkeövningar.",
  },
  {
    product: dhFitlifeTrampolineProduct,
    path: "/traning/studsmatta",
    badge: "Skonsamt & kul",
    headline: "DH FitLife studsmatta – ledvänlig kondition",
    shortBody: "Välj studsmattan om du vill ha skonsam, rolig kondition. Studsandet är snällt mot knän och rygg och gör det lätt att hålla igång längre.",
  },
];

export const stepbradaEllerStudsmattaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/stepbrada","label":"Stepbräda","text":"Läs Elins recension av Reebok stepbräda."},{"href":"/traning/studsmatta","label":"Studsmatta","text":"Läs Elins recension av DH FitLife studsmatta."},{"href":"/traning/studsmatta-eller-hopprep","label":"Jämförelse","text":"Studsmatta eller hopprep? Se den jämförelsen."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för kondition hemma."}];
