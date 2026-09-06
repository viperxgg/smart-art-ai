import type { BastITestPage } from "@/lib/bast-i-test/types";
import {
  getProductBySlug,
  lorealAbsolutRepairProduct,
  moroccanoilHaroljaProduct,
  olaplexNo3Product,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";

// "Hårinpackning – bäst i test 2026" (Fas 1, batch A2). Every product is the
// shared record from the data layer; the three hair masks added for this page
// live in lib/wave-products.ts and are reached through the uniform slug lookup.
// Ratings, review counts and leave-in times are buyer and manufacturer
// information read on amazon.se 2026-09-06 — never our own trial.

function requireProduct(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) {
    throw new Error(
      `Product "${slug}" is missing from the data layer; the harinpackning page needs it.`,
    );
  }

  return product;
}

const moroccanoilHarinpackningProduct = requireProduct("moroccanoil-harinpackning");
const redkenAllSoftProduct = requireProduct("redken-all-soft-harinpackning");
const wellaFusionProduct = requireProduct("wella-fusion-harinpackning");

/**
 * Elins poäng cell for the comparison table. Read from lib/scores.ts like the
 * score pills are, so the table can never drift from the rest of the page.
 */
function scoreCell(slug: string, suffix = "") {
  const score = getEditorialScore(slug);

  if (!score) {
    throw new Error(`Missing editorial score for "${slug}".`);
  }

  return `${score.total}${suffix}`;
}

