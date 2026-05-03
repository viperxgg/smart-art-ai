import { DemoMenuClient } from "@/components/demo/DemoMenuClient";
import { demoRestaurant } from "@/lib/demo-data";
import { buildMetadata } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; restaurant: string }>;
}) {
  const { locale, restaurant } = await params;

  return buildMetadata({
    locale,
    pathname: "/demo/menu/[restaurant]",
    params: { restaurant },
    title:
      locale === "sv"
        ? `Live demo: digital meny för ${demoRestaurant.name}`
        : `Live Demo: Digital Menu for ${demoRestaurant.name}`,
    description:
      locale === "sv"
        ? "Live demo av restaurangens digitala meny med kategorier, ingredienser, kalorier och Call waiter."
        : "Live demo of the restaurant digital menu with categories, ingredients, calories, and call waiter.",
    noIndex: true,
  });
}

export default async function DemoMenuPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: AppLocale; restaurant: string }>;
  searchParams: Promise<{ table?: string }>;
}) {
  const { locale, restaurant } = await params;
  const { table } = await searchParams;

  if (restaurant !== demoRestaurant.slug) {
    notFound();
  }

  return (
    <DemoMenuClient
      locale={locale}
      restaurantName={demoRestaurant.name}
      table={table ?? "12"}
    />
  );
}
