import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Compass, Layers, Sparkles } from 'lucide-react';
import workspaceImg from '../assets/images/developer_workspace_1790181111664.jpg';

export const About: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2">
            Background & Mindset
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
            About Me
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-12 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Biography & Full Stack Vision */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
                "{PORTFOLIO_DATA.personal.bio}"
              </p>

              <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
                I am deeply interested in both frontend and backend development, working consistently toward becoming a proficient, well-rounded Full Stack Developer. My approach centers on writing clean, readable code, adopting modern architectural patterns, and ensuring that every user interaction is intuitive and responsive across devices.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
                As a Junior Web Developer, I take pride in being honest about my current capabilities while maintaining high standards for craft, curiosity, and rapid self-directed learning.
              </p>
            </div>

            {/* Learning Journey Checklist / Grid */}
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>My Active Learning Journey</span>
              </div>
              <p className="text-xs text-neutral-400">
                Core technologies and disciplines I practice and strengthen daily:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {PORTFOLIO_DATA.personal.learningJourney.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/60 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workspace Showcase & Core Philosophies */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Visual Workspace Card */}
            <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-2.5 sm:p-3 overflow-hidden group shadow-lg">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-950">
                {!imgFailed ? (
                  <img
                    src={workspaceImg}
                    alt="Modern development workspace setup with code editor"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900 text-neutral-400">
                    <Layers className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-xs">Developer Workspace</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-200">
                  <p className="font-semibold text-neutral-100">Clean Workspace & Practical Code</p>
                  <p className="text-[11px] text-neutral-400">Where ideas turn into real, deployed applications</p>
                </div>
              </div>
            </div>

            {/* Core Development Principles */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Working Principles</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">01.</span>
                  <span><strong>Mobile-First & Responsive:</strong> Ensuring layouts, touch targets, and typography feel natural across any screen size.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">02.</span>
                  <span><strong>Clean & Maintainable:</strong> Prioritizing readable code, reusable components, and clear naming conventions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">03.</span>
                  <span><strong>Real Value Over Complexity:</strong> Building practical features that solve actual user needs cleanly and fast.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
