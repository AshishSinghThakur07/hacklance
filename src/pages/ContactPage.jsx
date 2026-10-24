import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';

import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function ContactPage() {
  const { submitInquiry } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      submitInquiry(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// COMMUNICATIONS & DISPATCH"
          title="Connect with HACKLANCE &amp;"
          highlight="RRGI Council."
          description="Have questions about hackathons, technical workshops, sponsorships, or campus partnerships? Send us a message or visit our campus hub."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Institutional Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverEffect={false} showTicks={true} className="p-8">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B91F35] dark:text-[#F05263] mb-6">
                // CAMPUS LOCATION &amp; LIAISON
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
                      Campus Address
                    </h4>
                    <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed font-mono">
                      R.R. Institute of Modern Technology (RRGI)<br />
                      NH-24, Bakshi Ka Talab, Sitapur Road,<br />
                      Lucknow, Uttar Pradesh 226201, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
                      Direct Inquiries
                    </h4>
                    <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] font-mono">
                      hacklance@rrgi.ac.in
                    </p>
                    <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] font-mono mt-0.5">
                      president.hacklance@rrgi.ac.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
                      Lab &amp; Office Hours
                    </h4>
                    <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] font-mono">
                      Monday – Saturday: 09:30 AM – 05:00 PM IST
                    </p>
                    <p className="text-xs text-[#85838A] dark:text-[#929098] font-mono mt-0.5">
                      Open during campus hackathon marathons 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                <span className="text-xs font-mono text-[#85838A]">Connect on socials:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AshishSinghThakur07/hacklance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3]"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/school/rrgi-lucknow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} showTicks={true} className="p-8">
              <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
                Send a Dispatch Message
              </h3>
              <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] mb-6 font-mono">
                Responses are reviewed by HACKLANCE student council and faculty coordinators within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-sm space-y-3">
                  <div className="flex items-center gap-2.5 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Message Successfully Delivered!</span>
                  </div>
                  <p className="text-xs opacity-90 leading-relaxed font-mono">
                    Thank you for reaching out to HACKLANCE. Your dispatch has been recorded and routed to the appropriate council lead.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-[#B42332] dark:text-[#FF6675] text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ashish Singh"
                        className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="developer@rrgi.ac.in"
                        className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Hackathon Registration">Hackathon &amp; Events</option>
                      <option value="Project Collaboration">Open Source Project Collaboration</option>
                      <option value="Industry Partnership">Industry &amp; Corporate Sponsorship</option>
                      <option value="Certificate Verification">Certificate Verification</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your inquiry, project proposal, or question in detail..."
                      className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl p-3.5 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      iconRight={Send}
                      isLoading={isSubmitting}
                    >
                      Submit Dispatch
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
