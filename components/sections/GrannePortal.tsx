"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Users, Heart, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GrannePortal() {
  const t = useTranslations("Granne");
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Fade from dark space into warm atmosphere
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    ["#0A0A0A", "#1A0F0A", "#0A0A0A"]
  );

  useEffect(() => {
    if (!svgRef.current) return;
    
    // Simple GSAP sequence for the lines when scrolled into view
    const lines = svgRef.current.querySelectorAll(".connection-line");
    
    // We simulate a scroll trigger via IntersectionObserver or simple GSAP
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(lines, 
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
          );
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative z-10 w-full min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,123,0,0.05)_0%,rgba(10,10,10,0)_70%)]" />

      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-[#FF7B00]">
          {t("title")}
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-xl">
          {t("subtitle")}
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
        {/* Node Visualization */}
        <svg ref={svgRef} className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
          <path className="connection-line" d="M 400 200 Q 200 50 150 150" fill="none" stroke="#FFC099" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path className="connection-line" d="M 400 200 Q 600 350 650 250" fill="none" stroke="#FFC099" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path className="connection-line" d="M 400 200 Q 250 350 200 300" fill="none" stroke="#FFC099" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path className="connection-line" d="M 400 200 Q 600 50 700 150" fill="none" stroke="#FFC099" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        </svg>

        {/* Center Node (Mobile App Mockup Placeholder) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="absolute w-64 h-[28rem] rounded-[3rem] border-8 border-neutral-800 bg-neutral-900 shadow-2xl flex flex-col p-4 z-10"
          style={{ boxShadow: "0 0 80px rgba(255,123,0,0.2)" }}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-white">Granne</span>
            <Heart className="w-5 h-5 text-[#FF7B00]" />
          </div>
          <div className="flex-1 bg-white/5 rounded-2xl p-4 flex flex-col gap-3">
            <div className="w-full h-10 bg-white/10 rounded-full animate-pulse" />
            <div className="w-full h-24 bg-white/5 rounded-xl block" />
            <div className="w-full h-24 bg-white/5 rounded-xl block mt-auto" />
          </div>
        </motion.div>

        {/* Floating Neighbor Nodes */}
        <div className="absolute left-[10%] top-[30%] w-12 h-12 bg-[#FF7B00] rounded-full flex items-center justify-center glowing-node shadow-[0_0_30px_#FF7B00]">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="absolute right-[15%] bottom-[30%] w-12 h-12 bg-[#FFC099] rounded-full flex items-center justify-center shadow-[0_0_30px_#FFC099]">
          <Phone className="w-6 h-6 text-neutral-900" />
        </div>
      </div>
    </motion.section>
  );
}
