import React from 'react';
import { Sparkles, ArrowRight, Github } from 'lucide-react';
import Button from '../common/Button';
import GridBackground from '../common/GridBackground';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#101012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#B91F35]/30 dark:border-[#F05263]/30 bg-gradient-to-br from-[#FFF5F5] via-[#FFFFFF] to-[#FCEBED] dark:from-[#171719] dark:via-[#1D1D21] dark:to-[#321D23] p-8 sm:p-14 md:p-16 text-center shadow-xl overflow-hidden">
          
          {/* Subtle Technical Grid in CTA */}
          <div
            aria-hidden="true"
            className="absolute inset-0 technical-grid opacity-30 pointer-events-none"
          />

          {/* Coordinate Marks */}
          <div
            aria-hidden="true"
            className="absolute top-4 left-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 hidden sm:block"
          >
            SYS://JOIN_PROTOCOL.INIT
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-6 text-[10px] font-mono text-[#85838A]/40 dark:text-[#929098]/30 hidden sm:block"
          >
            CLUSTER://RRGI_CAMPUS
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B91F35]/10 dark:bg-[#F05263]/10 border border-[#B91F35]/20 dark:border-[#F05263]/30 text-xs font-mono font-semibold text-[#B91F35] dark:text-[#F05263] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLEGE DEVELOPER COMMUNITY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 leading-tight">
              Your next idea could{' '}
              <span className="text-[#B91F35] dark:text-[#F05263]">
                start here.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#66656B] dark:text-[#B6B4BA] max-w-2xl mx-auto leading-relaxed mb-10">
              Learn something new, contribute to a project, meet fellow builders, and take your next step with HACKLANCE at R.R. Institute of Modern Technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/join"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
              >
                Join the Community
              </Button>

              <Button
                to="/projects"
                variant="secondary"
                size="lg"
              >
                Explore Our Work
              </Button>

              <Button
                href="https://github.com/AshishSinghThakur07/hacklance"
                variant="outline"
                size="lg"
                icon={Github}
              >
                GitHub Repo
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
