import React, { useState } from 'react';
import { 
  Users, 
  Code2, 
  Trophy, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import confetti from 'canvas-confetti';

export default function JoinPage() {
  const { submitApplication } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'R.R. Institute of Modern Technology (RRGI)',
    rollNumber: '',
    branch: 'CSE',
    year: '2nd Year',
    preferredTrack: 'Open Source Software Contributor',
    skills: '',
    motivation: '',
    github: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tracks = [
    {
      title: 'Open Source Contributor',
      desc: 'Build real campus tools, fix bugs, submit PRs, and maintain club software repositories.',
      icon: Code2,
    },
    {
      title: 'Hackathon Competitor',
      desc: 'Form teams for 36-hour sprint challenges, Smart India Hackathon (SIH), and external contests.',
      icon: Trophy,
    },
    {
      title: 'Technical Writer / Speaker',
      desc: 'Author technical tutorials, conduct beginner masterclasses, and document engineering blueprints.',
      icon: BookOpen,
    },
    {
      title: 'Event Operations & Logistics',
      desc: 'Orchestrate hackathons, sponsor management, stage coordination, and live developer workshops.',
      icon: Users,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.rollNumber.trim()) {
      setError('Please provide your name, email, and college roll number.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      submitApplication(formData);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#B91F35', '#F05263', '#16794B', '#FFFFFF'],
        });
      } catch {
        // Fallback
      }
    } catch (err) {
      setError('Failed to submit application. Please verify details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// MEMBERSHIP & CONTRIBUTION"
          title="Join the Community of"
          highlight="RRGI Builders."
          description="Whether you are writing your first lines of code or architecting distributed systems, HACKLANCE welcomes every ambitious student of R.R. Institute of Modern Technology."
        />

        {/* 4 Participation Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((t, idx) => {
            const Icon = t.icon;
            return (
              <Card
                key={t.title}
                hoverEffect={true}
                showTicks={true}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] text-[#B91F35] dark:text-[#F05263] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#85838A] uppercase tracking-wider block mb-1">
                    PATHWAY // 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Application Form Card */}
        <div className="max-w-3xl mx-auto">
          <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
              Student Membership Application Form
            </h3>
            <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] mb-8 font-mono">
              Membership in HACKLANCE is 100% free. Applications are reviewed on rolling basis by our student council.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold font-['Manrope']">
                  Application Successfully Received!
                </h4>
                <p className="text-xs max-w-md mx-auto leading-relaxed font-mono">
                  Thank you, <strong>{formData.name}</strong>! Your application for <em>{formData.preferredTrack}</em> has been entered into the HACKLANCE council review queue. You will receive an onboarding briefing email soon.
                </p>
                <div className="pt-2">
                  <Button to="/events" variant="primary" size="sm">
                    Explore Hackathons In Meanwhile
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-[#B42332] dark:text-[#FF6675] text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ashish Singh"
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Student Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@rrgi.ac.in"
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      College Roll No *
                    </label>
                    <input
                      type="text"
                      name="rollNumber"
                      required
                      value={formData.rollNumber}
                      onChange={handleChange}
                      placeholder="210143..."
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Branch / Department
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    >
                      <option value="CSE">Computer Science (CSE)</option>
                      <option value="IT">Information Tech (IT)</option>
                      <option value="AI_ML">CSE (AI &amp; ML)</option>
                      <option value="ECE">Electronics (ECE)</option>
                      <option value="ME">Mechanical (ME)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Year of Study
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    >
                      <option value="1st Year">1st Year (Freshman)</option>
                      <option value="2nd Year">2nd Year (Sophomore)</option>
                      <option value="3rd Year">3rd Year (Junior)</option>
                      <option value="4th Year">4th Year (Senior)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Preferred Focus Track *
                  </label>
                  <select
                    name="preferredTrack"
                    value={formData.preferredTrack}
                    onChange={handleChange}
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  >
                    <option value="Open Source Software Contributor">Open Source Software Contributor</option>
                    <option value="Competitive Programming & CP">Competitive Programming &amp; Algorithmic Clashes</option>
                    <option value="Hackathon Team Builder">Hackathon Team Builder (Full-Stack / Systems)</option>
                    <option value="Technical Writing & Masterclasses">Technical Writing &amp; Workshop Speaker</option>
                    <option value="UI/UX & Brand Design">UI/UX &amp; Editorial Design</option>
                    <option value="Event Operations & Logistics">Event Operations &amp; Community Logistics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Key Technical Interests or Stacks
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g. React, C++, Node.js, Python, Figma, Docker"
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Why do you want to join HACKLANCE?
                  </label>
                  <textarea
                    name="motivation"
                    rows={3}
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us what you hope to learn, build, or contribute alongside fellow students..."
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl p-3.5 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    GitHub / LinkedIn URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourhandle"
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>

                <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    iconRight={Send}
                    isLoading={isSubmitting}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>

      </div>
    </div>
  );
}
