import type { DecisionRecord } from "@/lib/decision-record";

export const handCreamDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "neutrogena-hand-cream", model: "Neutrogena Norwegian Formula handkräm",
    variant: "Katalogen säger 75 ml och koncentrerad, men den exakta varianten är inte fastställd. ASIN B00DYP8YM4 är inte matchad. De svenska sidorna skiljer Fast Absorbing 75 ml och Hand & Nail 75 ml från Concentrated Unscented 50 ml.",
    chooseIf: "du behöver handkräm och först kan identifiera fullständigt namn, volym och ingredienser på tuben. Vill du undvika parfym: den granskade Concentrated Unscented är 50 ml; de två granskade 75 ml-formulorna listar Parfum.",
    avoidIf: "du vill köpa katalogens 75 ml som säkert koncentrerad eller parfymfri. Storleken och familjenamnet Norwegian Formula räcker inte för att välja rätt; vi ger ingen köprekommendation för den omatchade varan.",
    sourceIds: ["H1", "H2", "H3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En identifierad formula löser ett konkret behov, exempelvis att undvika parfym. Jämför pris för rätt produkt och volym; vi har inte verifierat aktuella totalpriser eller visat att dyrare är bättre.",
  noPurchaseWhen: "Din befintliga handkräm fungerar eller det erbjudande du tittar på inte visar vilken variant det gäller. Avvakta hellre än att köpa utifrån blandade egenskaper från olika tuber.",
  swedishContext: "Alla tre källorna är Neutrogenas svenska produktsidor och visar olika namn och ingredienslistor. Det är användbar hjälp för etikettkontrollen, men ingen matchning av vårt ASIN mot dagens butiksvara. Lager och bildrättigheter återstår.",
  testing: "Vi har jämfört publicerade produktuppgifter, inte provat krämerna eller mätt absorption, kladdighet, nagelstyrka eller återfuktning. Ingen variant utses till bäst.",
  limitations: "Produktidentiteten i katalogen är fortfarande olöst. Påståenden om koncentration, antal appliceringar och känsla överförs inte mellan varianter. Märket upplyser också om att butikens ingredienser kan avvika under formulabyten; kontrollera tuben.",
  sources: [
    { id: "H1", title: "Neutrogena Sverige – Fast Absorbing Hand Cream", url: "https://www.neutrogena.se/produkter/norwegian-formula/neutrogena-norwegian-formula-fast-absorbing-hand-cream", checkedAt: "2026-09-09", supports: "75 ml, eget produktnamn och INCI med Parfum. Det är inte bevis för att katalogens vara är denna variant." },
    { id: "H2", title: "Neutrogena Sverige – Hand & Nail Cream", url: "https://www.neutrogena.se/products/normala-till-mycket-torra-hander/neutrogenar-norwegian-formula-hand-nail-cream", checkedAt: "2026-09-09", supports: "En annan 75 ml-formula, också med Parfum. Nagelstyrkepåståendet används inte som eget testresultat." },
    { id: "H3", title: "Neutrogena Sverige – Concentrated Unscented Hand Cream", url: "https://www.neutrogena.se/produkter/norwegian-formula/neutrogena-norwegian-formula-hand-cream-fragrance-free", checkedAt: "2026-09-09", supports: "Den namngivna koncentrerade, oparfymerade varianten är 50 ml på sidan. Märket ber läsaren kontrollera aktuella ingredienser på produkten." },
  ],
};

export const bodyScrubDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "tree-hut-kroppsskrubb", model: "Tree Hut Vanilla Shea Sugar Scrub",
    variant: "Vanilla-sockerskrubben, inte duschgel, rakolja eller minipaket. Märkets amerikanska sida anger 18 oz; katalogen anger 510 g. Svensk förpackning och ASIN B0BX2TZZWG är inte matchade.",
    chooseIf: "du vill ha ett doftsatt skrubbmoment för kroppen och kan skölja av produkten. Märket anger applicering på fuktig eller torr hud, cirkelrörelser och noggrann sköljning.",
    avoidIf: "du söker parfymfri kroppsvård eller ett bevisat lyft för huden. Ingredienslistan innehåller Parfum och flera oljor, bland annat sötmandelolja. Märkets berättelse om kolloidalt guld är inte ett jämförande effekttest här.",
    sourceIds: ["H4"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Just doften och skrubbformatet är värda något för dig utöver din vanliga rutin. Vi har inte jämfört skrubbar eller visat att guld eller ett premiumpris ger bättre resultat.",
  noPurchaseWhen: "Din kroppsvård fungerar och du inte vill ha ett extra skrubbmoment. Produkten behöver inte köpas som förberedelse för brun-utan-sol; vi har inte verifierat att den passar ihop med din specifika färgprodukt.",
  swedishContext: "Källan är amerikansk och anger vikt i oz. Läs den svenska burkens namn, nettovikt och ingredienser och jämför totalpriset inklusive frakt. Vi har inte verifierat lokal tillgång eller bildrättigheter.",
  testing: "Vi har läst märkets instruktioner och ingredienslista, inte provat kornstorlek, doft, efterkänsla eller resultat med brun-utan-sol. Individuell känslighet varierar enligt tillverkaren.",
  limitations: "Ingen generell veckofrekvens, ansiktsanvändning eller förbättring av cirkulation och hudens elasticitet fastställs här. Tillverkaren säger att ingredienser uppdateras och att förpackningens lista ska kontrolleras.",
  sources: [{ id: "H4", title: "Tree Hut – Vanilla Shea Sugar Scrub", url: "https://www.treehutshea.com/products/vanilla-shea-sugar-scrub", checkedAt: "2026-09-09", supports: "18 oz, användningssätt med avsköljning, doftsatt formula och ingredienslista. Marknadsföringspåståenden om guld, elasticitet och cirkulation är inte våra verifierade resultat." }],
};
