"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, Zap, Target, Terminal } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8,
    },
  },
};

const typingItem = {
  hidden: { opacity: 0, x: -5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
};

export default function HeroText() {
  const t = useTranslations("Hero");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center max-w-6xl px-4"
    >
      {/* Premium Badge */}
      <motion.div
        variants={item}
        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
      >
        <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        Elite AI Systems
      </motion.div>

      {/* Main Headline - Bold & Modern Sans-Serif */}
      <motion.h1
        variants={item}
        className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter leading-[0.8] text-white"
      >
        <span className="block">{t("headline_main")}</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient pb-6">
          {t("headline_highlight")}
        </span>
      </motion.h1>

      {/* System Interface Supporting Subtext */}
      <div className="relative flex flex-col items-center gap-4 mb-20 w-full max-w-4xl">
        {/* Subtle Prefix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-[10px] uppercase tracking-[0.5em] mb-2 flex items-center gap-2"
        >
          <Terminal className="w-3 h-3" />
          {"> system output:"}
        </motion.div>

        <motion.div
          variants={typingContainer}
          className="flex flex-col gap-3 font-mono text-sm md:text-lg tracking-wider text-white/40 leading-relaxed"
        >
          {/* Line 1 */}
          <motion.div variants={typingItem} className="flex flex-wrap justify-center gap-x-2">
            <span>{t("subtitle_line1").split('intelligenta')[0].split('intelligent')[0]}</span>
            <span className="text-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] px-1 rounded-sm bg-cyan-400/5 border border-cyan-400/10">
              {t("subtitle_line1").includes('webbplatser') ? 'intelligenta webbplatser' : 'intelligent websites'}
            </span>
            <span>{t("subtitle_line1").includes('webbplatser') ? 'och' : 'and'}</span>
            <span className="text-purple-400 font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] px-1 rounded-sm bg-purple-400/5 border border-purple-400/10">
              {t("subtitle_line1").includes('digitala system') || t("subtitle_line1").includes('digital systems') ? (t("subtitle_line1").includes('digitala system') ? 'digitala system' : 'digital systems') : ''}
            </span>
          </motion.div>

          {/* Line 2 */}
          <motion.div variants={typingItem} className="flex flex-wrap justify-center gap-x-2">
            <span>{t("subtitle_line2").split('manuellt')[0].split('manual')[0]}</span>
            <span className="text-white font-black bg-white/5 px-2 border border-white/10 rounded-md">
              {t("subtitle_line2").includes('manuellt arbete') ? 'manuellt arbete' : 'manual work'}
            </span>
            <span>{t("subtitle_line2").split('arbete')[1]?.split('work')[1]}</span>
          </motion.div>

          {/* Line 3 */}
          <motion.div variants={typingItem} className="flex flex-wrap justify-center gap-x-2 items-center">
            {t("subtitle_line3").split('trygghet')[0].split('confidence')[0]}
            <span className="text-white font-black tracking-[0.2em] uppercase text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-sm">
              {t("subtitle_line3").includes('trygghet') ? 'trygghet' : 'confidence'}
            </span>
            {t("subtitle_line3").split('trygghet')[1]?.split('confidence')[1]}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2.5 h-5 bg-cyan-400 ml-1 inline-block"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Glassmorphism Value Indicators */}
      <motion.div
        variants={item}
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20"
      >
        {[
          { text: t("bullet_1"), icon: <Zap className="w-4 h-4 text-cyan-400" />, color: "border-cyan-500/30" },
          { text: t("bullet_2"), icon: <Target className="w-4 h-4 text-purple-400" />, color: "border-purple-500/30" },
          { text: t("bullet_3"), icon: <CheckCircle2 className="w-4 h-4 text-white" />, color: "border-white/20" }
        ].map((indicator, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border ${indicator.color} backdrop-blur-xl transition-all duration-300 shadow-[20px_20px_50px_rgba(0,0,0,0.5)]`}
          >
            <div className="p-1.5 rounded-lg bg-white/5">
              {indicator.icon}
            </div>
            <span className="text-white/90 text-[10px] font-bold tracking-widest uppercase font-mono">
              {indicator.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
