'use client';

import React, { useState } from 'react';
import { techStack } from '../data/techStack';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function TechArsenalSection() {
  const [filter, setFilter] = useState<'all' | 'practical' | 'learning' | 'exploring'>('all');
  const { lang, dir } = useLanguage();
  const t = translations[lang].arsenal;

  const tabs = [
    { id: 'all', label: t.allTab },
    { id: 'practical', label: t.practicalTab },
    { id: 'learning', label: t.learningTab },
    { id: 'exploring', label: t.exploringTab },
  ];

  return (
    <section id="arsenal" className="section" aria-labelledby="arsenal-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="arsenal-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.headline}
        </div>
        <p className="section__description">
          {t.description}
        </p>

        {/* Filter controls */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-xs)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as typeof filter)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 'var(--radius-sm)',
                border: filter === tab.id ? '1px solid var(--silver)' : '1px solid var(--border)',
                background: filter === tab.id ? 'var(--silver-dim)' : 'transparent',
                color: filter === tab.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="tech__grid">
          {techStack.map((category) => {
            const categoryTitle = lang === 'ar' ? category.titleAr : category.titleEn;
            const filteredTechs = filter === 'all'
              ? category.technologies
              : category.technologies.filter((t) => t.level === filter);

            if (filteredTechs.length === 0) return null;

            return (
              <div key={category.titleEn} className="tech-category">
                <div className="tech-category__header">
                  <span className="tech-category__icon">{category.icon}</span>
                  <h3 className="tech-category__title">{categoryTitle}</h3>
                </div>

                <div className="tech-category__list">
                  {filteredTechs.map((tech) => {
                    const levelLabelEn = tech.level;
                    const levelLabelAr =
                      tech.level === 'practical'
                        ? 'تطبيقي'
                        : tech.level === 'learning'
                        ? 'دراسة نشطة'
                        : 'استكشاف';

                    return (
                      <div key={tech.name} className="tech-item">
                        <span className="tech-item__name">{tech.name}</span>
                        <span className={`tech-item__level tech-item__level--${tech.level}`}>
                          {lang === 'ar' ? levelLabelAr : levelLabelEn}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
