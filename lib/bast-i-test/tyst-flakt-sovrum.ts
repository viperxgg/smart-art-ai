import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { bedroomFanDecision, bedroomFanPaths } from "@/lib/bedroom-fan-decision";

export const tystFlaktSovrum: DecisionGuide = {
  path: "/guider/tyst-flakt-sovrum",
  title: "Vilken fläkt passar ditt sovrum?",
  intro: "Börja med platsen, ljudet du accepterar och vilka reglage du behöver. Här skiljer vi verifierade modelluppgifter från sådant som ännu är osäkert för fem fläktar. Vi har inget gemensamt ljudtest och utser därför ingen tystast.",
  decision: bedroomFanDecision,
  productPaths: bedroomFanPaths,
  questions: [
    { question: "Kan jag välja efter lägsta dB-tal?", answer: "Inte utan samma mätstorhet, hastighet och mätvillkor. Ljudeffekt och ljudtryck vid ett visst avstånd är olika uppgifter. Be om modellens fullständiga mätuppgifter; vi har inte ett jämförbart underlag för dessa fem." },
    { question: "Betyder nattläge att displayen slocknar?", answer: "Det behöver kontrolleras för exakt modell. Namnet nattläge visar inte i sig hur ljus, pip eller hastighet fungerar. Kontrollera manualen och hur inställningarna beter sig när du startar om fläkten." },
    { question: "När är en fjärrkontroll värd att prioritera?", answer: "När du faktiskt behöver ändra inställningarna från sängen. Om du alltid ställer in fläkten före läggdags kan vanliga reglage räcka. Vi har inte verifierat räckvidd eller knappljud." },
    { question: "Varför saknas bilder och köpknappar?", answer: "Vi har ännu inte verifierat bildrättigheter och butikernas exakta varianter för dessa beslutsunderlag. Saknade uppgifter ersätts inte med en bild av en liknande modell eller ett köpråd." },
  ],
  related: [],
};
