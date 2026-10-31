import React from 'react';
import { skillsData } from '../data/skillsData';
import { Layout, Code, Palette, Sparkles, Wrench, Server, Users, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

export const Skills: React.FC = () => {

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of my technical stack, design competencies, and active learning areas—grounded in real coursework, projects, and hackathon experience.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((cat) => {
            const isBackend = cat.title.toLowerCase().includes('backend');

            return (
              <div
                key={cat.title}
                className={`p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  isBackend
                    ? 'border-indigo-500/30 dark:border-indigo-500/40 bg-gradient-to-br from-indigo-500/[0.04] to-purple-500/[0.03]'
                    : ''
                }`}
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {iconMap[cat.iconName] || <Code className="w-5 h-5" />}
                    </div>

                    {isBackend && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold font-mono bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                        <BookOpen className="w-3 h-3" />
                        <span>Currently Learning</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          skill.isLearning
                            ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800/40'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 hover:border-indigo-400/60 hover:bg-white dark:hover:bg-white/10 shadow-sm'
                        }`}
                        title={skill.description}
                      >
                        <span className="flex items-center gap-1.5">
                          {skill.isLearning && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{cat.skills.length} Competencies</span>
                  <span className="text-indigo-500/80 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>* Accurately reflects my verified coursework, personal projects, and active development areas without inflated metrics.</span>
        </div>

      </div>
    </section>
  );
};
