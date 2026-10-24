import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Ticket, 
  QrCode, 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  School, 
  Award,
  Sparkles,
  Printer
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { formatDate } from '../../utils/helpers';
import confetti from 'canvas-confetti';

export default function EventRegistrationModal({ event, isOpen, onClose }) {
  const { registerForEvent } = useData();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: 'R.R. Institute of Modern Technology (RRGI)',
    rollNumber: '',
    branch: 'CSE',
    year: '3rd Year',
    teamName: '',
    teamSize: '1',
    skills: '',
    githubProfile: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);

  if (!isOpen || !event) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full legal name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid student or developer email address.');
      return;
    }
    if (!formData.rollNumber.trim()) {
      setError('Student Roll Number / College ID is required for verification.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const ticket = registerForEvent(event.id, formData);
      setSuccessTicket(ticket);
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B91F35', '#F05263', '#16794B', '#FFFFFF'],
        });
      } catch {
        // Safe fallback
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please verify your details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101012]/75 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#FFFFFF] dark:bg-[#171719] border border-[#E9E5E4] dark:border-[#343238] shadow-2xl overflow-hidden my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#1D1D21]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B91F35] dark:bg-[#F05263]" />
            <h2 id="modal-title" className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
              {successTicket ? 'Confirmed Digital Ticket' : `Event Registration — ${event.title}`}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close registration dialog"
            className="p-1.5 rounded-lg hover:bg-[#F1EFED] dark:hover:bg-[#242429] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {successTicket ? (
            /* Digital Ticket View */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold">Registration Successfully Confirmed!</p>
                  <p className="text-xs opacity-90">
                    Your digital pass has been issued. Save your verification ID below for event check-in at RRGI.
                  </p>
                </div>
              </div>

              {/* Physical Pass Style Card */}
              <div className="rounded-2xl border-2 border-dashed border-[#B91F35]/40 dark:border-[#F05263]/40 bg-[#FAF9F6] dark:bg-[#1D1D21] p-6 relative overflow-hidden print:border-black">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E9E5E4] dark:border-[#343238] pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#B91F35] dark:text-[#F05263] font-bold block mb-1">
                      HACKLANCE OFFICIAL PASS // RRGI
                    </span>
                    <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                      {successTicket.eventTitle}
                    </h3>
                  </div>
                  <Badge variant="crimson" size="sm" hasDot={true}>
                    STATUS: CONFIRMED
                  </Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono mb-6">
                  <div>
                    <span className="text-[#85838A] block">Ticket Ref:</span>
                    <span className="font-bold text-[#B91F35] dark:text-[#F05263] text-sm">
                      {successTicket.ticketId}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85838A] block">Participant:</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {successTicket.fullName}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85838A] block">College ID:</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {successTicket.rollNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85838A] block">Date:</span>
                    <span className="text-[#171719] dark:text-[#F6F5F3]">
                      {formatDate(successTicket.eventDate)}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#85838A] block">Venue:</span>
                    <span className="text-[#171719] dark:text-[#F6F5F3] truncate block">
                      {successTicket.eventVenue}
                    </span>
                  </div>
                </div>

                {/* Simulated Barcode / QR Section */}
                <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#85838A]">
                    <QrCode className="w-8 h-8 text-[#171719] dark:text-[#F6F5F3]" />
                    <div className="text-[10px]">
                      <div>SECURE CHECKIN HASH</div>
                      <div className="font-bold text-[#171719] dark:text-[#F6F5F3]">
                        {successTicket.id}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handlePrint}
                    variant="secondary"
                    size="sm"
                    icon={Printer}
                  >
                    Print Pass
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={onClose} variant="primary" size="md">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 text-[#B42332] dark:text-[#FF6675] text-xs font-mono flex items-center gap-2">
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
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ashish Singh"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    College / Roll Number *
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    required
                    value={formData.rollNumber}
                    onChange={handleChange}
                    placeholder="e.g. 2101430100042"
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Branch / Dept
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
                    <option value="OTHER">Other Department</option>
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
                    <option value="Alumni / External">External Participant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Team Size
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  >
                    <option value="1">Individual (1)</option>
                    <option value="2">Team of 2</option>
                    <option value="3">Team of 3</option>
                    <option value="4">Team of 4</option>
                  </select>
                </div>
              </div>

              {formData.teamSize !== '1' && (
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                    Team Name
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. ByteBrigade"
                    className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono font-semibold text-[#171719] dark:text-[#F6F5F3] mb-1">
                  GitHub Profile / Portfolio Link
                </label>
                <input
                  type="url"
                  name="githubProfile"
                  value={formData.githubProfile}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl px-3.5 py-2 text-sm text-[#171719] dark:text-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
                />
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between gap-4">
                <div className="text-xs text-[#85838A] dark:text-[#929098]">
                  Admission is 100% Free for students.
                </div>
                <div className="flex gap-2">
                  <Button onClick={onClose} variant="ghost" size="md">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                  >
                    Confirm Registration
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
