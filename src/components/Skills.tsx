import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Code,
  Layout,
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

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Layout,
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
    <section id="skills" className="py-16 sm:py-20 md:py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2">
              Technical Tooling
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
              Structured across modern frontend engineering, responsive UI, backend foundations, and development workflow.
            </p>
            <div className="mt-3 sm:mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
          </div>

          {/* Interactive Category Filter - Smooth Scrollable on Mobile, Flex on Desktop */}
          <div className="w-full lg:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <div
              className="inline-flex items-center gap-1.5 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-xl whitespace-nowrap min-w-max"
              role="tablist"
              aria-label="Skill Categories"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer min-h-[38px] ${
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
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer min-h-[38px] ${
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
        </div>

        {/* Categories & Skills Display */}
        <div className="space-y-8 sm:space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-3.5 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h3 className="text-sm sm:text-base font-bold text-neutral-200 tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs text-neutral-400 font-normal">
                  — {category.description}
                </span>
              </div>

              {/* Responsive Cards: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill) => {
                  const Icon = ICON_MAP[skill.icon] || Code;
                  const isLearning = skill.level === 'Active Learning';
                  return (
                    <div
                      key={skill.name}
                      className="group p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 flex items-start gap-3 sm:gap-3.5"
                    >
                      <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-800/80 text-emerald-400 group-hover:scale-105 transition-transform duration-200 shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors truncate">
                            {skill.name}
                          </h4>
                          {/* Unboxed proficiency indicator */}
                          <span
                            className={`text-[10px] sm:text-[11px] font-medium shrink-0 ${
                              isLearning ? 'text-cyan-400' : 'text-emerald-400'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-[11px] sm:text-xs text-neutral-400 line-clamp-2 leading-relaxed">
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
