import { DemoMenuClient } from "@/components/demo/DemoMenuClient";
import { demoRestaurant } from "@/lib/demo-data";
import { notFound } from "next/navigation";

export default async function DemoMenuPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; restaurant: string }>;
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
