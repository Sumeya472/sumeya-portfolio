import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 my-auto transition-all transform animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 flex items-center justify-center transition-all backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative w-full h-64 sm:h-80 bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/projects/portfolio-v1.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          {/* Overlay info */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-600/90 text-white mb-2 inline-block shadow-sm">
                Verified Repository
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights / Technical Solutions */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Key Features & Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture / Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs sm:text-sm">
            {project.architecture && (
              <div>
                <p className="text-slate-400 font-mono mb-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Architecture</span>
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{project.architecture}</p>
              </div>
            )}
            {project.metrics && (
              <div>
                <p className="text-slate-400 font-mono mb-1 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Performance / Metrics</span>
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{project.metrics}</p>
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-6 bg-slate-50 dark:bg-[#0E1524] border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-indigo-500 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all text-sm"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-400 italic">
              (Live demo not deployed for this repository)
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
