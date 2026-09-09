import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const waterFlosserDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "philips-power-flosser", model: "Philips Cordless Power Flosser 3000 – referens HX3826/33",
      variant: "Vi granskar den sladdlösa HX3826/33, inte en bänkenhet. Katalogens ASIN B0CDB2TS8M är ännu inte matchat mot ett aktuellt svenskt erbjudande.",
      chooseIf: "du söker en sladdlös mundusch med dokumenterad 250 ml-behållare, två lägen och tre trycknivåer och vill kunna identifiera ersättningsmunstycken och laddningsdelar.",
      avoidIf: "du behöver en stor separat tank eller vill ladda direkt med en vanlig USB-C-kabel. Referensen har USB-A till en liten produktspecifik kontakt.", sourceIds: ["W1", "W2"], merchantVariantVerified: false },
    { productSlug: "surfou-water-flosser", model: "SURFOU – modell ännu inte verifierad",
      variant: "Katalogreferens B0BZ85SJ26. Vi saknar en matchad tillverkarmanual, svensk leveransvariant och verifierade reservmunstycken.",
      chooseIf: "avvakta tills säljaren visar exakt modell, manual, laddning och kompatibla reservmunstycken. Ett lågt inköpspris räcker inte för vår rekommendation.",
      avoidIf: "du behöver ett belagt val nu. Vi kan ännu inte jämföra dess tank, tryck, hållbarhet eller totalkostnad med Philips.", sourceIds: ["W3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Det extra priset ger något du behöver och kan kontrollera: reservdelar, begriplig manual eller reglage som passar din rutin. Philips har modellspecifik support; det bevisar inte bättre rengöring eller längre livslängd än SURFOU. Jämför även pris och tillgång på rätt munstycken.",
  noPurchaseWhen: "Din nuvarande rengöring fungerar. 1177 beskriver tandtråd, mellanrumsborstar och andra hjälpmedel; be tandvården om hjälp att välja om du är osäker. Vi har inget underlag för att alla behöver en elektrisk mundusch.",
  swedishContext: "Philips svenska support listar F1-munstycken HX3042/00, laddkabel CP2149/01 och EU-adaptrar. Matcha delarna mot din artikel innan köp. Vid besvär eller särskilda behov behöver valet anpassas tillsammans med tandvården.",
  testing: "Vi har inte provat vattenstrålen, greppet, ljudet eller rengöringen. Tillverkarens plackpåståenden används inte som ett eget jämförande test eller som bevis för en vinnare.",
  limitations: "SURFOU-underlaget är otillräckligt. Philips olika webbsidor anger olika batteritid, så vi anger ingen batterisiffra. Aktuella handelspaket, bildrättigheter och personlig lämplighet återstår att verifiera.",
  sources: [
    { id: "W1", title: "Philips Sverige – HX3826/33", url: "https://www.philips.se/shop/SE_Klarna/personvard/power-flosser/cordless-power-flosser-3000-oral-irrigator/p/HX3826_33", checkedAt: "2026-09-09", supports: "Sladdlös referens, 250 ml, två lägen, tre trycknivåer och USB-A till liten kontakt. Ingen pris- eller lageruppgift återges." },
    { id: "W2", title: "Philips – support och reservdelar för HX3826/33", url: "https://www.philips.se/c-p/HX3826_33/cordless-power-flosser-3000-oral-irrigator/kundtjanst", checkedAt: "2026-09-09", supports: "Modellspecifik support med F1 HX3042/00, CP2149/01 och EU-adaptrar. Listning av reservdelar är ingen garanti för lager hos en viss butik." },
    { id: "W3", title: "SURFOU – kataloglänk, underlag saknas", url: "https://www.amazon.se/dp/B0BZ85SJ26", checkedAt: "2026-09-09", status: "unavailable", supports: "Identifierar endast länken som behöver verifieras. Ingen tillverkarmanual eller teknisk egenskap har kunnat matchas; länken belägger ingen rekommendation." },
    { id: "W4", title: "1177 – rengöring mellan tänderna", url: "https://www.1177.se/liv--halsa/tandhalsa/sa-haller-du-tanderna-rena/", checkedAt: "2026-09-09", supports: "Oberoende råd om rengöring och hjälpmedel. Ingen rekommendation av Philips eller SURFOU." },
  ],
};

export const waterFlosserGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/munskoljare",
  title: "Behöver du en mundusch – och vilka delar måste passa?",
  intro: "Börja med behovet, tanken och ersättningsmunstyckena. Philips HX3826/33 är sladdlös; SURFOU saknar ännu tillräckligt modellunderlag för en rättvis jämförelse.",
  decision: waterFlosserDecision, productPaths: ["/halsa/munskoljare/philips-3000", "/halsa/munskoljare/surfou"],
  questions: [
    { question: "Är Philips 3000 en bänkenhet?", answer: "Inte referensen HX3826/33 som vi granskar här. Den har en integrerad 250 ml-behållare. Kontrollera hela modellnumret eftersom serienamnet inte identifierar alla versioner." },
    { question: "Kan jag använda min USB-C-kabel?", answer: "Philips anger USB-A till en liten kontakt för HX3826/33. Kontrollera rätt laddningskabel och adapter i det aktuella paketet; USB-laddning betyder inte att kontakten på apparaten är USB-C." },
    { question: "Vilka reservmunstycken ska jag leta efter?", answer: "Philips support listar F1 HX3042/00 för denna referens. För SURFOU har vi inte verifierat en kompatibel reservdel. Köp inte på antagandet att munstycken från andra märken passar." },
    { question: "Är ett högre pris värt det?", answer: "Bara om en belagd skillnad hjälper dig. Vår granskning ger ingen rengöringsvinnare, och SURFOU:s egenskaper är inte tillräckligt verifierade för en jämförelse av totalkostnad." },
  ],
  related: [{ href: "/halsa/billig-eller-dyr-water-flosser", text: "Vad behöver ett högre pris ge dig?" }, { href: "/halsa/eltandborste-guide", text: "Vilken återkoppling behöver din tandborste?" }],
};

export const waterFlosserValueGuide: DecisionGuide = {
  ...waterFlosserGuide, path: "/halsa/billig-eller-dyr-water-flosser",
  title: "Mundusch – när är ett högre pris motiverat?",
  intro: "Räkna på rätt munstycken, laddning och användning innan du betalar mer. Vi jämför vad som är dokumenterat och visar öppet vad som saknas för SURFOU.",
  related: [{ href: "/halsa/munskoljare", text: "Behöver du en mundusch över huvud taget?" }],
};
