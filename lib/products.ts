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
  price: "186,99 kr",
  image: "/products/resistance-bands/elin-resistance-band-thumbnail.png",
  imageAlt: "Person som tränar hemma med lila träningsband",
  images: [
    {
      src: "/products/resistance-bands/elin-resistance-band-thumbnail.png",
      alt: "Person som tränar hemma med lila träningsband vid ett fönster",
      label: "Elin valde",
    },
    {
      src: "/products/resistance-bands/home-gym.jpg",
      alt: "Träningsband som används för hemmagym och helkroppsövningar",
      label: "Hemmagym",
    },
    {
      src: "/products/resistance-bands/whole-body.jpg",
      alt: "Träningsband som används för rygg, armar, mage, höfter och ben",
      label: "Helkropp",
    },
    {
      src: "/products/resistance-bands/durable-elastic.jpg",
      alt: "Närbild på tåligt latexband vid fäste",
      label: "Material",
    },
    {
      src: "/products/resistance-bands/natural-latex.jpg",
      alt: "Svart träningsband i naturlig latex med elasticitetsillustration",
      label: "Latex",
    },
    {
      src: "/products/resistance-bands/resistance-levels.jpg",
      alt: "Fyra träningsband i gul, röd, svart och lila färg med olika motstånd",
      label: "Motstånd",
    },
    {
      src: "/products/resistance-bands/size-guide.jpg",
      alt: "Storleksguide för fyra träningsband med olika tjocklek och motstånd",
      label: "Storlek",
    },
    {
      src: "/products/resistance-bands/band-set.jpg",
      alt: "Fyra träningsband i olika färger bredvid person som tränar",
      label: "Setet",
    },
  ],
  amazonUrl: "https://amzn.to/4xuLEfd",
  summary:
    "Elin lade det här setet på listan för att det gör hemmaträning mindre krånglig. Det är inte en magisk genväg, men det löser en tydlig känsla: man vill kunna träna hemma utan att köpa stora saker.",
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

