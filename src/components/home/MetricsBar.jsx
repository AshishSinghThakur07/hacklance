import React from 'react';
import { Users, Code, Trophy, Terminal } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      label: 'Students & Developers Mentored',
      value: '500+',
      detail: 'Across engineering cohorts at RRGI',
      icon: Users,
    },
    {
      label: 'Technical Workshops & Sprints',
      value: '18+',
      detail: 'Hands-on system design & coding',
      icon: Terminal,
    },
    {
      label: 'Hackathon Prototypes Built',
      value: '48+',
      detail: 'Campus Innovathons & SIH entries',
      icon: Trophy,
    },
    {
      label: 'Open Source Repositories',
      value: '12+',
      detail: 'Student-led community software',
      icon: Code,
    },
  ];

  return (
    <section className="border-b border-[#EAE5E2] dark:border-[#2A2830] bg-[#FAF8F5] dark:bg-[#121216]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col relative group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#FBECEF] dark:bg-[#321D23] flex items-center justify-center text-[#78132B] dark:text-[#F05263]">
                    <Icon className="w-3 h-3" />
                  </span>
                  <span className="text-[10px] font-mono text-[#787680] dark:text-[#929098] tracking-widest uppercase">
                    METRIC 0{index + 1}
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#78132B] dark:text-[#F05263] font-serif-editorial mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#141416] dark:text-[#F6F5F3] mb-1 font-['Manrope']">
                  {item.label}
                </div>
                <div className="text-xs text-[#525059] dark:text-[#B6B4BA] leading-normal font-sans">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

}
