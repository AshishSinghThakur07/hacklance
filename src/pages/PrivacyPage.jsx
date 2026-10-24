import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// LEGAL PROTOCOLS"
          title="Privacy Policy &amp;"
          highlight="Data Governance."
          description="Transparent, developer-first data policies for HACKLANCE and R.R. Institute of Modern Technology."
        />

        <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12 space-y-8 text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
          <div>
            <div className="text-xs font-mono text-[#85838A] mb-2">Effective Date: October 2026 &bull; Version 2.6</div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              1. Our Data Ethics &amp; Philosophy
            </h3>
            <p>
              HACKLANCE is a student technical society operating at R.R. Institute of Modern Technology (RRGI). We believe in privacy by design. We do not sell, rent, monetize, or broker personal student information to advertisers or external commercial third parties.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              2. Information We Collect
            </h3>
            <p className="mb-3">We collect only the minimum data required to facilitate educational programs, hackathons, and certifications:</p>
            <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
              <li><strong>Event Registrations:</strong> Name, student email, phone number, college roll number, branch, year of study, and optional team details.</li>
              <li><strong>Membership Applications:</strong> Skill proficiencies, preferred technical track, and portfolio links (e.g. GitHub).</li>
              <li><strong>Inquiry Dispatches:</strong> Contact form communications sent to council leads.</li>
              <li><strong>Offline Browser Cache:</strong> LocalStorage keys used solely for theme preferences and client-side offline ticket storage.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              3. Purpose &amp; Usage of Data
            </h3>
            <p>Collected data is used strictly for:</p>
            <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs mt-2">
              <li>Verifying student eligibility for on-campus entry at RRGI during hackathons.</li>
              <li>Issuing verifiable digital passes and cryptographic certificates of distinction.</li>
              <li>Sending important logistical announcements regarding sprint schedules and venue access.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              4. Cookies and Tracking
            </h3>
            <p>
              This website does NOT use third-party advertising cookies, cross-site tracking pixels, or invasive behavioral profiling. We use standard browser storage for UI theme toggles (dark/light mode) and local verification tickets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              5. Contact for Privacy Matters
            </h3>
            <p>
              If you have any questions or wish to request data deletion, contact our lead council at{' '}
              <strong className="text-[#B91F35] dark:text-[#F05263] font-mono">hacklance@rrgi.ac.in</strong>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
