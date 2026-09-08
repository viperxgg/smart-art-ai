import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const niacinamideDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "inkey-niacinamide-serum", model: "The INKEY List 10% Niacinamide Serum, 30 ml",
    variant: "10%-serumet på den brittiska tillverkarsidan, med hyaluronsyra i ingredienslistan. Inte 20% Niacinamide/Excess Oil Solution. Katalogens ASIN B09PP2DK5W är inte matchad mot den aktuella svenska butiksvarianten.",
    chooseIf: "du vill undersöka ett niacinamidserum för glansig hud, vilket är ett av tillverkarens angivna användningsområden, och har ett tydligt skäl att lägga till ett serum. Det är ingen garanti om effekt för dig.",
    avoidIf: "du förväntar dig att 10% automatiskt är milt för alla eller att serumet ersätter behandling av ett hudproblem. Vi har inte testat individuell tolerans eller visat att du behöver just denna koncentration.",
    sourceIds: ["N1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Det finns en dokumenterad skillnad du behöver i den kompletta produkten. 20% är inte bara samma serum i dubbel styrka: tillverkaren anger också zink PCA och skvalan i den separata formulan. Vi har inget jämförande test som visar att ett byte ger bättre resultat eller är värt prisskillnaden.",
  noPurchaseWhen: "Din nuvarande rutin fungerar och du inte kan beskriva vad du vill förändra. Du behöver inte köpa både 10% och 20%, eller byta till högre koncentration för att den finns. Kontrollera också om en produkt du redan använder innehåller niacinamid.",
  swedishContext: "Underlaget kommer från brittiska produktsidor. Läs ingredienslista och användningsråd på den förpackning som säljs till dig; svensk variant, totalpris, lager, frakt och bildrättigheter är inte verifierade.",
  testing: "Vi har läst produktinformation och ingredienslistor, inte provat serum på huden eller jämfört 10% med 20%. Tillverkarens målgrupper och effektpåståenden är inte vårt testresultat. Vi kan varken fastslå en optimal koncentration för alla eller en individuell risk för irritation.",
  limitations: "Tillverkarens huvudråd och vissa FAQ-svar är inte helt samstämmiga om mängd och kombinationer. Följ den aktuella förpackningen och be om klargörande vid motstridiga råd. Vi ger ingen generell garanti för kombination med C-vitamin, syror, läkemedel eller för känslig hud.",
  sources: [
    { id: "N1", title: "The INKEY List UK – 10% Niacinamide Serum", url: "https://uk.theinkeylist.com/products/niacinamide-serum", checkedAt: "2026-09-09", supports: "Styrker 10%, 30 ml och hyaluronsyra i ingredienslistan. Tillverkaren beskriver användning efter rengöring, uppföljning med fuktkräm och SPF dagtid samt rekommenderar patchtest. Ingen svensk ASIN-matchning eller jämförande effektkontroll." },
    { id: "N2", title: "The INKEY List UK – 20% Niacinamide/Excess Oil Solution", url: "https://uk.theinkeylist.com/products/excess-oil-solution", checkedAt: "2026-09-09", supports: "Separat 30 ml-formula med 20% niacinamid, zink PCA och skvalan. Visar att flera ingredienser skiljer sig. Marknadsföring och omdömen bevisar inte att dubbel koncentration är bättre för läsaren." },
  ],
};

export const niacinamideStrengthGuide: DecisionGuide = {
  path: "/guider/niacinamide-10-vs-20", title: "Niacinamid 10% eller 20% – vad skulle motivera ett byte?",
  intro: "Ett högre procenttal är ingen färdig köpguide. INKEYs 10%- och 20%-produkter har olika formulor, och vi har inget eget jämförande test. Börja med behovet och vad som redan finns i din rutin.",
  decision: niacinamideDecision, productPaths: ["/skonhet/niacinamide-serum"],
  questions: [
    { question: "Är 20% samma serum med dubbelt så mycket niacinamid?", answer: "Nej. Tillverkarens ingredienslistor skiljer sig. Därför kan en eventuell skillnad i upplevelse inte utan vidare tillskrivas procenttalet. Vi har inte jämfört produkterna under samma förhållanden." },
    { question: "Är 10% alltid tillräckligt eller skonsammare?", answer: "Vi kan inte slå fast det. Den tidigare generella rekommendationen att 10% räcker för de flesta saknade jämförande underlag. Koncentration ensam avgör inte om en färdig produkt fungerar för dig." },
    { question: "När kan jag avstå från att byta?", answer: "När din nuvarande produkt fungerar och du inte har ett tydligt, kvarvarande behov. Att tillverkaren säljer en starkare produkt är inte skäl nog att uppgradera eller att använda båda." },
    { question: "Kan jag kombinera med C-vitamin eller syror?", answer: "Anta inte att alla kombinationer passar. INKEY ger särskilda kombinationsråd, och vissa FAQ-formuleringar skiljer sig från huvudråden. Läs förpackningarna för de exakta produkterna och klargör eventuella motsägelser innan du ändrar rutinen." },
    { question: "Hur använder tillverkaren 10%-serumet?", answer: "Huvudavsnittet anger användning efter rengöring och återfuktande steg, sedan fuktkräm och solskydd i morgonrutinen. Tillverkaren rekommenderar patchtest när en ny produkt införs. Detta är produktens instruktioner, inte en personligt utprovad rutin." },
  ],
  related: [{ href: "/guider", text: "Fler frågor före köp" }],
};
