import React from 'react';

export default function SectionHeading({
  tag,
  title,
  highlight,
  description,
  align = 'left', // 'left' | 'center'
  children,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {/* Category Eyebrow / Monospace Tag */}
      {tag && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-wider uppercase text-[#B91F35] dark:text-[#F05263] font-semibold ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          <span className="w-2 h-[2px] bg-[#B91F35] dark:bg-[#F05263]" />
          <span>{tag}</span>
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-[#B91F35] dark:text-[#F05263]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description / Editorial Subtitle */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
          {description}
        </p>
      )}

      {/* Optional action/filter container */}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
