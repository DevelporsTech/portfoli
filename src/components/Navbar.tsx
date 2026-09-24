import React, { useState, useEffect } from 'react';
import { LogoH } from './LogoH';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Support initial deep link from hash
    if (window.location.hash) {
      const hashEl = document.querySelector(window.location.hash);
      if (hashEl) {
        setTimeout(() => {
          hashEl.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }

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
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/30'
            : 'py-4 sm:py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1 shrink-0"
              aria-label="Ameer Hamza Home"
            >
              <LogoH size={32} />
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base text-neutral-100 group-hover:text-emerald-400 transition-colors tracking-tight">
                  Ameer Hamza
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium tracking-wider uppercase">
                  Junior Web Developer
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Visible on Large Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
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

            {/* Zone 3: Primary Action & Mobile/Tablet Menu Trigger */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 whitespace-nowrap cursor-pointer min-h-[38px]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              {/* Tablet & Mobile Menu Trigger (< 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center"
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

      {/* Mobile & Tablet Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile & Tablet Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <LogoH size={30} />
              <span className="font-bold text-sm text-neutral-100">Ameer Hamza</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-neutral-800 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Mobile and Tablet navigation links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[46px] ${
                    isActive
                      ? 'bg-neutral-900 text-emerald-400 font-semibold border border-neutral-800'
                      : 'text-neutral-300 hover:text-neutral-100 hover:bg-neutral-900/50'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
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
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer min-h-[44px]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-center text-neutral-400">
            Based in Pakistan · Open to Remote Work
          </p>
        </div>
      </div>
    </>
  );
};
