import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, MessageSquare, Flame, Sparkles } from "lucide-react";

interface TestimonialsSliderProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

interface Testimonial {
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  textAr: string;
  textEn: string;
  companyAr: string;
  companyEn: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    nameAr: "طارق الشهابي",
    nameEn: "Tarek Al-Shehabi",
    roleAr: "مخرج فني أول مستقل",
    roleEn: "Senior Art Director",
    companyAr: "استوديوهات بيكسل هاب، دبي",
    companyEn: "PixelHub Studios, Dubai",
    textAr: "المسار التوليدي المتقدم مع أمير كان بمثابة قفزة كوانتية في مسيرتي. تمكنت من تسريع إخراج البيئات ثلاثية الأبعاد المعقدة بأكثر من 10 أضعاف، والفوز بمناقصات تصميم دولية بفضل الدقة المتناهية للأوامر الإبداعية.",
    textEn: "The generative masterclass with Amir was a quantum leap in my career. I managed to accelerate complex 3D environment concepts by over 10x, winning major international pitches with sheer precision.",
    rating: 5
  },
  {
    nameAr: "مريم الفايد",
    nameEn: "Mariam Al-Fayed",
    roleAr: "استشارية هويات بصرية",
    roleEn: "Brand Identity Consultant",
    companyAr: "الوكالة الإبداعية الحديثة، القاهرة",
    companyEn: "Modern Brand Agency, Cairo",
    textAr: "بدلاً من مجرد شرح الأزرار، علمتني الأكاديمية فلسفة التوجيه البصري لبناء لغة بصرية متكاملة وثابتة للعلامات التجارية. مكتبة وأدوات تحسين الأوامر في أمير ستوديو هي كنز سري حقيقي للمحترفين.",
    textEn: "Instead of just explaining UI, the academy taught me the visual philosophy needed to construct unified brand systems. Amir's Prompt Hub is an indispensable secret vault for creative professionals.",
    rating: 5
  },
  {
    nameAr: "جاك موريس",
    nameEn: "Jack Morris",
    roleAr: "مدير إبداع الذكاء الاصطناعي",
    roleEn: "AI Creative Director",
    companyAr: "سينيماتيك إف إكس، لندن",
    companyEn: "Cinematic FX, London",
    textAr: "كنت متشككاً في البداية، لكن المنهج الدراسي هنا صارم ومبني على أسس فنية حقيقية وفهم مذهل لكاميرات التصوير والضوء الحجمي. المطور أمير يقدم رؤية مستقبلية تندمج بسلاسة مع سيناريوهات الإنتاج الدولية.",
    textEn: "I was skeptical at first, but the curriculum is rigorous, built on actual cinematography standards and volumetric light systems. Amir Studio delivers a vision that meshes perfectly with premium production pipelines.",
    rating: 5
  },
  {
    nameAr: "ليلى العثمان",
    nameEn: "Layla Al-Othman",
    roleAr: "مهندسة تصميم توليدي سينمائي",
    roleEn: "Generative Cinema Engineer",
    companyAr: "مجموعة الإنتاج المرئي، الرياض",
    companyEn: "Visual Production Group, Riyadh",
    textAr: "المتابعة اليومية والنقد البصري للمشاريع تحت إشراف أمير كان مذهلاً. فهمت كيفية التحكم الكامل بالـ Seeds وتدوير زوايا الكاميرا في Runway وصناعة مشاهد متكاملة. أنصح بشدة بهذا المسار الفاخر!",
    textEn: "The daily critiques and project advisory under Amir's close guidance were stellar. I learned exactly how to master seeds, motion brush in Runway, and orchestrate cinematic pieces. Highly recommended!",
    rating: 5
  }
];

export default function TestimonialsSlider({ isArabic, isDarkMode }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <div className="w-full relative mt-16 max-w-4xl mx-auto">
      {/* Testimonial Header Decors */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full w-fit mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#bd00ff]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#bd00ff] mr-1 ml-1">
            {isArabic ? "آراء نخبة خريجينا" : "PROUD ALUMNI COMMENDATIONS"}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-brand font-bold text-white tracking-tight">
          {isArabic ? "ماذا يقول شركاء النجاح؟" : "Voices of Creative Expansion"}
        </h3>
        <p className="text-xs text-slate-400 mt-2 max-w-lg">
          {isArabic 
            ? "قصص نجاح ومشاريع حقيقية تم تفعيلها وتطويرها مباشرة في استوديو أمير." 
            : "Real success stories and design breakthroughs engineered inside our academy ecosystem."}
        </p>
      </div>

      {/* Main Slider Panel */}
      <div className={`relative min-h-[300px] md:min-h-[260px] p-6 sm:p-10 rounded-3xl border overflow-hidden flex flex-col justify-between ${
        isDarkMode 
          ? "bg-slate-950/70 border-slate-900 shadow-xl shadow-cyan-500/5" 
          : "bg-white border-slate-200 shadow-md"
      }`}>
        
        {/* Absolute Glowing Ambient backdrop */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[80px]" />
        
        {/* Large Cinematic Quotation Icon mark */}
        <div className={`absolute top-6 right-6 ${isArabic ? "left-6 right-auto" : "right-6"}`}>
          <MessageSquare className={`w-20 h-20 opacity-5 pointer-events-none transform rotate-180 ${
            isDarkMode ? "text-cyan-400" : "text-slate-500"
          }`} />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6 flex-1 flex flex-col justify-between relative z-10"
          >
            {/* Stars rating */}
            <div className="flex items-center space-x-1">
              {[...Array(item.rating)].map((_, i) => (
                <Flame key={i} className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse shrink-0" />
              ))}
            </div>

            {/* Testimonial Message */}
            <blockquote className="text-sm sm:text-base md:text-lg font-medium leading-relaxed italic text-slate-100 pr-1 select-none">
              "{isArabic ? item.textAr : item.textEn}"
            </blockquote>

            {/* Author Profile */}
            <div className={`flex items-center space-x-3 mt-4 ${isArabic ? "flex-row-reverse space-x-reverse text-right" : "flex-row text-left"}`}>
              {/* Profile Avatar simulation with letters */}
              <div className="w-12 h-12 bg-gradient-to-tr from-[#00f0ff]/20 via-[#bd00ff]/20 to-blue-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center font-brand font-black text-sm text-cyan-300 shadow-md">
                {isArabic ? item.nameAr[0] : item.nameEn[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-white text-sm sm:text-base">
                  {isArabic ? item.nameAr : item.nameEn}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {isArabic ? item.roleAr : item.roleEn} • <span className="text-[#00f0ff] font-medium">{isArabic ? item.companyAr : item.companyEn}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Controller Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-6 mt-4 border-t border-slate-900/30 select-none z-20">
          <button 
            onClick={handlePrev}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode 
                ? "bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white" 
                : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
            }`}
            title="السابق / Previous"
          >
            <ChevronLeft className="w-5 h-5 shrink-0" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex items-center space-x-1.5 px-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? "w-6 bg-[#00f0ff]" 
                    : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode 
                ? "bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white" 
                : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
            }`}
            title="التالي / Next"
          >
            <ChevronRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
}
