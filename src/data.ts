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
  navLibrary: "Prompts Library",
  navShowcase: "Latest News",
  navContact: "Contact",
  heroHeadline: "ELEVATE YOUR",
  heroHighlight: "CREATIVE REVOLUTION",
  heroSub: "Amir AI Studio represents the supreme nexus of technical wisdom and visual craftsmanship. We empower artists, creators, and business leaders with futuristic generative capabilities to translate sheer imagination into commercial realities.",
  exploreBtn: "Explore AI Courses",
  viewPromptBtn: "View Prompts Library",
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
    title: "صورة بورتريه أبيض وأسود",
    category: "Personal",
    prompt: "Enhance this photo into a vibrant aesthetic scene. Keep 100% of the man's real face exactly as it is (do not modify facial features) without any alteration. As a dramatic, ultra-realistic close-up in black and white with high-contrast cinematic lighting from the side, highlighting the contours of his face and beard, casting deep shadows. He wears aviator, reflective sunglasses. He gazes confidently upward into a dark void. The sunglasses reflect a city's towering skyline. The atmosphere is mysterious with a minimalist black background. Details in 4K.",
    description: "أمر نصي معد خصيصاً في Gemini لمحاكاة تفاصيل الوجوه والحفاظ على الملامح بنسبة كبيرة.",
    tags: ["بورتريه", "أبيض وأسود", "جيميني", "سينمائي"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779878821/001_vpveej.png"
  },
  {
    id: "p2",
    title: "كارت معايدة مرح لعيد الأضحى",
    category: "Cards",
    prompt: `A highly creative premium 3D cartoon-style inspired by modern animated movie aesthetics and playful social-media selfie culture. Create a funny group selfie moment featuring multiple Eid sacrificial animals together on a studio like low saturated red background. We can fully see the characters, full body.
The main focus should be a cheerful oversized person from the uploaded reference image, keep 100% of his real face exactly as it is (do not modify facial features) without any alteration. In casual modern outfit, holding a modern smartphone in one hand while taking a selfie. oversized head and caricatured body proportions, ,energetic dominant personality. The person should stand slightly in front like the group leader taking the selfie. Around the person, several expressive Eid animals pose together naturally: a playful goat, a fluffy dumba/sheep, a cute big cow, and a tall camel.
All animals should have exaggerated emotional cartoon expressions, wide smiles, funny poses, and energetic body language as if squeezing together for a joyful Eid selfie moment. The person holding the phone should have the strongest presence in the frame with dynamic selfie angle composition. Some animals can lean toward the camera, raise hooves, smile dramatically, or make funny selfie reactions for a premium comedic storytelling feel.
Add a huge “عيد مبارك” text in a bubbly white font. Pixar-style premium 3D rendering, ultra detailed fur textures, smooth cinematic shading, oversized expressive eyes, realistic horn textures, soft rounded shapes, luxury CGI animation quality, modern conceptual Eid campaign aesthetic. no environment, no extra props, only soft grounded shadows beneath the characters for depth.
Ultra high quality, masterpiece rendering, crisp edges, cinematic studio lighting, luxury animated poster style, ultra HD, no watermark.`,
    description: "أمر نصي معد خصيصاً في Gemini لمحاكاة تفاصيل الصور الشخصية وتحويلها لتصميم ملائم.",
    tags: ["كروت", "عيد الأضحى", "جيميني", "ثلاثي الأبعاد"],
    difficulty: "Expert",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779880797/3001_hnfilr.png"
  },
  {
    id: "p3",
    title: "اسم المشروع لتصميم لوجو",
    category: "Other",
    prompt: `Design a modern, professional logo for a (اكتب هنا نوع النشاط) named "اسم مشروعك بالانجليزي". The design should be simple, distinctive, and inspired by modern design trends of 2026.
Create a clean geometric monoline icon inspired by the meaning of the name or its letters, with smart use of negative space, balanced composition, and strong contemporary typography. The logo system should consist of an icon + the brand name.
The color palette should be automatically chosen to suit the nature of the project and its brand identity.
Style: flat vector design, suitable for full brand identity use including signage, packaging, and digital platforms. Central composition, clean background, elegant, timeless, and highly recognizable logo.
The logo name must appear in both English and Arabic in a dynamic adaptive layout that fits the logo composition. The Arabic equivalent should appear in its designated place: (اسم مشروعك بالعربي).
The logo must contain only one main visual element, with no extra elements, ornaments, stars, or surrounding effects.
Vertical composition with a 3:4 aspect ratio.`,
    description: "أمر نصي معد خصيصاً في Gemini لتحويل اسم مشروعك ونشاطه لتصميم لوجو بسيط وابداعي.",
    tags: ["لوجو", "هوية بصرية", "جيميني", "تصميم"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881311/4001_mua4cu.jpg"
  },
  {
    id: "p4",
    title: "صورة بتصميم مميز لأسمك",
    category: "Other",
    prompt: `Create a 1:1 square cinematic emblem artwork set against a matte black rock wall background, showing deep stone texture, natural cracks, rough surfaces, and subtle variations in darkness. Use dramatic side lighting to create strong contrast, deep shadows, and a powerful sense of depth while keeping the background dark, solid, and intimidating.

In the foreground, place a bold circular emblem with heavy presence, crafted from layered dark metal and aged gold. The circular frame is thick and solid, with engraved details, worn edges, and subtle scratches that suggest strength, history, and authority. At the top of the emblem, integrate a majestic eagle with wide wings and sharp features, symbolizing dominance and leadership. The eagle is sculpted in metal with gold highlights catching the light, enhancing its power.

Inside the center of the circle, write one Arabic name: الاسم. The name should be large, dominant, and impossible to ignore, written in a playful hand-drawn Arabic style that still feels strong and confident. The strokes are bold, rounded, and expressive, with slight irregularities like hand-drawn ink, but with enough thickness and weight to feel masculine and powerful. The text appears slightly raised or carved into a dark metal surface, with gold fill, deep inner shadows, and clear separation from the background.

At the bottom of the emblem, attach a thick curved ribbon or metal plaque, firmly integrated into the design. On this ribbon, automatically generate a short powerful Arabic phrase (2–4 words) that praises the name holder, expressing qualities such as strength, honor, courage, leadership, or excellence. The phrase should be written in the same playful handwritten Arabic drawing style, but heavier and more grounded, engraved or painted in gold with visible texture and depth.

Use cinematic lighting with controlled highlights, soft glow on gold edges, and deep shadows to enhance realism and authority. The overall mood is powerful, confident, heroic, and timeless, blending raw strength with artistic personality. Ultra-high resolution, sharp details, realistic materials, no English text, no logos, no extra symbols.`,
    description: "أمر نصي معد خصيصاً في Gemini لإعادة تصميم اسمك الشخصي بشكل إحترافي وجذاب.",
    tags: ["تصميم اسم", "شعار", "جيميني", "سينمائي"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881734/4002_k6mbws.png"
  },
  {
    id: "p5",
    title: "صورة منتج بخلفية بيضاء",
    category: "Products",
    prompt: `Transform the uploaded product photo into a professional high-end product photography shot. Keep the product’s exact appearance, colors, shape, texture, branding, proportions, and all packaging details completely accurate and unaltered.
Remove the entire original background, including hands, tables, reflections, shadows, or any distracting elements. Place the product on a seamless pure white background (#FFFFFF) with no visible environment or scene details. The background must remain completely clean, solid white, and uniform across the entire image.
Use professional studio lighting with soft balanced highlights, clean reflections, gentle shadows, and subtle depth to maintain a realistic premium commercial look. Add only a soft natural shadow directly beneath the product for realism without affecting the clean white background.
The final image should look like a premium e-commerce studio product photo suitable for Amazon, online stores, catalogs, social media ads, and professional brand campaigns.
Ultra-clean, photorealistic 4K product photography.`,
    description: "أمر نصي معد خصيصاً في Gemini لتحسين جودة صورة أي منتج وعزل الخلفية ووضع خلفية بيضاء نظيفة.",
    tags: ["منتجات", "خلفية بيضاء", "جيميني", "تعديل صور"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779880085/a183fed1-f313-4830-830c-f7782a23bfb3_xsne18.jpg"
  },
  {
    id: "p6",
    title: "صورة بتصميم مميز لإسمك",
    category: "Other",
    prompt: `Create a 1:1 square royal feminine design that feels luxurious, graceful, and highly attractive to women.

The composition features a refined circular center framed with delicate gold accents, soft floral elements, subtle heart motifs, and elegant curves — minimal, polished, and sophisticated (not playful, not childish).
Use a rich yet soft color palette: rose gold, blush pink, champagne gold, pearl white, with gentle gradients and a silky matte finish.
Inside the central circle, place one Arabic name: [الاسم], centered and prominent, written in a luxurious elegant Arabic typography with smooth flowing strokes, balanced proportions, and a regal presence. The text should feel feminine, confident, and timeless — slightly calligraphic but clean and modern.
At the bottom, add a refined curved ribbon or elegant plaque. On this ribbon, automatically generate a short refined Arabic sentence praising the name holder, WITHOUT using the word “يا”, written in a soft feminine handwritten Arabic style that feels graceful, warm, and flattering (elegance, charm, dignity, beauty). The phrase should adapt naturally to the name and feel exclusive and personal.
Lighting is soft and cinematic, with gentle highlights on gold details, subtle shadows, and depth.

High-end illustration quality, smooth textures, balanced symmetry, no clutter, no English text, no cartoon elements.`,
    description: "أمر نصي معد خصيصاً في Gemini لإعادة تصميم اسمك الشخصي بشكل إحترافي وجذاب.",
    tags: ["تصميم اسم", "ملكي", "جيميني", "نسائي"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881940/4003_vuh3sx.png"
  }
];

export const EN_PROMPTS: PromptItem[] = [
  {
    id: "p1",
    title: "Black and White Portrait",
    category: "Personal",
    prompt: "Enhance this photo into a vibrant aesthetic scene. Keep 100% of the man's real face exactly as it is (do not modify facial features) without any alteration. As a dramatic, ultra-realistic close-up in black and white with high-contrast cinematic lighting from the side, highlighting the contours of his face and beard, casting deep shadows. He wears aviator, reflective sunglasses. He gazes confidently upward into a dark void. The sunglasses reflect a city's towering skyline. The atmosphere is mysterious with a minimalist black background. Details in 4K.",
    description: "Meticulously optimized Gemini prompt designed to elevate portraits while perfectly retaining original facial features and structure.",
    tags: ["portrait", "black-white", "gemini", "cinematic"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779878821/001_vpveej.png"
  },
  {
    id: "p2",
    title: "Playful Eid Al-Adha Cartoon Card",
    category: "Cards",
    prompt: `A highly creative premium 3D cartoon-style inspired by modern animated movie aesthetics and playful social-media selfie culture. Create a funny group selfie moment featuring multiple Eid sacrificial animals together on a studio like low saturated red background. We can fully see the characters, full body.
The main focus should be a cheerful oversized person from the uploaded reference image, keep 100% of his real face exactly as it is (do not modify facial features) without any alteration. In casual modern outfit, holding a modern smartphone in one hand while taking a selfie. oversized head and caricatured body proportions, ,energetic dominant personality. The person should stand slightly in front like the group leader taking the selfie. Around the person, several expressive Eid animals pose together naturally: a playful goat, a fluffy dumba/sheep, a cute big cow, and a tall camel.
All animals should have exaggerated emotional cartoon expressions, wide smiles, funny poses, and energetic body language as if squeezing together for a joyful Eid selfie moment. The person holding the phone should have the strongest presence in the frame with dynamic selfie angle composition. Some animals can lean toward the camera, raise hooves, smile dramatically, or make funny selfie reactions for a premium comedic storytelling feel.
Add a huge “عيد مبارك” text in a bubbly white font. Pixar-style premium 3D rendering, ultra detailed fur textures, smooth cinematic shading, oversized expressive eyes, realistic horn textures, soft rounded shapes, luxury CGI animation quality, modern conceptual Eid campaign aesthetic. no environment, no extra props, only soft grounded shadows beneath the characters for depth.
Ultra high quality, masterpiece rendering, crisp edges, cinematic studio lighting, luxury animated poster style, ultra HD, no watermark.`,
    description: "Meticulously optimized Gemini prompt designed to turn portraits into a playful premium 3D Pixar-style interactive Eid selfie card with cute animals.",
    tags: ["cards", "eid", "gemini", "3d-render"],
    difficulty: "Expert",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779880797/3001_hnfilr.png"
  },
  {
    id: "p3",
    title: "Project Logo Designer",
    category: "Other",
    prompt: `Design a modern, professional logo for a (اكتب هنا نوع النشاط) named "اسم مشروعك بالانجليزي". The design should be simple, distinctive, and inspired by modern design trends of 2026.
Create a clean geometric monoline icon inspired by the meaning of the name or its letters, with smart use of negative space, balanced composition, and strong contemporary typography. The logo system should consist of an icon + the brand name.
The color palette should be automatically chosen to suit the nature of the project and its brand identity.
Style: flat vector design, suitable for full brand identity use including signage, packaging, and digital platforms. Central composition, clean background, elegant, timeless, and highly recognizable logo.
The logo name must appear in both English and Arabic in a dynamic adaptive layout that fits the logo composition. The Arabic equivalent should appear in its designated place: (اسم مشروعك بالعربي).
The logo must contain only one main visual element, with no extra elements, ornaments, stars, or surrounding effects.
Vertical composition with a 3:4 aspect ratio.`,
    description: "Meticulously optimized Gemini prompt designed to turn your project name and activity into an elegant, minimalistic, and creative logo.",
    tags: ["logo", "branding", "gemini", "vector"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881311/4001_mua4cu.jpg"
  },
  {
    id: "p4",
    title: "Custom Name Art Design",
    category: "Other",
    prompt: `Create a 1:1 square cinematic emblem artwork set against a matte black rock wall background, showing deep stone texture, natural cracks, rough surfaces, and subtle variations in darkness. Use dramatic side lighting to create strong contrast, deep shadows, and a powerful sense of depth while keeping the background dark, solid, and intimidating.

In the foreground, place a bold circular emblem with heavy presence, crafted from layered dark metal and aged gold. The circular frame is thick and solid, with engraved details, worn edges, and subtle scratches that suggest strength, history, and authority. At the top of the emblem, integrate a majestic eagle with wide wings and sharp features, symbolizing dominance and leadership. The eagle is sculpted in metal with gold highlights catching the light, enhancing its power.

Inside the center of the circle, write one Arabic name: الاسم. The name should be large, dominant, and impossible to ignore, written in a playful hand-drawn Arabic style that still feels strong and confident. The strokes are bold, rounded, and expressive, with slight irregularities like hand-drawn ink, but with enough thickness and weight to feel masculine and powerful. The text appears slightly raised or carved into a dark metal surface, with gold fill, deep inner shadows, and clear separation from the background.

At the bottom of the emblem, attach a thick curved ribbon or metal plaque, firmly integrated into the design. On this ribbon, automatically generate a short powerful Arabic phrase (2–4 words) that praises the name holder, expressing qualities such as strength, honor, courage, leadership, or excellence. The phrase should be written in the same playful handwritten Arabic drawing style, but heavier and more grounded, engraved or painted in gold with visible texture and depth.

Use cinematic lighting with controlled highlights, soft glow on gold edges, and deep shadows to enhance realism and authority. The overall mood is powerful, confident, heroic, and timeless, blending raw strength with artistic personality. Ultra-high resolution, sharp details, realistic materials, no English text, no logos, no extra symbols.`,
    description: "Meticulously optimized Gemini prompt designed to turn your personal name into a professional, highly styled cinematic 3D emblem illustration.",
    tags: ["name-art", "emblem", "gemini", "cinematic"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881734/4002_k6mbws.png"
  },
  {
    id: "p5",
    title: "White Background Product Shot",
    category: "Products",
    prompt: `Transform the uploaded product photo into a professional high-end product photography shot. Keep the product’s exact appearance, colors, shape, texture, branding, proportions, and all packaging details completely accurate and unaltered.
Remove the entire original background, including hands, tables, reflections, shadows, or any distracting elements. Place the product on a seamless pure white background (#FFFFFF) with no visible environment or scene details. The background must remain completely clean, solid white, and uniform across the entire image.
Use professional studio lighting with soft balanced highlights, clean reflections, gentle shadows, and subtle depth to maintain a realistic premium commercial look. Add only a soft natural shadow directly beneath the product for realism without affecting the clean white background.
The final image should look like a premium e-commerce studio product photo suitable for Amazon, online stores, catalogs, social media ads, and professional brand campaigns.
Ultra-clean, photorealistic 4K product photography.`,
    description: "Meticulously optimized Gemini prompt designed to remove raw backgrounds and place products onto high-end seamless studio white backgrounds perfectly maintaining colors and labels.",
    tags: ["products", "white-bg", "gemini", "e-commerce"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779880085/a183fed1-f313-4830-830c-f7782a23bfb3_xsne18.jpg"
  },
  {
    id: "p6",
    title: "Royal Feminine Name Art",
    category: "Other",
    prompt: `Create a 1:1 square royal feminine design that feels luxurious, graceful, and highly attractive to women.

The composition features a refined circular center framed with delicate gold accents, soft floral elements, subtle heart motifs, and elegant curves — minimal, polished, and sophisticated (not playful, not childish).
Use a rich yet soft color palette: rose gold, blush pink, champagne gold, pearl white, with gentle gradients and a silky matte finish.
Inside the central circle, place one Arabic name: [الاسم], centered and prominent, written in a luxurious elegant Arabic typography with smooth flowing strokes, balanced proportions, and a regal presence. The text should feel feminine, confident, and timeless — slightly calligraphic but clean and modern.
At the bottom, add a refined curved ribbon or elegant plaque. On this ribbon, automatically generate a short refined Arabic sentence praising the name holder, WITHOUT using the word “يا”, written in a soft feminine handwritten Arabic style that feels graceful, warm, and flattering (elegance, charm, dignity, beauty). The phrase should adapt naturally to the name and feel exclusive and personal.
Lighting is soft and cinematic, with gentle highlights on gold details, subtle shadows, and depth.

High-end illustration quality, smooth textures, balanced symmetry, no clutter, no English text, no cartoon elements.`,
    description: "Meticulously optimized Gemini prompt designed to transform female Arabic names into highly elegant, luxurious royal-themed artwork with soft rose gold and blush tones.",
    tags: ["name-art", "royal", "gemini", "feminine"],
    difficulty: "Advanced",
    imageUrl: "https://res.cloudinary.com/deuwh0ysg/image/upload/v1779881940/4003_vuh3sx.png"
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
