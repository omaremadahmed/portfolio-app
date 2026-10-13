'use client';

import React, { useEffect } from 'react';
import { Domain } from '../data/domains';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface DomainModalProps {
  domain: Domain | null;
  onClose: () => void;
}

export default function DomainModal({ domain, onClose }: DomainModalProps) {
  const { lang, dir } = useLanguage();
  const t = translations[lang].domains;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (domain) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [domain, onClose]);

  if (!domain) return null;

  const title = lang === 'ar' ? domain.titleAr : domain.titleEn;
  const description = lang === 'ar' ? domain.descriptionAr : domain.descriptionEn;

  return (
    <div
      className="modal-overlay modal-overlay--visible"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-domain-title"
      dir={dir}
    >
      <div
        className="modal"
        style={{ position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
          style={{ fontSize: '1.2rem', padding: '6px 10px' }}
        >
          ✕
        </button>

        <div className="modal__number">
          {t.domainLabel} {domain.number}
        </div>

        <h3 id="modal-domain-title" className="modal__title">
          {title}
        </h3>

        <p className="modal__description">{description}</p>

        <div className="modal__tech-title">{t.techsFocus}</div>
        <div className="modal__techs">
          {domain.technologies.map((tech) => (
            <span key={tech} className="modal__tech">
              {tech}
            </span>
          ))}
        </div>

        {domain.relatedProjects && domain.relatedProjects.length > 0 && (
          <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--border-subtle)' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              {t.relatedProjects}
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              {domain.relatedProjects.map((projId) => {
                const namesEn: Record<string, string> = {
                  'house-platform': 'House Platform',
                  'next-mind-ai': 'Next Mind.AI',
                  'bezrah': 'Bezrah / Bazra',
                  'enterprise-platform': 'Enterprise Platform',
                };
                const namesAr: Record<string, string> = {
                  'house-platform': 'منصة House Platform',
                  'next-mind-ai': 'مشروع Next Mind.AI',
                  'bezrah': 'منصة بذرة (Bezrah)',
                  'enterprise-platform': 'منصة المؤسسات (Enterprise)',
                };
                const name = lang === 'ar' ? namesAr[projId] || projId : namesEn[projId] || projId;

                return (
                  <a
                    key={projId}
                    href={`#project-${projId}`}
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--silver)',
                      border: '1px solid var(--border)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--surface-hover)',
                      transition: 'all 0.2s',
                    }}
                  >
                    ↗ {name}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: 'var(--space-xl)',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-tertiary)',
            fontStyle: 'italic',
          }}
        >
          {t.disclaimer}
        </div>
      </div>
    </div>
  );
}
