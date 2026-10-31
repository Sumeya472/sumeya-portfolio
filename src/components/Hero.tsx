import React, { useState } from 'react';
import { FolderGit2, Mail, Github, Linkedin, Send, MessageCircle, MapPin, GraduationCap, Eye } from 'lucide-react';
import { useToast } from './Toast';
import { CVModal } from './CVModal';

export const Hero: React.FC = () => {
  const { showToast } = useToast();
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    // Open CV modal for visual confirmation and immediate viewing/download
    e.preventDefault();
    setIsCVModalOpen(true);
    showToast('Opening CV Preview...', 'info');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Remote Work & on-site</span>
            </div>

            {/* Greeting & Name */}
            <p className="text-base sm:text-lg font-mono font-medium text-indigo-600 dark:text-indigo-400 mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              SUMEYA <span className="text-gradient">SEID</span>
            </h1>

            {/* Professional Role Title */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-6">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                Software Engineering Student
              </span>
              <span className="text-indigo-500">•</span>
              <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                Frontend Developer
              </span>
              <span className="text-indigo-500">•</span>
              <span className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                UI/UX & Graphic Designer
              </span>
            </div>

            {/* Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              I build responsive, accessible, and user-centric digital experiences by bridging the technical precision of software development with the creative elegance of visual design. 4th-year student at <span className="font-semibold text-slate-900 dark:text-white">Jimma University</span>, actively expanding into full-stack engineering.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group"
                title="View & Download Sumeya Seid's Official CV (PDF)"
              >
                <Eye className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                <span>View / Download CV</span>
                <span className="text-xs text-slate-400 font-mono">PDF</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Ribbon */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full justify-center lg:justify-start">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              
              <a
                href="https://github.com/Sumeya472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-110"
                title="GitHub @Sumeya472"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/sumeya-seid-730028304/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] transition-all duration-200 hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://t.me/Sumey_a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#229ED9] transition-all duration-200 hover:scale-110"
                title="Telegram @Sumey_a"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/251980348942"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#25D366] transition-all duration-200 hover:scale-110"
                title="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/sumeya47/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#FFA116] transition-all duration-200 hover:scale-110"
                title="LeetCode @sumeya47"
              >
                <span className="font-mono font-bold text-xs">LC</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture & Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              
              {/* Outer decorative gradient aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-pink-500/30 blur-2xl transform rotate-6 scale-95" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl p-2.5 bg-gradient-to-b from-white/80 via-white/40 to-white/10 dark:from-white/10 dark:via-white/5 dark:to-transparent border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group">
                <img
                  src="/images/profile/su.jpg"
                  alt="Sumeya Seid — Software Engineering Student, Frontend Developer & UI/UX Designer"
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to github avatar if local file has any browser rendering issue
                    (e.target as HTMLImageElement).src = 'https://avatars.githubusercontent.com/u/216576486?v=4';
                  }}
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none rounded-b-2xl" />

                {/* Bottom badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span>Jimma Institute of Technology</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>Ethiopia</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: React + TypeScript */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl glass-card flex items-center gap-2 shadow-xl animate-float">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                  ⚛️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">React & TypeScript</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Frontend Engineering</p>
                </div>
              </div>

              {/* Floating Pill 2: Figma UI/UX */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl glass-card flex items-center gap-2 shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs">
                  🎨
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">UI/UX & Figma</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Design Systems</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CV Interactive Preview & Download Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </section>
  );
};
