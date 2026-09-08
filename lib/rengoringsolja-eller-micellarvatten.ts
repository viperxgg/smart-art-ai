import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const makeupCleansingDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "some-by-mi-cleansing-oil", model: "SOME BY MI Lactosoy Sebum & Blackhead Cleansing Oil, 200 ml",
      variant: "Tvåfasprodukten på tillverkarens engelska sida, med vatten- och oljelager. Inte Lactosoy Bubble Cleanser eller rengöringstvålen i samma serie. Katalogens ASIN B0DGVYM26L är inte matchad mot aktuell svensk leverans.",
      chooseIf: "du föredrar att massera in och skölja bort rengöringen. Tillverkaren instruerar att skaka flaskan 4–5 gånger före användning, massera varsamt och skölja väl med ljummet vatten.",
      avoidIf: "du vill ha en produkt som inte behöver sköljas eller köper den för garanterad borttagning av pormaskar. Produktnamnet och marknadsföringen ersätter inte ett test på din hud eller ditt smink.",
      sourceIds: ["M1"], merchantVariantVerified: false,
    },
    {
      productSlug: "bioderma-sensibio-h2o", model: "Bioderma Sensibio H2O, 500 ml",
      variant: "Vanligt Sensibio H2O enligt den svenska produktsidan. Där finns 500 ml-flaska, 250 ml-flaska och 500 ml-pumpflaska. Katalogens ASIN B002XZLAWM och förpackning är inte matchade mot aktuellt erbjudande.",
      chooseIf: "du söker ett oparfymerat micellärvatten och föredrar en fuktad bomullsrondell. Bioderma anger varsam rengöring av ansikte och ögon utan efterföljande sköljning.",
      avoidIf: "du vill undvika rondeller eller redan vet att produkten inte fungerar för dig. Att den marknadsförs för känslig hud garanterar inte att varje person tolererar den eller att den är bäst på vattenfast makeup.",
      sourceIds: ["M2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Ett verifierat användningssätt eller en förpackning löser ett faktiskt problem för dig. Jämför samma produkt och mängd, totalpris och förbrukning. Vi har inte jämfört rengöring per krona, användningstid eller hur mycket som behövs för samma makeup.",
  noPurchaseWhen: "Din befintliga rengöring redan tar bort det du använder och fungerar för din hud. Lägg inte till olja och micellärvatten bara för att få fler steg. Ett kvarvarande problem är skäl att undersöka rutinen, inte automatiskt att köpa båda.",
  swedishContext: "Bioderma har svensk produktinformation; SOME BY MI-underlaget är från den engelska tillverkarsidan. Kontrollera produktnamn, volym, ingredienslista och instruktioner på den levererade förpackningen. Svenska butikslänkar, totalpriser och bildrättigheter är inte verifierade.",
  testing: "Vi har läst tillverkarnas sidor, inklusive SOME BY MI:s bild med användningsinstruktioner. Vi har inte provat produkterna, jämfört vattenfast mascara, hudreaktioner eller rengöringsresultat. Tillverkarnas effektpåståenden är inte våra testresultat.",
  limitations: "Ingen vinnare utses för känslig hud, pormaskar eller vattenfast smink. Vi har inte gjort en fullständig ingrediensgranskning eller matchat formler mellan marknader. Rengöring beskrivs som kosmetisk användning, inte behandling av en hudsjukdom.",
  sources: [
    { id: "M1", title: "SOME BY MI – Lactosoy Cleansing Oil 200 ml", url: "https://en.somebymi.com/product/lactosoy-sebum-blackhead-cleansing-oil-200ml/635/", checkedAt: "2026-09-09", supports: "Exakt produktnamn och volym. Sidans produktbild beskriver två lager; HOW TO USE anger skakning före användning, varsam massage och sköljning. Ingen jämförelse med Sensibio eller svensk ASIN-matchning." },
    { id: "M2", title: "Bioderma Sverige – Sensibio H2O", url: "https://www.bioderma.se/vara-produkter/sensibio/h2o", checkedAt: "2026-09-09", supports: "Förpackningsstorlekar, oparfymerad produkt samt tillverkarens råd om bomullsrondell, varsam rengöring och att sköljning inte behövs. Inga garantier om individuell tolerans eller jämförande test med oljan." },
  ],
};

export const makeupCleansingGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/rengoringsolja-eller-micellarvatten",
  title: "Rengöringsolja eller micellärvatten – vill du skölja eller använda rondell?",
  intro: "Välj efter hur du vill rengöra och vad som redan fungerar. Här skiljer vi mellan en tvåfasolja som skakas och sköljs av och ett micellärvatten med andra användningsråd. Vi har inget jämförande test som visar att något av dem tar bort allt eller passar alla.",
  decision: makeupCleansingDecision,
  productPaths: ["/skonhet/rengoringsolja", "/skonhet/micellart-vatten"],
  questions: [
    { question: "Måste jag dubbelrengöra?", answer: "Inte som ett automatiskt köpbeslut. Vi har inte visat att just du behöver ytterligare en rengöringsprodukt. Utgå från vad som ska tas bort, instruktionerna för produkterna och hur din befintliga rutin fungerar." },
    { question: "Vilken tar bort vattenfast mascara bäst?", answer: "Det vet vi inte. Vi har inte jämfört dem på samma mascara med samma mängd och användning. Produktkategorin olja eller micellärvatten räcker inte för att utse en vinnare." },
    { question: "Varför behöver SOME BY MI-flaskan skakas?", answer: "Tillverkaren beskriver produkten som tvåfasig. Följ skaknings- och sköljinstruktionerna på förpackningen; anta inte att den ska hanteras som en enfasolja eller som ett micellärvatten som lämnas kvar." },
    { question: "Är Sensibio bäst för känslig hud?", answer: "Bioderma beskriver den för känslig hud, men det är inte en jämförelse med den andra produkten eller ett löfte om hur din hud reagerar. Vi har inte gjort ett toleranstest." },
  ],
  related: [{ href: "/skonhet/cerave-eller-cetaphil", text: "Behöver du byta din vanliga rengöring?" }],
};
