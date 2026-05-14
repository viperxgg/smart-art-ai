import { RestaurantHomePage } from "@/components/restaurant/RestaurantHomePage";
import { buildMetadata } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/nord-smart-menu",
    title:
      locale === "sv"
        ? "Digital meny för restauranger i Sverige"
        : "Digital Menu for Restaurants | Nord Smart Menu",
    description:
      locale === "sv"
        ? "Se hur restauranger i Sverige kan använda digital meny och QR-meny för att uppdatera rätter snabbare, minska väntetid och förbättra gästupplevelsen."
        : "Modern QR menu for restaurants with guest view, admin panel, kitchen view, ingredients, calories, and a clearer service workflow.",
    keywords:
      locale === "sv"
        ? ["Nord Smart Menu", "QR meny restaurang", "digital meny restaurang", "menydesign restaurang"]
        : ["Nord Smart Menu", "QR menu restaurant", "digital menu restaurant", "restaurant menu design"],
    noIndex: locale === "en",
  });
}

export default async function NordSmartMenuPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return <RestaurantHomePage locale={locale} />;
}
