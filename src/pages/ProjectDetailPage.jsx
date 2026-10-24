import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  GitFork, 
  Users, 
  CheckCircle2, 
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { Github } from '../components/common/Icons';

import { useData } from '../context/DataContext';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects } = useData();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4">
          Project Not Found
        </h1>
        <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] mb-8 font-mono">
          The requested project <code className="text-[#B91F35] font-bold">/projects/{slug}</code> was not found in the community catalog.
        </p>
        <Button to="/projects" variant="primary" size="md" icon={ArrowLeft}>
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#66656B] dark:text-[#B6B4BA] hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="neutral" size="sm">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-[#16794B] dark:text-[#50C58B] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16794B] dark:bg-[#50C58B]" />
                <span>{project.status}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#171719] dark:text-[#F6F5F3]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics & Links Card (4 cols) */}
          <div className="lg:col-span-4">
            <Card hoverEffect={false} showTicks={true} className="p-6 bg-[#FAF9F6] dark:bg-[#171719]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B91F35] dark:text-[#F05263] mb-4">
                // REPOSITORY DETAILS
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono mb-6 pb-4 border-b border-[#E9E5E4] dark:border-[#343238]">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                    {project.metrics?.stars || 14}
                  </span>
                  <span className="text-[#85838A]">Stars</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4 text-[#85838A]" />
                  <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                    {project.metrics?.forks || 4}
                  </span>
                  <span className="text-[#85838A]">Forks</span>
                </div>
              </div>

              {project.contributors && (
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#85838A] block mb-2">Contributors</span>
                  <ul className="space-y-1 text-xs font-mono text-[#171719] dark:text-[#F6F5F3]">
                    {project.contributors.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B91F35] dark:text-[#F05263]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="primary"
                    size="md"
                    icon={Github}
                    className="w-full justify-center"
                  >
                    View on GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="secondary"
                    size="md"
                    iconRight={ExternalLink}
                    className="w-full justify-center"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Problem Statement vs Engineering Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <Card hoverEffect={false} showTicks={true} className="p-8">
            <span className="text-xs font-mono font-bold uppercase text-[#B91F35] dark:text-[#F05263] block mb-2">
              // 01. THE PROBLEM
            </span>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4">
              Challenge &amp; Context
            </h3>
            <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
              {project.problem ||
                'Identifying inefficiency, manual overhead, or developer bottlenecks within the campus ecosystem and establishing engineering requirements.'}
            </p>
          </Card>

          <Card hoverEffect={false} showTicks={true} className="p-8">
            <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-2">
              // 02. ARCHITECTURAL SOLUTION
            </span>
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-4">
              Implementation Strategy
            </h3>
            <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed">
              {project.solution ||
                'Designing a modern, containerized, and modular architecture adhering to clean API standards and zero-downtime reliability.'}
            </p>
          </Card>
        </div>

        {/* Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B91F35] dark:text-[#F05263]" />
              <span>Technical Milestones &amp; Architecture Features</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.highlights.map((h, i) => (
                <Card key={i} hoverEffect={true} showTicks={true} className="p-6">
                  <div className="text-xs font-mono text-[#B91F35] dark:text-[#F05263] mb-2">
                    FEATURE // 0{i + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#171719] dark:text-[#F6F5F3] leading-snug">
                    {h}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contributing Instructions */}
        <Card hoverEffect={false} showTicks={true} className="p-8 bg-[#FAF9F6] dark:bg-[#171719]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B91F35] dark:text-[#F05263] mb-3">
            <Terminal className="w-4 h-4" />
            <span>HOW TO CONTRIBUTE</span>
          </div>
          <h3 className="text-xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
            Open for Student Pull Requests
          </h3>
          <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed max-w-2xl mb-6">
            Fork this repository, check for issues tagged <code className="text-[#B91F35] font-mono">good-first-issue</code>, create a feature branch, and submit a pull request adhering to our conventional commit guidelines.
          </p>
          <Button
            href={project.githubUrl || 'https://github.com/AshishSinghThakur07/hacklance'}
            variant="outline"
            size="sm"
            icon={Github}
          >
            Open GitHub Repository &rarr;
          </Button>
        </Card>

      </div>
    </div>
  );
}
