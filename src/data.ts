import { Course, PromptItem, PortfolioItem } from "./types";

export interface StudioContent {
  navHome: string;
  navCourses: string;
  navLibrary: string;
  navShowcase: string;
  navContact: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSub: string;
  exploreBtn: string;
  viewPromptBtn: string;
  activeInquiries: string;
  liveToday: string;
  sysStatus: string;
  sysActive: string;
  readSyllabus: string;
  statsManaged: string;
  statsGraduates: string;
  statsSatisfaction: string;
  aboutTitle: string;
  aboutBadge: string;
  aboutPara1: string;
  aboutPara2: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  whyLearnBadge: string;
  whyLearnTitle: string;
  whyLearnText: string;
  connectBtn: string;
  academyBadge: string;
  academyTitle: string;
  academySub: string;
  curriculumIncluded: string;
  syllabusBtn: string;
  modalOverview: string;
  modalModules: string;
  modalCapabilities: string;
  modalPerks: string;
  modalInquiry: string;
  modalClose: string;
  libraryBadge: string;
  libraryTitle: string;
  librarySub: string;
  librarySearchPlaceholder: string;
  libraryCopied: string;
  libraryCopy: string;
  optBadge: string;
  optTitle: string;
  optSub: string;
  optPlaceholder: string;
  optCategory: string;
  optOptimizeBtn: string;
  optOptimizing: string;
  optResultTitle: string;
  optCopyResult: string;
  portfolioBadge: string;
  portfolioTitle: string;
  contactTitle: string;
  contactBadge: string;
  contactSub: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactInterestLabel: string;
  contactMessageLabel: string;
  contactSubmitBtn: string;
  contactSubmitting: string;
}

