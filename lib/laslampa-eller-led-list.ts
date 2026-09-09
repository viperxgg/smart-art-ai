import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { DecisionRecord } from "@/lib/decision-record";

export const readingLightDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "gritin-laslampa",
      model: "Gritin 19 LED läslampa med minnesfunktion",
      variant: "19 LED, horisontellt lamphuvud och minnesfunktion. Inte 9 LED eller en nacklampa. Katalogens ASIN B0CBPL4RKH är inte matchat mot en aktuell svensk leverans; kontrollera reglage och laddkontakt på exemplaret.",
      chooseIf: "du behöver rikta ljuset mot boken och vill ha en laddbar lampa som kan klämmas fast. Tillverkaren beskriver böjbar hals, tre färgtemperaturer och fem ljusstyrkor med minne för inställningen.",
      avoidIf: "du vill lysa upp hela rummet eller inte kan bekräfta att klämman passar där du ska fästa den. Riktbart ljus garanterar inte att personen bredvid kan sova ostört.",
      sourceIds: ["L1"], merchantVariantVerified: false,
    },
    {
      productSlug: "govee-led-list",
      model: "Govee Neon Rope Light 2 H61D5, 5 m",
      variant: "H61D5 är femmetersmodellen av Neon Rope Light 2. Inte första generationens H61A2 eller tremetersmodellen H61D3. EU-sidan anger EU-kontakt; aktuell butikspost och medföljande adapter återstår att matcha.",
      chooseIf: "du vill skapa färgade former eller ljuseffekter inomhus och har planerat plats för fem meter samt ett eluttag. EU-sidan beskriver RGBIC, formbara fästen och styrning via Govee Home och Matter.",
      avoidIf: "du behöver en liten batteridriven lampa vid boken eller ska placera ljuset utomhus. H61D5-manualen anger inomhusbruk och medföljande nätadapter. Vi har inget lästest som visar att den ersätter en läslampa.",
      sourceIds: ["L2", "L3"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du faktiskt behöver färgeffekter, en bestämd ljusform eller smart styrning. För läsning är det mer relevant att ljuset går att rikta och att fästet passar. Vi har inte jämfört aktuella totalpriser eller uppmätt ljuset och utser ingen prisvinnare.",
  noPurchaseWhen: "Du redan ser boksidan bekvämt med din befintliga lampa. Prova först att ändra placering och ljusstyrka. Köp inte ett femmeters ljusrep enbart för att förbättra ett litet läsområde; de två produkterna behöver inte köpas tillsammans.",
  swedishContext: "Kontrollera EU-kontakt och rätt adapter för Govee. Manualen anger 2,4 GHz Wi-Fi för Govee Home, inte 5 GHz; Matter-guiden anger IPv6 och en kompatibel app. Gritin anger USB-C och medföljande kabel, vilket inte i sig bekräftar att väggadapter ingår. Kontrollera svensk leverans och paketets innehåll.",
  testing: "Vi har läst tillverkarnas produktbeskrivningar och H61D5-manualen. Ingen egen mätning av belysningsstyrka, flimmer, bländning, batteritid eller påverkan på en sovande partner. Skillnaden mellan riktat läsljus och dekorativt ljus är vår användningsbedömning, inte ett jämförande ljustest.",
  limitations: "Gritins batteritid och ljusegenskaper är tillverkaruppgifter. Vi garanterar inte ögonskydd, ostörd sömn eller att klämman passar varje sänggavel. Govees säljsida har ett FAQ-svar om utomhusdekoration, men modellmanualen anger inomhusbruk; här följer vi manualen. Exakta butikserbjudanden och bildrättigheter är inte verifierade.",
  sources: [
    { id: "L1", title: "Gritin – 19 LED Book Light with Memory Function", url: "https://www.igritin.com/products/gritin-19-led-rechargeable-goose-neck-clip-on-book-light-for-reading-in-bed-with-memory-function", checkedAt: "2026-09-09", supports: "19 LED med horisontellt huvud, tre färgtemperaturer, fem ljusstyrkor/minne, böjbar hals, klämma och USB-C med kabel. Tillverkarens driftstid är ett intervall, inte ett eget test. Ingen verifierad svensk butiksvariant eller garanti om ostörd sömn." },
    { id: "L2", title: "Govee EU – Neon Rope Light 2", url: "https://eu.govee.com/products/govee-neon-rope-light-2", checkedAt: "2026-09-09", supports: "H61D5 avser 5 m; EU-kontakt, RGBIC, böjbara fästen och stöd för Govee Home/Matter. Vi använder inte sidans generiska utomhus-FAQ som installationsanvisning." },
    { id: "L3", title: "Govee H61D5 – tillverkarens manual, återgiven av distributör", url: "https://www.cpib2b.gr/datafiles/Datasheets/1.SH.01.G037.pdf", checkedAt: "2026-09-09", supports: "Engelska sidor 1–7: endast inomhus, medföljande adapter, fästen/montering, fysiska reglage, Govee Home-konto och 2,4 GHz Wi-Fi samt Matter/IPv6. H61D5 och adapter 100–240 V bekräftas i specifikationen." },
  ],
};

export const readingLightGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/laslampa-eller-led-list",
  title: "Behöver du läsljus eller färg i rummet?",
  intro: "Gritin riktas mot ett litet läsområde. Govee ger formbara ljuseffekter över fem meter. Börja med vilken uppgift ljuset ska lösa och vad som redan fungerar hemma.",
  decision: readingLightDecision,
  productPaths: ["/halsa/laslampa", "/halsa/led-list"],
  questions: [
    { question: "Måste jag öppna appen för att tända Govee?", answer: "Manualen visar knappar för av/på, färg och ljusstyrka på kontrollenheten. Govee Home ger fler inställningar; manualens appinstallation kräver konto, Bluetooth och ett 2,4 GHz-nät. Det är inte samma sak som att appen måste vara öppen för varje knapptryck." },
    { question: "Kan Govee-ljuset användas utomhus?", answer: "H61D5-manualen anger endast inomhusbruk. Vi följer den modellbundna anvisningen, även om ett FAQ-svar på säljsidan beskriver utomhusdekoration." },
    { question: "Hur länge lyser Gritin per laddning?", answer: "Tillverkaren anger 8–80 timmar för 19 LED-modellen med minne. Det är ett brett intervall, inte 80 timmar vid alla inställningar. Vi har inte mätt batteritiden eller bekräftat prestandan hos ett butiksexemplar." },
    { question: "Kan jag läsa utan att störa någon som sover?", answer: "Du kan rikta och dimra Gritins ljus, men vi kan inte garantera ostörd sömn. Avstånd, placering och personens känslighet spelar roll. Prova din befintliga lampa innan du köper en ny för det löftet." },
  ],
  related: [{ href: "/halsa", text: "Fler beslut för hemmet" }],
};
