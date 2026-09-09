import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { hairStylingDecision } from "@/lib/hair-styling-decision";

export const haroljaEllerVarmeskyddFaqItems: DecisionGuide["questions"] = [
 { question: "Måste jag använda båda?", answer: "Nej. Välj efter vad som saknas i din rutin. En extra finishprodukt är inte automatiskt nödvändig när du använder värmeskydd." },
 { question: "Används oljan bara efter styling?", answer: "Nej. Följ instruktionerna för den exakta produkten. Moroccanoil Original kan enligt tillverkaren användas i handdukstorkat eller torrt hår. Det är inte ett bevis för att den ersätter sprayens värmeskydd." },
 { question: "Är en angiven skyddstemperatur en rekommenderad inställning?", answer: "Nej. Vi återger tillverkarens uppgift, inte ett råd att använda högsta värme. Följ produktens och verktygets instruktioner." },
];

export const hairProtectionGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/harolja-eller-varmeskydd",
  title: "Hårolja eller värmeskydd – vad saknas i din rutin?",
  intro: "Jämför Moroccanoil Original och Heat Slayer efter funktionen du behöver. Läs modelluppgifter och begränsningar innan du lägger till en produkt.",
  decision: hairStylingDecision, productPaths: ["/skonhet/harolja", "/skonhet/varmeskydd"],
  questions: haroljaEllerVarmeskyddFaqItems,
  related: [{"href": "/skonhet/leave-in-eller-harolja", "text": "Kräm eller oljeberikad finish?"}],
};
