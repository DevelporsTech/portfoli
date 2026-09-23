import React from 'react';
import { LogoH } from './LogoH';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <LogoH size={32} />
            <div>
              <p className="text-sm font-bold text-neutral-200">
                {PORTFOLIO_DATA.personal.name}
              </p>
              <p className="text-xs text-neutral-400">
                {PORTFOLIO_DATA.personal.title} · {PORTFOLIO_DATA.personal.location}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              aria-label="Email Ameer Hamza"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>© 2026 Ameer Hamza. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
