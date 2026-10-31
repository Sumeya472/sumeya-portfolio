import React from 'react';
import { Github, Linkedin, Send, MessageCircle, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="pt-16 pb-12 bg-white dark:bg-[#070A10] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
                S
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Sumeya Seid
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Software Engineering student at Jimma University, frontend developer, and UI/UX designer. Committed to creating intuitive digital experiences and accessible interfaces.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/Sumeya472"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-all hover:scale-110"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumeya-seid-730028304/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] transition-all hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Sumey_a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#229ED9] transition-all hover:scale-110"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/251980348942"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#25D366] transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/sumeya47/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#FFA116] transition-all hover:scale-110"
                title="LeetCode"
              >
                <span className="font-mono text-xs font-bold">LC</span>
              </a>
              <a
                href="https://codeforces.com/profile/Sumeya_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-red-500 transition-all hover:scale-110"
                title="Codeforces"
              >
                <span className="font-mono text-xs font-bold">CF</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#design" onClick={(e) => scrollToSection(e, 'design')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Creative Design
              </a>
              <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Achievements
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                Contact
              </a>
              <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer" download="Sumeya-Seid-CV.pdf" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                View & Download CV
              </a>
            </div>
          </div>

          {/* Availability / Contact Callout */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Current Status</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Addis Ababa / Jimma, Ethiopia. Open for remote contracts, frontend roles, and major internship beginning February 2027.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Sumeya Seid. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
