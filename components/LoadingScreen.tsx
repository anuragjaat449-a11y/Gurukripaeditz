import React, { useState, useEffect } from 'react';

const LOADING_TEXTS = [
  "Awakening Wisdom...",
  "Connecting to the Source...",
  "Embracing Stillness...",
  "Finding Inner Peace...",
];

const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState(LOADING_TEXTS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prevText => {
        const currentIndex = LOADING_TEXTS.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % LOADING_TEXTS.length;
        return LOADING_TEXTS[nextIndex];
      });
    }, 1500); // Change text every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-brand-cream/95 dark:bg-black/90 flex flex-col items-center justify-center z-50">
      <div className="logo-container">
        {/* Science of Spirituality inspired SVG Logo */}
        <svg
          className="w-24 h-24 text-brand-maroon dark:text-brand-gold loading-logo"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading logo"
        >
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="4" opacity="0.6" />
          {/* Inner stylized flame/lotus */}
          <path 
            d="M50 35 C 65 45, 65 60, 50 70 C 35 60, 35 45, 50 35 Z" 
            fill="currentColor"
            opacity="0.9"
          />
          <path 
            d="M50 20 L 50 35" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
           <path 
            d="M35 32 L 42 42" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
           <path 
            d="M65 32 L 58 42" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
      <p className="mt-6 text-xl font-serif text-brand-maroon/80 dark:text-brand-gold/80 tracking-widest animate-pulse">
        {loadingText}
      </p>
    </div>
  );
};

export default LoadingScreen;