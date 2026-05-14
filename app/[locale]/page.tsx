import RestaurantRepositionHome from "@/components/restaurant-home/RestaurantRepositionHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, getServiceSchema } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/",
    title:
      locale === "sv"
        ? "Digital QR-meny för restauranger | Nord Smart Menu"
        : "Nord Smart Menu | Digital menus and menu design for restaurants in Sweden",
    description:
      locale === "sv"
        ? "Se hur restauranger i Sverige kan använda digital meny och QR-meny för att uppdatera rätter snabbare, minska väntetid och förbättra gästupplevelsen."
        : "QR menus, digital menu experiences, and print-ready menu design for restaurants, cafés, bars, and hotels in Sweden.",
    keywords: [
      "Nord Smart Menu",
      "digital meny restaurang",
      "QR meny Sverige",
      "menydesign restaurang",
      "tryckklar meny",
    ],
    noIndex: locale === "en",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd
        data={getServiceSchema({
          locale,
          name: "Nord Smart Menu",
          description:
            locale === "sv"
              ? "Premium QR-menyer, digitala beställningsflöden och tryckklar menydesign för restauranger."
              : "Premium QR menus, digital ordering flows, and print-ready menu design for restaurants.",
          serviceType: locale === "sv" ? "Digital meny och menydesign" : "Digital menu and menu design",
          pathname: "/",
        })}
      />
      <RestaurantRepositionHome locale={locale} />
    </>
  );
}
