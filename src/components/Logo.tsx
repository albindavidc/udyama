import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 shrink-0">
        <defs>
          <linearGradient id="apex-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="apex-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        <path d="M 128 176 V 288 C 128 358.7 185.3 416 256 416 C 326.7 416 384 358.7 384 288 V 176" 
              stroke="url(#apex-grad-main)" 
              strokeWidth="56" 
              strokeLinecap="round" 
              fill="none" />
              
        <path d="M 256 112 V 304" 
              stroke="url(#apex-grad-accent)" 
              strokeWidth="48" 
              strokeLinecap="round" 
              fill="none" />
              
        <path d="M 176 192 L 256 112 L 336 192" 
              stroke="url(#apex-grad-accent)" 
              strokeWidth="48" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" />
      </svg>
      <h1 className="text-2xl font-bold tracking-tighter uppercase italic">udyama</h1>
    </div>
  );
}
