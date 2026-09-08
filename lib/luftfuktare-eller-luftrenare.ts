import type { DecisionComparisonFaqItem, DecisionComparisonPick, DecisionComparisonRelatedLink } from "@/lib/decision-comparison";
import { levoitHumidifierProduct, levoitCore200sProduct } from "@/lib/products";

export const luftfuktareEllerLuftrenareFaqItems: DecisionComparisonFaqItem[] = [
  { question: "Vad skiljer luftfuktare från luftrenare?", answer: "Classic 300S tillför vatten till luften som dimma. Core 200S drar luft genom ett filter. Ingen av funktionerna ersätter fungerande ventilation eller åtgärdar orsaken till en fuktskada." },
  { question: "Ska jag köpa en luftfuktare om halsen känns torr?", answer: "Inte enbart utifrån känslan. Kontrollera luftfuktigheten och inomhusmiljön först. Tillför inte mer fukt om det redan finns kondens eller fuktproblem. Symtom visar inte i sig vilken apparat som behövs." },
  { question: "Vilket vatten och vilken skötsel kräver Classic 300S?", answer: "EU-manualen rekommenderar renat eller destillerat vatten och beskriver rengöringen. EPA rekommenderar att portabla luftfuktare töms, torkas och fylls med nytt vatten dagligen. Låg mineralhalt ersätter inte rengöring. Dra ur kontakten före skötsel och följ manualen; tillsätt inte eterisk olja i tanken." },
  { question: "Hjälper Core 200S vid allergi?", answer: "Filtrering kan minska vissa luftburna partiklar, men vi har inte underlag som visar symtomlindring av just denna modell. Den fångar inte alla föroreningar och ersätter inte åtgärder vid källan eller ventilation." },
  { question: "Behöver jag båda?", answer: "Bara om du har två separata, konstaterade behov. Att de gör olika saker är inte ett skäl att automatiskt köpa båda. Lägg först pengar och tid på att förstå problemet, rengöra befintliga ventiler och få eventuella byggnadsproblem utredda." },
];

export const luftfuktareEllerLuftrenareComparisonRows = [
  ["Modell", "Classic 300S, 6 liter, EU-manual", "Core 200S, brittisk tillverkarsida"],
  ["Funktion", "Tillför fukt", "Filtrerar luft i ett rum eller område"],
  ["Kontrollera före köp", "Uppmätt luftfuktighet och möjlighet till vattenbyte/rengöring", "Föroreningskälla, rum och kapacitet vid acceptabel ljudnivå"],
  ["Löpande behov", "Vatten och rengöring enligt manualen", "Rätt utbytesfilter och skötsel"],
  ["Viktig gräns", "Öka inte fukten vid kondens eller fuktproblem", "Ersätter inte ventilation eller åtgärder mot fuktskador"],
  ["Svensk butiksmatchning", "Variant och stickkontakt inte verifierade", "Variant, stickkontakt och filterutbud inte verifierade"],
] as const;

export const luftfuktareEllerLuftrenarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  { product: levoitHumidifierProduct, path: "/halsa/luftfuktare", badge: "Mät fukten först", headline: "Classic 300S – tillför fukt", shortBody: "Överväg först när det finns behov av mer fukt. Vattenbyte, rengöring och kontroll av kondens är en del av användningen." },
  { product: levoitCore200sProduct, path: "/halsa/luftrenare", badge: "Kompletterande filtrering", headline: "Core 200S – filtrerar luft", shortBody: "Överväg som komplement till att minska föroreningskällor och ventilera. Matcha kapacitet, ljudnivå och rätt utbytesfilter mot rummet." },
];

export const luftfuktareEllerLuftrenareRelatedLinks: DecisionComparisonRelatedLink[] = [
  { href: "/halsa/luftfuktare", label: "Produktguide", text: "Underlag för Classic 300S" },
  { href: "/halsa/luftrenare", label: "Produktguide", text: "Underlag för Core 200S" },
  { href: "/halsa", label: "Hälsa & vardag", text: "Fler produktguider" },
];
