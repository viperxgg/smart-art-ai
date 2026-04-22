export interface DemoDish {
  id: string;
  name: string;
  description: string;
  priceSek: number;
  calories: number;
  ingredients: string[];
  category: string;
  popular?: boolean;
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
  name: "Nordic Bistro",
  accent: "Scandinavian menu demo",
};

export const demoDishes: DemoDish[] = [
  {
    id: "starter-1",
    name: "Juniper Salmon Tartare",
    description: "Cured salmon, dill oil, rye crumble, pickled cucumber.",
    priceSek: 145,
    calories: 320,
    ingredients: ["salmon", "dill", "rye", "cucumber"],
    category: "starters",
    popular: true,
  },
  {
    id: "starter-2",
    name: "Smoked Beet Carpaccio",
    description: "Roasted beetroot, whipped chevre, toasted hazelnut.",
    priceSek: 125,
    calories: 280,
    ingredients: ["beetroot", "chevre", "hazelnut"],
    category: "starters",
  },
  {
    id: "main-1",
    name: "Charred Arctic Cod",
    description: "Brown butter, crushed potatoes, fennel, lemon glaze.",
    priceSek: 265,
    calories: 610,
    ingredients: ["cod", "potato", "fennel", "lemon"],
    category: "mains",
    popular: true,
  },
  {
    id: "main-2",
    name: "Forest Mushroom Pasta",
    description: "Fresh tagliatelle, cream reduction, truffle herbs.",
    priceSek: 215,
    calories: 540,
    ingredients: ["pasta", "mushroom", "cream", "herbs"],
    category: "mains",
  },
  {
    id: "dessert-1",
    name: "Cardamom Creme Brulee",
    description: "Vanilla custard, burnt sugar crust, cloudberry jam.",
    priceSek: 95,
    calories: 390,
    ingredients: ["cream", "vanilla", "cardamom", "cloudberry"],
    category: "desserts",
  },
  {
    id: "drink-1",
    name: "Lingonberry Spritz",
    description: "Sparkling tonic, lingonberry cordial, citrus peel.",
    priceSek: 68,
    calories: 110,
    ingredients: ["lingonberry", "tonic", "citrus"],
    category: "drinks",
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
