"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function MenuContact() {
  const t = useTranslations("SmartMenu");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    restaurant: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Product": "Smart Menu Experience",
          "Namn": formData.name,
          "Restaurang": formData.restaurant,
          "E-post": formData.email,
          "Meddelande": formData.message,
          "Subject": `New Smart Menu Lead – ${formData.restaurant}`
        }),
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-[#f8f9fa]" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden text-center">
           {!success ? (
             <>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                 {t("contact_title")}
               </h2>
               <p className="text-gray-500 font-light mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                 {t("hero_subtitle")}
               </p>

               <form onSubmit={handleSubmit} className="space-y-6 text-left">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] pl-1">{t("form_name")}</label>
                     <input 
                       required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                       type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all text-sm" 
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] pl-1">{t("form_rest")}</label>
                     <input 
                       required value={formData.restaurant} onChange={e => setFormData({...formData, restaurant: e.target.value})}
                       type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all text-sm" 
                     />
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] pl-1">{t("form_email")}</label>
                   <input 
                     required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                     type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all text-sm" 
                   />
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] pl-1">{t("form_msg")}</label>
                   <textarea 
                     rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all resize-none text-sm"
                   ></textarea>
                 </div>

                 <button 
                   disabled={loading}
                   type="submit" 
                   className="w-full py-5 bg-black text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-50"
                 >
                   {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                   {t("form_btn")}
                 </button>
               </form>
             </>
           ) : (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
               className="py-12 flex flex-col items-center"
             >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mb-8">
                   <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Tack! VI har mottagit din förfrågan.</h3>
                <p className="text-gray-500 font-light">Vi återkommer till dig inom 24 timmar.</p>
             </motion.div>
           )}
        </div>

      </div>
    </section>
  );
}
