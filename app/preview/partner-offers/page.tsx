import type { Metadata } from "next";
import { MerchantOfferCard } from "@/components/MerchantOfferCard";
import { koboKjellOffer } from "@/lib/merchant-offers";

export const metadata: Metadata = { title: "Förhandsvisning: butikslänk", robots: { index: false, follow: false } };

export default function PartnerOffersPreview() {
  return (
    <main id="content" className="min-h-screen bg-bg px-5 py-10 text-ink">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold">Intern förhandsvisning · inväntar materialgodkännande</p>
        <p className="mt-4 text-sm">Inlägget innehåller reklam genom annonslänkar för Kjell &amp; Company.</p>
        <h1 className="mt-5 font-display text-3xl font-bold">Kontrollera dina böcker före köp av Kobo Clara BW</h1>
        <p className="mt-4 leading-relaxed">Kobo Clara BW har en svartvit sextumsskärm och 16 GB lagring. Kontrollera först att böckerna du vill läsa kan överföras från din bokbutik eller ditt bibliotek. Ett svenskt lånekort eller en EPUB-fil räcker inte ensamt som garanti.</p>
        <p className="mt-4 leading-relaxed">Behåll din nuvarande läsplatta om den redan fungerar med dina böcker. Laddare ingår inte i Kjells listade produkt; kontrollera vad du redan har innan du köper tillbehör.</p>
        <MerchantOfferCard offer={koboKjellOffer} />
        <a href="/halsa/kobo-clara-bw" className="mt-6 inline-flex min-h-11 items-center text-wine underline">Läs hela produktguiden</a>
      </div>
    </main>
  );
}
