import React, { useState } from 'react';
import { 
  Trophy, 
  Terminal, 
  Clock, 
  Calendar, 
  Award, 
  Users, 
  CheckCircle2, 
  Code2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useData } from '../context/DataContext';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function ContestsPage() {
  const { contests } = useData();
  const [selectedContest, setSelectedContest] = useState(contests[0] || null);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// ALGORITHMIC ARENA"
          title="Competitive Programming &amp;"
          highlight="Coding Contests."
          description="Test your logical precision and algorithmic speed in weekly clashes. Verified leaderboards, custom testsuites, and automated evaluation."
        />

        {/* Contests Selector Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-[#E9E5E4] dark:border-[#343238]">
          {contests.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedContest(c)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                selectedContest?.id === c.id
                  ? 'bg-[#B91F35] dark:bg-[#F05263] text-white dark:text-[#101012] font-bold shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#1D1D21] border border-[#E9E5E4] dark:border-[#343238] text-[#66656B] dark:text-[#B6B4BA] hover:border-[#B91F35]'
              }`}
            >
              <span>{c.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  c.status === 'Upcoming'
                    ? 'bg-amber-400/20 text-amber-700 dark:text-amber-300'
                    : 'bg-emerald-400/20 text-emerald-700 dark:text-emerald-300'
                }`}
              >
                {c.status}
              </span>
            </button>
          ))}
        </div>

        {selectedContest && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Contest Overview & Rules (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Card hoverEffect={false} showTicks={true} className="p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge
                    variant={selectedContest.status === 'Upcoming' ? 'crimson' : 'neutral'}
                    size="sm"
                    hasDot={selectedContest.status === 'Upcoming'}
                  >
                    {selectedContest.status} CONTEST
                  </Badge>
                  <span className="text-xs font-mono text-[#85838A]">
                    {selectedContest.problemsCount} Problems
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope'] mb-3">
                  {selectedContest.title}
                </h3>

                <p className="text-sm text-[#66656B] dark:text-[#B6B4BA] leading-relaxed mb-6">
                  {selectedContest.description}
                </p>

                <div className="space-y-3 text-xs font-mono p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1A1A1E] border border-[#E9E5E4] dark:border-[#343238] mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#85838A]">Date &amp; Time:</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {selectedContest.date}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#85838A]">Duration:</span>
                    <span className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                      {selectedContest.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#85838A]">Supported Stacks:</span>
                    <span className="text-[#171719] dark:text-[#F6F5F3]">
                      C++, Java, Python, Rust
                    </span>
                  </div>
                </div>

                {selectedContest.status === 'Upcoming' ? (
                  <Button
                    to="/events"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Register for Arena
                  </Button>
                ) : (
                  <div className="text-center p-2.5 rounded-xl bg-[#F1EFED] dark:bg-[#242429] text-xs font-mono text-[#85838A]">
                    Contest Finished &bull; Final Standings
                  </div>
                )}
              </Card>

              {/* Integrity Warning */}
              <div className="p-4 rounded-xl bg-[#FFF5F5] dark:bg-[#241419] border border-[#B91F35]/20 text-xs font-mono text-[#B91F35] dark:text-[#F05263]">
                <strong>Plagiarism Detection:</strong> Code submissions are scanned by similarity tokens across all previous ICPC, LeetCode, and campus repositories.
              </div>
            </div>

            {/* Live Leaderboard Table (7 cols) */}
            <div className="lg:col-span-7">
              <Card hoverEffect={false} showTicks={true} className="p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E9E5E4] dark:border-[#343238]">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <h4 className="text-base font-bold text-[#171719] dark:text-[#F6F5F3] font-['Manrope']">
                      Official Standings &amp; Rankings
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#85838A]">
                    {selectedContest.leaderboard?.length || 0} Ranked
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-[#E9E5E4] dark:border-[#343238] text-[#85838A] uppercase">
                        <th className="pb-3 pr-4">Rank</th>
                        <th className="pb-3 pr-4">Handle</th>
                        <th className="pb-3 pr-4">Solved</th>
                        <th className="pb-3 pr-4">Penalty</th>
                        <th className="pb-3 text-right">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E9E5E4] dark:divide-[#343238]">
                      {selectedContest.leaderboard?.map((entry) => (
                        <tr
                          key={entry.handle}
                          className="hover:bg-[#FAF9F6] dark:hover:bg-[#242429] transition-colors"
                        >
                          <td className="py-3 pr-4 font-bold">
                            {entry.rank === 1 ? (
                              <span className="text-amber-500 flex items-center gap-1">
                                #1 🏆
                              </span>
                            ) : entry.rank === 2 ? (
                              <span className="text-zinc-400">#2 🥈</span>
                            ) : entry.rank === 3 ? (
                              <span className="text-amber-700">#3 🥉</span>
                            ) : (
                              `#${entry.rank}`
                            )}
                          </td>
                          <td className="py-3 pr-4">
                            <div className="font-semibold text-[#171719] dark:text-[#F6F5F3]">
                              {entry.handle}
                            </div>
                            <div className="text-[10px] text-[#85838A]">
                              {entry.college}
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-[#16794B] dark:text-[#50C58B] font-bold">
                            {entry.solved} / {selectedContest.problemsCount}
                          </td>
                          <td className="py-3 pr-4 text-[#85838A]">
                            {entry.penalty}m
                          </td>
                          <td className="py-3 text-right font-bold text-[#B91F35] dark:text-[#F05263]">
                            {entry.points} pts
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
