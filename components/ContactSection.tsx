'use client';

import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { lang, dir } = useLanguage();
  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t.validationError);
      return;
    }
    setError('');
    const mailtoUrl = `mailto:${siteConfig.links.email}?subject=Collaboration with ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="contact-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.subtitle}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3xl)',
            marginTop: 'var(--space-2xl)',
          }}
        >
          {/* Direct channels */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-lg)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {t.directChannels}
            </h3>

            <div className="contact__links">
              {/* Phone 1 */}
              <div className="contact__link" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <a
                  href={`tel:${siteConfig.links.phone1International}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, textDecoration: 'none', color: 'inherit' }}
                  aria-label="Call Phone 1"
                >
                  <span className="contact__link-icon">📞</span>
                  <div>
                    <div className="contact__link-label">{lang === 'ar' ? 'الهاتف الرئيسي / واتساب' : 'Primary Phone / WhatsApp'}</div>
                    <div className="contact__link-value" dir="ltr">{siteConfig.links.phone1}</div>
                  </div>
                </a>
                <a
                  href={`https://wa.me/201128674131`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--small"
                  style={{ padding: '4px 10px', fontSize: '0.72rem', alignSelf: 'center' }}
                >
                  WhatsApp
                </a>
              </div>

              {/* Phone 2 */}
              <a
                href={`tel:${siteConfig.links.phone2International}`}
                className="contact__link"
                aria-label="Call Phone 2"
              >
                <span className="contact__link-icon">📱</span>
                <div>
                  <div className="contact__link-label">{lang === 'ar' ? 'هاتف ثانوي' : 'Secondary Phone'}</div>
                  <div className="contact__link-value" dir="ltr">{siteConfig.links.phone2}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="contact__link"
                aria-label="Send email"
              >
                <span className="contact__link-icon">✉</span>
                <div>
                  <div className="contact__link-label">{t.directEmail}</div>
                  <div className="contact__link-value">{siteConfig.links.email}</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="GitHub Profile"
              >
                <span className="contact__link-icon">⟨⟩</span>
                <div>
                  <div className="contact__link-label">{t.sourceRepos}</div>
                  <div className="contact__link-value">github.com/{siteConfig.links.githubUsername}</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="LinkedIn Profile"
              >
                <span className="contact__link-icon">in</span>
                <div>
                  <div className="contact__link-label">{t.professionalNet}</div>
                  <div className="contact__link-value">linkedin.com/in/{siteConfig.links.linkedinName}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-lg)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {t.directMessage}
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: 'var(--space-xl)',
                  border: '1px solid var(--border-hover)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--surface-hover)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>✓</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {t.draftPrepared}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'var(--space-xs)' }}>
                  {t.draftText}
                </p>
                <button
                  type="button"
                  className="btn btn--secondary btn--small"
                  style={{ marginTop: 'var(--space-md)' }}
                  onClick={() => setSubmitted(false)}
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {error && (
                  <div style={{ color: '#F87171', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    ! {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.yourName}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.yourEmail}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.messageObjective}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  <span>{t.initiateBtn}</span>
                  <span className="btn__arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
