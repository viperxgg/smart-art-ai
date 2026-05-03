"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BellRing, Plus } from "lucide-react";
import { DemoRouteSwitcher } from "@/components/demo/DemoRouteSwitcher";
import { demoDishes } from "@/lib/demo-data";
import type { AppLocale } from "@/lib/site";

interface DemoMenuClientProps {
  locale: string;
  restaurantName: string;
  table: string;
}

const categoryOrder = ["selection", "appetizers", "mains", "beverages", "sweets"] as const;

const copy = {
  en: {
    selection: "Selection",
    appetizers: "Appetizers",
    mains: "Mains",
    beverages: "Beverages",
    sweets: "Sweets",
    call: "CALL",
    callWaiter: "Call waiter",
    called: "Waiter request sent",
    detail: "Details",
    ingredients: "ingredients",
    allergens: "allergens",
    noAllergens: "No allergens",
    needHelp: "Need help?",
    helpA: "Book a table",
    helpB: "Visit us again soon",
    helpC: "Allergens",
    helpD: "Tell us about your needs",
    guestMode: "Guest ordering demo",
    guestTitle: "See how the guest experience feels at the table",
  },
  sv: {
    selection: "Utvalda",
    appetizers: "Förrätter",
    mains: "Huvudrätter",
    beverages: "Drycker",
    sweets: "Dessert",
    call: "ANROPA",
    callWaiter: "Servitör",
    called: "Servitor kontaktad",
    detail: "Detaljer",
    ingredients: "ingredienser",
    allergens: "allergener",
    noAllergens: "Inga allergener",
    needHelp: "Behöver du hjälp?",
    helpA: "Boka bord",
    helpB: "Välkommen tillbaka snart",
    helpC: "Allergener",
    helpD: "Berätta om dina behov",
    guestMode: "Gästupplevelse live",
    guestTitle: "Se hur beställningen känns direkt vid bordet",
  },
} as const;

type CategoryKey = (typeof categoryOrder)[number];

export function DemoMenuClient({ locale, restaurantName, table }: DemoMenuClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("selection");
  const [waiterCalled, setWaiterCalled] = useState(false);
  const [isSwedish, setIsSwedish] = useState(locale === "sv");
  const activeLocale: AppLocale = isSwedish ? "sv" : "en";
  const t = copy[activeLocale] ?? copy.en;

  const groups = useMemo(
    () => [
      { key: "appetizers" as const, title: t.appetizers },
      { key: "mains" as const, title: activeLocale === "sv" ? "Huvudrätter" : "Main Course" },
      { key: "beverages" as const, title: activeLocale === "sv" ? "Drycker" : "Drinks" },
      { key: "sweets" as const, title: t.sweets },
    ],
    [activeLocale, t.appetizers, t.sweets],
  );

  const groupedDishes = useMemo(() => {
    if (activeCategory === "selection") {
      return groups.map((group) => ({
        ...group,
        dishes: demoDishes.filter((dish) => dish.category === group.key),
      }));
    }

    return groups
      .filter((group) => group.key === activeCategory)
      .map((group) => ({
        ...group,
        dishes: demoDishes.filter((dish) => dish.category === group.key),
      }));
  }, [activeCategory, groups]);

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="rounded-[2rem] border border-[#272727] bg-[#111111] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--accent-primary)]">{t.guestMode}</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-[2.6rem]">
              {t.guestTitle}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
              {activeLocale === "sv"
                ? "Byt mellan gäst, admin och kök utan att lämna demon. Gästläget ska kännas snabbt, tydligt och enkelt att förstå."
                : "Switch between guest, admin, and kitchen without leaving the demo. The guest view should feel fast, clear, and easy to understand."}
            </p>
          </div>
          <DemoRouteSwitcher locale={locale as AppLocale} active="menu" />
        </section>

        <header className="mb-5 rounded-[2rem] border border-[#272727] bg-[#111111] px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-h-12 flex-1 items-center rounded-full border border-white/5 bg-[#141414] px-5 text-sm font-medium text-white/55">
              {restaurantName} - Table {table}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setWaiterCalled(true)}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] px-5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]"
              >
                <span>{t.call}</span>
                <span>{t.callWaiter}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsSwedish((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#191919] text-sm font-semibold uppercase text-white/80"
              >
                {activeLocale.toUpperCase()}
              </button>
            </div>
          </div>
        </header>

        <nav className="mb-10 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {categoryOrder.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border border-[rgba(124,255,178,0.22)] bg-[rgba(124,255,178,0.07)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    : "text-white/70"
                }`}
              >
                {t[category]}
              </button>
            ))}
          </div>
        </nav>

        <section className="space-y-16">
          {groupedDishes.map((group) => (
            <section key={group.key}>
              <h2 className="mb-6 text-[2rem] font-semibold tracking-tight text-white">{group.title}</h2>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {group.dishes.map((dish) => (
                  <article
                    key={dish.id}
                    className="overflow-hidden rounded-[1.7rem] border border-[#202020] bg-[#0f0f0f] shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                  >
                    <div className="relative">
                      <Image
                        src={dish.imageUrl}
                        alt={dish.imageAlt}
                        width={1200}
                        height={900}
                        sizes="(min-width: 1280px) 50vw, 100vw"
                        className="h-[330px] w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 inline-flex min-w-12 items-center justify-center rounded-full bg-black/55 px-3 py-2 text-xs font-bold tracking-[0.1em] text-white">
                        {dish.number}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <h3 className="text-[1.9rem] font-semibold leading-none tracking-tight text-white">
                          {dish.name}
                        </h3>
                  <span className="text-xl font-bold text-[var(--accent-primary)]">{dish.priceSek} SEK</span>
                      </div>

                      <p className="mb-4 text-base text-white/76">{dish.description}</p>

                      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/55">
                        <span>{dish.calories} kcal</span>
                        <span aria-hidden="true">|</span>
                        <span>{dish.ingredients.length} {t.ingredients}</span>
                        <span aria-hidden="true">|</span>
                        <span>
                          {dish.allergensCount === 0 ? t.noAllergens : `${dish.allergensCount} ${t.allergens}`}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/88 transition hover:border-white/20"
                        >
                          {t.detail}
                        </button>
                        <button
                          type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-primary)] text-[#06100A] shadow-[0_0_24px_rgba(124,255,178,0.24)] transition hover:scale-[1.03]"
                          aria-label={`Add ${dish.name}`}
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#1f1f1f] bg-[#0f0f0f] p-6">
          <h2 className="mb-5 text-2xl font-semibold text-white">{t.needHelp}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-[#121212] px-5 py-4 text-left"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(124,255,178,0.07)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                TAB
              </span>
              <span className="flex flex-col">
                <strong className="text-white">{t.helpA}</strong>
                <small className="text-white/55">{t.helpB}</small>
              </span>
            </button>
            <button
              type="button"
              className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-[#121212] px-5 py-4 text-left"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(124,255,178,0.07)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                ALR
              </span>
              <span className="flex flex-col">
                <strong className="text-white">{t.helpC}</strong>
                <small className="text-white/55">{t.helpD}</small>
              </span>
            </button>
          </div>
          <footer className="mt-6 text-sm text-white/45">All rights reserved to smartartai.se</footer>
        </section>

        {waiterCalled ? (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-xl border border-[rgba(124,255,178,0.22)] bg-[rgba(11,15,18,0.95)] px-5 py-3 text-sm font-semibold text-[var(--accent-primary)] shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur">
            <BellRing className="h-4 w-4" />
            {t.called}
          </div>
        ) : null}
      </div>
    </main>
  );
}
