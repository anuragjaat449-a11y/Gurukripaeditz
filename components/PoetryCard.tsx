
import React, { useState, useRef, useEffect } from 'react';
import type { Poem } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface PoetryCardProps {
  poem: Poem;
  isSeen: boolean;
  isFavorite: boolean;
  onMarkAsSeen: () => void;
  onToggleFavorite: () => void;
  // Removed automatic visibility tracking prop as we now use manual Thumbs Up
  onBecameVisible?: (id: string) => void;
}

const PoetryCard: React.FC<PoetryCardProps> = React.memo(({ poem, isSeen, isFavorite, onMarkAsSeen, onToggleFavorite }) => {
  const { t, language } = useLanguage();
  const [showMeaning, setShowMeaning] = useState(false);
  // Initialize with the global language (which defaults to 'hi')
  const [cardLanguage, setCardLanguage] = useState<'en' | 'hi'>(language);
  const cardRef = useRef<HTMLDivElement>(null);

  // Sync local card language if the user toggles the global language button
  useEffect(() => {
    setCardLanguage(language);
  }, [language]);

  const toggleCardLanguage = () => {
    setCardLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };
  
  const title = cardLanguage === 'hi' ? poem.titleHi : poem.titleEn;
  const text = cardLanguage === 'hi' ? poem.textHi : poem.textEn;
  const meaning = cardLanguage === 'hi' ? poem.meaningHi : poem.meaningEn;
  const hasMeaning = !!meaning;

  return (
    <div ref={cardRef} className={`glass-card rounded-lg overflow-hidden group h-full flex flex-col relative p-6 text-center transition-all duration-500 ${isSeen ? 'bg-opacity-40 border-opacity-30' : 'ring-1 ring-brand-gold/10'}`}>
      
      {/* Action Bar: Favorite & Mark Seen */}
      <div className="absolute top-3 left-3 right-3 flex justify-between z-20">
        
        {/* Thumbs Up (Mark as Seen) */}
        <button 
            onClick={(e) => { e.stopPropagation(); onMarkAsSeen(); }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isSeen ? 'text-brand-gold bg-black/10 dark:bg-white/10' : 'text-black/20 dark:text-white/20 hover:text-brand-gold'}`}
            title={t.thumbsUpAria}
            aria-label={t.thumbsUpAria}
        >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isSeen ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        </button>

        {/* Heart (Favorite) */}
        <button 
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isFavorite ? 'text-red-500' : 'text-black/20 dark:text-white/20 hover:text-red-400'}`}
            title={t.favoriteAria}
            aria-label={t.favoriteAria}
        >
            <svg 
            className={`w-7 h-7 ${isFavorite ? 'fill-current drop-shadow-glow' : ''}`} 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button>
      </div>

      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-maroon/5 via-transparent to-brand-maroon/5 dark:from-brand-gold/5 dark:via-transparent dark:to-brand-gold/5 transition-opacity pointer-events-none ${isSeen ? 'opacity-30' : 'opacity-50 group-hover:opacity-80'}`}></div>
      
      <div className={`relative z-10 flex flex-col h-full mt-6 transition-opacity duration-500 ${isSeen ? 'opacity-70 grayscale-[0.5]' : 'opacity-100'}`}>
        <h3 className="font-serif-decorative text-2xl text-brand-maroon dark:text-brand-gold mb-4">
          {title}
        </h3>
        <div className="my-4 text-lg italic text-black/80 dark:text-white/80 space-y-2 flex-grow">
          {text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <p className="mt-4 font-semibold text-black/60 dark:text-white/70 italic text-sm">
          - {poem.author}
        </p>
        
        {hasMeaning && (
             <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: showMeaning ? '500px' : '0px' }}
            >
              <div className="mt-4 pt-4 border-t border-brand-maroon/20 dark:border-brand-gold/20">
                <p className="text-sm text-left text-black/70 dark:text-white/80 leading-relaxed">{meaning}</p>
              </div>
            </div>
        )}
        
        <div className="mt-auto pt-6 space-y-2">
            <button
                onClick={toggleCardLanguage}
                className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.19 15.14 6 18.09" /></svg>
                <span>{cardLanguage === 'hi' ? 'Show in English' : 'हिंदी में देखें'}</span>
            </button>
            {hasMeaning && (
                <button
                    onClick={() => setShowMeaning(!showMeaning)}
                    className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 transition-transform duration-300 ${showMeaning ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{showMeaning ? t.hideMeaning : t.showMeaning}</span>
                </button>
            )}
             {poem.audioUrl && (
                <a href={poem.audioUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M18 3a1 1 0 00-1.196-.98l-15 2A1 1 0 001 5v10a1 1 0 001.196.98l15-2A1 1 0 0019 15V5a1 1 0 00-1-2zM3 6.892L17 5.108v2.002L3 8.892V6.892zm0 4.001L17 9.11v2.002L3 12.893V10.893z" /></svg>
                    <span>{t.listenToPoem}</span>
                </a>
            )}
        </div>
      </div>
    </div>
  );
});

export default PoetryCard;
