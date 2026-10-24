import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#171719] dark:bg-[#101012] dark:text-[#F6F5F3] transition-colors duration-200">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        {children || <Outlet />}
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B91F35]"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
