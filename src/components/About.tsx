import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Compass, Layers, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
            About Me
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Full Stack Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
                "{PORTFOLIO_DATA.personal.bio}"
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                I am deeply interested in both frontend and backend development, working consistently toward becoming a proficient, well-rounded Full Stack Developer. My approach centers on writing clean, readable code, adopting modern architectural patterns, and ensuring that every user interaction is intuitive and responsive across devices.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                As a Junior Web Developer, I take pride in being honest about my current capabilities while maintaining high standards for craft, curiosity, and rapid self-directed learning.
              </p>
            </div>

            {/* Learning Journey Checklist / Grid */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>My Active Learning Journey</span>
              </div>
              <p className="text-xs text-neutral-400">
                Core technologies and disciplines I practice and strengthen daily:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {PORTFOLIO_DATA.personal.learningJourney.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/60 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workspace Showcase & Core Philosophies */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Workspace Card */}
            <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-3 overflow-hidden group shadow-lg">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-950">
                <img
                  src="/src/assets/images/developer_workspace_1790181111664.jpg"
                  alt="Modern development workspace setup with code editor"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-200">
                  <p className="font-semibold text-neutral-100">Clean Workspace & Practical Code</p>
                  <p className="text-[11px] text-neutral-400">Daily focus on React, Next.js & modern full-stack workflows</p>
                </div>
              </div>
            </div>

            {/* Core Working Philosophy Cards */}
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/70 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-neutral-200">
                    Component-Driven Mindset
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                    Building modular, reusable, and maintainable UI blocks that scale seamlessly as projects expand.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/70 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-neutral-200">
                    Responsive First
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                    Ensuring fast rendering, readable typography, and effortless touch interactions on mobile and desktop alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
