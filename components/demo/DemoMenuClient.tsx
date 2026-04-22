"use client";

import { useMemo, useState } from "react";
import { BellRing, Flame, Sparkles } from "lucide-react";
import { demoDishes } from "@/lib/demo-data";

interface DemoMenuClientProps {
  locale: string;
  restaurantName: string;
  table: string;
}

const categoryOrder = ["starters", "mains", "desserts", "drinks"] as const;

const categoryLabels = {
  en: {
    starters: "Starters",
    mains: "Mains",
    desserts: "Desserts",
    drinks: "Drinks",
    hero: "Scan, browse, and call the waiter from the table.",
    table: "Table",
    ingredients: "Ingredients",
    calories: "Calories",
    callWaiter: "Call waiter",
    waiterCalled: "Waiter request sent",
    waiterHint: "A confirmation appears instantly for the guest and staff.",
  },
  sv: {
    starters: "Forratter",
    mains: "Huvudratter",
    desserts: "Desserter",
    drinks: "Drycker",
    hero: "Skanna, bladdra och kalla pa servitor direkt fran bordet.",
    table: "Bord",
    ingredients: "Ingredienser",
    calories: "Kalorier",
    callWaiter: "Call waiter",
    waiterCalled: "Servitor notifierad",
    waiterHint: "Gasten far direkt feedback och personalen ser anropet direkt.",
  },
} as const;

export function DemoMenuClient({ locale, restaurantName, table }: DemoMenuClientProps) {
  const copy = categoryLabels[locale as "en" | "sv"] ?? categoryLabels.en;
  const [activeCategory, setActiveCategory] = useState<(typeof categoryOrder)[number]>("mains");
  const [waiterCalled, setWaiterCalled] = useState(false);

  const visibleDishes = useMemo(
    () => demoDishes.filter((dish) => dish.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#101a21_0%,#050505_36%,#020202_100%)] text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-3xl flex-col px-4 pb-28 pt-6 sm:px-6 sm:pt-8">
        <div className="flex flex-1 flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-cyan-400/70">
                {restaurantName}
              </p>
              <h1 className="text-3xl font-black tracking-tight">{copy.hero}</h1>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">{copy.table}</p>
              <p className="text-2xl font-black text-cyan-300">{table}</p>
            </div>
          </div>

          <div className="no-scrollbar -mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1">
            {categoryOrder.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`min-h-12 min-w-max rounded-full border px-4 py-3 text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "border-cyan-400/40 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/[0.03] text-white/70"
                }`}
              >
                {copy[category]}
              </button>
            ))}
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5">
            <div className="space-y-4">
              {visibleDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="rounded-[1.6rem] border border-white/8 bg-black/30 p-4"
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-bold tracking-tight">{dish.name}</h2>
                        {dish.popular ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
                            <Sparkles className="h-3 w-3" />
                            Popular
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm leading-6 text-white/60">{dish.description}</p>
                    </div>
                    <p className="text-lg font-black text-cyan-300">{dish.priceSek} SEK</p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-white/55">
                    <span className="rounded-full border border-white/10 px-3 py-1.5">
                      {copy.calories}: {dish.calories}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5">
                      {copy.ingredients}: {dish.ingredients.join(", ")}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <BellRing className="h-4 w-4" />
                {copy.callWaiter}
              </div>
              <p className="text-sm leading-6 text-white/55">{copy.waiterHint}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050505]/90 p-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {waiterCalled ? (
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              <div className="mb-1 flex items-center gap-2 font-semibold">
                <Flame className="h-4 w-4" />
                {copy.waiterCalled}
              </div>
              <p className="text-emerald-100/80">{copy.waiterHint}</p>
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setWaiterCalled(true)}
            className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-cyan-400 px-5 text-base font-black text-black transition-transform active:scale-[0.98]"
          >
            <BellRing className="h-5 w-5" />
            {copy.callWaiter}
          </button>
        </div>
      </div>
    </div>
  );
}
