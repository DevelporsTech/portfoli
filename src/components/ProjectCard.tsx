import React, { useState, useEffect } from 'react';
import { ExternalLink, Layers, CheckCircle2, Eye, X } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <>
      <article className="group rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col overflow-hidden shadow-lg">
        {/* Project Preview Image with Aspect Ratio */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.name} preview - ${project.category}`}
              width={600}
              height={338}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900 text-neutral-400">
              <Layers className="w-10 h-10 text-emerald-400 mb-2 opacity-80" />
              <p className="text-xs font-medium text-neutral-300">{project.name}</p>
              <p className="text-[11px] text-neutral-400 mt-1">Live Web Application</p>
            </div>
          )}

          {/* Hover / Touch Action Overlay */}
          <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-xs">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer min-h-[38px]"
              aria-label={`View specs for ${project.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect</span>
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer min-h-[38px]"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Category tag badge */}
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] sm:text-[11px] font-medium text-emerald-400">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
              {project.name}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Technologies list */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-neutral-400">
              <span className="text-neutral-400 font-medium text-[11px]">Stack:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-neutral-300 font-mono text-[11px]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3.5 border-t border-neutral-800/80 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors py-2 px-1 cursor-pointer"
            >
              Inspect Specs
            </button>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 whitespace-nowrap cursor-pointer min-h-[36px]"
            >
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {/* Project Details Modal - Mobile & Tablet Optimized */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <div
            className="fixed inset-0"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl max-h-[88vh] overflow-y-auto z-10 space-y-5 sm:space-y-6">
            <div className="flex items-start justify-between gap-4 pb-3 sm:pb-4 border-b border-neutral-800">
              <div>
                <p className="text-[11px] sm:text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3
                  id={`modal-title-${project.id}`}
                  className="text-xl sm:text-2xl font-bold text-neutral-100"
                >
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-[11px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Key Features & Architecture
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 border border-neutral-800 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer min-h-[40px]"
              >
                Close
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/15 cursor-pointer min-h-[40px]"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
