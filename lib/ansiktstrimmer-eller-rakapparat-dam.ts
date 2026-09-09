import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const facialBodyDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "philips-ansiktstrimmer", model: "Philips Facial Hair Remover BRR454/00",
      variant: "Fristående ansiktshårborttagare. Aktuellt butiksexemplar och paket är inte matchade.",
      chooseIf: "du bara vill ta bort ansiktshår, exempelvis på överläpp eller kinder, och saknar ett verktyg för det. Modellen har spegel och LED-ljus.",
      avoidIf: "du vill forma själva ögonbrynen, raka kroppen eller använda apparaten i duschen. Handboken säger att den ska hållas torr och borta från ögonbryn och ögonfransar.",
      sourceIds: ["F1", "F2"], merchantVariantVerified: false,
    },
    {
      productSlug: "philips-rakapparat-dam", model: "Philips Lady Shaver 8000 BRL159/00",
      variant: "BRL159/00 med separat ansiktshårborttagare och bikinitillbehör. Inte ett generellt paket för alla Series 8000. Butiksvarianten är ännu inte matchad.",
      chooseIf: "du behöver en kroppsrakapparat för våt och torr användning och även vill ha den separata ansiktshårborttagaren som Philips listar i detta set.",
      avoidIf: "du bara behöver ta bort lite ansiktshår eller redan har en fungerande kroppsrakapparat. Fler tillbehör ger inget mervärde om de blir liggande.",
      sourceIds: ["F3", "F4"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du behöver kroppsrakning och de extra verktygen i samma paket. Kontrollera innehållet innan du jämför totalsumman med separata köp. Vi har inte verifierat dagens priser och utser inget billigaste alternativ.",
  noPurchaseWhen: "Du är nöjd med din nuvarande rutin eller vill behålla håret. Om ditt set redan innehåller en fungerande ansiktshårborttagare kan ett separat köp bli en onödig dubblering.",
  swedishContext: "Jämför hela modellnumret och säljarens innehållslista. BRL159/00 anges med USB-A-kabel men utan nätadapter. BRR454 använder alkaliskt AA-engångsbatteri på 1,5 V, inte USB-laddning. Kontrollera vad du redan har hemma.",
  testing: "Underlaget är Philips modelluppgifter och handbok, inte egen användning. Vi har inte jämfört hudkomfort, tidsåtgång eller resultat på samma personer. Inga stjärnbetyg eller löften om att slippa irritation används.",
  limitations: "Kroppsrakapparatens våtanvändning ska inte överföras till ansiktsverktyget. Följ instruktionerna för varje apparat och tillbehör. Vi har inte fastställt att setets ansiktshårborttagare är exakt samma variant som BRR454/00. Aktuella erbjudanden, reservdelskostnader och bildrättigheter återstår.",
  sources: [
    { id: "F1", title: "Philips Sverige – BRR454/00", url: "https://www.philips.se/c-p/BRR454_00/5000-series-facial-hair-remover", checkedAt: "2026-09-09", supports: "Ansiktsområden, spegel och LED. Tillverkarbeskrivning, inte ett eget test." },
    { id: "F2", title: "Philips – handbok för BRR454 med flera modeller", url: "https://www.documents.philips.com/assets/20231005/ddb8618f47174fc6bb8ab092009011f2.pdf", checkedAt: "2026-09-09", supports: "Torr apparat, AA-alkaliskt engångsbatteri och skillnaden mellan området mellan ögonbrynen och själva ögonbrynen. Länkad från BRR454/00-supporten." },
    { id: "F3", title: "Philips Sverige – BRL159/00", url: "https://www.philips.se/c-p/BRL159_00/lady-shaver-series-8000-cordless-shaver-wet-dry", checkedAt: "2026-09-09", supports: "Exakt modell och kroppsrakapparat för våt och torr användning. Kundrecensioner för andra modeller används inte." },
    { id: "F4", title: "Philips – svenskt produktblad BRL159/00", url: "https://www.documents.philips.com/assets/20250721/f014e784c53246958c80b321009c170f.pdf", checkedAt: "2026-09-09", supports: "Separat ansiktshårborttagare och bikinitillbehör, USB-A-kabel och ingen nätadapter. Bekräftar inte säljarens aktuella paket." },
  ],
};
export const facialBodyGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/ansiktstrimmer-eller-rakapparat-dam",
  title: "Bara ansiktshår eller även kroppsrakning?",
  intro: "BRR454/00 är ett separat ansiktsverktyg. BRL159/00 är ett kroppsrakningsset som redan innehåller en ansiktshårborttagare. Börja med vad du saknar, så att du inte köper samma funktion två gånger.",
  decision: facialBodyDecision,
  productPaths: ["/skonhet/ansiktstrimmer", "/skonhet/rakapparat-dam"],
  related: [{ href: "/skonhet", text: "Fler beslut inom skönhet" }],
  questions: [
    { question: "Behöver jag köpa båda?", answer: "Inte automatiskt. Philips listar en separat ansiktshårborttagare i BRL159/00. Kontrollera säljarens paket och prova det du redan har innan du kompletterar." },
    { question: "Kan BRR454 forma ögonbrynen?", answer: "Vi rekommenderar den inte för det. Handboken tillåter området mellan ögonbrynen men säger att apparaten ska hållas borta från själva ögonbrynen och ögonfransarna." },
    { question: "Kan båda användas i duschen?", answer: "Nej. BRR454 ska hållas torr. Att BRL159:s kroppsrakapparat är avsedd för våt och torr användning betyder inte att den separata ansiktsapparaten har samma egenskaper." },
  ],
};
