import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Monitor, Server, Sparkles } from 'lucide-react';

const ICONS = [Code, Monitor, Server, Sparkles];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 sm:py-20 md:py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2">
                Core Competencies
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
                Current Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
                Honest assessments of my working competencies and development specializations.
              </p>
            </div>
            {/* Unboxed note */}
            <div className="text-xs text-neutral-400 font-medium">
              <span>Proficiency Level:</span>
              <span className="text-emerald-400 ml-1.5 font-semibold">Intermediate</span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
        </div>

        {/* 3 Capabilities Grid - Responsive on Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PORTFOLIO_DATA.capabilities.map((cap, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isThirdOnTablet = idx === 2;
            return (
              <div
                key={cap.title}
                className={`group relative p-5 sm:p-6 md:p-7 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between ${
                  isThirdOnTablet ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Header with Icon and Level */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-800/80 text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Unboxed level text with separator */}
                    <div className="text-[11px] sm:text-xs text-neutral-400">
                      <span>Proficiency</span>
                      <span className="mx-1 text-neutral-600" aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-medium">{cap.level}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 sm:mt-3 leading-relaxed">
                    {cap.summary}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-800/80 space-y-2">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {cap.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs text-neutral-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
