import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = PORTFOLIO_DATA.contact.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Clipboard write fallback triggered', err);
      setCopied(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please write a brief message.');
      setFormStatus('error');
      return;
    }

    // Direct mailto generator so the user can send real emails directly
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: CTA & Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2">
                Initiate Contact
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight leading-tight">
                Let's Build Something Great Together.
              </h2>
              <div className="mt-3 h-1 w-12 bg-emerald-500 rounded-full" />
              <p className="text-xs sm:text-sm md:text-base text-neutral-300 mt-4 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting web development projects. Whether you need a website, want to discuss a project, or simply have a question, feel free to reach out.
              </p>
            </div>

            {/* Direct Connect Buttons - Responsive Wrapping */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 cursor-pointer min-h-[44px]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
              >
                <Github className="w-4 h-4 text-neutral-300" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Quick Email Copy Box - Overflow resilient */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-neutral-400 font-medium">Direct Email Address</p>
                <p className="text-xs sm:text-sm text-neutral-200 font-mono break-all sm:truncate">
                  {PORTFOLIO_DATA.contact.email}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors shrink-0 cursor-pointer min-h-[36px] w-full sm:w-auto"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm sm:text-base font-bold text-neutral-100">
                  Send a Direct Message
                </h3>
              </div>

              {formStatus === 'success' && (
                <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message prepared in your email client!</p>
                    <p className="text-emerald-400/80 text-xs mt-0.5">
                      Your default mail application has opened to finalize sending directly to {PORTFOLIO_DATA.contact.email}.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, ideas, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-[0.98] cursor-pointer min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
