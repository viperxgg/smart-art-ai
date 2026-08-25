import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  larochePosayCicaplastB5Product,
  cetaphilMoisturizingCreamProduct,
} from "@/lib/products";

export const cicaplastB5EllerCetaphilFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad används Cicaplast B5 till?","answer":"Cicaplast Baume B5+ är en lugnande balsam för hud som är torr, stram eller irriterad – till exempel av kyla, vind eller mycket handtvätt. Många använder den som punktinsats på händer, armbågar och torra partier i ansiktet."},{"question":"Kan Cetaphil användas i ansiktet?","answer":"Ja, Cetaphil Moisturising Cream är parfymfri och gjord för torr, känslig hud på både kropp och ansikte. Är din ansiktshud mycket lättirriterad kan du börja med ett tunt lager på kvällen och se hur huden svarar."},{"question":"Vilken är bäst mot torr vinterhud?","answer":"Som daglig förebyggande kräm är Cetaphil det enkla valet – den används morgon och kväll på hela kroppen. När huden redan blivit irriterad och stram gör Cicaplast B5+ mest nytta som intensivare punktinsats."},{"question":"Kan jag använda båda samtidigt?","answer":"Ja, det är en vanlig kombination: Cetaphil som daglig bas och Cicaplast B5+ på utsatta områden vid behov. De krockar inte med varandra."}];

export const cicaplastB5EllerCetaphilComparisonRows = [["Typ","Lugnande balsam (baume)","Klassisk fuktkräm"],["Bäst som","Punktinsats på irriterad hud","Daglig kräm för hela kroppen"],["Textur","Tjock, skyddande, dröjer kvar","Rik men lättare, absorberas snabbt"],["Nyckelinnehåll","Panthenol (B5), madecassoside","Glycerin, sweet almond oil"],["Passar","Känslig, stressad, vindpinad hud","Torr hud i vardagen, hela familjen"],["Parfymfri","Ja","Ja"],["Elins poäng","89/100","91/100"]] as const;

export const cicaplastB5EllerCetaphilPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: larochePosayCicaplastB5Product,
    path: "/skonhet/cicaplast-b5",
    badge: "Lugnande balsam",
    headline: "Cicaplast B5+ – när huden säger ifrån",
    shortBody: "Välj Cicaplast när huden är irriterad, rödflammig eller sliten av kyla och vind. Den tjocka balsamen med panthenol lugnar och stöttar hudens egen återhämtning – perfekt som punktinsats.",
  },
  {
    product: cetaphilMoisturizingCreamProduct,
    path: "/skonhet/fuktkram",
    badge: "Vardagsbas",
    headline: "Cetaphil – den enkla vardagskrämen",
    shortBody: "Välj Cetaphil som daglig bas för kropp och ansikte. Stor burk, parfymfri och rik utan att kladda – den håller torr hud mjuk genom hela värmesäsongen.",
  },
];

export const cicaplastB5EllerCetaphilRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/cicaplast-b5","label":"Cicaplast","text":"Läs Elins genomgång av Cicaplast Baume B5+."},{"href":"/skonhet/fuktkram","label":"Fuktkräm","text":"Läs Elins genomgång av Cetaphil Moisturising Cream."},{"href":"/skonhet/cerave-eller-cetaphil","label":"Jämförelse","text":"CeraVe eller Cetaphil – vilken rengöring passar dig?"},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
