import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { InquiryForm } from "@/components/InquiryForm";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Samarbeta med oss | Elins val",
  description:
    "Läs Elins vals standard för ärliga omdömen och starta en samarbetsdialog via e-post.",
  url: `${siteConfig.url}/samarbeta`,
});

export default function CollaboratePage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/kontakt"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till kontakt
        </Link>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D8788D]">
            Standard först
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-none md:text-7xl">
            Samarbeta med oss
          </h1>

          <div className="mt-7 rounded-[1.75rem] bg-[#FFF4F5] p-5 text-lg leading-8 text-[#5f4a54]">
            <p>Välkommen – och tack för att du litar på våra omdömen!</p>
            <p className="mt-4">
              Vill du synas hos oss? Då vill vi först vara tydliga med vår
              standard:
            </p>
            <ul className="mt-4 grid gap-3">
              <li className="flex gap-3">
                <ShieldCheck
                  className="mt-1 shrink-0 text-[#B983A6]"
                  size={20}
                  aria-hidden="true"
                />
                <span>
                  Varje produkt får ett ärligt omdöme enligt vår Elins
                  poäng-standard – samma standard för alla.
                </span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck
                  className="mt-1 shrink-0 text-[#B983A6]"
                  size={20}
                  aria-hidden="true"
                />
                <span>Det är ett omdöme, inte en annons.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck
                  className="mt-1 shrink-0 text-[#B983A6]"
                  size={20}
                  aria-hidden="true"
                />
                <span>
                  Vi säljer aldrig omdömen och tar inte betalt för positiva
                  recensioner – vår trovärdighet är hela poängen.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Delar du vår syn på ärlighet och vill diskutera ett samarbete?
              Hör av dig så tar vi det vidare via e-post.
            </p>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8788D] px-6 font-black text-white shadow-[0_20px_50px_rgba(216,120,141,0.28)] transition hover:bg-[#B983A6]"
          >
            Låt oss prata mer
          </a>
        </section>

        <section id="kontaktformular" className="scroll-mt-8 pt-8">
          <InquiryForm
            turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          />
        </section>
      </div>
    </main>
  );
}
