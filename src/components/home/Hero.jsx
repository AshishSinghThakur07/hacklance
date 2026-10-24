import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const cloneCommand = 'git clone https://github.com/AshishSinghThakur07/hacklance.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FAF8F5] dark:bg-[#0F0F12] border-b border-[#EAE5E2] dark:border-[#2A2830]">
      {/* Very faint, subtle warm vignette */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#FAF8F5] to-[#F4EFEA] dark:from-[#0F0F12] dark:via-[#0F0F12] dark:to-[#17171C] pointer-events-none" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Floating Pill Badge (Exact SaheliShield Style) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#19191D] border border-[#EAE5E2] dark:border-[#343238] shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-8 sm:mb-10 transition-transform hover:scale-[1.02]">
          {/* Small Monogram Icon Badge */}
          <div className="w-5 h-5 rounded-md bg-[#78132B] dark:bg-[#F05263] flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
              <path d="M4 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold text-[#78132B] dark:text-[#F05263]">
            R.R. INSTITUTE OF MODERN TECHNOLOGY &bull; TECHNICAL SOCIETY
          </span>
        </div>

        {/* Hero Editorial Serif Headline */}
        <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.08] mb-6 sm:mb-8 select-none">
          <span className="block">
            <span className="text-[#78132B] dark:text-[#F05263] font-bold">Curious</span>{' '}
            <span className="text-[#141416] dark:text-[#F6F5F3] font-bold">Minds.</span>
          </span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-[#78132B] dark:text-[#F05263] font-bold">Ambitious</span>{' '}
            <span className="text-[#141416] dark:text-[#F6F5F3] font-bold">Builders.</span>
          </span>
        </h1>

        {/* Clean Editorial Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#525059] dark:text-[#B6B4BA] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          An integrated technical platform for competitive hackathons, collaborative open-source engineering, and hands-on learning — for all students at RRGI.
        </p>

        {/* Center Pill Action Buttons (Exact Luxury Pill Aesthetic) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12">
          {/* Primary Crimson Button with deep soft drop-shadow */}
          <Link
            to="/join"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#78132B] hover:bg-[#600F22] text-white text-sm sm:text-base font-medium shadow-[0_12px_28px_-6px_rgba(120,19,43,0.45)] hover:shadow-[0_16px_32px_-6px_rgba(120,19,43,0.55)] transition-all duration-200 cursor-pointer active:scale-[0.98] group"
          >
            <span>Explore HACKLANCE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary White Pill with soft red play icon and badge */}
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-white dark:bg-[#19191D] border border-[#EAE5E2] dark:border-[#343238] hover:bg-[#FAF8F5] dark:hover:bg-[#222228] text-[#141416] dark:text-[#F6F5F3] text-sm sm:text-base font-medium shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span className="w-6 h-6 rounded-full bg-[#FBECEF] dark:bg-[#321D23] flex items-center justify-center text-[#78132B] dark:text-[#F05263] shrink-0">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Upcoming Hackathons</span>
            <span className="text-xs font-mono text-[#787680] dark:text-[#929098] ml-0.5">
              Winter '26
            </span>
          </Link>
        </div>

        {/* Subtle Quick Clone Terminal Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#19191D]/80 backdrop-blur-sm border border-[#EAE5E2] dark:border-[#343238] text-xs font-mono text-[#525059] dark:text-[#B6B4BA] shadow-sm max-w-md mx-auto">
          <Terminal className="w-3.5 h-3.5 text-[#78132B] dark:text-[#F05263] shrink-0" />
          <span className="truncate select-all">$ {cloneCommand}</span>
          <button
            type="button"
            onClick={handleCopy}
            title="Copy command"
            className="p-1 rounded-md hover:bg-[#F4EFEA] dark:hover:bg-[#2A2830] transition-colors ml-1 text-[#78132B] dark:text-[#F05263] cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </section>
  );
}
