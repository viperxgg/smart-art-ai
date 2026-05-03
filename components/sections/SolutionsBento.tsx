"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MonitorDot, BotMessageSquare, Workflow, Lightbulb, Loader2, CheckCircle2, X, FileText, Settings, Zap, ArrowRight, Terminal, Users, MessageSquare, Utensils } from "lucide-react";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

// Agent X Personality Configuration
const AGENT_X_CONFIG = {
  name: "Agent X",
  greeting: "Hej! Vad sägs om att jag bygger en personlig AI-sekreterare åt dig? En som svarar dygnet runt på din sajt eller WhatsApp - med koll på precis allt om ditt företag.",
  followUp: "Du måste vara spänd på den här upplevelsen! Ska vi se hur en smart assistent kan spara dig timmar av manuellt arbete varje dag?",
  pricingPolicy: "Automatiseringstjänster börjar från 1499 kr, men det slutgiltiga priset fastställs baserat på projektets storlek, komplexitet och de specifika behoven i din verksamhet.",
  persona: "Expert salesperson, business strategist, focus on building AI secretaries for Web/WhatsApp."
};

export default function SolutionsBento() {
  const t = useTranslations("Solutions");
  const locale = useLocale();
  
  const [ideaText, setIdeaText] = useState("");
  const [loadingCard, setLoadingCard] = useState<string | null>(null);
  const [successCard, setSuccessCard] = useState<string | null>(null);
  
  const [activeModal, setActiveModal] = useState<{ title: string, serviceType: string, color: string } | null>(null);

  // Special Workflow Modal State
  const [showWorkflowSpecialModal, setShowWorkflowSpecialModal] = useState<{title: string, serviceType: string, color: string} | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  // Special Chatbot Modal State
  const [showChatbotModal, setShowChatbotModal] = useState<{title: string, serviceType: string, color: string} | null>(null);

  // Special Web Dev Modal State
  const [showWebDevModal, setShowWebDevModal] = useState<{title: string, serviceType: string, color: string} | null>(null);
  const [webDevStep, setWebDevStep] = useState(0);

  // Special Custom Idea Modal State (Card 4)
  const [showCustomIdeaModal, setShowCustomIdeaModal] = useState<boolean>(false);
  const [ideaStep, setIdeaStep] = useState(0); // 0: Form, 1: Success

  // Read More Modal State for AI Chatbot Plans
  const [readMoreModal, setReadMoreModal] = useState<{
    id: 'social' | 'forening' | 'omni',
    title: string,
    desc: string,
    included: string[],
    bestFor: string,
    benefit: string,
    color: string,
    icon: React.ReactNode
  } | null>(null);

  // Effect to lock scroll when any modal is open
  useEffect(() => {
    const isAnyModalOpen = activeModal || showWorkflowSpecialModal || showChatbotModal || showWebDevModal || readMoreModal || showCustomIdeaModal;
    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [activeModal, showWorkflowSpecialModal, showChatbotModal, showWebDevModal, readMoreModal, showCustomIdeaModal]);

  useEffect(() => {
    if (showWorkflowSpecialModal) {
      setAnimationStep(0);
      const t1 = setTimeout(() => setAnimationStep(1), 1000);
      const t2 = setTimeout(() => setAnimationStep(2), 2000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
    
    if (showChatbotModal) {
      // Chatbot is initialized via useChat initialMessages
    }
  }, [showWorkflowSpecialModal, showChatbotModal]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    orgType: "",
    platform: "",
    selectedPackage: ""
  });

  const [chatbotStep, setChatbotStep] = useState(0);
  
  const [agentXMessages, setAgentXMessages] = useState<{role: 'assistant' | 'user', content: string}[]>([]);
  const [agentXInput, setAgentXInput] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [agentXMessages]);

  // Force initial messages when modal opens
  useEffect(() => {
    if (showChatbotModal && agentXMessages.length === 0) {
      setAgentXMessages([
        { role: 'assistant', content: AGENT_X_CONFIG.greeting },
        { role: 'assistant', content: AGENT_X_CONFIG.followUp }
      ]);
    }
  }, [showChatbotModal, agentXMessages.length]);

  const handleOpenModal = (title: string, serviceType: string, color: string) => {
    setActiveModal({ title, serviceType, color });
  };

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModal || !formData.fullName.trim() || !formData.email.trim()) return;

    setSubmitError(null);
    setLoadingCard(activeModal.title);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Namn: formData.fullName,
          Epost: formData.email,
          Telefon: formData.phone || "Ej angivet",
          Organisation: formData.organization || "Ej angivet",
          Tjanst: activeModal.serviceType,
          Meddelande: activeModal.title === t("card4_title") ? ideaText : "N/A",
          "Subject": `Ny Förfrågan: ${activeModal.serviceType}`
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Submission failed");
      }
      
      const currentTitle = activeModal.title;
      setSuccessCard(currentTitle);
      setActiveModal(null);
      setFormData({ 
        fullName: "", 
        email: "", 
        phone: "", 
        organization: "", 
        orgType: "", 
        platform: "", 
        selectedPackage: "" 
      });
      
      if (currentTitle === t("card4_title")) {
        setIdeaText("");
      }
      
      // Reset success after 4 seconds
      setTimeout(() => {
        setSuccessCard(null);
      }, 4000);
      
    } catch (error: any) {
      console.error("Submission failed", error);
      setSubmitError(error.message || "Något gick fel. Försök igen.");
    } finally {
      setLoadingCard(null);
    }
  };


  const handleAgentXMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = agentXInput.trim();
    if (!val || isAgentTyping) return;
    
    // Add user message to UI
    const newMessages = [...agentXMessages, { role: 'user' as const, content: val }];
    setAgentXMessages(newMessages);
    setAgentXInput('');
    setIsAgentTyping(true);

    try {
      const response = await fetch('/api/agent-x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) })
      });

      if (!response.ok) throw new Error("Neural connection lost");

      // Handle Streaming
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      // Add a placeholder message for the assistant
      setAgentXMessages(prev => [...prev, { role: 'assistant', content: "" }]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        assistantText += decoder.decode(value);
        
        // Update the last message (the assistant one)
        setAgentXMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content = assistantText;
          return updated;
        });
      }
    } catch (err) {
      console.error("Chat error:", err);
      setAgentXMessages(prev => [...prev, { role: 'assistant', content: "Neural connection error. Please try again." }]);
    } finally {
      setIsAgentTyping(false);
    }
  };

  const renderServiceCTA = (cardId: string, color: string, serviceType: string) => {
    const title = t(`${cardId}_title`);
    const ctaText = t(`${cardId}_cta`);
    const nextText = t(`${cardId}_next`);

    if (successCard === title) {
      return (
        <div className="mt-auto w-full space-y-4">
           <div className={`px-6 py-3 rounded-2xl border border-[#${color}]/30 text-[#${color}] font-bold bg-[#${color}]/10 w-full flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(var(--color-${color}),0.2)]`}>
            <CheckCircle2 className="w-4 h-4" />
            Väntar på Agent X...
          </div>
          <p className="text-xs text-white/60 italic font-medium text-center px-4">
            Ditt meddelande har skickats via vår Neural Core.
          </p>
        </div>
      );
    }

    return (
      <div className="mt-auto w-full space-y-4">
        <button 
          onClick={() => {
            if (cardId === "card3") {
              setShowWorkflowSpecialModal({ title, serviceType, color });
            } else if (cardId === "card2") {
              setShowChatbotModal({ title, serviceType, color });
              setChatbotStep(0);
            } else if (cardId === "card1") {
              setShowWebDevModal({ title, serviceType, color });
              setWebDevStep(0);
            } else if (cardId === "card4") {
              setShowCustomIdeaModal(true);
              setIdeaStep(0);
            } else {
              handleOpenModal(title, serviceType, color);
            }
          }}
          className={`group/btn relative px-8 py-3.5 rounded-2xl bg-[#${color}]/5 border border-[#${color}]/30 text-[#${color}] font-bold hover:bg-[#${color}] hover:text-white transition-all duration-500 w-full flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_15px_rgba(var(--color-${color}),0.1)] hover:shadow-[0_0_30px_rgba(var(--color-${color}),0.5)]`}
          style={{"--color-7000FF": "112,0,255", "--color-00E5FF": "15,76,58", "--color-007BFF": "0,123,255", "--color-FF007F": "15,76,58"} as any}
        >
          <span className="relative z-10 uppercase tracking-widest text-xs">{ctaText}</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
        </button>
        
        <div className="flex flex-col gap-1 items-center px-4">
            <p className="text-[13px] text-white/70 leading-relaxed max-w-sm font-medium tracking-tight">
               {nextText}
            </p>
        </div>
      </div>
    );
  };

  const isAnyModalOpen = activeModal || showWorkflowSpecialModal || showChatbotModal || showWebDevModal;

  return (
    <section id="solutions" className={`relative transition-all duration-500 max-w-7xl mx-auto px-4 py-40 ${isAnyModalOpen ? "!z-[10000]" : "z-10"}`}>
      <div className="mb-32 text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 font-mono"
        >
           <Terminal className="w-3 h-3" />
           {t("nav_title")}
        </motion.div>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-white leading-[0.9] max-w-4xl mx-auto">
          {t("solutions_intro")}
        </h2>
        <p className="text-white/60 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed font-mono tracking-wide">
          {t("subtitle")}
        </p>
      </div>

      {/* === FEATURED CARD: Full width === */}
      <Link 
        href={`/${locale}/blog/scandinavian-digital-menu`}
        className="block glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col md:flex-row items-center text-center md:text-left border-2 border-[#0F4C3A]/20 hover:border-[#0F4C3A]/50 transition-all duration-500 shadow-[0_0_50px_rgba(15,76,58,0.1)] hover:shadow-[0_0_80px_rgba(15,76,58,0.2)] mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C3A]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#0F4C3A]/10 flex items-center justify-center mb-8 md:mb-0 md:mr-10 border border-[#0F4C3A]/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(15,76,58,0.3)] shrink-0">
          <Utensils className="w-12 h-12 md:w-16 md:h-16 text-emerald-200" />
        </div>

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4C3A]/20 border border-[#0F4C3A]/30 text-emerald-200 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3 h-3 fill-emerald-200" /> New Product
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tight leading-tight font-jakarta">
            {t("card_menu_title")}
          </h3>
          <p className="text-white/60 mb-6 text-lg leading-relaxed font-light max-w-2xl font-body">
            {t("card_menu_desc")}
          </p>
          <div className="inline-flex items-center gap-2 text-emerald-200 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
            {t("card_menu_cta")} <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
           <div className="w-32 h-32 border-4 border-white rounded-xl flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/50 border-dashed" />
           </div>
        </div>
      </Link>

      {/* === 3 EQUAL CARDS BELOW === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Web Dev */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col items-center text-center border border-white/5 hover:border-[#7000FF]/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#7000FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-20 h-20 rounded-3xl bg-[#7000FF]/10 flex items-center justify-center mb-10 border border-[#7000FF]/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(112,0,255,0.2)]">
            <MonitorDot className="w-10 h-10 text-[#7000FF]" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white tracking-tight leading-tight font-jakarta">{t("card1_title")}</h3>
          <p className="text-white/70 mb-10 flex-1 leading-relaxed font-medium font-body">{t("card1_desc")}</p>
          {renderServiceCTA("card1", "7000FF", "Custom Web Development")}
        </motion.div>

        {/* Card 2: Agent X */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col items-center text-center border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-20 h-20 rounded-3xl bg-[#00E5FF]/10 flex items-center justify-center mb-10 border border-[#00E5FF]/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(15,76,58,0.2)]">
            <BotMessageSquare className="w-10 h-10 text-[#00E5FF]" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white tracking-tight leading-tight font-jakarta">{t("card2_title")}</h3>
          <p className="text-white/70 mb-10 flex-1 leading-relaxed font-medium font-body">{t("card2_desc")}</p>
          {renderServiceCTA("card2", "00E5FF", "Social Bot")}
        </motion.div>

        {/* Card 4: Custom Ideas */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col items-center text-center border border-white/5 hover:border-[#0F4C3A]/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C3A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-20 h-20 rounded-3xl bg-[#0F4C3A]/10 flex items-center justify-center mb-10 border border-[#0F4C3A]/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(15,76,58,0.2)]">
            <Lightbulb className="w-10 h-10 text-[#0F4C3A]" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white tracking-tight leading-tight font-jakarta">{t("card4_title")}</h3>
          <p className="text-white/70 mb-10 flex-1 leading-relaxed font-medium font-body">{t("card4_desc")}</p>
          {renderServiceCTA("card4", "FF007F", "Custom Idea")}
        </motion.div>

      </div>

      {/* MODALS PERSISTED (SAME LOGIC) */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10001] flex flex-col items-center py-12 md:py-24 bg-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-md glass-panel rounded-3xl p-8 relative border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">{activeModal.title}</h3>
              <p className="text-white/50 text-sm mb-6">Agent X is ready to assist. Please provide your details.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    required
                    type="text" 
                    placeholder={t("form_name")}
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                    className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors focus:border-[#${activeModal.color}]`}
                  />
                </div>
                <div>
                  <input 
                    required
                    type="email" 
                    placeholder={t("form_email")}
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors focus:border-[#${activeModal.color}]`}
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder={t("form_phone")}
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors focus:border-[#${activeModal.color}]`}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder={t("form_company")}
                    value={formData.organization}
                    onChange={e => setFormData({...formData, organization: e.target.value})}
                    className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors focus:border-[#${activeModal.color}]`}
                  />
                </div>
                
                {submitError && (
                  <div className="w-full px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                    ⚠ï¸ {submitError}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={loadingCard === activeModal.title || !formData.fullName.trim() || !formData.email.trim()}
                  className={`w-full mt-4 px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all opacity-100 shadow-[0_0_20px_rgba(var(--color-${activeModal.color}),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-${activeModal.color}),0.5)]`}
                  style={{ background: `linear-gradient(to right, #${activeModal.color}, #007BFF)` }}
                >
                  {loadingCard === activeModal.title ? <Loader2 className="w-5 h-5 animate-spin" /> : t("form_submit")}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Special Workflow Animation Modal */}
      <AnimatePresence>
        {showWorkflowSpecialModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10001] flex flex-col items-center py-12 md:py-24 bg-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-4xl glass-panel rounded-3xl p-10 relative border border-[#007BFF]/30 shadow-[0_0_80px_rgba(0,123,255,0.2)] text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              <button 
                onClick={() => setShowWorkflowSpecialModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                <AnimatePresence mode="wait">
                  {animationStep === 0 && (
                    <motion.div 
                      key="step1"
                      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FileText className="w-20 h-20 text-white/40" />
                    </motion.div>
                  )}
                  {animationStep === 1 && (
                    <motion.div 
                      key="step2"
                      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1, rotate: 180 }} exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Settings className="w-24 h-24 text-emerald-200 drop-shadow-[0_0_30px_rgba(15,76,58,0.8)]" />
                    </motion.div>
                  )}
                  {animationStep === 2 && (
                    <motion.div 
                      key="step3"
                      initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Zap className="w-24 h-24 text-[#007BFF] drop-shadow-[0_0_40px_rgba(0,123,255,1)]" fill="#007BFF" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Background pulse effect for final step */}
                {animationStep === 2 && (
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: [0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
                     className="absolute inset-0 rounded-full border-2 border-[#007BFF]"
                   />
                )}
              </div>

              {(animationStep <= 2) ? (
                <div className="w-full flex flex-col items-center">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: animationStep === 2 ? 1 : 0.5, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white mb-4 leading-tight"
                  >
                    Vi eliminerar manuellt arbete och sparar <span className="text-[#007BFF]">70%</span> av din tid.
                  </motion.h3>

                  {animationStep === 2 && (
                    <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.2 }}
                       className="w-full"
                    >
                      <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Sluta slösa tid på klipp-och-klistra. Vi kopplar ihop dina system (Swish, CRM, Mail) så att de pratar med varandra automatiskt.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
                        {/* Pricing 1: Enkla Flöden */}
                        <div 
                          onClick={() => setFormData({...formData, selectedPackage: 'Basic_Flow'})}
                          className={`rounded-xl border p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${formData.selectedPackage === 'Basic_Flow' ? 'bg-white/10 border-[#007BFF] shadow-[0_0_20px_rgba(0,123,255,0.4)] scale-105' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                        >
                          <h5 className="font-bold text-white mb-1">Enkla Flöden</h5>
                          <div className="text-xs text-white/50 mb-3 px-2 py-1 bg-black/30 rounded-md">För små företag</div>
                          <div className="text-sm text-white/70">Setup: <span className="text-[#007BFF] font-bold">4,900 kr</span></div>
                          <div className="text-sm text-white/70">Månad: <span className="text-[#007BFF] font-bold">490 kr</span></div>
                        </div>

                        {/* Pricing 2: Förenings-Fix CSR */}
                        <div 
                          onClick={() => setFormData({...formData, selectedPackage: 'NGO_Automation_3900'})}
                          className={`rounded-xl border p-5 flex flex-col items-center text-center relative cursor-pointer transition-all duration-300 ${formData.selectedPackage === 'NGO_Automation_3900' ? 'bg-orange-500/20 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.5)] scale-105' : 'bg-orange-500/10 border-orange-500/50 hover:border-orange-500/80'}`}
                        >
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-[10px] uppercase font-bold rounded-full whitespace-nowrap shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                            ★ CSR-Sponsrad
                          </div>
                          <h5 className="font-bold text-orange-400 mb-1 mt-1">Förenings-Fix</h5>
                          <div className="text-xs text-orange-200/60 mb-3 px-2 py-1 bg-black/30 rounded-md">Automatisera medlemskap & Swish</div>
                          <div className="text-sm text-white/70">Setup: <span className="text-orange-400 font-bold">3,900 kr</span></div>
                          <div className="text-sm text-white/70">Månad: <span className="text-orange-400 font-bold">290 kr</span></div>
                        </div>

                        {/* Pricing 3: Komplett */}
                        <div 
                          onClick={() => setFormData({...formData, selectedPackage: 'Complete_Automation'})}
                          className={`rounded-xl border p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${formData.selectedPackage === 'Complete_Automation' ? 'bg-white/10 border-[#00E5FF] shadow-[0_0_20px_rgba(15,76,58,0.4)] scale-105' : 'bg-white/5 border-[#007BFF]/30 hover:border-[#007BFF]/60'}`}
                        >
                          <h5 className="font-bold text-white mb-1">Komplett</h5>
                          <div className="text-xs text-white/50 mb-3 px-2 py-1 bg-black/30 rounded-md">Full systemintegration</div>
                          <div className="text-sm text-white/70">Setup: <span className="text-[#007BFF] font-bold">14,900 kr</span></div>
                          <div className="text-sm text-white/70">Månad: <span className="text-[#007BFF] font-bold">1,490 kr</span></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: animationStep === 2 ? 1 : 0, y: animationStep === 2 ? 0 : 20 }}
                    onClick={() => {
                      if (animationStep === 2 && formData.selectedPackage) {
                        setAnimationStep(3); // Go to special form
                      }
                    }}
                    disabled={!formData.selectedPackage}
                    style={{ pointerEvents: animationStep === 2 ? "auto" : "none", position: "relative", zIndex: 50 }}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-white font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(0,123,255,0.6)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300"
                  >
                    Välj Paket & Spara Tid
                  </motion.button>
                </div>
              ) : animationStep === 3 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="w-full text-left"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Schemalägg din Audit</h3>
                  <p className="text-white/50 text-sm mb-6">Fyll i formuläret nedan så hjälper Agent X dig.</p>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setLoadingCard("Workflow_Audit_Request");
                    try {
                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { 
                           "Content-Type": "application/json",
                           "Accept": "application/json"
                        },
                        body: JSON.stringify({
                          Namn: formData.fullName,
                          Organisation: formData.organization || "Ej angivet",
                          Epost: formData.email,
                          Manuell_Process: formData.phone || "Data inmatning",
                          Valt_Paket: formData.selectedPackage,
                          Tjanst: "Workflow Automation Audit",
                          "Subject": "Ny Workflow Audit Förfrågan"
                        }),
                      });
                      setAnimationStep(4); // Success step
                    } catch (error) {
                      console.error("Submission failed", error);
                    } finally {
                      setLoadingCard(null);
                    }
                  }} className="space-y-4">
                    <input 
                      required type="text" placeholder="Fullständigt namn *"
                      value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF] transition-colors"
                    />
                    <input 
                      required type="text" placeholder="Företag / Organisation *"
                      value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF] transition-colors"
                    />
                    <input 
                      required type="email" placeholder="E-postadress *"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF] transition-colors"
                    />
                    <select
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF] transition-colors appearance-none"
                    >
                      <option value="" disabled selected>Välj nuvarande manuell process *</option>
                      <option value="Data Entry/Transfer">Datainmatning & Överföring</option>
                      <option value="Invoicing/Accounting">Fakturering & Bokföring</option>
                      <option value="Customer Support">Kundtjänst & Ärendehantering</option>
                      <option value="Reporting/Analysis">Rapportering & Analys</option>
                      <option value="Other">Annat (beskriv senare)</option>
                    </select>
                    
                    <button 
                      type="submit"
                      disabled={loadingCard === "Workflow_Audit_Request"}
                      className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity shadow-[0_0_20px_rgba(0,123,255,0.4)]"
                    >
                      {loadingCard === "Workflow_Audit_Request" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Schemalägg Audit"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-[#007BFF] mb-4 drop-shadow-[0_0_20px_rgba(0,123,255,0.6)]" />
                  <h3 className="text-xl font-bold text-white mb-2">Förfrågan Mottagen</h3>
                  <p className="text-[#007BFF] font-medium text-center">Tack! Agent X analyserar dina system. Vi hörs snart.</p>
                  <button onClick={() => setShowWorkflowSpecialModal(null)} className="mt-8 px-6 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Stäng
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Special AI Chatbot Modal */}
      <AnimatePresence>
        {showChatbotModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10001] flex flex-col items-center py-12 md:py-24 bg-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-2xl glass-panel rounded-3xl p-10 relative border border-[#00E5FF]/30 shadow-[0_0_80px_rgba(15,76,58,0.2)] flex flex-col items-start min-h-[400px]"
            >
              <button 
                onClick={() => setShowChatbotModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {chatbotStep === 0 ? (
                <div className="w-full flex-1 flex flex-col min-h-[500px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(15,76,58,0.4)]">
                        <BotMessageSquare className="w-6 h-6 text-[#00E5FF]" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white tracking-widest uppercase">{AGENT_X_CONFIG.name}</h3>
                      <p className="text-[10px] text-[#00E5FF] font-mono uppercase tracking-[0.2em] animate-pulse">Neural Session Active_</p>
                    </div>
                  </div>

                  {/* Terminal Chat Area */}
                  <div 
                    ref={chatContainerRef}
                    className="flex-1 bg-black/40 rounded-3xl border border-white/5 p-6 mb-6 overflow-y-auto max-h-[350px] custom-scrollbar space-y-4 font-mono"
                  >
                    <AnimatePresence initial={false}>
                      {agentXMessages.map((msg, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: msg.role === 'assistant' ? -10 : 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                        >
                          <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                            msg.role === 'assistant' 
                            ? 'bg-white/5 text-white/90 border border-white/10' 
                            : 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(15,76,58,0.1)]'
                          }`}>
                            <span className="opacity-40 mr-2">{msg.role === 'assistant' ? 'X_CORE>' : 'ROOT>'}</span>
                            {msg.content}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {isAgentTyping && (
                      <div className="flex items-center gap-2 text-[#00E5FF]/30 text-[10px] italic">
                         <Loader2 className="w-3 h-3 animate-spin" />
                         Agent X analyserar ditt svar...
                      </div>
                    )}
                  </div>

                  {/* Terminal Input */}
                  <form onSubmit={handleAgentXMessage} className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#00E5FF] font-mono text-[11px] opacity-40 tracking-tight whitespace-nowrap pointer-events-none">root@guest:~$</div>
                    <input 
                      type="text"
                      autoFocus
                      placeholder="Skriv din fråga här..."
                      value={agentXInput}
                      onChange={(e) => setAgentXInput(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-2xl pl-32 pr-16 py-4 text-xs text-white focus:outline-none focus:border-[#00E5FF]/50 transition-all font-mono"
                    />
                    <button 
                      type="submit"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  
                  <div className="flex justify-between items-center mt-6 px-2">
                     <p className="text-[9px] text-white/20 font-mono italic">Log_ref: 4054-AGENTX-CORE</p>
                     <button 
                        onClick={() => setChatbotStep(1)}
                        className="text-[10px] text-[#00E5FF] font-bold uppercase tracking-widest hover:underline"
                     >
                        Hoppa till bokning &rarr;
                     </button>
                  </div>
                </div>
              ) : chatbotStep === 1 ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Steg 1 av 2</h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-2 rounded-full bg-[#00E5FF]"></div>
                      <div className="w-8 h-2 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6">Låt oss börja med de tekniska behoven.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Valt Paket *</label>
                      <select
                        value={formData.selectedPackage} onChange={e => setFormData({...formData, selectedPackage: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors appearance-none"
                      >
                        <option value="" disabled>Välj ditt paket</option>
                        <option value="Social Sales">Social Sales</option>
                        <option value="Förenings-Bot (CSR)">Förenings-Bot (CSR)</option>
                        <option value="Omnichannel">Omnichannel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-white/50 mb-2">Typ av verksamhet *</label>
                      <select
                        value={formData.orgType} onChange={e => setFormData({...formData, orgType: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors appearance-none"
                      >
                        <option value="" disabled>Välj organisationstyp</option>
                        <option value="Företag / B2B">Företag / B2B</option>
                        <option value="Företag / B2C">Företag / B2C</option>
                        <option value="Ideell Organisation / NGO">Ideell Organisation / NGO</option>
                        <option value="Offentlig Sektor">Offentlig Sektor</option>
                        <option value="Annat">Annat</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Föredragen Plattform *</label>
                      <select
                        value={formData.platform} onChange={e => setFormData({...formData, platform: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors appearance-none"
                      >
                        <option value="" disabled>Var vill du ha chatboten?</option>
                        <option value="Hemsida / Webb">Hemsida / Webb</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Instagram / Facebook">Instagram / Facebook</option>
                        <option value="Flerkanals (Alla ovan)">Flerkanals (Alla ovan)</option>
                      </select>
                    </div>

                    <button 
                      onClick={() => {
                        if (formData.orgType && formData.platform && formData.selectedPackage) setChatbotStep(2);
                      }}
                      disabled={!formData.orgType || !formData.platform || !formData.selectedPackage}
                      className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity shadow-[0_0_20px_rgba(15,76,58,0.4)]"
                    >
                      Nästa Steg
                    </button>
                  </div>
                </motion.div>
              ) : chatbotStep === 2 ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Steg 2 av 2</h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-2 rounded-full bg-[#00E5FF]/50"></div>
                      <div className="w-8 h-2 rounded-full bg-[#00E5FF]"></div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6">Nästan klara! Vem ska vi kontakta?</p>

                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setLoadingCard("Chatbot_Lead");
                    try {
                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { 
                           "Content-Type": "application/json",
                           "Accept": "application/json"
                        },
                        body: JSON.stringify({
                          Namn: formData.fullName,
                          Epost: formData.email,
                          Organisationstyp: formData.orgType,
                          Preferred_Platform: formData.platform,
                          Valt_Paket: formData.selectedPackage,
                          Tjanst: "AI Chatbot Förfrågan",
                          "Subject": "Ny AI Chatbot Förfrågan"
                        }),
                      });
                      setChatbotStep(3); // Success step
                    } catch (error) {
                      console.error("Submission failed", error);
                    } finally {
                      setLoadingCard(null);
                    }
                  }} className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Ditt Namn *</label>
                      <input 
                        required type="text" placeholder="För- och efternamn"
                        value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00E5FF] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/50 mb-2">E-postadress *</label>
                      <input 
                        required type="email" placeholder="Din arbetsmejl"
                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00E5FF] transition-colors"
                      />
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button 
                        type="button"
                        onClick={() => setChatbotStep(1)}
                        className="w-1/3 py-3 rounded-xl bg-transparent text-white font-semibold flex items-center justify-center border border-white/20 hover:bg-white/5 transition-colors"
                      >
                        Tillbaka
                      </button>
                      <button 
                        type="submit"
                        disabled={loadingCard === "Chatbot_Lead" || !formData.fullName.trim() || !formData.email.trim()}
                        className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity shadow-[0_0_20px_rgba(15,76,58,0.4)]"
                      >
                        {loadingCard === "Chatbot_Lead" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Skicka Förfrågan"}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full mt-4">
                  <CheckCircle2 className="w-16 h-16 text-[#00E5FF] mb-4 drop-shadow-[0_0_20px_rgba(15,76,58,0.6)]" />
                  <h3 className="text-xl font-bold text-white mb-2">Mottaget!</h3>
                  <p className="text-[#00E5FF] font-medium text-center">Tack! Agent X förbereder en demo baserad på din verksamhet.</p>
                  <button onClick={() => setShowChatbotModal(null)} className="mt-8 px-6 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Stäng
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Special Web Dev Pricing Modal */}
      <AnimatePresence>
        {showWebDevModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10001] flex flex-col items-center py-12 md:py-24 bg-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-4xl glass-panel rounded-3xl p-10 relative border border-[#7000FF]/30 shadow-[0_0_80px_rgba(112,0,255,0.2)]"
            >
              <button 
                onClick={() => setShowWebDevModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <div className="w-16 h-16 rounded-2xl bg-[#7000FF]/10 flex items-center justify-center mb-6 border border-[#7000FF]/20 shadow-[0_0_20px_rgba(112,0,255,0.4)]">
                      <MonitorDot className="w-8 h-8 text-[#7000FF]" />
                    </div>
                    <h3 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.85]">Digital <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#9D50BB]">Growth Systems</span></h3>
                    <div className="font-mono text-sm mb-12 relative">
                       <span className="text-[#7000FF] mr-2 opacity-70">root@smartart:~$</span>
                       <p className="inline text-white/90 leading-relaxed">
                          "Vi bygger inte bara hemsidor - vi skapar system som genererar kunder och driver tillväxt."
                          <motion.span 
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 H-4 bg-[#7000FF] ml-1 align-middle"
                          />
                       </p>
                    </div>
                    
                    <ul className="space-y-4 mb-8 font-mono">
                       <li className="flex items-center gap-3 text-white/90 text-[11px] group/item">
                          <Terminal className="w-4 h-4 text-[#7000FF] group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-[#7000FF] transition-colors">Snabba & högpresterande (100/100 Lighthouse)</span>
                       </li>
                       <li className="flex items-center gap-3 text-white/90 text-[11px] group/item">
                          <Terminal className="w-4 h-4 text-[#7000FF] group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-[#7000FF] transition-colors">SEO & konverteringsoptimerade från start</span>
                       </li>
                       <li className="flex items-center gap-3 text-white/90 text-[11px] group/item">
                          <Terminal className="w-4 h-4 text-[#7000FF] group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-[#7000FF] transition-colors">Skalbar design byggd för tillväxt</span>
                       </li>
                    </ul>

                    {/* Trust Elements */}
                    <div className="flex flex-wrap gap-2 mb-16 font-mono">
                       {["Ingen bindningstid", "Snabb leverans", "14 dagars nöjdhetsgaranti"].map((badge, idx) => (
                          <div key={idx} className="px-4 py-1.5 rounded-md bg-[#7000FF]/10 border border-[#7000FF]/40 text-white text-[10px] uppercase tracking-[0.1em] font-bold shadow-[0_0_15px_rgba(112,0,255,0.2)]">
                             {`[ ${badge} ]`}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    {(webDevStep === 0) ? (
                      <div className="space-y-4 text-left">
                        <h4 className="text-xl font-bold text-white mb-6">Paket & Planer</h4>
                        
                        <div 
                          onClick={() => setFormData({...formData, selectedPackage: 'Essential_Launch'})}
                          className={`group/card p-8 rounded-3xl border transition-all duration-500 ${formData.selectedPackage === 'Essential_Launch' ? 'bg-[#7000FF]/15 border-[#7000FF] shadow-[0_0_40px_rgba(112,0,255,0.4)]' : 'bg-white/[0.02] border-white/10 hover:border-[#7000FF]/50'}`}
                        >
                           <div className="flex justify-between items-center mb-4">
                              <h5 className="font-bold text-white text-xl tracking-tighter shadow-white/10 drop-shadow-sm">Essential Launch</h5>
                           </div>
                           <div className="absolute top-4 right-4 rotate-0">
                               <span className="text-[#0F4C3A] font-mono text-[8px] px-2 py-0.5 rounded border border-[#0F4C3A]/30 bg-[#0F4C3A]/5 animate-pulse shadow-[0_0_10px_rgba(15,76,58,0.2)]">SYSTEM: BAS</span>
                           </div>
                           <p className="text-white/90 text-xs mb-4 leading-relaxed font-mono">Perfekt för små företag som vill komma igång snabbt med en professionell närvaro online.</p>
                           <div className="h-4"></div>
                           <div className="text-sm text-white/90 font-mono">Pris: <span className="text-white font-bold text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">7,999 kr</span></div>
                        </div>

                        <div 
                          onClick={() => setFormData({...formData, selectedPackage: 'Growth_Engine'})}
                          className={`group/card p-8 rounded-3xl border-2 transition-all duration-700 relative overflow-hidden ${formData.selectedPackage === 'Growth_Engine' ? 'bg-gradient-to-br from-[#7000FF]/25 to-transparent border-[#7000FF] shadow-[0_0_60px_rgba(112,0,255,0.5)]' : 'bg-[#7000FF]/5 border-[#7000FF]/30 hover:border-[#7000FF]/60'}`}
                        >
                           <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#7000FF] text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(112,0,255,0.6)] z-20">Mest populär</div>
                           <div className="absolute top-10 right-4">
                              <span className="text-[#00E5FF] font-mono text-[8px] px-2 py-0.5 rounded border border-[#00E5FF]/40 bg-[#00E5FF]/5 animate-pulse shadow-[0_0_10px_rgba(15,76,58,0.3)]">SYSTEM: PREMIUM</span>
                           </div>
                           <div className="flex justify-between items-center mb-4">
                              <h5 className="font-bold text-white text-xl tracking-tighter text-shadow-sm">Growth Engine</h5>
                           </div>
                           <p className="text-white text-xs mb-4 leading-relaxed font-bold font-mono">För företag som vill växa snabbare med smarta system och bättre kundflöde.</p>
                           <div className="h-4"></div>
                           <div className="text-sm text-white font-mono">Pris: <span className="text-[#00E5FF] font-black text-3xl tracking-tighter drop-shadow-[0_0_20px_rgba(15,76,58,0.8)]">14,999 kr</span></div>
                        </div>

                        {/* Secondary Trust Section */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                           {[
                              { icon: <CheckCircle2 className="w-3 h-3" />, text: "+20 projekt levererade" },
                              { icon: <Zap className="w-3 h-3" />, text: "Snabb support & kontakt" },
                              { icon: <Settings className="w-3 h-3" />, text: "Byggt för svenska företag" }
                           ].map((item, i) => (
                              <div key={i} className="flex flex-col items-center text-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-emerald-200 border border-[#0F4C3A]/20 shadow-[0_0_10px_rgba(15,76,58,0.2)]">
                                    {item.icon}
                                 </div>
                                 <span className="text-white text-[11px] font-bold tracking-widest uppercase">
                                    {item.text}
                                 </span>
                              </div>
                           ))}
                        </div>

                        <div className="flex flex-col items-center gap-4">
                           <AnimatePresence mode="wait">
                              {formData.selectedPackage && (
                                 <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center gap-1 mb-6 py-3 px-6 rounded-2xl bg-white/[0.03] border border-white/10 w-full"
                                 >
                                    <div className="flex items-center gap-2">
                                       <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                       <span className="text-white/30 text-[9px] font-mono uppercase tracking-widest">Live Diagnostics:</span>
                                       <span className="text-white font-bold text-[10px] font-mono uppercase tracking-widest">{formData.selectedPackage.replace('_', ' ')}</span>
                                    </div>
                                    <span className="text-[#00E5FF] text-[10px] font-bold font-mono uppercase tracking-[0.2em] shadow-[#00E5FF]/20 drop-shadow-sm">
                                       {formData.selectedPackage === 'Essential_Launch' ? " > ACCESS GRANTED_" : " > OPTIMIZING_FLOW..."}
                                    </span>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                           <button 
                             disabled={!formData.selectedPackage}
                             onClick={() => setWebDevStep(1)}
                             className="w-full py-5 rounded-2xl bg-[#7000FF] text-white hover:bg-[#8A2BE2] shadow-[0_0_60px_rgba(112,0,255,0.7)] font-black text-[15px] tracking-widest hover:scale-[1.02] transition-all uppercase group"
                           >
                             <span className="flex items-center justify-center gap-2">
                                Starta ditt projekt
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                             </span>
                           </button>
                           
                           <div className="flex flex-col items-center">
                              <p className="text-[11px] text-white/90 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-sm mb-1">
                                 Tar mindre än 30 sekunder
                              </p>
                              <button 
                                 onClick={() => window.open('https://calendly.com', '_blank')}
                                 className="text-[#00E5FF] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all underline underline-offset-4 decoration-[#00E5FF]/40 drop-shadow-[0_0_15px_rgba(15,76,58,0.5)]"
                              >
                                 Eller boka ett gratis möte
                              </button>
                           </div>
                        </div>
                      </div>
                    ) : (webDevStep === 1) ? (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                         <h4 className="text-xl font-bold text-white mb-6 text-left">Schemalägg Uppstart</h4>
                         <form onSubmit={async (e) => {
                            e.preventDefault();
                            setLoadingCard("WebDev_Audit");
                            try {
                               await fetch("/api/contact", {
                                  method: "POST",
                                  headers: { 
                                     "Content-Type": "application/json",
                                     "Accept": "application/json"
                                  },
                                  body: JSON.stringify({
                                     Namn: formData.fullName,
                                     Epost: formData.email,
                                      Foretag: formData.organization || "Ej angivet",
                                     Valt_Paket: formData.selectedPackage,
                                      Tjanst: "Web Development Growth System",
                                     "Subject": `Ny Order: ${formData.selectedPackage}`
                                  }),
                               });
                               setWebDevStep(2);
                            } catch (error) {
                               console.error(error);
                            } finally {
                               setLoadingCard(null);
                            }
                         }} className="space-y-4">
                            <input 
                               required type="text" placeholder="Ditt Namn *"
                               value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7000FF] transition-colors"
                            />
                            <input 
                               required type="email" placeholder="Din E-post *"
                               value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7000FF] transition-colors"
                            />
                            <input 
                               type="text" placeholder="Företag / Organisation"
                               value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7000FF] transition-colors"
                            />
                            <div className="flex gap-4 pt-4">
                               <button 
                                  type="button" 
                                  onClick={() => setWebDevStep(0)}
                                  className="w-1/3 py-3 rounded-xl border border-white/10 text-white/50 hover:bg-white/5 transition-all font-mono text-xs uppercase tracking-widest"
                               >
                                  Back
                               </button>
                               <button 
                                  type="submit"
                                  disabled={loadingCard === "WebDev_Audit"}
                                  className="w-2/3 py-3 rounded-xl bg-[#7000FF] text-white font-bold tracking-widest hover:brightness-110 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(112,0,255,0.4)] uppercase text-xs"
                               >
                                  {loadingCard === "WebDev_Audit" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Skicka Förfrågan"}
                               </button>
                            </div>
                         </form>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                        <CheckCircle2 className="w-16 h-16 text-[#7000FF] mb-4 drop-shadow-[0_0_30px_rgba(112,0,255,0.6)]" />
                        <h3 className="text-2xl font-bold text-white mb-2">Underbart!</h3>
                        <p className="text-white/60 text-center italic">"Agent X har reserverat en resursserie för ditt projekt. Vi återkommer inom kort med en lanseringsplan."</p>
                        <button onClick={() => setShowWebDevModal(null)} className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white/50 hover:text-white transition-all">Stäng</button>
                      </motion.div>
                    )}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read More Modal (Secondary Layer) */}
      <AnimatePresence>
        {readMoreModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10005] flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl"
            onClick={() => setReadMoreModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass-panel rounded-[2.5rem] p-10 relative border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Background ambient glow */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[120px] opacity-20 transition-all duration-1000"
                style={{ backgroundColor: `#${readMoreModal.color}` }}
              />

              <button 
                onClick={() => setReadMoreModal(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                  {readMoreModal.icon}
                </div>

                <div className="mb-10 text-center w-full">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="h-[1px] w-8 bg-white/10" />
                    <h4 className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black">Kort om paketet</h4>
                    <div className="h-[1px] w-8 bg-white/10" />
                  </div>
                  <h3 className="text-4xl font-black text-white tracking-tighter italic mb-6 leading-none">{readMoreModal.title}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed font-light italic">{readMoreModal.desc}</p>
                </div>

                <div className="space-y-10 w-full">
                  <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8">
                    <h4 className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black mb-6 flex items-center gap-2 justify-center">
                      Det här ingår
                    </h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {readMoreModal.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/80 group">
                          <CheckCircle2 className="w-5 h-5 text-white/20 shrink-0 mt-0.5 group-hover:text-white/40 transition-colors" />
                          <span className="text-sm font-medium leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-10 text-center">
                     <div>
                        <h4 className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black mb-4">Passar för</h4>
                        <p className="text-[13px] text-white/60 leading-relaxed font-medium">{readMoreModal.bestFor}</p>
                     </div>
                     <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-[2rem] border-t border-white/5">
                        <h4 className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black mb-4">Huvudfördel</h4>
                        <p className="text-lg text-white leading-relaxed font-black italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                           {readMoreModal.benefit}
                        </p>
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 w-full mt-12">
                   <button 
                     onClick={() => {
                        setFormData({ ...formData, selectedPackage: readMoreModal.title });
                        setReadMoreModal(null);
                        setChatbotStep(1);
                     }}
                     className="w-full py-5 rounded-[1.5rem] bg-gradient-to-r from-[#00E5FF] to-[#7000FF] text-white font-black uppercase tracking-[0.3em] text-[11px] hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(112,0,255,0.4)] flex items-center justify-center gap-3 group"
                   >
                     Välj detta paket
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </button>
                   <button 
                     onClick={() => setReadMoreModal(null)}
                     className="w-full py-4 rounded-xl text-white/30 font-bold uppercase tracking-[0.3em] text-[9px] hover:text-white transition-all"
                   >
                     Gå tillbaka
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Custom Idea Modal (Card 4) */}
      <AnimatePresence>
        {showCustomIdeaModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10006] flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl"
            onClick={() => setShowCustomIdeaModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl glass-panel rounded-[2.5rem] p-10 relative border border-white/10 shadow-[0_0_100px_rgba(15,76,58,0.1)] overflow-hidden"
            >
              {/* Background ambient glow - Pink for card 4 */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[120px] opacity-10 bg-[#0F4C3A] pointer-events-none"
              />

              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setShowCustomIdeaModal(false); }}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                {ideaStep === 0 ? (
                  <>
                    <div className="mb-10 text-left">
                      <div className="w-12 h-1 px-3 rounded-full mb-8 bg-gradient-to-r from-[#0F4C3A] to-transparent" />
                      <h3 className="text-4xl font-black text-white tracking-tighter italic mb-4">Berätta om din idé</h3>
                      <p className="text-white/60 text-lg leading-relaxed font-light">"Har du en idé eller ett problem du vill lösa? Vi hjälper dig att bygga en skräddarsydd lösning - enkelt och utan krångel."</p>
                    </div>

                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setLoadingCard("CustomIdea");
                      try {
                        await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json", "Accept": "application/json" },
                          body: JSON.stringify({
                            Namn: formData.fullName,
                            "E-post": formData.email,
                            "Företag": formData.organization || "Ej angivet",
                            "Behovstyp": formData.orgType,
                            "Beskrivning": ideaText,
                            "Subject": "New Custom Request - SmartArtAI"
                          }),
                        });
                        setIdeaStep(1);
                      } catch (error) {
                        console.error(error);
                      } finally {
                        setLoadingCard(null);
                      }
                    }} className="space-y-6">
                      <div className="space-y-2">
                         <label className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-black pl-4">Vad vill du uppnå? (valfritt)</label>
                         <textarea 
                           placeholder="Beskriv kort din idé eller utmaning..."
                           value={ideaText}
                           onChange={(e) => setIdeaText(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#0F4C3A] transition-all min-h-[120px] resize-none text-[15px]"
                         />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" placeholder="Namn" required
                          value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#0F4C3A] transition-all"
                        />
                        <input 
                          type="email" placeholder="E-post *" required
                          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#0F4C3A] transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" placeholder="Företag (valfritt)"
                          value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#0F4C3A] transition-all"
                        />
                        <div className="relative">
                          <select 
                            required
                            value={formData.orgType} onChange={e => setFormData({...formData, orgType: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white/60 focus:outline-none focus:border-[#0F4C3A] transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Typ av behov *</option>
                            <option value="Automation">Automation</option>
                            <option value="Webbplats">Webbplats</option>
                            <option value="AI-lösning">AI-lösning</option>
                            <option value="Integration">Integration</option>
                            <option value="Annat">Annat</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 text-xs">▼</div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          disabled={loadingCard === "CustomIdea"}
                          className="w-full py-5 rounded-2xl bg-[#0F4C3A] text-white font-black uppercase tracking-[0.3em] text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(15,76,58,0.4)] disabled:opacity-50"
                        >
                          {loadingCard === "CustomIdea" ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Skicka förfrågan"}
                        </button>
                        <p className="text-[10px] text-white/30 text-center mt-4 italic font-light">"Det är helt kostnadsfritt att få ett första förslag."</p>
                      </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#0F4C3A]/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(15,76,58,0.4)]">
                       <CheckCircle2 className="w-10 h-10 text-[#0F4C3A]" />
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter italic mb-4 uppercase">Tack!</h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-sm italic">
                      "Vi återkommer inom 24 timmar med ett förslag."
                    </p>
                    <button 
                      onClick={() => setShowCustomIdeaModal(false)}
                      className="mt-12 px-10 py-4 rounded-full border border-white/20 text-white/50 hover:text-white hover:bg-white/10 transition-all font-mono text-xs uppercase tracking-widest"
                    >
                      Stäng
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
