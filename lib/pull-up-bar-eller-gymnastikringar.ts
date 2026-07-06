import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  ironGymPullUpProduct,
  gorillaRingsProduct,
} from "@/lib/products";

export const pullUpBarEllerGymnastikringarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på pull-up bar och gymnastikringar?","answer":"En pull-up bar är en fast stång, oftast i dörrkarmen, som är enkel för pull-ups och chins. Gymnastikringar hänger fritt och rör sig, vilket tränar fler muskler samtidigt eftersom du måste stabilisera dig mer."},{"question":"Vilken är bäst för nybörjare?","answer":"En pull-up bar är enklast att börja med eftersom den är stabil och du bara hänger och drar. Gymnastikringar är mer utmanande då de rör sig och kräver mer kontroll."},{"question":"Kan jag träna mer än pull-ups med ringar?","answer":"Ja, gymnastikringar ger många övningar för hela överkroppen – dips, rows, push-ups och mer – tack vare att de hänger fritt. En pull-up bar fokuserar mest på dragövningar."},{"question":"Håller en pull-up bar i dörrkarmen?","answer":"En pull-up bar för dörrkarm håller bra om karmen är stabil och du monterar den enligt anvisningen. Kolla att din dörrkarm tål belastningen innan du börjar."}];

export const pullUpBarEllerGymnastikringarComparisonRows = [["Snabba signaler","Fast stång; enkelt för pull-ups","Hänger fritt; utmanar stabiliteten"],["Bäst för","Pull-ups och chins direkt","Fler muskler och övningar"],["Nivå","Nybörjarvänligt","Mer utmanande"],["Montering","I dörrkarmen","Dörrkarm, tak eller utomhus"],["Variation","Mest drag-övningar","Många övningar för hela överkroppen"],["Tar med ut?","Nej","Ja – hängs var som helst stadigt"],["Elins poäng","84/100","86/100"]] as const;

export const pullUpBarEllerGymnastikringarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: ironGymPullUpProduct,
    path: "/traning/pull-up-bar",
    badge: "Enklast",
    headline: "Iron Gym pull-up bar – pull-ups i dörrkarmen",
    shortBody: "Välj pull-up baren om du vill ha en enkel, stabil lösning. Den sätts i dörrkarmen och gör det lätt att köra pull-ups och chins hemma.",
  },
  {
    product: gorillaRingsProduct,
    path: "/traning/gymnastikringar",
    badge: "Mest utmaning",
    headline: "Gorilla Sports gymnastikringar – fler muskler",
    shortBody: "Välj gymnastikringar om du vill utmana dig mer. De hänger fritt, tränar fler muskler samtidigt och ger fler övningar när du blir starkare.",
  },
];

export const pullUpBarEllerGymnastikringarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/pull-up-bar","label":"Pull-up bar","text":"Läs Elins recension av Iron Gym pull-up bar."},{"href":"/traning/gymnastikringar","label":"Gymnastikringar","text":"Läs Elins recension av Gorilla Sports gymnastikringar."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];
