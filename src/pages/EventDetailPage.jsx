import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft, 
  Trophy, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle,
  Share2,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import EventRegistrationModal from '../components/forms/EventRegistrationModal';
import { formatDate } from '../utils/helpers';

export default function EventDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { events } = useData();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4">
          Event Not Found
        </h1>
        <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] mb-8 font-mono">
          The requested event slug <code className="text-[#B91F35] font-bold">/events/{slug}</code> does not exist or has been archived.
        </p>
        <Button to="/events" variant="primary" size="md" icon={ArrowLeft}>
          Back to Events Directory
        </Button>
      </div>
    );
  }

  const isPast = event.status === 'past';
  const capacityPercent = event.capacity
    ? Math.round((event.registeredCount / event.capacity) * 100)
    : 0;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E9E5E4] dark:border-[#343238] text-xs font-mono text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Brief'}</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant={isPast ? 'neutral' : 'crimson'} size="sm" hasDot={!isPast}>
                {event.category}
              </Badge>
              <span className="text-xs font-mono text-[#85838A] dark:text-[#929098]">
                // {event.badge || 'Official Club Event'} &bull; {event.mode}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 leading-tight">
              {event.title}
            </h1>

            <p className="text-base sm:text-lg text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
              {event.fullDescription || event.shortDescription}
            </p>
          </div>

          {/* Quick Info & Register CTA Card (4 cols) */}
          <div className="lg:col-span-4">
            <Card hoverEffect={false} showTicks={true} className="p-6 bg-[#FAF9F6] dark:bg-[#171719]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B91F35] dark:text-[#F05263] mb-4">
                // LOGISTICS & BRIEF
              </h3>

              <div className="space-y-3.5 text-xs font-mono mb-6">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#85838A] block">Date</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {formatDate(event.date)}
                      {event.endDate && event.endDate !== event.date && ` – ${formatDate(event.endDate)}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#85838A] block">Timing</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B91F35] dark:text-[#F05263] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#85838A] block">Venue</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {event.venue}
                    </span>
                  </div>
                </div>

                {event.registrationDeadline && (
                  <div className="pt-2 border-t border-[#E9E5E4] dark:border-[#343238]">
                    <span className="text-[#85838A] block">Registration Deadline:</span>
                    <span className="text-[#B91F35] dark:text-[#F05263] font-semibold">
                      {formatDate(event.registrationDeadline)}
                    </span>
                  </div>
                )}
              </div>

              {event.capacity && (
                <div className="mb-6 pt-3 border-t border-[#E9E5E4] dark:border-[#343238]">
                  <div className="flex justify-between text-xs font-mono mb-1 text-[#85838A]">
                    <span>Capacity Status</span>
                    <span>{event.registeredCount} / {event.capacity} Registered</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#E9E5E4] dark:bg-[#343238] overflow-hidden">
                    <div
                      className="h-full bg-[#B91F35] dark:bg-[#F05263] rounded-full"
                      style={{ width: `${Math.min(capacityPercent, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {!isPast ? (
                <Button
                  onClick={() => setIsRegisterOpen(true)}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Register Free
                </Button>
              ) : (
                <div className="p-3 text-center rounded-xl bg-[#F1EFED] dark:bg-[#242429] text-xs font-mono text-[#85838A]">
                  Event Completed
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Tracks Section (if available) */}
        {event.tracks && event.tracks.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
              <span>Problem Tracks &amp; Focus Domains</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.tracks.map((t, i) => (
                <Card key={t.name} hoverEffect={true} showTicks={true} className="p-6">
                  <span className="text-[10px] font-mono font-bold text-[#B91F35] dark:text-[#F05263] block mb-2">
                    TRACK 0{i + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-2">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    {t.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Schedule & Rules Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Schedule */}
          {event.schedule && event.schedule.length > 0 && (
            <Card hoverEffect={false} showTicks={true} className="p-7">
              <h3 className="text-lg font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
                <span>Sprint Schedule</span>
              </h3>

              <div className="space-y-4">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-xs font-mono">
                    <span className="font-semibold text-[#B91F35] dark:text-[#F05263] min-w-[120px] shrink-0">
                      {item.time}
                    </span>
                    <span className="text-[#171719] dark:text-[#F6F5F3]">
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Rules */}
          {event.rules && event.rules.length > 0 && (
            <Card hoverEffect={false} showTicks={true} className="p-7">
              <h3 className="text-lg font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
                <span>Rules &amp; Code of Conduct</span>
              </h3>

              <ul className="space-y-3 text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B91F35] dark:bg-[#F05263] shrink-0 mt-1.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        {/* Prizes Section (if any) */}
        {event.prizes && event.prizes.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Bounties &amp; Awards</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {event.prizes.map((p) => (
                <div
                  key={p.place}
                  className="p-5 rounded-2xl bg-[#FFF5F5] dark:bg-[#1D1D21] border border-[#B91F35]/20 dark:border-[#343238]"
                >
                  <span className="text-xs font-mono font-bold text-[#B91F35] dark:text-[#F05263] block mb-1">
                    {p.place}
                  </span>
                  <div className="text-sm font-semibold text-[#171719] dark:text-[#F6F5F3]">
                    {p.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event FAQ */}
        {event.faqs && event.faqs.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-4">
              {event.faqs.map((faq, idx) => (
                <Card key={idx} hoverEffect={false} className="p-5">
                  <h4 className="text-sm font-bold text-[#171719] dark:text-[#F6F5F3] mb-2 font-['Manrope']">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Registration Modal Dialog */}
      <EventRegistrationModal
        event={event}
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
