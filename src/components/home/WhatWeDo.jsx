import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  GitPullRequest, 
  Binary, 
  BookOpen, 
  Users2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function WhatWeDo() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Flagship Hackathons',
      description:
        'Intensive 24-to-36-hour sprint challenges where cross-disciplinary student teams build, test, and ship functional software and hardware solutions.',
      link: '/events',
      tag: '01 // SPRINT',
    },
    {
      icon: GitPullRequest,
      title: 'Collaborative Open Source',
      description:
        'Student-maintained developer tools, campus scheduling platforms, and distributed systems. Learn Git workflows and merge real pull requests.',
      link: '/projects',
      tag: '02 // SHIP',
    },
    {
      icon: Binary,
      title: 'Competitive Programming',
      description:
        'Weekly algorithmic clashes and contest arenas designed to sharpen data structure mastery, time complexity intuition, and problem-solving.',
      link: '/contests',
      tag: '03 // COMPETE',
    },
    {
      icon: BookOpen,
      title: 'Deep-Dive Workshops',
      description:
        'Hands-on technical masterclasses covering system design, cloud containerization, modern JavaScript/React, and autonomous AI agents.',
      link: '/resources',
      tag: '04 // LEARN',
    },
    {
      icon: Users2,
      title: 'Peer Mentorship & Guilds',
      description:
        'Connecting ambitious freshmen and sophomores with senior engineers and alumni for code reviews, resume audits, and technical interview prep.',
      link: '/about',
      tag: '05 // GROW',
    },
    {
      icon: Sparkles,
      title: 'Verifiable Credentials',
      description:
        'Earn tamper-proof, cryptographic certificates for event participation, workshop completions, and contest distinctions verified on-chain and in-browser.',
      link: '/certificates',
      tag: '06 // VERIFY',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#101012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 01. COMMUNITY PILLARS"
          title="Engineered for Builders."
          highlight="What We Do."
          description="HACKLANCE bridges academic computer science with real-world engineering through continuous experimentation, competition, and hands-on collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                hoverEffect={true}
                showTicks={true}
                className="p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] border border-[#B91F35]/20 dark:border-[#F05263]/30 flex items-center justify-center text-[#B91F35] dark:text-[#F05263] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-xs text-[#85838A] dark:text-[#929098]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 group-hover:text-[#B91F35] dark:group-hover:text-[#F05263] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#B91F35] dark:text-[#F05263] hover:underline"
                >
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
