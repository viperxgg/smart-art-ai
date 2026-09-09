import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { vestBeltDecision } from "@/lib/tyngdvast-eller-lyftarbalte";

export const kneeBeltDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "rehband-knaskydd", model: "Rehband RX Knee Sleeve 5mm",
      variant: "Vuxenmodellen RX 5 mm, inte Junior, RX 3 mm eller 7 mm. Tillverkaren anger SBR/neopren och samma modell för höger och vänster knä. Den kan köpas styckvis eller som par. ASIN B07PFK6N8H, storlek och antal i svensk leverans är inte matchade.",
      chooseIf: "du redan söker en mjuk sleeve runt knät för träning och kan kontrollera passformen med modellens storleksguide. Räkna ut om du behöver en eller två innan du jämför pris.",
      avoidIf: "du söker ett bälte runt midjan, vill ha ett löfte om smärtlindring eller skadeförebyggande effekt, eller inte tål materialet och värmen. Ett knä som känns besvärligt är inte i sig ett skäl för oss att rekommendera just denna sleeve.",
      sourceIds: ["K1", "K2"], merchantVariantVerified: false,
    },
    vestBeltDecision.options[1],
  ],
  payMoreWhen: "Rätt storlek, antal och en dokumenterad konstruktion fyller ditt behov. Jämför priset för samma antal sleeves, inte ett stycke mot ett par. Vi har inget underlag för att en tjockare sleeve eller dyrare bälte automatiskt ger bättre träningsresultat.",
  noPurchaseWhen: "Du inte har identifierat ett behov av något av redskapen och den utrustning du använder fungerar. En tyngre vikt på stången gör inte automatiskt båda till nödvändiga köp. Köp inte stödutrustning som en ersättning för att förstå varför en rörelse inte fungerar för dig.",
  swedishContext: "För RX: kontrollera styckpris eller parpris, vald storlek och materialetikett. Följ förpackningens mätinstruktion och modellens tabell. För T9: mät midjan i navelhöjd och kontrollera skruvjusteringen. Frakt, returvillkor, aktuellt svenskt totalpris och tävlingsgodkännande är inte verifierade.",
  testing: "Vi har granskat Rehbands produktbeskrivning och dess länkade bruksanvisning samt tidigare kontrollerat T9:s tillverkarsida. Vi har inte provat komfort, passform eller lyftresultat och har inte verifierat medicinsk effekt. Produktbeskrivningarnas prestationslöften är inte våra testresultat.",
  limitations: "Rehbands gemensamma bruksanvisning täcker flera knästöd och anger att SBR/neopren inte ska användas mer än 3–4 timmar utan avbrott. Den avråder vid tendens till värmeallergi och från fortsatt användning av utsliten eller skadad produkt. Följ även den levererade produktens etikett. Bilder och aktuella butikspaket återstår att verifiera.",
  sources: [
    { id: "K1", title: "Rehband – RX Knee Sleeve 5mm", url: "https://www.rehband.com/products/rx-knee-sleeve-5mm", checkedAt: "2026-09-09", supports: "5 mm SBR/neopren, höger/vänster, storleksval och alternativen styckvis/par. Inte bevis för individuell komfort eller medicinsk effekt." },
    { id: "K2", title: "Rehband – bruksanvisning för knästöd", url: "https://content.rehband.com/fileadmin/Dateiablage/PDF/RX/IFU_RB_knee_support_105_7051_7084_7953_2409.pdf", checkedAt: "2026-09-09", supports: "PDF länkad från RX 5 mm på Rehbands instruktionssida. Svenska avsnittet på sidan 1: användningsbegränsningar, skötsel och hänvisning till förpackningens storleksmätning. Gäller flera modeller, inte ett verifierat Amazon-paket." },
    ...vestBeltDecision.sources.filter((source) => source.id === "V2"),
  ],
};

export const kneeBeltGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/knaskydd-eller-lyftarbalte",
  title: "Knäsleeve eller lyftarbälte – vilket redskap behöver du?",
  intro: "RX 5 mm sitter runt knät; T9 är ett läderbälte runt midjan. De är inte två sätt att lösa samma problem. Börja med behovet och kontrollera passform, paket och instruktioner före priset.",
  decision: kneeBeltDecision,
  productPaths: ["/traning/knaskydd", "/traning/lyftarbalte"],
  questions: [
    { question: "Ingår två Rehband-sleeves?", answer: "Inte alltid. Tillverkarens sida erbjuder både enstaka sleeve och par. Kontrollera vad den valda butiksversionen innehåller; vi har inte matchat det länkade svenska paketet." },
    { question: "Hur väljer jag storlek?", answer: "För RX ska du följa mätningen på förpackningen och rätt storleksguide, inte bara din klädstorlek eller rådet att välja så tajt som möjligt. För T9 anger tillverkaren midjemått vid naveln." },
    { question: "Kan RX användas hela dagen?", answer: "Tillverkarens instruktion anger högst 3–4 timmar utan avbrott för SBR/neopren. Det är inte en rekommenderad träningstid eller ett löfte om att materialet passar alla." },
    { question: "Blir tunga lyft säkra med knäsleeve eller bälte?", answer: "Vi har inget underlag för en sådan garanti. Den här jämförelsen gäller modell, konstruktion och köpval; den bedömer inte din teknik eller orsaken till besvär." },
  ],
  related: [
    { href: "/traning/tyngdvast-eller-lyftarbalte", text: "Viktväst eller lyftarbälte – olika uppgifter" },
    { href: "/traning/handledslindor-eller-lyftremmar", text: "Handledslindor eller lyftremmar?" },
  ],
};
