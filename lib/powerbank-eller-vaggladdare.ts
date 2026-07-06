import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  ankerZoloPowerbankProduct,
  anker735VaggladdareProduct,
} from "@/lib/products";

export const powerbankEllerVaggladdareFaqItems: DecisionComparisonFaqItem[] = [{"question":"Behöver jag både powerbank och väggladdare?","answer":"Många reser med båda: väggladdaren laddar upp allt på kvällen på hotellrummet, och powerbanken räddar dagen när du är ute utan uttag. Ska du bara välja en, utgå från hur ofta du är borta från ett uttag."},{"question":"Vilken laddar min laptop?","answer":"Väggladdaren (Anker 735, 65W) laddar många laptops via USB-C. En powerbank är främst gjord för mobil och mindre enheter, inte för att ladda tunga laptops."},{"question":"Får jag ta med powerbank i flyget?","answer":"Powerbanks ska tas med i handbagaget och får inte checkas in. Kolla alltid ditt flygbolags aktuella regler för kapacitet och antal. En väggladdare har inga sådana begränsningar."},{"question":"Vilken är bäst på festival?","answer":"Powerbanken, eftersom det sällan finns uttag på en festival. Ladda den full innan du åker så håller mobilen hela dagen."}];

export const powerbankEllerVaggladdareComparisonRows = [["Snabba signaler","Ström utan uttag; bärbar; inbyggda kablar","Snabb laddning vid uttag; laddar laptop; kompakt"],["Bäst för","Festival, flyg och långa dagar borta från uttag","Hotellrum och hemma – ladda flera enheter snabbt"],["Kräver uttag?","Nej – har egen laddning i batteriet","Ja – sitter i vägguttaget"],["Laddar laptop?","Mobil och smått, inte tunga laptops","Ja, många laptops via USB-C (65W)"],["Vikt & plats","Tyngre – ett laddat batteri väger","Lätt och liten med hopfällbara stift"],["I flyget","Ska med i handbagaget, inte checkas in","Inga begränsningar"],["Elins poäng","84/100","86/100"]] as const;

export const powerbankEllerVaggladdarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: ankerZoloPowerbankProduct,
    path: "/sommar/resa/powerbank",
    badge: "Ström utan uttag",
    headline: "Anker Zolo powerbank – ladda var du än är",
    shortBody: "Välj powerbanken om du ofta är borta från uttag. Med inbyggda kablar och snabbladdning håller den mobilen igång på festivalen, flyget eller road tripen.",
  },
  {
    product: anker735VaggladdareProduct,
    path: "/sommar/resa/vaggladdare",
    badge: "En laddare för allt",
    headline: "Anker 735 väggladdare – snabbt vid uttaget",
    shortBody: "Välj väggladdaren om du mest laddar på hotellrummet. Den laddar mobil och laptop från tre portar i ett kompakt format och ersätter flera laddare i väskan.",
  },
];

export const powerbankEllerVaggladdareRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/powerbank","label":"Powerbank","text":"Läs Elins recension av Anker Zolo powerbank."},{"href":"/sommar/resa/vaggladdare","label":"Väggladdare","text":"Läs Elins recension av Anker 735 väggladdare."},{"href":"/sommar/resa/usb-c-kabel","label":"USB-C-kabel","text":"Rätt kabel till laddaren och powerbanken."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins smarta reseprylar."}];
