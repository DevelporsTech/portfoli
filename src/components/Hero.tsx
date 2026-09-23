import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-0 md:min-h-[85vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Subtle modern background radial gradient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start space-y-7">
          {/* Location & Status Line (Clean text, unboxed) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              <span>Based in {PORTFOLIO_DATA.personal.location}</span>
            </span>
          </div>

          {/* Fixed Portrait Image In Front of Name & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-1 w-full">
            {/* Fixed Permanent Portrait Image */}
            <div className="relative shrink-0">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-neutral-900 border-2 border-emerald-500/40 shadow-2xl glow-emerald">
                <img
                  src="/ameer-hamza.png"
                  alt="Ameer Hamza - Junior Web Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to jpg copy if png fails
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/ameer-hamza.jpg')) {
                      target.src = '/ameer-hamza.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>

              {/* Active status indicator dot */}
              <div
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-neutral-950 flex items-center justify-center border-2 border-neutral-900 shadow-md"
                title="Available for opportunities"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Main Greeting, Name & Title */}
            <div className="space-y-1.5 min-w-0">
              <p className="text-base sm:text-lg font-medium text-neutral-400 tracking-tight">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.1]">
                Ameer Hamza
              </h1>
              <div className="pt-0.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Junior Web Developer
                </span>
              </div>
            </div>
          </div>

          {/* Short professional introduction */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl text-balance">
            {PORTFOLIO_DATA.personal.intro}
          </p>

          {/* Hero CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
