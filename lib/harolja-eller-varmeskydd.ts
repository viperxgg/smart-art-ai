import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  lorealElvitalVarmeskyddProduct,
  moroccanoilHaroljaProduct,
} from "@/lib/products";

export const haroljaEllerVarmeskyddFaqItems: DecisionComparisonFaqItem[] = [
 { question: "Måste jag använda båda?", answer: "Nej. Välj efter vad som saknas i din rutin. En extra finishprodukt är inte automatiskt nödvändig när du använder värmeskydd." },
 { question: "Används oljan bara efter styling?", answer: "Nej. Följ instruktionerna för den exakta produkten. Moroccanoil Original kan enligt tillverkaren användas i handdukstorkat eller torrt hår. Det är inte ett bevis för att den ersätter sprayens värmeskydd." },
 { question: "Är en angiven skyddstemperatur en rekommenderad inställning?", answer: "Nej. Vi återger tillverkarens uppgift, inte ett råd att använda högsta värme. Följ produktens och verktygets instruktioner." },
];
export const haroljaEllerVarmeskyddComparisonRows = [
 ["Produkt", "Moroccanoil Treatment Original", "Dream Length Heat Slayer Iron Spray150 ml"],
 ["Utgångspunkt", "Styling och finish", "Ett uttryckligt värmeskyddspåstående"],
 ["Viktig kontroll", "Original, inte annan Moroccanoil-produkt", "Heat Slayer, inte annan Dream Length-produkt"],
 ["Vad visar vårt underlag inte?", "Likvärdigt värmeskydd som sprayen", "Att resultatet blir samma för alla hårtyper"],
 ["Butikens variant matchad", "Nej", "Nej"],
] as const;
export const haroljaEllerVarmeskyddPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
 { product: moroccanoilHaroljaProduct, path: "/skonhet/harolja", badge: "Styling och finish", headline: "Behöver du en finishprodukt?", shortBody: "Utgå från önskat resultat och formulan. Köp inte oljan enbart som ersättning för ett uttryckligt värmeskydd." },
 { product: lorealElvitalVarmeskyddProduct, path: "/skonhet/varmeskydd", badge: "Före värmestyling", headline: "Saknas värmeskydd i din rutin?", shortBody: "Kontrollera hela produktnamnet och följ instruktionerna. Temperaturpåståendet är tillverkarens uppgift, inte vår testbedömning." },
];
export const haroljaEllerVarmeskyddRelatedLinks: DecisionComparisonRelatedLink[] = [
 { href: "/skonhet/harolja", label: "Moroccanoil Original", text: "Underlag och begränsningar för finishprodukten." },
 { href: "/skonhet/varmeskydd", label: "Heat Slayer", text: "Underlag och begränsningar för värmeskyddssprayen." },
 { href: "/skonhet", label: "Skönhet", text: "Fler jämförelser och produktguider." },
];
