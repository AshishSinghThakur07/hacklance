import React from 'react';
import { Trophy, Award, CheckCircle2, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function AchievementsPage() {
  const { achievements } = useData();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// TRACK RECORD & HONORS"
          title="Verified Community"
          highlight="Achievements &amp; Impact."
          description="A verifiable record of hackathon victories, national competition qualifications, and community milestones achieved by RRGI student developers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((ach) => (
            <Card
              key={ach.id}
              hoverEffect={true}
              showTicks={true}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="crimson" size="sm">
                    {ach.category}
                  </Badge>
                  <span className="text-xs font-mono text-[#85838A] dark:text-[#929098]">
                    {ach.year}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-amber-600 dark:text-amber-400 shrink-0">
                    <Trophy className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
                      {ach.title}
                    </h3>
                    <div className="inline-block text-xs font-mono font-bold text-[#B91F35] dark:text-[#F05263]">
                      Metric: {ach.metric}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between text-xs font-mono text-[#85838A]">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Club Milestone</span>
                </div>
                <span>RRGI LUCKNOW</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Verification transparency banner */}
        <div className="p-6 rounded-2xl bg-[#FCEBED] dark:bg-[#321D23] border border-[#B91F35]/20 dark:border-[#F05263]/30 text-xs font-mono text-[#B91F35] dark:text-[#F05263] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>All club awards and statistics are verified against official event records and institutional records.</span>
          </div>
          <Button to="/certificates" variant="outline" size="sm">
            Verify Certificates &rarr;
          </Button>
        </div>

      </div>
    </div>
  );
}
