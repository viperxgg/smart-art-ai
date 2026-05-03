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
  status: "new" | "firing" | "ready" | "completed";
  eta: string;
  age: string;
  items: Array<{
    name: string;
    quantity: number;
  }>;
  assignedTo: string;
  totalSek: number;
  note?: string;
}

export interface AdminActivityItem {
  id: string;
  table: string;
  kind: "order" | "assistance";
  title: string;
  description: string;
  statusLabel: string;
  statusTone: "neutral" | "accent" | "success";
  timestamp: string;
  assignee?: string;
  amountSek?: number;
  itemSummary?: string;
}

export const demoRestaurant = {
  slug: "nordic-bistro",
  name: "Nord Table",
  accent: "Premium Scandinavian menu",
};

export const demoInterfacePreviews = {
  customer: {
    src: "/demo/previews/guest-mobile.png",
    alt: "Guest mobile ordering interface preview",
  },
  admin: {
    src: "/demo/previews/admin-dashboard.png",
    alt: "Restaurant admin dashboard preview",
  },
  kitchen: {
    src: "/demo/previews/kitchen-board.png",
    alt: "Kitchen display system preview",
  },
} as const;

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
    imageUrl: "/demo/dishes/001-bruschetta-classica.svg",
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
    imageUrl: "/demo/dishes/002-truffle-fries.svg",
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
    imageUrl: "/demo/dishes/003-grilled-salmon.svg",
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
    imageUrl: "/demo/dishes/004-ribeye-steak.svg",
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
    imageUrl: "/demo/dishes/005-sparkling-water.svg",
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
    imageUrl: "/demo/dishes/006-craft-beer.svg",
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
    imageUrl: "/demo/dishes/007-chocolate-fondant.svg",
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
    imageUrl: "/demo/dishes/008-swedish-cheesecake.svg",
    badge: "signature",
  },
];

export const kitchenTickets: KitchenTicket[] = [
  {
    id: "KDS-204",
    table: "12",
    status: "new",
    eta: "08 min",
    age: "1 hr ago",
    items: [
      { name: "Truffle Fries", quantity: 2 },
      { name: "Grilled Salmon", quantity: 1 },
      { name: "Sparkling Water", quantity: 2 },
    ],
    assignedTo: "Anna",
    totalSek: 427,
  },
  {
    id: "KDS-205",
    table: "7",
    status: "firing",
    eta: "04 min",
    age: "1 hr ago",
    items: [
      { name: "Burrata Salad", quantity: 1 },
      { name: "Bruschetta Classica", quantity: 2 },
      { name: "House Lemonade", quantity: 1 },
    ],
    assignedTo: "Kitchen",
    totalSek: 325,
  },
  {
    id: "KDS-206",
    table: "28",
    status: "ready",
    eta: "Pickup",
    age: "Just now",
    items: [
      { name: "Truffle Fries", quantity: 2 },
      { name: "Craft Beer", quantity: 2 },
    ],
    assignedTo: "Kitchen",
    totalSek: 286,
    note: "Sauce on the side.",
  },
  {
    id: "KDS-207",
    table: "29",
    status: "completed",
    eta: "Completed",
    age: "Just now",
    items: [{ name: "Chocolate Fondant", quantity: 2 }],
    assignedTo: "Kitchen",
    totalSek: 196,
    note: "Desserts after mains.",
  },
  {
    id: "KDS-208",
    table: "18",
    status: "completed",
    eta: "Completed",
    age: "1 min ago",
    items: [
      { name: "Ribeye Steak", quantity: 1 },
      { name: "Craft Beer", quantity: 2 },
    ],
    assignedTo: "Kitchen",
    totalSek: 490,
  },
];

export const adminMetrics = [
  { label: "Live tables", value: "14", detail: "3 waiting for service" },
  { label: "Open orders", value: "28", detail: "Average prep 7 min" },
  { label: "Call waiter", value: "5", detail: "Newest from Table 12" },
  { label: "Top category", value: "Mains", detail: "42% of active carts" },
];

export const adminActivityFeed: AdminActivityItem[] = [
  {
    id: "ADM-301",
    table: "30",
    kind: "assistance",
    title: "Waiter requested",
    description: "Guest requested waiter assistance.",
    statusLabel: "Claimed",
    statusTone: "accent",
    timestamp: "Just now",
    assignee: "Anna",
  },
  {
    id: "ADM-302",
    table: "29",
    kind: "order",
    title: "New order",
    description: "Desserts after mains.",
    statusLabel: "Completed",
    statusTone: "success",
    timestamp: "Just now",
    assignee: "Kitchen",
    amountSek: 196,
    itemSummary: "2x Chocolate Fondant",
  },
  {
    id: "ADM-303",
    table: "12",
    kind: "order",
    title: "Open order",
    description: "Guest confirmed mains and drinks.",
    statusLabel: "Pending",
    statusTone: "neutral",
    timestamp: "2 min ago",
    assignee: "Floor",
    amountSek: 427,
    itemSummary: "2x Truffle Fries, 1x Grilled Salmon",
  },
];