export const AR_CONTENT: StudioContent = {
  navHome: "الرئيسية",
  navCourses: "المسارات التعليمية",
  navLibrary: "مكتبة الأوامر",
  navShowcase: "آخر الأخبار",
  navContact: "اتصل بنا",
  heroHeadline: "نصنع المستقبل",
  heroHighlight: "بإبداع الذكاء الاصطناعي",
  heroSub: "منصتنا هي وجهتك لتعلّم أدوات الذكاء الاصطناعي الحديثة، احتراف صناعة المحتوى، بناء البرومبتات الذكية، وتحويل أفكارك إلى مشاريع إبداعية حقيقية، ومصدر دخل حقيقي.",
  exploreBtn: "استكشف الكورسات",
  viewPromptBtn: "مشاهدة مكتبة الأوامر",
  activeInquiries: "الطلبات النشطة اليوم",
  liveToday: "31 طلب نشط",
  sysStatus: "حالة الأنظمة",
  sysActive: "متصل بالكامل (100٪)",
  readSyllabus: "اقرأ المنهج الدراسي",
  statsManaged: "أوامر نصية محسنة",
  statsGraduates: "خريج فخور بالمنصة",
  statsSatisfaction: "معدل الرضا الأكاديمي",
  aboutTitle: "نقود الإبداع نحو عصر الذكاء الاصطناعي",
  aboutBadge: "من نحن",
  aboutPara1: "في Amir AI Studio نصنع بيئة تعليمية متطورة تمكّن المبدعين من احتراف أدوات الذكاء الاصطناعي، وتحويل الأفكار إلى مشاريع بصرية وتجارب رقمية احترافية تقودهم نحو مستقبل أكثر ابتكارًا وتأثيرًا.",
  aboutPara2: "",
  missionTitle: "رسالتنا",
  missionText: "تمكين كل طالب علم من استخدام الذكاء الاصطناعي بذكاء عملي، من خلال تدريب تطبيقي، أدوات احترافية، وتجارب تعليمية تبني مهارات حقيقية قابلة للتنفيذ.",
  visionTitle: "رؤيتنا",
  visionText: "أن نكون منصة عربية رائدة في تعليم الإبداع المدعوم بالذكاء الاصطناعي، وصناعة جيل قادر على قيادة المستقبل الرقمي بثقة واحتراف.",
  whyLearnBadge: "مسار متكامل نحو الاحتراف الرقمي",
  whyLearnTitle: "لماذا Amir AI Studio؟",
  whyLearnText: "لسنا مجرد منصة تعليمية، بل مساحة متكاملة تجمع بين التعلم، التطبيق، والإبداع الحقيقي.\nنقدّم تجربة عملية تساعدك على اكتساب المهارات التي تحتاجها لصناعة محتوى احترافي، تطوير أفكارك، وتحويل قدراتك إلى نتائج ملموسة، وطريق لدخل حقيقي.",
  connectBtn: "ابدأ رحلتك الآن",
  academyBadge: "البرامج التدريبية المتقدمة",
  academyTitle: "مسارات احتراف الذكاء الاصطناعي",
  academySub: "من برامج تأسيسية للمبتدئين إلى مسارات احترافية متقدمة، صممنا تجربة تعليمية عملية تساعدك على إتقان أدوات الذكاء الاصطناعي وصناعة مشاريع إبداعية حقيقية.",
  curriculumIncluded: "يتضمن ملف المنهج والتطبيقات",
  syllabusBtn: "عرض تفاصيل المنهج والتسجيل",
  modalOverview: "نظرة عامة على البرنامج الدراسي",
  modalModules: "الوحدات التدريبية المعتمدة",
  modalCapabilities: "المهارات والمخرجات الرئيسية المستفادة",
  modalPerks: "المزايا الإضافية الفاخرة المشمولة",
  modalInquiry: "استفسار مباشر عن السعر والاشتراك عبر واتساب",
  modalClose: "إغلاق التفاصيل",
  libraryBadge: "محرك البحث الفوري للأوامر المحسنة",
  libraryTitle: "مكتبة الأوامر الإبداعية",
  librarySub: "أوامر مصممة بدقة متناهية لتحقيق تناغم بصري متكامل وإنتاج روائع بصرية تضاهي أعمال الاستوديوهات الكبرى",
  librarySearchPlaceholder: "البحث عن الأوامر ومصطلحات البحث...",
  libraryCopied: "تم النسخ بنجاح!",
  libraryCopy: "نسخ الأمر الممهد",
  optBadge: "مساعد الذكاء الاصطناعي المحاكي والمباشر",
  optTitle: "مُحسِّن الأوامر النصية الذكي",
  optSub: "ادخل فكرتك البسيطة باللغة العربية أو الإنجليزية ودع محركات Gemini الذكية تنسج لك أمراً احترافياً مذهلاً مدعوماً بخصائص التصوير والإضاءة وجودة الإنتاج الفريدة.",
  optPlaceholder: "مثال: فتاة بملابس سايبربانك تنظر إلى شاشات الهولوغرام في مدينة مستقبلية ممطرة في دبي...",
  optCategory: "نوع التصنيف للمهمة",
  optOptimizeBtn: "معالجة وتحسين الأمر عبر Gemini AI",
  optOptimizing: "جاري تحليل اللكنة وصياغة المؤثرات البصرية الباهرة...",
  optResultTitle: "الأمر النصي الفاخر المحسن للتطبيق المباشر:",
  optCopyResult: "نسخ النتيجة الذهبية المحسنة",
  portfolioBadge: "تابع كل الجديد عن الـ Ai",
  portfolioTitle: "آخر الأخبار والتحديثات",
  contactTitle: "دعنا نبني فكرتك بالذكاء الاصطناعي",
  contactBadge: "بوابة الاتصال الذكي",
  contactSub: "تواصل معنا للاستفسار عن المسارات التدريبية، المشاريع الخاصة، أو الحلول الإبداعية المدعومة بالذكاء الاصطناعي. فريقنا جاهز لمساعدتك في اختيار المسار الأنسب وتحويل فكرتك إلى واقع رقمي احترافي.",
  contactNameLabel: "الاسم الكريم",
  contactEmailLabel: "البريد الإلكتروني للإشعارات",
  contactInterestLabel: "برنامج الاهتمام الخاص",
  contactMessageLabel: "رسالتك الكريمة أو استفسارك المخصص",
  contactSubmitBtn: "إرسال البيانات والتواصل السريع",
  contactSubmitting: "جاري تأمين الاتصال وتسجيل البيانات..."
};

