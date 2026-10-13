'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('2026');
  const { lang, dir } = useLanguage();
  const t = translations[lang].footer;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer" role="contentinfo" dir={dir}>
      <div className="container">
        <div className="footer__chess-icon" aria-hidden="true">
          ♚
        </div>

        <div className="footer__quote">
          {t.quote}
        </div>

        <div className="footer__name">
          {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
        </div>

        <div className="footer__social">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            GitHub
          </a>
          <span style={{ color: 'var(--border)' }}>•</span>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--border)' }}>•</span>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="footer__social-link"
          >
            {lang === 'ar' ? 'البريد' : 'Email'}
          </a>
        </div>

        <div className="footer__copyright">
          © {currentYear} {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}. {t.rights}
        </div>
      </div>
    </footer>
  );
}
