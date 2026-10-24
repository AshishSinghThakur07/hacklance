import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  Award, 
  Calendar, 
  School, 
  Printer, 
  QrCode,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { formatDate } from '../utils/helpers';

export default function CertificatesPage() {
  const { verifyCertificate } = useData();
  const [certId, setCertId] = useState('HCK-2025-0101');
  const [searchedCert, setSearchedCert] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;
    const res = verifyCertificate(certId.trim());
    setSearchedCert(res);
    setHasSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// TRUST & CREDENTIALS"
          title="Verifiable Student"
          highlight="Certificates &amp; Credentials."
          description="Every official distinction, hackathon win, and workshop completion issued by HACKLANCE carries a verifiable cryptographic record."
        />

        {/* Search verification form */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card hoverEffect={false} showTicks={true} className="p-6 sm:p-8 bg-[#FAF9F6] dark:bg-[#171719]">
            <form onSubmit={handleVerify} className="space-y-4">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#171719] dark:text-[#F6F5F3]">
                Enter Certificate Verification Identifier
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#85838A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g. HCK-2025-0101"
                    className="w-full bg-[#FFFFFF] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl pl-9 pr-3.5 py-2.5 text-sm font-mono text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35] uppercase"
                  />
                </div>

                <Button type="submit" variant="primary" size="md">
                  Verify Record
                </Button>
              </div>

              {/* Sample Quick Test Identifiers */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#85838A]">
                <span>Try sample IDs:</span>
                <button
                  type="button"
                  onClick={() => {
                    setCertId('HCK-2025-0101');
                    setSearchedCert(verifyCertificate('HCK-2025-0101'));
                    setHasSearched(true);
                  }}
                  className="underline hover:text-[#B91F35] dark:hover:text-[#F05263] cursor-pointer"
                >
                  HCK-2025-0101
                </button>
                <span>&bull;</span>
                <button
                  type="button"
                  onClick={() => {
                    setCertId('HCK-2025-0102');
                    setSearchedCert(verifyCertificate('HCK-2025-0102'));
                    setHasSearched(true);
                  }}
                  className="underline hover:text-[#B91F35] dark:hover:text-[#F05263] cursor-pointer"
                >
                  HCK-2025-0102
                </button>
                <span>&bull;</span>
                <button
                  type="button"
                  onClick={() => {
                    setCertId('HCK-2025-0103');
                    setSearchedCert(verifyCertificate('HCK-2025-0103'));
                    setHasSearched(true);
                  }}
                  className="underline hover:text-[#B91F35] dark:hover:text-[#F05263] cursor-pointer"
                >
                  HCK-2025-0103
                </button>
              </div>
            </form>
          </Card>
        </div>

        {/* Verification Result Display */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto mb-16 animate-fadeIn">
            {searchedCert ? (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>AUTHENTIC CREDENTIAL VERIFIED &bull; INSTITUTION: RRGI LUCKNOW</span>
                  </div>
                  <Button onClick={handlePrint} variant="secondary" size="sm" icon={Printer}>
                    Print Certificate
                  </Button>
                </div>

                {/* Printable Certificate Frame */}
                <div className="relative rounded-3xl border-4 border-[#B91F35]/30 dark:border-[#F05263]/30 bg-gradient-to-b from-[#FFF5F5] via-[#FFFFFF] to-[#FAF9F6] dark:from-[#171719] dark:via-[#1D1D21] dark:to-[#171719] p-8 sm:p-14 text-center shadow-2xl overflow-hidden print:border-black print:bg-white print:text-black">
                  {/* Subtle Grid in certificate */}
                  <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="text-xs font-mono tracking-widest uppercase text-[#B91F35] dark:text-[#F05263] font-bold mb-2">
                      R.R. INSTITUTE OF MODERN TECHNOLOGY &bull; HACKLANCE
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2 print:text-black">
                      Certificate of Distinction
                    </h2>
                    <div className="text-xs font-mono text-[#85838A] mb-8">
                      Credential ID: {searchedCert.id}
                    </div>

                    <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] mb-2 font-mono">
                      This is to certify that
                    </p>

                    <div className="text-3xl sm:text-4xl font-extrabold text-[#B91F35] dark:text-[#F05263] font-['Manrope'] mb-2 print:text-red-700">
                      {searchedCert.recipientName}
                    </div>

                    <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-xl mx-auto leading-relaxed mb-6">
                      has successfully demonstrated outstanding merit and technical achievement in{' '}
                      <strong className="text-[#171719] dark:text-[#F6F5F3] print:text-black">
                        {searchedCert.eventName}
                      </strong>{' '}
                      as{' '}
                      <strong className="text-[#171719] dark:text-[#F6F5F3] print:text-black">
                        {searchedCert.category}
                      </strong>
                      .
                    </p>

                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#FAF9F6] dark:bg-[#1A1A1E] border border-[#E9E5E4] dark:border-[#343238] text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-8 print:text-black">
                      Distinction: {searchedCert.grade}
                    </div>

                    {searchedCert.skills && (
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {searchedCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#242429] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-8 border-t border-[#E9E5E4] dark:border-[#343238] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#85838A] print:text-black">
                      <div className="text-left">
                        <div>Issue Date: {formatDate(searchedCert.issueDate)}</div>
                        <div>Institution: RRGI Lucknow</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <QrCode className="w-10 h-10 text-[#171719] dark:text-[#F6F5F3] print:text-black" />
                        <div className="text-left text-[10px]">
                          <div className="font-bold text-[#16794B] dark:text-[#50C58B]">
                            CRYPTOGRAPHICALLY VERIFIED
                          </div>
                          <div>HACKLANCE REGISTRY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 text-center text-[#B42332] dark:text-[#FF6675]">
                <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-base font-bold font-['Manrope'] mb-1">
                  Credential ID Not Found
                </h3>
                <p className="text-xs font-mono max-w-md mx-auto">
                  No certificate record exists matching identifier &quot;{certId}&quot;. Please ensure you have entered the exact ID without spaces.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
