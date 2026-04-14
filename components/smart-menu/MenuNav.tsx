"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useLocale } from "next-intl";

export default function MenuNav() {
  const locale = useLocale();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/70 backdrop-blur-md border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
             <div className="w-4 h-4 rounded-sm bg-white rotate-45" />
           </div>
           <span className="text-xl font-black text-gray-900 tracking-tighter uppercase italic">Smart Menu</span>
        </div>

        <div className="flex items-center gap-8">
           <a 
            href={locale === 'en' ? '/en' : '/'} 
            className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
           >
             SmartArt.se
           </a>
           <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block px-6 py-2 rounded-full bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all"
           >
             Book Demo
           </button>
        </div>
      </div>
    </nav>
  );
}
