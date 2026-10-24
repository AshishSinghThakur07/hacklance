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
    <section className="border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#141417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col relative group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#B91F35] dark:text-[#F05263]" />
                  <span className="text-[11px] font-mono text-[#85838A] dark:text-[#929098] tracking-widest uppercase">
                    METRIC 0{index + 1}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-normal">
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
