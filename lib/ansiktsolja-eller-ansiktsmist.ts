import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  natureSpellFaceOilProduct,
  marioBadescuFacialSprayProduct,
} from "@/lib/products";

export const ansiktsoljaEllerAnsiktsmistFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad gör en ansiktsolja i rutinen?","answer":"Oljan används som sista steg och hjälper till att låsa in fukten från serum och kräm samtidigt som den ger en mjuk lyster. Några droppar räcker – värm dem mellan handflatorna och tryck in i huden."},{"question":"Kan man spraya ansiktsmist över makeup?","answer":"Ja, det är en av de vanligaste användningarna: ett lätt moln på armlängds avstånd friskar upp utan att förstöra makeupen. Många har flaskan på skrivbordet eller i väskan."},{"question":"Räcker en mist som fuktvård för torr hy?","answer":"Nej, misten är främst en uppfriskning för stunden. Torr hy behöver också produkter som håller kvar fukten – som en kräm och gärna en olja som sista steg på kvällen."},{"question":"Kan jag använda båda?","answer":"Absolut, de kompletterar varandra: misten under dagen när luften känns torr, oljan på kvällen som närande avslut. Det är två olika jobb snarare än ett val."}];

export const ansiktsoljaEllerAnsiktsmistComparisonRows = [["Typ","Närande olja, 30 ml","Uppfriskande spray, 236 ml"],["Bäst för","Torr, glåmig hy som vill ha lyster","Snabb fräschör under dagen"],["När i rutinen","Sista steget på kvällen","När som helst – även över makeup"],["Känsla","Mjuk, närande finish","Lätt, doftande dimma"],["Att veta","Betyget bygger än så länge på få omdömen","Mer känsla än djupverkande vård"],["Elins poäng","78/100","80/100"]] as const;

export const ansiktsoljaEllerAnsiktsmistPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: natureSpellFaceOilProduct,
    path: "/skonhet/ansiktsolja",
    badge: "Närande vård",
    headline: "Nature Spell Vitamin Boost – kvällens sista steg",
    shortBody: "Välj oljan när huden känns torr och glåmig: några droppar över nattkrämen låser in fukten och ger lyster till morgonen.",
  },
  {
    product: marioBadescuFacialSprayProduct,
    path: "/skonhet/ansiktsmist",
    badge: "Snabb uppfriskning",
    headline: "Mario Badescu Facial Spray – dagens lilla paus",
    shortBody: "Välj misten för ögonblicken: en doftande spray med aloe och rosvatten som friskar upp över makeupen och vid torr inomhusluft.",
  },
];

export const ansiktsoljaEllerAnsiktsmistRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/ansiktsolja","label":"Ansiktsolja","text":"Läs Elins genomgång av Nature Spell Vitamin Boost."},{"href":"/skonhet/ansiktsmist","label":"Ansiktsmist","text":"Läs Elins genomgång av Mario Badescu Facial Spray."},{"href":"/skonhet/centella-eller-propolis","label":"Jämförelse","text":"Centella eller propolis för känslig hösthy?"},{"href":"/skonhet/niacinamide-serum","label":"Niacinamide","text":"Milt serum för jämnare hudton."}];
