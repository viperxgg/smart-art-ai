"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Brain, Terminal, Cpu, Zap, Loader2, Activity, Share2, ShieldCheck, ArrowRight, Clock, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function SmartAgentX() {
  const t = useTranslations("AgentX");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [showChallenge, setShowChallenge] = useState(false);
  const [challengeStep, setChallengeStep] = useState(0);
  const [challengeData, setChallengeData] = useState({
    companyInfo: "",
    inferredProcess: "data-synkronisering och administrativa arbetsflöden",
    techStack: "",
    hoursLost: "",
    optimizationPath: "",
    name: "",
    email: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Live Simulation State ---
  const [logs, setLogs] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    latency: 82,
    efficiency: 99.8,
    activeFlows: 12,
    completed: 248
  });

  const swedishLogs = [
    "> Bokning mottagen",
    "> Arbetsflöde analyseras",
    "> Automatisering initierad",
    "> Databas sync: OK",
    "> Bekräftelse skickad",
    "> Systemstatus: aktiv",
    "> Neural länk etablerad",
    "> API Handshake: 42ms",
    "> Robot-process startad"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const randomLog = swedishLogs[Math.floor(Math.random() * swedishLogs.length)];
      setLogs(prev => [randomLog, ...prev.slice(0, 7)]);
      
      setMetrics(prev => ({
        latency: 75 + Math.floor(Math.random() * 15),
        efficiency: 99.7 + Math.random() * 0.2,
        activeFlows: Math.max(8, prev.activeFlows + (Math.random() > 0.5 ? 1 : -1)),
        completed: prev.completed + 1
      }));
    }, 1500);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative z-10 w-full py-40 flex flex-col items-center justify-center bg-[#050505] px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF10_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF10_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"
          style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 font-mono"
          >
            <Cpu className="w-3 h-3" />
            {t("neural_interface")}
          </motion.div>
          <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter text-white mb-10 leading-[0.8]">
             The power behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient pb-4 block mt-4">SmartArt AI</span>
          </h2>
          <p className="text-white/40 max-w-3xl mx-auto text-xl font-light font-mono tracking-wide mt-8">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative w-full aspect-auto min-h-[800px] md:aspect-[21/9] md:min-h-0 max-w-7xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 rounded-[3.5rem] opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-1000"></div>
          
          <div className="absolute inset-0 bg-[#080808] backdrop-blur-[40px] rounded-[3.5rem] border border-white/10 flex flex-col md:overflow-hidden shadow-2xl">
            {/* Window Top Bar */}
            <div className="h-14 bg-white/[0.03] border-b border-white/5 flex items-center px-6 md:px-10 gap-2 shrink-0">
              <div className="flex gap-2 mr-4 md:mr-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>
              <div className="text-[8px] md:text-[10px] text-white/20 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase truncate">SmartArt_Core_Network_v4.2.0</div>
              <div className="ml-auto flex items-center gap-2 md:gap-4 text-white/20 font-mono text-[7px] md:text-[9px] uppercase tracking-widest shrink-0">
                <span className="hidden xs:flex items-center gap-2">UPTIME: 99.9%</span>
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE</span>
              </div>
            </div>

            {/* SCREEN CONTENT AREA (3 LIVE MODULES) */}
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 p-8 md:p-12 relative overflow-y-auto md:overflow-hidden">
              
              {/* MODULE 1: LIVE WORKFLOW TERMINAL (LEFT) */}
              <div className="flex flex-col md:border-r border-white/5 md:pr-8">
                <div className="flex items-center gap-3 text-cyan-400 mb-8">
                  <Terminal className="w-4 h-4 opacity-70" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">System_Output</span>
                </div>

                <div className="flex-1 font-mono text-[10px] space-y-2 overflow-hidden relative">
                  <AnimatePresence mode="popLayout">
                    {logs.map((log, idx) => (
                      <motion.div
                        key={log + idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1 - idx * 0.12, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className={`whitespace-nowrap flex items-center gap-2 ${idx === 0 ? 'text-cyan-400 font-bold' : 'text-white/40'}`}
                      >
                         <span className="opacity-20">{">"}</span>
                         {log}
                         {idx === 0 && (
                            <motion.span 
                              animate={{ opacity: [1, 0] }} 
                              transition={{ duration: 0.5, repeat: Infinity }}
                              className="w-1.5 h-3 bg-cyan-400 inline-block"
                            />
                         )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* MODULE 2: AI TRANSFORMATION (CENTER) */}
              <div className="flex flex-col items-center justify-center px-10 relative">
                {/* Agent X Core Visual */}
                <div className="relative mb-16 scale-110">
                   <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"
                   />
                   <motion.div 
                    className="relative z-10 w-24 h-24 rounded-[1.5rem] bg-black border border-white/10 flex flex-col items-center justify-center gap-2 shadow-2xl"
                   >
                     <Brain className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
                     <div className="text-[7px] font-mono font-bold text-white/40 tracking-[0.3em]">AGENT_X</div>
                   </motion.div>
                </div>

                {/* Transformation logic Interface */}
                <div className="w-full max-w-[240px] space-y-6">
                   <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-[0.4em] font-mono opacity-20">
                      <span>Före</span>
                      <div className="flex-1 h-[1px] bg-white/10 mx-4" />
                      <span>Efter</span>
                   </div>

                   <div className="space-y-4">
                      {[
                        { b: "Manuellt arbete", a: "Auto-flöden", icon: <Workflow className="w-3 h-3" /> },
                        { b: "Tidsförlust", a: "Snabba svar", icon: <Clock className="w-3 h-3" /> },
                        { b: "Kaos", a: "Struktur", icon: <ShieldCheck className="w-3 h-3" /> }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/row">
                           <div className="flex-1 text-[9px] text-white/20 text-right font-light truncate">{item.b}</div>
                           <div className="w-2.5 h-2.5 rounded-full border border-white/10 flex items-center justify-center p-0.5">
                              <motion.div 
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  backgroundColor: ["#ef4444", "#22d3ee", "#ef4444"] 
                                }} 
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                className="w-full h-full rounded-full" 
                              />
                           </div>
                           <div className="flex-1 text-[9px] text-cyan-400 font-bold truncate">{item.a}</div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* MODULE 3: PERFORMANCE ANALYTICS (RIGHT) */}
              <div className="flex flex-col md:border-l border-white/5 md:pl-8">
                <div className="flex items-center gap-3 text-purple-400 mb-8">
                  <Activity className="w-4 h-4 opacity-70" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">System_Health</span>
                </div>

                <div className="grid grid-cols-2 gap-y-12">
                   {[
                     { label: "Svarstid", val: `${metrics.latency}ms`, color: "text-cyan-400", sub: "OPTIMAL" },
                     { label: "Effektivitet", val: `${metrics.efficiency.toFixed(1)}%`, color: "text-green-400", sub: "MAXIMUM" },
                     { label: "Aktiva flöden", val: `${metrics.activeFlows}`, color: "text-white", sub: "RUNNING" },
                     { label: "Åtgärder", val: `${metrics.completed}`, color: "text-purple-400", sub: "PROCESSED" }
                   ].map((m, i) => (
                     <div key={i} className="flex flex-col gap-1">
                        <span className="text-[8px] uppercase tracking-widest text-white/20 font-mono">{m.label}</span>
                        <div className={`text-xl font-black ${m.color}`}>
                           {m.val}
                        </div>
                        <span className="text-[7px] text-white/10 font-mono tracking-widest">{m.sub}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto flex items-center justify-between pb-2">
                   <div className="flex flex-col">
                      <span className="text-[7px] uppercase tracking-widest text-white/10 font-mono mb-1">Status</span>
                      <span className="text-[9px] text-green-400 font-bold font-mono flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-green-500" />
                         STABIL_v4.2
                      </span>
                   </div>
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <motion.div 
                          key={i} 
                          animate={{ height: ["20%", "100%", "40%"] }} 
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          className="w-1 bg-cyan-400/20 rounded-t-sm" 
                        />
                      ))}
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- SYSTEM LOGO ARRAY --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 text-[10px] font-mono tracking-widest text-white/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            NETWORK_LAYER: SECURE
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            ENCRYPTION: AES-256
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            REAL_TIME_ORCHESTRATION: ON
          </div>
        </motion.div>

      </div>

      {/* INTELLIGENCE CHALLENGE MODAL */}
      <AnimatePresence>
        {showChallenge && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[20000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-xl glass-panel rounded-[3rem] border border-white/10 p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400" />
              
              <button 
                onClick={() => setShowChallenge(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/50 hover:text-white transition-colors"
              >
                <Terminal className="w-4 h-4" />
              </button>

              {challengeStep === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-cyan-400">
                    <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center font-mono font-black text-sm">01</span>
                    <span className="font-mono text-xs tracking-[0.4em] uppercase">{t("step1_label")}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t("step1_title")}</h3>
                  <p className="text-white/40 font-mono text-sm leading-relaxed">
                    {t("step1_desc")}
                  </p>
                  <div className="space-y-4">
                    <input 
                      autoFocus type="text" placeholder={t("step1_placeholder")}
                      value={challengeData.companyInfo} onChange={e => setChallengeData({...challengeData, companyInfo: e.target.value})}
                      onKeyDown={(e) => { if (e.key === 'Enter' && challengeData.companyInfo) handleInference(); }}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500 transition-all font-mono text-sm"
                    />
                    <button 
                      onClick={handleInference} disabled={!challengeData.companyInfo || isAnalyzing}
                      className="w-full py-5 rounded-2xl bg-cyan-400 text-black font-black hover:bg-cyan-300 transition-all font-mono text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-3"
                    >
                      {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : t("init_btn")}
                    </button>
                  </div>
                </motion.div>
              )}

              {challengeStep === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-cyan-400">
                    <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center font-mono font-black text-sm">02</span>
                    <span className="font-mono text-xs tracking-[0.4em] uppercase">Inference</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t("step2_title")}</h3>
                  <p className="text-white/40 font-mono text-sm leading-relaxed">
                    {t("step2_desc_prefix")} <span className="text-cyan-400 font-bold underline underline-offset-4">{challengeData.inferredProcess}</span>.
                  </p>
                  <div className="space-y-3 pt-4">
                    {[t("step2_opt1"), t("step2_opt2"), t("step2_opt3")].map((opt, i) => (
                      <button 
                        key={i} onClick={() => setChallengeStep(3)}
                        className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-left text-white/60 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all font-mono text-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {challengeStep === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-cyan-400">
                    <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center font-mono font-black text-sm">03</span>
                    <span className="font-mono text-xs tracking-[0.4em] uppercase">Stack</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t("step3_title")}</h3>
                  <div className="space-y-4">
                    <input 
                      autoFocus type="text" placeholder={t("step3_placeholder")}
                      value={challengeData.techStack} onChange={e => setChallengeData({...challengeData, techStack: e.target.value})}
                      onKeyDown={(e) => { if (e.key === 'Enter' && challengeData.techStack) setChallengeStep(4); }}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500 transition-all font-mono text-sm"
                    />
                    <button 
                      onClick={() => setChallengeStep(4)} disabled={!challengeData.techStack}
                      className="w-full py-5 rounded-2xl bg-cyan-400 text-black font-black hover:bg-cyan-300 transition-all font-mono text-xs tracking-[0.3em] uppercase"
                    >
                      {t("map_btn")}
                    </button>
                  </div>
                </motion.div>
              )}

              {challengeStep === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-cyan-400">
                    <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center font-mono font-black text-sm">04</span>
                    <span className="font-mono text-xs tracking-[0.4em] uppercase">Impact</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t("step4_title")}</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[t("step4_opt1"), t("step4_opt2"), t("step4_opt3")].map((opt, i) => (
                      <button 
                        key={i} onClick={() => { setChallengeData({...challengeData, hoursLost: opt}); setChallengeStep(5); }}
                        className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-left text-white/60 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all font-mono text-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {challengeStep === 5 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-purple-400">
                    <span className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center font-mono font-black text-sm">05</span>
                    <span className="font-mono text-xs tracking-[0.4em] uppercase">Optimization</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t("step5_title")}</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { l: t("step5_opt1"), v: "Manual" },
                      { l: t("step5_opt2"), v: "Automation" },
                      { l: t("step5_opt3"), v: "Fail" }
                    ].map((opt) => (
                      <button 
                        key={opt.v} onClick={() => { setChallengeData({...challengeData, optimizationPath: opt.v}); setChallengeStep(6); }}
                        className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-left text-white/60 hover:bg-purple-400/10 hover:border-purple-400/50 hover:text-purple-400 transition-all font-mono text-sm"
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {challengeStep === 6 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                   <div className="p-6 rounded-2xl bg-cyan-400/5 border border-cyan-400/20 font-mono text-[11px] leading-relaxed text-white/70">
                      <div className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                         SYSTEM_BLUEPRINT_READY
                      </div>
                      <p className="mb-4">{t("blueprint_diag_label")}: {challengeData.hoursLost} {t("blueprint_diag_text")} {challengeData.inferredProcess} {t("for")} {challengeData.companyInfo}.</p>
                      <p className="mb-4">{t("blueprint_engine_label")}: Bridge for {challengeData.techStack}. {t("blueprint_engine_text_prefix")}</p>
                      <p className="text-green-400 font-bold">{t("blueprint_roi_label")}: 90% {t("blueprint_roi_text_prefix")}</p>
                   </div>

                   <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      try {
                        await fetch("/api/contact", {
                          method: "POST",
                          headers: { 
                             "Content-Type": "application/json",
                             "Accept": "application/json"
                          },
                          body: JSON.stringify({
                            Namn: challengeData.name,
                            Epost: challengeData.email,
                            Företag: challengeData.companyInfo,
                            Inferred_Process: challengeData.inferredProcess,
                            Tech_Stack: challengeData.techStack,
                            Hours_Lost: challengeData.hoursLost,
                            Optimization_Path: challengeData.optimizationPath,
                            Tjänst: "AgentX Intelligence Challenge",
                            "Subject": `Ny AgentX Analys: ${challengeData.companyInfo}`
                          })
                        });
                        setChallengeStep(7);
                      } catch (err) { console.error(err); }
                      setIsSubmitting(false);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required type="text" placeholder={t("name_placeholder")}
                        value={challengeData.name} onChange={e => setChallengeData({...challengeData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-xs focus:border-cyan-500 outline-none"
                      />
                      <input 
                        required type="email" placeholder={t("email_placeholder")}
                        value={challengeData.email} onChange={e => setChallengeData({...challengeData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-xs focus:border-cyan-500 outline-none"
                      />
                    </div>
                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-white text-black font-black font-mono text-xs tracking-[0.3em] uppercase hover:bg-white/90 transition-all"
                    >
                      {isSubmitting ? t("submitting") : t("deploy_btn")}
                    </button>
                  </form>
                </motion.div>
              )}

              {challengeStep === 7 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                    <Zap className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{t("success_title")}</h3>
                  <p className="text-white/40 font-mono text-sm mb-12 italic leading-relaxed">{t("success_msg")}</p>
                  <button 
                    onClick={() => setShowChallenge(false)}
                    className="px-12 py-4 rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all text-[10px] font-mono tracking-[0.4em] uppercase"
                  >
                    {t("close_terminal")}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );

  function handleInference() {
    setIsAnalyzing(true);
    const info = challengeData.companyInfo.toLowerCase();
    let inferred = t("inf_default");
    if (info.includes("fastighet") || info.includes("estate") || info.includes("hem") || info.includes("property")) inferred = t("inf_property");
    else if (info.includes("butik") || info.includes("shop") || info.includes("retail")) inferred = t("inf_retail");
    else if (info.includes("rsmh") || info.includes("smhfjallsjo") || info.includes("förening") || info.includes("medlem")) inferred = t("inf_org");
    else if (info.includes("hälsa") || info.includes("vård") || info.includes("klinik")) inferred = t("inf_health");
    else if (info.includes("advokat") || info.includes("jurid")) inferred = t("inf_legal");
    setTimeout(() => {
      setChallengeData(prev => ({ ...prev, inferredProcess: inferred }));
      setIsAnalyzing(false);
      setChallengeStep(2);
    }, 2500);
  }
}
