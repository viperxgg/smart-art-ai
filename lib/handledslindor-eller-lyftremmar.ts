import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  asiproWristWrapsProduct,
  fitgriffStrapsProduct,
} from "@/lib/products";

export const handledslindorEllerLyftremmarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på handledslindor och lyftremmar?","answer":"Lindor viras runt handleden och stödjer leden när du pressar vikten ifrån dig, som i bänkpress. Remmar loopas runt handled och stång och hjälper dig hålla kvar vikten när du drar, som i marklyft. Stöd mot grepp – två helt olika jobb."},{"question":"Vilken ska jag köpa först?","answer":"Den som matchar ditt tyngsta lyft. Är bänken ditt huvudlyft och handleden känns ostadig – börja med lindor. Är marklyften störst och greppet tar slut först – börja med remmar. Många tunga lyftare har till slut båda i väskan."},{"question":"Blir greppet svagare av att använda remmar?","answer":"Inte om du använder dem smart. Kör de lätta seten utan remmar så att greppet får jobba, och spara remmarna till de tyngsta seten där greppet annars begränsar. Då tränas både grepp och rygg fullt ut."},{"question":"Hur hårt ska lindorna sitta?","answer":"Så hårt att handleden hålls rak under pressen, men lossa gärna mellan seten. Många lindar hårdare på tunga singlar och lite lösare på högre repantal – testa dig fram till vad som känns stabilt utan att domna."}];

export const handledslindorEllerLyftremmarComparisonRows = [["Snabba signaler","Lindas runt handleden; justerbart stöd","Loopas runt stången; vadderade"],["Jobb","Stabiliserar handleden","Förstärker greppet"],["Bäst i","Bänkpress, axelpress, dips","Marklyft, rodd, shrugs"],["Löser","Handled som viker sig under press","Grepp som släpper före ryggen"],["Passar","Pressdagar och tunga singlar","Dragdagar och höga repantal"],["Att tänka på","Linda lagom hårt mellan seten","Använd på tunga set, inte varje set"],["Elins poäng","85/100","75/100"]] as const;

export const handledslindorEllerLyftremmarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: asiproWristWrapsProduct,
    path: "/traning/handledslindor",
    badge: "Stöd vid press",
    headline: "ASIPRO handledslindor – stabil led i bänken",
    shortBody: "Välj lindor när handleden viker sig eller känns ostadig i bänkpress, axelpress och dips. De lindas åt så hårt du vill och håller leden rak genom hela pressen.",
  },
  {
    product: fitgriffStrapsProduct,
    path: "/traning/lifting-straps",
    badge: "Grepp vid drag",
    headline: "Fitgriff lyftremmar – greppet som håller passet ut",
    shortBody: "Välj remmar när greppet släpper före ryggen i marklyft, rodd och shrugs. Vadderingen skonar handflatorna och stången ligger kvar tills sista repet är draget.",
  },
];

export const handledslindorEllerLyftremmarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/handledslindor","label":"Handledslindor","text":"Läs Elins genomgång av ASIPRO handledslindor."},{"href":"/traning/lifting-straps","label":"Lyftremmar","text":"Läs Elins genomgång av Fitgriff lifting straps."},{"href":"/traning/knaskydd-eller-lyftarbalte","label":"Jämförelse","text":"Knäskydd eller lyftarbälte? Mer stöd för tunga underkroppspass."},{"href":"/traning/lyftremmar-eller-traningshandskar","label":"Jämförelse","text":"Lyftremmar eller träningshandskar? Grepp mot skav."}];
