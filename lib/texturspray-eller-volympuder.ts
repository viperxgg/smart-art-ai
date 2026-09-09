import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const textureDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "maria-nila-texturspray", model: "Maria Nila Texture Spray 250 ml",
      variant: "Texture Spray i standardstorlek 250 ml, inte Ocean Spray, Styling Spray eller Shaping Heat Spray. Aktuell svensk förpackning är inte matchad.",
      chooseIf: "du vill fördela en lättare texturspray i torrt hår med fingrarna efteråt. Tillverkaren anger applicering både vid rötterna och i längderna samt stadga 2/5 på sin egen skala.",
      avoidIf: "du vill ha stark fixering eller undvika parfymerade stylingprodukter. Den publicerade ingredienslistan innehåller Alcohol Denat. och Parfum. Vi bedömer inte din individuella hudtolerans utifrån listan.",
      sourceIds: ["T1"], merchantVariantVerified: false,
    },
    {
      productSlug: "osis-volympuder", model: "Schwarzkopf OSiS Dust It 10 g",
      variant: "Dust It 10 g, inte Soft Dust eller Refresh Dust. Svenska tillverkarsidan identifierar storleken; säljarens paket är inte matchat.",
      chooseIf: "du vill arbeta in puder lokalt med fingrarna i torrt hår för matt finish och tydligt grepp. Tillverkaren beskriver användning både vid rötterna och i längderna, exempelvis för uppsättningar.",
      avoidIf: "du vill behålla en blank, mjuk känsla utan tydligt stylinggrepp. Tillverkaren beskriver stark stadga; det är inte samma mål som lätt textur. Vi har inte testat hur mycket som behövs i ditt hår.",
      sourceIds: ["T2", "T3"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Appliceringsformen och känslan passar ett behov som din nuvarande styling inte löser. Köp inte båda enbart för rötter respektive längder: båda kan användas på båda ställena enligt tillverkarna. Vi har inte jämfört kostnad per användning.",
  noPurchaseWhen: "Du får den form du vill ha med din befintliga produkt eller utan stylingprodukt. Börja med det moment som saknas i stället för att lägga till en hel rutin.",
  swedishContext: "Kontrollera namn, storlek och ingredienslista på förpackningen du faktiskt köper. 250 ml spray och 10 g puder kan inte jämföras direkt som antal användningar. Underlaget för Maria Nila visas på den amerikanska webbplatsen; svenskt pris och aktuell formulering är inte verifierade.",
  testing: "Vi har läst tillverkarnas produktbeskrivningar och användningsråd, inte stylat samma hår med båda produkterna. Ingen egen mätning av volym, hållbarhet under dagen, rester eller doftstyrka. Tillverkarnas stadgeskalor är inte ett gemensamt testbetyg.",
  limitations: "Ingredienslistor kan ändras och ersätter inte kontroll av den köpta förpackningen. Vi gör inga löften om all-day-håll, osynliga rester eller lämplighet för känslig hårbotten. Bilder, rättigheter och aktuella butikserbjudanden återstår att verifiera.",
  sources: [
    { id: "T1", title: "Maria Nila – Texture Spray 250 ml", url: "https://marianila.com/products/texture-spray-250ml", checkedAt: "2026-09-09", supports: "Storlek, lätt stadga, torrt hår, applicering vid rötter och längder samt publicerad ingredienslista. Amerikansk marknad; inget eget test eller svenskt erbjudande." },
    { id: "T2", title: "Schwarzkopf Professional Sverige – Dust It 10 g", url: "https://shop.schwarzkopf-professional.se/sv/c/OSiS%2B-Core-Texture/p/2873166", checkedAt: "2026-09-09", supports: "Produktnamn och storlek 10 g. Inte bevis för lager eller pris hos en återförsäljare." },
    { id: "T3", title: "Schwarzkopf Professional – Dust It, produkt och applicering", url: "https://www.schwarzkopf-professional.com/es/es/styling/osis/texture/dust-it.html", checkedAt: "2026-09-09", supports: "Matt finish, stark stadga och fingerapplicering i torrt hår, både rötter och längder. Tillverkaruppgifter, inte jämförande mätningar." },
  ],
};
export const textureGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/texturspray-eller-volympuder",
  title: "Texturspray eller puder – lättare textur eller tydligare grepp?",
  intro: "Både Maria Nila Texture Spray och OSiS Dust It kan användas vid rötter och i längder. Skillnaden att börja med är spray eller puder och vilken stadga du vill ha, inte en påstådd vinnare för varje del av håret.",
  decision: textureDecision,
  productPaths: ["/skonhet/texturspray", "/skonhet/volympuder"],
  related: [{ href: "/skonhet", text: "Fler beslut inom hårvård och skönhet" }],
  questions: [
    { question: "Är puder bara till för rötterna?", answer: "Nej. Schwarzkopf beskriver Dust It även i längderna för grepp och uppsättningar. Maria Nila anger också både rötter och längder för sin spray." },
    { question: "Behöver jag båda?", answer: "Börja med ett konkret behov. Om en produkt redan ger rätt grepp och form har vi inget underlag för att rekommendera ett extra köp." },
    { question: "Vilken håller längst?", answer: "Vi har inte gjort ett kontrollerat hållbarhetstest. Stadga beskriver grepp och känsla, inte ett verifierat antal timmar. Resultatet beror också på hår och användning." },
  ],
};
