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
    id: 'house-economic',
    number: '01',
    title: 'House Economic Platform',
    categoryEn: 'Economic & Financial Services System',
    categoryAr: 'منصة الخدمات الاقتصادية والاستثمارية',
    chessMetaphorEn: 'Positional Advantage',
    chessMetaphorAr: 'التفوق التكتيكي وإدارة الموارد',
    chessDescriptionEn:
      'Strategic management of economic value and transactions — managing financial moves like converting positional advantages on the chessboard.',
    chessDescriptionAr:
      'إدارة استراتيجية للقيم الاقتصادية والعمليات المالية — كتحويل التفوق التكتيكي إلى مكاسب حاسمة على رقعة الشطرنج.',
    descriptionEn:
      'House Economic Platform is a dedicated financial and business services module engineered for transaction processing, financial analytics, merchant workflows, and investment decision support.',
    descriptionAr:
      'منصة House الاقتصادية هي نظام رقمي متخصص في الخدمات المالية والتجارية، يربط بين معالجة المعاملات الاقتصادية، تحليل المؤشرات المالية، ودعم اتخاذ القرارات الاستثمارية بأعلى معايير الأمان والموثوقية.',
    technologies: ['Python', 'Django', 'React', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Financial Modeling', 'Data Analytics'],
    domainTagsEn: ['Software Engineering', 'Web Development', 'Business Analysis', 'IT & Systems'],
    domainTagsAr: ['هندسة البرمجيات', 'تطوير الويب', 'تحليل الأعمال', 'تكنولوجيا المعلومات'],
    featuresEn: [
      'Economic transaction processing architecture',
      'Financial indicators & business analytics dashboard',
      'Secure payment & ledger flow integration',
      'Merchant & stakeholder management modules',
      'Auditing, reporting & invoice generation',
      'Scalable relational data models in PostgreSQL',
    ],
    featuresAr: [
      'معمارية متطورة لمعالجة العمليات والصفقات الاقتصادية',
      'لوحة تحكم للمؤشرات المالية والتحليلات التجارية',
      'تكامل آمن مع بوابات الدفع وسجلات القيود المالية',
      'إدارة حسابات التجار والمستثمرين وأصحاب المصلحة',
      'نظام تدقيق وتقارير مالية وتوليد الفواتير',
      'نماذج بيانات علائقية قابلة للتوسع في PostgreSQL',
    ],
    challengesEn: [
      'Ensuring ACID transaction consistency under high concurrency',
      'Designing intuitive financial reporting dashboards for non-technical users',
      'Structuring complex financial data relationships and audit trails',
    ],
    challengesAr: [
      'ضمان اتساق المعاملات المالية (ACID) تحت ضغط الاستخدام العالي',
      'تصميم واجهات تقارير مالية واضحة ومبسطة للمستخدمين',
      'هندسة سجلات التدقيق المحاسبي وعلاقات البيانات المالية المعقدة',
    ],
    statusEn: 'In Development',
    statusAr: 'قيد التطوير',
    screenshotAvailable: false,
  },
  {
    id: 'house-academic',
    number: '02',
    title: 'House Academic Platform',
    categoryEn: 'Academic & Educational Management System',
    categoryAr: 'منصة الخدمات الأكاديمية والتعليمية',
    chessMetaphorEn: 'Structured Advancement',
    chessMetaphorAr: 'التقدم المنهجي وبناء القدرات',
    chessDescriptionEn:
      'Systematic educational workflows developing student capabilities step by step — like calculated, coordinated pawn promotions.',
    chessDescriptionAr:
      'مسارات تعليمية وأكاديمية منهجية ترتقي بقدرات الطالب خطوة بخطوة — كترقية البيادق المدروسة في استراتيجية الشطرنج.',
    descriptionEn:
      'House Academic Platform is an end-to-end educational management environment dedicated to student lifecycle tracking, curriculum delivery, grade assessments, lecture scheduling, and university administration.',
    descriptionAr:
      'منصة House الأكاديمية هي بيئة تعليمية وإدارية شاملة مخصصة لمتابعة مسار الطلاب الدراسي، إدارة المناهج والمحاضرات، تقييم الاختبارات، وأتمتة العمليات الأكاديمية للجامعات والمعاهد الحديثة.',
    technologies: ['Node.js', 'React', 'Vite', 'TypeScript', 'PostgreSQL', 'Role-Based Access Control', 'REST APIs', 'Modern CSS'],
    domainTagsEn: ['Web Development', 'Software Engineering', 'UI/UX Design', 'DevOps'],
    domainTagsAr: ['تطوير الويب', 'هندسة البرمجيات', 'تصميم UI/UX', 'DevOps'],
    featuresEn: [
      'Role-based portals (Students, Instructors, Administration)',
      'Curriculum, course materials & lecture schedule management',
      'Assessment submission & gradebook tracking',
      'Student academic progress analytics',
      'Real-time announcements & academic notices',
      'Responsive, accessible mobile-friendly interface',
    ],
    featuresAr: [
      'بوابات مخصصة متعددة الصلاحيات (طلاب، أعضاء هيئة التدريس، إدارة)',
      'إدارة المناهج الدراسية، المحاضرات، والجداول الأكاديمية',
      'تسليم الواجبات ورصد الدرجات والتقييمات الدورية',
      'تحليلات شاملة لقياس التقدم والتحصيل الدراسي للطلاب',
      'نظام إشعارات وتنبيهات أكاديمية فورية',
      'واجهة متجاوبة وسهلة الاستخدام بالكامل عبر الهواتف والحواسيب',
    ],
    challengesEn: [
      'Designing strict multi-role permission hierarchies (RBAC)',
      'Managing diverse file uploads and course asset distribution',
      'Optimizing query response times across large student rosters',
    ],
    challengesAr: [
      'بناء نظام صلاحيات هرمي دقيق ومحكم متعدد الأدوار (RBAC)',
      'إدارة رفع وتوزيع الملفات والمواد التعليمية بكفاءة',
      'تحسين سرعة الاستعلامات وقواعد البيانات مع أعداد الطلاب الكبيرة',
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
