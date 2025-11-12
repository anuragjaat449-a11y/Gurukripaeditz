import React, { useState, useEffect, useRef } from 'react';
import type { Poem } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface PoetryCardProps {
  poem: Poem;
  onBecameVisible: (id: string) => void;
}

const PoetryCard: React.FC<PoetryCardProps> = ({ poem, onBecameVisible }) => {
  const { t } = useLanguage();
  const [showMeaning, setShowMeaning] = useState(false);
  const [cardLanguage, setCardLanguage] = useState<'en' | 'hi'>('hi');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onBecameVisible(poem.id);
          observer.disconnect(); // Fire only once
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // 50% of the item must be visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [poem.id, onBecameVisible]);

  const toggleCardLanguage = () => {
    setCardLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };
  
  const title = cardLanguage === 'hi' ? poem.titleHi : poem.titleEn;
  const text = cardLanguage === 'hi' ? poem.textHi : poem.textEn;
  const meaning = cardLanguage === 'hi' ? poem.meaningHi : poem.meaningEn;
  const hasMeaning = !!meaning;

  return (
    <div ref={cardRef} className="glass-card rounded-lg overflow-hidden group h-full flex flex-col relative p-6 text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-maroon/10 via-transparent to-brand-maroon/10 dark:from-brand-gold/10 dark:via-transparent dark:to-brand-gold/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-serif-decorative text-2xl text-brand-maroon dark:text-brand-gold mb-4">
          {title}
        </h3>
        <div className="my-4 text-lg italic text-black/80 dark:text-white/80 space-y-2 flex-grow">
          {text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <p className="mt-4 font-semibold text-black/60 dark:text-white/70">
          - {poem.author}
        </p>
        
        {/* Collapsible Meaning Section */}
        {hasMeaning && (
             <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: showMeaning ? '500px' : '0px' }}
            >
              <div className="mt-4 pt-4 border-t border-brand-maroon/20 dark:border-brand-gold/20">
                <p className="text-sm text-left text-black/70 dark:text-white/80">{meaning}</p>
              </div>
            </div>
        )}
        
        {/* Action Buttons pushed to bottom */}
        <div className="mt-auto pt-6 space-y-2">
            <button
                onClick={toggleCardLanguage}
                className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.512 5.73 6.512 5.73a3.498 3.498 0 000 8.532l.001.001a6.012 6.012 0 01-1.912-2.706c-.082-.265-.082-.544 0-.809zM10 4.009c.445 0 .88.07 1.284.204l.654-.654a8.01 8.01 0 00-2.582-.294c-.266 0-.52.01-.77.03l.63.63A6.01 6.01 0 0110 4.009zM15.668 11.973c.082.265.082.544 0 .809a6.012 6.012 0 01-1.912 2.706l-.001-.001a3.498 3.498 0 000-8.532c0 0 0 0-.001-.001a6.012 6.012 0 011.912 2.706zM10 15.991c-.445 0-.88-.07-1.284-.204l-.654.654a8.01 8.01 0 002.582.294c.266 0 .52-.01.77-.03l-.63-.63A6.01 6.01 0 0110 15.991z" clipRule="evenodd" />
                </svg>
                <span>{cardLanguage === 'hi' ? 'Show in English' : 'हिंदी में देखें'}</span>
            </button>
            {hasMeaning && (
                <button
                    onClick={() => setShowMeaning(!showMeaning)}
                    className="w-full inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-bold btn-premium-secondary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 transition-transform duration-300 ${showMeaning ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
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
};

export default PoetryCard;