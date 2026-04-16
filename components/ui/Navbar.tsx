"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe, Menu, X, Terminal } from "lucide-react";
import Link from "next/link";

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
    { name: t("home"), href: `/${locale}#home`, isAnchor: true },
    { name: t("solutions"), href: `/${locale}#solutions`, isAnchor: true },
    { name: t("agent_x"), href: `/${locale}#agent-x`, isAnchor: true },
    { name: t("impact"), href: `/${locale}#impact`, isAnchor: true },
    { name: t("blog"), href: `/${locale}/blog`, isAnchor: false },
  ];

  const toggleLanguage = () => {
    const isEnglish = pathname.startsWith('/en');
    let newPath = '';
    
    if (isEnglish) {
      newPath = pathname.replace(/^\/en/, '') || '/';
    } else {
      newPath = `/en${pathname === '/' ? '' : pathname}`;
    }
    
    router.push(newPath || '/');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, href: string, isAnchor: boolean }) => {
    // Determine if we are on the base home page (e.g., /sv or /en)
    const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";

    if (link.isAnchor && isHomePage) {
      e.preventDefault();
      const targetId = link.href.split('#')[1];
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
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
    } else {
      // For blog pages or other subpages, let the Link component navigate naturally
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href={`/${locale}`}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase italic">Smart Art AI</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e as any, link)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest font-mono"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-2" />
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all font-mono text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "en" ? "EN" : "SV"}
          </button>

          <Link 
             href={`/${locale}#final-cta`}
             className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {t("cta")}
          </Link>
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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                <Link 
                  href={link.href}
                  onClick={(e) => handleNavClick(e as any, link)}
                  className="text-2xl font-black text-white/60 hover:text-white transition-colors uppercase tracking-widest italic"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <Link
                href={`/${locale}#final-cta`}
                onClick={() => setIsOpen(false)}
                className="block w-full py-5 rounded-2xl bg-white text-black text-center font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {t("cta")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
