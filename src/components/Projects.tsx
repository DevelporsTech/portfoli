import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2">
                Portfolio Showcase
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
                Selected Works
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
                Real-world web projects deployed on modern cloud hosting, focusing on responsive UI, performance, and user convenience.
              </p>
            </div>
            {/* Project count indicator */}
            <div className="text-xs text-neutral-400 font-medium">
              <span>Live Deployments:</span>
              <span className="text-emerald-400 ml-1.5 font-mono font-semibold">
                {String(PORTFOLIO_DATA.projects.length).padStart(2, '0')} Projects
              </span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
        </div>

        {/* Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Live Note Box */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <p className="text-xs text-neutral-300">
              All projects are live on Vercel with responsive mobile, tablet, and desktop viewports.
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors whitespace-nowrap"
          >
            <span>Explore GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
