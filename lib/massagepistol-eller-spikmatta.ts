import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  beurerMassagepistolProduct,
  mattibiAcupressureProduct,
} from "@/lib/products";

export const massagepistolEllerSpikmattaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på massagepistol och spikmatta?","answer":"En massagepistol ger riktad, aktiv bearbetning av spända muskler där du styr själv. En spikmatta är passiv – du ligger på den och låter trycket från spikarna hjälpa kroppen att slappna av."},{"question":"Vilken är bäst efter träning?","answer":"Massagepistolen passar bäst efter träning eftersom du kan rikta den mot specifika, spända muskler. Spikmattan är mer till för allmän avslappning och nedvarvning."},{"question":"Vilken är bäst för att varva ner på kvällen?","answer":"Spikmattan, eftersom den är passiv och tyst. Du lägger dig ner, andas lugnt och låter kroppen mjukna – ett skönt kvällsritual innan sömnen."},{"question":"Kan jag ha nytta av båda?","answer":"Ja, många använder massagepistolen för riktad bearbetning efter träning och spikmattan för passiv avslappning på kvällen. De kompletterar varandra bra."}];

export const massagepistolEllerSpikmattaComparisonRows = [["Snabba signaler","Riktad, aktiv muskelbearbetning","Passiv avslappning; du ligger ner"],["Bäst för","Spända muskler efter träning","Nedvarvning och lugn på kvällen"],["Aktiv/passiv","Aktiv – du styr","Passiv – du ligger stilla"],["Använd när","Efter träning eller stelhet","På kvällen för att varva ner"],["Ljud","Motorljud","Helt tyst"],["Batteri behövs?","Ja – laddningsbar","Nej"],["Elins poäng","86/100","84/100"]] as const;

export const massagepistolEllerSpikmattaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: beurerMassagepistolProduct,
    path: "/halsa/massagepistol/beurer-mg-99",
    badge: "Aktiv & riktad",
    headline: "Beurer MG 99 massagepistol – bearbeta spända muskler",
    shortBody: "Välj massagepistolen om du vill bearbeta spända muskler riktat. Du styr själv var och hur mycket, skönt efter träning eller en lång dag.",
  },
  {
    product: mattibiAcupressureProduct,
    path: "/halsa/spikmatta",
    badge: "Passiv avslappning",
    headline: "Mattibi spikmatta – ligg ner och varva ner",
    shortBody: "Välj spikmattan om du vill slappna av passivt. Du lägger dig ner och låter trycket från spikarna hjälpa kroppen att mjukna – ett lugnt kvällsritual.",
  },
];

export const massagepistolEllerSpikmattaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/massagepistol/beurer-mg-99","label":"Massagepistol","text":"Läs Elins recension av Beurer MG 99."},{"href":"/halsa/spikmatta","label":"Spikmatta","text":"Läs Elins recension av Mattibi spikmatta."},{"href":"/traning/foam-roller-eller-massagepistol","label":"Jämförelse","text":"Foam roller eller massagepistol? Se den jämförelsen."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för återhämtning."}];
