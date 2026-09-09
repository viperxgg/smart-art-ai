import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const personalWarmthDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "beurer-hd75-elfilt", model: "Beurer HD 75 – referens Nordic Taupe 42103",
      variant: "Dokumenterad referens: HD 75 Nordic Taupe, artikel 42103, 180 × 130 cm. Katalogens ASIN B08KB3FHGH är inte matchat mot ett aktuellt svenskt erbjudande. Andra HD 75-färger har andra artikelnummer.",
      chooseIf: "du behöver en större elektrisk överfilt för kroppsvärme och har plats att använda den utan veck. Referensen har sex temperaturlägen och automatisk avstängning efter tre timmar.",
      avoidIf: "du bara behöver en liten värmeyta, vill värma rummet eller inte kan följa manualens begränsningar. Använd den inte våt eller hopvikt; automatiken gör inte felaktig användning säker.",
      sourceIds: ["H1", "H2"], merchantVariantVerified: false },
    { productSlug: "beurer-varmedyna", model: "Beurer HK Comfort – referens Cosy 27392",
      variant: "Dokumenterad referens: HK Comfort Cosy, artikel 27392, 44 × 33 cm. Katalogens ASIN B00AAW1VKQ och nuvarande svensk leverans är inte matchade; kontrollera artikelnumret före köp.",
      chooseIf: "du behöver ett mindre värmeformat som går att placera utan vikning. Referensen har tre temperaturlägen och automatisk avstängning efter cirka 90 minuter.",
      avoidIf: "du vill täcka en stor del av kroppen eller behöver en formsydd nackprodukt. HK Comfort är en mindre dyna, inte ett löfte om smärtlindring eller en ersättning för medicinsk bedömning.",
      sourceIds: ["H3", "H4"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Rätt format, reglage och skötsel löser ett konkret behov. En större filt är inte automatiskt bättre än en liten dyna. Vi har inte jämförbara aktuella priser eller uppmätt energiförbrukning och lovar ingen besparing på elräkningen.",
  noPurchaseWhen: "En vanlig filt eller ett extra klädlager redan ger den komfort du behöver. Om problemet gäller hela rummets temperatur behöver orsaken hanteras; en personlig värmeprodukt ersätter inte bostadens uppvärmning.",
  swedishContext: "Beurer anger Euro-kontakt för båda referensartiklarna och länkar även flerspråkiga manualer med svenska. Kontrollera ändå märkspänning, rätt reglage och artikelnummer på varan som faktiskt levereras. Här har de engelska manualerna lästs.",
  testing: "Vi har läst Beurers modelluppgifter och manualer, men inte provat värmefördelning, hudkomfort, hållbarhet eller strömförbrukning. Storlek och timer är tillverkaruppgifter, inte resultat av ett jämförande test.",
  limitations: "Båda manualerna utesluter personer som inte känner eller kan reagera på överhettning samt barn under tre år. Vid pacemaker hänvisar manualerna till läkare och pacemakertillverkare. Läs hela manualen; detta är inte en fullständig säkerhetsinstruktion. Svensk butiksmatchning och bildrättigheter återstår.",
  sources: [
    { id: "H1", title: "Beurer – HD 75 Nordic Taupe 42103", url: "https://www.beurer.com/global/p/42103/", checkedAt: "2026-09-09", supports: "Exakt referensartikel, mått, Euro-kontakt, sex lägen och tre timmars avstängning. Styrker inte katalogens aktuella svenska erbjudande." },
    { id: "H2", title: "Beurer – HD 75 manual, 2025-03-03", url: "https://res.cloudinary.com/beurer/image/upload/v1742554990/stibo-live/HD75_2025-03-03_10_IM2_BEU_EN.pdf", checkedAt: "2026-09-09", supports: "Omfattar Nordic Taupe. Sidor 4–7: användningsbegränsningar, timer och skötsel. Ingen uppmätt energibesparing." },
    { id: "H3", title: "Beurer – HK Comfort Cosy 27392", url: "https://www.beurer.com/global/p/27392/", checkedAt: "2026-09-09", supports: "Referensartikel, 44 × 33 cm, tre lägen, Euro-kontakt och 90 minuters avstängning. Styrker inte ASIN-matchning." },
    { id: "H4", title: "Beurer – HK Comfort manual, 2023-09-15", url: "https://res.cloudinary.com/beurer/image/upload/v1744513008/stibo-live/07101274_HK-Comfort_2023-09-15_01_IM1_BEU_EN.pdf", checkedAt: "2026-09-09", supports: "Sidor 4–7: begränsningar vid användning, temperatur, automatisk avstängning och skötsel." },
  ],
};

export const personalWarmthGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/elfilt-eller-varmedyna",
  title: "Elfilt eller värmedyna – hur stor värmeyta behöver du?",
  intro: "En större överfilt och en liten värmedyna löser olika komfortbehov. Jämför HD 75 och HK Comfort med namngivna referensartiklar, platsbehov och begränsningar innan du väljer.",
  decision: personalWarmthDecision, productPaths: ["/halsa/elfilt", "/halsa/varmedyna"],
  questions: [
    { question: "Är avstängningstimern ett skäl att välja?", answer: "Den skiljer modellerna: tre timmar för HD 75 och cirka 90 minuter för HK Comfort. Välj efter användningsbehov, men använd inte timern som ersättning för manualens instruktioner." },
    { question: "Kan jag tvätta dem?", answer: "Dra ur nätkontakten och koppla bort reglaget före rengöring. Manualerna tillåter skonsam maskintvätt vid 30 °C; HK Comfort-manualen begränsar maskintvätt till högst tio gånger under livslängden. Reglaget får inte blötas och produkten och anslutningen måste vara helt torra före återanslutning. Följ hela skötselavsnittet; slå aldrig på värmen för att torka produkten." },
    { question: "Vilken sparar mest el?", answer: "Det har vi inte mätt. Kostnaden beror på faktisk förbrukning och ditt elpris samt om någon annan uppvärmning faktiskt ersätts. Inget sparbelopp eller energivinnare utses." },
    { question: "Måste jag köpa en elektrisk produkt?", answer: "Nej. Om en vanlig filt eller kläder räcker för din komfort tillför elvärmen inget nödvändigt. För att värma ett helt rum behövs en annan bedömning." },
  ],
  related: [{ href: "/halsa", text: "Fler beslut för vardagen" }, { href: "/jamforelser", text: "Alla jämförelser" }],
};