export const harinpackning: BastITestPage = {
  slug: "harinpackning",
  path: "/guider/harinpackning",
  category: "Hårinpackning",
  title: "Hårinpackning – bäst i test 2026",
  metaTitle: "Hårinpackning – bäst i test 2026 | Elins val",
  metaDescription:
    "Elin jämför fem hårinpackningar för torrt, skadat och blekt hår – verkningstid, hårtyp, innehåll och köparnas omdömen. Se vilken som passar ditt hår. (Annons)",
  h1: "Hårinpackning – bäst i test 2026",
  intro:
    "En hårinpackning ska ge håret det balsamet inte hinner med: fukt, styrka eller båda – på fem till femton minuter, en gång i veckan. Här jämför Elin fem inpackningar med resultatet enligt köparna som tyngsta kriterium: två återfuktande, två reparerande med proteiner och aminosyror, och en bond-behandling för blekt hår. Alla fem rankas. Som kontrast finns Moroccanoil Treatment med – en hårolja som många köper i tron att den är en inpackning, och som gör ett annat jobb. Elins poäng bygger på köparnas omdömen och tillverkarnas uppgifter, inte på egna tester. Längre ner finns jämförelsetabellen, en köpguide om protein kontra fukt och svar på de frågor svenskar faktiskt söker på.",
  picks: [
    {
      product: moroccanoilHarinpackningProduct,
      slug: "moroccanoil-harinpackning",
      badge: "Bäst i test",
      verdict:
        "Den inpackning köparna oftast beskriver som den bästa de använt – fem minuter för torrt, medel till tjockt hår som vill ha mjukhet och glans.",
      pros: [
        "4,6 av 5 från 11 592 omdömen – flest i jämförelsen, och ett svenskt: ”the best moisturizing mask I’ve ever used”.",
        "Fem till sju minuters verkningstid enligt Moroccanoil – kort nog för duschen.",
        "Arganolja och linfröextrakt; tillverkaren lyfter elasticitet, glans och hanterbarhet.",
        "Köpare med lockigt och frissigt hår nämner att håret blir lättare att reda ut.",
      ],
      cons: [
        "Gjord för medel till tjockt hår – har du fint hår är Redken eller L'Oréal ett bättre val.",
        "Ett svenskt omdöme beskriver den som ”fin effekt men lite kladdig” – använd sparsamt i längderna.",
        "Premium prisklass för 250 ml.",
      ],
      whoFor:
        "Moroccanoil Intense Hydrating Mask passar dig med torrt, medel till tjockt eller lockigt hår som vill ha fukt och glans utan att sitta med inpackningen i en halvtimme. Är ditt hår framför allt skadat av blekning eller värme gör en proteininpackning eller Olaplex mer nytta – fukt löser inte brott.",
      productHref: "/skonhet/moroccanoil-harinpackning",
      comparisonHrefs: [
        "/skonhet/harinpackning-eller-harolja",
        "/skonhet/olaplex-eller-harinpackning",
      ],
    },
    {
      product: lorealAbsolutRepairProduct,
      slug: "loreal-absolut-repair",
      badge: "Bäst för skadat hår",
      verdict:
        "Proteininpackningen med kortast verkningstid och lägst prisklass i toppen – en svensk köpare sammanfattar: ”håret blir mjukt o slätt”.",
      pros: [
        "4,6 av 5 från 3 096 omdömen och topp-1 300 i Skönhet på Amazon.se.",
        "3–5 minuter i handdukstorkat hår – snabbast i jämförelsen.",
        "Quinoaextrakt och veteproteiner som ska göra håret starkare – den proteinrika inpackningen i listan.",
        "Svenska omdömen: ”min frisör rekommenderade denna för blekt hår”, ”funkar även för mig med tunt hår”.",
      ],
      cons: [
        "Protein kan kännas strävt om håret mest saknar fukt – varva med en återfuktande inpackning.",
        "Gjord för tjockt till mellantjockt hår enligt tillverkaren, även om köpare med tunt hår är nöjda.",
      ],
      whoFor:
        "L'Oréal Absolut Repair passar dig med slitet, torrt eller värmestylat hår som vill ha ett tydligt resultat på några minuter. Den är också det naturliga förstavalet om du vill prova ett salongsmärke utan att gå upp i premiumklass.",
      productHref: "/skonhet/harinpackning",
      comparisonHrefs: [
        "/skonhet/olaplex-eller-harinpackning",
        "/skonhet/harinpackning-eller-harolja",
      ],
    },
    {
      product: redkenAllSoftProduct,
      slug: "redken-all-soft-harinpackning",
      badge: "Bäst för frissigt hår",
      verdict:
        "Den intensivt fuktgivande inpackningen för torrt, ostyrigt hår – ”jag har långt, frissigt hår med mycket volym, den här är jättebra”.",
      pros: [
        "4,6 av 5 från 1 653 omdömen och bland de 350 mest sålda i Skönhet på Amazon.se.",
        "Arganolja; tillverkaren lovar mjukhet, medgörlighet och glans – köpare i Spanien, Italien och Storbritannien beskriver just det.",
        "5–15 minuter – du väljer själv hur intensiv behandlingen blir.",
        "Del av All Soft-serien om du vill bygga en hel rutin.",
      ],
      cons: [
        "Fuktinpackning, inte reparation – har håret gått av behöver du protein eller en bond-behandling.",
        "Ett brittiskt omdöme påpekar att resultatet kom i kombination med andra Redken-produkter.",
      ],
      whoFor:
        "Redken All Soft Heavy Cream passar dig med torrt, frissigt eller långt hår som blir ostyrigt i fukt. Lockigt hår som behöver definition snarare än tyngd kan tycka att den blir mycket – börja med mindre mängd i längderna.",
      productHref: "/skonhet/redken-all-soft-harinpackning",
      comparisonHrefs: [
        "/skonhet/harinpackning-eller-harolja",
        "/skonhet/leave-in-eller-harolja",
      ],
    },
    {
      product: wellaFusionProduct,
      slug: "wella-fusion-harinpackning",
      badge: "Bäst för långt & tjockt hår",
      verdict:
        "500 ml reparerande inpackning med aminosyror och lipider – mest mängd per förpackning i jämförelsen.",
      pros: [
        "4,6 av 5 från 344 omdömen; en brittisk köpare med hår som lätt går av beskriver ”visible results”.",
        "Fem minuter en gång i veckan enligt Wella – enkelt att hålla.",
        "Silksteel Fusion: silkeaminosyror som ska stärka och mikroniserade lipider som ger släthet direkt.",
        "500 ml räcker länge för långt eller tjockt hår.",
      ],
      cons: [
        "Färre omdömen än de andra – betyget är stabilt men underlaget mindre.",
        "Wella rekommenderar schampo och balsam ur samma serie för bäst resultat – inpackningen fungerar ensam, men det är bra att veta.",
      ],
      whoFor:
        "Wella Fusion Intense Repair passar dig med långt, tjockt eller kemiskt behandlat hår som går åt mycket produkt per gång. Har du kort eller fint hår räcker en 250 ml-inpackning längre än du tror.",
      productHref: "/skonhet/wella-fusion-harinpackning",
      comparisonHrefs: [
        "/skonhet/olaplex-eller-harinpackning",
        "/skonhet/harinpackning-eller-harolja",
      ],
    },
    {
      product: olaplexNo3Product,
      slug: "olaplex-no3-treatment",
      badge: "Bäst för blekt hår",
      verdict:
        "Bond-behandlingen för blekt och kemiskt skadat hår – nu som N°.3 PLUS med tre minuters verkningstid enligt Olaplex.",
      pros: [
        "4,5 av 5 från 1 529 omdömen; köpare med flera blekningar bakom sig beskriver ”en otrolig skillnad redan första gången”.",
        "Olaplex anger tre minuter och att den minskar framtida brott – den enda i listan som riktar sig mot själva hårstråets bindningar.",
        "Fungerar på alla hårtyper enligt tillverkaren.",
        "Topp-600 i Skönhet på Amazon.se.",
      ],
      cons: [
        "100 ml – minst mängd i jämförelsen.",
        "Ger inte fukt eller glans på samma sätt som en klassisk inpackning; många använder den före en återfuktande mask.",
        "Ett par svenska 1-stjärniga omdömen handlar om leverans, inte om produkten.",
      ],
      caution:
        "Olaplex N°.3 PLUS ersätter den tidigare No.3 Hair Perfector på Amazon.se. Läs Elins recension för skillnaden.",
      whoFor:
        "Olaplex N°.3 PLUS passar dig med blekt, slingat eller permanentat hår som går av och känns poröst – skadan sitter i hårstråets bindningar, och det är dem den riktar sig mot. Är håret torrt men helt gör en fuktinpackning mer nytta för pengarna; många med blekt hår använder båda, Olaplex först och en återfuktande inpackning efteråt.",
      productHref: "/skonhet/olaplex-no3",
      comparisonHrefs: [
        "/skonhet/olaplex-eller-harinpackning",
        "/skonhet/olaplex-schampo-eller-balsam",
      ],
    },
  ],
  contrast: {
    product: moroccanoilHaroljaProduct,
    slug: "moroccanoil-harolja",
    badge: null,
    verdict:
      "Sveriges kanske mest köpta hårolja – 4,7 av 5 från 89 679 omdömen – men en olja är ingen inpackning.",
    pros: [
      "Glans, mjukhet och mindre frizz i torrt eller fuktigt hår – utan att sköljas ur.",
      "25 ml räcker länge; några droppar per gång.",
      "Passar alla hårtyper enligt Moroccanoil.",
    ],
    cons: [
      "Lägger sig utanpå hårstrået – reparerar eller återfuktar inte på djupet som en inpackning.",
      "Kan tynga fint hår om du tar för mycket.",
    ],
    whoFor:
      "Moroccanoil Treatment är med här av en anledning: många söker ”hårinpackning” men vill egentligen ha glans och mindre frizz i vardagen, och då är oljan rätt köp. Vill du ändra hur håret mår – inte bara hur det ser ut – välj en av inpackningarna ovan och använd oljan efteråt.",
    productHref: "/skonhet/harolja",
    comparisonHrefs: [
      "/skonhet/harinpackning-eller-harolja",
      "/skonhet/harolja-eller-varmeskydd",
    ],
  },
  contrastHeading: "Jämförd men inte en inpackning",
  criteriaDisclaimer:
    "Elins val har inte provat någon av inpackningarna själv.",
  skip: {
    text: "I den lägsta prisklassen finns inpackningar med lika höga betyg – Garnier Fructis Hair Food har 4,7 av 5 från 215 omdömen. De ligger utanför Elins prisspann för den här jämförelsen och saknar egna sidor här, så de rankas inte. Vill du veta vad du faktiskt betalar för hos ett salongsmärke finns hela resonemanget i guiden.",
    href: "/guider/harinpackning-salongsmarke-vart-det",
  },
  table: {
    rowHeader: "Kolumn",
    columns: [
      { name: "Moroccanoil Intense Hydrating", href: "/skonhet/moroccanoil-harinpackning" },
      { name: "L'Oréal Absolut Repair", href: "/skonhet/harinpackning" },
      { name: "Redken All Soft", href: "/skonhet/redken-all-soft-harinpackning" },
      { name: "Wella Fusion", href: "/skonhet/wella-fusion-harinpackning" },
      { name: "Olaplex N°.3 PLUS", href: "/skonhet/olaplex-no3" },
    ],
    rows: [
      {
        label: "Inriktning",
        cells: [
          "Fukt",
          "Reparation (protein)",
          "Fukt, mot frizz",
          "Reparation (aminosyror)",
          "Bond-behandling",
        ],
      },
      {
        label: "Hårtyp (enligt tillverkaren)",
        cells: [
          "Medel–tjockt, torrt",
          "Tjockt–mellantjockt, skadat",
          "Torrt, ostyrigt",
          "Torrt, skadat",
          "Alla, särskilt blekt",
        ],
      },
      {
        label: "Verkningstid",
        cells: ["5–7 min", "3–5 min", "5–15 min", "5 min", "3 min"],
      },
      {
        label: "Mängd",
        cells: ["250 ml", "250 ml", "250 ml", "500 ml", "100 ml"],
      },
      {
        label: "Nyckelingrediens",
        cells: [
          "Arganolja, linfrö",
          "Quinoa, veteproteiner",
          "Arganolja",
          "Silkeaminosyror, lipider",
          "Bond-teknologi",
        ],
      },
      {
        label: "Prisklass",
        cells: ["Premium", "Mellan", "Mellan", "Premium", "Premium"],
      },
      {
        label: "Elins poäng",
        cells: [
          scoreCell("moroccanoil-harinpackning"),
          scoreCell("loreal-absolut-repair"),
          scoreCell("redken-all-soft-harinpackning"),
          scoreCell("wella-fusion-harinpackning"),
          scoreCell("olaplex-no3-treatment"),
        ],
      },
    ],
  },
  criteria: [
    {
      name: "Resultat enligt köparna",
      weight: 35,
      note: "Mjukhet, glans och mindre brott i omdömena, med extra vikt på svenska köpare och långtidsanvändare.",
    },
    {
      name: "Passar hårtypen",
      weight: 20,
      note: "Hur tydligt tillverkaren anger hårtyp och hur väl köparnas hårtyper stämmer med löftet.",
    },
    {
      name: "Verkningstid och enkelhet",
      weight: 15,
      note: "Minuter i duschen och om inpackningen kräver en hel serie för att fungera.",
    },
    {
      name: "Mängd per förpackning",
      weight: 15,
      note: "Milliliter per köp – vi anger mängd, aldrig pris; priset ser du på Amazon.",
    },
    {
      name: "Innehåll och doft",
      weight: 15,
      note: "Proteiner, aminosyror eller oljor som matchar syftet, och vad köparna säger om doften.",
    },
  ],
  guide: [
    {
      heading: "Inpackning, balsam eller olja – tre olika jobb",
      body: "Balsam sluter fjällen efter schampo och gör håret lättare att reda ut – det är ett steg vid varje tvätt, inte en kur. En inpackning sitter i flera minuter och tillför fukt eller protein på djupet; den ersätter balsamet den dagen du använder den. En olja lägger sig utanpå hårstrået för glans och frizzkontroll och sköljs inte ur. De tre konkurrerar alltså inte om samma jobb, och det är därför Moroccanoil Treatment finns med som kontrast längre upp: många söker ”hårinpackning” när de egentligen vill ha oljans finish. Ska du bara välja en sak: inpackning en gång i veckan, olja i vardagen. Hela avvägningen finns i jämförelsen mellan hårinpackning och hårolja.",
    },
    {
      heading: "Protein eller fukt – läs av håret först",
      body: "Det enklaste sättet att läsa av håret är ett blött hårstrå: töj det försiktigt. Torrt men elastiskt hår som fjädrar tillbaka vill ha fukt – här passar Moroccanoil Intense Hydrating Mask och Redken All Soft. Hår som töjs utan att fjädra tillbaka, går av lätt eller känns som halm efter blekning och värme saknar struktur och vill ha protein eller aminosyror – L'Oréal Absolut Repair och Wella Fusion. Balansen är poängen: för mycket protein ger strävt, stelt hår; för mycket fukt ger slappa längder utan spänst. Har du båda problemen, vilket blekt hår ofta har, varva – en proteininpackning ena veckan, en fuktinpackning nästa – och läs av håret igen efter en månad.",
    },
    {
      heading: "Blekt och kemiskt behandlat hår – när bond-behandling behövs",
      body: "Blekning och permanent bryter bindningar inne i hårstrået, och det är den skadan som gör att håret går av vid borstning och känns poröst. En vanlig inpackning lägger fukt och proteiner utanpå och döljer skadan för stunden – håret känns mjukare men går fortfarande av. En bond-behandling av Olaplex-typ riktar sig i stället mot själva bindningarna, och Olaplex anger tre minuters verkningstid för N°.3 PLUS. Rutinen många köpare beskriver: Olaplex först på fuktigt hår före schampo, en återfuktande inpackning efteråt, eftersom blekt hår oftast är både skadat och torrt. Är håret inte blekt eller permanentat räcker en vanlig inpackning – då gör bond-behandlingen mindre nytta än namnet antyder. Skillnaden i detalj finns i jämförelsen mellan Olaplex och hårinpackning.",
    },
    {
      heading: "Verkningstid – tre minuter räcker oftare än du tror",
      body: "Tillverkarna i den här jämförelsen anger mellan tre och femton minuter: 3–5 för L'Oréal, 3 för Olaplex, 5 för Wella, 5–7 för Moroccanoil och 5–15 för Redken. Längre tid än så ger sällan mer – håret tar upp det det kan under de första minuterna, och en inpackning som sitter i en halvtimme under en handduk gör framför allt att du tröttnar på rutinen. Applicera i handdukstorkat hår, inte drypande blött, så späds inpackningen inte ut. Lägg mest i längder och toppar där slitaget sitter, undvik hårbotten om inpackningen inte är gjord för den, och kamma igenom med en grovtandad kam så att varje slinga täcks. Skölj sedan tills vattnet är klart.",
    },
    {
      heading: "Hur ofta? En gång i veckan är normalläget",
      body: "Alla fem tillverkare i jämförelsen säger en till två gånger i veckan, och det är en bra tumregel även om förpackningen lockar till mer. Oftare ger ingen extra effekt: håret kan inte lagra fukt eller protein på förråd, och för många proteininpackningar i rad ger den strävhet som beskrivs ovan. Mycket torrt eller nyblekt hår kan börja med två gånger i veckan under den första månaden och sedan gå ner till en. Fint hår klarar sig oftast på varannan vecka. Ett enkelt sätt att hålla rutinen är att låta inpackningen ersätta balsamet vid veckans första tvätt – då blir den inte ett extra steg utan en del av det du redan gör.",
    },
    {
      heading: "Fint, tjockt eller lockigt hår – mängd och placering",
      body: "Fint hår tyngs lätt: ta en liten mängd, håll dig till längder och toppar, låt inpackningen sitta kortare tid och skölj noga – och välj hellre en av 250 ml-inpackningarna än storpacket, för du använder mindre än du tror. Tjockt eller långt hår går åt mycket produkt per gång, och då lönar sig en 500 ml-förpackning som Wella Fusion; fördela i sektioner så att inte bara det yttersta lagret får inpackning. Lockigt hår vill nästan alltid ha fukt: välj en fuktinpackning, kamma ut lockarna i duschen med fingrarna eller en grovtandad kam medan inpackningen sitter i, och skölj med svalare vatten sist så att fjällen sluter sig och lockarna håller formen.",
    },
    {
      heading: "Salongsmärke eller budget – vad du betalar för",
      body: "Betygen på Amazon skiljer sig förvånansvärt lite mellan budget och salong – bra budgetinpackningar ligger på samma 4,6–4,7 som salongsmärkena i den här listan. Skillnaden ligger i koncentration, doft och hur mycket produkt som behövs per gång: en salongsinpackning är ofta rikare, så en mindre klick räcker, och doften är en stor del av upplevelsen för många köpare. I den lägsta prisklassen finns inpackningar med samma betyg, som Garnier Fructis Hair Food – de ligger utanför Elins prisspann för den här jämförelsen och rankas därför inte. Vill du ha ett tydligt resultat på kort tid utan att gå upp i premiumklass är L'Oréal Absolut Repair den mest prisvärda vägen in bland salongsmärkena. Hela resonemanget finns i guiden om salongsmärken.",
    },
  ],
  faq: [
    {
      question: "Vilken hårinpackning är bäst i test 2026?",
      answer:
        "Moroccanoil Intense Hydrating Mask toppar Elins jämförelse (87 poäng) tack vare flest och bäst omdömen och en kort verkningstid; för skadat hår är L'Oréal Absolut Repair och för blekt hår Olaplex N°.3 PLUS mer träffsäkra. Poängen bygger på köparnas omdömen, inte egna tester.",
    },
    {
      question: "Vilken inpackning är bäst för torrt hår?",
      answer:
        "En fuktinpackning: Moroccanoil för medel till tjockt hår, Redken All Soft för frissigt eller långt hår. Protein hjälper inte torrt men friskt hår.",
    },
    {
      question: "Vilken hårinpackning är bäst för blekt hår?",
      answer:
        "Blekt hår behöver reparera bindningar: Olaplex N°.3 PLUS. Kombinera med en fuktinpackning efteråt – blekt hår är ofta både skadat och torrt.",
    },
    {
      question: "När behöver håret en proteininpackning?",
      answer:
        "När det töjs utan att fjädra tillbaka, går av lätt eller känns som halm efter blekning och värme. L'Oréal Absolut Repair (proteiner) och Wella Fusion (aminosyror) är alternativen i listan.",
    },
    {
      question: "Hur ofta ska man använda hårinpackning?",
      answer:
        "En gång i veckan, upp till två vid mycket torrt eller skadat hår – det är vad alla fem tillverkare anger.",
    },
    {
      question: "Hur länge ska inpackningen sitta i?",
      answer:
        "Följ förpackningen: 3–5 minuter (L'Oréal, Olaplex), 5–7 (Moroccanoil), 5 (Wella), 5–15 (Redken). Längre tid ger sällan mer.",
    },
    {
      question: "Är Olaplex No.3 en hårinpackning?",
      answer:
        "Den används som en, men är en bond-behandling: den tillför varken fukt eller glans som en klassisk inpackning. Många använder Olaplex först och en fuktinpackning efter.",
    },
    {
      question: "Kan hårinpackning ersätta balsam?",
      answer:
        "Ja, den dagen du använder inpackning. Övriga dagar behövs balsam för att sluta fjällen och underlätta utredning.",
    },
    {
      question: "Hårinpackning eller hårolja – vad ska jag välja?",
      answer:
        "Inpackning om håret ska må bättre (fukt eller styrka), olja om det ska se bättre ut i vardagen (glans, mindre frizz). De ersätter inte varandra.",
    },
    {
      question: "Är salongsmärken värda pengarna?",
      answer:
        "Betygen på Amazon skiljer lite mellan budget och salong; skillnaden är koncentration, doft och mängd per gång. Vill du ha ett tydligt resultat på kort tid är L'Oréal Absolut Repair den mest prisvärda vägen in i salongsklassen.",
    },
  ],
  related: [
    {
      href: "/skonhet/olaplex-eller-harinpackning",
      label: "Jämför",
      text: "Olaplex eller hårinpackning – värt det?",
    },
    {
      href: "/skonhet/harinpackning-eller-harolja",
      label: "Jämför",
      text: "Hårinpackning eller hårolja – vad ska du välja?",
    },
    {
      href: "/skonhet/leave-in-eller-harolja",
      label: "Jämför",
      text: "Leave-in eller hårolja – vad passar frissigt hår?",
    },
    {
      href: "/skonhet/harolja-eller-varmeskydd",
      label: "Jämför",
      text: "Hårolja eller värmeskydd – så väljer du rätt.",
    },
    {
      href: "/guider/harinpackning-salongsmarke-vart-det",
      label: "Guide",
      text: "Hårinpackning – är salongsmärket värt det?",
    },
    {
      href: "/skonhet/olaplex-schampo-eller-balsam",
      label: "Jämför",
      text: "Olaplex schampo eller balsam?",
    },
    {
      href: "/guider/moroccanoil-vart-priset",
      label: "Guide",
      text: "Moroccanoil hårolja – värt priset?",
    },
    {
      href: "/skonhet",
      label: "Alla skönhetsprodukter",
      text: "Hårvård, hud och sol – Elins hela urval.",
    },
  ],
};
