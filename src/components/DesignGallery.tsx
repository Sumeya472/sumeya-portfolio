import React, { useState } from 'react';
import { designsData } from '../data/designsData';
import { DesignItem, DesignCategory } from '../types';
import { DesignModal } from './DesignModal';
import { Palette, Maximize2, Sparkles, Smartphone, Monitor, Image as ImageIcon } from 'lucide-react';

export const DesignGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory>('all');
  const [activeItem, setActiveItem] = useState<DesignItem | null>(null);

  const filterTabs: { id: DesignCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Creative Works', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'ui-ux', label: 'UI/UX & Web Interfaces', icon: <Monitor className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Mobile App Designs', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'posters', label: 'Graphic Design & Posters', icon: <ImageIcon className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = designsData.filter((d) => {
    if (selectedCategory === 'all') return true;
    return d.category === selectedCategory;
  });

  return (
    <section id="design" className="py-24 relative overflow-hidden">
      {/* Subtle creative ambient aura */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Creative Direction & Visual Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Creative Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Beyond engineering, I express ideas through user interface design in Figma and visual storytelling in graphic posters and brand compositions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-purple-400'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/15">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Expand Pill Centered on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Expand Design</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-white/5">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <DesignModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
};
