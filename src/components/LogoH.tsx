import React from 'react';

interface LogoHProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const LogoH: React.FC<LogoHProps> = ({
  className = '',
  size = 36,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="60%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* Left Vertical Bar */}
          <rect
            x="26"
            y="22"
            width="14"
            height="56"
            rx="4"
            fill="url(#hMarkGrad)"
          />
          {/* Middle Crossbar */}
          <rect
            x="40"
            y="43"
            width="20"
            height="14"
            fill="url(#hMarkGrad)"
          />
          {/* Right Vertical Bar */}
          <rect
            x="60"
            y="22"
            width="14"
            height="56"
            rx="4"
            fill="url(#hMarkGrad)"
          />
          {/* Center precision node */}
          <circle cx="50" cy="50" r="3.2" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-neutral-100 tracking-tight text-base group-hover:text-emerald-400 transition-colors">
            Ameer Hamza
          </span>
          <span className="text-[11px] text-neutral-400 font-medium tracking-wide uppercase">
            Junior Web Developer
          </span>
        </div>
      )}
    </div>
  );
};
