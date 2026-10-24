import { 
  Users, 
  Mail, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';

import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function TeamPage() {
  const { team } = useData();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Leadership', 'Technical', 'Operations', 'Design'];

  const filteredTeam = team.filter((member) => {
    if (activeCategory === 'All') return true;
    return member.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// THE BUILDERS"
          title="Student Leadership &amp;"
          highlight="Technical Council."
          description="Meet the developers, systems architects, and community organizers driving HACKLANCE at R.R. Institute of Modern Technology."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredTeam.map((member) => (
            <Card
              key={member.id}
              hoverEffect={true}
              showTicks={true}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#B91F35] dark:text-[#F05263] uppercase tracking-wider font-semibold block mb-1">
                      {member.category} &bull; {member.year}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#66656B] dark:text-[#B6B4BA] mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#FCEBED] dark:bg-[#321D23] border border-[#B91F35]/20 text-[#B91F35] dark:text-[#F05263] flex items-center justify-center font-bold font-mono text-base shrink-0">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#1A1A1E] border border-[#E9E5E4] dark:border-[#343238] mb-6 text-xs font-mono">
                  <div className="text-[#85838A] mb-1">Specialization</div>
                  <div className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                    {member.specialization}
                  </div>
                  <div className="text-[#85838A] mt-2 mb-1">Department</div>
                  <div className="text-[#171719] dark:text-[#F6F5F3]">
                    {member.department}
                  </div>
                </div>

                <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E5E4] dark:border-[#343238] flex items-center justify-between">
                <span className="text-xs font-mono text-[#85838A]">
                  Verified RRGI Contributor
                </span>

                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="p-2 rounded-lg border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="p-2 rounded-lg border border-[#E9E5E4] dark:border-[#343238] hover:border-[#B91F35] text-[#66656B] dark:text-[#B6B4BA] hover:text-[#171719] dark:hover:text-[#F6F5F3] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Council CTA */}
        <Card hoverEffect={false} showTicks={true} className="p-8 sm:p-12 text-center bg-[#FAF9F6] dark:bg-[#171719]">
          <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
            Want to Lead or Organize with Us?
          </h3>
          <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] max-w-xl mx-auto mb-6 leading-relaxed">
            We open applications for technical council, hackathon logistics, and design leads at the start of each academic semester.
          </p>
          <Button to="/join" variant="primary" size="md" iconRight={ArrowRight}>
            Apply for Club Roles &rarr;
          </Button>
        </Card>

      </div>
    </div>
  );
}
