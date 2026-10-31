import React, { useEffect } from 'react';
import { DesignItem } from '../types';
import { X } from 'lucide-react';

interface DesignModalProps {
  item: DesignItem | null;
  onClose: () => void;
}

export const DesignModal: React.FC<DesignModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close design preview"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 flex items-center justify-center transition-all backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Preview Container */}
        <div className="relative max-h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden p-2 sm:p-4">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Design Details Footer */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#111827] border-t border-slate-200/80 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              {item.categoryLabel}
            </span>
            {item.dimensions && (
              <span className="text-xs font-mono text-slate-400">
                {item.dimensions}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200/60 dark:border-white/5">
            <span className="text-xs font-mono text-slate-400 mr-2">Tools & Competencies:</span>
            {item.tools.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
