import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Info, FolderGit2, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'react-ts', label: 'React & TypeScript' },
    { id: 'ui-ux', label: 'UI/UX & Components' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category.includes(selectedCategory);
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-[#0B0F17]/30 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real Software Engineering Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            A curated selection of my public GitHub repositories demonstrating frontend architecture, state management, algorithmic logic, and responsive design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-indigo-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Image Container */}
              <div className="relative h-52 sm:h-56 bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setActiveProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/projects/portfolio-v1.jpg';
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Featured badge if present */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-600/90 text-white backdrop-blur-md shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Quick Details Pill on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Info className="w-3.5 h-3.5 text-indigo-600" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium text-slate-400 font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>

                      {/* Live Demo Button - Only shown if liveUrl actually exists! */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                          title="Open Live Vercel Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                      title="View Details"
                    >
                      <span>Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* GitHub Account Note */}
        <div className="mt-16 p-6 rounded-3xl glass-card text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Looking for more repositories and daily code commits?
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Browse over 38 repositories, open source experiments, and coursework on my GitHub profile.
            </p>
          </div>

          <a
            href="https://github.com/Sumeya472"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all text-sm shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @Sumeya472 on GitHub</span>
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
