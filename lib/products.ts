export type Product = {
  slug: string;
  title: string;
  category: ProductCategorySlug;
  asin: string;
  brand: string;
  price: string;
  image: string;
  imageAlt: string;
  images: ProductImage[];
  amazonUrl: string;
  pageHref?: string;
  summary: string;
  evaluation: ProductEvaluation;
  specSectionEyebrow: string;
  specSectionTitle: string;
  specs: ProductSpec[];
  amazonReviewSignal: AmazonReviewSignal;
  ugcVideos: ProductVideo[];
  uses: string[];
  peopleLike: string[];
  honestCheck: string[];
  comments: ProductComment[];
};

export type ProductCategorySlug = "traning" | "halsa" | "skonhet";

export type ProductCategory = {
  slug: ProductCategorySlug;
  label: string;
  href: string;
  description: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProductEvaluation = {
  headline: string;
  intro: string;
  verdict: string;
  checks: {
    label: string;
    text: string;
  }[];
};

export type ProductSpec = {
  label: string;
  caption: string;
  value: string;
};

export type AmazonReviewSignal = {
  sourceLabel: string;
  sourceUrl: string;
  ratingSummary: string;
  highlights: string[];
  cautions: string[];
};

export type ProductComment = {
  id: string;
  name: string;
  rating: number;
  context: string;
  text: string;
  date: string;
};

export type ProductVideo = {
  src: string;
  poster: string;
  title: string;
  hook: string;
  note: string;
};

export const featuredProduct: Product = {
  slug: "traningsband-4-nivaer",
  title: "Träningsband med 4 motståndsnivåer",
  category: "traning",
  asin: "B0CQXFWMH5",
  brand: "WuGU",
  price: "Se aktuellt pris på Amazon",
  image: "/products/resistance-bands/elin-resistance-band-thumbnail.webp",
  imageAlt: "Person som tränar hemma med lila träningsband",
  images: [
    {
      src: "/products/resistance-bands/elin-resistance-band-thumbnail.webp",
      alt: "Person som tränar hemma med ett lila träningsband",
      label: "Elin valde",
    },
    {
      src: "/products/resistance-bands/elin-band-stretch.webp",
      alt: "Person som stretchar armarna med ett lila träningsband hemma",
      label: "Armar",
    },
    {
      src: "/products/resistance-bands/elin-band-black.webp",
      alt: "Person som använder ett svart träningsband för rörlighet",
      label: "Rörlighet",
    },
    {
      src: "/products/resistance-bands/elin-band-levels.webp",
      alt: "Fyra träningsband i lila, svart, rött och gult",
      label: "4 nivåer",
    },
  ],
  amazonUrl: "https://amzn.to/4xuLEfd",
  pageHref: "/traning/traningsband-naturlatex",
  summary:
    "Mycket träningsband för en låg peng: fyra motståndsnivåer i 100% naturlatex, utan premiumpris.",
  evaluation: {
    headline: "Elins snabba känsla",
    intro:
      "Här börjar vi inte med att upprepa Amazon-texten. Vi tittar på vilken vardagssituation produkten passar i, varför den känns lätt att förstå och vad man bör dubbelkolla innan man klickar vidare.",
    verdict:
      "Bra kandidat för dig som vill träna hemma utan maskiner. Mindre rätt om du förväntar dig samma känsla som tung gymutrustning eller behöver dörrankare direkt i paketet.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Gör det enklare att få in styrka, rörlighet och aktivering hemma utan att köpa stora redskap.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Fyra nivåer gör produkten lätt att förstå: börja lätt, byt band när övningen blir för enkel, eller kombinera band för mer motstånd.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Kvalitet och motstånd kan upplevas olika beroende på övning, teknik och träningsnivå. Kontrollera alltid bandens skick före användning.",
      },
    ],
  },
  specSectionEyebrow: "Motståndsnivåer",
  specSectionTitle: "Fyra band, fyra steg",
  specs: [
    { label: "Gul", caption: "X-light", value: "8-15 lb" },
    { label: "Röd", caption: "Light", value: "15-35 lb" },
    { label: "Svart", caption: "Medium", value: "25-65 lb" },
    { label: "Lila", caption: "Heavy", value: "35-85 lb" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Synliga verifierade Amazon-recensioner",
    sourceUrl:
      "https://www.amazon.se/-/en/Exercise-Resistance-Different-Strength-Training/dp/B0CQXFWMH5",
    ratingSummary: "Amazon visar 4,5 av 5 från 625 globala betyg på produktsidan.",
    highlights: [
      "Flera kunder beskriver banden som prisvärda och enkla att använda.",
      "En svensk verifierad köpare lyfter att banden känns som andra träningsband men billigare.",
      "En annan svensk recension nämner hög kvalitet och olika styrkor.",
      "Korta omdömen från verifierade köp säger att produkten fungerar som förväntat.",
    ],
    cautions: [
      "Minst en svensk verifierad köpare rapporterar att fel variant eller fel varor levererades.",
      "En längre internationell recension uppskattar latexkvaliteten men saknar dörrankare och tycker förvaringspåsen kunde vara större.",
    ],
  },
  ugcVideos: [
    {
      src: "/products/resistance-bands/ugc/band-skillnad.mp4",
      poster: "/products/resistance-bands/ugc/band-skillnad-poster.webp",
      title: "Bandet som gör skillnad",
      hook: "Ett enkelt band kan göra hemmaträningen tydligare.",
      note: "Kort UGC-klipp som visar hur produkten kan användas i vardagen.",
    },
    {
      src: "/products/resistance-bands/ugc/sluta-squats.mp4",
      poster: "/products/resistance-bands/ugc/sluta-squats-poster.webp",
      title: "Fokus på rumpan",
      hook: "När squats inte räcker för rätt kontakt.",
      note: "Visar hur bandet kan ge mer riktad aktivering i övningen.",
    },
    {
      src: "/products/resistance-bands/ugc/tre-ovningar.mp4",
      poster: "/products/resistance-bands/ugc/tre-ovningar-poster.webp",
      title: "3 snabba övningar",
      hook: "Tre enkla sätt att använda bandet hemma.",
      note: "En praktisk översikt för den som vill se användning före köp.",
    },
  ],
  uses: [
    "Snabb hemmaträning för ben, armar, axlar, rygg och bål.",
    "Stretch, rehab-liknande övningar och rörlighetsträning med låg tröskel.",
    "Aktivering före annan träning, särskilt höfter, säte, rygg och axlar.",
    "Progression genom att byta nivå eller kombinera band för mer motstånd.",
  ],
  peopleLike: [
    "Känslan av att kunna börja direkt, utan att behöva bygga ett helt hemmagym.",
    "Fyra färger gör valet enkelt och minskar osäkerheten kring motstånd.",
    "Tar lite plats och passar hemma, på gymmet, i yogastudio eller på resa.",
  ],
  honestCheck: [
    "Kontrollera alltid bandens skick före användning.",
    "Latex kan vara fel material för personer med latexkänslighet.",
    "Passar bäst för lätt till medelhård träning, inte som full ersättning för tung styrketräning.",
    "Setet verkar inte marknadsföras med dörrankare, vilket vissa hemmatränande kan sakna.",
  ],
  comments: [],
};

