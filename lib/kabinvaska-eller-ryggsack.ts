import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { ProductDecision } from "@/lib/product-decisions";
import { cabinCaseDecision } from "@/lib/cabin-case-decision";

// This unresolved catalogue item is deliberately not added to the reviewed-product registry.
export const unresolvedTravelBackpack: ProductDecision = {
  reviewedAt: "2026-09-09",
  category: { label: "Resa", href: "/sommar/resa" },
  comparison: { label: "Rulla eller bära packningen?", href: "/sommar/resa/kabinvaska-eller-ryggsack" },
  options: [{
    productSlug: "taygeer-kabinryggsack", model: "Taygeer resryggsäck",
    variant: "Katalogens ASIN är B0DPM2JCZV. Modellnummer, mått, användbar volym, remmar och innehåll i den svenska leveransen är inte verifierade. Uppgiften 44L i äldre katalogtext är inte ett eget volymtest.",
    chooseIf: "du först kan få den exakta modellens uppgifter bekräftade och prova den med din packning. För närvarande har vi inte tillräckligt underlag för att rekommendera just denna Taygeer-variant.",
    avoidIf: "köpet bygger på en förväntan om garanterad kabinpassform, bekväm bärning eller mer packutrymme än Anode. Inget av detta är styrkt för den aktuella varianten i vårt underlag.",
    sourceIds: ["T1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du har provat eller dokumenterat en skillnad som behövs: passform med din last, fackmått eller lägre egenvikt. Ett större litertal är inte i sig ett skäl att betala mer eller bevis på flygbolagsgodkännande.",
  noPurchaseWhen: "Din befintliga väska fungerar med packningen och bokningens mått- och viktgränser. Prova den innan du köper en till; en ryggsäck och en rullväska behöver inte köpas som ett par.",
  swedishContext: "Kontrollera den packade väskans yttermått, vikt och vilket bagage som ingår i både ut- och hemresa. En marknadsförd kapacitet säger inte att väskan får placeras under sätet. Svenskt pris, lager och leveransvariant är okända.",
  testing: "Vi har inte provburit, provpackat eller mätt ryggsäcken. Försöket att läsa det svenska produktutbudet gav inget åtkomligt produktunderlag. Andra webbplatsers Taygeer-modeller har inte använts som bevis för denna variant.",
  limitations: "Produktsidan är en redovisning av saknat underlag, inte en recension med köpbeslut. Mått, volym, laptopfack, regnskydd, remmar, garanti och bildrättigheter återstår att verifiera. Ingen poäng eller butiksknapp visas.",
  sources: [{ id: "T1", title: "Amazon Sverige – katalogens Taygeer-ASIN", url: "https://www.amazon.se/dp/B0DPM2JCZV", checkedAt: "2026-09-09", status: "unavailable", supports: "Produktinformationen kunde inte läsas. Länken identifierar endast den katalogpost som behöver kontrolleras; inga specifikationer eller butikslöften verifierades." }],
};

export const cabinOrBackpackGuide: DecisionGuide = {
  parent: { name: "Resa", href: "/sommar/resa" },
  path: "/sommar/resa/kabinvaska-eller-ryggsack",
  title: "Rulla eller bära – vad passar din resväg och biljett?",
  intro: "Tänk igenom trappor, promenader och hur du vill hantera packningen. Vi har tillverkaruppgifter för en Anode Spinner, men saknar motsvarande verifiering för Taygeer. Därför utser vi ingen vinnare i volym, komfort eller skydd.",
  decision: {
    ...cabinCaseDecision,
    options: [cabinCaseDecision.options[0], unresolvedTravelBackpack.options[0]],
    payMoreWhen: unresolvedTravelBackpack.payMoreWhen,
    noPurchaseWhen: unresolvedTravelBackpack.noPurchaseWhen,
    testing: "Anode-underlaget kommer från tillverkaren, inte ett eget rese- eller stöttest. Taygeers specifikationer kunde inte verifieras. Vi har inte jämfört packvolym, bärkomfort eller hjul på samma resväg. Råden om rulla och bära är redaktionella överväganden.",
    limitations: "Underlaget är ojämnt. Anodes publicerade yttermått är inte ett test av tillgängligt packutrymme, och äldre Taygeer-uppgifter används inte för att utse en volymvinnare. Svenska butiksvarianter och bildrättigheter är inte verifierade.",
    sources: [...cabinCaseDecision.sources, ...unresolvedTravelBackpack.sources],
  },
  productPaths: ["/sommar/resa/kabinvaska", "/sommar/resa/resryggsack"],
  questions: [
    { question: "Vilken rymmer mest?", answer: "Vi kan inte avgöra det med jämförbart underlag. Anode benämns 24L av tillverkaren; Taygeers angivna volym och exakta modell är inte verifierade. Yttermåttens produkt och ett marknadsfört litertal är inte ett provpackningstest." },
    { question: "När är hjul eller ryggremmar användbara?", answer: "Hjul gör det möjligt att dra i stället för att bära på ett underlag där hjulen fungerar. I trappor behöver även en rullväska lyftas. En ryggsäck låter dig bära på ryggen men flyttar lasten till kroppen. Prova din faktiska packning; vi lovar inte att någon av dessa modeller är bekvämare." },
    { question: "Skyddar en hård väska innehållet bättre?", answer: "Vi saknar jämförande stöttester och kan inte rangordna skyddet. Packning, vad du transporterar och hantering spelar också roll. ABS-skal eller ett lås är inte bevis på att ömtåliga saker förblir oskadade." },
    { question: "Passar båda som gratis handbagage?", answer: "Det är inte verifierat. Den dokumenterade Anode-modellen är för djup för SAS lilla väska under sätet; större kabinbagage har andra villkor. Taygeers exakta mått saknas i vårt verifierade underlag. Läs din bokning, inte bara produktnamnet." },
    { question: "Behöver jag båda?", answer: "Inte som standard. Börja med vad du redan äger, packa och kontrollera bokningen. Köp bara om du kan beskriva vad som saknas och inte kan lösas med din befintliga väska." },
  ],
  related: [{ href: "/guider/bagagevag-vart-det", text: "Vikt, mått och bagageregler före köp" }],
};
