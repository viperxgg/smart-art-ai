import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { indoorAirDecision } from "@/lib/indoor-air-decision";

export const luftfuktareEllerLuftrenareFaqItems = [
  { question: "Vad skiljer luftfuktare från luftrenare?", answer: "Classic 300S tillför vatten till luften som dimma. Core 200S drar luft genom ett filter. Ingen av funktionerna ersätter fungerande ventilation eller åtgärdar orsaken till en fuktskada." },
  { question: "Ska jag köpa en luftfuktare om halsen känns torr?", answer: "Inte enbart utifrån känslan. Kontrollera luftfuktigheten och inomhusmiljön först. Tillför inte mer fukt om det redan finns kondens eller fuktproblem. Symtom visar inte i sig vilken apparat som behövs." },
  { question: "Vilket vatten och vilken skötsel kräver Classic 300S?", answer: "EU-manualen rekommenderar renat eller destillerat vatten och beskriver rengöringen. EPA rekommenderar att portabla luftfuktare töms, torkas och fylls med nytt vatten dagligen. Låg mineralhalt ersätter inte rengöring. Dra ur kontakten före skötsel och följ manualen; tillsätt inte eterisk olja i tanken." },
  { question: "Hjälper Core 200S vid allergi?", answer: "Filtrering kan minska vissa luftburna partiklar, men vi har inte underlag som visar symtomlindring av just denna modell. Den fångar inte alla föroreningar och ersätter inte åtgärder vid källan eller ventilation." },
  { question: "Behöver jag båda?", answer: "Bara om du har två separata, konstaterade behov. Att de gör olika saker är inte ett skäl att automatiskt köpa båda. Lägg först pengar och tid på att förstå problemet, rengöra befintliga ventiler och få eventuella byggnadsproblem utredda." },
];

export const indoorAirGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/luftfuktare-eller-luftrenare",
  title: "Luftfuktare eller luftrenare – behöver du någon av dem?",
  intro: "Classic 300S tillför fukt, Core 200S filtrerar luft. Börja med att förstå problemet: behöver luften mer fukt, färre partiklar eller bättre ventilation? Skötseln ingår i valet.",
  decision: indoorAirDecision,
  productPaths: ["/halsa/luftfuktare", "/halsa/luftrenare"],
  questions: luftfuktareEllerLuftrenareFaqItems,
  related: [
    { href: "/halsa/ultraljud-eller-evaporativ-luftfuktare", text: "Behöver du fukt: Classic 300S eller Beurer LB 200?" },
    { href: "/halsa/levoit-eller-philips-luftrenare", text: "Behöver du filtrering: Core 200S eller Philips AC0650/10?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
  ],
};
