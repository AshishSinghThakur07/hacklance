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
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-xl';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 h-8 font-semibold',
    md: 'text-sm px-4 py-2 gap-2 h-10',
    lg: 'text-base px-6 py-3 gap-2.5 h-12 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#B91F35] dark:bg-[#F05263] text-white hover:bg-[#8F182B] dark:hover:bg-[#B91F35] shadow-sm hover:shadow focus-visible:ring-[#B91F35] dark:text-[#101012] font-semibold active:scale-[0.98]',
    secondary:
      'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#171719] dark:text-[#F6F5F3] hover:border-[#B91F35] dark:hover:border-[#F05263] hover:bg-[#F1EFED] dark:hover:bg-[#242429] focus-visible:ring-[#B91F35] active:scale-[0.98]',
    outline:
      'border border-[#B91F35] dark:border-[#F05263] text-[#B91F35] dark:text-[#F05263] bg-transparent hover:bg-[#B91F35]/10 dark:hover:bg-[#F05263]/10 focus-visible:ring-[#B91F35] active:scale-[0.98]',
    ghost:
      'text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] hover:bg-[#F1EFED] dark:hover:bg-[#1D1D21] focus-visible:ring-[#B91F35]',
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
