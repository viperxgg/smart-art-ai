import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  bodymateYogablockProduct,
  bodymateYogastrapProduct,
} from "@/lib/products";

export const yogablockEllerYogabalteFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på yogablock och yogabälte?","answer":"Ett yogablock ger stöd och höjd, till exempel så du når golvet lättare eller håller balansen. Ett yogabälte förlänger räckvidden så du kan komma djupare i en stretch utan att tvinga rörelsen."},{"question":"Vilket behöver jag som nybörjare?","answer":"Många nybörjare har nytta av båda. Blocket hjälper i positioner där du inte når golvet, och bältet hjälper i stretchövningar där du inte når fötterna. Börjar du med ett, välj efter var du känner dig mest begränsad."},{"question":"Kan ett yogabälte hjälpa mig bli rörligare?","answer":"Ja, bältet låter dig komma in i en stretch med god hållning utan att runda ryggen, vilket gör det lättare att jobba med rörligheten över tid. Tvinga aldrig – använd bältet för att gå lagom långt."},{"question":"Behöver jag båda?","answer":"Inte nödvändigtvis, men de kompletterar varandra bra och tar liten plats. Vill du ha maximal hjälp i både balans och stretch är båda ett smart och billigt tillägg."}];

export const yogablockEllerYogabalteComparisonRows = [["Snabba signaler","Ger stöd och höjd","Förlänger räckvidden i stretch"],["Bäst för","Balans och att nå golvet","Djupare stretch, nå fötterna"],["Typ av hjälp","Stabilitet","Räckvidd"],["Nybörjarvänligt","Ja","Ja"],["Plats","Litet block","Vikbart band – tar nästan ingen plats"],["Kompletterar varandra","Ja","Ja"],["Elins poäng","84/100","84/100"]] as const;

export const yogablockEllerYogabaltePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: bodymateYogablockProduct,
    path: "/traning/yogablock",
    badge: "Stöd & höjd",
    headline: "BODYMATE yogablock – nå golvet och håll balansen",
    shortBody: "Välj yogablocket om du vill ha stöd och höjd. Det hjälper dig nå golvet i positioner där du annars inte når, och ger stabilitet i balansövningar.",
  },
  {
    product: bodymateYogastrapProduct,
    path: "/traning/yogabalte",
    badge: "Längre räckvidd",
    headline: "BODYMATE yogabälte – kom djupare i stretch",
    shortBody: "Välj yogabältet om du vill förlänga räckvidden i stretch. Det hjälper dig nå fötterna och komma djupare utan att runda ryggen eller tvinga rörelsen.",
  },
];

export const yogablockEllerYogabalteRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/yogablock","label":"Yogablock","text":"Läs Elins recension av BODYMATE yogablock."},{"href":"/traning/yogabalte","label":"Yogabälte","text":"Läs Elins recension av BODYMATE yogabälte."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för yoga och rörlighet."},{"href":"/traning/tjock-eller-tunn-yogamatta","label":"Jämförelse","text":"Tjock eller tunn yogamatta? Komfort mot balans – välj underlag först."}];
