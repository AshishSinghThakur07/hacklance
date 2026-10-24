import React, { useState, useEffect } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Camera, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Authentic past event photo items tailored for RRGI campus hackathons & workshops
  const galleryItems = [
    {
      id: 1,
      title: 'RRGI Innovathon 2025 Opening Ceremony',
      category: 'Hackathon',
      date: 'Oct 2025',
      location: 'Auditorium, RRGI Lucknow',
      caption: 'Over 250 students gathering for track briefings and problem statement releases.',
      aspect: 'aspect-video',
      color: 'from-rose-900/60 to-black',
    },
    {
      id: 2,
      title: 'Midnight Coding Jam & Mentor Reviews',
      category: 'Hackathon',
      date: 'Oct 2025',
      location: 'CSE Innovation Lab',
      caption: 'Teams debugging distributed backends and fine-tuning neural network models at 2:00 AM.',
      aspect: 'aspect-square',
      color: 'from-zinc-900 to-rose-950/80',
    },
    {
      id: 3,
      title: 'System Design Masterclass & Docker Lab',
      category: 'Workshop',
      date: 'Dec 2025',
      location: 'Lab 3, RRGI',
      caption: 'Students deploying local Redis instances and configuring load-balanced Nginx reverse proxies.',
      aspect: 'aspect-video',
      color: 'from-amber-950/60 to-black',
    },
    {
      id: 4,
      title: 'Algorithmic Clash Div 1 Finalists',
      category: 'Contest',
      date: 'Nov 2025',
      location: 'Online / Arena Lab',
      caption: 'Top algorithmic problem solvers discussing dynamic programming edge cases post-contest.',
      aspect: 'aspect-square',
      color: 'from-slate-900 to-rose-950',
    },
    {
      id: 5,
      title: 'Hardware & IoT Prototyping Showcase',
      category: 'Exhibition',
      date: 'Oct 2025',
      location: 'ECE & Robotics Center',
      caption: 'Teams integrating ESP32 telemetry with campus cloud endpoints for environmental monitoring.',
      aspect: 'aspect-video',
      color: 'from-neutral-900 to-rose-900/50',
    },
    {
      id: 6,
      title: 'Awards Ceremony & Trophy Presentation',
      category: 'Hackathon',
      date: 'Oct 2025',
      location: 'Main Stage, RRGI',
      caption: 'Honoring winning innovators with cash prizes, hardware development boards, and certificates.',
      aspect: 'aspect-video',
      color: 'from-red-950/80 to-zinc-950',
    },
  ];

  const categories = ['All', 'Hackathon', 'Workshop', 'Contest', 'Exhibition'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredItems.length]);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// VISUAL ARCHIVES"
          title="Past Events &amp;"
          highlight="Hackathon Moments."
          description="A visual journey capturing the energy, midnight code jams, technical workshops, and trophy celebrations at R.R. Institute of Modern Technology."
        />

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer rounded-2xl border border-[#E9E5E4] dark:border-[#343238] bg-[#FFFFFF] dark:bg-[#1D1D21] overflow-hidden hover:border-[#B91F35] dark:hover:border-[#F05263] transition-all shadow-sm hover:shadow-lg"
            >
              {/* Graphic Banner Simulation */}
              <div
                className={`relative w-full ${item.aspect} bg-gradient-to-br ${item.color} flex items-center justify-center p-6 text-white overflow-hidden`}
              >
                {/* Subtle Grid overlay inside image */}
                <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />

                <div className="text-center relative z-10 p-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-2 text-white group-hover:scale-110 transition-transform">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase opacity-80 block mb-1">
                    {item.category}
                  </span>
                  <div className="text-sm font-bold font-['Manrope'] line-clamp-2">
                    {item.title}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm text-white/90">
                  {item.date}
                </div>
              </div>

              {/* Caption and location */}
              <div className="p-5">
                <h4 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] line-clamp-2 leading-relaxed mb-3">
                  {item.caption}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#85838A] dark:text-[#929098]">
                  <MapPin className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div className="relative max-w-4xl w-full bg-[#171719] border border-[#343238] rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#B91F35] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev and Next */}
            <button
              type="button"
              onClick={() =>
                setSelectedPhotoIndex(
                  (selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length
                )
              }
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#B91F35] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length)
              }
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#B91F35] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Canvas */}
            <div
              className={`w-full aspect-video bg-gradient-to-br ${filteredItems[selectedPhotoIndex].color} flex items-center justify-center p-12 text-center text-white relative`}
            >
              <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
              <div>
                <Camera className="w-12 h-12 mx-auto mb-3 opacity-60" />
                <h3 className="text-2xl font-bold font-['Manrope'] max-w-xl">
                  {filteredItems[selectedPhotoIndex].title}
                </h3>
              </div>
            </div>

            {/* Modal caption */}
            <div className="p-6 bg-[#1D1D21] border-t border-[#343238] text-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-[#F05263] uppercase tracking-wider font-semibold">
                  {filteredItems[selectedPhotoIndex].category} &bull; {filteredItems[selectedPhotoIndex].date}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedPhotoIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <p className="text-sm text-zinc-300 mb-2 leading-relaxed">
                {filteredItems[selectedPhotoIndex].caption}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#F05263]" />
                <span>{filteredItems[selectedPhotoIndex].location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
