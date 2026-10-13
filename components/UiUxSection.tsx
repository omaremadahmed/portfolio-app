'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const UI_CONCEPTS = [
  {
    icon: '📐',
    titleEn: 'Design Systems & Tokens',
    titleAr: 'أنظمة التصميم والرموز المعيارية (Tokens)',
    descriptionEn:
      'Architecting cohesive visual languages based on atomic tokens: unified spacing scales, color hierarchies, and consistent state definitions.',
    descriptionAr:
      'بناء لغات بصرية متماسكة قائمة على الرموز الدقيقة: مقاييس مسافات موحدة، تدرجات لونية منضبطة، وتعريفات ثابتة للحالات التفاعلية.',
    labelEn: 'Architecture & Scalability',
    labelAr: 'معمارية وقابلية التوسع',
  },
  {
    icon: '🔤',
    titleEn: 'Typographic Hierarchy',
    titleAr: 'الهرمية الطباعية واختيار الخطوط',
    descriptionEn:
      'Curating paired typefaces (Space Grotesk, Inter, Cairo, JetBrains Mono) that balance expressive editorial headlines with crisp technical readability.',
    descriptionAr:
      'تنسيق خطوط متناغمة (Cairo للعربية، Space Grotesk و Inter للإنجليزية) لتحقيق التوازن بين الفخامة والوضوح التقني الفائق.',
    labelEn: 'Readability & Editorial',
    labelAr: 'سهولة القراءة والتحرير',
  },
  {
    icon: '♿',
    titleEn: 'Accessibility & Contrast',
    titleAr: 'إتاحة الوصول وتباين الألوان (WCAG)',
    descriptionEn:
      'Ensuring WCAG contrast compliance against pure black backdrops, accessible interactive states, visible focus boundaries, and reduced-motion consideration.',
    descriptionAr:
      'ضمان معايير التباين العالية مع الخلفية السوداء النقية، مؤشرات تركيز واضحة، وحركات تحترم تفضيلات تقليل الحركة.',
    labelEn: 'Inclusive Engineering',
    labelAr: 'هندسة شاملة لكافة المستخدمين',
  },
  {
    icon: '⚡',
    titleEn: 'Micro-Interactions & Feedback',
    titleAr: 'التفاعلات الدقيقة والاستجابة الفورية',
    descriptionEn:
      'Crafting restrained transitions inspired by strategic board movement, providing immediate feedback without distracting from the user journey.',
    descriptionAr:
      'صياغة انتقالات محسوبة مستوحاة من حركة قطع الشطرنج، لتوفير استجابة بصرية مباشرة دون تشتيت المستخدم.',
    labelEn: 'Experience & Polish',
    labelAr: 'تجربة مستخدم مصقولة',
  },
];

export default function UiUxSection() {
  const { lang, dir } = useLanguage();
  const t = translations[lang].uiux;

  return (
    <section id="uiux" className="section" aria-labelledby="uiux-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="uiux-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.headline}
        </div>
        <p className="section__description">
          {t.description}
        </p>

        <div className="uiux__grid">
          {UI_CONCEPTS.map((concept) => {
            const title = lang === 'ar' ? concept.titleAr : concept.titleEn;
            const description = lang === 'ar' ? concept.descriptionAr : concept.descriptionEn;
            const label = lang === 'ar' ? concept.labelAr : concept.labelEn;

            return (
              <div key={concept.titleEn} className="uiux__card">
                <div className="uiux__card-icon">{concept.icon}</div>
                <h3 className="uiux__card-title">{title}</h3>
                <p className="uiux__card-description">{description}</p>
                <div className="uiux__card-label">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
