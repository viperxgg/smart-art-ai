import type { Metadata } from "next";
import { MerchantOfferCard } from "@/components/MerchantOfferCard";
import { koboKjellOffer } from "@/lib/merchant-offers";
import { BookOpen, FileCheck2, Tablet } from "lucide-react";

export const metadata: Metadata = { title: "Förhandsvisning: butikslänk", robots: { index: false, follow: false } };

export default function PartnerOffersPreview() {
  return (
    <main id="content" className="min-h-screen bg-bg px-5 py-10 text-ink">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold">Intern förhandsvisning · ej publicerad</p>
        <p className="mt-4 text-sm">Inlägget innehåller reklam genom annonslänkar för Kjell &amp; Company.</p>
        <h1 className="mt-5 font-display text-3xl font-bold">Kontrollera dina böcker före köp av Kobo Clara BW</h1>
        <p className="mt-4 leading-relaxed">Kobo Clara BW har en svartvit sextumsskärm och 16 GB lagring. Kontrollera först att böckerna du vill läsa kan överföras från din bokbutik eller ditt bibliotek. Ett svenskt lånekort eller en EPUB-fil räcker inte ensamt som garanti.</p>
        <p className="mt-4 leading-relaxed">Behåll din nuvarande läsplatta om den redan fungerar med dina böcker. Laddare ingår inte i Kjells listade produkt; kontrollera vad du redan har innan du köper tillbehör.</p>
        <section aria-labelledby="book-check" className="mt-7">
          <h2 id="book-check" className="font-display text-2xl font-bold">Från din bok till din läsplatta</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { icon: BookOpen, title: "Välj en bok", text: "Utgå från en titel du faktiskt vill läsa och var du hämtar den." },
              { icon: FileCheck2, title: "Kontrollera stödet", text: "Läs boktjänstens anvisning för filformat, kopieringsskydd och Kobo." },
              { icon: Tablet, title: "Se över överföringen", text: "Kontrollera vilka steg och verktyg tjänsten kräver före köp." },
            ].map(({ icon: Icon, title, text }, index) => <li key={title} className="rounded-2xl border border-line bg-surface p-5">
              <Icon size={32} strokeWidth={1.5} className="text-wine" aria-hidden="true" />
              <h3 className="mt-4 font-bold">{index + 1}. {title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </li>)}
          </ol>
        </section>
        <MerchantOfferCard offer={koboKjellOffer} />
        <a href="/halsa/kobo-clara-bw" className="mt-6 inline-flex min-h-11 items-center text-wine underline">Läs hela produktguiden</a>
      </div>
    </main>
  );
}
