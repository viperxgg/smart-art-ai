"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Play, Layout } from "lucide-react";

export default function MenuHero() {
  const t = useTranslations("SmartMenu");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f9fa] -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-mono"
            >
               <Layout className="w-3 h-3" />
               SmartArt AI Solutions
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
              {t("hero_title")}
            </h1>
            
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-12">
              {t("hero_subtitle")}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 group">
                {t("cta_start")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                {t("cta_demo")}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for future video/mockup */}
            <div className="aspect-[4/5] md:aspect-square bg-gray-100 rounded-[2.5rem] border border-gray-200 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent opacity-50" />
               
               {/* Visual Mockup Elements */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl mb-6 flex items-center justify-center">
                    <Layout className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                    Interactive Showcase Placeholder
                  </p>
                  <p className="text-gray-300 text-[10px] mt-2 max-w-[200px]">
                    (Replace with Video Loop or Iframe Demo)
                  </p>
               </div>
               
               {/* Decorative floating dots */}
               <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-green-500/40 blur-sm" />
               <div className="absolute bottom-20 left-12 w-12 h-12 rounded-full bg-blue-500/10 blur-xl" />
            </div>

            {/* Floating Tag */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Live Status</div>
                    <div className="text-sm font-bold text-gray-900 leading-none">Ready to Deploy</div>
                  </div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
