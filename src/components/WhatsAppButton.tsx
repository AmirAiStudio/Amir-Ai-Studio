import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Heart } from "lucide-react";

interface WhatsAppButtonProps {
  isArabic: boolean;
}

export default function WhatsAppButton({ isArabic }: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "201144240400";
  const presetMessage = isArabic
    ? "مرحباً استوديو أمير للذكاء الاصطناعي! أود الاستفسار عن تفاصيل الحجز، الرسوم وإجراءات الانتساب المتاحة بالأكاديمية."
    : "Hello Amir AI Studio! I am interested in joining your premium AI Academy. I would like to learn about the registration and pricing structures.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(presetMessage)}`;

  return (
    <div className={`fixed bottom-6 z-50 flex items-center ${isArabic ? "left-6 flex-row-reverse" : "right-6 flex-row"}`}>
      
      {/* Dynamic Animated Attention Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: isArabic ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`relative mx-3.5 px-4.5 py-3 rounded-2xl text-[11.5px] font-sans font-medium shadow-2xl border flex flex-col max-w-[210px] pointer-events-auto bg-[#040c21]/70 backdrop-blur-md text-white border-emerald-500/20 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* Pulsing visual tag */}
            <div className={`flex items-center space-x-1.5 mb-1.5 ${isArabic ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] font-mono tracking-wider text-emerald-400 uppercase">
                {isArabic ? "مستشار القبول" : "ADMISSIONS HELPDESK"}
              </span>
            </div>
            
            <p className="leading-relaxed whitespace-pre-line text-slate-100 font-sans font-bold text-xs">
              {isArabic 
                ? `لديك سؤال؟
تواصل مع أمير مباشرة الآن` 
                : "Questions? Ask Amir directly via WhatsApp Chat"}
            </p>
            
            {/* Close trigger button */}
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white leading-none cursor-pointer p-1"
              style={{ fontSize: "11px" }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Concentric Glowing WhatsApp circle frame */}
      <div className="relative group">
        
        {/* Glowing background circles pulsing */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 blur-[6px] opacity-75 group-hover:scale-110 transition-all duration-300 animate-pulse" />
        <span className="absolute -inset-2.5 rounded-full bg-emerald-500/10 blur-[12px] opacity-50 pointer-events-none animate-ping" />

        {/* Real Hyperlink Anchor Tag */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowTooltip(false)}
          className="relative w-14 h-14 bg-gradient-to-tr from-emerald-500 via-green-500 to-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95 cursor-pointer border border-emerald-400"
          title={isArabic ? "تواصل معنا مباشرة عبر واتساب" : "WhatsApp Direct Advisory"}
        >
          {/* Custom high-contrast responsive SVG icon */}
          <svg
            className="w-7 h-7 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.154-.172.206-.297.308-.497.102-.2.05-.375-.025-.526-.075-.15-.67-1.614-.917-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
