import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Code,
  Palette,
  FileCode,
  Atom,
  Globe,
  Smartphone,
  Github,
  Zap,
  Server,
  Cloud,
  Bot,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Palette,
  FileCode,
  Atom,
  Globe,
  Smartphone,
  Github,
  Zap,
  Server,
  Cloud,
  Bot,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = PORTFOLIO_DATA.skillCategories;
  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.title.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
              Technical Tooling
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              Structured across modern frontend engineering, responsive UI, and development workflow.
            </p>
            <div className="mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
          </div>

          {/* Interactive Category Filter - Segmented Control */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl"
            role="tablist"
            aria-label="Skill Categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                selectedCategory === 'all'
                  ? 'bg-neutral-800 text-emerald-400 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.title}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.title.toLowerCase()}
                onClick={() => setSelectedCategory(cat.title.toLowerCase())}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  selectedCategory === cat.title.toLowerCase()
                    ? 'bg-neutral-800 text-emerald-400 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Skills Display */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-bold text-neutral-200 tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs text-neutral-500 font-normal">
                  — {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = ICON_MAP[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="p-2.5 rounded-lg bg-neutral-800/80 text-emerald-400 group-hover:scale-110 transition-transform duration-200 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-neutral-100 group-hover:text-emerald-400 transition-colors truncate">
                            {skill.name}
                          </h4>
                          {/* Unboxed level text */}
                          <span className="text-[11px] text-neutral-400 shrink-0 font-medium">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-400 mt-1 leading-normal line-clamp-2">
                          {skill.focus}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
