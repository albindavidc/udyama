import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-8 h-8 shrink-0">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
            <stop offset="100%" stopColor="#0284c7" /> {/* sky-600 */}
          </linearGradient>
          <linearGradient id="logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" /> {/* cyan-300 */}
            <stop offset="100%" stopColor="#0ea5e9" /> {/* sky-500 */}
          </linearGradient>
        </defs>
        {/* Outer 'U' Shape */}
        <path d="M8 10 L8 22 C8 28.627 13.373 34 20 34 C26.627 34 32 28.627 32 22 L32 10" stroke="url(#logo-gradient)" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Inner Upward Arrow / Apex */}
        <path d="M20 6 L20 22 M14 12 L20 6 L26 12" stroke="url(#logo-gradient-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <h1 className="text-2xl font-bold tracking-tighter uppercase italic">udyama</h1>
    </div>
  );
}
