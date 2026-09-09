import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { personalWarmthDecision } from "@/lib/personal-warmth-decision";

export const heatOrMassageDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    personalWarmthDecision.options[1],
    { productSlug: "renpho-massagekudde", model: "RENPHO RF-NM067",
      variant: "ASIN B07PMK1XZ4 kopplas till RF-NM067 i Amazons Singapore-katalog. Svensk leverans och medföljande nätadapter är inte matchade. Inte RP-NM068 eller en hel massagesits.",
      chooseIf: "du vill ha mekanisk knådning med tre hastigheter och valbar värme, och kan följa begränsningarna i RF-NM067-manualen. Automatisk avstängning sker efter 15 minuter.",
      avoidIf: "du vill använda den medan du sover, kör bil eller har den under en filt eller kudde; manualen förbjuder detta. Välj den inte som behandling av oförklarad smärta.",
      sourceIds: ["R1", "R2", "R3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Du faktiskt behöver mekanisk knådning eller ett visst format. Extra värme gör inte en massagekudde till en ersättning för en värmedyna, och hårdare tryck är inte bevis på bättre effekt. Aktuella jämförbara priser saknas.",
  noPurchaseWhen: "Du redan får den komfort du vill ha av en vanlig filt, kläder eller en paus. Köp inte båda för säkerhets skull. Ihållande eller oförklarade besvär ska inte avgöra ett produktval utifrån våra komfortbeskrivningar.",
  swedishContext: "Kontrollera modell, stickkontakt och rätt adapter i det svenska erbjudandet. RENPHO publicerar en EU-försäkran för RF-NM067; det bevisar varken leveransvariant eller medicinsk effekt. Beurers dokumenterade referens är HK Comfort Cosy 27392.",
  testing: "Ingen av produkterna har provats av oss. Beurers tidigare källor återanvänds; RENPHO-manualen är tillverkarens dokument på Amazons dokumentserver. Ingen rangordning av smärtlindring, komfort eller värmeeffekt görs.",
  limitations: "RENPHO-manualen kräver läkarkontakt före användning vid bland annat graviditet, implantat, känselnedsättning eller skador. Avbryt vid ovanligt obehag. Beurers värmedyna får inte användas av den som inte kan känna eller reagera på överhettning. Läs hela respektive manual; ingen generell daglig användningsrutin rekommenderas. Bilder och butiksmatchning återstår.",
  sources: [
    ...personalWarmthDecision.sources.filter(source => ["H3", "H4"].includes(source.id)),
    { id: "R1", title: "RENPHO – RF-NM067 användarmanual", url: "https://m.media-amazon.com/images/I/81eWQ4VoIdL.pdf", checkedAt: "2026-09-09", supports: "Engelska sidor 1–5: reglage, 15-minuterstimer, begränsningar och rengöring. Tillverkardokument från 2023 på Amazons dokumentserver; kontrollera manualen till ditt exemplar." },
    { id: "R2", title: "RENPHO – EU-försäkran för RF-NM067", url: "https://cdn.shopify.com/s/files/1/0508/6907/6121/files/RF-NM067_Massage_Pillow_f0ed4dd7-b3e2-4bc1-a11e-736ade8f62db.pdf?v=1746794388", checkedAt: "2026-09-09", supports: "Länkad från renpho.eu/pages/compliance-data. Tillverkarens modellidentitet och egen försäkran daterad 2025-04-25, inte vårt säkerhetstest." },
    { id: "R3", title: "Amazon Singapore – ASIN och modell", url: "https://www.amazon.sg/RENPHO-Massager-Kneading-Shoulders-Birthday/dp/B07PMK1XZ4", checkedAt: "2026-09-09", supports: "Indexerad katalog kopplar ASIN till RF-NM067. Äldre katalogunderlag; aktuellt svenskt erbjudande inte verifierat." },
  ],
};

export const heatOrMassageGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/varmedyna-eller-massagekudde",
  title: "Värmedyna eller massagekudde – värme eller mekanisk knådning?",
  intro: "HK Comfort är ett mindre värmeformat; RF-NM067 har rörliga massagenoder. Börja med funktionen du vill ha och användningsbegränsningarna, inte ett löfte om att behandla spänningar.",
  decision: heatOrMassageDecision, productPaths: ["/halsa/varmedyna", "/halsa/massagekudde"],
  questions: [
    { question: "Kan jag använda RF-NM067 medan jag sover?", answer: "Nej, manualen utesluter användning på en sovande person. Avstängningstimern ändrar inte detta." },
    { question: "Vilken är bäst för ont i nacken?", answer: "Det har vi inte underlag att avgöra. Vi jämför funktioner, inte behandlingseffekt. Ingen av våra rekommendationer ersätter en individuell bedömning av besvär." },
    { question: "Måste jag använda värmen under massagen?", answer: "Nej, RF-NM067-manualen beskriver värmen som valbar. Vi har inte mätt dess temperatur på huden eller hur den upplevs." },
    { question: "Hur skiljer sig rengöringen?", answer: "HK Comfort har särskilda tvättinstruktioner; se jämförelsen med elfilt. För RF-NM067 anger manualen avtorkning med lätt fuktad duk efter frånkoppling och avsvalning. Blanda inte ihop produkternas skötselråd." },
  ],
  related: [{ href: "/halsa/elfilt-eller-varmedyna", text: "Behöver du större värmeyta?" }, { href: "/halsa", text: "Fler beslut för vardagen" }],
};
