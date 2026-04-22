export interface DemoDish {
  id: string;
  number: string;
  slug: string;
  name: string;
  description: string;
  priceSek: number;
  calories: number;
  ingredients: string[];
  category: "appetizers" | "mains" | "beverages" | "sweets";
  allergensCount: number;
  imageAlt: string;
  imageUrl: string;
  badge?: "popular" | "chef-pick" | "signature" | "seasonal";
}

export interface KitchenTicket {
  id: string;
  table: string;
  status: "new" | "firing" | "ready";
  eta: string;
  items: string[];
}

export const demoRestaurant = {
  slug: "nordic-bistro",
  name: "Nord Table",
  accent: "Premium Scandinavian menu",
};

export const demoDishes: DemoDish[] = [
  {
    id: "dish-001",
    number: "001",
    slug: "bruschetta-classica",
    name: "Bruschetta Classica",
    description: "Grilled bread topped with fresh tomatoes and basil",
    priceSek: 89,
    calories: 210,
    ingredients: ["sourdough bread", "fresh tomatoes", "basil", "garlic", "olive oil"],
    allergensCount: 1,
    category: "appetizers",
    imageAlt: "Bruschetta Classica plated with tomato and basil",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/001-bruschetta-classica/hero.png",
    badge: "popular",
  },
  {
    id: "dish-002",
    number: "002",
    slug: "truffle-fries",
    name: "Truffle Fries",
    description: "Crispy fries with parmesan and truffle oil",
    priceSek: 75,
    calories: 450,
    ingredients: ["potatoes", "parmesan", "white truffle oil", "parsley", "sea salt"],
    allergensCount: 1,
    category: "appetizers",
    imageAlt: "Truffle fries with parmesan and herbs",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/002-truffle-fries/hero.png",
    badge: "chef-pick",
  },
  {
    id: "dish-003",
    number: "003",
    slug: "grilled-salmon",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce",
    priceSek: 245,
    calories: 520,
    ingredients: ["Atlantic salmon", "lemon butter", "dill", "asparagus"],
    allergensCount: 2,
    category: "mains",
    imageAlt: "Grilled salmon with lemon butter sauce",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/003-grilled-salmon/hero.png",
    badge: "signature",
  },
  {
    id: "dish-004",
    number: "004",
    slug: "ribeye-steak",
    name: "Ribeye Steak",
    description: "300g premium beef served with roasted potatoes",
    priceSek: 320,
    calories: 850,
    ingredients: ["prime ribeye", "rosemary", "garlic", "baby potatoes"],
    allergensCount: 0,
    category: "mains",
    imageAlt: "Ribeye steak with roasted potatoes",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/004-ribeye-steak/hero.png",
    badge: "signature",
  },
  {
    id: "dish-005",
    number: "005",
    slug: "sparkling-water",
    name: "Sparkling Water",
    description: "33cl local mineral water",
    priceSek: 35,
    calories: 0,
    ingredients: ["mineral water", "carbonic acid"],
    allergensCount: 0,
    category: "beverages",
    imageAlt: "Sparkling water served chilled",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/005-sparkling-water/hero.png",
  },
  {
    id: "dish-006",
    number: "006",
    slug: "craft-beer",
    name: "Craft Beer",
    description: "Local Swedish IPA",
    priceSek: 85,
    calories: 180,
    ingredients: ["malted barley", "hops", "yeast", "water"],
    allergensCount: 1,
    category: "beverages",
    imageAlt: "Craft beer in a chilled glass",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/006-craft-beer/hero.png",
    badge: "seasonal",
  },
  {
    id: "dish-007",
    number: "007",
    slug: "chocolate-fondant",
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with vanilla ice cream",
    priceSek: 95,
    calories: 650,
    ingredients: ["dark chocolate", "eggs", "butter", "vanilla ice cream"],
    allergensCount: 3,
    category: "sweets",
    imageAlt: "Chocolate fondant with vanilla ice cream",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/007-chocolate-fondant/hero.png",
    badge: "popular",
  },
  {
    id: "dish-008",
    number: "008",
    slug: "swedish-cheesecake",
    name: "Swedish Cheesecake",
    description: "Traditional ostkaka with cloudberry jam",
    priceSek: 110,
    calories: 420,
    ingredients: ["cottage cheese", "cloudberry jam", "cream", "almonds"],
    allergensCount: 3,
    category: "sweets",
    imageAlt: "Swedish cheesecake with cloudberry jam",
    imageUrl:
      "https://codex-2mpec9lbm-viperxggs-projects.vercel.app/restaurants/nord-table/dishes/008-swedish-cheesecake/hero.png",
    badge: "signature",
  },
];

export const kitchenTickets: KitchenTicket[] = [
  {
    id: "KDS-204",
    table: "12",
    status: "new",
    eta: "08 min",
    items: ["2x Juniper Salmon Tartare", "1x Lingonberry Spritz"],
  },
  {
    id: "KDS-205",
    table: "7",
    status: "firing",
    eta: "04 min",
    items: ["1x Charred Arctic Cod", "1x Forest Mushroom Pasta"],
  },
  {
    id: "KDS-206",
    table: "4",
    status: "ready",
    eta: "Pickup",
    items: ["2x Cardamom Creme Brulee"],
  },
];

export const adminMetrics = [
  { label: "Live tables", value: "14", detail: "3 waiting for service" },
  { label: "Open orders", value: "28", detail: "Average prep 7 min" },
  { label: "Call waiter", value: "5", detail: "Newest from Table 12" },
  { label: "Top category", value: "Mains", detail: "42% of active carts" },
];