export const beurerMassagepistolProduct: Product = {
  slug: "beurer-mg-99-massagepistol",
  title: "Beurer MG 99 massagepistol",
  category: "halsa",
  asin: "BEURER_MG_99",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  image: "/products/massage-guns/beurer-mg99-thumbnail.webp",
  imageAlt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
  images: [
    {
      src: "/products/massage-guns/beurer-mg99-thumbnail.webp",
      alt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
      label: "Beurer MG 99",
    },
    {
      src: "/products/massage-guns/beurer-mg99-table.webp",
      alt: "Beurer MG 99 massagepistol med massagehuvuden på ett ljust bord",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/beurer-mg99-neck.webp",
      alt: "Person som använder Beurer MG 99 massagepistol vid nacke och axel",
      label: "Nacke",
    },
    {
      src: "/products/massage-guns/beurer-mg99-therapy.webp",
      alt: "Beurer MG 99 massagepistol med tillbehör i hemmamiljö",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/3Qe9xGL",
  pageHref: "/halsa/massagepistol/beurer-mg-99",
  summary:
    "Ett känt märke till ett oväntat vänligt pris: kompakt, lätt och tryggt utan premiumprislapp.",
  evaluation: {
    headline: "Det trygga märkesvalet",
    intro:
      "Beurer MG 99 passar dig som prioriterar ett känt varumärke, låg vikt och enkel användning.",
    verdict:
      "Ett tryggt val om du vill ha en nätt massagepistol, men mindre rätt om du behöver riktigt mjuk massage på känsliga punkter.",
    checks: [],
  },
  specSectionEyebrow: "Massagepistol",
  specSectionTitle: "Beurer MG 99",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Qe9xGL",
    ratingSummary: "Snittbetyg 4,4/5 på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bdbkmgMassagepistolProduct: Product = {
  slug: "bdbkmg-massagepistol",
  title: "Muscle Massage Gun (BDBKMG)",
  category: "halsa",
  asin: "BDBKMG",
  brand: "BDBKMG",
  price: "Se aktuellt pris på Amazon",
  image: "/products/massage-guns/muscle-massage-gun-thumbnail.webp",
  imageAlt: "Person som använder en massagepistol på axeln hemma",
  images: [
    {
      src: "/products/massage-guns/muscle-massage-gun-thumbnail.webp",
      alt: "Person som använder en massagepistol på axeln hemma",
      label: "Muscle Massage Gun",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-kit.webp",
      alt: "Massagepistol med utbytbara massagehuvuden på ljust trä",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-shoulder.webp",
      alt: "Person som använder massagepistol på axeln",
      label: "Axel",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-lifestyle.webp",
      alt: "Massagepistol på bord med tillbehör i lugn hemmamiljö",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/4vH0u0h",
  pageHref: "/halsa/massagepistol/kraftfull",
  summary:
    "Riktigt mycket pistol för pengarna: 99 lägen, 6 huvuden och tydlig kontroll för hemmabruk.",
  evaluation: {
    headline: "Mest för pengarna",
    intro:
      "BDBKMG passar dig som vill ha flest lägen, fler massagehuvuden och låg tröskel att justera styrkan.",
    verdict:
      "Ett prisvärt val om du prioriterar kraft och kontroll, men räkna med högre vikt.",
    checks: [],
  },
  specSectionEyebrow: "Massagepistol",
  specSectionTitle: "BDBKMG",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vH0u0h",
    ratingSummary: "Snittbetyg 4,4/5 på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonS8540Product: Product = {
  slug: "remington-s8540-plattang",
  title: "Remington S8540 Keratin Protect",
  category: "skonhet",
  asin: "REMINGTON_S8540",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hair-straighteners/remington-s8540-main.webp",
  imageAlt: "Remington S8540 Keratin Protect plattång på ljus marmoryta",
  images: [
    {
      src: "/products/hair-straighteners/remington-s8540-main.webp",
      alt: "Remington S8540 Keratin Protect plattång på ljus marmoryta",
      label: "S8540",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-lifestyle.webp",
      alt: "Remington S8540 används framför spegel i ljus badrumsmiljö",
      label: "I bruk",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-detail-real.webp",
      alt: "Remington S8540 Keratin Protect plattång med display och keramiska plattor",
      label: "Detalj",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-counter.webp",
      alt: "Remington S8540 plattång på badrumsbänk med sladd och kam",
      label: "Badrum",
    },
    {
      src: "/products/hair-straighteners/remington-s8540.svg",
      alt: "Remington S8540 plattång i mjuk rosa miljö",
      label: "Produkt",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-detail.svg",
      alt: "Detaljbild som visar fullstor plattång",
      label: "Fullstorlek",
    },
  ],
  amazonUrl: "https://amzn.to/4om1013",
  pageHref: "/skonhet/plattang/remington-s8540",
  summary:
    "Ett känt märke som skyddar håret till ett vänligt pris: keramik, keratin och 9 värmelägen.",
  evaluation: {
    headline: "Prisvärt vardagsval",
    intro:
      "Remington S8540 passar dig som vill ha märkeskänsla, hårskydd och flera värmelägen för hemmabruk.",
    verdict:
      "Ett tryggt, prisvärt vardagsval för alla hårtyper.",
    checks: [],
  },
  specSectionEyebrow: "Plattång",
  specSectionTitle: "Remington S8540",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4om1013",
    ratingSummary: "4,5/5 baserat på 21 473 omdömen på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonMiniS2880Product: Product = {
  slug: "remington-mini-s2880-plattang",
  title: "Remington Mini S2880 On The Go",
  category: "skonhet",
  asin: "REMINGTON_S2880",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hair-straighteners/remington-mini-s2880-main.webp",
  imageAlt: "Remington Mini S2880 plattång på ljus marmoryta med blommor",
  images: [
    {
      src: "/products/hair-straighteners/remington-mini-s2880-main.webp",
      alt: "Remington Mini S2880 plattång på ljus marmoryta med blommor",
      label: "Mini S2880",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880-detail.webp",
      alt: "Remington Mini S2880 plattång med lila plattor på mjukt tyg",
      label: "Detalj",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880-lifestyle.webp",
      alt: "Remington Mini S2880 används för snabb hårstyling hemma",
      label: "I bruk",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880.svg",
      alt: "Remington Mini S2880 kompakt plattång för resa",
      label: "Produkt",
    },
    {
      src: "/products/hair-straighteners/remington-mini-travel.svg",
      alt: "Kompakt reseplattång med mjuk rosa bakgrund",
      label: "Resa",
    },
  ],
  amazonUrl: "https://amzn.to/3RSmpDd",
  pageHref: "/skonhet/plattang/remington-mini-s2880",
  summary:
    "Riktigt smidig plattång för en låg peng: ultralätt, kompakt och enkel att ta med.",
  evaluation: {
    headline: "Smart litet fynd",
    intro:
      "Mini S2880 passar dig som reser, har lugg eller vill fixa kort hår snabbt utan fullstor plattång.",
    verdict:
      "Ett smart litet fynd för resan och snabba fix.",
    checks: [],
  },
  specSectionEyebrow: "Plattång",
  specSectionTitle: "Remington Mini S2880",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3RSmpDd",
    ratingSummary: "4,1/5 baserat på 4 050 omdömen på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const panasonicEsEy30EpilatorProduct: Product = {
  slug: "panasonic-es-ey30-epilator",
  title: "Panasonic ES-EY30 epilator",
  category: "skonhet",
  asin: "PANASONIC_ES_EY30",
  brand: "Panasonic",
  price: "Se aktuellt pris på Amazon",
  image: "/products/epilators/panasonic-es-ey30-thumbnail.webp",
  imageAlt: "Panasonic ES-EY30 epilator i lila och vitt på ett ljust badrumsbord",
  images: [
    {
      src: "/products/epilators/panasonic-es-ey30-thumbnail.webp",
      alt: "Panasonic ES-EY30 epilator i lila och vitt på ett ljust badrumsbord",
      label: "Epilator",
    },
    {
      src: "/products/epilators/panasonic-es-ey30-wet-dry.webp",
      alt: "Panasonic ES-EY30 epilator mot en mjuk lila bakgrund med vattenkänsla",
      label: "Wet/Dry",
    },
    {
      src: "/products/epilators/panasonic-es-ey30-handheld.webp",
      alt: "Panasonic ES-EY30 epilator hållen i handen vid ett handfat",
      label: "I handen",
    },
  ],
  amazonUrl: "https://amzn.to/4olXGmN",
  pageHref: "/skonhet/epilator/panasonic-es-ey30",
  summary:
    "Marknadens mest sålda epilator: våt och torr, sladdlös och byggd för lenare resultat som håller längre än rakning.",
  evaluation: {
    headline: "Prisvärt premiumval",
    intro:
      "Panasonic ES-EY30 passar dig som vill ha en beprövad epilator för ben och kropp utan att gå upp till de dyraste paketen.",
    verdict:
      "Ett prisvärt premiumval för len, smidig epilering.",
    checks: [],
  },
  specSectionEyebrow: "Epilator",
  specSectionTitle: "Panasonic ES-EY30",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4olXGmN",
    ratingSummary:
      "Mycket högt betyg och en av marknadens mest sålda epilatorer.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const braunSilkEpil9Product: Product = {
  slug: "braun-silk-epil-9",
  title: "Braun Silk-épil 9 epilator",
  category: "skonhet",
  asin: "BRAUN_SILK_EPIL_9",
  brand: "Braun",
  price: "Se aktuellt pris på Amazon",
  image: "/products/epilators/braun-silk-epil-9-thumbnail.webp",
  imageAlt: "Braun Silk-épil 9 epilator i vit och silver",
  images: [
    {
      src: "/products/epilators/braun-silk-epil-9-thumbnail.webp",
      alt: "Braun Silk-épil 9 epilator hållen i handen i ett ljust badrum",
      label: "I handen",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-accessories-optimized.webp",
      alt: "Braun Silk-épil 9 epilator med fodral och tillbehör på en bricka",
      label: "Tillbehör",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-kit.webp",
      alt: "Braun Silk-épil 9 epilator med rakhuvud och tillbehör vid handfat",
      label: "Detaljer",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-wet-dry.webp",
      alt: "Braun Silk-épil 9 epilator mot en vit wet dry-bakgrund",
      label: "Wet/Dry",
    },
  ],
  amazonUrl: "https://amzn.to/4uXC2rs",
  pageHref: "/skonhet/epilator/braun-silk-epil-9",
  summary:
    "Premiumvalet för dig som vill ha MicroGrip-pincetter, pivoterande huvud, massagerulle och fler tillbehör.",
  evaluation: {
    headline: "Premiumvalet",
    intro:
      "Braun Silk-épil 9 passar dig som vill ha en mer påkostad epilator med fler tillbehör och längre trygghet.",
    verdict: "Premiumvalet – för dig som vill ha det yppersta.",
    checks: [],
  },
  specSectionEyebrow: "Epilator",
  specSectionTitle: "Braun Silk-épil 9",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uXC2rs",
    ratingSummary: "Mycket högt betyg, premiumklass.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonProluxeAc9140Product: Product = {
  slug: "remington-proluxe-ac9140-hartork",
  title: "Remington PROluxe AC9140 hårtork",
  category: "skonhet",
  asin: "REMINGTON_AC9140",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hair-dryers/remington-proluxe-ac9140-main.webp",
  imageAlt: "Remington PROluxe AC9140 hårtork med diffusor och munstycken",
  images: [
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-main.webp",
      alt: "Remington PROluxe AC9140 hårtork med diffusor och munstycken",
      label: "Tillbehör",
    },
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-floating.webp",
      alt: "Remington PROluxe AC9140 hårtork med munstycken och diffusor mot ljus bakgrund",
      label: "Luftflöde",
    },
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-detail.webp",
      alt: "Remington PROluxe AC9140 hårtork på marmorbord med diffusor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vcMbko",
  pageHref: "/skonhet/hartork/remington-proluxe-ac9140",
  summary:
    "Salongskvalitet hemma till ett förvånansvärt lågt pris: 2400 W AC-motor, jonteknik och diffusor.",
  evaluation: {
    headline: "Elins salongsval",
    intro:
      "Remington PROluxe AC9140 passar dig som vill ha snabb torkning, mer kraft och en salongslik känsla hemma.",
    verdict:
      "Elins val – mest hårtork för pengarna i premiumklass.",
    checks: [],
  },
  specSectionEyebrow: "Hårtork",
  specSectionTitle: "Remington PROluxe AC9140",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vcMbko",
    ratingSummary: "En av de mest sålda hårtorkarna, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerHc25Product: Product = {
  slug: "beurer-hc-25-hartork",
  title: "Beurer HC 25 hårtork",
  category: "skonhet",
  asin: "BEURER_HC_25",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hair-dryers/beurer-hc-25-main.webp",
  imageAlt: "Beurer HC 25 hårtork på ljus badrumsbänk",
  images: [
    {
      src: "/products/hair-dryers/beurer-hc-25-main.webp",
      alt: "Beurer HC 25 hårtork på ljus badrumsbänk",
      label: "HC 25",
    },
    {
      src: "/products/hair-dryers/beurer-hc-25-floating.webp",
      alt: "Beurer HC 25 hårtork mot mjuk studiobakgrund",
      label: "Kompakt",
    },
    {
      src: "/products/hair-dryers/beurer-hc-25-counter.webp",
      alt: "Beurer HC 25 hårtork på badrumsbänk",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/4uvdJjE",
  pageHref: "/skonhet/hartork/beurer-hc-25",
  summary:
    "Mest hårtork för pengarna när du vill ha något lätt, hopfällbart och smidigt för resa.",
  evaluation: {
    headline: "Prisvärt reseval",
    intro:
      "Beurer HC 25 passar dig som vill ha en kompakt hårtork för resa och vardag utan att betala för salongskraft.",
    verdict: "Det prisvärda rese- och budgetvalet.",
    checks: [],
  },
  specSectionEyebrow: "Hårtork",
  specSectionTitle: "Beurer HC 25",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uvdJjE",
    ratingSummary: "En av de mest sålda hårtorkarna, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const babylissAs126eProduct: Product = {
  slug: "babyliss-as126e-varmluftsborste",
  title: "BaByliss AS126E varmluftsborste",
  category: "skonhet",
  asin: "BABYLISS_AS126E",
  brand: "BaByliss",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hot-air-brushes/babyliss-as126e-thumbnail.webp",
  imageAlt: "BaByliss AS126E varmluftsborste används för volym i håret",
  images: [
    {
      src: "/products/hot-air-brushes/babyliss-as126e-thumbnail.webp",
      alt: "BaByliss AS126E varmluftsborste används för volym i håret",
      label: "AS126E",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-1.webp",
      alt: "BaByliss AS126E varmluftsborste med stylingtillbehör",
      label: "Tillbehör",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-2.webp",
      alt: "BaByliss AS126E varmluftsborste med tillbehör på badrumsbänk",
      label: "Detalj",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-3.webp",
      alt: "BaByliss AS126E varmluftsborste och tillbehör på ljus bakgrund",
      label: "4-i-1",
    },
  ],
  amazonUrl: "https://amzn.to/49Xp7NQ",
  pageHref: "/skonhet/varmluftsborste/babyliss-as126e",
  summary:
    "En borste, fyra sätt att styla: 4-i-1-varmluftsborste för volym, brushing och enklare formning.",
  evaluation: {
    headline: "Elins mångsidiga val",
    intro:
      "BaByliss AS126E passar dig som vill ha flera stylingmöjligheter i ett verktyg utan att köpa premiumdyrt.",
    verdict: "Elins val – mångsidig 4-i-1 för volym och brushing.",
    checks: [],
  },
  specSectionEyebrow: "Varmluftsborste",
  specSectionTitle: "BaByliss AS126E",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/49Xp7NQ",
    ratingSummary: "Populär modell, högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonAs7100Product: Product = {
  slug: "remington-as7100-varmluftsborste",
  title: "Remington AS7100 varmluftsborste",
  category: "skonhet",
  asin: "REMINGTON_AS7100",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  image: "/products/hot-air-brushes/remington-as7100-thumbnail.webp",
  imageAlt: "Remington AS7100 varmluftsborste används för att forma kort hår",
  images: [
    {
      src: "/products/hot-air-brushes/remington-as7100-thumbnail.webp",
      alt: "Remington AS7100 varmluftsborste används för att forma kort hår",
      label: "AS7100",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-1.webp",
      alt: "Remington AS7100 varmluftsborste med borsttillbehör på marmorbänk",
      label: "Tillbehör",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-2.webp",
      alt: "Remington AS7100 varmluftsborste hålls på badrumsbänk",
      label: "Detalj",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-3.webp",
      alt: "Remington AS7100 varmluftsborste med extra borsthuvud",
      label: "2 borstar",
    },
  ],
  amazonUrl: "https://amzn.to/4e3IxTH",
  pageHref: "/skonhet/varmluftsborste/remington-as7100",
  summary:
    "Billigast i klassen och gjord för kort hår, lugg och bob när du vill forma snabbt.",
  evaluation: {
    headline: "Budgetvalet för kort hår",
    intro:
      "Remington AS7100 passar dig som vill ha ett enkelt och billigt stylingverktyg för kortare hår.",
    verdict: "Budgetvalet – billigast och bäst på kort hår.",
    checks: [],
  },
  specSectionEyebrow: "Varmluftsborste",
  specSectionTitle: "Remington AS7100",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4e3IxTH",
    ratingSummary: "Många omdömen, bra betyg för priset.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const babylissC325eProduct: Product = {
  slug: "babyliss-c325e-locktang",
  title: "BaByliss C325E locktång",
  category: "skonhet",
  asin: "BABYLISS_C325E",
  brand: "BaByliss",
  price: "Se aktuellt pris på Amazon",
  image: "/products/curling-irons/babyliss-c325e-thumbnail.webp",
  imageAlt: "BaByliss C325E locktång används för att forma lockar",
  images: [
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-1.webp",
      alt: "BaByliss C325E locktång i rosa och svart design",
      label: "Produkt",
    },
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-2.webp",
      alt: "BaByliss C325E locktång hålls i badrumsmiljö",
      label: "Detalj",
    },
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-3.webp",
      alt: "BaByliss C325E locktång på ljus stylingyta",
      label: "Miljö",
    },
  ],
  amazonUrl: "https://amzn.to/440odN4",
  pageHref: "/skonhet/locktang/babyliss-c325e",
  summary:
    "Stora, fina lockar till ett riktigt lågt pris: keramisk yta, 10 värmelägen och snabb uppvärmning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "BaByliss C325E passar dig som vill ha klassiska lockar till lågt pris och inte stör dig på lite manuell teknik.",
    verdict: "Elins val - mest locktång för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Locktång",
  specSectionTitle: "BaByliss C325E",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/440odN4",
    ratingSummary: "Marknadens mest sålda locktång, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tymoCurlproProduct: Product = {
  slug: "tymo-curlpro-locktang",
  title: "TYMO CURLPRO locktång",
  category: "skonhet",
  asin: "TYMO_CURLPRO",
  brand: "TYMO",
  price: "Se aktuellt pris på Amazon",
  image: "/products/curling-irons/tymo-curlpro-thumbnail.webp",
  imageAlt: "TYMO CURLPRO automatisk locktång används för att locka hår",
  images: [
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-1.webp",
      alt: "TYMO CURLPRO automatisk locktång på ljus stylingyta",
      label: "Produkt",
    },
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-2.webp",
      alt: "TYMO CURLPRO automatisk locktång i mjuk badrumsmiljö",
      label: "Detalj",
    },
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-3.webp",
      alt: "TYMO CURLPRO automatisk locktång med hårslinga",
      label: "Miljö",
    },
  ],
  amazonUrl: "https://amzn.to/4xo0OT5",
  pageHref: "/skonhet/locktang/tymo-curlpro",
  summary:
    "Automatisk locktång för dig som vill ha effortless styling: roterar själv, har anti-tangle och jonteknik.",
  evaluation: {
    headline: "Automatiskt premiumval",
    intro:
      "TYMO CURLPRO passar dig som vill ha automatiska lockar utan mycket teknik, särskilt för längre eller tjockare hår.",
    verdict: "Premiumvalet - effortless för långt och tjockt hår.",
    checks: [],
  },
  specSectionEyebrow: "Locktång",
  specSectionTitle: "TYMO CURLPRO",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xo0OT5",
    ratingSummary: "Mycket högt betyg, en av de mest sålda.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const amazonBasicsKettlebellProduct: Product = {
  slug: "amazon-basics-gjutjarns-kettlebell",
  title: "Amazon Basics gjutjärns-kettlebell",
  category: "traning",
  asin: "B076QJY2FN",
  brand: "Amazon Basics",
  price: "Se aktuellt pris på Amazon",
  image: "/products/kettlebells/amazon-basics-kettlebell-thumbnail.webp",
  imageAlt: "Amazon Basics svart gjutjärns-kettlebell",
  images: [
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-thumbnail.webp",
      alt: "Amazon Basics svart gjutjärns-kettlebell framifrån",
      label: "Elins val",
    },
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-gallery-1.webp",
      alt: "Amazon Basics gjutjärns-kettlebell med texturerat handtag",
      label: "Handtag",
    },
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-gallery-2.webp",
      alt: "Amazon Basics kettlebell i produktvy",
      label: "Gjutjärn",
    },
  ],
  amazonUrl: "https://amzn.to/4fM64tv",
  pageHref: "/traning/kettlebell/amazon-basics",
  summary:
    "Mest kettlebell för pengarna: solid gjutjärnskänsla, flera vikter och ett beprövat basval för riktig hemmaträning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "Amazon Basics passar dig som vill ha en enkel, tålig kettlebell utan mjuka premiumdetaljer eller onödigt hög prislapp.",
    verdict: "Elins val - mest kettlebell för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Kettlebell",
  specSectionTitle: "Amazon Basics gjutjärn",
  specs: [
    { label: "Material", caption: "Kropp", value: "Solid gjutjärn" },
    { label: "Vikter", caption: "Varianter", value: "6/10/12/16/20 kg" },
    { label: "Grepp", caption: "Handtag", value: "Texturerat och målat" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4fM64tv",
    ratingSummary:
      "Amazon visar 4,7 av 5 från 12 275 recensioner och #1 Best Seller i Kettlebells.",
    highlights: [
      "Köpare lyfter kvaliteten och värdet för pengarna.",
      "Flera beskriver den som liten, tät och enkel att förstå.",
      "Passar bäst när hållbarhet och träningskänsla går före mjuk yta.",
    ],
    cautions: [
      "Gjutjärn är hårt mot golv och tår.",
      "En köpare rapporterar lackskada på handtaget vid leverans.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const proironSoftKettlebellProduct: Product = {
  slug: "proiron-mjuk-kettlebell",
  title: "PROIRON mjuk kettlebell",
  category: "traning",
  asin: "B09BDQK6G4",
  brand: "PROIRON",
  price: "Se aktuellt pris på Amazon",
  image: "/products/kettlebells/proiron-soft-kettlebell-thumbnail.webp",
  imageAlt: "PROIRON mjuk kettlebell med svart handtag",
  images: [
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-thumbnail.webp",
      alt: "PROIRON mjuk kettlebell framifrån",
      label: "Mjuk",
    },
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-gallery-1.webp",
      alt: "PROIRON mjuk kettlebell med grepp och mjuk kropp",
      label: "Grepp",
    },
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-gallery-2-optimized.webp",
      alt: "PROIRON mjuk kettlebell för hemmaträning",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/3S7YmjG",
  pageHref: "/traning/kettlebell/proiron-mjuk",
  summary:
    "Mjukare, tystare och snällare mot golv: ett smart val för lägenhet, nybörjare och hem med barn eller husdjur.",
  evaluation: {
    headline: "Det golvsnälla valet",
    intro:
      "PROIRON passar dig som hellre skyddar golv och tår än maxar kilo per krona.",
    verdict: "Tryggt nybörjarval - särskilt i lägenhet.",
    checks: [],
  },
  specSectionEyebrow: "Kettlebell",
  specSectionTitle: "PROIRON mjuk kettlebell",
  specs: [
    { label: "Material", caption: "Kropp", value: "PVC + järnsand" },
    { label: "Vikter", caption: "Varianter", value: "2/4/6/8/10 kg" },
    { label: "Extra", caption: "Hemma", value: "Tystare och golvsnäll" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3S7YmjG",
    ratingSummary: "Amazon visar 4,6 av 5 från 1 185 recensioner.",
    highlights: [
      "Köpare uppskattar att den inte skadar golvet.",
      "Den mjuka kroppen gör den tryggare i hem med barn och husdjur.",
      "Passar när ljudnivå och säkerhet väger tyngre än lägsta pris per kilo.",
    ],
    cautions: [
      "Det är PVC och järnsand, inte gjutjärn.",
      "Den kostar mer per kilo än enklare gjutjärnsalternativ.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const proironNeopreneDumbbellsProduct: Product = {
  slug: "proiron-neoprenhantlar",
  title: "PROIRON neoprenhantlar",
  category: "traning",
  asin: "B01BEVZZZS",
  brand: "PROIRON",
  price: "Se aktuellt pris på Amazon",
  image: "/products/dumbbells/proiron-neoprene-dumbbells-thumbnail.webp",
  imageAlt: "PROIRON neoprenhantlar i rosa par",
  images: [
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-thumbnail.webp",
      alt: "PROIRON neoprenhantlar i par",
      label: "Elins val",
    },
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-gallery-1.webp",
      alt: "PROIRON neoprenhantel med mjuk yta och grepp",
      label: "Grepp",
    },
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-gallery-2.webp",
      alt: "PROIRON neoprenhantlar i flera färger och vikter",
      label: "Vikter",
    },
  ],
  amazonUrl: "https://amzn.to/4vJMOS3",
  pageHref: "/traning/hantlar/proiron-neopren",
  summary:
    "Ett enkelt par hantlar i rätt vikt: mjuk neopren, många färger och ett beprövat val för lätt till medeltung hemmaträning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "PROIRON passar dig som vill köpa exakt den vikt du behöver utan att börja med ett helt set.",
    verdict: "Elins val - enklast och mest beprövat för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Hantlar",
  specSectionTitle: "PROIRON neoprenhantlar",
  specs: [
    { label: "Material", caption: "Kärna", value: "Gjutjärn + neopren" },
    { label: "Vikter", caption: "Par", value: "1-10 kg" },
    { label: "Grepp", caption: "Yta", value: "Mjuk, halkfri neopren" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vJMOS3",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 24 861 recensioner och #4 i Dumbbells.",
    highlights: [
      "Köpare lyfter att hantlarna håller vad de lovar.",
      "Neoprenytan gör dem bekväma och enkla att greppa.",
      "Passar bäst för lätt till medeltung hemmaträning, cardio och rutiner.",
    ],
    cautions: [
      "Neoprenhantlar är inte gjorda för tung lyftning eller att släppas i golvet.",
      "En vanlig invändning är att priset per kilo kan kännas högt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const songmicsDumbbellSetProduct: Product = {
  slug: "songmics-hantelset-med-stallning",
  title: "SONGMICS hantelset med ställning",
  category: "traning",
  asin: "B0FMR69BZ6",
  brand: "SONGMICS",
  price: "Se aktuellt pris på Amazon",
  image: "/products/dumbbells/songmics-dumbbell-set-thumbnail.webp",
  imageAlt: "SONGMICS neoprenhantlar med ställning",
  images: [
    {
      src: "/products/dumbbells/songmics-dumbbell-set-thumbnail.webp",
      alt: "SONGMICS hantelset med sex neoprenhantlar och ställning",
      label: "Set",
    },
    {
      src: "/products/dumbbells/songmics-dumbbell-set-gallery-1.webp",
      alt: "SONGMICS hexagonhantlar i olika vikter",
      label: "Vikter",
    },
    {
      src: "/products/dumbbells/songmics-dumbbell-set-gallery-2.webp",
      alt: "SONGMICS hantelset med displayställ för hemmaträning",
      label: "Ställning",
    },
  ],
  amazonUrl: "https://amzn.to/449gCfb",
  pageHref: "/traning/hantlar/songmics-set",
  summary:
    "Ett färdigt minihemmagym: sex neoprenhantlar i 1, 3 och 5 kg med ställning och hexagonform som inte rullar iväg.",
  evaluation: {
    headline: "Färdigt hemmakit",
    intro:
      "SONGMICS passar dig som vill ha ett komplett startset direkt, inte bara ett par i en vikt.",
    verdict: "Bästa färdiga startsetet med ställning.",
    checks: [],
  },
  specSectionEyebrow: "Hantelset",
  specSectionTitle: "SONGMICS med ställning",
  specs: [
    { label: "Material", caption: "Kärna", value: "Gjutjärn + neopren" },
    { label: "Vikter", caption: "Set", value: "2x1, 2x3, 2x5 kg" },
    { label: "Extra", caption: "Förvaring", value: "PP-ställning" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/449gCfb",
    ratingSummary: "Amazon visar 4,6 av 5 från 2 839 recensioner och #23 i Dumbbells.",
    highlights: [
      "Köpare uppskattar setet som ett färdigt och prisvärt hemmakit.",
      "Hexagonformen gör hantlarna mer roll-säkra på golvet.",
      "Greppvänlig neopren och ställning gör det lättare att hålla ordning.",
    ],
    cautions: [
      "Plastställningen kunde vara stabilare.",
      "Viktavvikelse runt 3% kan förekomma och hantlarna bör inte tappas direkt på hårda trägolv.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const products = [
  featuredProduct,
  amazonBasicsKettlebellProduct,
  proironSoftKettlebellProduct,
  proironNeopreneDumbbellsProduct,
  songmicsDumbbellSetProduct,
  beurerMassagepistolProduct,
  bdbkmgMassagepistolProduct,
  remingtonS8540Product,
  remingtonMiniS2880Product,
  panasonicEsEy30EpilatorProduct,
  braunSilkEpil9Product,
  remingtonProluxeAc9140Product,
  beurerHc25Product,
  babylissAs126eProduct,
  remingtonAs7100Product,
  babylissC325eProduct,
  tymoCurlproProduct,
] as const;

export const productCategories: readonly ProductCategory[] = [
  {
    slug: "traning",
    label: "Träning",
    href: "/traning",
    description: "Smarta val för hemmaträning, rörelse och enkla rutiner.",
  },
  {
    slug: "halsa",
    label: "Hälsa & återhämtning",
    href: "/halsa",
    description: "Produkter för återhämtning, välmående och vardagskänsla.",
  },
  {
    slug: "skonhet",
    label: "Skönhet",
    href: "/skonhet",
    description: "Prisvärda skönhetsval för hår, vardag och smarta rutiner.",
  },
];

export const activeProductCategories = productCategories.filter((category) =>
  products.some((product) => product.category === category.slug),
);

export function getProductsByCategory(categorySlug: ProductCategorySlug) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProductPageHref(product: Pick<Product, "slug" | "pageHref">) {
  return product.pageHref ?? `/product/${product.slug}`;
}

export const genericProductPages = [featuredProduct] as const;
export const reviewableProducts = products;

export function getListedProductBySlug(slug: string) {
  return genericProductPages.find((product) => product.slug === slug);
}

export function getProductBySlug(slug: string) {
  return reviewableProducts.find((product) => product.slug === slug);
}
