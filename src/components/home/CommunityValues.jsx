import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';

export default function CommunityValues() {
  const values = [
    {
      title: 'Learning by Doing',
      desc: 'Theory finds its true value when tested in production. We prioritize shipping actual running software over passive consumption.',
      mono: 'EXECUTE()',
    },
    {
      title: 'Peer-to-Peer Knowledge Sharing',
      desc: 'Every senior was once a beginner. Seniors and alumni mentor juniors directly through workshops, code reviews, and pair-programming jams.',
      mono: 'COLLAB()',
    },
    {
      title: 'Rigorous Engineering Standards',
      desc: 'We treat student projects with the same architectural discipline as modern engineering studios: atomic commits, PR reviews, CI tests, and clean typography.',
      mono: 'STANDARDS()',
    },
    {
      title: 'Authentic Inclusivity',
      desc: 'HACKLANCE is open to all RRGI students across all engineering branches, semesters, and skill backgrounds. Passion for technology is the only prerequisite.',
      mono: 'OPEN_ACCESS()',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#141417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <SectionHeading
              tag="// 04. PURPOSE & CULTURE"
              title="Technology is better when we"
              highlight="build together."
              description="HACKLANCE was founded at R.R. Institute of Modern Technology to create an authentic developer ecosystem where students cultivate technical credibility, compete nationally, and launch their careers with genuine portfolio evidence."
              className="mb-8"
            />

            <div className="p-5 rounded-2xl bg-[#FCEBED] dark:bg-[#321D23] border border-[#B91F35]/20 dark:border-[#F05263]/30 mb-8">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#B91F35] dark:text-[#F05263] font-semibold">
                <Shield className="w-4 h-4" />
                <span>INSTITUTIONAL INTEGRITY</span>
              </div>
              <p className="text-xs text-[#171719] dark:text-[#F6F5F3] leading-relaxed">
                We represent RRGI with pride in state and national hackathons like Smart India Hackathon (SIH), ICPC preliminaries, and open-source challenges.
              </p>
            </div>

            <Button to="/about" variant="secondary" size="md" iconRight={ArrowRight}>
              Read Our Charter &amp; History
            </Button>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <Card
                key={v.title}
                hoverEffect={true}
                showTicks={true}
                className="p-6 bg-[#FAF9F6] dark:bg-[#1D1D21]"
              >
                <div className="text-[11px] font-mono text-[#B91F35] dark:text-[#F05263] mb-3">
                  {v.mono}
                </div>
                <h4 className="text-lg font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
