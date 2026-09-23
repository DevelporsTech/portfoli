import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields before submitting.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('idle');
    setErrorMessage('');

    // Safe direct mailto generator so the user can send real emails directly
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: CTA & Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
                Initiate Contact
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight leading-tight">
                Let's Build Something Great Together.
              </h2>
              <div className="mt-3 h-1 w-12 bg-emerald-500 rounded-full" />
              <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting web development projects. Whether you need a website, want to discuss a project, or simply have a question, feel free to reach out.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-4 h-4 text-neutral-300" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[11px] text-neutral-400 font-medium">Direct Email Address</p>
                <p className="text-xs sm:text-sm text-neutral-200 font-mono truncate">
                  {PORTFOLIO_DATA.contact.email}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-neutral-100">
                  Send a Direct Message
                </h3>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
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
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                    placeholder="Tell me about your project, timeline, or question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors active:scale-95 shadow-sm shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-center text-neutral-500 pt-1">
                  Transfers directly to your email client with pre-filled details. No spam or storage.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
