import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { INITIAL_FAQS } from '../data/initialData';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'About & Membership',
    'Events & Hackathons',
    'Projects & Collaboration',
    'Certificates & Credentials',
    'Sponsorships & Partnerships',
  ];

  const filteredFaqs = INITIAL_FAQS.filter((faq) => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQ = faq.q.toLowerCase().includes(q);
      const matchA = faq.a.toLowerCase().includes(q);
      if (!matchQ && !matchA) return false;
    }
    return true;
  });

  const toggleIndex = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// ANSWERS & PROTOCOLS"
          title="Frequently Asked"
          highlight="Questions."
          description="Everything you need to know about joining HACKLANCE, registering for hackathons, contributing to open code, and verifying certificates."
        />

        {/* Search & Category toolbar */}
        <div className="space-y-4 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          <div className="relative">
            <Search className="w-4 h-4 text-[#85838A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#171719] dark:text-[#F6F5F3] placeholder:text-[#85838A] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-[#E9E5E4] dark:border-[#343238]">
            <HelpCircle className="w-8 h-8 text-[#85838A] mx-auto mb-2 opacity-50" />
            <p className="text-xs font-mono text-[#85838A]">No matching questions found.</p>
          </div>
        ) : (
          <div className="space-y-4 mb-16">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#1D1D21] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91F35]"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#B91F35] dark:text-[#F05263] font-bold block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                        {faq.q}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-[#85838A] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#B91F35] dark:text-[#F05263]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed border-t border-[#E9E5E4]/50 dark:border-[#343238]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Help Box */}
        <Card hoverEffect={false} showTicks={true} className="p-8 text-center bg-[#FAF9F6] dark:bg-[#171719]">
          <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] max-w-md mx-auto mb-6 leading-relaxed font-mono">
            Reach out directly to the HACKLANCE student council and faculty liaison team.
          </p>
          <Button to="/contact" variant="primary" size="sm" iconRight={ArrowRight}>
            Ask Our Council &rarr;
          </Button>
        </Card>

      </div>
    </div>
  );
}
