'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { lang, toggleLang, dir } = useLanguage();
  const t = translations[lang].nav;

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.domains, href: '#domains' },
    { label: t.certifications, href: '#certifications' },
    { label: t.projects, href: '#projects' },
    { label: t.playbook, href: '#playbook' },
    { label: t.arsenal, href: '#arsenal' },
    { label: t.uiux, href: '#uiux' },
    { label: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav" role="banner" dir={dir}>
      <div className="container nav__inner">
        <a href="#about" className="nav__logo" aria-label="Omar Emad Ahmed Home">
          <span style={{ marginInlineEnd: '6px', opacity: 0.9 }}>♚</span>
          {lang === 'ar' ? 'عمر عماد أحمد' : 'OMAR EMAD AHMED'}
        </a>

        {/* Desktop Navigation */}
        <nav className="nav__links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link ${isActive ? 'nav__link--active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Language Switcher */}
          <button
            type="button"
            className="lang-switcher-btn"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'}
          >
            <span>🌐</span>
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="lang-switcher-btn"
            onClick={toggleLang}
            style={{ display: 'inline-flex' }}
            aria-label="Toggle language"
          >
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          <button
            type="button"
            className={`nav__toggle ${isOpen ? 'nav__toggle--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`nav__mobile ${isOpen ? 'nav__mobile--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '2.2rem', color: '#C4C4C4' }}>♚</span>
          <div
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              color: '#A3A3A3',
              marginTop: '0.5rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {lang === 'ar' ? 'عمر عماد أحمد' : 'OMAR EMAD AHMED'}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666666', marginTop: '2px' }}>
            {lang === 'ar' ? 'طالب نظم معلومات الأعمال (BIS)' : 'BIS STUDENT // MULTIDISCIPLINARY'}
          </div>
        </div>

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav__mobile-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
