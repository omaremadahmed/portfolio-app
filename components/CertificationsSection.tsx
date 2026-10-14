'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { cs50Courses } from '../data/courses';

export default function CertificationsSection() {
  const { lang, dir } = useLanguage();
  const t = translations[lang].certifications;

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="certifications-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">{t.headline}</div>
        <p className="section__description">{t.description}</p>

        {/* CS50 Courses Grid */}
        <div className="cert-grid" role="list">
          {cs50Courses.map((course) => {
            const title = lang === 'ar' ? course.titleAr : course.titleEn;
            const description = lang === 'ar' ? course.descriptionAr : course.descriptionEn;
            const topics = lang === 'ar' ? course.topicsAr : course.topicsEn;
            const status = lang === 'ar' ? course.statusAr : course.statusEn;
            const certStatus = lang === 'ar' ? course.certificateStatusAr : course.certificateStatusEn;

            return (
              <article key={course.id} className="cert-card" role="listitem">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div className="cert-card__code">
                    <span>📜</span>
                    <span>{course.code}</span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.05em',
                      color: 'var(--silver)',
                      border: '1px solid var(--border)',
                      padding: '2px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    {course.provider}
                  </span>
                </div>

                <h3 className="cert-card__title">{title}</h3>

                <div className="cert-card__provider">
                  {course.platform}
                </div>

                <p className="cert-card__desc">{description}</p>

                {/* Topics covered */}
                <div style={{ marginBottom: 'var(--space-md)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.syllabusLabel}
                  </div>
                  <div className="cert-card__topics">
                    {topics.map((topic) => (
                      <span key={topic} className="cert-card__topic">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer / Status Verification */}
                <div className="cert-card__footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="project-card__status-indicator" />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.05em',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {status}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--silver)',
                      borderBottom: '1px dotted var(--border-hover)',
                    }}
                  >
                    {certStatus}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Verification Note */}
        <div
          style={{
            marginTop: 'var(--space-2xl)',
            padding: 'var(--space-md) var(--space-lg)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--surface-card)',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>ℹ</span>
          <span>
            {lang === 'ar'
              ? 'تلتزم هذه القائمة بالشفافية الأكاديمية التامة: توثق المناهج التي تمت دراستها ومشاريعها البرمجية الفعلية دون اختلاق شهادات أو أرقام غير مؤكدة.'
              : 'This section maintains complete academic transparency: documenting verified curriculum studies and hands-on coursework without fabricating unverified certificates or credentials.'}
          </span>
        </div>
      </div>
    </section>
  );
}
