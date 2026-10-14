export interface Domain {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  technologies: string[];
  relatedProjects?: string[];
  relatedDomains?: string[];
}

export const domains: Domain[] = [
  {
    id: 'web-development',
    number: '01',
    titleEn: 'Web Development',
    titleAr: 'تطوير الويب',
    descriptionEn:
      'Frontend development, backend development, APIs, databases, full-stack applications, and web architecture.',
    descriptionAr:
      'تطوير واجهات المستخدم، الأنظمة الخلفية، واجهات برمجة التطبيقات (APIs)، قواعد البيانات، التطبيقات المتكاملة، ومعمارية الويب.',
    technologies: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular',
      'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'PostgreSQL'
    ],
    relatedProjects: ['house-economic', 'house-academic', 'bezrah', 'enterprise-platform'],
    relatedDomains: ['software-engineering', 'cloud-computing', 'uiux-design'],
  },
  {
    id: 'networking',
    number: '02',
    titleEn: 'Networking',
    titleAr: 'هندسة الشبكات',
    descriptionEn:
      'Networking fundamentals, routing, switching, network architecture, and enterprise networking.',
    descriptionAr:
      'أساسيات الشبكات، التوجيه (Routing)، التبديل (Switching)، معمارية الشبكات، وشبكات المؤسسات.',
    technologies: [
      'TCP/IP', 'OSI Model', 'Ethernet', 'VLANs & Trunking', 'Routing & Switching',
      'Cisco Technologies', 'OSPF', 'BGP', 'VPN Technologies', 'Network Troubleshooting'
    ],
    relatedProjects: [],
    relatedDomains: ['cloud-computing', 'it-systems', 'devops'],
  },
  {
    id: 'cloud-computing',
    number: '03',
    titleEn: 'Cloud Computing',
    titleAr: 'الحوسبة السحابية',
    descriptionEn:
      'Cloud platforms, cloud services, infrastructure, scalability, and cloud deployment.',
    descriptionAr:
      'المنصات السحابية، الخدمات السحابية، البنية التحتية، قابلية التوسع والاعتمادية، واستراتيجيات النشر السحابي.',
    technologies: [
      'AWS', 'Microsoft Azure', 'Compute & Storage', 'Cloud Networking',
      'IAM (Identity & Access)', 'Cloud Architecture', 'Scalability & Deployment'
    ],
    relatedProjects: ['house-economic', 'enterprise-platform'],
    relatedDomains: ['devops', 'networking', 'it-systems'],
  },
  {
    id: 'devops',
    number: '04',
    titleEn: 'DevOps',
    titleAr: 'DevOps والأتمتة',
    descriptionEn:
      'Linux, Git, Docker, CI/CD, automation, deployment workflows, and infrastructure management.',
    descriptionAr:
      'بيئات لينكس، Git، Docker، مسارات CI/CD، الأتمتة، تدفقات النشر المستمر، وإدارة البنية التحتية.',
    technologies: [
      'Linux', 'Bash CLI', 'Git & GitHub', 'Docker', 'Containerization',
      'CI/CD Pipelines', 'Deployment Workflows', 'Infrastructure Basics'
    ],
    relatedProjects: ['house-academic', 'enterprise-platform'],
    relatedDomains: ['cloud-computing', 'software-engineering', 'it-systems'],
  },
  {
    id: 'it-systems',
    number: '05',
    titleEn: 'IT (Information Technology)',
    titleAr: 'تكنولوجيا المعلومات والأنظمة',
    descriptionEn:
      'Operating systems, computer systems, IT infrastructure, troubleshooting, and technical support fundamentals.',
    descriptionAr:
      'أنظمة التشغيل، النظم الحاسوبية، البنية التحتية لتكنولوجيا المعلومات، استكشاف الأخطاء وإصلاحها، وأساسيات الدعم الفني.',
    technologies: [
      'Operating Systems (Windows & Linux)', 'System Configuration', 'Troubleshooting',
      'Computer Architecture Fundamentals', 'Permissions & Security', 'IT Infrastructure'
    ],
    relatedProjects: [],
    relatedDomains: ['networking', 'devops', 'hardware-systems'],
  },
  {
    id: 'mobile-app-development',
    number: '06',
    titleEn: 'Mobile App Development',
    titleAr: 'تطوير تطبيقات الهاتف',
    descriptionEn:
      'Cross-platform mobile development, mobile interfaces, application architecture, and mobile application development tools.',
    descriptionAr:
      'تطوير التطبيقات متعددة المنصات، واجهات الهواتف التفاعلية، معمارية التطبيقات، وأدوات تطوير الهواتف الذكية.',
    technologies: [
      'React Native', 'Mobile UI Architecture', 'API Integration',
      'State Management', 'Navigation', 'Mobile Performance', 'Flutter Fundamentals'
    ],
    relatedProjects: [],
    relatedDomains: ['web-development', 'uiux-design', 'software-engineering'],
  },
  {
    id: 'software-engineering',
    number: '07',
    titleEn: 'Software Engineering',
    titleAr: 'هندسة البرمجيات',
    descriptionEn:
      'Software design, data structures and algorithms, SOLID principles, design patterns, testing, maintainability, and software architecture fundamentals.',
    descriptionAr:
      'تصميم البرمجيات، هياكل البيانات والخوارزميات، مبادئ SOLID، أنماط التصميم (Design Patterns)، الاختبارات، وقابلية الصيانة.',
    technologies: [
      'Data Structures & Algorithms', 'OOP', 'SOLID Principles',
      'Design Patterns', 'System Design Basics', 'Clean Code', 'Testing & Debugging'
    ],
    relatedProjects: ['house-economic', 'house-academic', 'enterprise-platform'],
    relatedDomains: ['web-development', 'devops', 'mobile-app-development'],
  },
  {
    id: 'hardware-systems',
    number: '08',
    titleEn: 'Hardware & Computer Systems',
    titleAr: 'العتاد والنظم الحاسوبية',
    descriptionEn:
      'Computer architecture, digital logic, microprocessors, electronics fundamentals, and embedded systems.',
    descriptionAr:
      'معمارية الحاسوب، المنطق الرقمي (Digital Logic)، المعالجات الدقيقة، أساسيات الإلكترونيات، والنظم المدمجة.',
    technologies: [
      'Computer Architecture', 'Digital Logic Fundamentals', 'Microprocessors',
      'Hardware & Software Interaction', 'Electronics Fundamentals', 'Embedded Systems Concepts'
    ],
    relatedProjects: [],
    relatedDomains: ['it-systems', 'software-engineering', 'networking'],
  },
  {
    id: 'uiux-design',
    number: '09',
    titleEn: 'UI/UX Design',
    titleAr: 'تصميم واجهات وتجربة المستخدم (UI/UX)',
    descriptionEn:
      'User-centered design, wireframing, prototyping, interface design, usability, and Figma.',
    descriptionAr:
      'التصميم المرتكز على المستخدم، النماذج السلكية (Wireframing)، النماذج التفاعلية، تصميم الواجهات، سهولة الاستخدام، وFigma.',
    technologies: [
      'Figma', 'User Research Basics', 'Wireframing', 'Interactive Prototyping',
      'Design Systems', 'Typography & Contrast', 'Accessibility (WCAG)'
    ],
    relatedProjects: ['bezrah', 'house-academic'],
    relatedDomains: ['web-development', 'mobile-app-development', 'software-engineering'],
  },
];
