import React from 'react';
import { Link } from 'react-router-dom';
import { Star, GitFork, ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import { Github } from '../common/Icons';

import { useData } from '../../context/DataContext';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function FeaturedProjects() {
  const { projects } = useData();

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#101012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="// 03. OPEN CODE & LABS"
            title="Engineered by Students."
            highlight="Featured Projects."
            description="Explore production-grade software platforms, developer CLI utilities, and algorithms built by HACKLANCE engineering teams."
            className="mb-0"
          />

          <Button
            to="/projects"
            variant="secondary"
            size="md"
            iconRight={ArrowUpRight}
            className="self-start md:self-auto shrink-0"
          >
            Explore All Repositories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              hoverEffect={true}
              showTicks={true}
              className="p-7 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="neutral" size="sm">
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-[#16794B] dark:text-[#50C58B] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16794B] dark:bg-[#50C58B] inline-block" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title */}
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] line-clamp-3 mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
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
                {/* Bottom Repo Metrics & Actions */}
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
      </div>
    </section>
  );
}
