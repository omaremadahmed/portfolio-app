'use client';

import React from 'react';
import { engineeringStages } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function PlaybookSection() {
  const { lang, dir } = useLanguage();
  const t = translations[lang].playbook;

  return (
    <section id="playbook" className="section" aria-labelledby="playbook-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="playbook-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.headline}
        </div>
        <p className="section__description">
          {t.description}
        </p>

        <div className="playbook__timeline">
          {engineeringStages.map((stage) => {
            const phase = lang === 'ar' ? stage.chessPhaseAr : stage.chessPhaseEn;
            const title = lang === 'ar' ? stage.titleAr : stage.titleEn;
            const description = lang === 'ar' ? stage.descriptionAr : stage.descriptionEn;

            return (
              <div key={stage.number} className="playbook__stage">
                <div className="playbook__stage-marker">
                  <div className="playbook__stage-dot" />
                  <span className="playbook__stage-number">{stage.number}</span>
                </div>

                <div className="playbook__stage-content">
                  <div className="playbook__stage-phase">
                    {t.stageLabel} {stage.number} // {phase}
                  </div>
                  <h3 className="playbook__stage-title">{title}</h3>
                  <p className="playbook__stage-description">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 'var(--space-2xl)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--surface-card)',
            maxWidth: '680px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'var(--silver)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {t.coreTenets}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {t.coreTenetsText}
          </p>
        </div>
      </div>
    </section>
  );
}
