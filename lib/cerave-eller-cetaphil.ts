import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  ceraveHydratingCleanserProduct,
  cetaphilGentleCleanserProduct,
} from "@/lib/products";

export const ceraveEllerCetaphilFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på CeraVe och Cetaphil?","answer":"CeraVe rengöring innehåller ceramider och hyaluronsyra som hjälper huden att kännas återfuktad, vilket passar torr hud. Cetaphil är extra mild och avskalad, vilket gör den till ett tryggt val för känslig hud som lätt blir irriterad."},{"question":"Vilken är bäst för torr hud?","answer":"CeraVe är oftast det bättre valet för torr hud eftersom ceramiderna hjälper hudbarriären och den känns mer återfuktande. Cetaphil rengör milt men är mer neutral."},{"question":"Vilken är bäst för känslig hud?","answer":"Cetaphil brukar rekommenderas för känslig, reaktiv hud tack vare den milda, avskalade formeln. CeraVe är också skonsam men innehåller fler aktiva ingredienser."},{"question":"Kan jag använda dem morgon och kväll?","answer":"Ja, båda är gjorda för daglig användning morgon och kväll. Skölj med ljummet vatten och klappa huden torr efteråt."}];

export const ceraveEllerCetaphilComparisonRows = [["Snabba signaler","Ceramider + hyaluronsyra; återfuktar","Extra mild och avskalad; för känslig hud"],["Bäst för","Torr och normal hud","Känslig, lättirriterad hud"],["Känsla","Krämig, huden känns mjuk efteråt","Väldigt mild, enkel och neutral"],["Skummar","Nej – len gel/kräm","Nej – mild lotion-rengöring"],["Använd morgon/kväll","Ja","Ja"],["Doft","Parfymfri","Mild/parfymfri"],["Elins poäng","88/100","86/100"]] as const;

export const ceraveEllerCetaphilPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: ceraveHydratingCleanserProduct,
    path: "/skonhet/cerave-rengoring",
    badge: "Återfuktande",
    headline: "CeraVe Hydrating Cleanser – för torr hud",
    shortBody: "Välj CeraVe om du vill att rengöringen ska återfukta. Ceramider och hyaluronsyra gör den skön för torr och normal hud som lätt känns stram.",
  },
  {
    product: cetaphilGentleCleanserProduct,
    path: "/skonhet/cetaphil-rengoring",
    badge: "Extra mild",
    headline: "Cetaphil Gentle Cleanser – för känslig hud",
    shortBody: "Välj Cetaphil om du har känslig eller lättirriterad hud. Den är avskalad och mild, gjord för att rengöra utan att reta huden.",
  },
];

export const ceraveEllerCetaphilRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/micellart-vatten","label":"Micellärt vatten","text":"Snabb rengöring: Elins val av micellärt vatten."},{"href":"/skonhet/cerave-rengoring","label":"CeraVe","text":"Läs Elins recension av CeraVe Hydrating Cleanser."},{"href":"/skonhet/cetaphil-rengoring","label":"Cetaphil","text":"Läs Elins recension av Cetaphil Gentle Cleanser."},{"href":"/skonhet/hyaluronsyra-serum","label":"Hyaluronsyra","text":"Nästa steg: återfuktande serum."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
