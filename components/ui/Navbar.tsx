"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("solutions"), href: "#solutions" },
    { name: t("agent_x"), href: "#agent-x" },
    { name: t("impact"), href: "#impact" },
  ];

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "sv" : "en";
    if (locale === "en") {
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.replace(newPath);
    } else {
      const newPath = `/en${pathname === "/" ? "" : pathname}`;
      router.replace(newPath);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase italic">Smart Art AI</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest font-mono"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-2" />
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all font-mono text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "en" ? "EN" : "SV"}
          </button>

          <button 
            onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {t("cta")}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "en" ? "EN" : "SV"}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/60 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/5 p-8 flex flex-col items-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-black text-white/60 hover:text-white transition-colors uppercase tracking-widest italic"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              {t("cta")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
