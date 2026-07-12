import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Cookies | Elins val",
  description:
    "Hur Elins val använder nödvändiga funktioner, externa länkar och spamkontroll.",
  url: `${siteConfig.url}/cookies`,
});

export default function CookiesPage() {
  return (
    <main id="content" className="min-h-screen bg-bg px-4 py-8 text-ink">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 rounded-[2rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-rose">
            Cookies
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-none md:text-7xl">
            Enkel cookieinformation
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink">
            Elins val använder inte annonseringspixlar eller analyscookies i
            koden i dag. Vi försöker hålla webbplatsen lätt, tydlig och fri från
            onödig spårning. Eftersom webbplatsen bara använder nödvändiga
            funktioner behövs ingen samtyckesbanner.
          </p>

          <div className="mt-8 grid gap-5">
            <article className="rounded-3xl bg-rose/8 p-5">
              <h2 className="flex items-center gap-3 font-display text-2xl">
                <ShieldCheck className="text-wine" size={24} aria-hidden="true" />
                <span className="editorial-color-kiss">Nödvändiga funktioner</span>
              </h2>
              <p className="mt-3 leading-7 text-ink-soft">
                Om Cloudflare Turnstile är aktiverat laddas det på
                recensionsformulär som en strikt nödvändig anti-spam-tjänst.
                Det är den enda tredjepartstjänst som kan sätta en cookie på
                sidan. Kontrollen används för säkerhet och formulärskydd, inte
                för annonsering.
              </p>
            </article>

            <article className="rounded-3xl bg-rose/8 p-5">
              <h2 className="editorial-color-kiss font-display text-2xl">
                Externa länkar
              </h2>
              <p className="mt-3 leading-7 text-ink-soft">
                När du klickar vidare till Amazon, Instagram eller TikTok gäller
                deras egna villkor och cookiehantering. Vi märker
                affiliatelänkar tydligt när de kan ge ersättning.
              </p>
            </article>

            <article className="rounded-3xl bg-rose/8 p-5">
              <h2 className="editorial-color-kiss font-display text-2xl">
                Frågor eller radering
              </h2>
              <p className="mt-3 leading-7 text-ink-soft">
                Kontakta oss på{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-black text-wine underline"
                >
                  {siteConfig.email}
                </a>{" "}
                om du har frågor om data, recensioner eller radering.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
