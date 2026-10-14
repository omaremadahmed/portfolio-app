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
          {/* Header Area */}
          <div className="about-top__header">
            <h1
              id="about-top-title"
              className="hero__name"
              style={{ marginBottom: 'var(--space-sm)' }}
            >
              {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
            </h1>

            <div className="about-top__subtitle">
              {t.subtitle}
            </div>

            <div className="about-top__subheadline">
              {tHero.subheadline}
            </div>
          </div>

          {/* Photo Frame Column / Area */}
          <div className="about-top__photo-wrapper">
            <div className="about-top__photo-frame">
              <div className="about-top__photo-img-wrap">
                <Image
                  src={imgSrc}
                  alt={lang === 'ar' ? 'صورة عمر عماد أحمد الشخصية' : 'Omar Emad Ahmed Personal Portrait'}
                  fill
                  sizes="(max-width: 960px) 320px, 380px"
                  style={{ objectFit: 'cover' }}
                  priority
                  onError={() => {
                    setImgSrc(siteConfig.photoPlaceholder);
                  }}
                />
              </div>

              {/* Photo Caption Badge */}
              <div className="about-top__photo-badge-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.1rem' }}>👑</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF' }}>
                      {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                      {lang === 'ar' ? 'طالب BIS // معمارية النظم' : 'BIS Student // Architecture'}
                    </div>
                  </div>
                </div>

                <span className="about-top__photo-tag">
                  {lang === 'ar' ? 'ملف موثق' : 'VERIFIED'}
                </span>
              </div>
            </div>
          </div>

          {/* Body Area: Paragraphs, Quote, Pillars, Buttons */}
          <div className="about-top__body">
            {/* Introduction Paragraphs */}
            <div className="about-top__paragraphs">
              <p className="about-top__p1">
                {t.p1}
              </p>

              <p className="about-top__p2">
                {t.p2}
              </p>

              <p className="about-top__p3">
                {t.p3}
              </p>

              {/* Philosophy Quote Card */}
              <div className="about-top__quote-card">
                <span className="about-top__quote-icon" aria-hidden="true">♟</span>
                <p className="about-top__p4">
                  {t.p4}
                </p>
              </div>
            </div>

            {/* Quick Strategic Pillars */}
            <div className="about-top__pillars">
              <div className="about-top__pillar">
                <div className="about-top__pillar-label">
                  <span>🎓</span> {t.academicFocus}
                </div>
                <div className="about-top__pillar-value">
                  {t.academicValue}
                </div>
              </div>
              <div className="about-top__pillar">
                <div className="about-top__pillar-label">
                  <span>♟</span> {t.approachFocus}
                </div>
                <div className="about-top__pillar-value">
                  {t.approachValue}
                </div>
              </div>
              <div className="about-top__pillar">
                <div className="about-top__pillar-label">
                  <span>🌐</span> {t.domainsFocus}
                </div>
                <div className="about-top__pillar-value">
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
        </div>
      </div>
    </section>
  );
}
