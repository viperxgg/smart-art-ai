"use client";

import { motion } from "framer-motion";
import HeroText from "@/components/ui/HeroText";
import HeroCanvas from "@/components/ui/HeroCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

// Sections in Story Flow Order
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsBento from "@/components/sections/SolutionsBento";

import ImpactSection from "@/components/sections/ImpactSection"; // Trust
import ProblemSolutionFlow from "@/components/sections/ProblemSolutionFlow";


import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <main id="home" className="relative bg-[#050505] w-full overflow-hidden">
      
      {/* 1. HERO - The High-Impact Entrance */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <HeroCanvas />
        <div className="absolute inset-0 bg-black/50 z-0 mix-blend-multiply italic"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full pt-20">
          <HeroText />
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="relative z-20 flex flex-wrap justify-center gap-6"
          >
            <div 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <MagneticButton>
                {t("cta")}
              </MagneticButton>
            </div>

            <Link 
              href={`/${locale}/blog`}
              className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-black uppercase tracking-widest text-[11px] hover:bg-white/10 hover:text-white transition-all shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              {t("blog_btn")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM - The Pain Points */}
      <ProblemSection />

      {/* 3. SOLUTION - The Outcome-Driven Services */}
      <SolutionsBento />

      {/* 4. THE TRANSFORMATION & EXECUTION FLOW */}
      <ProblemSolutionFlow />



      {/* 6. TRUST - Credibility & Social Proof */}
      <div id="impact">
        <ImpactSection />
      </div>



    </main>
  );
}
