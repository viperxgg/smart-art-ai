import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  dhFitlifeTrampolineProduct,
  portentumHoppRepProduct,
} from "@/lib/products";

export const studsmattaEllerHopprepFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på studsmatta och hopprep?","answer":"En fitness-studsmatta ger skonsam, ledvänlig kondition där du studsar mjukt, medan ett hopprep ger snabb, effektiv pulsträning men med mer stöt i varje hopp. Båda tränar kondition hemma."},{"question":"Vilken är skonsammast för knän och rygg?","answer":"Studsmattan är klart skonsammast eftersom mattan tar upp stöten. Hopprep ger mer belastning i varje landning, vilket kan kännas i knän och vader om du hoppar länge."},{"question":"Vilken tar minst plats?","answer":"Hopprepet tar minst plats – det ryms i fickan och kan tas med överallt. En studsmatta kräver en bit golv men är fortfarande lätt att ställa undan."},{"question":"Vilken ger bäst konditionsträning?","answer":"Båda höjer pulsen effektivt. Hopprep är väldigt effektivt på kort tid, medan studsmattan gör det lättare att hålla igång längre eftersom det känns skonsammare och roligare."}];

export const studsmattaEllerHopprepComparisonRows = [["Snabba signaler","Skonsam studsträning; ledvänlig","Billig hoppträning; snabb puls"],["Ledvänligt","Ja – mjuk studs","Mer stöt i varje hopp"],["Plats","Tar en bit golv","Tar nästan ingen plats"],["Pris","Mellan","Budget"],["Kul-faktor","Hög – lekfullt","Enkelt och rakt på"],["Ta med på resa","Nej","Ja – ryms i fickan"],["Elins poäng","86/100","84/100"]] as const;

export const studsmattaEllerHopprepPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: dhFitlifeTrampolineProduct,
    path: "/traning/studsmatta",
    badge: "Skonsamt & kul",
    headline: "DH FitLife studsmatta – ledvänlig kondition",
    shortBody: "Välj studsmattan om du vill ha skonsam, rolig kondition. Studsandet är snällt mot knän och rygg och gör det lätt att hålla igång längre.",
  },
  {
    product: portentumHoppRepProduct,
    path: "/traning/hopprep",
    badge: "Billigt & effektivt",
    headline: "PORTENTUM hopprep – hög puls på minimal yta",
    shortBody: "Välj hopprepet om du vill ha maximal effekt på minimal plats och budget. Det ger snabbt hög puls och ryms i fickan.",
  },
];

export const studsmattaEllerHopprepRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/studsmatta","label":"Studsmatta","text":"Läs Elins recension av DH FitLife studsmatta."},{"href":"/traning/hopprep","label":"Hopprep","text":"Läs Elins recension av PORTENTUM hopprep."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];
