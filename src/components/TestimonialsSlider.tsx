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
    nameAr: "أحمد الشناوي",
    nameEn: "Ahmed El-Shenawy",
    roleAr: "مخرج وصانع أفلام بالذكاء الاصطناعي",
    roleEn: "AI Film Director & Creator",
    companyAr: "مرفأ الإخراج الإبداعي، القاهرة",
    companyEn: "Creative Hub, Cairo",
    textAr: "بعد حضور كورس الإنتاج السينمائي والتحكم البصري، تمكنت من صناعة فيلمي القصير الأول بالكامل باستخدام Runway و Midjourney. الدقة الفلسفية للأكاديمية والتدريب على الضوء الحجمي والكاميرات غيرت قواعد اللعبة بالنسبة لي كصانع أفلام في مصر.",
    textEn: "After attending the Cinematic Production and Visual Control course, I directed my first short film completely with Runway and Midjourney. The academy's cinematic light principles completely changed the game for me.",
    rating: 5
  },
  {
    nameAr: "ياسمين صبري",
    nameEn: "Yasmine Sabry",
    roleAr: "مهندسة معمارية ومصممة بيئات توليدية",
    roleEn: "Architect & Generative Environment Designer",
    companyAr: "استوديو مدارات التصميم، الجيزة",
    companyEn: "Madarat Design, Giza",
    textAr: "الفوز بالمنافسات المعمارية أصبح أسهل بمراحل. أدوات مكتبة الأوامر ودقة الصياغة الخاصة بأمير ستوديو مكنتني من استعراض واجهات مستقبلية وتفاصيل خامات واقعية للعملاء بأعلى دقة وفي دقائق معدودة.",
    textEn: "Winning architectural bids became so much smoother. The prompt library from Amir Studio empowered me to generate futuristic facades and hyper-realistic material details for clients in mere minutes.",
    rating: 5
  },
  {
    nameAr: "عمر الرويلي",
    nameEn: "Omar Al-Rowaily",
    roleAr: "مستشار تطوير ذكاء اصطناعي وأتمتة إبداعية",
    roleEn: "AI Automation & Creative Consultant",
    companyAr: "تيك فيوتشر، الرياض",
    companyEn: "TechFuture, Riyadh",
    textAr: "منهج الأكاديمية لا يعلمك فقط كتابة نصوص، بل كيف تعيد رسم العمليات الإنتاجية داخل مؤسستك. تمكنا من أتمتة صناعة المواد الدعائية بجودة مذهلة ووفرنا آلاف الساعات بفضل استراتيجيات الأوامر المحكمة.",
    textEn: "The Academy doesn't just teach you prompts; it rebuilds production workflows. We automated ad creation with incredible quality, saving thousands of hours using tactical visual directing strategies.",
    rating: 5
  },
  {
    nameAr: "نور الدين مصطفى",
    nameEn: "Nour El-Din Mostafa",
    roleAr: "مدير إبداعي وكاتب نصوص إعلانية",
    roleEn: "Creative Director & Copywriter",
    companyAr: "وكالة وميض للدعاية، الإسكندرية",
    companyEn: "Wameed Agency, Alexandria",
    textAr: "عشت لسنوات أعتمد على العصف الذهني التقليدي، لكن الكورسات هنا فتحت لي أبواباً لا حصر لها في توجيه النماذج اللغوية وهندسة الأوامر لابتكار حملات تسويقية متكاملة تخاطب الجمهور المصري بامتياز وبسرعة فائقة.",
    textEn: "I spent years relying on traditional brainstorming, but the courses here opened infinite doors in prompt engineering to craft targeted advertising campaigns that perfectly capture local nuances in record time.",
    rating: 5
  },
  {
    nameAr: "فاطمة الجودر",
    nameEn: "Fatima Al-Jowder",
    roleAr: "مصممة واجهات ومطور تفاعلي",
    roleEn: "UI/UX Designer & Interactive Developer",
    companyAr: "بوابة البحرين التقنية، المنامة",
    companyEn: "Bahrain Tech Gate, Manama",
    textAr: "الأكاديمية قدمت مفهومًا ثوريًا لدمج الذكاء الاصطناعي التوليدي في تصميم تجارب المستخدم الراقية. مكتبة الأوامر هي مرجعي اليومي لصياغة أفكار واجهات تطبيقات استثنائية وجاذبة للمستخدمين.",
    textEn: "The academy introduced a revolutionary concept of integrating generative AI with exquisite UI/UX design. The Prompts Library is now my daily baseline for designing beautiful application concepts.",
    rating: 5
  },
  {
    nameAr: "سلطان المرزوقي",
    nameEn: "Sultan Al-Marzooqi",
    roleAr: "أخصائي صناعة محتوى رقمي ووسائط متعددة",
    roleEn: "Digital Content & Multimedia Specialist",
    companyAr: "مبدعو المستقبل، دبي",
    companyEn: "Future Creators, Dubai",
    textAr: "قفزة عملاقة في جودة المحتوى البصري لدبي ومشاريعنا الإعلانية. تعلمنا كيف نصنع نماذج وتدريبات خاصة مدمجة مع أدوات الـ AI للوصول لثبات مذهل في المظهر العام وشخصيات العلامة التجارية الموحدة.",
    textEn: "A giant leap in the quality of our visual content and advertising in Dubai. We learned how to build custom visual guidelines with AI to ensure robust consistency across unified brand characters.",
    rating: 5
  },
  {
    nameAr: "خالد الورفلي",
    nameEn: "Khaled Al-Warfali",
    roleAr: "مصمم جرافيك ومطور هويات بصرية",
    roleEn: "Graphic Designer & Brand Developer",
    companyAr: "تريبل ميديا، طرابلس",
    companyEn: "Triple Media, Tripoli",
    textAr: "رغم عملي المستقل في طرابلس، إلا أن الانضمام لمجتمع خريجي أمير ستوديو أتاح لي الوصول لنفس المستوى البصري للوكالات العالمية. الكورسات عملية ومباشرة، ومكتبة الأوامر تختصر نصف وقت العمل اليومي.",
    textEn: "Though freelancing in Tripoli, joining Amir Studio alumni brought me up to the visual standards of top multinational agencies. The courses are practical, saving half my daily design hours.",
    rating: 5
  },
  {
    nameAr: "أمينة بوقرة",
    nameEn: "Amina Bouguerra",
    roleAr: "فنانة رقمية ورسامة وسائط توليدية",
    roleEn: "Digital Artist & Generative Illustrator",
    companyAr: "استوديو الأوراس للفنون، الجزائر",
    companyEn: "Aurès Art Studio, Algiers",
    textAr: "الأكاديمية علمتني كيف أحافظ على لمستي الفنية الخاصة وأوجه الذكاء الاصطناعي لإنتاج أعمال فنية مدمجة بجودة فائقة وبدقة عرض خارقة. مكتبة الأوامر الفنية هنا بمثابة مفتاح سحري لعالم الابتكار.",
    textEn: "The academy taught me how to retain my artistic signature while driving AI models to output flawless high-resolution art. The creative Prompt Hub is literally a skeleton key to limitless imagination.",
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
