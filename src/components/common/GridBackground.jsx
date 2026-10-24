import React from 'react';

export default function GridBackground({
  children,
  className = '',
  pattern = 'standard', // 'standard' | 'dense' | 'none'
  showCoordinates = false,
  fadeMask = true,
}) {
  const gridClasses = {
    standard: 'technical-grid',
    dense: 'technical-grid-dense',
    none: '',
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Subtle Background Grid Layer */}
      {pattern !== 'none' && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none ${gridClasses[pattern]} ${fadeMask ? 'grid-mask-fade' : ''}`}
        />
      )}

      {/* Understated Technical Coordinate Ticks */}
      {showCoordinates && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0 hidden md:block"
        >
          {/* Top Left Coordinate */}
          <div className="absolute top-4 left-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 border-t border-l border-[#B91F35]/40 dark:border-[#F05263]/40" />
            <span>LOC: 26.8467° N, 80.9462° E [RRGI]</span>
          </div>

          {/* Top Right Crosshair */}
          <div className="absolute top-4 right-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 flex items-center gap-1.5">
            <span>SYS: HCK-NODE.01</span>
            <span className="w-1.5 h-1.5 border-t border-r border-[#B91F35]/40 dark:border-[#F05263]/40" />
          </div>

          {/* Bottom Left Status */}
          <div className="absolute bottom-4 left-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 border-b border-l border-[#B91F35]/40 dark:border-[#F05263]/40" />
            <span>STATUS: ACTIVE // CLUSTER_ONLINE</span>
          </div>

          {/* Bottom Right Mark */}
          <div className="absolute bottom-4 right-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 flex items-center gap-1.5">
            <span>DEV_EXP v2.6</span>
            <span className="w-1.5 h-1.5 border-b border-r border-[#B91F35]/40 dark:border-[#F05263]/40" />
          </div>
        </div>
      )}

      {/* Main Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
