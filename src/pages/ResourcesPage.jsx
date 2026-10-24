import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Share2,
  Bookmark
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { formatDate } from '../utils/helpers';

export default function ResourcesPage() {
  const { resources } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Developer Workflow', 'Frontend Engineering', 'DevOps & Cloud', 'Algorithms'];

  const filteredResources = resources.filter((res) => {
    if (selectedCategory !== 'All' && res.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchSummary = res.summary.toLowerCase().includes(q);
      const matchAuthor = res.author.toLowerCase().includes(q);
      const matchTags = res.tags?.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSummary && !matchAuthor && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// TECHNICAL CURRICULUM"
          title="Engineering Guides &amp;"
          highlight="Learning Resources."
          description="In-depth tutorials, system architecture blueprints, and algorithmic roadmap notes authored by HACKLANCE technical leads."
        />

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
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

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#85838A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, tags..."
              className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#171719] dark:text-[#F6F5F3] placeholder:text-[#85838A] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
            />
          </div>
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl rounded-2xl bg-[#FFFFFF] dark:bg-[#171719] border border-[#E9E5E4] dark:border-[#343238] shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E9E5E4] dark:border-[#343238]">
                <Badge variant="crimson" size="sm">
                  {selectedArticle.category}
                </Badge>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-3 py-1 rounded-lg text-xs font-mono border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35]"
                >
                  Close &times;
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4 leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-mono text-[#85838A] dark:text-[#929098] mb-6">
                <span>By {selectedArticle.author}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
                <span>&bull;</span>
                <span>{formatDate(selectedArticle.date)}</span>
              </div>

              <div className="prose dark:prose-invert max-w-none text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed space-y-4">
                <p className="font-semibold text-base text-[#171719] dark:text-[#F6F5F3]">
                  {selectedArticle.summary}
                </p>
                <p>{selectedArticle.content}</p>
                <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] font-mono text-xs text-[#171719] dark:text-[#F6F5F3]">
                  // HACKLANCE RECOMMENDED PRACTICES<br />
                  1. Always test with production builds (vite build)<br />
                  2. Use atomic commits following conventional commit spec<br />
                  3. Verify responsive breakpoints at 360px and 1280px
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E9E5E4] dark:border-[#343238] flex justify-end">
                <Button onClick={() => setSelectedArticle(null)} variant="primary" size="sm">
                  Done Reading
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Resources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResources.map((res) => (
            <Card
              key={res.id}
              hoverEffect={true}
              showTicks={true}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#85838A] dark:text-[#929098] mb-4">
                  <Badge variant="neutral" size="sm">
                    {res.category}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263]" />
                    <span>{res.readTime}</span>
                  </span>
                </div>

                <h3
                  onClick={() => setSelectedArticle(res)}
                  className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug cursor-pointer"
                >
                  {res.title}
                </h3>

                <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                  {res.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {res.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F1EFED] dark:bg-[#1D1D21] text-[#171719] dark:text-[#F6F5F3] border border-[#E9E5E4] dark:border-[#343238]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                <span className="text-xs font-mono text-[#85838A]">
                  Author: {res.author}
                </span>

                <Button
                  onClick={() => setSelectedArticle(res)}
                  variant="outline"
                  size="sm"
                  iconRight={ArrowRight}
                >
                  Read Article
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
