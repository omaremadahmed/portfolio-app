'use client';

import React, { useEffect } from 'react';
import { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, dir } = useLanguage();
  const t = translations[lang].projects;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const category = lang === 'ar' ? project.categoryAr : project.categoryEn;
  const chessMetaphor = lang === 'ar' ? project.chessMetaphorAr : project.chessMetaphorEn;
  const chessDescription = lang === 'ar' ? project.chessDescriptionAr : project.chessDescriptionEn;
  const description = lang === 'ar' ? project.descriptionAr : project.descriptionEn;
  const features = lang === 'ar' ? project.featuresAr : project.featuresEn;
  const challenges = lang === 'ar' ? project.challengesAr : project.challengesEn;
  const status = lang === 'ar' ? project.statusAr : project.statusEn;

  return (
    <div
      className="modal-overlay modal-overlay--visible"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
          <span className="modal__number">
            {t.positionLabel} {project.number}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              color: 'var(--text-tertiary)',
              border: '1px solid var(--border)',
              padding: '2px 8px',
              borderRadius: '2px',
            }}
          >
            {category}
          </span>
        </div>

        <h3 id="modal-project-title" className="modal__title">
          {project.title}
        </h3>

        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            color: 'var(--silver)',
            marginBottom: 'var(--space-md)',
            fontStyle: 'italic',
          }}
        >
          {lang === 'ar' ? 'الاستراتيجية:' : 'Strategy:'} {chessMetaphor}
        </div>

        <p className="modal__description">{description}</p>

        <div
          style={{
            backgroundColor: 'var(--surface-hover)',
            borderInlineStart: '2px solid var(--border-hover)',
            padding: 'var(--space-md)',
            marginBottom: 'var(--space-xl)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
          }}
        >
          {chessDescription}
        </div>

        {/* Verified Tech Stack */}
        <div className="modal__tech-title">{t.verifiedStack}</div>
        <div className="modal__techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="modal__tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Verified Features */}
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <div className="modal__tech-title">{t.architectureLabel}</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-xl)' }}>
            {features.map((feature) => (
              <li
                key={feature}
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--silver)' }}>›</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Challenges */}
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <div className="modal__tech-title">{t.challengesLabel}</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-xl)' }}>
            {challenges.map((challenge) => (
              <li
                key={challenge}
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--text-tertiary)' }}>›</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-md)',
            marginTop: 'var(--space-lg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="project-card__status-indicator" />
            <span className="project-card__status-text">
              {lang === 'ar' ? 'الحالة:' : 'Status:'} {status}
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-tertiary)',
            }}
          >
            {t.verifiedDataLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
