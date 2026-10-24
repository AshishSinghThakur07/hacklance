import React, { useState } from 'react';
import { 
  Book, 
  Terminal, 
  Code, 
  Layers, 
  GitBranch, 
  ExternalLink, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedCmd, setCopiedCmd] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(''), 3000);
  };

  const sections = [
    { id: 'overview', title: 'System Overview' },
    { id: 'quickstart', title: 'Getting Started' },
    { id: 'design-system', title: 'Design System & Tokens' },
    { id: 'architecture', title: 'Directory Architecture' },
    { id: 'data-persistence', title: 'State & Persistence Engine' },
    { id: 'git-discipline', title: 'Git & Sprint Discipline' },
    { id: 'deployment', title: 'Production Deployment' },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="// DEVELOPER ARCHITECTURE"
            title="Platform Engineering &amp;"
            highlight="System Documentation."
            description="Technical documentation, design system tokens, local setup instructions, and contribution protocols for HACKLANCE."
            className="mb-0"
          />

          <Button
            href="https://github.com/AshishSinghThakur07/hacklance"
            variant="secondary"
            size="md"
            icon={GitBranch}
            iconRight={ExternalLink}
          >
            GitHub Repository
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Docs Navigation Sidebar (3 cols) */}
          <div className="lg:col-span-3 sticky top-24">
            <Card hoverEffect={false} showTicks={true} className="p-4 bg-[#FAF9F6] dark:bg-[#171719]">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#85838A] dark:text-[#929098] px-3 mb-2 block font-bold">
                // DOCUMENTATION INDEX
              </span>

              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition-colors cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                        : 'text-[#66656B] dark:text-[#B6B4BA] hover:bg-[#F1EFED] dark:hover:bg-[#242429]'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-[#E9E5E4] dark:border-[#343238] text-[11px] font-mono text-[#85838A] px-3">
                Docs Version: v2.6.0<br />
                Stack: React 19 + Vite 8
              </div>
            </Card>
          </div>

          {/* Main Docs Content Panel (9 cols) */}
          <div className="lg:col-span-9">
            <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12 space-y-10">
              
              {/* Overview */}
              {activeSection === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">01 // PLATFORM CORE</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    System Overview
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    HACKLANCE is built as a single-page application (SPA) optimized for instant route navigation, offline-first data persistence, and an editorial developer visual identity.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="font-mono text-xs font-bold text-[#B91F35] dark:text-[#F05263] mb-1">
                        FAST BUILD PIPELINE
                      </div>
                      <div className="text-xs text-[#66656B] dark:text-[#B6B4BA]">
                        Vite 8 + ESM bundling with sub-400ms hot module replacement.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="font-mono text-xs font-bold text-[#B91F35] dark:text-[#F05263] mb-1">
                        CRIMSON EDITORIAL UI
                      </div>
                      <div className="text-xs text-[#66656B] dark:text-[#B6B4BA]">
                        Tailwind CSS v4 with bespoke CSS variable tokens &amp; grid masks.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="font-mono text-xs font-bold text-[#B91F35] dark:text-[#F05263] mb-1">
                        OFFLINE-READY
                      </div>
                      <div className="text-xs text-[#66656B] dark:text-[#B6B4BA]">
                        Full LocalStorage data service with verifiable ticket &amp; certificate hashing.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quickstart */}
              {activeSection === 'quickstart' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">02 // SETUP</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    Getting Started
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    Clone the official repository and launch your local development server:
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-[#171719] text-[#F6F5F3] flex items-center justify-between">
                      <code>git clone https://github.com/AshishSinghThakur07/hacklance.git</code>
                      <button
                        onClick={() => handleCopy('git clone https://github.com/AshishSinghThakur07/hacklance.git')}
                        className="text-zinc-400 hover:text-white"
                      >
                        {copiedCmd.includes('clone') ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171719] text-[#F6F5F3] flex items-center justify-between">
                      <code>npm install</code>
                      <button
                        onClick={() => handleCopy('npm install')}
                        className="text-zinc-400 hover:text-white"
                      >
                        {copiedCmd === 'npm install' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171719] text-[#F6F5F3] flex items-center justify-between">
                      <code>npm run dev</code>
                      <button
                        onClick={() => handleCopy('npm run dev')}
                        className="text-zinc-400 hover:text-white"
                      >
                        {copiedCmd === 'npm run dev' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Design System */}
              {activeSection === 'design-system' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">03 // DESIGN SYSTEM</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    Design System &amp; Tokens
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    HACKLANCE uses a curated, high-contrast crimson palette designed to balance vibrant brand emphasis with restrained editorial surfaces.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-3 rounded-xl border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="w-full h-8 rounded-lg bg-[#B91F35] mb-2" />
                      <div className="font-bold">Primary Crimson</div>
                      <div className="text-[#85838A]">#B91F35</div>
                    </div>
                    <div className="p-3 rounded-xl border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="w-full h-8 rounded-lg bg-[#8F182B] mb-2" />
                      <div className="font-bold">Deep Crimson</div>
                      <div className="text-[#85838A]">#8F182B</div>
                    </div>
                    <div className="p-3 rounded-xl border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="w-full h-8 rounded-lg bg-[#101012] mb-2" />
                      <div className="font-bold">Charcoal Black</div>
                      <div className="text-[#85838A]">#101012</div>
                    </div>
                    <div className="p-3 rounded-xl border border-[#E9E5E4] dark:border-[#343238]">
                      <div className="w-full h-8 rounded-lg bg-[#FAF9F6] border border-zinc-300 mb-2" />
                      <div className="font-bold">Warm Ivory</div>
                      <div className="text-[#85838A]">#FAF9F6</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture */}
              {activeSection === 'architecture' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">04 // CODEBASE</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    Directory Architecture
                  </h2>
                  <div className="p-5 rounded-2xl bg-[#171719] text-[#F6F5F3] font-mono text-xs leading-relaxed overflow-x-auto">
                    <pre>{`src/
├── components/
│   ├── admin/       # Management consoles & moderation
│   ├── common/      # Navbar, Footer, ThemeToggle, Card, Grid
│   ├── forms/       # EventRegistrationModal, Validated inputs
│   └── home/        # Hero, MetricsBar, WhatWeDo, Featured
├── context/         # ThemeContext, DataContext, AuthContext
├── data/            # initialData.js (events, projects, certificates)
├── pages/           # Route views (Home, Events, Projects, Admin...)
├── services/        # StorageService (LocalStorage abstraction)
├── styles/          # tokens.js, index.css (Tailwind & Grid)
└── utils/           # helpers.js (date formatting, slugs, IDs)`}</pre>
                  </div>
                </div>
              )}

              {/* Data Persistence */}
              {activeSection === 'data-persistence' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">05 // PERSISTENCE</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    State &amp; Persistence Engine
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    All event registrations, membership applications, contact dispatches, and certificate records are managed through an offline-first service abstraction layer (`StorageService.js`).
                  </p>
                  <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed font-mono">
                    This decouples UI components from persistence logic and allows seamless future integration with Supabase, PostgreSQL, or a custom Express.js backend.
                  </p>
                </div>
              )}

              {/* Git Discipline */}
              {activeSection === 'git-discipline' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">06 // WORKFLOW</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    Git &amp; Sprint Discipline
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    HACKLANCE enforces Conventional Commits across all contributors:
                  </p>
                  <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] font-mono text-xs space-y-1">
                    <div>feat(scope): new feature or user-facing addition</div>
                    <div>fix(scope): bug resolution</div>
                    <div>style(scope): CSS design token or typography updates</div>
                    <div>refactor(scope): internal restructuring</div>
                    <div>docs(scope): documentation updates</div>
                  </div>
                </div>
              )}

              {/* Deployment */}
              {activeSection === 'deployment' && (
                <div className="space-y-6 animate-fadeIn">
                  <Badge variant="crimson" size="sm">07 // RELEASE</Badge>
                  <h2 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                    Production Deployment
                  </h2>
                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    To build production-ready optimized assets:
                  </p>
                  <div className="p-4 rounded-xl bg-[#171719] text-[#F6F5F3] font-mono text-xs">
                    <code>npm run build</code>
                  </div>
                  <p className="text-xs text-[#85838A] font-mono">
                    Output directory: <code>dist/</code> ready for deployment on Vercel, Cloudflare Pages, Netlify, or static campus Nginx servers.
                  </p>
                </div>
              )}

            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
