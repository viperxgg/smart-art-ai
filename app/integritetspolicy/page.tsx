import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Integritetspolicy | Elins val",
  description:
    "Hur Smart Art AI hanterar personuppgifter, recensioner och affiliatelänkar på Elins val.",
  url: `${siteConfig.url}/integritetspolicy`,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D8788D]">
            Integritet
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-[#4B2838] md:text-7xl">
            Integritetspolicy
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5f4a54]">
            Smart Art AI driver Elins val och behandlar bara de uppgifter som
            behövs för att webbplatsen ska fungera, hantera kontakt och granska
            recensioner.
          </p>

          <div className="mt-8 grid gap-5">
            <article className="rounded-3xl bg-[#FFF4F5] p-5">
              <h2 className="flex items-center gap-3 font-display text-2xl text-[#4B2838]">
                <ShieldCheck size={24} aria-hidden="true" />
                Recensioner från besökare
              </h2>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                När du skickar en recension sparar vi ditt offentliga alias,
                betyg, rubrik och recensionstext. E-post är frivillig, lagras
                privat och visas aldrig offentligt. Alla recensioner sparas som
                pending och publiceras först efter manuell granskning.
              </p>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                Du kan begära radering av dina uppgifter genom att kontakta oss
                på{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-black text-[#9E5E73] underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </article>

            <article className="rounded-3xl bg-[#FFF4F5] p-5">
              <h2 className="font-display text-2xl text-[#4B2838]">
                Formulärskydd och cookies
              </h2>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                Vi använder inte annonseringspixlar eller analyscookies i koden
                i dag. Om Cloudflare Turnstile är aktiverat laddas det på
                recensionsformulär som en strikt nödvändig anti-spam-tjänst för
                att minska spam och kontrollera att formuläret skickas av en
                människa. Det är den enda tredjepartstjänst som kan sätta en
                cookie på sidan, och eftersom webbplatsen bara använder
                nödvändiga funktioner behövs ingen samtyckesbanner.
              </p>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                Vid recensioner kan IP-adressen behandlas tillfälligt för att
                skapa en hash som används för rate limiting. Vi sparar inte
                IP-adressen i klartext i recensionsraden.
              </p>
            </article>

            <article className="rounded-3xl bg-[#FFF4F5] p-5">
              <h2 className="font-display text-2xl text-[#4B2838]">
                Affiliatelänkar
              </h2>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                Vissa länkar går till Amazon och kan ge Smart Art AI provision
                om du handlar via länken. Detta påverkar inte priset för dig.
              </p>
            </article>

            <article className="rounded-3xl bg-[#FFF4F5] p-5">
              <h2 className="font-display text-2xl text-[#4B2838]">
                Dina rättigheter
              </h2>
              <p className="mt-3 leading-7 text-[#6f5a64]">
                Du kan kontakta oss för att begära information, rättelse eller
                radering av uppgifter kopplade till en recension. Vi säljer inte
                dina uppgifter vidare.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
