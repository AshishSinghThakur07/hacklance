import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import { useData } from '../../context/DataContext';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';

export default function ResourcesPreview() {
  const { resources } = useData();

  const previewList = resources.slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-b border-[#E9E5E4] dark:border-[#343238] bg-[#FAF9F6] dark:bg-[#101012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="// 05. TECHNICAL LEARNING"
            title="Curated Engineering"
            highlight="Guides &amp; Articles."
            description="Deep-dive tutorials, system architecture blueprints, and algorithmic problem-solving guides authored by HACKLANCE contributors."
            className="mb-0"
          />

          <Button
            to="/resources"
            variant="secondary"
            size="md"
            iconRight={ArrowRight}
            className="self-start md:self-auto shrink-0"
          >
            All Technical Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewList.map((res) => (
            <Card
              key={res.id}
              hoverEffect={true}
              showTicks={true}
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#85838A] dark:text-[#929098] mb-4">
                  <span className="text-[#B91F35] dark:text-[#F05263] font-semibold uppercase">
                    {res.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{res.readTime}</span>
                  </span>
                </div>

                <Link to={`/resources#${res.slug}`}>
                  <h3 className="text-lg font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3 hover:text-[#B91F35] dark:hover:text-[#F05263] transition-colors leading-snug">
                    {res.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#66656B] dark:text-[#B6B4BA] line-clamp-3 mb-6 leading-relaxed">
                  {res.summary}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                  <span className="text-xs text-[#85838A] dark:text-[#929098] font-mono">
                    By {res.author}
                  </span>
                  <Link
                    to={`/resources#${res.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#B91F35] dark:text-[#F05263] hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
