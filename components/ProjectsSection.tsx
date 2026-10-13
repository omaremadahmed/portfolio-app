'use client';

import React, { useState } from 'react';
import { projects, Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang, dir } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title" dir={dir}>
      <div className="container">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 id="projects-title" className="section__title">
          {t.title}
        </h2>
        <div className="section__subtitle">
          {t.headline}
        </div>
        <p className="section__description">
          {t.description}
        </p>

        <div className="projects__list" role="list">
          {projects.map((project) => {
            const category = lang === 'ar' ? project.categoryAr : project.categoryEn;
            const chessMetaphor = lang === 'ar' ? project.chessMetaphorAr : project.chessMetaphorEn;
            const chessDescription = lang === 'ar' ? project.chessDescriptionAr : project.chessDescriptionEn;
            const description = lang === 'ar' ? project.descriptionAr : project.descriptionEn;
            const domainTags = lang === 'ar' ? project.domainTagsAr : project.domainTagsEn;
            const status = lang === 'ar' ? project.statusAr : project.statusEn;

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                role="listitem"
                className="project-card"
              >
                <div className="project-card__header">
                  <div className="project-card__meta">
                    <span className="project-card__number">
                      {t.positionLabel} {project.number}
                    </span>
                    <span className="project-card__category">
                      {category}
                    </span>
                    <span className="project-card__chess-badge">
                      {chessMetaphor}
                    </span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>

                  <div className="project-card__chess-metaphor">
                    {lang === 'ar' ? 'الاستراتيجية:' : 'Strategy:'} {chessMetaphor}
                  </div>

                  <p className="project-card__description">
                    {description}
                  </p>

                  <div className="project-card__chess-desc">
                    {chessDescription}
                  </div>

                  {/* Tech stack */}
                  <div className="project-card__techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-card__tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Domain tags */}
                  <div className="project-card__domains">
                    {domainTags.map((tag) => (
                      <span key={tag} className="project-card__domain-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn--secondary btn--small"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>{t.examineBtn}</span>
                      <span className="btn__arrow">→</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="project-card__status-indicator" />
                      <span className="project-card__status-text">
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
