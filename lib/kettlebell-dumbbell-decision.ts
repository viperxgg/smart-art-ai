import type { DecisionRecord } from "@/lib/decision-record";

export const kettlebellDumbbellDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    {
      productSlug: "amazon-basics-gjutjarns-kettlebell",
      model: "Amazon Basics gjutjärns-kettlebell",
      variant: "Produktposten anger ASIN B076QJY2FN. Vi har inte kunnat läsa den aktuella produktsidan och bekräftar därför inte vikt, antal eller levererad modell. Ett urval av viktvarianter betyder inte att samtliga ingår i köpet.",
      chooseIf: "du redan vet att dina övningar kräver en kettlebell och kan matcha den vikt och det grepp du behöver mot en verifierad variant. Vi rekommenderar ännu inte denna specifika butikspost.",
      avoidIf: "du behöver ett par hantlar eller flera belastningar i samma köp. Välj inte en okänd vikt enbart för att produkten beskrivs som ett nybörjarval.",
      sourceIds: ["K1"], merchantVariantVerified: false,
    },
    {
      productSlug: "songmics-hantelset-med-stallning",
      model: "SONGMICS hantelset med ställning",
      variant: "Produktpostens ASIN är B0FMR69BZ6; modellnummer och paketets vikter är inte matchade. SONGMICS säljer olika set. Tillverkarens SYL612-sida anger 1, 2 och 3 kg och styrker inte den tidigare uppgiften 1, 3 och 5 kg för vår butikspost.",
      chooseIf: "du behöver flera bestämda hantelvikter och förvaringen, efter att du har kontrollerat vikt per hantel och antal av varje vikt. Ett set med fasta hantlar byter belastning genom att du tar en annan hantel.",
      avoidIf: "du bara behöver ett par, behöver högre vikter än paketet innehåller eller vill kunna ändra vikten på samma hantel. Flera fasta vikter gör inte hantlarna justerbara.",
      sourceIds: ["K2", "K3"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Paketet innehåller de extra vikter du faktiskt använder, eller ett verifierat justerbart system ger de viktsteg och den förvaring du behöver. Jämför samma antal redskap och användbara vikter inklusive frakt. Vi har inget aktuellt prisunderlag som visar att något av dessa två alternativ ger bäst värde.",
  noPurchaseWhen: "Redskapen du redan har fungerar för dina planerade övningar. Om du ännu inte vet vilka vikter du behöver är det rimligare att prova befintlig eller lånad utrustning än att köpa ett komplett set på chans. Du behöver inte automatiskt båda typerna.",
  swedishContext: "Kontrollera att vikten anges i kg per redskap, inte i lb eller som hela paketets sammanlagda vikt. Matcha modellnummer, antal, leveranskostnad och svensk leverans innan köp. Den tyska tillverkarsidans variant och leveransvillkor bevisar inte innehållet i en svensk beställning.",
  testing: "Vi har inte provat dessa produkter, vägt dem eller jämfört grepp, ställning, hållbarhet eller träningsresultat. Råden gäller hur du granskar ett köp; de är inte en personlig träningsplan eller ett testvinnarbetyg.",
  limitations: "Exakta butiksvarianter, aktuella priser och bildrättigheter återstår att verifiera. Amazon-sidorna kunde inte läsas vid kontrollen. Därför visas inga produktbilder eller köpknappar här. Tillverkarsidan nedan identifierar en annan SONGMICS-variant och används för att visa varför paket måste matchas, inte som bevis för vår butikspost.",
  sources: [
    { id: "K1", title: "Amazon Sverige – registrerat ASIN B076QJY2FN", url: "https://www.amazon.se/dp/B076QJY2FN", status: "unavailable", checkedAt: "2026-09-08", supports: "Ingen aktuell produktuppgift har kunnat verifieras från denna sida." },
    { id: "K2", title: "Amazon Sverige – registrerat ASIN B0FMR69BZ6", url: "https://www.amazon.se/dp/B0FMR69BZ6", status: "unavailable", checkedAt: "2026-09-08", supports: "Ingen aktuell produktuppgift eller matchning mot ett SONGMICS-modellnummer har kunnat verifieras från denna sida." },
    { id: "K3", title: "SONGMICS – hantelset SYL612", url: "https://www.songmics.de/collections/hanteln/products/songmics-kurzhantel-set-mit-hantelstaender-syl612", checkedAt: "2026-09-08", supports: "Tillverkarens sida benämner ett set med 1, 2 och 3 kg. Den bekräftar inte att detta är varianten i vår Amazon-post." },
  ],
};
