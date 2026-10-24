import React from 'react';
import { Sparkles, ShieldCheck, Mail, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function SponsorsPage() {
  const tiers = [
    {
      name: 'Title & Flagship Partner',
      badge: 'Tier 1 // Keynote',
      desc: 'Exclusive naming rights for campus flagship hackathon, prime keynote address, dedicated problem track, and early access to top student engineering talent.',
      benefits: [
        'Dedicated hackathon track & API prize pool',
        'Direct resume book access of 300+ participants',
        'Keynote speech during opening ceremony',
        'Custom sponsor booth in main auditorium',
        'Co-branded digital certificates & social dispatch',
      ],
      highlight: true,
    },
    {
      name: 'Track & Workshop Partner',
      badge: 'Tier 2 // Track',
      desc: 'Sponsor a specialized domain (e.g. AI Systems, Cloud Infrastructure, or Web3 Tools) with proprietary tooling, APIs, and hands-on developer mentor sessions.',
      benefits: [
        'Domain-specific hackathon track prize',
        'Conduct a 90-minute technical masterclass',
        'Access to participating student GitHub projects',
        'Brand placement across platform & banners',
      ],
      highlight: false,
    },
    {
      name: 'Developer Tooling & Cloud Partner',
      badge: 'Tier 3 // Tooling',
      desc: 'Empower student hackers by granting cloud hosting credits, software licenses, API keys, or specialized hardware development kits.',
      benefits: [
        'Product adoption by 500+ active student builders',
        'Direct developer feedback and bug bounty discovery',
        'Logo placement on project directories',
        'Official attribution in hackathon documentation',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// COLLABORATION & INDUSTRY ECOSYSTEM"
          title="Partner With"
          highlight="HACKLANCE."
          description="Connect your organization directly with ambitious student engineers, computer science researchers, and hackathon competitors at R.R. Institute of Modern Technology."
        />

        {/* Verified Transparency Statement */}
        <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#171719] border border-[#E9E5E4] dark:border-[#343238] mb-16 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
          <div className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed font-mono">
            <strong>Authentic Partnership Policy:</strong> HACKLANCE lists only verified, confirmed institutional and corporate sponsors. If your engineering team or organization is interested in supporting upcoming hackathons and student developer cohorts, we invite you to review our prospectus below.
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              hoverEffect={true}
              showTicks={true}
              className={`p-8 flex flex-col justify-between ${
                tier.highlight
                  ? 'border-[#B91F35]/50 dark:border-[#F05263]/50 shadow-md ring-1 ring-[#B91F35]/20'
                  : ''
              }`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#B91F35] dark:text-[#F05263] block mb-2">
                  {tier.badge}
                </span>

                <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
                  {tier.name}
                </h3>

                <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] space-y-2.5 mb-8">
                  <span className="text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] block mb-3">
                    Partner Benefits:
                  </span>
                  {tier.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#66656B] dark:text-[#B6B4BA]">
                      <CheckCircle2 className="w-4 h-4 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  to="/contact"
                  variant={tier.highlight ? 'primary' : 'secondary'}
                  size="sm"
                  className="w-full justify-center"
                >
                  Request Prospectus
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Contact */}
        <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12 text-center bg-[#FAF9F6] dark:bg-[#171719]">
          <HeartHandshake className="w-10 h-10 text-[#B91F35] dark:text-[#F05263] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
            Interested in Custom Collaboration?
          </h3>
          <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-xl mx-auto mb-6 leading-relaxed">
            Reach out to our partnership committee at <strong className="text-[#171719] dark:text-[#F6F5F3]">hacklance@rrgi.ac.in</strong> for customized event tracks, recruiting jams, or technical talks.
          </p>
          <Button to="/contact" variant="primary" size="md" iconRight={ArrowRight}>
            Connect with Sponsorship Liaison &rarr;
          </Button>
        </Card>

      </div>
    </div>
  );
}
