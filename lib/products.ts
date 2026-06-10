export type Product = {
  slug: string;
  title: string;
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
  asin: "B0CQXFWMH5",
  brand: "WuGU",
  price: "Se aktuellt pris på Amazon",
  image: "/products/resistance-bands/elin-resistance-band-thumbnail.png",
  imageAlt: "Person som tränar hemma med lila träningsband",
  images: [
    {
      src: "/products/resistance-bands/elin-resistance-band-thumbnail.png",
      alt: "Person som tränar hemma med ett lila träningsband",
      label: "Elin valde",
    },
    {
      src: "/products/resistance-bands/elin-band-stretch.png",
      alt: "Person som stretchar armarna med ett lila träningsband hemma",
      label: "Armar",
    },
    {
      src: "/products/resistance-bands/elin-band-black.png",
      alt: "Person som använder ett svart träningsband för rörlighet",
      label: "Rörlighet",
    },
    {
      src: "/products/resistance-bands/elin-band-levels.png",
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
      poster: "/products/resistance-bands/ugc/band-skillnad-poster.jpg",
      title: "Bandet som gör skillnad",
      hook: "Ett enkelt band kan göra hemmaträningen tydligare.",
      note: "Kort UGC-klipp som visar hur produkten kan användas i vardagen.",
    },
    {
      src: "/products/resistance-bands/ugc/sluta-squats.mp4",
      poster: "/products/resistance-bands/ugc/sluta-squats-poster.jpg",
      title: "Fokus på rumpan",
      hook: "När squats inte räcker för rätt kontakt.",
      note: "Visar hur bandet kan ge mer riktad aktivering i övningen.",
    },
    {
      src: "/products/resistance-bands/ugc/tre-ovningar.mp4",
      poster: "/products/resistance-bands/ugc/tre-ovningar-poster.jpg",
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
  asin: "BEURER_MG_99",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  image: "/products/massage-guns/beurer-mg99-thumbnail.png",
  imageAlt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
  images: [
    {
      src: "/products/massage-guns/beurer-mg99-thumbnail.png",
      alt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
      label: "Beurer MG 99",
    },
    {
      src: "/products/massage-guns/beurer-mg99-table.png",
      alt: "Beurer MG 99 massagepistol med massagehuvuden på ett ljust bord",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/beurer-mg99-neck.png",
      alt: "Person som använder Beurer MG 99 massagepistol vid nacke och axel",
      label: "Nacke",
    },
    {
      src: "/products/massage-guns/beurer-mg99-therapy.png",
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
  asin: "BDBKMG",
  brand: "BDBKMG",
  price: "Se aktuellt pris på Amazon",
  image: "/products/massage-guns/muscle-massage-gun-thumbnail.png",
  imageAlt: "Person som använder en massagepistol på axeln hemma",
  images: [
    {
      src: "/products/massage-guns/muscle-massage-gun-thumbnail.png",
      alt: "Person som använder en massagepistol på axeln hemma",
      label: "Muscle Massage Gun",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-kit.png",
      alt: "Massagepistol med utbytbara massagehuvuden på ljust trä",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-shoulder.png",
      alt: "Person som använder massagepistol på axeln",
      label: "Axel",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-lifestyle.png",
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

export const products = [
  featuredProduct,
  beurerMassagepistolProduct,
  bdbkmgMassagepistolProduct,
] as const;
export const genericProductPages = [featuredProduct] as const;
export const reviewableProducts = products;

export function getListedProductBySlug(slug: string) {
  return genericProductPages.find((product) => product.slug === slug);
}

export function getProductBySlug(slug: string) {
  return reviewableProducts.find((product) => product.slug === slug);
}
