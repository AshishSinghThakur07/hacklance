import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-full';

  const sizeClasses = {
    sm: 'text-xs px-4 py-1.5 gap-1.5 h-8 font-medium',
    md: 'text-sm px-5 py-2 gap-2 h-10 font-medium',
    lg: 'text-sm sm:text-base px-7 py-3.5 gap-2.5 h-12 font-medium',
  };

  const variantClasses = {
    primary:
      'bg-[#78132B] dark:bg-[#F05263] text-white hover:bg-[#600F22] dark:hover:bg-[#B91F35] shadow-[0_8px_20px_-4px_rgba(120,19,43,0.38)] hover:shadow-[0_12px_24px_-4px_rgba(120,19,43,0.48)] focus-visible:ring-[#78132B] dark:text-[#101012] active:scale-[0.98]',
    secondary:
      'bg-white dark:bg-[#19191D] border border-[#EAE5E2] dark:border-[#343238] text-[#141416] dark:text-[#F6F5F3] hover:bg-[#FAF8F5] dark:hover:bg-[#222228] hover:border-[#78132B]/40 dark:hover:border-[#F05263]/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] focus-visible:ring-[#78132B] active:scale-[0.98]',
    outline:
      'border border-[#78132B] dark:border-[#F05263] text-[#78132B] dark:text-[#F05263] bg-transparent hover:bg-[#78132B]/10 dark:hover:bg-[#F05263]/10 focus-visible:ring-[#78132B] active:scale-[0.98]',
    ghost:
      'text-[#525059] dark:text-[#B6B4BA] hover:text-[#141416] dark:hover:text-[#F6F5F3] hover:bg-[#F4EFEA] dark:hover:bg-[#1D1D21] focus-visible:ring-[#78132B]',
    danger:
      'bg-[#B42332] text-white hover:bg-[#8F182B] focus-visible:ring-[#B42332] active:scale-[0.98]',
  };


  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0" />
      ) : null}
      <span>{children}</span>
      {!isLoading && IconRight && <IconRight className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
