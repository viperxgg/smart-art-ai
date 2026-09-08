import type { DecisionComparisonFaqItem, DecisionComparisonPick, DecisionComparisonRelatedLink } from "@/lib/decision-comparison";
import { olaplexNo3Product, lorealAbsolutRepairProduct } from "@/lib/products";

export const olaplexEllerHarinpackningFaqItems: DecisionComparisonFaqItem[] = [
  { question: "Är Olaplex bättre än en vanlig hårinpackning?", answer: "Vi har inte jämförande testdata som visar det. PLUS är en behandling före schampo, medan Thick Hair-masken används efter. Båda tillverkarna beskriver vårdande och reparerande effekter. Vi kan inte reducera skillnaden till att bara den ena reparerar." },
  { question: "Gäller tre minuter även gamla No.3?", answer: "Den lästa instruktionen gäller N°.3 PLUS Complete Repair Treatment. Blanda inte ihop den med äldre No.3 Hair Perfector. Följ instruktionen på den flaska du faktiskt har." },
  { question: "Behöver jag båda?", answer: "Inte automatiskt. Ett extra steg behöver fylla ett behov som din nuvarande rutin inte löser. Att en produkt används före schampo och en annan efter är inte bevis för att du behöver köpa båda." },
  { question: "Vilken Absolut Repair-mask jämför ni?", answer: "Masque Thick Hair som sköljs ur, inte Gold Masque eller Molecular. Den svenska tillverkarsidan beskriver 500 ml och listar 250 ml separat. Vår äldre butikslänk för 250 ml är inte verifierad mot exakt variant." },
];

export const olaplexEllerHarinpackningComparisonRows = [
  ["Exakt produkt", "N°.3 PLUS Complete Repair Treatment", "Absolut Repair Masque Thick Hair"],
  ["Steg enligt tillverkaren", "Före schampo", "Efter schampo"],
  ["Instruktion i källan", "Vått hår, tre minuter, skölj; fortsätt med schampo och balsam", "Nytvättat, handdukstorkat hår, 3–5 minuter, skölj noggrant"],
  ["Viktig variantgräns", "Inte äldre No.3 Hair Perfector", "Inte Gold Masque eller Molecular"],
  ["Jämförande resultat och aktuellt pris", "Inte verifierat", "Inte verifierat"],
] as const;

export const olaplexEllerHarinpackningPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  { product: olaplexNo3Product, path: "/skonhet/olaplex-no3", badge: "Före schampo", headline: "Olaplex N°.3 PLUS", shortBody: "Ett alternativ om du söker en separat behandling före schampo. Tre minuter gäller PLUS enligt tillverkarens instruktion, inte automatiskt äldre No.3." },
  { product: lorealAbsolutRepairProduct, path: "/skonhet/harinpackning", badge: "Efter schampo", headline: "Absolut Repair Masque Thick Hair", shortBody: "En ursköljbar mask efter schampo. Kontrollera Thick Hair-varianten och förpackningen; serienamnet Absolut Repair räcker inte för att matcha produkten." },
];

export const olaplexEllerHarinpackningRelatedLinks: DecisionComparisonRelatedLink[] = [
  { href: "/skonhet/olaplex-no3", label: "Produktguide", text: "Underlaget för N°.3 PLUS" },
  { href: "/skonhet/harinpackning", label: "Produktguide", text: "Underlaget för Absolut Repair Thick Hair" },
  { href: "/guider/harinpackning", label: "Fler alternativ", text: "Vilken hårmask passar din rutin?" },
];
