import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  showTicks = false,
  glass = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl border border-[#E9E5E4] dark:border-[#343238] transition-all duration-300 ${
        glass
          ? 'glass-panel'
          : 'bg-[#FFFFFF] dark:bg-[#1D1D21]'
      } ${
        hoverEffect
          ? 'hover:border-[#B91F35]/50 dark:hover:border-[#F05263]/50 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Corner Technical Ticks */}
      {showTicks && (
        <>
          <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[#85838A]/30 dark:border-[#929098]/30 pointer-events-none" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[#85838A]/30 dark:border-[#929098]/30 pointer-events-none" />
          <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[#85838A]/30 dark:border-[#929098]/30 pointer-events-none" />
          <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[#85838A]/30 dark:border-[#929098]/30 pointer-events-none" />
        </>
      )}

      {children}
    </div>
  );
}
