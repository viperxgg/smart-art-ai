import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { niacinamideDecision } from "@/lib/niacinamide-decision";

export const bakuchiolDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "celdyque-bakuchiol-serum", model: "CELDYQUE Bakuchiol 30,000ppm Concentrate, 30 ml",
    variant: "Koncentratet som märkets sida kallar Bakuchiol 30,000ppm Serum. Inte Blue Copper Peptide Bakuchiol Serum eller Bakuchiol Volume Collagen Cream. Katalogens ASIN B0DC6H8MSW är inte matchad mot dagens svenska erbjudande.",
    chooseIf: "du uttryckligen söker ett koncentrat att blanda enligt produktens anvisningar, och kan kontrollera förpackningens fullständiga ingredienser och instruktioner. Märket beskriver kosmetisk vård för ett slätare utseende; vi har inte verifierat effekten.",
    avoidIf: "du vill ha ett färdigt serum att använda direkt eller räknar med att växtbaserat betyder irritationsfritt. Vi har inte visat att denna formula är skonsammare än retinol eller niacinamid.",
    sourceIds: ["B1", "B2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du har ett konkret behov och en verifierad skillnad i produkt eller användning. Vi har inget jämförande test som motiverar ett högre pris för bakuchiol, högre koncentration eller ett extra serum.",
  noPurchaseWhen: "Din nuvarande rutin fungerar, eller du söker ett nytt serum bara för att en ingrediens är populär. Du behöver inte köpa flera aktiva produkter som ett färdigt paket.",
  swedishContext: "Kontrollera koncentratets exakta namn, 30 ml, fullständiga ingredienslista och instruktioner på förpackningen som säljs till dig. Svenskt erbjudande, lager, totalpris och bildrättigheter är inte verifierade.",
  testing: "Vi har läst märkets produktsida och FAQ, inte provat på huden, analyserat innehållet eller jämfört irritation och resultat. Tillverkarens effekt- och mildhetspåståenden är inte våra testresultat.",
  limitations: "Märkets sida listar nyckelingredienser och hänvisar till förpackningen för fullständig aktuell INCI. Ingen fullständig formel- eller kompatibilitetskontroll är gjord. Anvisningen om ett kompatibelt serum bevisar inte att blandning med INKEY fungerar. Vi räknar inte fram en slutkoncentration från ett ospecificerat blandningsförhållande.",
  sources: [
    { id: "B1", title: "CELDYQUE – Bakuchiol 30,000ppm Serum", url: "https://celdyque.com/product-bakuchiol-30000.html", checkedAt: "2026-09-09", supports: "Identifierar 30 ml och ett mix-in-koncentrat. Märket anger 1–2 droppar i fuktkräm, kräm eller kompatibelt serum, blandat i handflatan, samt patchtest. Nyckelingredienser är inte en verifierad fullständig INCI. Ingen egen effektkontroll." },
    { id: "B2", title: "CELDYQUE – produkt- och rutinfrågor", url: "https://celdyque.com/faq.html", checkedAt: "2026-09-09", supports: "Skiljer koncentrat från kräm och säger att hudvård inte ska blandas i solskydd. Märket lämnar ingen garanti om de färdiga bakuchiolformulornas lämplighet vid graviditet eller amning. Ingen generell säkerhetsgaranti från växtursprung." },
  ],
};

export const bakuchiolOrNiacinamideGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/bakuchiol-eller-niacinamid",
  title: "Bakuchiol eller niacinamid – koncentrat eller serum?",
  intro: "CELDYQUEs produkt är ett koncentrat avsett för blandning; INKEYs 10%-produkt är ett separat serumsteg. Det är en praktisk skillnad före köp. Vi utser ingen vinnare i mildhet eller effekt och rekommenderar inte att du köper båda.",
  decision: {
    ...bakuchiolDecision, options: [...bakuchiolDecision.options, ...niacinamideDecision.options],
    sources: [...bakuchiolDecision.sources, ...niacinamideDecision.sources],
  },
  productPaths: ["/skonhet/bakuchiol-serum", "/skonhet/niacinamide-serum"],
  questions: [
    { question: "Kan jag använda CELDYQUE som ett vanligt serum?", answer: "Märkets instruktion beskriver blandning, inte ett vanligt färdigt serumsteg. Kontrollera anvisningen på din förpackning. Om du vill slippa ett blandningsmoment är det ett skäl att avstå från just detta koncentrat." },
    { question: "Kan jag blanda koncentratet med INKEY?", answer: "Det är inte verifierat. Ordet kompatibelt i CELDYQUEs anvisning är ingen dokumentation av just denna kombination. Kontrollera instruktionerna för båda produkterna och få eventuella motsägelser klargjorda innan användning." },
    { question: "Är båda skonsamma för känslig hud?", answer: "Vi har inget jämförande toleranstest och kan inte ge den garantin. Växtbaserat, hög koncentration eller ordet serum räcker inte för att bedöma din reaktion på den färdiga produkten." },
    { question: "Behöver jag lägga till ett till serum?", answer: "Börja med vad din nuvarande rutin redan gör. Om du inte har ett tydligt kvarvarande behov kan du avstå. En ny produkt behöver motiveras av mer än en ingrediens som verkar intressant." },
  ],
  related: [{ href: "/skonhet/retinol-eller-bakuchiol", text: "Vad skiljer de namngivna retinol- och bakuchiolprodukterna?" }, { href: "/skonhet/vitamin-c-eller-niacinamid", text: "Vitamin C eller niacinamid – behövs ett nytt serum?" }],
};
