
import React, { useState } from 'react';
import type { Poem } from '../constants';
import { POETRY } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import PoetryCard from './PoetryCard';

interface PoetryDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  seenCount: number;
  favorites: Poem[];
  onMarkAsSeen: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  seenPoemIds: Set<string>;
  favoritePoemIds: Set<string>;
}

const PoetryDashboardModal: React.FC<PoetryDashboardModalProps> = ({ 
  isOpen, 
  onClose, 
  seenCount, 
  favorites, 
  onMarkAsSeen, 
  onToggleFavorite,
  seenPoemIds,
  favoritePoemIds
}) => {
  const { t } = useLanguage();
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  const progressPercentage = Math.min((seenCount / POETRY.length) * 100, 100);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg transition-opacity duration-500"
      style={{ animation: isClosing ? 'fade-out 0.4s forwards' : 'fade-in 0.4s' }}
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-6xl max-h-[85vh] glass-card overflow-hidden flex flex-col shadow-2xl relative border border-brand-maroon/20 dark:border-brand-gold/20"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: isClosing ? 'pop-out 0.4s forwards' : 'pop-in 0.4s' }}
      >
        {/* Header Section */}
        <div className="p-8 border-b border-brand-maroon/10 dark:border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-cream/40 dark:bg-black/40">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif-decorative text-brand-maroon dark:text-brand-gold">{t.progressTitle}</h2>
            <p className="text-black/70 dark:text-white/70 mt-1 font-serif">
              {t.poemsDiscovered.replace('{count}', seenCount.toString()).replace('{total}', POETRY.length.toString())}
            </p>
            <div className="w-64 h-3 bg-black/10 dark:bg-white/10 rounded-full mt-4 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-brand-maroon to-brand-gold dark:from-brand-gold dark:to-white shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all duration-1000" 
                  style={{ width: `${progressPercentage}%` }}
                />
            </div>
          </div>
          
          {/* Decorative Icon */}
          <div className="hidden md:flex flex-1 justify-center">
             <div className="w-16 h-16 text-brand-gold animate-pulse opacity-80">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
             </div>
          </div>

          <button onClick={handleClose} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-brand-maroon dark:text-brand-gold">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Favorites Content */}
        <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-brand-cream/20 dark:bg-black/20 custom-scrollbar">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-serif text-brand-maroon dark:text-brand-gold italic tracking-wide">{t.favoritesTitle}</h3>
          </div>

          {favorites.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center max-w-md mx-auto p-6 border-2 border-dashed border-brand-maroon/10 dark:border-brand-gold/10 rounded-2xl">
                <svg className="w-16 h-16 text-brand-maroon/20 dark:text-brand-gold/20 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <p className="text-black/60 dark:text-white/60 font-serif text-lg leading-relaxed">{t.noFavorites}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {favorites.map(poem => (
                <PoetryCard 
                  key={`fav-${poem.id}`} 
                  poem={poem} 
                  isSeen={seenPoemIds.has(poem.id)}
                  isFavorite={true}
                  onMarkAsSeen={() => onMarkAsSeen(poem.id)}
                  onToggleFavorite={() => onToggleFavorite(poem.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        {seenCount === POETRY.length && (
            <div className="p-3 bg-brand-gold/20 text-center text-brand-maroon dark:text-brand-gold font-bold tracking-widest text-xs uppercase border-t border-brand-gold/10">
                {t.allPoemsSeen} ✨
            </div>
        )}
      </div>
    </div>
  );
};

export default PoetryDashboardModal;
