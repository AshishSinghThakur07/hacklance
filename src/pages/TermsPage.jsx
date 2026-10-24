import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// TERMS & CONDUCT"
          title="Terms of Use &amp;"
          highlight="Community Code of Conduct."
          description="Guidelines governing participation in HACKLANCE hackathons, software collaboration, and campus events."
        />

        <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12 space-y-8 text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
          <div>
            <div className="text-xs font-mono text-[#85838A] mb-2">Effective: Academic Session 2024–2026</div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              1. Intellectual Property Ownership
            </h3>
            <p>
              <strong>You own what you build:</strong> All code, designs, and intellectual property developed by participants during HACKLANCE hackathons and sprint workshops remain 100% the property of the participating students and teams. Neither HACKLANCE nor RRGI claims ownership of student project source code.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              2. Community Code of Conduct
            </h3>
            <p className="mb-2">
              HACKLANCE is dedicated to providing a harassment-free and empowering experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, race, or religion.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-mono text-xs">
              <li>Harassment, discriminatory remarks, or personal intimidation in physical workshops or online forums will result in immediate disqualification and campus disciplinary escalation.</li>
              <li>Plagiarism of code, uncredited copying of proprietary code, or misrepresenting existing commercial products as new hackathon entries is strictly prohibited.</li>
              <li>Respect the campus physical infrastructure, labs, and equipment of R.R. Institute of Modern Technology.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              3. Event Participation &amp; Registration
            </h3>
            <p>
              By submitting an event registration, you agree to attend on time and adhere to event rules. Submission of fraudulent college IDs or false personal information may result in forfeiture of certificates and prizes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              4. Open-Source Contributions
            </h3>
            <p>
              Contributions to HACKLANCE public GitHub repositories are governed by the MIT License or specified repository license. By submitting a pull request, you affirm that the contribution is your original work.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
              5. Contact &amp; Governance
            </h3>
            <p>
              For grievances or rule clarifications, contact the lead organizer via email at{' '}
              <strong className="text-[#B91F35] dark:text-[#F05263] font-mono">hacklance@rrgi.ac.in</strong>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
