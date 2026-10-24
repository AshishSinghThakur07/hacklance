import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Heart,
  ShieldCheck,
  MapPin,
  Mail
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

import BrandLogo from './BrandLogo';
import { BRAND, FOOTER_LINKS } from '../../styles/tokens';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid developer email');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#101012] text-[#171719] dark:text-[#F6F5F3] relative overflow-hidden">
      {/* Subtle Bottom Technical Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 technical-grid opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <BrandLogo size="lg" className="mb-4" />
              <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-sm leading-relaxed mb-6">
                The technical club and premier developer society of{' '}
                <span className="font-medium text-[#171719] dark:text-[#F6F5F3]">
                  R.R. Institute of Modern Technology (RRGI)
                </span>
                . Fostering engineering excellence, collaborative open-source, hackathons, and technical innovation.
              </p>

              <div className="flex flex-col gap-2 text-xs text-[#85838A] dark:text-[#929098] font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263]" />
                  <span>NH-24, Bakshi Ka Talab, Sitapur Road, Lucknow, UP 226201</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263]" />
                  <span>hacklance@rrgi.ac.in</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#171719] dark:text-[#F6F5F3] mb-2">
                // DISPATCH BULLETIN
              </span>
              <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] mb-3">
                Receive curated hackathon briefs, algorithmic challenges, and project releases.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Welcome aboard! You have joined the HACKLANCE dispatch list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@rrgi.ac.in"
                      className="bg-white dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-xs text-[#171719] dark:text-[#F6F5F3] placeholder:text-[#85838A] dark:placeholder:text-[#929098] focus:outline-none focus:ring-2 focus:ring-[#B91F35] dark:focus:ring-[#F05263] flex-1 font-mono"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to dispatch"
                      className="px-4 py-2 bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-semibold text-xs rounded-xl hover:bg-[#8F182B] dark:hover:bg-[#B91F35] transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-[#B42332] font-mono">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Navigation Column 1: Community */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171719] dark:text-[#F6F5F3] mb-4">
              Community
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column 2: Programs */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171719] dark:text-[#F6F5F3] mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column 3: Resources & Docs */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171719] dark:text-[#F6F5F3] mb-4">
              Resources &amp; Docs
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-8 border-t border-[#E9E5E4] dark:border-[#343238] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#85838A] dark:text-[#929098]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} HACKLANCE — R.R. Institute of Modern Technology. All rights reserved.</span>
            <div className="flex items-center gap-4">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-[#171719] dark:hover:text-[#F6F5F3] underline underline-offset-4 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AshishSinghThakur07/hacklance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-lg hover:bg-[#F1EFED] dark:hover:bg-[#1D1D21] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/school/rrgi-lucknow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Page"
              className="p-2 rounded-lg hover:bg-[#F1EFED] dark:hover:bg-[#1D1D21] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="font-mono text-[10px] px-2 py-1 rounded bg-[#F1EFED] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238]">
              SYS: v2.6.0-PROD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