export const EN_CONTENT: StudioContent = {
  navHome: "Academy",
  navCourses: "Courses",
  navLibrary: "Prompt Hub",
  navShowcase: "Latest News",
  navContact: "Contact",
  heroHeadline: "ELEVATE YOUR",
  heroHighlight: "CREATIVE REVOLUTION",
  heroSub: "Amir AI Studio represents the supreme nexus of technical wisdom and visual craftsmanship. We empower artists, creators, and business leaders with futuristic generative capabilities to translate sheer imagination into commercial realities.",
  exploreBtn: "Explore AI Courses",
  viewPromptBtn: "View Prompt Library",
  activeInquiries: "Active Inquiries Today",
  liveToday: "31 Live Today",
  sysStatus: "System Status",
  sysActive: "Stable (100%)",
  readSyllabus: "Read Curriculum",
  statsManaged: "PROMPTS MANAGED",
  statsGraduates: "ACADEMY GRADUATES",
  statsSatisfaction: "SATISFACTION RATING",
  aboutTitle: "Amir AI Studio",
  aboutBadge: "Who We Are",
  aboutPara1: "Founded as an elite brand of futuristic generative intelligence, we synthesize complex code, artistic photography standards, and artificial intelligence into structured education.",
  aboutPara2: "Rather than treating AI as a replacement for human imagination, we configure artificial neural models as the ultimate multiplier of artistic agency.",
  missionTitle: "Our Mission",
  missionText: "To democratize absolute technical sovereignty for creators worldwide. We craft deep curriculums that translate sophisticated engineering tokens into predictable, award-winning visual templates.",
  visionTitle: "Our Vision",
  visionText: "A global creative renaissance where the bottleneck to content production is no longer technical gatekeepers or computational power, but the raw boundaries of individual curiosity and human imagination.",
  whyLearnBadge: "The Amir Studio Standard",
  whyLearnTitle: "Why Learn with Amir AI Studio?",
  whyLearnText: "Our programs aren't generalized summaries of AI tools. We teach proprietary workflows built through thousands of hours of visual art creation, digital output, and commercial scale.",
  connectBtn: "Start Your Journey Now",
  academyBadge: "Advanced Training Programs",
  academyTitle: "AI Professional Tracks",
  academySub: "From foundational courses for beginners to advanced professional tracks, we've designed a hands-on learning experience that helps you master AI tools and build real creative projects.",
  curriculumIncluded: "Includes Syllabus and Practical Applications File",
  syllabusBtn: "View Syllabus Details & Enroll",
  modalOverview: "Curriculum Overview",
  modalModules: "Approved Training Modules",
  modalCapabilities: "Key Skills & Core Outcomes",
  modalPerks: "Premium Included Benefits",
  modalInquiry: "Direct Inquiry About Price & Subscription via WhatsApp",
  modalClose: "Close Details",
  libraryBadge: "Instant Command Search Engine",
  libraryTitle: "Creative Prompts Library",
  librarySub: "Prompts designed with extreme precision to achieve complete visual harmony and publish masterworks that rival top studios.",
  librarySearchPlaceholder: "Search prompts and key categories...",
  libraryCopied: "Copied successfully!",
  libraryCopy: "Copy Prompt Tokens",
  optBadge: "Simulated Generative Assistant",
  optTitle: "Smart Prompt Optimizer",
  optSub: "Type your basic idea in Arabic or English and let the Gemini intelligence weave a highly professional, visually cohesive prompt enriched with specific lens settings, atmospheric lights, and elite production values.",
  optPlaceholder: "Example: A cyberpunk girl gazing at holographic terminal screens in a rainy future Dubai...",
  optCategory: "Task Category Mode",
  optOptimizeBtn: "Analyze & Optimize with Gemini AI",
  optOptimizing: "Dialing optical variables and drafting elite cinematic tokens...",
  optResultTitle: "Your Optimized Premium Prompt Ready for Injection:",
  optCopyResult: "Copy Optimized Gold Result",
  portfolioBadge: "Our Creative Journey & Studio Announcements",
  portfolioTitle: "Latest News & Updates",
  contactTitle: "Connect with Amir AI Studio",
  contactBadge: "Smart Strategic Gateway",
  contactSub: "Get in touch with us to inquire about courses, customized private operations, or targeted corporate generative consulting.",
  contactNameLabel: "Your Name",
  contactEmailLabel: "Notification Email Address",
  contactInterestLabel: "Program or Topic of Interest",
  contactMessageLabel: "Your Inquiry or Special Requirement Details",
  contactSubmitBtn: "Dispatch Inquiry Package",
  contactSubmitting: "Securing connection and recording data..."
};

