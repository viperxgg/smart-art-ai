import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  loopQuietProduct,
  magicteamWhiteNoiseProduct,
} from "@/lib/products";

export const oronpropparEllerWhiteNoiseFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på öronproppar och white noise?","answer":"Öronproppar dämpar ljudet du hör så det blir tystare. En white noise-maskin gör tvärtom – den lägger till ett jämnt bakgrundsljud som maskerar och suddar ut störande, plötsliga ljud."},{"question":"Vilken är bäst mot snarkningar?","answer":"Öronproppar dämpar snarkljudet direkt och är smidiga att sova med. En white noise-maskin kan hjälpa genom att maskera snarkningarna med ett jämnare ljud, men dämpar dem inte lika direkt."},{"question":"Vilken är bäst på resan?","answer":"Öronproppar, eftersom de ryms i fickan och funkar överallt – på flyget, hotellet eller vandrarhemmet. En white noise-maskin är mindre smidig att bära med."},{"question":"Kan jag använda båda?","answer":"Ja, vissa kombinerar öronproppar med ett svagt white noise för att både dämpa och maskera. Testa dig fram till vad din sömn mår bäst av."}];

export const oronpropparEllerWhiteNoiseComparisonRows = [["Snabba signaler","Dämpar ljudet du hör","Lägger till jämnt maskerande ljud"],["Bäst för","Tystnad, resa, mot snarkningar","Somna till ett lugnande sus"],["Metod","Blockerar/dämpar","Maskerar med bakgrundsljud"],["Ta med på resa","Ja – ryms i fickan","Mindre smidigt att bära"],["Stör partner?","Nej","Kan höras i rummet"],["Bra mot plötsliga ljud","Dämpar dem","Maskerar dem"],["Elins poäng","88/100","84/100"]] as const;

export const oronpropparEllerWhiteNoisePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: loopQuietProduct,
    path: "/halsa/oronproppar",
    badge: "Dämpar ljud",
    headline: "Loop Quiet öronproppar – tystare runt omkring",
    shortBody: "Välj öronproppar om du vill ha det så tyst som möjligt. De dämpar ljudet, är sköna att sova med och lätta att ta med på resan eller mot snarkningar.",
  },
  {
    product: magicteamWhiteNoiseProduct,
    path: "/halsa/white-noise",
    badge: "Maskerar ljud",
    headline: "Magicteam white noise – jämnt sömnljud",
    shortBody: "Välj en white noise-maskin om du somnar bäst till ett jämnt ljud. Den lägger ett lugnande sus som suddar ut plötsliga störande ljud som trafik och grannar.",
  },
];

export const oronpropparEllerWhiteNoiseRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/sovmask","label":"Sovmask","text":"Sov ännu bättre: Elins val av sovmask."},{"href":"/halsa/oronproppar","label":"Öronproppar","text":"Läs Elins recension av Loop Quiet öronproppar."},{"href":"/halsa/white-noise","label":"White noise","text":"Läs Elins recension av Magicteam white noise."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för sömn och avkoppling."},{"href":"/halsa/massagepistol-eller-spikmatta","label":"Återhämtning","text":"Massagepistol eller spikmatta? Se den jämförelsen."}];
