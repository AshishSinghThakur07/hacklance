import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ size = 'md', showSub = true, className = '', link = true }) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const Content = (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Precision Geometric Monogram */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-[#171719] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] shadow-sm group-hover:border-[#B91F35] dark:group-hover:border-[#F05263] transition-all duration-300 overflow-hidden shrink-0`}
      >
        {/* Subtle grid lines inside icon */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:4px_4px]" />
        
        <svg viewBox="0 0 32 32" className="w-5 h-5 relative z-10" fill="none">
          {/* Vertical left pillar */}
          <path
            d="M9 7V25"
            stroke="#B91F35"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="dark:stroke-[#F05263]"
          />
          {/* Vertical right pillar */}
          <path
            d="M23 7V25"
            stroke="#B91F35"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="dark:stroke-[#F05263]"
          />
          {/* Center cross connection */}
          <path
            d="M9 16H23"
            stroke="#8F182B"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="dark:stroke-[#B91F35]"
          />
          {/* Central innovation node */}
          <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight font-['Manrope'] leading-none text-[#171719] dark:text-[#F6F5F3] flex items-center gap-1.5 ${textSizes[size]}`}>
          <span>HACKLANCE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B91F35] dark:bg-[#F05263] inline-block animate-pulse" />
        </div>
        {showSub && (
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#66656B] dark:text-[#929098] font-medium mt-1">
            RRGI TECH CLUB
          </span>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91F35] rounded-lg">
        {Content}
      </Link>
    );
  }

  return Content;
}
