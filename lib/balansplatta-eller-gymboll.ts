import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  gorillaBalansplattaProduct,
  gorillaGymbollProduct,
} from "@/lib/products";

export const balansplattaEllerGymbollFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på balansplatta och gymboll?","answer":"En balansplatta är liten och utmanar balansen med små, kontrollerade rörelser. En gymboll är stor och används för fler övningar för bål, rygg och stabilitet, och kan även fungera som sittboll."},{"question":"Vilken är bäst för balansträning?","answer":"Balansplattan är mest fokuserad på just balans och fotled, vilket gör den bra som komplement och för rehab. Gymbollen tränar också stabilitet men är mer mångsidig."},{"question":"Kan jag sitta på en gymboll vid skrivbordet?","answer":"Ja, många använder gymbollen som sittboll för att få in mer rörelse och aktivera bålen under dagen. Välj rätt storlek efter din längd så du sitter bekvämt."},{"question":"Vilken tar minst plats?","answer":"Balansplattan tar klart minst plats och är lätt att ställa undan. En gymboll är stor och tar mer utrymme, även om du kan tömma den på luft för förvaring."}];

export const balansplattaEllerGymbollComparisonRows = [["Snabba signaler","Liten; utmanar balansen kontrollerat","Stor; många bål- och stabilitetsövningar"],["Bäst för","Balans, fotled, rehab","Bål, rygg, stabilitet, sittboll"],["Storlek","Kompakt","Stor – tar plats"],["Mångsidighet","Fokuserad","Bred – många övningar"],["Extra användning","Nej","Sittboll vid skrivbordet"],["Nybörjarvänligt","Ja","Ja"],["Elins poäng","84/100","84/100"]] as const;

export const balansplattaEllerGymbollPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: gorillaBalansplattaProduct,
    path: "/traning/balansplatta",
    badge: "Fokuserad balans",
    headline: "Gorilla balansplatta – träna balansen på liten yta",
    shortBody: "Välj balansplattan om du vill träna balans och fotled med kontrollerade rörelser på liten yta. Bra som komplement och för rehab.",
  },
  {
    product: gorillaGymbollProduct,
    path: "/traning/gymboll",
    badge: "Mångsidig",
    headline: "Gorilla gymboll – bål, rygg och sittboll",
    shortBody: "Välj gymbollen om du vill ha ett mångsidigt redskap för bål, rygg och stabilitet. Du kan även sitta på den vid skrivbordet för mer rörelse.",
  },
];

export const balansplattaEllerGymbollRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/balansplatta","label":"Balansplatta","text":"Läs Elins recension av Gorilla balansplatta."},{"href":"/traning/gymboll","label":"Gymboll","text":"Läs Elins recension av Gorilla gymboll."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för bål och balans."}];
