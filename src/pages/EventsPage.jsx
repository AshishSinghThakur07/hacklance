import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowUpRight, 
  Search, 
  Clock, 
  Filter, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import EventRegistrationModal from '../components/forms/EventRegistrationModal';
import { formatDate } from '../utils/helpers';

export default function EventsPage() {
  const { events } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const categories = ['All', 'Hackathon', 'Workshop', 'Coding Contest', 'Past'];

  const filteredEvents = events.filter((event) => {
    // Category match
    if (selectedCategory === 'Past') {
      if (event.status !== 'past') return false;
    } else if (selectedCategory !== 'All') {
      if (event.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchDesc = event.shortDescription.toLowerCase().includes(q);
      const matchVenue = event.venue.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchVenue) return false;
    }

    return true;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// SPRINT DAYS & GATHERINGS"
          title="Events, Contests &amp;"
          highlight="Hackathons."
          description="Participate in intense 36-hour build marathons, technical architecture workshops, and algorithmic coding clashes hosted by HACKLANCE."
        />

        {/* Filter and Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#85838A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hackathons, topics..."
              className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#171719] dark:text-[#F6F5F3] placeholder:text-[#85838A] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
            />
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="p-16 text-center rounded-2xl border border-dashed border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6]/50 dark:bg-[#1D1D21]/30">
            <Calendar className="w-10 h-10 text-[#85838A] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
              No matching events found
            </h3>
            <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] max-w-sm mx-auto mb-4 font-mono">
              Try adjusting your category filter or search query.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              variant="secondary"
              size="sm"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const isPast = event.status === 'past';
              const capacityPercent = event.capacity
                ? Math.round((event.registeredCount / event.capacity) * 100)
                : 0;

              return (
                <Card
                  key={event.id}
                  hoverEffect={true}
                  showTicks={true}
                  className="p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge
                        variant={isPast ? 'neutral' : 'crimson'}
                        size="sm"
                        hasDot={!isPast}
                      >
                        {event.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-[#85838A] dark:text-[#929098]">
                        {event.mode}
                      </span>
                    </div>

                    <Link to={`/events/${event.slug}`}>
                      <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug">
                        {event.title}
                      </h3>
                    </Link>

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
                    {!isPast && event.capacity && (
                      <div className="mb-5 pt-4 border-t border-[#E9E5E4] dark:border-[#343238]">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 text-[#85838A] dark:text-[#929098]">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>Registered</span>
                          </span>
                          <span>
                            {event.registeredCount} / {event.capacity}
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#E9E5E4] dark:bg-[#343238] overflow-hidden">
                          <div
                            className="h-full bg-[#B91F35] dark:bg-[#F05263] rounded-full"
                            style={{ width: `${Math.min(capacityPercent, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      {!isPast ? (
                        <Button
                          onClick={() => setActiveModalEvent(event)}
                          variant="primary"
                          size="sm"
                          className="flex-1 justify-center"
                        >
                          Register Free
                        </Button>
                      ) : (
                        <div className="flex-1 py-1.5 px-3 rounded-xl bg-[#F1EFED] dark:bg-[#242429] text-center text-xs font-mono text-[#85838A]">
                          Event Concluded
                        </div>
                      )}

                      <Button
                        to={`/events/${event.slug}`}
                        variant="secondary"
                        size="sm"
                        className="px-3"
                        title="View event briefing"
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

      {/* Registration Modal Dialog */}
      <EventRegistrationModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={() => setActiveModalEvent(null)}
      />
    </div>
  );
}
