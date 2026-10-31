import React from 'react';
import { GraduationCap, Code2, Server, Globe2, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-[#0B0F17]/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Software engineering student with a deep passion for frontend architecture, user experience design, and creating thoughtful digital products.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a fourth-year Software Engineering student at <span className="font-semibold text-slate-900 dark:text-white">Jimma University (Jimma Institute of Technology)</span>. My passion lies in crafting responsive, performant, and user-friendly digital experiences that turn complex problems into clear, functional web applications.
            </p>

            <p>
              My development foundation centers on <span className="font-semibold text-indigo-600 dark:text-indigo-400">React.js, TypeScript, JavaScript (ES6+), and Tailwind CSS</span>. I focus heavily on writing structured, accessible, and maintainable code, ensuring responsive layouts look and perform flawlessly from 375px mobile screens up to wide desktop monitors.
            </p>

            <p>
              In parallel with code, I have a deep creative dedication to <span className="font-semibold text-purple-600 dark:text-purple-400">UI/UX and Graphic Design</span>. Using Figma, I design user journeys, wireframes, high-fidelity prototypes, and design systems. This dual perspective gives me the unique ability to communicate seamlessly across design and engineering, translating aesthetic vision into pixel-perfect implementation without loss of detail.
            </p>

            {/* Backend Learning Transparency */}
            <div className="p-4 rounded-2xl bg-indigo-500/5 dark:bg-white/5 border border-indigo-500/20 dark:border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Continuous Learning: Backend & Full-Stack Expansion
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">
                    As an aspiring full-stack developer, I am actively learning backend development—exploring Node.js, Express, RESTful API architecture, and database concepts. Rather than claiming years of backend experience, I embrace this as an active, deliberate growth area in my engineering journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Career Statement Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-indigo-500/30 dark:border-indigo-500/30">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                    Career Statement & Availability
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 font-medium text-sm sm:text-base leading-relaxed">
                    "{personalInfo.internshipAvailability}"
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats & Pillars Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Education</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Jimma Institute of Technology</p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Degree</span>
                  <span className="font-semibold text-slate-900 dark:text-white">BSc in Software Engineering</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Current Standing</span>
                  <span className="font-semibold text-slate-900 dark:text-white">4th-Year Student</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Expected Graduation</span>
                  <span className="font-semibold text-slate-900 dark:text-white">2028</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Major Internship</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Feb 2027</span>
                </div>
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Languages</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Multilingual Fluency</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Amharic</p>
                  <p className="text-[11px] text-indigo-500 font-mono mt-0.5">Native</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">English</p>
                  <p className="text-[11px] text-indigo-500 font-mono mt-0.5">Good / Proficient</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Arabic</p>
                  <p className="text-[11px] text-indigo-500 font-mono mt-0.5">Good</p>
                </div>
              </div>
            </div>

            {/* Core Working Principles */}
            <div className="p-6 rounded-2xl glass-card">
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-500" />
                <span>Core Engineering Principles</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Design-to-code fidelity with modern UI systems</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Semantic HTML and keyboard accessibility (a11y)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strict TypeScript typing and clean modular components</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Performance optimization and lightweight bundles</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
