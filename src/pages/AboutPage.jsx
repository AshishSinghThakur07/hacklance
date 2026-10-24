import React from 'react';
import { 
  Shield, 
  Target, 
  Compass, 
  Award, 
  Users, 
  MapPin, 
  Terminal, 
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import GridBackground from '../components/common/GridBackground';

export default function AboutPage() {
  const milestones = [
    {
      year: '2024',
      title: 'Foundation of HACKLANCE',
      desc: 'Formed by computer science and engineering students at R.R. Institute of Modern Technology to establish a permanent student developer hub.',
    },
    {
      year: '2025',
      title: 'Inaugural RRGI Innovathon',
      desc: 'Hosted the largest 24-hour campus hackathon with 48 prototyping teams building hardware and software solutions.',
    },
    {
      year: '2025–2026',
      title: 'National SIH Finalists',
      desc: 'Club teams qualified for national rounds in Smart India Hackathon representing RRGI in civic infrastructure software.',
    },
    {
      year: '2026',
      title: 'Digital Platform & Open Labs',
      desc: 'Launched the unified HACKLANCE digital platform with real-time registrations, contest arenas, and cryptographic verification.',
    },
  ];

  return (
    <div className="py-12 md:py-20">
      {/* Header Section */}
      <section className="mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="// ABOUT HACKLANCE"
            title="The Technical Society of"
            highlight="RRGI Lucknow."
            description="Fostering engineering discipline, collaborative open source, and hackathon excellence for modern developers and aspiring builders."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-base text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
              <p className="text-lg font-medium text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                HACKLANCE is the student-led technical society and innovation community of{' '}
                <strong className="text-[#B91F35] dark:text-[#F05263]">
                  R.R. Institute of Modern Technology (RRGI)
                </strong>
                , Lucknow.
              </p>
              <p>
                Founded on the belief that software engineering is mastered through action, we create an environment where classroom theory is transformed into production-ready software. We provide the infrastructure, mentorship, and peer collaboration needed for students to design distributed systems, build AI workflows, and compete at the national level.
              </p>
              <p>
                Our members are regular contributors to open-source software, hackathon winners, competitive programmers, and designers who believe in clean code, atomic Git discipline, and editorial craftsmanship.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button to="/join" variant="primary" size="md">
                  Join Our Community
                </Button>
                <Button to="/team" variant="secondary" size="md">
                  Meet the Team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card hoverEffect={false} showTicks={true} className="p-8 bg-[#FAF9F6] dark:bg-[#171719]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B91F35] dark:text-[#F05263] mb-6">
                  // INSTITUTIONAL DOSSIER
                </h3>

                <dl className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between pb-3 border-b border-[#E9E5E4] dark:border-[#343238]">
                    <dt className="text-[#85838A] dark:text-[#929098]">Institution:</dt>
                    <dd className="font-semibold text-[#171719] dark:text-[#F6F5F3] text-right">
                      R.R. Institute of Modern Technology
                    </dd>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#E9E5E4] dark:border-[#343238]">
                    <dt className="text-[#85838A] dark:text-[#929098]">Location:</dt>
                    <dd className="font-semibold text-[#171719] dark:text-[#F6F5F3] text-right">
                      Sitapur Road, Lucknow, UP
                    </dd>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#E9E5E4] dark:border-[#343238]">
                    <dt className="text-[#85838A] dark:text-[#929098]">Established:</dt>
                    <dd className="font-semibold text-[#171719] dark:text-[#F6F5F3]">2024</dd>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#E9E5E4] dark:border-[#343238]">
                    <dt className="text-[#85838A] dark:text-[#929098]">Focus Areas:</dt>
                    <dd className="font-semibold text-[#171719] dark:text-[#F6F5F3] text-right">
                      Systems, AI, Web, DevOps, CP
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#85838A] dark:text-[#929098]">Access Policy:</dt>
                    <dd className="font-semibold text-emerald-600 dark:text-emerald-400">
                      100% Free &amp; Open
                    </dd>
                  </div>
                </dl>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Pillars */}
      <section className="py-16 bg-[#FAF9F6] dark:bg-[#141417] border-y border-[#E9E5E4] dark:border-[#343238] mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverEffect={true} showTicks={true} className="p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                To equip engineering students with pragmatic engineering fluency, architectural discipline, and open-source collaboration skills to solve critical real-world challenges.
              </p>
            </Card>

            <Card hoverEffect={true} showTicks={true} className="p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                To build RRGI into a prominent hub of student innovation in North India, producing developers who build impactful software and set technological benchmarks.
              </p>
            </Card>

            <Card hoverEffect={true} showTicks={true} className="p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
                Our Code of Honor
              </h3>
              <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                Zero tolerance for plagiarism, complete transparency in competitive leaderboards, respect for peer diversity, and relentless technical curiosity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          tag="// HISTORICAL PROGRESSION"
          title="Milestones in Our"
          highlight="Journey."
          description="A verifiable record of our growth from a small student initiative into a campus-wide technical force."
        />

        <div className="relative pl-6 md:pl-10 border-l border-[#B91F35]/30 dark:border-[#F05263]/30 space-y-10 mt-12">
          {milestones.map((m) => (
            <div key={m.year + m.title} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#B91F35] dark:bg-[#F05263] border-4 border-[#FAF9F6] dark:border-[#101012] group-hover:scale-125 transition-transform" />

              <span className="text-xs font-mono font-bold text-[#B91F35] dark:text-[#F05263] uppercase tracking-wider block mb-1">
                {m.year}
              </span>
              <h4 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
                {m.title}
              </h4>
              <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-2xl leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
