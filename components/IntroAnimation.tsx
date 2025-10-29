import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface IntroAnimationProps {
  onFinish: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const { t } = useLanguage();
  const INTRO_TEXTS = [t.introQuote];

  const handleFinish = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onFinish, 800);
  };

  useEffect(() => {
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setStep(1), 5000)); // Show final title
    timers.push(window.setTimeout(handleFinish, 7500)); // Auto-finish

    return () => {
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerStyle: React.CSSProperties = {
    animation: isExiting ? 'intro-container-fade-out 0.8s ease-in forwards' : undefined,
  };
  
  const backgroundStyle: React.CSSProperties = {
    animation: 'intro-bg-zoom 8s ease-out forwards',
  };

  const textStyle: React.CSSProperties = {
      animation: 'intro-text-fade 4.5s ease-in-out forwards',
      animationDelay: '0.5s'
  };

  const logoAndQuoteContainerStyle: React.CSSProperties = {
    animation: step < 1 
        ? 'intro-logo-enter 1s ease-out forwards'
        : 'intro-logo-exit 0.8s ease-in forwards',
  };
  
  const finalTitleStyle: React.CSSProperties = {
      animation: 'intro-title-enter 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards'
  };

  return (
    <div 
        style={containerStyle}
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <div style={backgroundStyle} className="absolute inset-[-5%] dark-mode-bg">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds" style={{opacity: 0.8}}></div>
      </div>
      
      <div className="relative w-full h-48 flex items-center justify-center">
        {step < 1 && (
            <div style={logoAndQuoteContainerStyle} className="absolute inset-0 flex flex-col items-center justify-center">
                <div 
                  className="absolute w-64 h-64 bg-brand-gold rounded-full blur-3xl"
                  style={{ animation: 'divine-light-pulse 6s ease-in-out infinite' }}
                />

                <svg
                  viewBox="0 0 100 100"
                  className="w-28 h-28 relative z-10 text-brand-gold/90"
                  style={{ filter: 'drop-shadow(0 0 12px currentColor)' }}
                  aria-label="Diya Lamp"
                >
                  <path
                    d="M50 70 C 55 60, 50 45, 50 45 C 50 45, 45 60, 50 70Z"
                    fill="currentColor"
                    style={{ transformOrigin: '50% 70%', animation: 'flicker 2.5s ease-in-out infinite' }}
                  />
                  <path d="M20 75 C 40 60, 60 60, 80 75 Q 50 90, 20 75Z" fill="currentColor" opacity="0.8" />
                </svg>

                <div style={textStyle} key={step} className="mt-6 text-center relative z-10">
                    <p className="text-xl font-serif text-brand-gold/90 tracking-widest" style={{animation: 'subtle-glow-title 5s ease-in-out infinite'}}>
                        {INTRO_TEXTS[step].text}
                    </p>
                    {INTRO_TEXTS[step].author && (
                        <p className="mt-2 text-lg font-serif text-brand-gold/80 tracking-normal">
                            - {INTRO_TEXTS[step].author}
                        </p>
                    )}
                </div>
            </div>
        )}
        {step === 1 && (
             <div style={finalTitleStyle}>
                <h1 className="text-5xl md:text-7xl tracking-widest text-brand-gold title-decorative">{t.headerTitle}</h1>
             </div>
        )}
      </div>

      <button
        onClick={handleFinish}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-wider z-20"
      >
        {t.skip}
      </button>
    </div>
  );
};

export default IntroAnimation;