"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, Send, Loader2, Bot, CheckCircle2, ArrowRight, Terminal } from "lucide-react";

export default function AIDemoSection() {
  const t = useTranslations("AIDemo");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [response, setResponse] = useState<string[] | null>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsTyping(true);
    setResponse(null);

    // Simulate AI "thinking"
    setTimeout(() => {
      setIsTyping(false);
      const mockResult = [
        t("result1"),
        t("result2"),
        t("result3")
      ];
      setResponse(mockResult);
    }, 1500);
  };

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8 font-mono"
          >
            <Terminal className="w-3 h-3" />
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/60 text-lg md:text-xl font-light font-mono tracking-wide"
          >
            {t("subtitle")}
          </motion.p>
        </div>
        <div className="flex justify-center mb-12">
           <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
             Interactive Simulation
           </span>
        </div>

        <div className="glass-panel rounded-[3rem] p-6 md:p-12 border border-white/10 shadow-2xl relative">
          <form onSubmit={handleSimulate} className="relative mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full bg-black/40 border-2 border-white/5 rounded-[1.5rem] px-8 py-6 pr-20 text-white text-xl placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all font-light"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>

          <div className="min-h-[160px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-6 py-8"
                >
                  <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                  <p className="text-cyan-400 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.5em] animate-pulse">{t("analyzing")}</p>
                </motion.div>
              ) : response ? (
                <motion.div
                  key="response"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-[2rem] p-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <Bot className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-white text-xl tracking-tight">{t("response_title")}</h4>
                  </div>
                  
                  <ul className="space-y-6 mb-10">
                    {response.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start gap-4 text-white/80"
                      >
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-lg font-light">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                  >
                    {t("response_cta")}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 flex flex-col items-center text-center opacity-40"
                >
                  <Bot className="w-12 h-12 mb-6" />
                  <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.4em]">{t("ready")}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
