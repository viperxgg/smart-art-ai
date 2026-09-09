import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { daylightLampDecision } from "@/lib/daylight-lamp-decision";

export const morningLightDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    daylightLampDecision.options[0],
    {
      productSlug: "philips-wake-up-light", model: "Philips SmartSleep HF3651/01",
      variant: "HF3651/01, inte HF3531 eller en appstyrd Connected-modell. Katalogens ASIN B074TP48WY är inte matchat mot aktuell svensk leverans.",
      chooseIf: "du vill jämföra en ljusväckarklocka med två alarmtider, åtta väckningsljud och 25 ljussteg. Det är dokumenterade reglage; vi har inte visat att just du vaknar lättare av dem.",
      avoidIf: "du behöver mobilstyrning eller ett säkert aktuellt erbjudande. Philips anger ingen smartphonestyrning och den svenska supportsidan markerar modellen som utgången. Den jämförs inte som ersättning för TL 30:s avsedda användning.",
      sourceIds: ["P1", "P2"], merchantVariantVerified: false,
    },
    {
      productSlug: "solnedgangslampa", model: "Aniepaa solnedgångslampa – modell ej verifierad",
      variant: "Katalogpost ASIN B09P8HS8CK. Exakt modell, manual, strömförsörjning och den påstådda 24-färgsvarianten är inte verifierade.",
      chooseIf: "du bara söker dekorativt ljus och först kan kontrollera den exakta lampans funktioner och instruktioner. Vi kan ännu inte rekommendera just denna produktpost.",
      avoidIf: "du behöver verifierad väckningsfunktion, dokumenterad ljusexponering eller stöd för ett sömnresultat. Ett produktnamn eller en stämningsbild styrker inget av detta.",
      sourceIds: ["S1"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En dokumenterad funktion löser ditt behov: exempelvis ljusväckning med bestämda alarmtider. Köp inte flera lampor bara för att fylla morgon och kväll med olika produkter; jämför först med det du redan använder.",
  noPurchaseWhen: "Din befintliga väckarklocka eller belysning redan fungerar och du inte kan beskriva vad en ny lampa ska förbättra. Guiden är inget behandlingsval för ihållande nedstämdhet eller sömnproblem.",
  swedishContext: "Philips svenska support markerar HF3651/01 som utgången; det bevisar inte att varje återförsäljare saknar lager. Kontrollera exakt modell, nätadapter och manual före köp. För TL 30 gäller modellens kontraindikationer och instruktioner, inte ett generellt morgonschema.",
  testing: "Vi har läst Philips modellblad och svenska support samt Beurers källor som anges nedan. Vi har inte testat väckning, sömn, humör, färgåtergivning eller ljusmängd. Aniepaa-posten kunde inte verifieras från den angivna produktsidan.",
  limitations: "Tre olika köpbehov, ingen gemensam effektvinnare. Beurers mätavstånd hör till den modellen och får inte användas för de andra lamporna. Svenska erbjudanden, bildrättigheter och Aniepaas modellidentitet återstår.",
  sources: [
    ...daylightLampDecision.sources.filter(source => ["L1", "L2"].includes(source.id)),
    { id: "P1", title: "Philips – HF3651/01, modellblad", url: "https://www.documents.philips.com/assets/20211005/26564adb39c14b62b360adb800d6f36d.pdf", checkedAt: "2026-09-09", supports: "Sida 3: två alarmtider, åtta väckningsljud, 25 ljussteg och ingen smartphonestyrning. Äldre specifikation, inte en aktuell lagerkontroll eller vårt effekttest." },
    { id: "P2", title: "Philips Sverige – support HF3651/01", url: "https://www.philips.se/c-p/HF3651_01/-/kundtjanst", checkedAt: "2026-09-09", supports: "Modellspecifik svensk support, markerad Utgått vid kontrollen." },
    { id: "S1", title: "Amazon – katalogens Aniepaa-ASIN, ej verifierad", url: "https://www.amazon.se/dp/B09P8HS8CK", checkedAt: "2026-09-09", status: "unavailable", supports: "Sidan kunde inte läsas vid kontrollen. Styrker inte färger, fjärrkontroll, adapter, modell eller tillgänglighet." },
  ],
};

export const morningLightGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/morka-morgnar",
  title: "Mörka morgnar – behöver du ljus, väckning eller inget nytt?",
  intro: "Börja med behovet. TL 30, Philips HF3651/01 och katalogens dekorationslampa är inte utbytbara. Här ser du vad vi kan dokumentera och vilken produkt som fortfarande saknar verifierad modell.",
  decision: morningLightDecision,
  productPaths: ["/halsa/dagsljuslampa/beurer-tl30", "/halsa/wake-up-light", "/halsa/solnedgangslampa"],
  questions: [
    { question: "Behöver jag en lampa för både morgon och kväll?", answer: "Inte automatiskt. Beskriv först vad din nuvarande belysning eller väckarklocka saknar. Två användningsord är inte två köpbehov." },
    { question: "Kan HF3651/01 styras från mobilen?", answer: "Nej, Philips modellblad anger ingen smartphonestyrning. Blanda inte ihop den med en annan SmartSleep-variant." },
    { question: "Har Aniepaa-lampan 24 färger och fjärrkontroll?", answer: "Det står i vår äldre katalog, men vi har inte kunnat verifiera uppgiften. Därför använder vi den inte som köpargument." },
    { question: "Vilken ger bättre sömn?", answer: "Det avgör vi inte här. Vi har inga egna jämförande tester av sömn eller uppvaknande, och dokumenterade reglage bevisar inte ett individuellt resultat." },
  ],
  related: [
    { href: "/halsa/dagsljuslampa", text: "Dagsljuslampa – kontrollera före köp" },
    { href: "/halsa/beurer-tl30-eller-tl35", text: "TL 30 eller TL 35?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
    { href: "/jamforelser", text: "Alla jämförelser" },
  ],
};
