import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpenText, Heart, MessageCircle, Scale } from "lucide-react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elins länkar",
  description: "Fråga Elin, se våra jämförelser och hitta ärliga köpguider.",
  alternates: {
    canonical: `${siteConfig.url}/lankar`,
  },
  // Link-in-bio page: navigational only, no search value of its own.
  // `index: false` also keeps it out of the generated sitemap.
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: "/fraga-elin",
    label: "Fråga Elin",
    description: "Få hjälp att välja utifrån det som är viktigt för dig.",
    icon: MessageCircle,
    featured: true,
  },
  {
    href: "/jamforelser",
    label: "Jämförelser",
    description: "X eller Y? Se skillnaderna innan du bestämmer dig.",
    icon: Scale,
    featured: false,
  },
  {
    href: "/elins-val",
    label: "Elins val",
    description: "Produkterna som sticker ut efter vår genomgång.",
    icon: Heart,
    featured: false,
  },
  {
    href: "/guider",
    label: "Guider",
    description: "Ärliga köpguider inom skönhet, hälsa, träning och resa.",
    icon: BookOpenText,
    featured: false,
  },
] as const;

export default function LinksPage() {
  return (
    <main id="content" className="min-h-screen bg-bg px-4 py-10 text-ink sm:py-14">
      <div className="mx-auto w-full max-w-md">
        <header className="text-center">
          <span className="relative mx-auto block size-24 overflow-hidden rounded-full border-4 border-surface bg-rose/12 shadow-[0_20px_55px_rgba(109,60,77,0.2)]">
            <Image
              src="/elin/elin-avatar.webp"
              alt="Illustration av Elin"
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </span>
          <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-rose">
            Elins val
          </p>
          <h1 className="mt-2 font-display text-4xl font-black tracking-[-0.035em] text-wine">
            Vad vill du hitta?
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-ink-soft">
            Ärliga jämförelser och tydliga val — utan köphype.
          </p>
        </header>

        <nav className="mt-8 grid gap-3" aria-label="Elins viktigaste länkar">
          {destinations.map((destination) => {
            const Icon = destination.icon;
            return (
              <Link
                key={destination.href}
                href={destination.href}
                className={`group flex min-h-20 items-center gap-4 rounded-[1.6rem] border p-4 shadow-[0_16px_45px_rgba(109,60,77,0.09)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${
                  destination.featured
                    ? "border-wine/15 bg-wine text-bg"
                    : "border-line bg-surface/82 text-ink"
                }`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-2xl ${
                    destination.featured ? "bg-bg/14" : "bg-rose/14 text-wine"
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-base font-black">{destination.label}</span>
                  <span
                    className={`mt-1 block text-sm leading-5 ${
                      destination.featured ? "text-bg/78" : "text-ink-soft"
                    }`}
                  >
                    {destination.description}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <footer className="mt-8 text-center text-xs leading-5 text-ink-soft">
          <p>Oberoende vägledning på svenska.</p>
          <Link href="/" className="mt-1 inline-block font-bold text-wine underline-offset-4 hover:underline">
            smartartai.se
          </Link>
        </footer>
      </div>
    </main>
  );
}
