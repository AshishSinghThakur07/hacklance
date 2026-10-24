import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-xl border border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#1D1D21] text-[#171719] dark:text-[#F6F5F3] hover:border-[#B91F35] dark:hover:border-[#F05263] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91F35] cursor-pointer shadow-sm ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#F2B84B] transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#5B1020] transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
