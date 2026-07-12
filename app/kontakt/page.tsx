import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Kontakta oss | Elins val",
  description:
    "Kontakta Elins val med frågor, feedback eller för att diskutera ett ärligt samarbete.",
  url: `${siteConfig.url}/kontakt`,
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg px-4 py-8 text-ink">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 rounded-[2rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-rose">
            Kontakt
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-none md:text-7xl">
            Kontakta oss
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink">
            Har du en fråga eller feedback? Eller är du ett varumärke som vill
            samarbeta? Hör av dig.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-line bg-rose/8 p-5">
              <MessageCircle
                className="text-wine"
                size={28}
                aria-hidden="true"
              />
              <h2 className="editorial-color-kiss mt-4 font-display text-3xl">
                För varumärken & säljare
              </h2>
              <p className="mt-3 leading-7 text-ink-soft">
                Vill du synas hos oss? Läs hur vi tänker och hör av dig →
              </p>
              <Link
                href="/samarbeta"
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose px-5 font-black text-white transition hover:bg-wine"
              >
                Läs om samarbete
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-[1.75rem] border border-line bg-surface/80 p-5">
              <Mail className="text-wine" size={28} aria-hidden="true" />
              <h2 className="editorial-color-kiss mt-4 font-display text-3xl">
                Direkt e-post
              </h2>
              <p className="mt-3 leading-7 text-ink-soft">
                För korta frågor går det också bra att maila oss direkt.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-rose/45 px-5 font-black text-wine transition hover:bg-rose/8"
              >
                {siteConfig.email}
              </a>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
