import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const dryShampooDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "moroccanoil-torrschampo", model: "Moroccanoil Dry Shampoo Light Tones",
    variant: "Light Tones, inte Dark Tones eller Treatment Light-olja. Underlaget gäller tillverkarens amerikanska produktsida och variantförklaring. Den svenska 205 ml-burken och dess aktuella ingredienslista är ännu inte matchade.",
    chooseIf: "du vill absorbera överskottsfett i torrt, ljust hår mellan vanliga tvättar och vill pröva de violetta undertonerna som tillverkaren beskriver. Den granskade formulan innehåller risstärkelse och parfym.",
    avoidIf: "du behöver tvätta bort smuts och produktrester, söker en parfymfri produkt eller väntar dig hårfärgning. Tillverkaren beskriver inte Light Tones som en färg som ska ligga kvar i håret. Vi har inte visat att den lämnar färre rester än ett billigare alternativ.",
    sourceIds: ["S1", "S2", "S3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En egenskap du faktiskt använder saknas i ditt nuvarande torrschampo, till exempel en nyansanpassad formula. Vi har inte jämfört en namngiven budgetprodukt, doft, puderrester eller kostnad per användning och kan därför inte utse premium till bättre värde.",
  noPurchaseWhen: "Din vanliga tvättrutin eller det torrschampo du redan har fungerar. Lägg inte till en extra spray enbart för att priset eller varumärket antyder bättre finish.",
  swedishContext: "Kontrollera Light Tones, volym och ingredienser på den svenska förpackningen. USA-sidans storlekar är inte bevis för en svensk 205 ml-variant. Jämför samma mängd och totalpris först när ett erbjudande är matchat.",
  testing: "Vi har läst tillverkarens information och AAD:s hudläkargranskade råd. Vi har inte provat absorption, färgton, doft, rester eller hårbottenkomfort. Marknadsföringen om rengöring ersätter inte behovet av schampo och vatten.",
  limitations: "Tillverkaren anger att skaka, spraya på torra rötter från 15–20 cm, låta torka, massera och borsta ur. AAD rekommenderar små mängder där det behövs och fortsatt vanlig hårtvätt. Sluta använda vid klåda eller sveda. Läs även burkens aerosolvarningar. Bildrättigheter och butiksmatchning återstår.",
  sources: [
    { id: "S1", title: "Moroccanoil USA – Dry Shampoo Light Tones", url: "https://www.moroccanoil.com/products/dry-shampoo-light-tones", checkedAt: "2026-09-09", supports: "Risstärkelse, parfym, violetta undertoner och användning. USA-formula och storlekar; förpackningen styr aktuell innehållslista. Ingen egen effektmätning." },
    { id: "S2", title: "Moroccanoil – skillnaden mellan Light och Dark Tones", url: "https://customerservice.moroccanoil.com/hc/en-us/articles/22240118070167-Difference-between-the-Dry-Shampoo-Light-and-Dark-Tones", checkedAt: "2026-09-09", supports: "Light Tones har violetta undertoner; produkterna är inte avsedda att lämna färg på håret. Tillverkarens förklaring, inte ett jämförande test." },
    { id: "S3", title: "American Academy of Dermatology – råd om torrschampo", url: "https://www.aad.org/public/everyday-care/hair-scalp-care/hair/dry-shampoo-best-results", checkedAt: "2026-09-09", supports: "Torrschampo absorberar olja men ersätter inte tvätt med schampo och vatten. Små mängder, urborstning och avbrytande vid irritation. Generella råd, ingen Moroccanoil-produktprövning." },
  ],
};
export const dryShampooValueGuide: DecisionGuide = {
  path: "/guider/torrschampo-dyrt-vs-billigt",
  title: "Dyrare torrschampo – vilken egenskap saknar du?",
  intro: "Betala för en egenskap du behöver, inte ett obestyrkt löfte om mindre puder. Här granskar vi Light Tones som exempel; vi har inte testat premium mot en namngiven budgetprodukt.",
  decision: dryShampooDecision,
  productPaths: ["/skonhet/torrschampo"],
  questions: [
    { question: "Ersätter torrschampo vanlig hårtvätt?", answer: "Nej. AAD beskriver det som ett sätt att absorbera överskottsfett mellan tvättar. Schampo och vatten behövs fortfarande för att tvätta bort ansamlingar; mer spray ersätter inte det steget." },
    { question: "Är Light Tones en hårfärg?", answer: "Moroccanoil beskriver subtila violetta undertoner för ljust hår, men säger att produkten inte är avsedd att lämna färg efter inarbetning och urborstning. Vi har inte testat färgresultatet." },
    { question: "Betyder högre pris mindre puderrester?", answer: "Det har vi inte belagt. Mängd, användning och den enskilda formulan behöver bedömas, inte bara prisklassen. Vi har ingen jämförande mätning av rester eller kostnad per användning." },
  ],
  related: [{ href: "/skonhet/torrschampo", text: "Passar Light Tones ditt behov?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
