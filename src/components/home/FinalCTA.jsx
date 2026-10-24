import { Sparkles, ArrowRight } from 'lucide-react';
import { Github } from '../common/Icons';

import Button from '../common/Button';
import GridBackground from '../common/GridBackground';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF8F5] dark:bg-[#0F0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#EAE5E2] dark:border-[#2A2830] bg-white dark:bg-[#141418] p-8 sm:p-14 md:p-16 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBECEF] dark:bg-[#321D23] border border-[#78132B]/15 dark:border-[#F05263]/25 text-xs font-mono font-semibold text-[#78132B] dark:text-[#F05263] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLEGE DEVELOPER COMMUNITY</span>
            </div>

            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#141416] dark:text-[#F6F5F3] mb-6 leading-[1.12]">
              Your next idea could{' '}
              <span className="text-[#78132B] dark:text-[#F05263]">
                start here.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#525059] dark:text-[#B6B4BA] max-w-2xl mx-auto leading-relaxed mb-10">
              Learn something new, contribute to a project, meet fellow builders, and take your next step with HACKLANCE at R.R. Institute of Modern Technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/join"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
              >
                Join HACKLANCE
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
