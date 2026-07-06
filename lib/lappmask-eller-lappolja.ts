import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  laneigeLipSleepingMaskProduct,
  diorLipGlowOilProduct,
} from "@/lib/products";

export const lappmaskEllerLappoljaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på läppmask och läppolja?","answer":"En läppmask är en tjock nattbehandling som återfuktar läpparna djupt medan du sover. En läppolja är en lätt, glansig vård du bär på dagen som ger lyster och en len känsla."},{"question":"Vilken är bäst för torra läppar?","answer":"Läppmasken är bäst för riktigt torra eller spruckna läppar eftersom den återfuktar djupt över natten. Läppoljan vårdar också men är lättare och mer inriktad på glans."},{"question":"Kan jag ha läppolja ovanpå läppstift?","answer":"Ja, en läppolja fungerar fint ovanpå läppstift för en glansig finish, eller för sig själv för en naturlig glow. Läppmasken används oftast ensam på natten."},{"question":"Kan jag använda båda?","answer":"Ja, ett vanligt upplägg är läppmask på natten för djup återfuktning och läppolja på dagen för glans och vård. Då är läpparna både mjuka och fina."}];

export const lappmaskEllerLappoljaComparisonRows = [["Snabba signaler","Tjock nattmask; djup återfuktning","Lätt olja; glans och lyster på dagen"],["När","På natten","På dagen"],["Känsla","Rik och närande","Lätt och glansig"],["Ger glow?","Nej – vårdande","Ja – fin lyster"],["Bäst för","Torra, spruckna läppar","Daglig glans och vård"],["Bär ovanpå läppstift?","Nej","Ja, ofta"],["Elins poäng","88/100","84/100"]] as const;

export const lappmaskEllerLappoljaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: laneigeLipSleepingMaskProduct,
    path: "/skonhet/laneige-lappmask",
    badge: "Djup nattvård",
    headline: "LANEIGE läppmask – mjuka läppar till morgonen",
    shortBody: "Välj läppmasken om dina läppar ofta är torra. Den tjocka nattbehandlingen återfuktar medan du sover så läpparna känns mjuka när du vaknar.",
  },
  {
    product: diorLipGlowOilProduct,
    path: "/skonhet/lip-oil",
    badge: "Glans för dagen",
    headline: "Dior lip oil – lätt, glansig vård med lyster",
    shortBody: "Välj läppoljan om du vill ha en lätt, glansig vård med lyster på dagen. Den känns len, ger en fin glow och kan bäras för sig själv eller ovanpå läppstift.",
  },
];

export const lappmaskEllerLappoljaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/laneige-lappmask","label":"Läppmask","text":"Läs Elins recension av LANEIGE läppmask."},{"href":"/skonhet/lip-oil","label":"Läppolja","text":"Läs Elins recension av Dior lip oil."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins läpp- och hudvårdsval."}];
