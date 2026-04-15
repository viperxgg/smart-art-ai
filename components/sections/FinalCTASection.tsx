"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import MagneticButton from "@/components/ui/MagneticButton";
import { Terminal, Heart, X, Loader2, CheckCircle2, Calendar } from "lucide-react";

export default function FinalCTASection() {
  const t = useTranslations("FinalCTA");
  const tr = useTranslations("Trust");
  const ts = useTranslations("Solutions");

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [showModal]);

  const logos = [
    { name: "rsmhfjallsjo.se", color: "text-white" },
    { name: "Granne", color: "text-white" },
  ];

  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Client Logos Header */}
        <div className="flex flex-col items-center mb-16">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic text-center w-full"
           >
             {tr("proud_participation")}
           </motion.p>
           <div className="flex items-center gap-12 md:gap-24 opacity-40">
           {logos.map((logo, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-4xl md:text-6xl font-black tracking-tighter text-white"
             >
               {logo.name}
             </motion.div>
           ))}
           </div>
        </div>

        {/* Trust Capsule */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-[9px] uppercase tracking-[0.4em] font-black mb-12 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
        >
          <Terminal className="w-3 h-3 text-cyan-400" />
          {tr("micro_trust")}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] max-w-4xl"
        >
          {t("title")}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div onClick={() => setShowModal(true)}>
            <MagneticButton>
              {t("button")}
            </MagneticButton>
          </div>
        </motion.div>

        {/* After Sales / Satisfaction Part */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
           <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mb-4" />
           <div className="flex items-center gap-3 text-[#FF007F] font-black text-sm uppercase tracking-[0.2em] italic">
             <Heart className="w-4 h-4 fill-[#FF007F]" />
             <span>After Sales Service</span>
           </div>
           <p className="text-white/60 text-sm font-medium italic">
             "{tr("after_sales")}"
           </p>
        </motion.div>

      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 !z-[10007] flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass-panel rounded-[2.5rem] p-10 relative border border-white/10 shadow-[0_0_100px_rgba(0,123,255,0.1)] overflow-hidden"
            >
              <button 
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all z-50 cursor-pointer pointer-events-auto shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 text-left">
                {!success ? (
                  <>
                    <div className="mb-10">
                      <div className="flex items-center gap-3 text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Boka Demo</span>
                      </div>
                      <h3 className="text-4xl font-black text-white tracking-tighter italic mb-4 whitespace-nowrap">Redo för nästa steg?</h3>
                      <p className="text-white/50 text-base leading-relaxed font-light italic">"Låt oss titta på hur vi kan automatisera din verksamhet och spara tid från dag ett."</p>
                    </div>

                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      try {
                        await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json", "Accept": "application/json" },
                          body: JSON.stringify({
                            Namn: formData.name,
                            "E-post": formData.email,
                            "Företag": formData.company || "Ej angivet",
                            "Meddelande": formData.message || "Boka demo förfrågan",
                            "Tjänst": "Allmän Demo/Förfrågan",
                            "Subject": "New Demo Request – Final CTA"
                          }),
                        });
                        setSuccess(true);
                      } catch (error) {
                        console.error(error);
                      } finally {
                        setLoading(false);
                      }
                    }} className="space-y-4">
                      <input 
                        type="text" placeholder={ts("form_name")} required
                        value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-all font-mono text-sm"
                      />
                      <input 
                        type="email" placeholder={ts("form_email")} required
                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-all font-mono text-sm"
                      />
                      <input 
                        type="text" placeholder={ts("form_company")}
                        value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-all font-mono text-sm"
                      />
                      
                      <div className="pt-4">
                        <button 
                          type="submit"
                          disabled={loading}
                          className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-black uppercase tracking-[0.3em] text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] disabled:opacity-50"
                        >
                          {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Skicka Bokningsförfrågan"}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                       <CheckCircle2 className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter italic mb-4 uppercase italic">Process initierad</h3>
                    <p className="text-white/50 text-lg leading-relaxed max-w-sm italic">
                      "Vi har tagit emot din förfrågan. Vi återkommer inom kort för att boka in en tid."
                    </p>
                    <button 
                      onClick={() => { setShowModal(false); setSuccess(false); }}
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
