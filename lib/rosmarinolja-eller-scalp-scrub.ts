import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const scalpDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "mielle-rosemary-oil", model: "Mielle Rosemary Mint Scalp & Hair Strengthening Oil",
      variant: "Den namngivna oljeblandningen, inte ren eterisk rosmarinolja. Katalogens 58 g är inte verifierad förpackningsstorlek; kontrollera etiketten hos säljaren.",
      chooseIf: "du vill lägga till en olja för hårets mjukhet och glans och redan vet att en oljerutin passar dig. Tillverkaren beskriver en liten mängd som fördelas från hårbotten genom håret och kan lämnas kvar.",
      avoidIf: "du vill avlägsna produktrester eller söker en verifierad behandling mot håravfall. Blandningen innehåller bland annat rosmarin-, pepparmynts- och tea tree-olja samt mentol; den är inte en enkel, neutral basolja.",
      sourceIds: ["S1"], merchantVariantVerified: false,
    },
    {
      productSlug: "inkey-scalp-scrub", model: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub 150 ml",
      variant: "Glycolic Acid Exfoliating Scalp Scrub 150 ml. Inte Salicylic Acid Scalp Treatment eller Glycolic Acid Body Stick. Butikens aktuella variant är inte matchad.",
      chooseIf: "du vill prova ett separat steg mot ansamling av stylingrester före schamponering. EU-sidan anger 7% glykolsyra och 2% ricinoljebaserade korn: både kemisk och mekanisk exfoliering.",
      avoidIf: "hårbotten är sårig eller irriterad, eller du vill ha en daglig leave-in. Tillverkaren avråder från användning på skadad eller irriterad hud och anger att produkten ska sköljas ur.",
      sourceIds: ["S2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du har identifierat ett behov som din vanliga tvätt eller befintliga hårvård inte löser. Produkterna utför olika moment; vi har inget underlag för att du behöver köpa båda. Pris eller popularitet bevisar inte bättre effekt på hårväxt.",
  noPurchaseWhen: "Din hårbotten känns bra och rutinen fungerar. Om håret faller av samtidigt som hårbotten kliar, ömmar eller är röd, rekommenderar 1177 kontakt med vårdcentral. Då är en ny olja eller skrubb inte ett bra första köpbeslut.",
  swedishContext: "1177 ger svensk vägledning om när håravfall bör bedömas av vården. Kontrollera samtidigt produktnamn, ingredienslista, mängd och säljarens totalpris. Mielle-källan är amerikansk och INKEY-källan europeisk; de verifierar inte den aktuella svenska butikens förpackning.",
  testing: "Vi har läst tillverkarnas innehålls- och användningsuppgifter samt 1177:s råd. Ingen egen användning, mätning av hårväxt eller jämförande hårbottentest. Vi överför inte forskning om en enskild ingrediens till ett effektlöfte för den färdiga produkten.",
  limitations: "Vi har inte verifierat att någon av produkterna behandlar håravfall, mjäll eller en hårbottensjukdom. Oljan och syraskrubben är inte utbytbara. Följ etiketten; mer eller oftare är inte automatiskt bättre. Bildrättigheter, aktuella erbjudanden och Mielle-storlek återstår.",
  sources: [
    { id: "S1", title: "Mielle – Rosemary Mint Oil, innehåll och användning", url: "https://mielleorganics.com/products/rosemary-mint-oil", checkedAt: "2026-09-09", supports: "Blandade oljor, mentol, kosmetisk hårvård och tillverkarens leave-in-användning. Inte kliniskt bevis för ny hårväxt eller svensk förpackningsstorlek." },
    { id: "S2", title: "The INKEY List EU – Glycolic Acid Scalp Scrub", url: "https://eu.theinkeylist.com/products/glycolic-acid-exfoliating-scalp-scrub", checkedAt: "2026-09-09", supports: "150 ml, glykolsyra och korn, före schampo, 10 minuter och 1–2 gånger per vecka. Avråder från skadad/irriterad hud och rekommenderar test på liten yta. Ingen egen effektmätning." },
    { id: "S3", title: "1177 – Håravfall", url: "https://www.1177.se/sjukdomar--besvar/hud-har-och-naglar/harbotten-och-harsackar/haravfall/", checkedAt: "2026-09-09", supports: "När vårdcentral bör kontaktas, bland annat vid håravfall från kliande, öm eller röd hårbotten. Ingen produktrekommendation." },
  ],
};
export const scalpGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/rosmarinolja-eller-scalp-scrub",
  title: "Hårolja eller scalp scrub – vilket steg saknas egentligen?",
  intro: "Mielle tillför en oljeblandning; INKEY är ett exfolierande steg före schampo. Börja med behovet och vad som redan fungerar. Ingen av dem rekommenderas här som behandling mot håravfall.",
  decision: scalpDecision,
  productPaths: ["/skonhet/rosmarinolja", "/skonhet/scalp-scrub"],
  related: [{ href: "/skonhet", text: "Fler beslut inom hårvård" }],
  questions: [
    { question: "Hur använder man INKEY-skrubben?", answer: "Tillverkaren anger torr eller fuktig hårbotten före schampo, låt verka 10 minuter och skölj sedan ur och schamponera. Angiven frekvens är 1–2 gånger i veckan, inte dagligen. Följ din etikett och prova på liten yta först." },
    { question: "Måste olja och skrubb kombineras?", answer: "Nej. Vi rekommenderar inte en extra produkt utan ett tydligt behov. Om din rutin fungerar kan båda vara onödiga." },
    { question: "Är Mielle ren rosmarinolja?", answer: "Nej, tillverkarens lista beskriver en färdig blandning av flera oljor och andra ingredienser. Använd inte dess dosering som instruktion för koncentrerad eterisk olja." },
  ],
};
