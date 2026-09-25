import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import defaultPortrait from '../assets/images/ameer_hamza.jpg';

export const Hero: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);

  React.useEffect(() => {
    try {
      localStorage.removeItem('ameer_portfolio_avatar');
    } catch {
      // ignore
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-0 md:min-h-[80vh] flex flex-col justify-center pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-4 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start space-y-6 sm:space-y-7">
          {/* Status & Location badges */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </span>
            <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
              <span>Based in {PORTFOLIO_DATA.personal.location}</span>
            </span>
          </div>

          {/* Profile & Identity Block */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7 md:gap-9 pt-1 w-full">
            {/* Clean Enlaraged Portrait Container */}
            <div className="relative shrink-0">
              <div className="relative">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 aspect-square rounded-3xl overflow-hidden bg-neutral-900 border-2 border-emerald-500/40 shadow-2xl glow-emerald flex items-center justify-center">
                  {!avatarError ? (
                    <img
                      src={defaultPortrait}
                      alt="Ameer Hamza - Junior Web Developer"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover aspect-square select-none pointer-events-none"
                      style={{
                        objectPosition: 'center',
                      }}
                      loading="eager"
                      decoding="sync"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.endsWith('/ameer-hamza.jpg')) {
                          target.src = '/ameer-hamza.jpg';
                        } else {
                          setAvatarError(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-emerald-400 font-extrabold text-3xl sm:text-4xl select-none">
                      AH
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Active status indicator dot */}
                <div
                  className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-950 flex items-center justify-center border-2 border-neutral-900 shadow-lg pointer-events-none"
                  title="Available for opportunities"
                >
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-1 sm:space-y-1.5 min-w-0 flex-1">
              <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-400 tracking-tight">
                Hello, I'm
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.15]">
                Ameer Hamza
              </h1>

              <div className="pt-0.5">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Junior Web Developer
                </span>
              </div>
            </div>
          </div>

          {/* Short professional introduction */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl text-balance">
            {PORTFOLIO_DATA.personal.intro}
          </p>

          {/* Hero CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/15 active:scale-95 cursor-pointer min-h-[44px]"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
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
