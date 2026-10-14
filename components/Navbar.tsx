'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, dir } = useLanguage();
  const t = translations[lang].nav;

  const navItems = [
    { id: 'about', label: t.about, href: '#about', icon: '👤', num: '01' },
    { id: 'domains', label: t.domains, href: '#domains', icon: '🌐', num: '02' },
    { id: 'certifications', label: t.certifications, href: '#certifications', icon: '📜', num: '03' },
    { id: 'projects', label: t.projects, href: '#projects', icon: '🚀', num: '04' },
    { id: 'playbook', label: t.playbook, href: '#playbook', icon: '♟️', num: '05' },
    { id: 'arsenal', label: t.arsenal, href: '#arsenal', icon: '⚙️', num: '06' },
    { id: 'uiux', label: t.uiux, href: '#uiux', icon: '🎨', num: '07' },
    { id: 'contact', label: t.contact, href: '#contact', icon: '📬', num: '08' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].id;
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

  // Lock body scroll when drawer is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="banner" dir={dir}>
        <div className="nav__inner">
          {/* Logo */}
          <a href="#about" className="nav__logo" aria-label="Omar Emad Ahmed Home" onClick={closeMenu}>
            <span className="nav__logo-crown">👑</span>
            <span className="nav__logo-text">
              {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav__links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
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

            {/* Language Switcher — Desktop Only */}
            <button
              type="button"
              className="lang-switcher-btn"
              onClick={toggleLang}
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'}
            >
              <span className="lang-switcher-icon">🌐</span>
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile: Hamburger Button */}
          <button
            type="button"
            className={`nav__toggle ${isOpen ? 'nav__toggle--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>
        </div>
      </header>

      {/* Dimmed Backdrop Overlay */}
      <div
        className={`nav-backdrop ${isOpen ? 'nav-backdrop--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Luxury Mobile Side Drawer */}
      <aside
        className={`nav-drawer ${isOpen ? 'nav-drawer--open' : ''}`}
        dir={dir}
        aria-label="Mobile Navigation Drawer"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="drawer__header">
          <div className="drawer__brand">
            <span className="drawer__brand-crown">👑</span>
            <div>
              <div className="drawer__brand-name">
                {lang === 'ar' ? siteConfig.nameAr : siteConfig.name}
              </div>
              <div className="drawer__brand-sub">
                {lang === 'ar' ? 'طالب BIS // معمارية النظم' : 'BIS Student // Architecture'}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="drawer__close-btn"
            onClick={closeMenu}
            aria-label={lang === 'ar' ? 'إغلاق القائمة' : 'Close drawer'}
          >
            ✕
          </button>
        </div>

        {/* Status Pill */}
        <div className="drawer__status">
          <span className="drawer__status-dot" />
          <span className="drawer__status-text">
            {lang === 'ar'
              ? 'متاح للمشاريع والتعاون التقني'
              : 'Available for technical projects'}
          </span>
        </div>

        {/* Bilingual Segmented Toggle inside drawer */}
        <div className="drawer__lang-box">
          <div className="drawer__lang-label">
            {lang === 'ar' ? 'لغة الواجهة' : 'Interface Language'}
          </div>
          <div className="drawer__lang-segments">
            <button
              type="button"
              className={`drawer__lang-segment ${lang === 'ar' ? 'drawer__lang-segment--active' : ''}`}
              onClick={() => {
                if (lang !== 'ar') toggleLang();
              }}
            >
              العربية
            </button>
            <button
              type="button"
              className={`drawer__lang-segment ${lang === 'en' ? 'drawer__lang-segment--active' : ''}`}
              onClick={() => {
                if (lang !== 'en') toggleLang();
              }}
            >
              English
            </button>
          </div>
        </div>

        {/* Navigation Links with icons and position numbers */}
        <nav className="drawer__nav" aria-label="Mobile Links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`drawer__link ${isActive ? 'drawer__link--active' : ''}`}
                onClick={closeMenu}
              >
                <div className="drawer__link-left">
                  <span className="drawer__link-icon" aria-hidden="true">{item.icon}</span>
                  <span className="drawer__link-title">{item.label}</span>
                </div>
                <span className="drawer__link-num">{item.num}</span>
              </a>
            );
          })}
        </nav>

        {/* Drawer Bottom Quick Action: WhatsApp & Socials */}
        <div className="drawer__footer">
          <a
            href="https://wa.me/201128674131"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer__whatsapp-btn"
            onClick={closeMenu}
          >
            <span>💬</span>
            <span>{lang === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp Chat'}</span>
          </a>

          <div className="drawer__socials">
            <a
              href={`tel:${siteConfig.links.phone1International}`}
              className="drawer__social-link"
              aria-label="Call"
              title="Phone"
            >
              📞
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="drawer__social-link"
              aria-label="Email"
              title="Email"
            >
              ✉
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer__social-link"
              aria-label="GitHub"
              title="GitHub"
            >
              ⟨⟩
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer__social-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
          </div>

          <div className="drawer__signature">
            {lang === 'ar'
              ? 'معمارية الأسود النقي • عمر عماد أحمد'
              : 'Pure Black Architecture • Omar Emad'}
          </div>
        </div>
      </aside>
    </>
  );
}