// Bilingual Courses data
export const AR_COURSES: Course[] = [
  {
    id: "basics-master",
    title: "BASICS MASTER",
    shortDescription: "الانطلاقة الذكية إلى عالم الذكاء الاصطناعي",
    description: "ابدأ من الصفر وتعرّف على أهم أدوات الذكاء الاصطناعي، أساسيات كتابة البرومبت، واستخدام المنصات الحديثة لصناعة نتائج احترافية.",
    duration: "4 أسابيع",
    level: "Beginner",
    iconName: "Sparkles",
    actionText: "استعرض المنهج",
    outcomes: [
      "أساسيات الـ Prompt Engineering",
      "أدوات الذكاء الاصطناعي الأساسية",
      "تطبيقات عملية يومية",
      "بناء Workflow احترافي"
    ],
    modules: [
      "مدخل شامل إلى أدوات توليد النصوص والصور الذكية واستخداماتها المتعددة",
      "هندسة الأوامر (Prompt Engineering) وبناء النوافذ السياقية الفعّالة",
      "تنظيم المهام اليومية وأتمتتها لتوفير الوقت وزيادة الإنتاجية",
      "ربط وتجميع الأدوات في بيئة عمل موحدة ومنتجة"
    ],
    benefits: [
      "شهادة إتمام معتمدة ورقمية وموثقة باسمك من الأكاديمية",
      "الوصول للجروب التدريبي ومصادر التعلم الإضافية الحصرية",
      "دعم فني وتوجيه مستمر ومراجعة أسبوعية للمشاريع الشخصية"
    ]
  },
  {
    id: "media-production",
    title: "MEDIA PRODUCTION",
    shortDescription: "صناعة المحتوى الاحترافي بالذكاء الاصطناعي",
    description: "تعلّم إنتاج الصور والفيديوهات السينمائية، تصميم الإعلانات، وصناعة محتوى بصري احترافي باستخدام أحدث أدوات الـ AI.",
    duration: "6 أسابيع",
    level: "Intermediate",
    iconName: "Play",
    actionText: "عرض تفاصيل البرنامج",
    outcomes: [
      "توليد الصور الاحترافية",
      "صناعة الفيديو بالذكاء الاصطناعي",
      "تصميم الإعلانات",
      "إنتاج محتوى Social Media"
    ],
    modules: [
      "التحكم الفني الدقيق بإضاءة وزوايا وجماليات توليد الصور السينمائية",
      "صناعة الأفلام والمقاطع التوليدية فائقة الجودة ومنخفضة الجتر (Jitter)",
      "هندسة المحتوى البصري الإعلاني الموجه لزيادة المبيعات والعوائد",
      "تقنيات التسويق والتواجد البصري المميز على منصات التواصل الاجتماعي"
    ],
    benefits: [
      "وصول حصري لمجموعة واسعة من الأوامر والبرومبتات المصممة للإنتاج التجاري",
      "فيلم قصير مشترك يتم إنتاجه جماعياً بواسطة الذكاء الاصطناعي لطلاب الدفعة",
      "جلسات نقد فني وتقييم فوري للأعمال من خبراء الميديا"
    ]
  },
  {
    id: "vibe-coding",
    title: "VIBE CODING",
    shortDescription: "بناء مواقع وتجارب رقمية بالذكاء الاصطناعي",
    description: "تعلم تطوير مواقع وصفحات تفاعلية حديثة باستخدام الذكاء الاصطناعي وواجهات المستخدم المستقبلية.",
    duration: "5 أسابيع",
    level: "Advanced",
    iconName: "Cpu",
    actionText: "ابدأ المسار",
    outcomes: [
      "AI Assisted Development",
      "Frontend Workflows",
      "UI/UX Design",
      "بناء مشاريع كاملة"
    ],
    modules: [
      "استخدام مساعدي البرمجة والذكاء الاصطناعي في صياغة الأكواد البرمجية",
      "سير عمل احترافي لتطوير واجهات المستخدم التفاعلية من فكرة مبسطة لأكواد مستقرة",
      "مبادئ وقواعد تصميم واجهات المستخدم المستقبلية وبناء جماليات Dark UI",
      "تجميع وبناء مواقع وصفحات ويب متكاملة ونشرها على السيرفرات السحابية"
    ],
    benefits: [
      "حزمة من قوالب التصميم الجاهزة والأصول الفائقة الجمال مدفوعة ومشمولة مجاناً",
      "جلسات تقييم مخصصة للأكواد والمشاريع وتجربة المستخدم من فريق أمير سنيورز",
      "فرص تعاون ومشاريع حقيقية مدفوعة الأجر للمتفوقين والمتميزين"
    ]
  },
  {
    id: "claude-mastery",
    title: "CLAUDE MASTERY",
    shortDescription: "احتراف بناء الأنظمة الذكية باستخدام Claude",
    description: "تعلم استخدام Claude في إنشاء أنظمة ذكية متقدمة، كتابة المحتوى الاحترافي، تحليل البيانات، إدارة المشاريع، وبناء حلول عملية مدعومة بالذكاء الاصطناعي.",
    duration: "3 أسابيع",
    level: "Masterclass",
    iconName: "Layers",
    actionText: "ابدأ احتراف Claude",
    outcomes: [
      "Claude Prompt Engineering",
      "Smart Workflow Design",
      "Content Strategy Development",
      "Automation Systems"
    ],
    modules: [
      "احتراف هندسة أوامر Claude وبناء النوافذ السياقية الطويلة لفرز الأكواد والكتب المطبوعة",
      "هندسة سير عمل ذكي للبيانات وأتمتة اتخاذ القرار",
      "تصميم استراتيجيات صناعة المحتوى والكتابة الإبداعية المتخصصة",
      "بناء أنظمة تشغيل وأتمتة ذكية متكاملة ومترابطة"
    ],
    benefits: [
      "تحسين أداء مهامك الإدارية أو الريادية بنسبة تفوق 10 أضعاف السرعة العادية",
      "أدوات ونماذج مهيأة للنسخ المباشر لإنشاء أنظمة Claude Projects و Artifacts المتقدمة",
      "اتصال مباشر بورش تصميم النمذجة المخصصة وحلول الشركات"
    ]
  }
];

