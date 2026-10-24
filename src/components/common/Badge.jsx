import React from 'react';

export default function Badge({
  children,
  variant = 'neutral', // 'crimson' | 'neutral' | 'success' | 'warning' | 'info' | 'burgundy'
  size = 'sm',
  hasDot = false,
  className = '',
}) {
  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 font-medium',
    sm: 'text-xs px-2.5 py-1 font-medium',
    md: 'text-sm px-3 py-1 font-medium',
  };

  const variantClasses = {
    crimson:
      'bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] border border-[#B91F35]/20 dark:border-[#F05263]/30',
    neutral:
      'bg-[#F1EFED] dark:bg-[#1D1D21] text-[#66656B] dark:text-[#B6B4BA] border border-[#E9E5E4] dark:border-[#343238]',
    success:
      'bg-emerald-50 dark:bg-emerald-950/40 text-[#16794B] dark:text-[#50C58B] border border-emerald-200 dark:border-emerald-800/40',
    warning:
      'bg-amber-50 dark:bg-amber-950/40 text-[#A76512] dark:text-[#F2B84B] border border-amber-200 dark:border-amber-800/40',
    info:
      'bg-blue-50 dark:bg-blue-950/40 text-[#245CB5] dark:text-[#83B5FF] border border-blue-200 dark:border-blue-800/40',
    burgundy:
      'bg-[#5B1020]/10 dark:bg-[#7E1D30]/20 text-[#8F182B] dark:text-[#F05263] border border-[#8F182B]/30',
  };

  const dotClasses = {
    crimson: 'bg-[#B91F35] dark:bg-[#F05263]',
    neutral: 'bg-[#85838A] dark:bg-[#929098]',
    success: 'bg-[#16794B] dark:bg-[#50C58B]',
    warning: 'bg-[#A76512] dark:bg-[#F2B84B]',
    info: 'bg-[#245CB5] dark:bg-[#83B5FF]',
    burgundy: 'bg-[#8F182B] dark:bg-[#F05263]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full select-none font-mono ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {hasDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotClasses[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotClasses[variant]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
