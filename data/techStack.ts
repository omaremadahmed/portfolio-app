export interface TechCategory {
  titleEn: string;
  titleAr: string;
  icon: string;
  technologies: { name: string; level: 'practical' | 'learning' | 'exploring' }[];
}

export const techStack: TechCategory[] = [
  {
    titleEn: 'Programming Languages',
    titleAr: 'لغات البرمجة',
    icon: '⟨⟩',
    technologies: [
      { name: 'JavaScript', level: 'practical' },
      { name: 'TypeScript', level: 'practical' },
      { name: 'Python', level: 'practical' },
      { name: 'C#', level: 'learning' },
      { name: 'C', level: 'practical' },
      { name: 'SQL', level: 'practical' },
      { name: 'HTML5 & CSS3', level: 'practical' },
    ],
  },
  {
    titleEn: 'Frontend Development',
    titleAr: 'تطوير الواجهات (Frontend)',
    icon: '◈',
    technologies: [
      { name: 'React', level: 'practical' },
      { name: 'Next.js', level: 'practical' },
      { name: 'Vue.js', level: 'practical' },
      { name: 'Angular', level: 'learning' },
      { name: 'Tailwind CSS', level: 'practical' },
      { name: 'Bootstrap', level: 'practical' },
      { name: 'Vite', level: 'practical' },
    ],
  },
  {
    titleEn: 'Backend Development',
    titleAr: 'الأنظمة الخلفية (Backend)',
    icon: '⬢',
    technologies: [
      { name: 'Node.js', level: 'practical' },
      { name: 'Express.js', level: 'practical' },
      { name: 'Django', level: 'practical' },
      { name: 'Laravel', level: 'learning' },
      { name: 'NestJS', level: 'learning' },
      { name: 'ASP.NET Core', level: 'learning' },
      { name: 'REST APIs', level: 'practical' },
    ],
  },
  {
    titleEn: 'Databases',
    titleAr: 'قواعد البيانات',
    icon: '⊞',
    technologies: [
      { name: 'PostgreSQL', level: 'practical' },
      { name: 'SQLite', level: 'practical' },
      { name: 'MongoDB', level: 'learning' },
      { name: 'Database Normalization', level: 'practical' },
    ],
  },
  {
    titleEn: 'Mobile Development',
    titleAr: 'تطبيقات الهاتف',
    icon: '◻',
    technologies: [
      { name: 'React Native', level: 'learning' },
      { name: 'Mobile Architecture', level: 'learning' },
      { name: 'Flutter Basics', level: 'exploring' },
    ],
  },
  {
    titleEn: 'Software Engineering',
    titleAr: 'هندسة البرمجيات',
    icon: '⟐',
    technologies: [
      { name: 'Data Structures & Algorithms', level: 'practical' },
      { name: 'OOP', level: 'practical' },
      { name: 'SOLID Principles', level: 'practical' },
      { name: 'Design Patterns', level: 'learning' },
      { name: 'System Design Fundamentals', level: 'learning' },
      { name: 'Clean Code', level: 'practical' },
    ],
  },
  {
    titleEn: 'Networking',
    titleAr: 'هندسة الشبكات',
    icon: '⬡', // Non-cross neutral geometric hexagon icon
    technologies: [
      { name: 'TCP/IP', level: 'learning' },
      { name: 'OSI Model', level: 'learning' },
      { name: 'Routing & Switching', level: 'learning' },
      { name: 'Cisco Technologies', level: 'learning' },
      { name: 'VLANs', level: 'learning' },
      { name: 'OSPF / BGP', level: 'exploring' },
    ],
  },
  {
    titleEn: 'Cloud Computing',
    titleAr: 'الحوسبة السحابية',
    icon: '☁',
    technologies: [
      { name: 'AWS', level: 'exploring' },
      { name: 'Microsoft Azure', level: 'exploring' },
      { name: 'Cloud Architecture', level: 'exploring' },
      { name: 'Hosting & Deployment', level: 'learning' },
    ],
  },
  {
    titleEn: 'DevOps & Infrastructure',
    titleAr: 'DevOps والبنية التحتية',
    icon: '⟳',
    technologies: [
      { name: 'Linux', level: 'practical' },
      { name: 'Git & GitHub', level: 'practical' },
      { name: 'Docker', level: 'learning' },
      { name: 'CI/CD Pipelines', level: 'learning' },
      { name: 'Deployment Workflows', level: 'learning' },
    ],
  },
  {
    titleEn: 'Hardware & Systems',
    titleAr: 'العتاد والنظم الحاسوبية',
    icon: '⊡',
    technologies: [
      { name: 'Computer Architecture', level: 'learning' },
      { name: 'Digital Logic', level: 'learning' },
      { name: 'Microprocessors', level: 'exploring' },
      { name: 'Windows & Linux Systems', level: 'practical' },
      { name: 'System Troubleshooting', level: 'practical' },
    ],
  },
  {
    titleEn: 'UI/UX Design',
    titleAr: 'تصميم الواجهات (UI/UX)',
    icon: '◎',
    technologies: [
      { name: 'Figma', level: 'practical' },
      { name: 'Wireframing', level: 'practical' },
      { name: 'Prototyping', level: 'practical' },
      { name: 'Design Systems', level: 'learning' },
      { name: 'Typography', level: 'practical' },
      { name: 'Accessibility (WCAG)', level: 'learning' },
    ],
  },
];
