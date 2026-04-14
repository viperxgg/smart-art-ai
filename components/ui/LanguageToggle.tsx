"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "sv" : "en";
    
    // We are using as-needed so sv is the root.
    if (locale === "en") {
      // English to Swedish (strip /en)
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.replace(newPath);
    } else {
      // Swedish to English (prepend /en)
      const newPath = `/en${pathname === "/" ? "" : pathname}`;
      router.replace(newPath);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button 
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white group"
      >
        <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-semibold tracking-wider font-mono">
          {locale === "en" ? "EN" : "SV"}
        </span>
      </button>
    </div>
  );
}
