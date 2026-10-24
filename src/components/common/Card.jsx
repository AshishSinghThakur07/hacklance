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
      className={`relative rounded-3xl border border-[#EAE5E2] dark:border-[#2A2830] transition-all duration-300 ${
        glass
          ? 'glass-panel'
          : 'bg-white dark:bg-[#19191D]'
      } shadow-[0_2px_12px_rgba(0,0,0,0.03)] ${
        hoverEffect
          ? 'hover:border-[#78132B]/30 dark:hover:border-[#F05263]/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
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
