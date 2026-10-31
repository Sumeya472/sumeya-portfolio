import React from 'react';
import { achievementsData } from '../data/achievementsData';
import { Award, Trophy, CheckCircle2, BookmarkCheck, Building2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-slate-50/50 dark:bg-[#0B0F17]/30 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Verified milestones, hackathon awards, professional certificates, and community leadership demonstrating commitment to continuous excellence.
          </p>
        </div>

        {/* Achievements Timeline & Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.map((item) => {
            const isAward = item.type === 'award';
            const isCert = item.type === 'certification';
            const isExp = item.type === 'experience';

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-7 rounded-3xl glass-card flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${
                  isAward
                    ? 'border-amber-500/30 dark:border-amber-500/30'
                    : isCert
                    ? 'border-indigo-500/30 dark:border-indigo-500/30'
                    : 'border-slate-200 dark:border-white/10'
                }`}
              >
                {/* Accent Top Bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    isAward
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                      : isCert
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  }`}
                />

                <div>
                  {/* Category Pill & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        isAward
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                          : isCert
                          ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      {isAward && <Trophy className="w-3.5 h-3.5" />}
                      {isCert && <BookmarkCheck className="w-3.5 h-3.5" />}
                      {isExp && <Award className="w-3.5 h-3.5" />}
                      <span>{item.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-400">
                      {item.periodOrDate}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Role */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 dark:text-slate-400">{item.roleOrAward}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
