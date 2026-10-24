import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import { NAVIGATION_LINKS } from '../../styles/tokens';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for dynamic glassmorphic header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Engineering Micro-Banner */}
      <div className="bg-[#B91F35] dark:bg-[#7E1D30] text-white text-[11px] font-mono py-1.5 px-4 text-center tracking-wider border-b border-[#8F182B] dark:border-[#5B1020] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="font-semibold">HACKLANCE WINTER HACKATHON 2026:</span>
          <span className="hidden sm:inline opacity-90">Registrations are now open for all college developers.</span>
          <Link
            to="/events"
            className="underline hover:opacity-100 font-semibold inline-flex items-center gap-0.5 ml-1 transition-opacity"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-sm border-b border-[#E9E5E4] dark:border-[#343238]'
            : 'bg-[#FAF9F6]/90 dark:bg-[#101012]/90 border-b border-transparent backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-lg select-none ${
                      isActive
                        ? 'text-[#B91F35] dark:text-[#F05263] bg-[#FCEBED] dark:bg-[#321D23]'
                        : 'text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] hover:bg-[#F1EFED] dark:hover:bg-[#1D1D21]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Cluster */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <Button
                to="/join"
                variant="primary"
                size="sm"
                iconRight={Sparkles}
              >
                Join Community
              </Button>
            </div>

            {/* Mobile Menu & Theme Toggle Trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-xl border border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#1D1D21] text-[#171719] dark:text-[#F6F5F3] hover:border-[#B91F35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91F35] cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-[96px] z-50 bg-[#101012]/60 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#FAF9F6] dark:bg-[#171719] border-b border-[#E9E5E4] dark:border-[#343238] max-h-[calc(100vh-96px)] overflow-y-auto px-6 py-6 shadow-2xl">
              <div className="flex flex-col gap-1.5 mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#85838A] dark:text-[#929098] px-3 mb-1">
                  // NAVIGATION MENU
                </span>
                {NAVIGATION_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#B91F35] dark:text-[#F05263] bg-[#FCEBED] dark:bg-[#321D23] font-semibold'
                          : 'text-[#171719] dark:text-[#F6F5F3] hover:bg-[#F1EFED] dark:hover:bg-[#242429]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono opacity-40">0{NAVIGATION_LINKS.indexOf(link) + 1}</span>
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex flex-col gap-3">
                <Button
                  to="/join"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Join HACKLANCE Community
                </Button>
                <Button
                  to="/events"
                  variant="secondary"
                  size="md"
                  className="w-full justify-center"
                >
                  Explore Upcoming Events
                </Button>
                <div className="mt-2 text-center text-xs text-[#85838A] dark:text-[#929098] font-mono">
                  R.R. Institute of Modern Technology (RRGI)
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
