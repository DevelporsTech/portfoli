import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, LayoutTemplate, MonitorSmartphone, Check } from 'lucide-react';

const ICONS = [Code2, LayoutTemplate, MonitorSmartphone];

export const Capabilities: React.FC = () => {
  return (
    <section className="py-20 border-t border-neutral-900 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            What I Deliver
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
                Current Capabilities
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                Honest assessments of my working competencies and development specializations.
              </p>
            </div>
            {/* Unboxed note */}
            <div className="text-xs text-neutral-400 font-medium">
              <span>Proficiency Level:</span>
              <span className="text-emerald-400 ml-1.5 font-semibold">Intermediate</span>
            </div>
          </div>
          <div className="mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
        </div>

        {/* 3 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.capabilities.map((cap, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={cap.title}
                className="group relative p-6 sm:p-7 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header with Icon and Level */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-neutral-800/80 text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Unboxed level text with separator */}
                    <div className="text-xs text-neutral-400">
                      <span>Proficiency</span>
                      <span className="mx-1 text-neutral-600" aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-medium">{cap.level}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                    {cap.summary}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-800/80">
                  <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                    Key Highlights
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {cap.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
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
