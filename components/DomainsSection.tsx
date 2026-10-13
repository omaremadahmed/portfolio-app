'use client';

import React, { useState } from 'react';
import { domains, Domain } from '../data/domains';
import DomainModal from './DomainModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const DOMAIN_ICONS: Record<string, string> = {
  'web-development': '🌐',
  'networking': '🖧',
  'cloud-computing': '☁️',
  'devops': '🔄',
  'it-systems': '🖥️',
  'mobile-app-development': '📱',
  'software-engineering': '⚙️',
  'hardware-systems': '🔌',
  'uiux-design': '🎨',
};

export default function DomainsSection() {
  const [hoveredDomain, setHoveredDomain] = useState<Domain | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const { lang, dir } = useLanguage();
  const t = translations[lang].domains;

  const activeRelated = hoveredDomain?.relatedDomains || [];

  return (
    <section id="domains" className="section" aria-labelledby="domains-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="domains-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.headline}
        </div>
        <p className="section__description">
          {t.description}
        </p>

        {/* Matrix Interaction Hint */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>♟</span>
          <span>{t.interactionHint}</span>
        </div>

        {/* 3-Column Parallel Domains Grid */}
        <div className="domains__grid" role="list">
          {domains.map((domain) => {
            const isHovered = hoveredDomain?.id === domain.id;
            const isRelated = activeRelated.includes(domain.id);
            const title = lang === 'ar' ? domain.titleAr : domain.titleEn;
            const description = lang === 'ar' ? domain.descriptionAr : domain.descriptionEn;

            return (
              <div
                key={domain.id}
                role="listitem"
                className="domain-card"
                onMouseEnter={() => setHoveredDomain(domain)}
                onMouseLeave={() => setHoveredDomain(null)}
                onClick={() => setSelectedDomain(domain)}
                style={{
                  backgroundColor: isHovered
                    ? '#0F0F0F'
                    : isRelated
                    ? '#070707'
                    : '#000000',
                  borderColor: isHovered
                    ? '#333333'
                    : isRelated
                    ? '#262626'
                    : 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: isHovered
                    ? '0 0 25px rgba(255, 255, 255, 0.03)'
                    : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <span className="domain-card__number">
                    {t.domainLabel} {domain.number}
                  </span>
                  {isRelated && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        color: 'var(--silver)',
                        textTransform: 'uppercase',
                        border: '1px solid var(--border)',
                        padding: '1px 6px',
                        borderRadius: '2px',
                      }}
                    >
                      {t.connectedBadge}
                    </span>
                  )}
                </div>

                <div className="domain-card__icon" aria-hidden="true">
                  {DOMAIN_ICONS[domain.id] || '◈'}
                </div>

                <h3 className="domain-card__title">{title}</h3>

                <p className="domain-card__description">
                  {description}
                </p>

                {/* Preview tech pills */}
                <div className="domain-card__techs">
                  {domain.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="domain-card__tech">
                      {tech}
                    </span>
                  ))}
                  {domain.technologies.length > 5 && (
                    <span
                      className="domain-card__tech"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      +{domain.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    marginTop: 'var(--space-md)',
                    paddingTop: 'var(--space-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.05em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{t.exploreDetails}</span>
                  <span className="btn__arrow">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DomainModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
      />
    </section>
  );
}
