import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Calendar, Code2, Users } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono font-bold text-[#B91F35] dark:text-[#F05263] tracking-widest uppercase mb-2">
          ERROR // 404_PAGE_NOT_FOUND
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4">
          Route Terminated.
        </h1>

        <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-md mx-auto mb-8 font-mono leading-relaxed">
          The requested path does not exist on the HACKLANCE network cluster. It may have moved or been decommissioned.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Return Home
          </Button>
          <Button to="/events" variant="secondary" size="md" icon={Calendar}>
            Explore Events
          </Button>
          <Button to="/projects" variant="secondary" size="md" icon={Code2}>
            View Projects
          </Button>
        </div>

        <Card hoverEffect={false} showTicks={true} className="p-6 text-left max-w-md mx-auto bg-[#FAF9F6] dark:bg-[#171719]">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#85838A] block mb-2 font-bold">
            // QUICK SYSTEM TELEMETRY
          </span>
          <div className="space-y-1 text-xs font-mono text-[#66656B] dark:text-[#B6B4BA]">
            <div>Cluster: HACKLANCE-NODE-01</div>
            <div>Institution: RRGI Lucknow (26.84° N, 80.94° E)</div>
            <div>Status: Operational</div>
          </div>
        </Card>

      </div>
    </div>
  );
}
