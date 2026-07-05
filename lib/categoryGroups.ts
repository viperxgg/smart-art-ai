import { getProductBySlug, type Product, type ProductCategorySlug } from "@/lib/products";
import { waveCategoryProductGroups } from "@/lib/wave-content";

export type CategoryProductGroup = {
  title: string;
  productSlugs: string[];
};

export const categoryProductGroups = {
  skonhet: [
    {
      title: "Hårstyling (verktyg)",
      productSlugs: [
        "candure-frisorsax",
        "denman-d3-borste",
        "wet-brush-original",
        "kitsch-claw-clips",
        "kitsch-heatless-curls",
        "cantu-satin-bonnet",
        "microfiberhandduk-har",
        "tangle-teezer-original",
        "remington-s8540-plattang",
        "remington-mini-s2880-plattang",
        "babyliss-c325e-locktang",
        "tymo-curlpro-locktang",
        "babyliss-as126e-varmluftsborste",
        "remington-as7100-varmluftsborste",
        "remington-proluxe-ac9140-hartork",
        "beurer-hc-25-hartork",
      ],
    },
    {
      title: "Hårvård",
      productSlugs: [
        "maria-nila-texturspray",
        "got2b-glued-harspray",
        "wella-eimi-mousse",
        "osis-volympuder",
        "värmeskyddsspray-got2b",
        "maui-curl-smoothie",
        "cantu-leave-in-conditioner",
        "inkey-scalp-scrub",
        "mielle-rosemary-oil",
        "olaplex-no3-treatment",
        "olaplex-no5-conditioner",
        "olaplex-no4-shampoo",
        "silkesorngott-mullbarssilke",
        "moroccanoil-harolja",
        "loreal-absolut-repair",
        "moroccanoil-torrschampo",
        "loreal-elvital-varmeskydd",
      ],
    },
    {
      title: "Sol & glow",
      productSlugs: [
        "tree-hut-kroppsskrubb",
        "bondi-sands-vante",
        "tanologist-tan-drops",
        "bondi-sands-mousse",
        "st-tropez-self-tan-express",
        "elf-skin-bronzing-drops",
        "nivea-sun-after-sun-lotion",
        "naissance-aloe-vera-gel",
      ],
    },
    {
      title: "Hudvård",
      productSlugs: [
        "neutrogena-hand-cream",
        "biotherm-lait-corporel",
        "olay-regenerist-night-cream",
        "dior-lip-glow-oil",
        "cosrx-acne-pimple-patch",
        "nature-spell-face-oil",
        "mario-badescu-facial-spray",
        "inkey-peptide-moisturizer",
        "anua-azelaic-acid-serum",
        "beauty-of-joseon-propolis-serum",
        "cosrx-centella-ampoule",
        "beauty-of-joseon-centella-mask",
        "some-by-mi-matcha-clay-mask",
        "divain-caffeine-eye-serum",
        "cetaphil-moisturizing-cream",
        "cosrx-aha-bha-toner",
        "bioderma-sensibio-h2o",
        "some-by-mi-cleansing-oil",
        "cetaphil-gentle-cleanser",
        "paulas-choice-2-bha",
        "purest-aha-bha-peeling",
        "celdyque-bakuchiol-serum",
        "gua-sha-rosenkvarts",
        "laneige-lip-sleeping-mask",
        "la-roche-posay-cicaplast-b5",
        "cerave-hydrating-cleanser",
        "la-roche-posay-vitamin-c10-serum",
        "cosrx-snail-mucin-essence",
        "minimalist-hyaluronsyra-serum",
        "kanzy-jojobaolja",
        "inkey-niacinamide-serum",
      ],
    },
    {
      title: "Hårborttagning",
      productSlugs: [
        "braun-bikinitrimmer",
        "veet-vaxremsor",
        "satincare-rakgel",
        "merkur-safety-razor",
        "philips-ansiktstrimmer",
        "braun-ipl-pro5",
        "philips-rakapparat-dam","panasonic-es-ey30-epilator", "braun-silk-epil-9"],
    },
    {
      title: "Fötter",
      productSlugs: [
        "gehwol-fotpuder",
        "flexitol-halkram",
        "plantifique-foot-peel","vxdoirk-elektrisk-fotfil"],
    },
    {
      title: "Naglar",
      productSlugs: [
        "beurer-mp48-nagellampa",
        "essie-gel-couture-topcoat",
        "glasnagelfil",
        "cnd-nagelbandsolja",
        "opi-ridge-filler",
        "essie-nagelhardare",
        "press-on-naglar",
        "beurer-nagelvard-set",],
    },
    {
      title: "Makeup",
      productSlugs: [
        "real-techniques-svamp",
        "real-techniques-borstar",],
    },
    {
      title: "Fransar & bryn",
      productSlugs: [
        "tweezerman-brynsax",
        "sorella-brynlaminering",
        "nanobrow-brynserum",
        "xlash-fransserum",],
    },
  ],
  traning: [
    {
      title: "Kondition",
      productSlugs: [
        "salomon-loparvast",
        "gvolatee-agility-stege",
        "dh-fitlife-studsmatta",
        "reebok-stepbrada",
        "portentum-hopprep",],
    },
    {
      title: "Träningsband",
      productSlugs: [
        "elvire-miniband","traningsband-4-nivaer", "jakkofoxx-loopband"],
    },
    {
      title: "Vikter",
      productSlugs: [
        "bowflex-selecttech-552i",
        "eric-flag-viktvast",
        "amazon-basics-gjutjarns-kettlebell",
        "proiron-mjuk-kettlebell",
        "proiron-neoprenhantlar",
        "songmics-hantelset-med-stallning",
      ],
    },
    {
      title: "Yoga",
      productSlugs: [
        "g5-pilatesring",
        "bodymate-yogabalte",
        "bodymate-yogablock",
        "gorilla-gymboll","prosourcefit-extra-tjock-yogamatta", "yogati-tpe-yogamatta"],
    },
    {
      title: "Återhämtning",
      productSlugs: [
        "rehband-knaskydd","bodymate-foam-roller-care", "elvire-deep-tissue-massageset"],
    },
    {
      title: "Tillbehör",
      productSlugs: [
        "fitgriff-lifting-straps",
        "fuel24-vattenflaska",
        "gorilla-core-slider",
        "cpsports-lyftarbalte",
        "asipro-handledslindor",
        "ihuan-traningshandskar",
        "gorilla-gymnastikringar",
        "gorilla-push-up-handtag",
        "iron-gym-pull-up-bar",
        "amonax-maghjul",
        "gorilla-balansplatta",],
    },
  ],
  halsa: [
    {
      title: "Återhämtning",
      productSlugs: [
        "mattibi-spikmatta",
        "beurer-varmedyna",
        "beurer-fotmassage",
        "renpho-massagekudde","beurer-mg-99-massagepistol", "bdbkmg-massagepistol"],
    },
    {
      title: "Fläkt",
      productSlugs: [
        "beurer-luftkylare",
        "xiaomi-bordsflakt",
        "jisulife-handflakt",
        "dreo-cruiser-pro-tornflakt",
        "honeywell-turboforce-ht900e",
        "midea-fz10-tornflakt",
      ],
    },
    {
      title: "Klimat",
      productSlugs: [
        "levoit-luftfuktare",
        "pro-breeze-luftavfuktare",],
    },
    {
      title: "Sömn & avkoppling",
      productSlugs: [
        "loop-oronproppar",
        "manta-sovmask",
        "philips-wake-up-light",
        "magicteam-white-noise",
        "ella-tyngdtacke",],
    },
    {
      title: "Smart hem & livsstil",
      productSlugs: [
        "govee-hygrometer",
        "twsoul-vattenflaska",
        "stanley-termos",
        "oralb-tandborste",
        "eufy-robotdammsugare",
        "govee-led-list",
        "gritin-laslampa",
        "soundcore-hogtalare",
        "withings-personvag",
        "levoit-core-200s-luftrenare",
        "kobo-clara-bw",
        "salking-aromadiffuser",
        "solnedgangslampa",
        "mini-projektor",
        "stjarnprojektor",
      ],
    },
  ],
  resa: [
    {
      title: "Kabinväska & packning",
      productSlugs: [
        "epicka-reseadapter",
        "traxenta-necessar",
        "grifema-bagagevag",
        "tomtoc-kabelorganizer",
        "myhodo-kompressionspase",
        "travel-dude-packkuber",],
    },
  ],
} satisfies Record<ProductCategorySlug, CategoryProductGroup[]>;

export function getCategoryProductGroups(categorySlug: ProductCategorySlug) {
  return [
    ...categoryProductGroups[categorySlug],
    ...(waveCategoryProductGroups[categorySlug] ?? []),
  ].map((group) => ({
    ...group,
    products: group.productSlugs
      .map((slug) => getProductBySlug(slug))
      .filter((product): product is Product => Boolean(product)),
  }));
}