export const EN_COURSES: Course[] = [
  {
    id: "basics-master",
    title: "BASICS MASTER",
    shortDescription: "Smart Kickoff into the World of AI",
    description: "Start from scratch and learn the path to key AI platforms, Prompt Engineering, and how to harness modern models for professional workflows.",
    duration: "4 Weeks",
    level: "Beginner",
    iconName: "Sparkles",
    actionText: "Explore Curriculum",
    outcomes: [
      "Prompt Engineering Basics",
      "Fundamental AI Tools",
      "Daily Practical Workflows",
      "Professional Workspace Design"
    ],
    modules: [
      "An introduction to generative AI toolsets and application domains",
      "Prompt crafting principles and optimizing context parameters",
      "Automating daily operational duties with conversational agents",
      "Assembling interconnected AI workspaces for seamless production"
    ],
    benefits: [
      "Certified Digital Credential issued by Amir AI Studio",
      "Access to private student discussion boards and premium learning assets",
      "Continuous direct feedback and project reviews"
    ]
  },
  {
    id: "media-production",
    title: "MEDIA PRODUCTION",
    shortDescription: "Professional Content Creation using AI",
    description: "Learn to produce cinematic images and videos, design ads, and build professional visual assets utilizing cutting-edge AI software.",
    duration: "6 Weeks",
    level: "Intermediate",
    iconName: "Play",
    actionText: "View Program Details",
    outcomes: [
      "Cinematic Image Generation",
      "AI Video Production",
      "Advertising Graphics",
      "Social Media Content Pipelines"
    ],
    modules: [
      "Studiolighting, camera setups, and advanced prompting for elite imagery",
      "Generating ultra-smooth, high-stabilization video clips using leading models",
      "Crafting compelling commercial graphics designed for audience conversion",
      "Automated cross-platform social media posting systems"
    ],
    benefits: [
      "Immediate VIP access to curated masterclass prompt databases",
      "Collaborative project delivering a combined cohort short film production",
      "Direct technical coaching with active creative directors"
    ]
  },
  {
    id: "vibe-coding",
    title: "VIBE CODING",
    shortDescription: "Building Web Apps & Digital Journeys with AI",
    description: "Code and deploy modern interactive websites and application frontends using AI-assisted development tools and futuristic user experience patterns.",
    duration: "5 Weeks",
    level: "Advanced",
    iconName: "Cpu",
    actionText: "Initiate Track",
    outcomes: [
      "AI Assisted Development",
      "Frontend Workflows",
      "UI/UX Design",
      "Building Complete Projects"
    ],
    modules: [
      "Harnessing conversational codegen models and inline editors",
      "Converting conceptual sketches into valid active codebases in minutes",
      "Designing responsive Glassmorphic and modern High-Contrast layouts",
      "Deploying interactive single-page web applications to cloud servers"
    ],
    benefits: [
      "Premium dark UI responsive kit included free for lifetime use",
      "Rigorous logic and optimization check-ins with Amir's developer leads",
      "Paid developer internship considerations of top performing students"
    ]
  },
  {
    id: "claude-mastery",
    title: "CLAUDE MASTERY",
    shortDescription: "Mastering AI System Design with Claude",
    description: "Harness Claude to build state-of-the-art intelligent systems, write top-tier copy, analyze datastreams, manage projects, and deploy automated logic.",
    duration: "3 Weeks",
    level: "Masterclass",
    iconName: "Layers",
    actionText: "Start Claude Path",
    outcomes: [
      "Claude Prompt Engineering",
      "Smart Workflow Design",
      "Content Strategy Development",
      "Automation Systems"
    ],
    modules: [
      "Advanced long-context prompt manipulation and custom parameters",
      "Structuring complex processing tasks and database translations",
      "Designing scalable content calendars and narrative generation tools",
      "Linking APIs and system components to automate business routines"
    ],
    benefits: [
      "Supercharging operational pace by over 10x using custom models",
      "Preloaded template repositories for Claude Projects & Artifacts",
      "Elite enterprise consultation opportunities and advisory sessions"
    ]
  }
];