export const ninjaBlastProduct: Product = {
  slug: "ninja-blast-portable-blender",
  title: "Ninja Blast Portable Blender",
  asin: "B0CLY983L7",
  brand: "Ninja",
  price: "523 kr",
  image: "/products/ninja-blast/blend-action.jpg",
  imageAlt: "Ninja Blast portabel mixer fylld med frukt och grönsaker i kök",
  images: [
    {
      src: "/products/ninja-blast/blend-action.jpg",
      alt: "Ninja Blast portabel mixer fylld med frukt och grönsaker i kök",
      label: "I köket",
    },
    {
      src: "/products/ninja-blast/self-cleaning.jpg",
      alt: "Ninja Blast portabel mixer med text om självrengöring",
      label: "Rengöring",
    },
    {
      src: "/products/ninja-blast/dishwasher-clean.jpg",
      alt: "Diskmaskin och rengöringsinformation för Ninja Blast",
      label: "Diskmaskin",
    },
    {
      src: "/products/ninja-blast/blast-tech.jpg",
      alt: "Närbild på Ninja Blast-teknik och knivblad",
      label: "Teknik",
    },
    {
      src: "/products/ninja-blast/easy-use.jpg",
      alt: "Ninja Blast med färdig smoothie och avtagbar basenhet",
      label: "Lättanvänd",
    },
    {
      src: "/products/ninja-blast/drink-options.jpg",
      alt: "Olika drycker som kan mixas med Ninja Blast",
      label: "Drycker",
    },
    {
      src: "/products/ninja-blast/usb-c-charge.jpg",
      alt: "Ninja Blast laddas med USB-C-kabel",
      label: "USB-C",
    },
    {
      src: "/products/ninja-blast/drink-outside.jpg",
      alt: "Två personer dricker smoothies utomhus med Ninja Blast",
      label: "Ute",
    },
    {
      src: "/products/ninja-blast/take-anywhere.jpg",
      alt: "Personer går på stranden med Ninja Blast",
      label: "Ta med",
    },
    {
      src: "/products/ninja-blast/park-drink.jpg",
      alt: "Person dricker smoothie ur Ninja Blast i parkmiljö",
      label: "Park",
    },
    {
      src: "/products/ninja-blast/product-filled.jpg",
      alt: "Ninja Blast produktbild fylld med ingredienser",
      label: "Produkt",
    },
    {
      src: "/products/ninja-blast/leakproof-bag.jpg",
      alt: "Ninja Blast vid ryggsäck med läckagesäkert lock",
      label: "Läckage",
    },
    {
      src: "/products/ninja-blast/gym-drink.jpg",
      alt: "Person dricker grön smoothie med Ninja Blast på gym",
      label: "Gym",
    },
    {
      src: "/products/ninja-blast/sport-drink.jpg",
      alt: "Person dricker rosa smoothie med Ninja Blast utomhus",
      label: "Sport",
    },
    {
      src: "/products/ninja-blast/colors.jpg",
      alt: "Ninja Blast visas i olika färger",
      label: "Färger",
    },
    {
      src: "/products/ninja-blast/box-contents.jpg",
      alt: "Vad som finns i kartongen för Ninja Blast portabel mixer",
      label: "I lådan",
    },
  ],
  amazonUrl: "https://amzn.to/4echHHS",
  summary:
    "Elin lade den här på listan för att nyttan syns direkt: fyll, mixa och ta med. Den säljer inte bara en smoothie, utan känslan av att få ihop något fräscht även när man är på språng.",
  evaluation: {
    headline: "Elins första produktvinkel",
    intro:
      "Här börjar vi med vardagskänslan: man vill ha en smoothie eller shake utan att plocka fram en stor mixer. Bilderna visar användningen, och videodelen kan byggas på när UGC-klippen är klara.",
    verdict:
      "Stark kandidat för korta TikTok-klipp eftersom nyttan syns snabbt: ingredienser i, dryck klar, vidare med dagen. Den behöver däremot testas i verklig användning innan vi ger en hård rekommendation.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Minskar tröskeln för smoothies, proteinshakes och snabba drycker när man inte vill använda en stor mixer.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Portabel form, uppladdning och drickbar behållare gör produkten lätt att förstå på några sekunder i video.",
      },
      {
        label: "Det vi vill testa mer",
        text: "Vi behöver visa hur den klarar fryst frukt, rengöring, batteri och vardagsstress innan produktsidan känns helt färdig.",
      },
    ],
  },
  specSectionEyebrow: "Produktdata",
  specSectionTitle: "Det vi vet nu",
  specs: [
    { label: "Volym", caption: "Behållare", value: "530 ml" },
    { label: "Laddning", caption: "Sladdlös", value: "USB-C" },
    { label: "Modell", caption: "Amazon ASIN", value: "B0CLY983L7" },
    { label: "Färg", caption: "Variant", value: "Black" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon.se produktsida",
    sourceUrl:
      "https://www.amazon.se/-/en/Ninja-Leakproof-Rechargeable-Smoothies-BC151EUBK/dp/B0CLY983L7/",
    ratingSummary: "Recensioner granskas inför full produktsida.",
    highlights: [
      "Produktidén är lätt att förstå: mixa direkt i en portabel behållare.",
      "Passar bra för UGC där man visar morgonrutin, träning eller mellanmål.",
      "Läckagesäkert lock och uppladdningsbar användning är viktiga poänger att visa visuellt.",
    ],
    cautions: [
      "Testa hur den klarar fryst frukt och tjockare smoothies innan vi skriver starkare rekommendation.",
      "Visa rengöring och batterianvändning i video så kunden inte behöver gissa.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Smoothies eller proteinshakes hemma, på jobbet eller efter träning.",
    "Snabb frukost där man vill mixa och dricka ur samma behållare.",
    "Kort UGC-video med tydlig före-och-efter-känsla: ingredienser in, dryck klar.",
  ],
  peopleLike: [
    "Känslan av att kunna göra något nyttigt utan att starta ett helt köksprojekt.",
    "Portabel produkt som är lätt att förstå utan lång förklaring.",
    "Kan visas visuellt på några sekunder med frukt, vätska och färdig dryck.",
  ],
  honestCheck: [
    "Vänta med slutlig bedömning tills användarklipp och praktiskt testmaterial är på plats.",
    "Kunden bör se hur den hanterar fryst frukt, is och tjockare konsistens.",
    "Rengöring och batteri är viktiga delar att visa, inte bara produktens utseende.",
  ],
  comments: [],
};

export const products = [featuredProduct, ninjaBlastProduct] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
