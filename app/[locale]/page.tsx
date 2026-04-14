"use client";

import { motion } from "framer-motion";
import HeroText from "@/components/ui/HeroText";
import HeroCanvas from "@/components/ui/HeroCanvas";
import MagneticButton from "@/components/ui/MagneticButton";

// Sections in Story Flow Order
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsBento from "@/components/sections/SolutionsBento";
import SmartAgentX from "@/components/sections/SmartAgentX"; // Neural Core
import ImpactSection from "@/components/sections/ImpactSection"; // Trust
import ProblemSolutionFlow from "@/components/sections/ProblemSolutionFlow";
import FinalCTASection from "@/components/sections/FinalCTASection";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Hero");

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
             className="relative z-20"
          >
            <div 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <MagneticButton>
                {t("cta")}
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM - The Pain Points */}
      <ProblemSection />

      {/* 3. SOLUTION - The Outcome-Driven Services */}
      <SolutionsBento />

      {/* 4. THE TRANSFORMATION & EXECUTION FLOW */}
      <ProblemSolutionFlow />

      {/* INTERACTIVE NEURAL AUDIT - Agent X Qualification */}
      <section id="agent-x" className="bg-[#050505] py-20 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-mono text-cyan-400 mb-10 uppercase tracking-[0.4em]">Neural Audit System</h2>
            <SmartAgentX />
         </div>
      </section>

      {/* 6. TRUST - Credibility & Social Proof */}
      <div id="impact">
        <ImpactSection />
      </div>

      {/* 7. FINAL ACTION - Direct Conversion */}
      <div id="final-cta">
        <FinalCTASection />
      </div>

    </main>
  );
}
