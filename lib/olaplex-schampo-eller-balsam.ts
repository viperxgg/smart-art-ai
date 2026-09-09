import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const olaplexWashDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "olaplex-no4-shampoo", model: "Olaplex Nº.4 Bond Maintenance Strengthening Shampoo, 250 ml",
      variant: "Referensen är den aktuella brittiska Strengthening-sidan. Katalogens ASIN B08TWQ37XF och äldre Bond Maintenance-förpackning är inte matchade. Inte Nº.4FINE, 4P eller 4C.",
      chooseIf: "du behöver ersätta ditt schampo och vill jämföra denna rengörande produkt för medelgrovt till grovt hår, tillverkarens angivna målgrupp.",
      avoidIf: "du redan är nöjd med schampot eller söker ett balsam för längderna. Vi lovar inte att standardversionen är lättast för fint hår; FINE är en separat produkt.",
      sourceIds: ["O1", "O3"], merchantVariantVerified: false },
    { productSlug: "olaplex-no5-conditioner", model: "Olaplex Nº.5 Bond Maintenance Strengthening Conditioner, 250 ml",
      variant: "Referensen är den aktuella amerikanska Strengthening-sidan. ASIN B08TWV3S41, svensk ingredienslista och leveransvariant är inte matchade. Inte Nº.5FINE eller 5LEAVE-IN.",
      chooseIf: "du saknar ett ursköljbart balsam efter schampo och kan avsätta tillverkarens 1–3 minuter för längder och toppar.",
      avoidIf: "du söker en leave-in eller redan har ett balsam som fungerar. Vi saknar stöd för att just detta ger störst omedelbar skillnad för de flesta.",
      sourceIds: ["O2", "O3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "En produkt fyller ett konkret behov som det du använder inte löser. Börja med den saknade funktionen, inte ett komplett set. Jämför samma variant och volym, totalpris med frakt och din faktiska dosering. Vi har inget jämförande test som visar att märket motiverar ett högre pris.",
  noPurchaseWhen: "Ditt schampo rengör och ditt balsam ger den hanterbarhet du vill ha. Blekt hår är inte i sig ett skäl att köpa både dessa och en extra behandling. Olaplex beskriver Nº.3PLUS som ett separat steg som inte krävs för att använda 4 och 5.",
  swedishContext: "Källorna gäller Storbritannien och USA. Kontrollera fullständigt namn, volym, ingredienslista och instruktion på den svenska förpackningen. Ett nummer eller en äldre bild räcker inte för att matcha Strengthening, FINE och andra varianter. Utländska priser överförs inte till Sverige.",
  testing: "Vi har läst tillverkarens sidor men inte provat produkterna eller mätt hårbrott, glans eller utredning. Marknadsförda resultat och före/efter-bilder är inte vårt eget test eller bevis för bättre effekt än ditt nuvarande schampo och balsam.",
  limitations: "Äldre produktlänkar omdirigerar nu till Strengthening. Det bevisar inte att en äldre svensk flaska har identisk formula. Tillverkarens uppgifter om antal användningar är inte våra mätningar och används inte i en kostnadskalkyl. Butiksmatchning och bildrättigheter återstår.",
  sources: [
    { id: "O1", title: "Olaplex UK – Nº.4 Strengthening Shampoo 250 ml", url: "https://uk.olaplex.com/products/n-4-bond-maintenance-strengthening-shampoo-250ml", checkedAt: "2026-09-09", supports: "Aktuellt produktnamn, storlek, målgrupp medium-coarse och applicering i vått hår följt av ursköljning. Ingen svensk leveranskontroll." },
    { id: "O2", title: "Olaplex – Nº.5 Strengthening Conditioner 250 ml", url: "https://olaplex.com/products/olaplex-n5-bond-maintenance-strengthening-conditioner-250ml", checkedAt: "2026-09-09", supports: "Aktuellt produktnamn, ursköljbart balsam, längder och toppar samt 1–3 minuter. Amerikansk referens, inte svensk förpackningsmatchning." },
    { id: "O3", title: "Olaplex – användning av Nº.4 och Nº.5", url: "https://olaplex.com/blogs/news/how-to-olaplex-no-4-no-5", checkedAt: "2026-09-09", supports: "Tillverkarens guide daterad april 2026 skiljer standard från FINE och beskriver att Nº.3PLUS inte krävs för att använda schampo och balsam. Guidens merförsäljning är inte vår rekommendation." },
  ],
};

export const olaplexWashGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/olaplex-schampo-eller-balsam",
  title: "Olaplex Nº.4 eller Nº.5 – vilken funktion saknas i din rutin?",
  intro: "Schampo och balsam fyller olika roller. Behåll det som fungerar och jämför bara det du behöver ersätta. Ett set eller en högre prislapp är inget bevis för bättre resultat.",
  decision: olaplexWashDecision, productPaths: ["/skonhet/olaplex-schampo", "/skonhet/olaplex-balsam"],
  questions: [
    { question: "Måste jag köpa båda?", answer: "Nej. Bedöm rengöring och balsam separat utifrån vad som saknas. Vi har inget belägg för att hela serien behövs eller att båda är bättre än de produkter som redan fungerar för dig." },
    { question: "Är Nº.5 en leave-in?", answer: "Inte Strengthening Conditioner som granskas här. Tillverkaren anger 1–3 minuter och ursköljning. Nº.5LEAVE-IN är en annan produkt." },
    { question: "Är standardversionen samma som FINE?", answer: "Nej. Tillverkaren skiljer dem åt och riktar standardreferensen Nº.4 till medelgrovt och grovt hår. Vi har inte testat vilken känsla någon av dem ger i ditt hår." },
    { question: "Behöver jag också Nº.3?", answer: "Tillverkaren anger att 4 och 5 kan användas utan Nº.3PLUS. Köp inte en behandling automatiskt för att håret är blekt. Äldre Hair Perfector och PLUS ska inte heller blandas ihop." },
  ],
  related: [{ href: "/skonhet/olaplex-eller-harinpackning", text: "Behandling före tvätt eller mask efteråt?" }, { href: "/guider/harinpackning", text: "Behöver du lägga till en hårmask?" }],
};
