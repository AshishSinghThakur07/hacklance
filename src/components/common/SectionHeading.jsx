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
      {/* Category Eyebrow / Pill Tag */}
      {tag && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBECEF] dark:bg-[#321D23] border border-[#78132B]/15 dark:border-[#F05263]/25 mb-4 text-[11px] font-mono tracking-wider uppercase text-[#78132B] dark:text-[#F05263] font-semibold ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#78132B] dark:bg-[#F05263]" />
          <span>{tag}</span>
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141416] dark:text-[#F6F5F3] font-serif-editorial leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-[#78132B] dark:text-[#F05263]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description / Editorial Subtitle */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#525059] dark:text-[#B6B4BA] leading-relaxed">
          {description}
        </p>
      )}


      {/* Optional action/filter container */}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
