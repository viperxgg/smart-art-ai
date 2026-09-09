import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { DecisionRecord } from "@/lib/decision-record";
import { indoorAirDecision } from "@/lib/indoor-air-decision";

export const aromaHumidityDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "salking-aromadiffuser",
      model: "SALKING aromdiffuser – modell ej bekräftad",
      variant: "Katalogen anger 100 ml, trälook och ASIN B0C5852YCQ. Aktuell butikspost kunde inte läsas. SALKING säljer flera 100 ml-modeller; Lumen och Coconut får inte användas som bevis för vilken variant denna post avser.",
      chooseIf: "du vill ha doft och först kan bekräfta modell, bruksanvisning och leveransinnehåll. Vi har ännu inte tillräckligt underlag för att rekommendera just denna SALKING-post.",
      avoidIf: "du behöver dokumenterad fuktreglering eller köper för ett löfte om bättre sömn. Vi har inte verifierat luftfuktning, ljudnivå, drifttid eller effekter på sömnen för varianten.",
      sourceIds: ["S1", "S2", "S3"], merchantVariantVerified: false,
    },
    {
      ...indoorAirDecision.options[0],
      sourceIds: ["A1", "A3"],
    },
  ],
  payMoreWhen: "Du har ett konstaterat behov av fukt och behöver reglering eller en behållare som passar din skötselrutin. Köp inte en större luftfuktare enbart för doft. Vi har inget jämförbart aktuellt prisunderlag och kan inte utse den billigaste lösningen.",
  noPurchaseWhen: "Du inte vill tillföra doft och inte har konstaterat ett behov av mer fukt. Börja med att kontrollera luftfuktigheten. En doftpreferens är inte ett skäl att köpa båda apparaterna, och synlig dimma visar inte hur bra en apparat reglerar rummets fukt.",
  swedishContext: "Classic 300S måste matchas mot EU-versionen, inte en amerikansk 120 V-apparat. Svensk leverans, stickkontakt, garanti och pris återstår att kontrollera för båda posterna. SALKING-sidornas amerikanska erbjudanden styrker inte svensk tillgänglighet.",
  testing: "Vi har läst Classic 300S EU-manual och EPA:s råd om skötsel. SALKINGs två produktbeskrivningar visar olika modellnamn men ger ingen säker koppling till katalogens ASIN. Inga egna mätningar av fukt, doftspridning, ljud eller drifttid har gjorts.",
  limitations: "Doft, luftfuktning och partikelfiltrering är olika behov. Classic 300S har en separat aromadyna: olja ska inte hällas i vattentanken. Det gör inte apparaten till en luftrenare. Ingen generell vinnare, hälsovinst eller rätt att använda produktbilder har verifierats.",
  sources: [
    { ...indoorAirDecision.sources[0], checkedAt: "2026-09-09", supports: "EU-manual: 6 liter och 220–240 V. Tryckta sidor 12–13 och 18–19: olja endast på aromadynan, aldrig i tank eller baskammare; doften är avsedd att vara svag och vatten ska bytas dagligen." },
    { id: "A3", title: "EPA – Use and Care of Home Humidifiers", url: "https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers", checkedAt: "2026-09-09", supports: "Kategoriråd: använd bara vid behov, följ luftfuktigheten, undvik kondens och sköt vattnet. Ultraljudsfuktare kan sprida mineraler och mikroorganismer. Ingen modellrekommendation." },
    { id: "S1", title: "Amazon Sverige – katalogens SALKING ASIN", url: "https://www.amazon.se/dp/B0C5852YCQ", checkedAt: "2026-09-09", status: "unavailable", supports: "Produktinnehållet kunde inte läsas vid kontrollförsöket. Modell, specifikationer och svensk leverans är inte styrkta." },
    { id: "S2", title: "SALKING – Lumen Aroma Diffuser", url: "https://salking.com/products/lumen-aroma-diffuser", checkedAt: "2026-09-09", supports: "Tillverkaren beskriver en 100 ml-modell med namnet Lumen. Sidan styrker inte att katalogens ASIN avser Lumen; dess prestandauppgifter överförs inte." },
    { id: "S3", title: "SALKING – Coconut Diffuser", url: "https://salking.com/products/coconut-diffuser", checkedAt: "2026-09-09", supports: "Tillverkaren beskriver även Coconut som 100 ml. Kapacitet och varumärke räcker alltså inte för säker modellmatchning." },
  ],
};

export const aromaHumidityGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/aromdiffuser-eller-luftfuktare",
  title: "Vill du ha doft eller behöver luften mer fukt?",
  intro: "Börja med behovet, inte med dimman. Classic 300S kan tillföra fukt och har en separat aromadyna. SALKING-postens exakta modell återstår att bekräfta, så vi utser ingen vinnare mellan produkterna.",
  decision: aromaHumidityDecision,
  productPaths: ["/halsa/aromdiffuser", "/halsa/luftfuktare"],
  questions: [
    { question: "Kan Classic 300S användas med eterisk olja?", answer: "Ja, EU-manualen beskriver en separat aromadyna för en svag doft. Lägg inte olja i vattentanken eller baskammaren. Följ instruktionen för just din modell; överför den inte till andra luftfuktare." },
    { question: "Är SALKING-modellen Lumen eller Coconut?", answer: "Det är inte bekräftat. Båda namnen finns på tillverkarens 100 ml-produkter, men vi har ingen säker matchning till ASIN B0C5852YCQ. Därför publicerar vi inte deras ljuslägen, ljudtal eller drifttider som specifikationer för katalogposten." },
    { question: "Behöver jag en luftfuktare bara för att luften känns torr?", answer: "En känsla fastställer inte orsaken. Kontrollera luftfuktigheten innan köp. EPA rekommenderar att följa fuktnivån och minska användningen om kondens uppstår. En större tank är inte ett bevis på att apparaten behövs." },
    { question: "Kan en liten diffuser ersätta en luftfuktare?", answer: "Vi har inte jämförbar uppmätt fuktkapacitet för SALKING-posten och lovar varken att den räcker eller hur liten effekten är. För ett behov av fuktreglering krävs modellbundna uppgifter och uppföljning i rummet." },
  ],
  related: [
    { href: "/halsa/luftfuktare-eller-luftrenare", text: "Fukt eller partikelfiltrering?" },
    { href: "/halsa", text: "Fler beslut för hemmet" },
  ],
};
