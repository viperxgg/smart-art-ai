import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { getLocalizedHref, type AppLocale } from "@/lib/site";

export function RestaurantFooter({ locale }: { locale: AppLocale }) {
  const guideLinks = [
    {
      slug: "best-digital-menu-sweden",
      label: "Bästa digitala menyn för restauranger i Sverige",
    },
    {
      slug: "digital-menu-vs-paper-menu",
      label: "Digital meny vs pappersmeny",
    },
    {
      slug: "restaurant-ordering-system-reduce-staff-pressure",
      label: "Beställningssystem och personalpress",
    },
  ] as const;

  return (
    <footer className="border-t border-[rgba(217,173,98,0.18)] bg-[var(--restaurant-dark)] px-5 py-14 text-[#fff8ef] md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.85fr_1.1fr_0.9fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fff8ef] text-sm font-black text-[var(--restaurant-dark)]">
              SA
            </span>
            <span>
              <span className="block text-base font-black">Smart Art AI</span>
              <span className="block text-sm text-[#d9ad62]">Nord Smart Menu</span>
            </span>
          </a>

          <p className="mt-5 max-w-md leading-7 text-white/64">
            Smart Art AI skapar moderna menyupplevelser för restauranger i Sverige — från
            QR-menyer till digital och tryckklar menydesign.
          </p>
        </div>

        <div>
          <p className="restaurant-eyebrow text-[#d9ad62]">Sidor</p>
          <div className="mt-5 grid gap-3">
            <Link href={getLocalizedHref("/nord-smart-menu", locale)} className="footer-link">
              Nord Smart Menu
            </Link>
            <a href="#menu-design" className="footer-link">Digital menydesign</a>
            <a href="#smart-menu" className="footer-link">Print-ready meny</a>
            <a href="#pricing" className="footer-link">Pris</a>
            <Link href={getLocalizedHref("/blog", locale)} className="footer-link">Blogg</Link>
          </div>
        </div>

        <div>
          <p className="restaurant-eyebrow text-[#d9ad62]">Guider</p>
          <div className="mt-5 grid gap-3">
            {guideLinks.map((link) => (
              <Link
                key={link.slug}
                href={getLocalizedHref("/blog/[slug]", locale, { slug: link.slug })}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div id="contact" className="scroll-mt-28">
          <p className="restaurant-eyebrow text-[#d9ad62]">Kontakt</p>
          <div className="mt-5 grid gap-3">
            <a href="mailto:hello@smartartai.se?subject=Gratis%20menygenomgang" className="footer-contact">
              <Mail className="h-4 w-4" />
              hello@smartartai.se
            </a>
            <div className="footer-contact text-white/62">
              <MapPin className="h-4 w-4" />
              Jämtland, Sverige
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/42">
        © 2026 Smart Art AI. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
