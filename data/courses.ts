export interface Course {
  id: string;
  code: string;
  titleEn: string;
  titleAr: string;
  provider: string;
  platform: string;
  descriptionEn: string;
  descriptionAr: string;
  topicsEn: string[];
  topicsAr: string[];
  statusEn: string;
  statusAr: string;
  certificateStatusEn: string;
  certificateStatusAr: string;
  verificationUrl?: string; // Optional verified link or placeholder
}

export const cs50Courses: Course[] = [
  {
    id: 'icdl-real-soft-house',
    code: 'ICDL',
    titleEn: 'ICDL — International Computer Driving Licence',
    titleAr: 'ICDL — رخصة قيادة الحاسوب الدولية',
    provider: 'Real Soft House',
    platform: 'Real Soft House Testing & Training Center',
    descriptionEn:
      'Recognized certification validating comprehensive IT competency: computer systems, office applications, data management, and digital collaboration.',
    descriptionAr:
      'شهادة معتمدة تؤكد الكفاءة الرقمية الشاملة: أنظمة الحاسوب، التطبيقات المكتبية، معالجة البيانات، والتعامل الآمن مع الإنترنت وأدوات العمل الرقمي.',
    topicsEn: [
      'Computer Essentials & Windows',
      'Word Processing (MS Word)',
      'Spreadsheets (MS Excel)',
      'Presentations (MS PowerPoint)',
      'Databases (MS Access)',
      'Online Essentials & Collaboration',
      'Cyber Security & Digital Safety',
    ],
    topicsAr: [
      'أساسيات الحاسوب ونظام Windows',
      'معالجة النصوص (MS Word)',
      'الجداول الإلكترونية (MS Excel)',
      'العروض التقديمية (MS PowerPoint)',
      'مفاهيم قواعد البيانات (MS Access)',
      'أساسيات الإنترنت والعمل الجماعي',
      'الأمن الرقمي والسلامة المعلوماتية',
    ],
    statusEn: 'Certified & Verified',
    statusAr: 'شهادة معتمدة ومجتازة بنجاح',
    certificateStatusEn: 'Official Certification Verified',
    certificateStatusAr: 'شهادة رسمية معتمدة',
  },
  {
    id: 'cs50x',
    code: 'CS50x',
    titleEn: 'CS50x — Introduction to Computer Science',
    titleAr: 'CS50x — مقدمة في علوم الحاسب',
    provider: 'Harvard University',
    platform: 'edX / Harvard Online',
    descriptionEn:
      'An intellectual enterprise in the art of programming and computer science fundamentals: algorithmic thinking, problem-solving, data structures, and memory management.',
    descriptionAr:
      'المدخل التأسيسي الأكاديمي لعلوم الحاسب وفن البرمجة: التفكير الخوارزمي، حل المشكلات المعقدة، هياكل البيانات، وإدارة الذاكرة.',
    topicsEn: ['C Language', 'Memory & Pointers', 'Data Structures', 'Algorithms', 'Python', 'SQL', 'HTML/CSS/JS'],
    topicsAr: ['لغة C', 'الذاكرة والمؤشرات', 'هياكل البيانات', 'الخوارزميات', 'بايثون', 'قواعد بيانات SQL', 'أساسيات الويب'],
    statusEn: 'Coursework Studied & Completed',
    statusAr: 'دراسة المنهج والمشاريع البرمجية',
    certificateStatusEn: 'Academic Coursework Verified',
    certificateStatusAr: 'منهج أكاديمي معتمد',
  },
  {
    id: 'cs50p',
    code: 'CS50P',
    titleEn: 'CS50P — Introduction to Programming with Python',
    titleAr: 'CS50P — مقدمة في البرمجة بلغة بايثون',
    provider: 'Harvard University',
    platform: 'edX / Harvard Online',
    descriptionEn:
      'Comprehensive programming with Python: functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, regular expressions, and object-oriented programming.',
    descriptionAr:
      'دراسة متعمقة للبرمجة بلغة بايثون: الدوال، المتغيرات، الشروط، الحلقات، الاستثناءات، المكتبات، الاختبارات الوحدوية، والبرمجة كائنية التوجه (OOP).',
    topicsEn: ['Python Syntax', 'Exceptions & Validation', 'Unit Tests (pytest)', 'File I/O', 'Regex', 'OOP in Python'],
    topicsAr: ['صياغة بايثون', 'معالجة الأخطاء والتحقق', 'اختبارات الوحدات pytest', 'التعامل مع الملفات', 'التعبيرات النمطية', 'البرمجة كائنية التوجه'],
    statusEn: 'Coursework Studied & Completed',
    statusAr: 'دراسة المنهج والمشاريع البرمجية',
    certificateStatusEn: 'Academic Coursework Verified',
    certificateStatusAr: 'منهج أكاديمي معتمد',
  },
  {
    id: 'cs50-cybersecurity',
    code: 'CS50 Cybersecurity',
    titleEn: 'CS50 Cybersecurity — Introduction to Cybersecurity',
    titleAr: 'CS50 Cybersecurity — مقدمة في الأمن السيبراني',
    provider: 'Harvard University',
    platform: 'edX / Harvard Online',
    descriptionEn:
      'Understanding modern cybersecurity threats, defenses, cryptography, authentication, network security, risk assessment, and protective software design.',
    descriptionAr:
      'فهم التهديدات السيبرانية الحديثة، آليات الدفاع، التشفير، المصادقة، أمن الشبكات، تقييم المخاطر، وتصميم برمجيات آمنة.',
    topicsEn: ['Security Fundamentals', 'Cryptography', 'Authentication & Passwords', 'Network Defenses', 'Threat Modeling'],
    topicsAr: ['أساسيات الأمان', 'علم التشفير', 'المصادقة وكلمات المرور', 'دفاعات الشبكات', 'نمذجة التهديدات'],
    statusEn: 'Coursework Studied & Completed',
    statusAr: 'دراسة المنهج والمشاريع البرمجية',
    certificateStatusEn: 'Academic Coursework Verified',
    certificateStatusAr: 'منهج أكاديمي معتمد',
  },
  {
    id: 'cs50w',
    code: 'CS50W',
    titleEn: 'CS50W — Web Programming with Python and JavaScript',
    titleAr: 'CS50W — برمجة الويب باستخدام بايثون وجافاسكريبت',
    provider: 'Harvard University',
    platform: 'edX / Harvard Online',
    descriptionEn:
      'Designing and implementing web apps using Python, JavaScript, Django, and modern tooling: database modeling, user accounts, UI interactivity, APIs, and scalability.',
    descriptionAr:
      'تصميم وبناء تطبيقات الويب باستخدام بايثون وجافاسكريبت وإطار Django: نمذجة قواعد البيانات، إدارة المستخدمين، تفاعلية الواجهات، وواجهات APIs.',
    topicsEn: ['Django Framework', 'JavaScript & React', 'SQL & Models', 'RESTful APIs', 'Authentication', 'CI/CD & Testing'],
    topicsAr: ['إطار عمل Django', 'جافاسكريبت وReact', 'نماذج وقواعد بيانات SQL', 'واجهات REST APIs', 'المصادقة والأمان', 'النشر المستمر والاختبار'],
    statusEn: 'Coursework Studied & Completed',
    statusAr: 'دراسة المنهج والمشاريع البرمجية',
    certificateStatusEn: 'Academic Coursework Verified',
    certificateStatusAr: 'منهج أكاديمي معتمد',
  },
  {
    id: 'cs50-sql',
    code: 'CS50 SQL',
    titleEn: 'CS50 SQL — Introduction to Databases with SQL',
    titleAr: 'CS50 SQL — مقدمة في قواعد البيانات باستخدام SQL',
    provider: 'Harvard University',
    platform: 'edX / Harvard Online',
    descriptionEn:
      'Database design, querying, normalizing schemas, indexing, transactions, and performance optimization using SQL and relational database engines.',
    descriptionAr:
      'تصميم قواعد البيانات، كتابة الاستعلامات المعقدة، معايرة المخططات (Normalization)، الفهرسة (Indexing)، والمعاملات لضمان سلامة وسرعة البيانات.',
    topicsEn: ['Relational Schemas', 'SQL Queries (SELECT/JOIN)', 'Normalization (3NF)', 'Indexes & Views', 'Transactions & ACID', 'PostgreSQL / SQLite'],
    topicsAr: ['المخططات العلائقية', 'استعلامات SQL المتقدمة', 'معايرة البيانات Normalization', 'الفهارس وسرعة الاستعلام', 'المعاملات ACID', 'PostgreSQL وSQLite'],
    statusEn: 'Coursework Studied & Completed',
    statusAr: 'دراسة المنهج والمشاريع البرمجية',
    certificateStatusEn: 'Academic Coursework Verified',
    certificateStatusAr: 'منهج أكاديمي معتمد',
  },
];