// Bilingual Prompts
export const AR_PROMPTS: PromptItem[] = [
  {
    id: "p1",
    title: "عميل سايبربانك مستقبلي مذهل",
    category: "Image",
    prompt: "A cinematic cinematic wide shot of an elite cyberpunk operative wearing modular gear, looking towards a gargantuan purple neural network holographic system, volumetric electric neon blue mist, photorealistic face, hyper-detailed, shot on 85mm anamorphic lens, beautiful ambient light reflections, 8k resolution --ar 16:9 --style raw",
    description: "أمر نصي معد خصيصاً في Midjourney لمحاكاة تفاصيل الوجوه السينمائية، والعمق الحركي الممزوج بوهج النيون الباهر.",
    tags: ["سايبربانك", "سينمائي", "بورتريه", "ميدجورني"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png"
  },
  {
    id: "p2",
    title: "لوحة تحكم وتطبيق مستقبلي ناعم زجاجي",
    category: "Design",
    prompt: "Ultra-premium futuristic dark application interface mockup, glassmorphic layout cards, deep charcoal background, subtle vibrant neon cyan glowing borders, professional sans-serif typography, elegant statistical charts, high-end tech corporate dashboard vibe, pristine aesthetic presentation --v 6.0",
    description: "يولد هذا الكود واجهات مستخدم مذهلة فائقة التفاصيل وبلمسات زجاجية ونوافذ نيونية تلهم بناء مشاريعك وموقعك الإلكتروني.",
    tags: ["واجهات مستخدم", "تأثير زجاجي", "إلهام", "فيجما"],
    difficulty: "Expert",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png"
  },
  {
    id: "p3",
    title: "تفتح زهرة أوركيد مضيئة بخاصية التايم لابس",
    category: "Video",
    prompt: "A close-up cinematic time-lapse video of an crystalline orchid blooming under alien solar rays, petals constructed of fluid light and electric purple fibers, camera gently zooms out, bioluminescent dust particles swirling around, ultra high-speed camera, 60fps, 4k resolution, incredibly detailed texture morphing",
    description: "مثالي جداً للاستخدام في منصات توليد الفيديو مثل Runway Gen-3 أو Sora للحصول على حركات طبيعية وتMorphing مذهل.",
    tags: ["حركة", "تايم لابس", "رنواي", "سورا"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png"
  },
  {
    id: "p4",
    title: "صيغة الكتابة التسويقية لزيادة التحويلات",
    category: "Marketing",
    prompt: "Act as an elite conversion copywriter. I am launching a services called '[Insert Service]'. Write a high-converting landing page headline using the standard 'Before-After-Bridge' framework. Provide three powerful visual bullet points focusing on active relief of pain points, followed by a brief, urgent and premium call-to-action sentence.",
    description: "أمر مهندس خصيصاً لمطالبة الروبوتات الذكية مثل Gemini أو GPT-4 بصياغة نصوص وعناوين إعلانية فاخرة ترفع نسبة المبيعات.",
    tags: ["كتابة إعلانية", "صفحة هبوط", "جيميني", "إطار عمل"],
    difficulty: "Simple",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png"
  },
  {
    id: "p5",
    title: "سيرفر بيولوجي مضيء للكمبيوتر الكمومي",
    category: "Image",
    prompt: "Macro photography of an advanced biological supercomputer core, neon blue neurons pulse with liquid lavender optic data, glowing synthetic glass cooling tubes, deep obsidian dark case, hyper detailed depth of field, metallic copper wiring, 3D render feel mixed with high-end photography",
    description: "يصنع هذا الأمر لقطات ماكرو مدهشة لأجهزة متطورة وسيرفرات ذات تفاصيل علمية وسينمائية بارزة.",
    tags: ["رندرة 3D", "تفاصيل علمية", "مفهوم فني"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png"
  },
  {
    id: "p6",
    title: "سفينة فضائية أمام حلقة كوكب المشتري",
    category: "Video",
    prompt: "The camera slowly pulls back from a cozy wooden cabin suspended outside an orbital ring in the clouds of Jupiter, glowing electric orange light pouring from the cabin windows, ambient cosmic dust floating, massive gas giant storm spinning silently in background, 8k resolution, cinematic atmosphere",
    description: "مصمم لتوليد فيديو بطيء وهادئ يصف تراجع الكاميرا مع الحفاظ الكامل على دقة السحب وتوهج المركبات.",
    tags: ["تأثير الفضاء", "حركة فيديو", "لوما", "كلينغ"],
    difficulty: "Expert",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png"
  }
];

export const EN_PROMPTS: PromptItem[] = [
  {
    id: "p1",
    title: "Cinematic Cyberpunk Operative",
    category: "Image",
    prompt: "A cinematic wide shot of an elite cyberpunk operative wearing modular gear, looking towards a gargantuan purple neural network holographic system, volumetric electric neon blue mist, photorealistic face, hyper-detailed, shot on 85mm anamorphic lens, beautiful ambient light reflections, 8k resolution --ar 16:9 --style raw",
    description: "Meticulously optimized Midjourney prompt for photorealistic character shots with stunning neon reflections.",
    tags: ["cyberpunk", "cinematic", "portrait", "midjourney"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png"
  },
  {
    id: "p2",
    title: "Glassmorphic Tech Dashboard Mockup",
    category: "Design",
    prompt: "Ultra-premium futuristic dark application interface mockup, glassmorphic layout cards, deep charcoal background, subtle vibrant neon cyan glowing borders, professional sans-serif typography, elegant statistical charts, high-end tech corporate dashboard vibe, pristine aesthetic presentation --v 6.0",
    description: "Generates ultra-clean layouts with glassmorphic depth to inspire digital web portals.",
    tags: ["ui-ux", "glassmorphism", "inspiration", "figma"],
    difficulty: "Expert",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png"
  },
  {
    id: "p3",
    title: "Bioluminescent Flower Timelapse",
    category: "Video",
    prompt: "A close-up cinematic time-lapse video of an crystalline orchid blooming under alien solar rays, petals constructed of fluid light and electric purple fibers, camera gently zooms out, bioluminescent dust particles swirling around, ultra high-speed camera, 60fps, 4k resolution, incredibly detailed texture morphing",
    description: "Perfect for Runway Gen-3 or Sora to generate fluid organic growth and morphing actions.",
    tags: ["motion", "timelapse", "runway", "sora"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png"
  },
  {
    id: "p4",
    title: "Before-After-Bridge Sales Formula",
    category: "Marketing",
    prompt: "Act as an elite conversion copywriter. I am launching a services called '[Insert Service]'. Write a high-converting landing page headline using the standard 'Before-After-Bridge' framework. Provide three powerful visual bullet points focusing on active relief of pain points, followed by a brief, urgent and premium call-to-action sentence.",
    description: "Engineered prompt to guide LLMs like Gemini or GPT-4 in writing persuasive high-converting copy.",
    tags: ["copywriting", "landing-page", "gemini", "framework"],
    difficulty: "Simple",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png"
  },
  {
    id: "p5",
    title: "Quantum Supercomputer Core",
    category: "Image",
    prompt: "Macro photography of an advanced biological supercomputer core, neon blue neurons pulse with liquid lavender optic data, glowing synthetic glass cooling tubes, deep obsidian dark case, hyper detailed depth of field, metallic copper wiring, 3D render feel mixed with high-end photography",
    description: "Generates stunning tech-concept close-ups with professional depth of field.",
    tags: ["3d-render", "tech-details", "concept-art"],
    difficulty: "Advanced",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png"
  },
  {
    id: "p6",
    title: "Jupiter Low-Orbit Flight",
    category: "Video",
    prompt: "The camera slowly pulls back from a cozy wooden cabin suspended outside an orbital ring in the clouds of Jupiter, glowing electric orange light pouring from the cabin windows, ambient cosmic dust floating, massive gas giant storm spinning silently in background, 8k resolution, cinematic atmosphere",
    description: "Perfect prompt for smooth galactic panning camera angles.",
    tags: ["sci-fi", "panning", "luma", "kling"],
    difficulty: "Expert",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png"
  }
];

// Bilingual Portfolio
export const AR_PORTFOLIO: PortfolioItem[] = [
  {
    id: "pr1",
    title: "إطلاق الكورس الجديد والمميز: VIBE CODING",
    category: "أخبار الكورسات والمناهج",
    description: "تم رسمياً دمج كورس صناعة البرمجيات والمشاريع الرقمية التفاعلية باللغة العربية عبر وهندسة الأوامر مع الذكاء الاصطناعي لبناء واجهات برمجية حقيقية خطوة بخطوة وبدون خبرة سابقة.",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png",
    glowColor: "cyan",
    stats: "الجمعة، ٢٢ مايو ٢٠٢٦"
  },
  {
    id: "pr2",
    title: "تحديث تقني هائل لمنصة مُحسِّن الأوامر",
    category: "تحديثات منصة الأوامر",
    description: "يسعدنا الإعلان عن تحسين سرعة معالجة وتحليل الأوامر بنسبة 40٪ إضافية، مع دمج إمكانيات عدسات كاميرا وحسابات إضاءة سينمائية دقيقة لتصميم صور خارقة الجاذبية تلقائياً.",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png",
    glowColor: "purple",
    stats: "الإثنين، ١٨ مايو ٢٠٢٦"
  },
  {
    id: "pr3",
    title: "إنجاز فخري: تجاوز عتبة الـ 500 خريج مبدع",
    category: "إنجازات ونجاحات الأكاديمية",
    description: "نحتفل اليوم بتأهيل وتخريج أكثر من 500 متدرب متميز في العالم العربي ممن تمكنوا بالفعل من تحويل أفكارهم ومشاريعهم التوليدية إلى مصدر نجاح حقيقي ومستدام.",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png",
    glowColor: "blue",
    stats: "الأربعاء، ١٠ مايو ٢٠٢٦"
  }
];

export const EN_PORTFOLIO: PortfolioItem[] = [
  {
    id: "pr1",
    title: "New Course Launched: VIBE CODING Masterclass",
    category: "Course Releases",
    description: "We have officially integrated our groundbreaking Arabic web-building via natural language AI course, guiding creators step-by-step with no prior experience.",
    imageUrl: "/src/assets/images/futuristic_ai_hero_1779813579793.png",
    glowColor: "cyan",
    stats: "Friday, May 22, 2026"
  },
  {
    id: "pr2",
    title: "Vast Tech Upgrade for Prompt Optimizer",
    category: "Platform Deployments",
    description: "We are thrilled toannounce a massive 40% speed boost under high-concurrency requests, combined with cinema-lens and lens-weight models.",
    imageUrl: "/src/assets/images/creative_hologram_1779813617961.png",
    glowColor: "purple",
    stats: "Monday, May 18, 2026"
  },
  {
    id: "pr3",
    title: "Celebration: Over 500 Active Creative Alumni",
    category: "Alumni Landmarks",
    description: "Today we mark our greatest landmark of training and certifying over 500 creators across the Middle East, converting modern skills into independent paths.",
    imageUrl: "/src/assets/images/ai_art_creation_1779813598185.png",
    glowColor: "blue",
    stats: "Wednesday, May 10, 2026"
  }
];
