import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, Eye, X } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <article className="group rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col overflow-hidden shadow-lg">
        {/* Project Image Preview Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.name} preview - ${project.category}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-center">
              <Layers className="w-8 h-8 text-emerald-400 mb-2" />
              <p className="text-sm font-bold text-neutral-100">{project.name}</p>
              <p className="text-xs text-neutral-400">{project.category}</p>
            </div>
          )}

          {/* Scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Quick action overlay on image */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-lg bg-neutral-950/80 backdrop-blur-md text-neutral-300 hover:text-white border border-neutral-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`View details for ${project.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Category kicker on bottom-left of image */}
          <div className="absolute bottom-3 left-4">
            <span className="text-xs text-emerald-300 font-semibold tracking-wide">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                {project.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies list (unboxed text with separators) */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-neutral-400">
              <span className="text-neutral-500 font-medium">Stack:</span>
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
          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              Inspect Specs
            </button>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {/* Project Details Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <div
            className="fixed inset-0"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-10 space-y-6">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800">
              <div>
                <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3
                  id={`modal-title-${project.id}`}
                  className="text-2xl font-bold text-neutral-100"
                >
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Key Features & Architecture
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-neutral-200 border border-neutral-800 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                Close
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <span>Launch Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
