import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Sparkles, 
  Calendar, 
  Users, 
  GitBranch, 
  Check, 
  Copy,
  ChevronRight
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import GridBackground from '../common/GridBackground';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('main.rs');

  const cloneCommand = 'git clone https://github.com/AshishSinghThakur07/hacklance.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#E9E5E4] dark:border-[#343238]">
      <GridBackground pattern="standard" showCoordinates={true} fadeMask={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Editorial Text Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Institutional Attribution Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6">
                <Badge variant="crimson" size="sm" hasDot={true}>
                  RRGI TECHNICAL SOCIETY
                </Badge>
                <span className="text-xs font-mono text-[#85838A] dark:text-[#929098]">
                  // EST. 2024 &bull; LUCKNOW, UP
                </span>
              </div>

              {/* Bold Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] leading-[1.08] mb-6">
                Build. Break.{' '}
                <span className="block mt-1">
                  Learn.{' '}
                  <span className="text-[#B91F35] dark:text-[#F05263] underline decoration-[#B91F35]/30 underline-offset-8">
                    Launch.
                  </span>
                </span>
              </h1>

              {/* Supporting Editorial Subtitle */}
              <p className="text-lg sm:text-xl font-medium text-[#171719] dark:text-[#F6F5F3] max-w-2xl mb-3 font-['Manrope']">
                A technical community built for curious minds and ambitious builders at R.R. Institute of Modern Technology.
              </p>

              <p className="text-base text-[#66656B] dark:text-[#B6B4BA] max-w-xl leading-relaxed mb-8">
                Explore technology, collaborate on software projects, participate in hackathons, sharpen your engineering skills, and build alongside a community that believes in learning by doing.
              </p>

              {/* Primary & Secondary Action Cluster */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button
                  to="/join"
                  variant="primary"
                  size="lg"
                  iconRight={ArrowRight}
                >
                  Join HACKLANCE
                </Button>

                <Button
                  to="/events"
                  variant="secondary"
                  size="lg"
                  icon={Calendar}
                >
                  Explore Events
                </Button>

                <Button
                  to="/projects"
                  variant="ghost"
                  size="lg"
                  className="font-mono text-xs"
                >
                  Discover Projects &rarr;
                </Button>
              </div>

              {/* Terminal Quick Clone Snippet */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] max-w-md shadow-sm">
                <Terminal className="w-4 h-4 text-[#B91F35] dark:text-[#F05263] shrink-0 ml-1" />
                <span className="text-xs font-mono text-[#66656B] dark:text-[#B6B4BA] select-all truncate">
                  $ {cloneCommand}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy clone command"
                  aria-label="Copy clone command"
                  className="ml-auto p-1.5 rounded-lg hover:bg-[#F1EFED] dark:hover:bg-[#242429] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </div>

            {/* Right Supporting Visual Area (5 cols) */}
            <div className="lg:col-span-5 relative">
              
              {/* Architectural Technical Card Container */}
              <div className="relative rounded-2xl bg-[#FFFFFF] dark:bg-[#171719] border border-[#E9E5E4] dark:border-[#343238] shadow-2xl overflow-hidden">
                
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#F1EFED] dark:bg-[#1D1D21] border-b border-[#E9E5E4] dark:border-[#343238]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#B42332]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#A76512]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#16794B]/80" />
                    <span className="text-[11px] font-mono text-[#85838A] dark:text-[#929098] ml-2">
                      rrgi-hacklance-core
                    </span>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-[10px]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('main.rs')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'main.rs'
                          ? 'bg-white dark:bg-[#242429] text-[#B91F35] dark:text-[#F05263] font-semibold'
                          : 'text-[#85838A]'
                      }`}
                    >
                      main.rs
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('manifest.json')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'manifest.json'
                          ? 'bg-white dark:bg-[#242429] text-[#B91F35] dark:text-[#F05263] font-semibold'
                          : 'text-[#85838A]'
                      }`}
                    >
                      manifest.json
                    </button>
                  </div>
                </div>

                {/* Editor Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-[#FFFFFF] dark:bg-[#121214]">
                  {activeTab === 'main.rs' ? (
                    <div className="space-y-1 text-[#171719] dark:text-[#F6F5F3]">
                      <p className="text-[#85838A] dark:text-[#929098]">
                        <span className="text-[#B91F35] dark:text-[#F05263]">// </span>
                        HACKLANCE: RRGI Technical Society
                      </p>
                      <p>
                        <span className="text-[#B91F35] dark:text-[#F05263]">struct</span>{' '}
                        <span className="font-semibold text-amber-700 dark:text-amber-400">Community</span> {'{'}
                      </p>
                      <p className="pl-4">
                        name: <span className="text-emerald-700 dark:text-emerald-400">&quot;HACKLANCE&quot;</span>,
                      </p>
                      <p className="pl-4">
                        institution: <span className="text-emerald-700 dark:text-emerald-400">&quot;RRGI Lucknow&quot;</span>,
                      </p>
                      <p className="pl-4">
                        motto: <span className="text-emerald-700 dark:text-emerald-400">&quot;Build. Break. Learn. Launch.&quot;</span>,
                      </p>
                      <p className="pl-4">
                        is_active: <span className="text-blue-600 dark:text-blue-400">true</span>,
                      </p>
                      <p>{'}'}</p>
                      <p className="pt-2">
                        <span className="text-[#B91F35] dark:text-[#F05263]">async fn</span>{' '}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">incubate_builders</span>() {'{'}
                      </p>
                      <p className="pl-4 text-emerald-700 dark:text-emerald-400">
                        println!(&quot;Inspiring the next generation of engineers...&quot;);
                      </p>
                      <p className="pl-4">
                        deploy_hackathons().<span className="text-amber-700 dark:text-amber-400">await</span>;
                      </p>
                      <p>{'}'}</p>
                    </div>
                  ) : (
                    <div className="space-y-1 text-[#171719] dark:text-[#F6F5F3]">
                      <p>{'{'}</p>
                      <p className="pl-4">
                        &quot;society&quot;: <span className="text-emerald-700 dark:text-emerald-400">&quot;HACKLANCE&quot;</span>,
                      </p>
                      <p className="pl-4">
                        &quot;campus&quot;: <span className="text-emerald-700 dark:text-emerald-400">&quot;RRGI&quot;</span>,
                      </p>
                      <p className="pl-4">
                        &quot;flagship_event&quot;: <span className="text-emerald-700 dark:text-emerald-400">&quot;Winter Hackathon 2026&quot;</span>,
                      </p>
                      <p className="pl-4">
                        &quot;membership&quot;: <span className="text-emerald-700 dark:text-emerald-400">&quot;Open to all students&quot;</span>,
                      </p>
                      <p className="pl-4">
                        &quot;open_source&quot;: <span className="text-blue-600 dark:text-blue-400">true</span>
                      </p>
                      <p>{'}'}</p>
                    </div>
                  )}
                </div>

                {/* Live Announcement Mini-Card attached to Editor */}
                <div className="p-4 bg-[#FAF9F6] dark:bg-[#1A1A1E] border-t border-[#E9E5E4] dark:border-[#343238]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#B91F35]/10 dark:bg-[#F05263]/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-[#B91F35] dark:text-[#F05263]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                          Winter Hackathon 2026
                        </div>
                        <div className="text-[11px] text-[#66656B] dark:text-[#B6B4BA]">
                          36-Hour National Sprint &bull; Nov 20–22
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/events/winter-hackathon-2026"
                      className="text-xs font-semibold text-[#B91F35] dark:text-[#F05263] hover:underline flex items-center shrink-0 mt-1"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Background Glow */}
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-64 h-64 bg-[#B91F35]/10 dark:bg-[#F05263]/10 rounded-full blur-3xl pointer-events-none -z-10"
              />

            </div>

          </div>
        </div>
      </GridBackground>
    </section>
  );
}
