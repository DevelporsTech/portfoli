import React, { useState, useEffect } from 'react';
import { LogoH } from './LogoH';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/30'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
              aria-label="Ameer Hamza Home"
            >
              <LogoH size={34} />
              <div className="flex flex-col">
                <span className="font-bold text-base text-neutral-100 group-hover:text-emerald-400 transition-colors tracking-tight">
                  Ameer Hamza
                </span>
                <span className="text-[11px] text-neutral-400 font-medium tracking-wider uppercase">
                  Junior Web Developer
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm ${
                      isActive
                        ? 'text-emerald-400 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-100'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              {/* Mobile & Tablet menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 z-50 bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <LogoH size={30} />
              <span className="font-bold text-sm text-neutral-100">Ameer Hamza</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-neutral-800"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Mobile menu links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-emerald-400 font-semibold border border-neutral-800'
                      : 'text-neutral-300 hover:text-neutral-100 hover:bg-neutral-900/50'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-neutral-800 space-y-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-center text-neutral-500">
            Based in Pakistan · Open to Remote Work
          </p>
        </div>
      </div>
    </>
  );
};
