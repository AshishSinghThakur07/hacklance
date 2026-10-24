import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Search, 
  Star, 
  GitFork, 
  ExternalLink, 
  ArrowUpRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { Github } from '../components/common/Icons';

import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function ProjectsPage() {
  const { projects } = useData();
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique technologies from projects
  const allTechs = ['All', ...new Set(projects.flatMap((p) => p.techStack || []))];

  const filteredProjects = projects.filter((project) => {
    // Tech filter
    if (selectedTech !== 'All') {
      if (!project.techStack?.includes(selectedTech)) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchSummary = project.summary.toLowerCase().includes(q);
      const matchCategory = project.category.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchCategory) return false;
    }

    return true;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// OPEN REPOSITORIES & LABS"
          title="Engineered by Students."
          highlight="Open Source Projects."
          description="Explore production platforms, distributed sandbox engines, and developer tools built by HACKLANCE student engineering teams."
        />

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          {/* Tech pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            {allTechs.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedTech === tech
                    ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#85838A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, stacks..."
              className="w-full bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#171719] dark:text-[#F6F5F3] placeholder:text-[#85838A] focus:outline-none focus:ring-2 focus:ring-[#B91F35]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center rounded-2xl border border-dashed border-[#E9E5E4] dark:border-[#343238]">
            <Code2 className="w-10 h-10 text-[#85838A] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] max-w-sm mx-auto mb-4 font-mono">
              Try adjusting your technology tag filter or search query.
            </p>
            <Button
              onClick={() => {
                setSelectedTech('All');
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
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                hoverEffect={true}
                showTicks={true}
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="neutral" size="sm">
                      {project.category}
                    </Badge>
                    <span className="text-[11px] font-mono text-[#16794B] dark:text-[#50C58B] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16794B] dark:bg-[#50C58B] inline-block" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] line-clamp-3 mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F1EFED] dark:bg-[#1D1D21] text-[#171719] dark:text-[#F6F5F3] border border-[#E9E5E4] dark:border-[#343238]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#85838A] dark:text-[#929098]">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        <span>{project.metrics?.stars || 14}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{project.metrics?.forks || 4}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repo for ${project.title}`}
                          className="p-1.5 rounded-lg border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#B91F35] dark:text-[#F05263] hover:underline"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
