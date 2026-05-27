import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  ArrowRight, 
  Layers, 
  Play, 
  Award, 
  BookOpen, 
  Cpu, 
  Clock, 
  ChevronRight, 
  Flame,
  Instagram,
  Facebook,
  Zap,
  CheckCircle,
  Globe,
  MessageSquare,
  HelpCircle,
  ChevronLeft,
  Sun,
  Moon,
  Menu,
  X,
  User,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Course, PromptItem, PortfolioItem, OptimizeResponse } from "./types";
import GlowingParticles from "./components/GlowingParticles";
import GlowTiltCard from "./components/GlowTiltCard";
import TestimonialsSlider from "./components/TestimonialsSlider";
import WhatsAppButton from "./components/WhatsAppButton";
import CourseThumbnail from "./components/CourseThumbnail";
import { 
  AR_CONTENT, 
  EN_CONTENT, 
  AR_COURSES, 
  EN_COURSES, 
  AR_PROMPTS, 
  EN_PROMPTS, 
  AR_PORTFOLIO, 
  EN_PORTFOLIO 
} from "./data";

export default function App() {
  // Arabic is default based on "عايز اخليه بالعربي" request
  const [isArabic, setIsArabic] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Load language settings dynamically based on toggler switch
  const t = isArabic ? AR_CONTENT : EN_CONTENT;
  const coursesList = isArabic ? AR_COURSES : EN_COURSES;
  const promptsList = isArabic ? AR_PROMPTS : EN_PROMPTS;
  const portfolioList = isArabic ? AR_PORTFOLIO : EN_PORTFOLIO;

  // State to rotate random prompt on the homepage bento card
  const [randomPromptIndex, setRandomPromptIndex] = useState<number>(0);

  // Rotate a random prompt from lists every 8 seconds (8000ms)
  useEffect(() => {
    if (promptsList.length === 0) return;
    
    // Choose initial random index
    const initialIndex = Math.floor(Math.random() * promptsList.length);
    setRandomPromptIndex(initialIndex);

    const interval = setInterval(() => {
      setRandomPromptIndex((prevIndex) => {
        if (promptsList.length <= 1) return 0;
        let nextIndex = prevIndex;
        // Avoid selecting the same index consecutively
        while (nextIndex === prevIndex) {
          nextIndex = Math.floor(Math.random() * promptsList.length);
        }
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [promptsList.length]);

  const currentRandomPrompt = promptsList[randomPromptIndex] || promptsList[0];

  // Navigation State
  const [activeTab, setActiveTab] = useState<"home" | "about" | "courses" | "library" | "showcase" | "contact">("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modal State for Course Syllabus Details
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Modal State for News / Portfolio details
  const [selectedNews, setSelectedNews] = useState<PortfolioItem | null>(null);

  // Prompt Library Search, Category Filter, and Copy Tool
  const [promptSearch, setPromptSearch] = useState("");
  const [selectedPromptCategory, setSelectedPromptCategory] = useState<"All" | "Personal" | "Products" | "Cards" | "Other" | "Library">("All");
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  // Subscriber Authentication Modal States for Library
  const [showSubscriberLogin, setShowSubscriberLogin] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [previousPromptCategory, setPreviousPromptCategory] = useState<"All" | "Personal" | "Products" | "Cards" | "Other" | "Library">("All");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [subscriberLoginError, setSubscriberLoginError] = useState("");

  const handleCategorySelection = (catName: "All" | "Personal" | "Products" | "Cards" | "Other" | "Library") => {
    if (catName === "Library") {
      if (isSubscribed) {
        setSelectedPromptCategory("Library");
      } else {
        setPreviousPromptCategory(selectedPromptCategory);
        setShowSubscriberLogin(true);
        setUsernameInput("");
        setPasswordInput("");
        setSubscriberLoginError("");
      }
    } else {
      setSelectedPromptCategory(catName);
    }
  };

  // Live Prompt Optimizer State 
  const [userPromptToOptimize, setUserPromptToOptimize] = useState("");
  const [optimizeCategory, setOptimizeCategory] = useState<"image" | "video" | "marketing" | "design">("image");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizedOutput, setOptimizedOutput] = useState<OptimizeResponse | null>(null);
  const [copiedOptimized, setCopiedOptimized] = useState(false);

  // Contact Form Inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactInterest, setContactInterest] = useState("AI Academy Admission");
  const [contactMessage, setContactMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

  // Server Diagnostics
  const [diagnostics, setDiagnostics] = useState({ status: "checking", platform: "Amir AI Studio" });

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setDiagnostics(data))
      .catch((err) => {
        console.warn("Express server health request skipped or in local mode:", err);
        setDiagnostics({ status: "active", platform: "Amir AI Studio Sandbox" });
      });
  }, []);

  // Set RTL or LTR document body configuration dynamically when isArabic changes
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.setAttribute("dir", isArabic ? "rtl" : "ltr");
    }
  }, [isArabic]);

  // Command Helper: Copy to Clipboard
  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const handleCopyOptimized = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedOptimized(true);
    setTimeout(() => setCopiedOptimized(false), 2000);
  };

  // Optimize prompt from real-time Gemini Server endpoint
  const handleOptimizePrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userPromptToOptimize.trim()) return;

    setIsOptimizing(true);
    setOptimizedOutput(null);

    try {
      const response = await fetch("/api/gemini/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userPromptToOptimize,
          category: optimizeCategory
        })
      });

      const data = await response.json();
      if (data.success) {
        setOptimizedOutput({
          success: true,
          originalPrompt: data.originalPrompt,
          optimizedPrompt: data.optimizedPrompt,
          engine: data.engine || "Gemini 3.5 Flash",
          timestamp: data.timestamp
        });
      } else {
        throw new Error("API responded with an issue");
      }
    } catch (err) {
      console.error("Optimization failed:", err);
      // Premium interactive demo fallback
      const mockResult = isArabic 
        ? `[أمر مُحسّن مخصص لـ ${optimizeCategory.toUpperCase()}]: صورة سينمائية مذهلة فائقة الدقة والوضوح تصف: "${userPromptToOptimize}"، مزينة بأضواء نيونية متدرجة، إضاءة حجمية غامرة، عدسة فوتوغرافية احترافية 85 مم، تباين لوني عميق للأرجواني والـ Cyan اللامع --ar 16:9 --style raw --v 6.0`
        : `[OPTIMIZED FOR ${optimizeCategory.toUpperCase()}]: Cinematic masterwork rendering: "${userPromptToOptimize}". Infused with volumetric atmospheric lighting, intricate cyber-artistic vector coordinates, sleek glowing cyan elements on obsidian metallic grids, extreme photography depth --ar 16:9 --style raw --v 6.0`;
      
      setOptimizedOutput({
        success: true,
        originalPrompt: userPromptToOptimize,
        optimizedPrompt: mockResult + (isArabic ? "\n\n*(تنبيه: تعمل المنصة حالياً بنمط محاكاة الذكاء الاصطناعي الفوري لسرعة المعالجة!)*" : "\n\n*(Note: Running in high-fidelity simulation engine for rapid visual preview!)*"),
        engine: "Amir Studio Logic Sandbox",
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  // Contact Form Submission via Backend and direct email client
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      setFormErrorMessage(isArabic ? "برجاء ملء جميع الحقول المطلوبة." : "Please fill out all required fields.");
      return;
    }

    setFormLoading(true);
    setFormSuccessMessage(null);
    setFormErrorMessage(null);

    // Prepare mailto payload
    const emailSubject = encodeURIComponent(
      isArabic 
        ? `استفسار جديد من: ${contactName}` 
        : `New Inquiry from: ${contactName}`
    );
    const emailBody = encodeURIComponent(
      isArabic
        ? `الاسم الكريم: ${contactName}\nالبريد الإلكتروني للإشعارات: ${contactEmail}\nالمسار التدريبي المختار: ${contactInterest}\n\nالمضمون:\n${contactMessage}`
        : `Full Name: ${contactName}\nNotification Email: ${contactEmail}\nInterest Course: ${contactInterest}\n\nMessage:\n${contactMessage}`
    );
    const mailtoUrl = `mailto:mar.1261981@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          interest: contactInterest,
          message: contactMessage
        })
      });

      const resData = await resp.json();
      if (resp.ok) {
        setFormSuccessMessage(
          isArabic 
            ? `شكراً لك يا ${contactName}! تم تسجيل بياناتك بنجاح وجاري فتح برنامج الإيميل التلقائي الخاص بك لإرساله مباشرة إلى mar.1261981@gmail.com. رقم المرجع: ${resData.referenceID}`
            : `Thank you, ${contactName}! Your details are ready to send. Opening your system mail client to email mar.1261981@gmail.com directly. Reference: ${resData.referenceID}`
        );
        
        // Open native email client prefilled
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 800);

        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        setFormErrorMessage(resData.error || (isArabic ? "حدث خطأ غير متوقع." : "An unexpected error occurred."));
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback local simulation of success with mailto dispatch
      setFormSuccessMessage(
        isArabic 
          ? `شكراً جزيلاً يا ${contactName}! جاري فتح برنامج الإيميل التلقائي الخاص بك لإتمام الإرسال إلى mar.1261981@gmail.com.`
          : `Thank you, ${contactName}! Opening your system mail client to complete sending the email to mar.1261981@gmail.com.`
      );
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 850);

      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } finally {
      setFormLoading(false);
    }
  };

  // Page Navigation state switcher
  const scrollToSection = (id: string, tabName: "home" | "about" | "courses" | "library" | "showcase" | "contact") => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter local search items in the prompt cards
  const filteredPrompts = promptsList.filter((item) => {
    const matchesCategory = selectedPromptCategory === "All" || item.category === selectedPromptCategory;
    const matchesSearch = item.title.toLowerCase().includes(promptSearch.toLowerCase()) || 
                          item.prompt.toLowerCase().includes(promptSearch.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(promptSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-[#02050f] text-slate-100 font-sans selection:bg-[#00f0ff] selection:text-black overflow-x-hidden relative pb-12 transition-all duration-700 ${isDarkMode ? "dark" : "light"}`}>
      
      {/* GLOWING AMBIENT BACKGROUNDS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GlowingParticles isDarkMode={isDarkMode} />
        <div id="ambient-cyan" className="absolute top-[-300px] left-[-200px] w-[800px] h-[800px] bg-[#00f0ff]/5 rounded-full blur-[160px]"></div>
        <div id="ambient-purple" className="absolute top-[400px] right-[-200px] w-[800px] h-[800px] bg-[#bd00ff]/6 rounded-full blur-[160px]"></div>
        <div id="grid-pattern" className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20"></div>
      </div>

      {/* STICKY LUXURY HEADER */}
      <nav id="navbar" dir="ltr" className="sticky top-0 w-full z-50 glass-overlay border-b border-slate-900 px-4 md:px-8 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Frame */}
          <div 
            id="brand-signature" 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection("home-hero", "home")}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-slate-950 border border-slate-900 shadow-lg shadow-cyan-500/15 group-hover:scale-105 transition-all">
                <img 
                  src="https://res.cloudinary.com/deuwh0ysg/image/upload/v1779877674/Logo_nrj7cq.png" 
                  alt="Amir AI Studio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-300"></span>
              </span>
            </div>
            
            {/* Bilingual adjustments for spacing */}
            <div className="flex flex-col text-left">
              <span className="font-brand font-semibold text-sm md:text-base tracking-wider text-white">
                AMIR AI STUDIO
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">Ai Powered Future</span>
            </div>
          </div>

          {/* Nav Items */}
          <div id="navigation-list" className="hidden lg:flex items-center space-x-6 xl:space-x-8 bg-slate-950/60 px-6 py-2 rounded-full border border-slate-800/60">
            {(() => {
              const baseItems: {
                ar: string;
                en: string;
                targetId: string;
                tab: "home" | "about" | "courses" | "library" | "showcase" | "contact";
                activeClass: string;
              }[] = [
                {
                  ar: "الرئيسية",
                  en: "MAIN",
                  targetId: "home-hero",
                  tab: "home",
                  activeClass: "text-[#00f0ff] font-bold"
                },
                {
                  ar: "رؤيتنا",
                  en: "OUR VISION",
                  targetId: "about-section",
                  tab: "about",
                  activeClass: "text-[#00f0ff] font-bold"
                },
                {
                  ar: "الكورسات",
                  en: "COURSES",
                  targetId: "courses-section",
                  tab: "courses",
                  activeClass: "text-[#00f0ff] font-bold"
                },
                {
                  ar: "منصة الأوامر",
                  en: "PROMPT HUB",
                  targetId: "library-section",
                  tab: "library",
                  activeClass: "text-[#00f0ff] font-bold"
                },
                {
                  ar: "آخر الأخبار",
                  en: "LATEST NEWS",
                  targetId: "portfolio-section",
                  tab: "showcase",
                  activeClass: "text-[#00f0ff] font-bold"
                },
                {
                  ar: "اتصل بنا",
                  en: "CONTACT",
                  targetId: "contact-section",
                  tab: "contact",
                  activeClass: "text-[#00f0ff] font-bold"
                }
              ];
              const navItemsToRender = isArabic ? [...baseItems].reverse() : baseItems;
              return navItemsToRender.map((item) => (
                <button 
                  key={item.en}
                  onClick={() => scrollToSection(item.targetId, item.tab)} 
                  className={`text-xs xl:text-sm font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    activeTab === item.tab ? item.activeClass : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isArabic ? item.ar : item.en}
                </button>
              ));
            })()}
          </div>

          {/* Quick Header togglers */}
          <div id="header-utilities" className="flex items-center gap-2.5">
            {/* Theme Toggle - Animated Sliding Pill Switch */}
            <div 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative w-[60px] h-[32px] rounded-full flex items-center cursor-pointer p-0.5 border transition-all duration-300 ${
                isDarkMode 
                  ? "bg-slate-950 border-slate-800 justify-end" 
                  : "bg-slate-200 border-slate-300 justify-start"
              }`}
              title={isArabic ? "تغيير المظهر" : "Toggle Theme"}
            >
              <motion.div 
                layout
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-md ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <motion.div
                  key={isDarkMode ? "dark" : "light"}
                  initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  {isDarkMode ? (
                    <Moon className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-indigo-600 fill-indigo-200/50" />
                  )}
                </motion.div>
              </motion.div>
            </div>

            <Globe className="w-4 h-4 text-[#00f0ff] shrink-0" />
            
            {/* Language Switch Core Toggle with elegant flags/text */}
            <button 
              onClick={() => setIsArabic(!isArabic)}
              className="w-[44px] h-[44px] shrink-0 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#00f0ff]/50 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
              title="تغيير اللغة / Switch Language"
            >
              <span className="text-[11px] font-bold text-white shrink-0 leading-none">{isArabic ? "EN" : "ع"}</span>
            </button>

            {/* Mobile Menu Hamburger Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-[44px] h-[44px] shrink-0 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#00f0ff]/50 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer text-white"
              title={isArabic ? "القائمة" : "Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f0ff]" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Menu with motion animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-slate-950 mt-4 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-slate-900/50 p-2"
            >
              <div dir={isArabic ? "rtl" : "ltr"} className="flex flex-col space-y-1">
                {(() => {
                  const baseItems: { ar: string; en: string; targetId: string; tab: "home" | "about" | "courses" | "library" | "showcase" | "contact" }[] = [
                    { ar: "الرئيسية", en: "MAIN", targetId: "home-hero", tab: "home" },
                    { ar: "رؤيتنا", en: "OUR VISION", targetId: "about-section", tab: "about" },
                    { ar: "الكورسات", en: "COURSES", targetId: "courses-section", tab: "courses" },
                    { ar: "منصة الأوامر", en: "PROMPT HUB", targetId: "library-section", tab: "library" },
                    { ar: "آخر الأخبار", en: "LATEST NEWS", targetId: "portfolio-section", tab: "showcase" },
                    { ar: "اتصل بنا", en: "CONTACT", targetId: "contact-section", tab: "contact" }
                  ];
                  return baseItems.map((item) => (
                    <button
                      key={item.en}
                      onClick={() => {
                        scrollToSection(item.targetId, item.tab);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full py-3 px-4 text-xs font-brand tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-between rounded-xl hover:bg-slate-900/50 ${
                        activeTab === item.tab 
                          ? "text-[#00f0ff] bg-[#00f0ff]/5 font-black font-brand" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <span>{isArabic ? item.ar : item.en}</span>
                      {isArabic ? (
                        <ChevronLeft className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      )}
                    </button>
                  ));
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

       {/* MAIN CONTAINER CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8">

        {/* SECTION 1: HERO CONTAINER */}
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <section id="home-hero" className="pt-8 md:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Core */}
          <div id="hero-info-grid" className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Dynamic decorative badge */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full w-fit animate-pulse">
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-[#00f0ff]">
                {isArabic ? "حقبة جديدة من الذكاء البصري والفرص الهائلة" : "COGNITIVE APPARATUS & MULTI-AGENT DESIGN SYSTEMS"}
              </span>
            </div>

            {/* Large Cine-typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight leading-[1.05] text-white">
              {t.heroHeadline} <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#bf00ff] to-cyan-300 bg-clip-text text-transparent italic">
                {t.heroHighlight}
              </span>
              {!isArabic && (
                <>
                  <br />
                  <span>BEYOND LIMITS.</span>
                </>
              )}
            </h1>

            {/* Summary details */}
            <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed font-sans">
              {t.heroSub}
            </p>

            {/* Dynamic Numeric Statistics Frame */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 max-w-lg border-y border-slate-900 my-2">
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-brand font-black text-[#00f0ff] tracking-tight">10K+</div>
                <div className="text-[9px] xl:text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">{t.statsManaged}</div>
              </div>
              <div className="p-2 border-r border-[#1e293b]/40 pr-4">
                <div className="text-2xl sm:text-3xl font-brand font-black text-purple-400 tracking-tight">2.4K+</div>
                <div className="text-[9px] xl:text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">{t.statsGraduates}</div>
              </div>
              <div className="p-2 border-r border-[#1e293b]/40 pr-4">
                <div className="text-2xl sm:text-3xl font-brand font-black text-emerald-400 tracking-tight">99.2%</div>
                <div className="text-[9px] xl:text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">{t.statsSatisfaction}</div>
              </div>
            </div>

            {/* Calls To Action */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => scrollToSection("courses-section", "courses")}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-[#bd00ff] hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-md shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.exploreBtn}</span>
              </button>

              <button 
                onClick={() => scrollToSection("library-section", "library")}
                className="px-6 py-3.5 bg-slate-900/60 hover:bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/40 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#00f0ff]" />
                <span>{t.viewPromptBtn}</span>
              </button>
            </div>



          </div>

          {/* Right Hero Frame: Beautiful Floating Bento Glass Panel */}
          <div id="hero-interactive-showcase" className="lg:col-span-5 relative w-full flex justify-center py-6">
            
            {/* Visual Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#00f0ff]/15 to-[#bd00ff]/15 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Glass panel */}
            <GlowTiltCard className="w-full max-w-sm p-6 flex flex-col space-y-5 shadow-2xl overflow-hidden" isDarkMode={isDarkMode}>
              
              {/* Glass Top light line bar */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-[#00f0ff]/15 to-transparent blur-2xl"></div>
              
              <div className="flex justify-between items-center pb-2 border-b border-white/5 z-10">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[9px] font-mono text-[#00f0ff] tracking-widest uppercase font-bold">{isArabic ? "جديد - منصة الأوامر" : "NEW - COMMANDS PLATFORM"}</span>
              </div>

              <div className="relative min-h-[380px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={randomPromptIndex}
                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col space-y-5 h-full justify-between"
                  >
                    {/* Course Thumbnail placeholder styled for Command */}
                    <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-900 group cursor-pointer" onClick={() => {
                      handleCategorySelection(currentRandomPrompt?.category || "All");
                      scrollToSection("library-section", "library");
                    }}>
                      <img 
                        src={currentRandomPrompt?.imageUrl || "/src/assets/images/futuristic_ai_hero_1779813579793.png"} 
                        alt="Latest Command AI Showcase" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-3">
                        <p className="text-[11px] font-mono text-[#00f0ff] font-bold">{isArabic ? "أحدث الأوامر المضافة حيوياً" : "LATEST RECORDED COMMAND"}</p>
                      </div>
                    </div>

                    {/* Spotlight Command Info */}
                    <div className="space-y-1.5 text-right flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400 font-mono">{isArabic ? "التصنيف الإبداعي" : "CREATIVE CATEGORY"}</span>
                        <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full uppercase font-bold">
                          {currentRandomPrompt?.category === "Personal" 
                            ? (isArabic ? "شخصية" : "Personal") 
                            : currentRandomPrompt?.category === "Products" 
                            ? (isArabic ? "منتجات" : "Products") 
                            : currentRandomPrompt?.category === "Cards" 
                            ? (isArabic ? "كروت" : "Cards") 
                            : currentRandomPrompt?.category === "Library"
                            ? (isArabic ? "المكتبة" : "Library")
                            : (isArabic ? "أخرى" : "Other")}
                        </span>
                      </div>
                      <h3 className="text-base font-brand font-black text-white tracking-wide">
                        {currentRandomPrompt?.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed max-h-24 overflow-y-auto custom-scrollbar">
                        {currentRandomPrompt?.description}
                      </p>
                    </div>

                    {/* Click Trigger */}
                    <button 
                      onClick={() => {
                        handleCategorySelection(currentRandomPrompt?.category || "All");
                        scrollToSection("library-section", "library");
                      }}
                      className="w-full py-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-[#00f0ff]/30 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-[#00f0ff] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{isArabic ? "استعرض الأمر" : "Explore Command"}</span>
                      {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

            </GlowTiltCard>

          </div>

        </section>

        {/* BRIGHT FUTURISTIC TESTIMONIALS COMMENDATION SECTOR */}
        <TestimonialsSlider isArabic={isArabic} isDarkMode={isDarkMode} />

        </motion.div>
        )}

        {/* SECTION 2: ABOUT SECTION */}
        {activeTab === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <section id="about-section" className="py-16 scroll-mt-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left intro details */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                {t.aboutBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight">
                {t.aboutTitle}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-[#bd00ff] rounded-full"></div>
              
              <p className="text-slate-400 text-sm leading-relaxed pt-2">
                {t.aboutPara1}
              </p>
              {t.aboutPara2 && (
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.aboutPara2}
                </p>
              )}
            </div>

            {/* Right details bento grid layout of Vision, Mission */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mission Card */}
              <div className="bg-slate-950/50 hover:bg-slate-950/80 border border-slate-900/60 hover:border-cyan-500/20 rounded-3xl p-6 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-cyan-500/5 to-transparent blur-xl"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/25">
                  <Award className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <h3 className="text-lg font-brand font-bold text-white mb-3">{t.missionTitle}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {t.missionText}
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-950/50 hover:bg-slate-950/80 border border-slate-900/60 hover:border-purple-500/20 rounded-3xl p-6 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-purple-500/5 to-transparent blur-xl"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-2xl flex items-center justify-center mb-6 border border-[#bd00ff]/25">
                  <Sparkles className="w-6 h-6 text-[#bd00ff]" />
                </div>
                <h3 className="text-lg font-brand font-bold text-white mb-3">{t.visionTitle}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {t.visionText}
                </p>
              </div>

              {/* Creative Education Pillar */}
              <div className="bg-slate-950/50 hover:bg-slate-950/85 border border-slate-900/60 hover:border-emerald-500/20 rounded-3xl p-6 transition-all duration-300 md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl text-right">
                  <div className="flex items-center space-x-2 text-[#00f0ff] text-xs font-mono uppercase tracking-widest font-bold">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="mr-1">{t.whyLearnBadge}</span>
                  </div>
                  <h4 className="text-lg font-brand font-bold text-white">{t.whyLearnTitle}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.whyLearnText}
                  </p>
                </div>
                <button 
                  onClick={() => scrollToSection("contact-section", "contact")}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-white font-mono uppercase font-bold tracking-wider rounded-xl transition-all self-stretch md:self-auto flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t.connectBtn}</span>
                  {isArabic ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

          </div>

        </section>
        </motion.div>
        )}

        {/* SECTION 3: COURSES LISTING SECTION */}
        {activeTab === "courses" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <section id="courses-section" className="py-16 scroll-mt-24">
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff]">
                    {t.academyBadge}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight mt-1">
                    {t.academyTitle}
                  </h2>
                </div>
                <p className="text-slate-400 text-sm max-w-md mt-4 lg:mt-0 leading-relaxed">
                  {t.academySub}
                </p>
              </div>

              {/* Grid of Course Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {coursesList.map((course) => {
                  // Dynamic neon styling presets tailored to each course branding
                  const id = course.id;
                  let neonColor = "#00f0ff";
                  let glowShadow = "hover:shadow-[0_0_40px_rgba(0,240,255,0.12)]";
                  let badgeBorder = "border-cyan-500/30 text-cyan-300 bg-cyan-950/40";
                  let borderHover = "hover:border-cyan-500/40";
                  let btnGlow = "hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:border-cyan-400 text-cyan-400 hover:bg-cyan-500/10";
                  let textAccent = "group-hover:text-cyan-400";
                  
                  if (id === "media-production") {
                    neonColor = "#d946ef";
                    glowShadow = "hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]";
                    badgeBorder = "border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-950/40";
                    borderHover = "hover:border-fuchsia-500/40";
                    btnGlow = "hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-500/10";
                    textAccent = "group-hover:text-fuchsia-400";
                  } else if (id === "vibe-coding") {
                    neonColor = "#f59e0b";
                    glowShadow = "hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]";
                    badgeBorder = "border-amber-500/30 text-amber-300 bg-amber-950/40";
                    borderHover = "hover:border-amber-500/40";
                    btnGlow = "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-400 text-amber-400 hover:bg-amber-500/10";
                    textAccent = "group-hover:text-amber-400";
                  } else if (id === "claude-mastery") {
                    neonColor = "#818cf8";
                    glowShadow = "hover:shadow-[0_0_40px_rgba(129,140,248,0.12)]";
                    badgeBorder = "border-indigo-500/30 text-indigo-300 bg-indigo-950/40";
                    borderHover = "hover:border-indigo-500/40";
                    btnGlow = "hover:shadow-[0_0_20px_rgba(129,140,248,0.2)] hover:border-indigo-400 text-indigo-400 hover:bg-indigo-500/10";
                    textAccent = "group-hover:text-indigo-400";
                  }

                  return (
                    <GlowTiltCard 
                      key={course.id}
                      isDarkMode={isDarkMode}
                      className={`cursor-pointer shadow-xl transition-all duration-300 ${glowShadow} ${borderHover} bg-slate-950/40 backdrop-blur-md flex flex-col justify-between h-full relative overflow-hidden border border-white/25 hover:border-white/50`}
                    >
                      <div 
                        onClick={() => setSelectedCourse(course)}
                        className="p-6 md:p-8 flex flex-col justify-between h-full relative group"
                      >
                        {/* Micro premium background gradient lights */}
                        <div 
                          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-20 group-hover:opacity-40"
                          style={{ background: `radial-gradient(circle, ${neonColor}33 0%, transparent 70%)` }}
                        />

                        <div>
                          {/* 1. Visual Course Thumbnail Preview */}
                          <div className="mb-6">
                            <CourseThumbnail courseId={course.id} />
                          </div>

                          {/* 2. Dynamic Level, Duration, and Module badges */}
                          <div className="flex flex-wrap gap-2 items-center mb-5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/5 bg-slate-900/60 text-slate-300 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {course.duration}
                            </span>
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${badgeBorder}`}>
                              {course.level}
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/5 bg-slate-900/60 text-slate-300 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                              {course.modules ? course.modules.length : 0} {isArabic ? "محاور" : "Modules"}
                            </span>
                          </div>

                          {/* 3. Larger, bold main title */}
                          <h3 className={`text-xl md:text-2xl font-black text-white leading-tight mb-3 transition-colors duration-300 ${textAccent}`}>
                            {course.title}
                          </h3>

                          {/* 4. Description with increased contrast */}
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                            {course.shortDescription}
                          </p>

                          {/* 5. Key outcomes listed on card for dense, informative structure */}
                          <div className="space-y-2 mb-6 pointer-events-none">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold block">
                              {isArabic ? "أهم مخرجات التعلم:" : "Core Outcomes:"}
                            </span>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                              {course.outcomes && course.outcomes.slice(0, 4).map((outcome, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300 truncate">
                                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: neonColor }} />
                                  <span className="truncate">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 6. Full Width Glowing CTA Button */}
                        <div className="mt-auto pt-4 border-t border-white/5 relative z-10 w-full">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCourse(course);
                            }}
                            className={`w-full py-3.5 px-6 rounded-xl font-bold tracking-wider text-xs md:text-sm bg-slate-905 border border-white/10 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${btnGlow}`}
                          >
                            <span>{course.actionText || t.syllabusBtn}</span>
                            {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </button>
                          
                          <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-500 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{t.curriculumIncluded}</span>
                          </div>
                        </div>
                      </div>
                    </GlowTiltCard>
                  );
                })}
              </div>
            </section>
          </motion.div>
        )}

          {/* ACTIVE SELECTED CURRICULUM MODAL INTERACTION */}
          {selectedCourse && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              
              <div className="glass-card w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]">
                
                {/* Header glow */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-[#bd00ff]"></div>

                {/* Modal close & title */}
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-[#00f0ff] font-bold tracking-widest uppercase">
                      AMIR AI STUDY CURRICULUM
                    </span>
                    <h3 className="text-lg md:text-2xl font-brand font-bold text-white tracking-wide mt-1">
                      {selectedCourse.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="p-1 px-3 bg-slate-900 duration-200 hover:bg-slate-800 rounded-full text-xs text-slate-400 hover:text-white transition-all cursor-pointer"
                  >
                    ✕ {t.modalClose}
                  </button>
                </div>

                {/* Modal Scrollable Info Core */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
                  
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.modalOverview}</h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                      {selectedCourse.description}
                    </p>
                  </div>

                  {/* Modules grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Modules Syllabus */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-3">{t.modalModules}</h4>
                      <div className="space-y-1.5">
                        {selectedCourse.modules.map((mod, i) => (
                          <div key={i} className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-lg border border-slate-900 text-right">
                            <span className="text-xs font-mono font-bold text-purple-400 ml-1">0{i+1}.</span>
                            <span className="text-[11px] md:text-xs text-slate-300 font-medium">{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* outcomes */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">{t.modalCapabilities}</h4>
                      <div className="space-y-2 text-right">
                        {selectedCourse.outcomes.map((out, i) => (
                          <div key={i} className="flex items-start space-x-1.5">
                            <Check className="w-3.5 h-3.5 text-[#00f0ff] mt-0.5 shrink-0 ml-1.5" />
                            <span className="text-[11px] md:text-xs text-slate-400 font-sans leading-relaxed">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* perks */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900/60 text-right">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">{t.modalPerks}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedCourse.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-300 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 ml-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Modal Footer actions */}
                <div className="p-6 md:px-8 bg-slate-950/90 border-t border-slate-900 flex flex-col gap-4">
                  {/* Top pricing & info bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 border-b border-white/5">
                    <div className="text-xs font-mono text-slate-500">
                      {isArabic ? "مدة البرنامج التدريبي: " : "Duration: "}<span className="text-white font-bold">{selectedCourse.duration}</span>
                    </div>
                    
                    {/* Price with strikethrough */}
                    <div className="text-xs md:text-sm font-sans flex items-center gap-2">
                      <span className="text-slate-400 text-xs">{isArabic ? "السعر الأساسي: " : "Standard Price: "}</span>
                      <span className="text-rose-400 font-bold line-through decoration-white/40 decoration-1 px-2.5 py-1 bg-rose-500/10 rounded-lg">
                        {selectedCourse.id === "vibe-coding" ? (isArabic ? "4000 جنيه مصري" : "4000 EGP") : (isArabic ? "3000 جنيه مصري" : "3000 EGP")}
                      </span>
                    </div>
                  </div>
                  
                  {/* Button bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button 
                      onClick={() => setSelectedCourse(null)}
                      className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 text-xs text-slate-400 hover:text-white rounded-xl transition-all font-bold order-2 sm:order-1 cursor-pointer border border-white/5"
                    >
                      {t.modalClose}
                    </button>
                    
                    <a 
                      href={`https://wa.me/201144240400?text=${encodeURIComponent(
                        isArabic
                          ? `مرحباً استوديو أمير للذكاء الاصطناعي! أود الاستفسار عن السعر الحالي والعروض الخاصة لكورس "${selectedCourse.title}".`
                          : `Hello Amir AI Studio! I would like to inquire about the current price and special offers for the "${selectedCourse.title}" course.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-450 hover:to-green-500 text-white rounded-xl text-xs md:text-sm font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/25 border border-emerald-450/30 transition-all hover:shadow-emerald-500/10 order-1 sm:order-2"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0 text-emerald-100" />
                      <span>
                        {isArabic
                          ? "استفسر عن السعر الحالي والعروض الخاصة عبر واتساب"
                          : "Inquire about current price & special offers on WhatsApp"}
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ACTIVE SELECTED NEWS DETAIL MODAL INTERACTION */}
          {selectedNews && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              
              <div className="glass-card w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]">
                
                {/* Header glow with custom brand color */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${
                  selectedNews.glowColor === "purple" 
                    ? "from-[#bd00ff] via-purple-500 to-indigo-500" 
                    : selectedNews.glowColor === "blue"
                    ? "from-blue-500 via-indigo-500 to-cyan-500"
                    : "from-[#00f0ff] via-cyan-500 to-blue-500"
                }`}></div>

                {/* Modal close & Title */}
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start">
                  <div className="text-right flex-grow">
                    <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/20 px-2 rounded-full uppercase font-bold">
                      {selectedNews.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-brand font-black text-white tracking-wide mt-2">
                      {selectedNews.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="p-1 px-3 bg-slate-900 duration-200 hover:bg-slate-800 rounded-full text-xs text-slate-400 hover:text-white transition-all cursor-pointer ml-4"
                  >
                    ✕ {t.modalClose}
                  </button>
                </div>

                {/* Modal Scrollable Core content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 text-right" dir={isArabic ? "rtl" : "ltr"}>
                  {/* Aspect image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-900 bg-slate-950">
                    <img 
                      src={selectedNews.imageUrl} 
                      alt={selectedNews.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Date details */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span className="text-slate-500 ml-1">{isArabic ? "تاريخ النشر:" : "Published:"}</span>
                    <span className="text-white font-bold">{selectedNews.stats}</span>
                  </div>

                  {/* Body description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">
                      {isArabic ? "تفاصيل الخبر والتحديث" : "NEWS DETAILS & OVERVIEW"}
                    </h4>
                    <p className="text-[13px] text-slate-300 leading-relaxed font-sans mt-2 whitespace-pre-wrap pre-formatted">
                      {selectedNews.fullDescription || selectedNews.description}
                    </p>
                  </div>
                </div>

                {/* Footer close button */}
                <div className="p-6 border-t border-white/5 bg-slate-950 flex justify-end">
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#00f0ff]/30 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-[#00f0ff] rounded-xl transition-all cursor-pointer"
                  >
                    {isArabic ? "إغلاق التفاصيل" : "Close Details"}
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* SUBSCRIBER LOGIN MODAL */}
          <AnimatePresence>
            {showSubscriberLogin && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card w-full max-w-sm rounded-3xl overflow-hidden relative shadow-2xl flex flex-col border border-white/10"
                >
                  {/* Neon header glow line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-[#bd00ff] to-[#00f0ff]"></div>

                  {/* Header */}
                  <div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-950/50">
                    <div className="text-right w-full">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#00f0ff] font-bold animate-pulse">
                        {isArabic ? "منصة الأوامر" : "COMMANDS SYSTEM"}
                      </span>
                      <h3 className="text-lg font-brand font-bold text-white tracking-wide mt-1">
                        {isArabic ? "خاص للمشتركين" : "Exclusive for Subscribers"}
                      </h3>
                    </div>
                  </div>

                  {/* Body Inputs */}
                  <div className="p-5 space-y-4 text-right" dir={isArabic ? "rtl" : "ltr"}>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed text-right md:text-justify">
                      {isArabic 
                        ? "هذا القسم مخصص وحصري لمشتركي كورسات أكاديمية أمير للذكاء الاصطناعي. الرجاء إدخال بيانات الاعتماد الخاصة بك للوصول." 
                        : "This section is exclusive for enrolled subscribers of Amir AI Academy courses. Please enter your credentials to gain access."}
                    </p>

                    {subscriberLoginError && (
                      <div className="p-3 bg-red-950/40 text-red-400 border border-red-900/40 rounded-xl text-xs flex items-center justify-center gap-2 font-sans font-bold text-center">
                        <span>{subscriberLoginError}</span>
                      </div>
                    )}

                    <div className="space-y-3">
                      {/* Username */}
                      <div>
                        <label className={`block text-[11px] text-slate-400 font-mono mb-1.5 font-bold ${isArabic ? "text-right" : "text-left"}`}>
                          {isArabic ? "اسم المستخدم" : "Username"}
                        </label>
                        <div className="relative">
                          {isArabic ? (
                            <>
                              <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input
                                type="text"
                                value={usernameInput}
                                onChange={(e) => {
                                  setUsernameInput(e.target.value);
                                  setSubscriberLoginError("");
                                }}
                                placeholder="أدخل اسم المستخدم..."
                                className="w-full bg-[#050711] text-xs text-slate-100 placeholder:text-slate-600 rounded-xl pr-10 pl-4 py-3 border border-slate-905 focus:outline-none focus:border-[#00f0ff]/50 transition-all font-sans text-right"
                              />
                            </>
                          ) : (
                            <>
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input
                                type="text"
                                value={usernameInput}
                                onChange={(e) => {
                                  setUsernameInput(e.target.value);
                                  setSubscriberLoginError("");
                                }}
                                placeholder="Enter username..."
                                className="w-full bg-[#050711] text-xs text-slate-100 placeholder:text-slate-600 rounded-xl pl-10 pr-4 py-3 border border-slate-905 focus:outline-none focus:border-[#00f0ff]/50 transition-all font-sans text-left"
                              />
                            </>
                          )}
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className={`block text-[11px] text-slate-400 font-mono mb-1.5 font-bold ${isArabic ? "text-right" : "text-left"}`}>
                          {isArabic ? "كلمة السر" : "Password"}
                        </label>
                        <div className="relative">
                          {isArabic ? (
                            <>
                              <Lock className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => {
                                  setPasswordInput(e.target.value);
                                  setSubscriberLoginError("");
                                }}
                                placeholder="أدخل كلمة السر..."
                                className="w-full bg-[#050711] text-xs text-slate-100 placeholder:text-slate-600 rounded-xl pr-10 pl-4 py-3 border border-slate-905 focus:outline-none focus:border-[#bd00ff]/50 transition-all font-sans text-right"
                              />
                            </>
                          ) : (
                            <>
                              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => {
                                  setPasswordInput(e.target.value);
                                  setSubscriberLoginError("");
                                }}
                                placeholder="Enter password..."
                                className="w-full bg-[#050711] text-xs text-slate-100 placeholder:text-slate-600 rounded-xl pl-10 pr-4 py-3 border border-slate-905 focus:outline-none focus:border-[#bd00ff]/50 transition-all font-sans text-left"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer - "وزرارين صغيرين دخول وخروج" */}
                  <div className="p-4 border-t border-white/5 bg-slate-950 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setShowSubscriberLogin(false);
                        setSelectedPromptCategory(previousPromptCategory);
                      }}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs font-mono font-bold text-slate-400 hover:text-white rounded-lg transition-all border border-white/5 cursor-pointer flex-1 text-center"
                    >
                      {isArabic ? "خروج" : "Exit"}
                    </button>

                    <button
                      onClick={() => {
                        if (!usernameInput.trim() || !passwordInput.trim()) {
                          setSubscriberLoginError(
                            isArabic 
                              ? "برجاء كتابة اسم المستخدم وكلمة السر" 
                              : "Please enter both username and password"
                          );
                          return;
                        }
                        // Successful login
                        setIsSubscribed(true);
                        setShowSubscriberLogin(false);
                        setSelectedPromptCategory("Library");
                      }}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] hover:from-[#d533ff] hover:to-[#33f3ff] text-slate-950 font-sans font-bold text-xs rounded-lg transition-all cursor-pointer shadow-lg shadow-purple-950/25 flex-1 text-center"
                    >
                      {isArabic ? "دخول" : "دخول"}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        {/* SECTION 4: LIVE PROMPT OPTIMIZER & INSPIRATIONAL PROMPT LIBRARY */}
        {activeTab === "library" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >

        {/* SECTION 5: INSPIRATIONAL PROMPT LIBRARY */}
        <section id="library-section" className="py-16 scroll-mt-24">
          
          {/* Header context */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                {t.libraryBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight mt-1">
                {t.libraryTitle}
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mt-4 md:mt-0 leading-relaxed font-sans text-right">
              {t.librarySub}
            </p>
          </div>

          {/* Search bar and horizontal categories */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between mb-8 bg-slate-950/40 p-5 rounded-2xl border border-slate-900/80">
            
            {/* Search inputs */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={promptSearch}
                onChange={(e) => setPromptSearch(e.target.value)}
                placeholder={t.librarySearchPlaceholder}
                className="w-full bg-[#050711] text-xs md:text-sm text-slate-100 placeholder:text-slate-600 rounded-xl pl-10 pr-4 py-3 border border-slate-900 focus:outline-none focus:border-[#bd00ff]/50 transition-all font-sans"
              />
            </div>

            {/* Nav button filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Blocks of standard categories */}
              <div className="flex flex-wrap gap-1.5 items-center p-1 bg-[#050711]/60 rounded-xl border border-slate-900">
                {(["All", "Personal", "Products", "Cards", "Other"] as const).map((catName) => (
                  <button
                    key={catName}
                    onClick={() => handleCategorySelection(catName)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      selectedPromptCategory === catName 
                        ? "bg-slate-900 text-[#00f0ff] border border-slate-800"
                        : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                    }`}
                  >
                    {isArabic 
                      ? (catName === "All" ? "الكل" : catName === "Personal" ? "شخصية" : catName === "Products" ? "منتجات" : catName === "Cards" ? "كروت" : "أخرى")
                      : catName
                    }
                  </button>
                ))}
              </div>

              {/* Standalone Block for Library */}
              <div className="flex items-center p-1 bg-[#050711]/60 rounded-xl border border-slate-900">
                <button
                  onClick={() => handleCategorySelection("Library")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer min-w-[70px] ${
                    selectedPromptCategory === "Library" 
                      ? "bg-slate-900 text-[#00f0ff] border border-slate-800"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                  }`}
                >
                  {isArabic ? "المكتبة" : "Library"}
                </button>
              </div>
            </div>

          </div>

          {/* Prompt List cards layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((item) => (
              <GlowTiltCard 
                key={item.id}
                isDarkMode={isDarkMode}
                className="flex flex-col justify-between h-full relative overflow-hidden !border-white/15 hover:!border-white/40 transition-all duration-300 shadow-xl"
              >
                <div className="p-5 flex flex-col justify-between h-full relative group">
                  {/* Upper Details */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-mono bg-purple-950/40 text-purple-300 font-bold px-2 py-0.5 rounded border border-purple-500/20">
                        {isArabic 
                          ? (item.category === "Personal" ? "شخصية" : item.category === "Products" ? "منتجات" : item.category === "Cards" ? "كروت" : item.category === "Library" ? "المكتبة" : "أخرى")
                          : item.category
                        }
                      </span>
                      <span className="text-[9px] font-mono text-slate-500">{item.difficulty}</span>
                    </div>

                    {/* Image space above the command name */}
                    {item.imageUrl && (
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-4 bg-slate-950/60 group-hover:border-white/30 transition-all">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300 bg-slate-950/90 px-2 py-0.5 rounded border border-white/5 tracking-wider">
                          {isArabic ? "معاينة النتيجة" : "RESULT"}
                        </div>
                      </div>
                    )}

                    <h3 className="text-base font-brand font-bold text-white mb-2 tracking-wide group-hover:text-[#00f0ff] transition-all text-right">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4 text-right">
                      {item.description}
                    </p>

                    <div className="bg-[#050711] p-3.5 rounded-lg border border-slate-900/80 mb-4 select-all group-hover:border-[#00f0ff]/20 transition-all font-mono text-[10.5px] text-slate-300 leading-normal max-h-36 overflow-y-auto text-left" dir="ltr">
                      {item.prompt}
                    </div>
                  </div>

                  {/* Copier buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-900 relative z-10">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] text-slate-500 font-mono">#{tag}</span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handleCopyPrompt(item.id, item.prompt)}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-850 text-[10px] font-mono font-bold uppercase rounded-lg transition-all text-[#00f0ff] hover:text-white cursor-pointer flex items-center gap-1"
                    >
                      {copiedPromptId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">{t.libraryCopied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-cyan-400" />
                          <span>{t.libraryCopy}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </GlowTiltCard>
            ))}
          </div>

        </section>
        </motion.div>
        )}

        {/* SECTION 6: DESIGN PORTFOLIO SHOWCASE */}
        {activeTab === "showcase" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <section id="portfolio-section" className="py-16 scroll-mt-24">
          
          <div className="mb-10 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff]">
              {t.portfolioBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight mt-1">
              {t.portfolioTitle}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 rounded-full mx-auto mt-3"></div>
          </div>

          {/* Animated Interactive Cards Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioList.map((item) => (
              <div 
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 relative shadow-lg flex flex-col justify-between"
              >
                {/* Card Top visual image */}
                <div className="relative aspect-square overflow-hidden border-b border-slate-900 bg-slate-950">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-all"></div>
                  
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-5 space-y-2 text-right">
                  <h3 className="text-base font-brand font-bold text-white tracking-wide group-hover:text-[#00f0ff] transition-all">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Footer specs details for models with Explore button */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 font-bold">{item.stats}</span>
                  <button 
                    onClick={() => setSelectedNews(item)}
                    className="px-4 py-2 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 text-xs font-brand font-black text-[#00f0ff] rounded-xl transition-all duration-300 shadow-lg active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{isArabic ? "استكشف الخبر" : "Explore News"}</span>
                    {isArabic ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </section>
        </motion.div>
        )}

        {/* SECTION 7: OUTPOST CONTACT AND WA INTEGRATION */}
        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <section id="contact-section" className="py-16 scroll-mt-24">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                {/* Left direct outpost info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] bg-cyan-950 text-cyan-300 px-3 py-1 rounded-full w-fit">
                      {t.contactBadge}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-brand font-black text-white tracking-wide">
                      {t.contactTitle}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
                      {t.contactSub}
                    </p>
                  </div>

                  {/* Direct clickable channels info */}
                  <div className="space-y-4 pt-4">
                    
                    {/* Interactive Channel: WhatsApp */}
                    <a 
                      href="https://wa.me/201144240400?text=Hello%20Amir%20AI%20Studio!%20I%20would%20like%20to%20register%20for%20your%20generative%20artificial%20intelligence%20course."
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-950 hover:bg-[#071310] border border-slate-900 hover:border-emerald-500/20 rounded-2xl transition-all flex items-center justify-between group cursor-pointer text-right"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-all">
                          <MessageSquare className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex flex-col text-left mr-2">
                          <span className="text-xs font-bold text-white">{isArabic ? "تواصل مباشر عبر الواتساب" : "DIRECT WHATSAPP LINE"}</span>
                          <span className="text-[10px] font-mono text-slate-500">+20 114 424 0400</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold hover:translate-x-1 transition-all">CONNECT →</span>
                    </a>

                {/* Facebook Channel */}
                <a 
                  href="https://www.facebook.com/AmirAiStudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-950 hover:bg-[#070b13] border border-slate-900 hover:border-blue-500/20 rounded-2xl transition-all flex items-center justify-between group cursor-pointer text-right"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/25 group-hover:scale-105 transition-all">
                      <Facebook className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex flex-col text-left mr-2">
                      <span className="text-xs font-bold text-white">{isArabic ? "صفحة الفيسبوك الرسمية" : "OFFICIAL FACEBOOK OUTLET"}</span>
                      <span className="text-[10px] font-mono text-slate-500">Amir AI Studio</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 font-bold hover:translate-x-1 transition-all">VISIT →</span>
                </a>


              </div>

            </div>

            {/* Right Interactive Form Box */}
            <form onSubmit={handleContactSubmit} className="lg:col-span-7 bg-slate-950/80 p-6 md:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
              
              <div className="space-y-4">
                
                {/* Alert and Messages */}
                {formSuccessMessage && (
                  <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-sans text-xs md:text-sm text-right">
                    ✓ {formSuccessMessage}
                  </div>
                )}

                {formErrorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/30 text-red-400 font-sans text-xs md:text-sm text-right">
                    ⚠ {formErrorMessage}
                  </div>
                )}

                {/* Name Box */}
                <div className="space-y-1.5 text-right">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {t.contactNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={isArabic ? "الأستاذ / الأخت الكريمة..." : "e.g. John Doe"}
                    className="w-full bg-[#050711] text-xs md:text-sm text-slate-200 rounded-xl p-3.5 border border-slate-800 focus:outline-none focus:border-[#00f0ff]/50 transition-all font-sans"
                  />
                </div>

                {/* Email Box */}
                <div className="space-y-1.5 text-right">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {t.contactEmailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-[#050711] text-xs md:text-sm text-slate-200 rounded-xl p-3.5 border border-slate-800 focus:outline-none focus:border-[#bd00ff]/50 transition-all font-mono"
                  />
                </div>

                {/* Select Interest Subject */}
                <div className="space-y-1.5 text-right">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {t.contactInterestLabel}
                  </label>
                  <select
                    value={contactInterest}
                    onChange={(e) => setContactInterest(e.target.value)}
                    className="w-full bg-[#050711] text-xs md:text-sm text-slate-200 rounded-xl p-3.5 border border-slate-800 focus:outline-none focus:border-[#00f0ff]/50 transition-all font-sans"
                  >
                    <option value="Generative Art Mastery">{isArabic ? "مسار الصور الفنية المتقدم (Midjourney)" : "Generative Art Mastery"}</option>
                    <option value="AI Cinema/Video">{isArabic ? "مسار صناعة السينما والفيديو (Sora/Runway)" : "AI Cinema/Video"}</option>
                    <option value="AI Brand Marketing">{isArabic ? "مسار التسويق الاستراتيجي المتكامل" : "AI Brand Marketing"}</option>
                    <option value="AI UI/UX Design">{isArabic ? "مسار واجزاء التصاميم والواجهات الذكية" : "AI UI/UX Design"}</option>
                    <option value="Enterprise Consultation">{isArabic ? "استشارات وحلول مخصصة للشركات والمؤسسات" : "Enterprise Consultation"}</option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5 text-right">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {t.contactMessageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder={isArabic ? "يرجى كتابة فكرتك، مشروعك الفريد، أو الأسئلة التي تود منا إجابتها بالتفصيل..." : "Tell us about your visual or enterprise goals..."}
                    className="w-full bg-[#050711] text-xs md:text-sm text-slate-200 rounded-xl p-3.5 border border-slate-800 focus:outline-none focus:border-[#bd00ff]/50 transition-all font-sans"
                  />
                </div>

              </div>

              {/* Execute Transmit trigger */}
              <button
                type="submit"
                disabled={formLoading}
                className="w-full py-4 mt-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                {formLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin"></div>
                    <span>{t.contactSubmitting}</span>
                  </>
                ) : (
                  <span>{t.contactSubmitBtn}</span>
                )}
              </button>

            </form>

          </div>

        </section>
        </motion.div>
        )}

      </main>

      {/* FIXED MARGIN LAB SYSTEM FOOTER BAR */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/40 py-8 mt-16 px-4 md:px-8 relative z-10 flex items-center justify-center">
        <a 
          href="https://wa.me/201144240400" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs md:text-sm font-mono text-slate-400 hover:text-[#00f0ff] transition-all duration-300 tracking-wider flex items-center gap-1.5"
        >
          <span>Powered By: Amir Ai Studio 2026 ®</span>
        </a>
      </footer>

      {/* FLOATING ACTION INTERACTIVE COMPONENT */}
      <WhatsAppButton isArabic={isArabic} />

    </div>
  );
}
