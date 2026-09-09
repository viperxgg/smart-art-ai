import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const portableDeskFanDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "jisulife-handflakt", model: "JISULIFE Pro1 – variant ej bekräftad",
      variant: "Namnet Pro1 kommer från katalogen, med ASIN B0GQ45ZZHB. Den aktuella butiksposten kunde inte läsas. Pro1 S och Pro1 Mini får inte automatiskt räknas som samma produkt.",
      chooseIf: "du behöver en fläkt att bära med dig och först kan bekräfta modell, batteri och laddning. Vi saknar tillräckligt underlag för att rekommendera just denna katalogpost.",
      avoidIf: "du behöver en garanterad heldagsdrift, låg ljudnivå eller en viss laddkontakt. Inget av detta är verifierat för den angivna varianten.",
      sourceIds: ["J1", "J2"], merchantVariantVerified: false,
    },
    {
      productSlug: "xiaomi-bordsflakt", model: "Mi Smart Standing Fan 2 Lite",
      variant: "JLLDS01XY enligt Xiaomi Singapore. Inte Standing Fan 2 utan Lite. Svensk butiksvariant och appregion är inte matchade.",
      chooseIf: "du vill växla mellan golv- och bordsplacering och har plats för apparaten. Tillverkaren anger 100 cm respektive 64,2 cm höjd; knapparna sitter upptill och standardläget har tre hastigheter.",
      avoidIf: "du behöver en liten batterifläkt att bära med dig. Specifikationen anger nätanslutning, 3,5 kg och 343 × 330 mm grundmått. Kontrollera utrymmet innan du väljer den till skrivbordet.",
      sourceIds: ["X1", "X2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du har ett verifierat behov av exempelvis annan placering eller reglage. Appstyrning kan vara bekvämt men bevisar inte bättre luftflöde eller lägre ljud. Vi har inga jämförbara aktuella totalpriser och ingen dokumenterad prestandavinnare mellan dessa två poster.",
  noPurchaseWhen: "Din befintliga fläkt redan fungerar på en lämplig plats. Prova dess tillåtna placering och hastigheter först. Köp inte både en handfläkt och en större fläkt bara för att de marknadsförs för olika situationer.",
  swedishContext: "Xiaomis lästa specifikation anger 220–230 V, 50/60 Hz och Wi-Fi 2,4 GHz. Singapore-sidorna styrker inte svensk stickkontakt eller appregion. Bekräfta rätt version och vad som ingår; aktuella svenska erbjudanden saknas för båda posterna.",
  testing: "Vi har läst Xiaomis specifikation och produktbeskrivning samt JISULIFEs sida för Pro1 S. Ingen egen mätning av luftflöde, ljud, batteritid eller upplevd svalka. JISULIFE-sidan används bara för att skilja modellnamnen åt.",
  limitations: "En större fläkt är inte automatiskt bättre där du sitter. Xiaomis minsta marknadsförda ljudvärde och specifikationens ljudtal har inte jämförts med JISULIFE under samma villkor. Vi lovar inte tyst sovrumsdrift, automatisk svensk appkompatibilitet eller att en okänd handfläkt räcker hela dagen. Bildrättigheter återstår.",
  sources: [
    { id: "J1", title: "Amazon Sverige – katalogens JISULIFE ASIN", url: "https://www.amazon.se/dp/B0GQ45ZZHB", checkedAt: "2026-09-09", status: "unavailable", supports: "Butiksinnehållet kunde inte läsas. Modell, batteri och leverans är inte verifierade." },
    { id: "J2", title: "JISULIFE – Handheld Fan Pro1 S", url: "https://jisulife.com/products/jisulife-handheld-fan-pro1s-2025", checkedAt: "2026-09-09", supports: "Sidan avser Pro1 S. Dess batteri- och prestandauppgifter används inte som specifikation för katalogens Pro1." },
    { id: "X1", title: "Xiaomi Singapore – 2 Lite, specifikation", url: "https://www.mi.com/sg/product/mi-smart-standing-fan-2-lite/specs/", checkedAt: "2026-09-09", supports: "JLLDS01XY, nätspänning, Wi-Fi, mått och nettovikt. Ingen svensk erbjudandematchning." },
    { id: "X2", title: "Xiaomi Singapore – 2 Lite, funktioner", url: "https://www.mi.com/sg/product/mi-smart-standing-fan-2-lite/", checkedAt: "2026-09-09", supports: "Två monteringshöjder, tre standardhastigheter och knappar upptill. Vissa smarta funktioner kräver separat utrustning; tillverkarens laboratorietal är inte vårt jämförande test." },
  ],
};

export const portableDeskFanGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/handflakt-eller-bordsflakt",
  title: "Bära med fläkten eller ge den en fast plats?",
  intro: "Xiaomi 2 Lite är en nätansluten fläkt med två monteringshöjder. Den är inte en liten handfläkt. JISULIFE-postens exakta variant återstår att bekräfta; börja med plats och strömförsörjning.",
  decision: portableDeskFanDecision,
  productPaths: ["/halsa/handflakt", "/halsa/bordsflakt"],
  questions: [
    { question: "Hur liten blir Xiaomi i bordsläge?", answer: "Tillverkaren anger 64,2 cm höjd i bordsläge och 100 cm i golvläge. Kontrollera även grundmåtten 343 × 330 mm mot bordet. Vi har inte provat hur den ryms på ett visst skrivbord." },
    { question: "Måste jag använda appen?", answer: "Xiaomi visar knappar upptill för lokal styrning. Mi Home ger fjärrstyrning; temperaturkopplade scenarier kan kräva separat sensor och hubb. Vi har inte verifierat svensk appregion eller alla funktioner utan uppkoppling." },
    { question: "Håller JISULIFE-fläkten hela dagen?", answer: "Det vet vi inte för denna post. Namnet Pro1 räcker inte för att överföra tillverkarens drifttid för Pro1 S. Exakt variant och villkoren för batteritidsuppgiften behöver kontrolleras först." },
    { question: "Vilken är starkast och tystast?", answer: "Ingen sådan vinnare kan utses utan jämförbara mätningar för rätt modeller, inställningar och avstånd. Vi har inte gjort dem. Ett marknadsfört minimum visar inte ljudet vid det luftflöde du behöver." },
  ],
  related: [
    { href: "/halsa/tornflakt-eller-bordsflakt", text: "Tornfläkt eller annan placering?" },
    { href: "/halsa/flakt", text: "Fler fläktmodeller och deras begränsningar" },
  ],
};
