import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const lipCareDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "laneige-lip-sleeping-mask", model: "LANEIGE Lip Sleeping Mask, Berry, 20 g",
    variant: "Berry-burken, inte Lip Glowy Balm eller annan doft/storlek. Den granskade Singapore-sidan heter Lip Sleeping Mask_EX. ASIN B09WCTJ113 och svensk formula är inte matchade mot förpackningen.",
    chooseIf: "du föredrar ett separat nattsteg för läpparna framför en blank makeupfinish. Märkets anvisning är att applicera generöst sist på kvällen och försiktigt torka av på morgonen.",
    avoidIf: "du vill ha parfymfri läppvård eller en säker lösning för spruckna läppar. Berry-listan innehåller doftämne. Vi har inte visat att masken är bättre än ditt vanliga läppbalsam eller än Dior för torrhet.",
    sourceIds: ["L1"], merchantVariantVerified: false,
  }, {
    productSlug: "dior-lip-glow-oil", model: "Dior Addict Lip Glow Oil, 000 Universal Clear",
    variant: "Läppoljan i katalogens 000 Universal Clear, inte Lip Glow-balsamet. Nyansen finns i Diors turkiska sortimentslista; aktuell svensk variant, volym och ASIN B0B1Q6BCDG är inte verifierade.",
    chooseIf: "du framför allt vill ha en glansig makeupfinish och kan bekräfta rätt nyans och produktversion. Låt önskad finish avgöra om ett extra köp tillför något utöver din befintliga läppvård.",
    avoidIf: "du vill ha en garanterat färglös svensk ersättare utan att kontrollera nyansen, eller köper den för att ett högre pris skulle ge bättre läppvård. Den aktuella svenska serien har flera finishar och är inte en verifierad matchning av katalogens 000.",
    sourceIds: ["L2", "L3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En bestämd finish, applicering eller doft är värd merkostnaden för dig och du har jämfört aktuella totalpriser. Vi har ingen jämförande effektstudie eller egen användning som visar att premiumpriset ger bättre resultat.",
  noPurchaseWhen: "Ditt läppbalsam redan fungerar och du varken saknar ett nattsteg eller önskar extra glans. Du behöver inte köpa mask och olja som ett paket för natt och dag.",
  swedishContext: "LANEIGE-källan gäller Singapore. Diors svenska sida beskriver en nytolkad serie med tre finishar, medan uppgiften om 000 kommer från Turkiet. Kontrollera version, nyans, innehåll och totalpris i det svenska erbjudandet. Lager och bildrättigheter är inte verifierade.",
  testing: "Vi har läst produktuppgifter och anvisningar, inte provat komfort, klibbighet, glans eller återfuktning. Märkenas egna påståenden om resultat är inte våra tester eller en garanti för läsaren.",
  limitations: "LANEIGEs redovisade studie på den lästa sidan gäller en ofärgad, oparfymerad basformula, inte en direkt jämförelse av Berry mot Dior. Vi överför inte heller den nya Dior-seriens resultatpåståenden till katalogens äldre nyans. Ingen behandling av läppbesvär eller säkerhetsrangordning fastställs här.",
  sources: [
    { id: "L1", title: "LANEIGE Singapore – Lip Sleeping Mask_EX", url: "https://sg.laneige.com/products/lip-sleeping-mask", checkedAt: "2026-09-09", supports: "Berry 20 g, variantens ingredienslista, nattlig applicering och avtorkning på morgonen. Sidans studiefotnot specificerar ofärgad och oparfymerad basformula; ingen egen effektjämförelse." },
    { id: "L2", title: "Dior Turkiet – Lip Glow Oil", url: "https://tr.dior.com/en/collections/make-up/products/dior-addict-lip-glow-oil", checkedAt: "2026-09-09", supports: "Läppoljans namn, glanspositionering och nyansen 000 Universal Clear i listan. Det bevisar inte aktuellt svenskt lager, ingrediensmatchning eller pris." },
    { id: "L3", title: "Dior Sverige – Lip Glow Oil, aktuell serie", url: "https://www.dior.com/sv_se/beauty/products/dior-addict-lip-glow-oil-Y0000163.html", checkedAt: "2026-09-09", supports: "Den svenska sidan beskriver Juicy, Sparkly och Glaze i en nytolkad serie. Sortimentets uppgifter används för versionskontroll, inte som verifiering av katalogens 000 Universal Clear." },
  ],
};

export const lipMaskOrOilGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/lappmask-eller-lappolja",
  title: "Läppmask eller läppolja – behöver du nattsteg eller glans?",
  intro: "LANEIGE Berry och Dior 000 fyller olika önskemål. Börja med det som saknas i din rutin; ett vanligt läppbalsam som fungerar kan vara skäl nog att avstå från båda.",
  decision: lipCareDecision, productPaths: ["/skonhet/laneige-lappmask", "/skonhet/lip-oil"],
  questions: [
    { question: "Är läppmasken bäst för spruckna läppar?", answer: "Det har vi inte fastställt. Vi har ingen direkt jämförelse med läppbalsam eller Dior och kan inte välja behandling för läppbesvär. Produktnamnet mask bevisar inte djupare återfuktning." },
    { question: "Behöver jag mask på natten och olja på dagen?", answer: "Inte som standard. Välj bara ett extra steg om du vill ha dess användningssätt eller finish. Fungerande läppvård behöver inte kompletteras för att två produktkategorier finns." },
    { question: "Är Dior 000 samma som dagens svenska Lip Glow Oil?", answer: "Det är inte verifierat. 000 finns i den granskade turkiska listan, medan den svenska sidan beskriver en nytolkad serie. Kontrollera fullständigt namn och nyans; Lip Glow-balsam är dessutom en annan produkt än oljan." },
    { question: "Har Elin testat hur de känns?", answer: "Nej. Vi redovisar källor och begränsningar men har inte provat glans, doft, klibbighet eller resultat. Du får ingen garanterad känsla eller effekt utifrån dessa uppgifter." },
  ],
  related: [{ href: "/skonhet/sheet-mask", text: "Behöver du ytterligare ett masksteg?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
