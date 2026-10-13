export interface Project {
  id: string;
  number: string;
  title: string;
  categoryEn: string;
  categoryAr: string;
  chessMetaphorEn: string;
  chessMetaphorAr: string;
  chessDescriptionEn: string;
  chessDescriptionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  technologies: string[];
  domainTagsEn: string[];
  domainTagsAr: string[];
  featuresEn: string[];
  featuresAr: string[];
  challengesEn: string[];
  challengesAr: string[];
  statusEn: string;
  statusAr: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshotAvailable: boolean;
}

export const projects: Project[] = [
  {
    id: 'house-platform',
    number: '01',
    title: 'House Platform',
    categoryEn: 'Multi-Module Digital Platform',
    categoryAr: 'منصة رقمية متعددة الوحدات',
    chessMetaphorEn: 'The Full Board',
    chessMetaphorAr: 'رقعة الشطرنج الكاملة',
    chessDescriptionEn:
      'A multi-module digital platform where several components must work together — like coordinating pieces across the entire board.',
    chessDescriptionAr:
      'منصة رقمية متعددة الوحدات تتكامل فيها المكونات بتناغم — كتنسيق وتمركز قطع الشطرنج عبر الرقعة بأكملها.',
    descriptionEn:
      'House Platform is a multi-module digital platform concept designed to connect educational and economic services through a unified digital experience.',
    descriptionAr:
      'منصة House Platform فكرة معمارية رقمية متعددة الوحدات صُممت لربط الخدمات التعليمية والاقتصادية عبر تجربة مستخدم موحدة.',
    technologies: ['Python', 'Django', 'React', 'Vite', 'Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL'],
    domainTagsEn: ['Web Development', 'Software Engineering', 'DevOps', 'UI/UX Design'],
    domainTagsAr: ['تطوير الويب', 'هندسة البرمجيات', 'DevOps', 'تصميم UI/UX'],
    featuresEn: [
      'Multi-module platform architecture',
      'Educational service modules',
      'API-driven data flow',
      'Authentication & session management',
      'Modular frontend components',
      'Database integration',
    ],
    featuresAr: [
      'معمارية منصة متعددة الوحدات',
      'وحدات الخدمات التعليمية',
      'تدفق بيانات معتمد على APIs',
      'إدارة المصادقة والجلسات',
      'مكونات واجهة أمامية معيارية',
      'ربط وتكامل قواعد البيانات',
    ],
    challengesEn: [
      'Coordinating multiple service modules',
      'Maintaining consistent UX across modules',
      'Managing complex data relationships',
    ],
    challengesAr: [
      'التنسيق البرمجي بين وحدات الخدمات المتعددة',
      'الحفاظ على تجربة مستخدم موحدة عبر كافة الوحدات',
      'إدارة علاقات البيانات المعقدة',
    ],
    statusEn: 'In Development',
    statusAr: 'قيد التطوير',
    screenshotAvailable: false,
  },
  {
    id: 'next-mind-ai',
    number: '02',
    title: 'Next Mind.AI',
    categoryEn: 'AI-Oriented Digital Product',
    categoryAr: 'منتج رقمي موجه للذكاء الاصطناعي',
    chessMetaphorEn: 'Thinking Ahead',
    chessMetaphorAr: 'التفكير بنقلات للأمام',
    chessDescriptionEn:
      'An AI-oriented product exploring intelligent interactions and reasoning — like a knight anticipating positions ahead.',
    chessDescriptionAr:
      'منتج يستكشف التفاعل الذكي والاستنتاج البرمجي — كحركة الحصان في استشراف النقلات والمواضع التالية.',
    descriptionEn:
      'Next Mind.AI is an AI-oriented digital product focused on bringing intelligent capabilities into a modern application experience.',
    descriptionAr:
      'مشروع Next Mind.AI منتج رقمي يركز على إدماج إمكانات الذكاء الاصطناعي داخل تجربة تفاعلية عصرية.',
    technologies: ['Next.js', 'React', 'TypeScript', 'AI API Integration', 'Modern CSS'],
    domainTagsEn: ['AI Integration', 'Web Development', 'Cloud Computing', 'UI/UX Design'],
    domainTagsAr: ['تكامل الذكاء الاصطناعي', 'تطوير الويب', 'الحوسبة السحابية', 'تصميم UI/UX'],
    featuresEn: [
      'AI-powered conversational interface',
      'Modern responsive design',
      'API integration for AI services',
      'User-friendly interaction design',
      'Error handling & graceful fallbacks',
    ],
    featuresAr: [
      'واجهة تفاعلية مدعومة بالذكاء الاصطناعي',
      'تصميم عصري متجاوب بالكامل',
      'تكامل واجهات برمجة تطبيقات الذكاء الاصطناعي',
      'تصميم تفاعلي يركز على سهولة الاستخدام',
      'معالجة استباقية للأخطاء واستجابات بديلة',
    ],
    challengesEn: [
      'Designing intuitive AI interaction patterns',
      'Managing API response handling & latency',
      'Building reliable error recovery',
    ],
    challengesAr: [
      'تصميم أنماط تفاعل ذكية وسلسة',
      'إدارة استجابات APIs وتأخير الشبكة',
      'بناء آليات استرداد موثوقة عند الأخطاء',
    ],
    statusEn: 'In Development',
    statusAr: 'قيد التطوير',
    screenshotAvailable: false,
  },
  {
    id: 'bezrah',
    number: '03',
    title: 'Bezrah / Bazra',
    categoryEn: 'Agricultural Products & E-Commerce',
    categoryAr: 'المنتجات الزراعية والتجارة الإلكترونية',
    chessMetaphorEn: 'Precision and Positioning',
    chessMetaphorAr: 'الدقة والتمركز',
    chessDescriptionEn:
      'A precise, grid-organized platform where every product finds its exact position — like pieces on a well-structured board.',
    chessDescriptionAr:
      'منصة منظمة بدقة شبكية حيث يأخذ كل منتج موضعه الصحيح — كقطع الشطرنج المتمركزة بدقة على الرقعة.',
    descriptionEn:
      'Bezrah is an agricultural-products platform focused on product discovery, organized catalog presentation, and an accessible bilingual shopping experience.',
    descriptionAr:
      'بذرة (Bezrah) منصة منتجات زراعية وتجارة إلكترونية تركز على تصفح المنتجات المنظم وتجربة تسوق ثنائية اللغة (عربي / إنجليزي).',
    technologies: ['Vue 3', 'Vite', 'Laravel', 'PostgreSQL', 'OAuth', 'Arabic & English Localization'],
    domainTagsEn: ['Web Development', 'Software Engineering', 'UI/UX Design'],
    domainTagsAr: ['تطوير الويب', 'هندسة البرمجيات', 'تصميم UI/UX'],
    featuresEn: [
      'Agricultural product catalog',
      'Bilingual interface (Arabic & English)',
      'Product images & information',
      'Categories & pricing',
      'Authentication & registration',
      'Shopping cart & quantity controls',
      'Responsive product browsing',
    ],
    featuresAr: [
      'كتالوج المنتجات الزراعية وتفاصيلها',
      'واجهة ثنائية اللغة بالكامل (عربي وإنجليزي)',
      'صور ومعلومات وبيانات المنتجات',
      'التصنيفات والأسعار',
      'المصادقة وتسجيل الحسابات',
      'سلة التسوق والتحكم في الكميات',
      'تصفح متجاوب ومريح للمنتجات',
    ],
    challengesEn: [
      'Implementing seamless bilingual RTL/LTR support',
      'Managing product image assets',
      'Frontend-backend data synchronization',
    ],
    challengesAr: [
      'تنفيذ دعم ثنائي اللغة سلس (RTL و LTR)',
      'إدارة أصول وصور المنتجات بجودة عالية',
      'مزامنة البيانات بين الواجهة الأمامية والنظام الخلفي',
    ],
    statusEn: 'In Development',
    statusAr: 'قيد التطوير',
    screenshotAvailable: false,
  },
  {
    id: 'enterprise-platform',
    number: '04',
    title: 'Enterprise Platform',
    categoryEn: 'Enterprise Application',
    categoryAr: 'تطبيق وإدارة المؤسسات',
    chessMetaphorEn: 'Coordinated Systems',
    chessMetaphorAr: 'الأنظمة المنسقة',
    chessDescriptionEn:
      'An enterprise system where frontend, backend, data, and real-time communication coordinate like pieces in a decisive combination.',
    chessDescriptionAr:
      'نظام مؤسسي تتناغم فيه خدمات الواجهة والمنطق البرمجي وقواعد البيانات والاتصال اللحظي كتنسيق القطع في نقلة حاسمة.',
    descriptionEn:
      'Enterprise Platform explores structured application development through a modern frontend, backend services, persistent data, and real-time communication capabilities.',
    descriptionAr:
      'منصة Enterprise Platform تستكشف التطوير الهيكلي للمؤسسات عبر واجهة حديثة، وخدمات خلفية، وقواعد بيانات، وقدرات اتصال فوري (Real-Time).',
    technologies: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'SignalR', 'TypeScript'],
    domainTagsEn: ['Web Development', 'Software Engineering', 'IT & Systems'],
    domainTagsAr: ['تطوير الويب', 'هندسة البرمجيات', 'تكنولوجيا المعلومات'],
    featuresEn: [
      'Angular component architecture',
      'ASP.NET Core APIs',
      'Database models & relationships',
      'Real-time capabilities via SignalR',
      'Validation & error handling',
      'Structured service layer',
    ],
    featuresAr: [
      'معمارية مكونات Angular المتطورة',
      'واجهات برمجة تطبيقات ASP.NET Core',
      'نماذج وقواعد بيانات PostgreSQL',
      'قدرات الاتصال اللحظي عبر SignalR',
      'التحقق من البيانات ومعالجة الأخطاء',
      'طبقة خدمات برمجية منظمة',
    ],
    challengesEn: [
      'Coordinating frontend and backend services',
      'Implementing real-time communication reliability',
      'Managing complex data relationships',
    ],
    challengesAr: [
      'التنسيق بين خدمات الواجهة والنظام الخلفي',
      'اعتمادية الاتصال اللحظي في الشبكة',
      'إدارة علاقات الجداول والبيانات المعقدة',
    ],
    statusEn: 'In Development',
    statusAr: 'قيد التطوير',
    screenshotAvailable: false,
  },
];
