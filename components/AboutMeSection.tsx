'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

export default function AboutMeSection() {
  const { lang, dir } = useLanguage();
  const t = translations[lang].about;
  const tHero = translations[lang].hero;

  const [imgSrc, setImgSrc] = useState<string>(siteConfig.photoPath);

  return (
    <section id="about" className="about-top" aria-labelledby="about-top-title" dir={dir}>
      <div className="container">
        {/* Eyebrow & Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
          <div className="section__eyebrow" style={{ margin: 0 }}>
            {t.eyebrow}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              color: 'var(--silver)',
              border: '1px solid var(--border-hover)',
              padding: '2px 10px',
              borderRadius: '2px',
              background: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            {t.statusBadge}
          </span>
        </div>

        {/* Top Grid: Content on one side, Portrait on the other */}
        <div className="about-top__grid">
          {/* Main Content Column */}
          <div>
            <h1
              id="about-top-title"
              className="hero__name"
              style={{ marginBottom: 'var(--space-sm)' }}
            >
              {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--silver)',
                marginBottom: 'var(--space-md)',
              }}
            >
              {t.subtitle}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-xl)',
                textTransform: 'uppercase',
              }}
            >
              {tHero.subheadline}
            </div>

            {/* Introduction Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                }}
              >
                {t.p1}
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                }}
              >
                {t.p2}
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                }}
              >
                {t.p3}
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  borderInlineStart: '2px solid var(--border-hover)',
                  paddingInlineStart: 'var(--space-md)',
                }}
              >
                {t.p4}
              </p>
            </div>

            {/* Quick Strategic Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-2xl)',
                paddingTop: 'var(--space-lg)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                  {t.academicFocus}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {t.academicValue}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                  {t.approachFocus}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {t.approachValue}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                  {t.domainsFocus}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {t.domainsValue}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero__actions">
              <a href="#domains" className="btn btn--primary">
                <span>{tHero.exploreDomains}</span>
                <span className="btn__arrow">→</span>
              </a>
              <a href="#certifications" className="btn btn--secondary">
                <span>{tHero.viewCertifications}</span>
                <span className="btn__arrow">→</span>
              </a>
              <a href="#projects" className="btn btn--secondary">
                <span>{tHero.exploreProjects}</span>
                <span className="btn__arrow">→</span>
              </a>
            </div>
          </div>

          {/* Personal Photo Frame Column */}
          <div className="about-top__photo-wrapper">
            <div className="about-top__photo-frame">
              <div style={{ position: 'relative', width: '100%', height: '460px', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                <Image
                  src={imgSrc}
                  alt={lang === 'ar' ? 'صورة عمر عماد أحمد الشخصية' : 'Omar Emad Ahmed Personal Portrait'}
                  fill
                  sizes="(max-width: 960px) 100vw, 380px"
                  style={{ objectFit: 'cover' }}
                  priority
                  onError={() => {
                    // Gracefully fallback to SVG placeholder if the custom jpg hasn't been uploaded yet
                    setImgSrc(siteConfig.photoPlaceholder);
                  }}
                />
              </div>

              {/* Photo Caption Badge */}
              <div
                style={{
                  marginTop: '12px',
                  padding: '8px 12px',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>👑</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF' }}>
                      {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                      {lang === 'ar' ? 'طالب نظم معلومات الأعمال (BIS) // معمارية النظم' : 'BIS Student // Technology Architecture'}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'var(--silver)',
                    letterSpacing: '0.05em',
                    border: '1px solid var(--border)',
                    padding: '2px 6px',
                    borderRadius: '2px',
                  }}
                >
                  {lang === 'ar' ? 'ملف شخصي' : 'OFFICIAL'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
