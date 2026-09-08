import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const acidSerumTonerDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "anua-azelaic-acid-serum", model: "Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum",
    variant: "Märket anger 10% azelainsyra; INCI innehåller även Betaine Salicylate och niacinamid. Katalogens 30 ml och ASIN B0DX122DHW är inte matchade mot en aktuell svensk butiksförpackning.",
    chooseIf: "du söker just denna sammansatta serumformula och har ett tydligt mål med ett nytt steg före fuktkräm. Anuas instruktion börjar med 1–2 droppar, 1–2 gånger per vecka; tätare användning är inte ett mål i sig.",
    avoidIf: "du vill ha ett serum som säkert inte svider eller en behandling av orsaken till rodnad. Vi har inte belägg för sådana löften eller för att Anua är det tryggaste nybörjarvalet.",
    sourceIds: ["A1"], merchantVariantVerified: false,
  }, {
    productSlug: "cosrx-aha-bha-toner", model: "COSRX AHA/BHA Clarifying Treatment Toner, 150 ml",
    variant: "Tonern med Glycolic Acid och Betaine Salicylate, inte märkets separata AHA- eller BHA-vätskor. ASIN B00OZ63ODA är inte matchad mot aktuellt svenskt erbjudande.",
    chooseIf: "du föredrar toner på rondell efter rengöring och kan följa produktens begränsningar. Märket anger att ögon och mun ska undvikas och avråder från kombination med andra syror, retinol och C-vitamin.",
    avoidIf: "du vill lägga till den ovanpå flera aktiva produkter utan att kontrollera anvisningarna. COSRX avråder även från användning under graviditet och amning på den granskade sidan; detta är märkets produktspecifika råd.",
    sourceIds: ["A2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Den färdiga formulan och sättet att använda den fyller ett behov som din rutin inte redan täcker. Vi har ingen jämförande effektmätning eller verifierade svenska totalpriser som visar att någon av dessa är värd ett högre pris.",
  noPurchaseWhen: "Din rutin fungerar eller du saknar ett konkret skäl att lägga till en aktiv produkt. Köp inte båda som ett färdigt rutinpaket. Att en produkt marknadsförs som mild visar inte att ytterligare ett steg behövs.",
  swedishContext: "De granskade källorna är märkenas internationella/amerikanska sidor. Kontrollera anvisningarna på den svenska förpackningen; lager, leveransvariant, frakt och bildrättigheter är inte verifierade. Årstiden avgör inte ensam ditt behov.",
  testing: "Vi har granskat publicerade ingredienser och instruktioner, inte provat produkterna eller jämfört effekt, sveda eller tolerans. Tillverkarnas marknadsföring och kundomdömen är inte våra testresultat.",
  limitations: "Ingen säkerhets- eller effektrangordning är fastställd. Jämförelsen gäller färdiga kosmetiska produkter, inte behandling av hudsjukdom. Ingrediensnamn och procenttal räcker inte för att förutsäga din huds reaktion.",
  sources: [
    { id: "A1", title: "Anua – Azelaic Acid 10 Hyaluron Redness Soothing Serum", url: "https://anua.com/products/azelaic-acid-10-hyaluron-redness-soothing-serum", checkedAt: "2026-09-09", supports: "Angiven koncentration, överlappande ingredienser och försiktig introduktion. Vid användning dagtid anger märket SPF 30 eller högre. Ingen individuell toleransgaranti eller svensk variantmatchning." },
    { id: "A2", title: "COSRX – AHA/BHA Clarifying Treatment Toner", url: "https://www.cosrx.com/products/aha-bha-clarifying-treatment-toner", checkedAt: "2026-09-09", supports: "150 ml, INCI, applicering på rondell och begränsningar för kombinationer, graviditet och amning. Märket beskriver daglig användning och anger bredspektrumskydd SPF 30 eller högre dagtid; det visar inte individuell lämplighet." },
  ],
};

export const acidSerumOrTonerGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/azelainsyra-eller-aha-bha",
  title: "Anua eller COSRX – behöver du serum eller toner?",
  intro: "Börja med behovet och instruktionerna. Vi jämför två färdiga formulor och deras begränsningar, inte vilket ingrediensnamn som låter mildast. Båda innehåller Betaine Salicylate enligt märkenas listor.",
  decision: acidSerumTonerDecision,
  productPaths: ["/skonhet/azelainsyra-serum", "/skonhet/exfolierande-toner"],
  questions: [
    { question: "Är Anua ett säkrare nybörjarval?", answer: "Det har vi inte visat. Känslig hud är ingen enhetlig målgrupp, och en tillverkares mildhetsbeskrivning ersätter inte individuell tolerans. Vi rekommenderar inte Anua som automatiskt förstaval." },
    { question: "Ska jag köpa båda och varva dem?", answer: "Inte utifrån denna jämförelse. Anua innehåller också Betaine Salicylate, och COSRXs instruktion begränsar kombinationer med andra aktiva produkter. Vi har inte underlag för en gemensam rutin." },
    { question: "Är produkterna bara avsedda för kvällen?", answer: "Nej, källorna beskriver även användning dagtid tillsammans med solskydd. Läs den exakta förpackningens anvisningar; användningsfrekvens är inte samma sak som bevis på vad din hud behöver." },
    { question: "Kan jämförelsen avgöra hur jag behandlar rodnad?", answer: "Nej. Den förklarar produktval och dokumenterade begränsningar, men kan inte avgöra orsaken till ett hudproblem eller välja behandling för dig." },
  ],
  related: [{ href: "/skonhet/cicaplast-b5-eller-cetaphil", text: "Behöver du snarare en fuktkräm?" }, { href: "/guider/niacinamide-10-vs-20", text: "Behöver du byta koncentration?" }],
};
