import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowUpRight, Clock } from 'lucide-react';
import { useData } from '../../context/DataContext';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { formatDate } from '../../utils/helpers';

export default function FeaturedEvents() {
  const { events } = useData();

  // Filter upcoming events, take top 3
  const upcomingEvents = events
    .filter((e) => e.status === 'upcoming')
    .slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#141417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="// 02. GATHERINGS & SPRINT DAYS"
            title="Active & Upcoming"
            highlight="Hackathons."
            description="Join our competitive hackathons, hands-on masterclasses, and coding sprints organized right on campus at RRGI."
            className="mb-0"
          />

          <Button
            to="/events"
            variant="secondary"
            size="md"
            iconRight={ArrowUpRight}
            className="self-start md:self-auto shrink-0"
          >
            All Events &amp; Archives
          </Button>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-[#E9E5E4] dark:border-[#343238]">
            <p className="text-sm font-mono text-[#85838A]">No active upcoming events at this moment. Stay tuned!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const capacityPercent = event.capacity
                ? Math.round((event.registeredCount / event.capacity) * 100)
                : 0;

              return (
                <Card
                  key={event.id}
                  hoverEffect={true}
                  showTicks={true}
                  className="p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Status & Category Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="crimson" size="sm" hasDot={true}>
                        {event.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-[#85838A] dark:text-[#929098]">
                        {event.mode}
                      </span>
                    </div>

                    {/* Event Title */}
                    <Link to={`/events/${event.slug}`}>
                      <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug">
                        {event.title}
                      </h3>
                    </Link>

                    {/* Metadata details */}
                    <div className="space-y-2 mb-5 text-xs text-[#66656B] dark:text-[#B6B4BA] font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263] shrink-0" />
                        <span>{formatDate(event.date)}</span>
                        {event.endDate && event.endDate !== event.date && (
                          <span>&ndash; {formatDate(event.endDate)}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263] shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] line-clamp-3 mb-6 leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Registration Capacity Progress Bar */}
                    {event.capacity && (
                      <div className="mb-5 pt-4 border-t border-[#E9E5E4] dark:border-[#343238]">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 text-[#85838A] dark:text-[#929098]">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>Capacity</span>
                          </span>
                          <span>
                            {event.registeredCount} / {event.capacity} Filled
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#E9E5E4] dark:bg-[#343238] overflow-hidden">
                          <div
                            className="h-full bg-[#B91F35] dark:bg-[#F05263] rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(capacityPercent, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Link & Register CTA */}
                    <div className="flex items-center gap-2">
                      <Button
                        to={`/events/${event.slug}`}
                        variant="primary"
                        size="sm"
                        className="flex-1 justify-center"
                      >
                        Register Free
                      </Button>
                      <Button
                        to={`/events/${event.slug}`}
                        variant="secondary"
                        size="sm"
                        className="px-3"
                        title="View details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
