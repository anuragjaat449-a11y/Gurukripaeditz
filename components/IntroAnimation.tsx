import React, { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onFinish: () => void;
}

const INTRO_TEXTS = [
  "In a world of noise...",
  "...find your stillness.",
];

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleFinish = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onFinish, 800); // Allow fade-out animation to complete
  };

  useEffect(() => {
    const timers: number[] = [];
    
    // Timer for text steps
    timers.push(window.setTimeout(() => setStep(1), 3000));
    // Timer for final step
    timers.push(window.setTimeout(() => setStep(2), 6000));
    // Timer to auto-finish the intro
    timers.push(window.setTimeout(handleFinish, 8500));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    animation: isExiting ? 'intro-container-fade-out 0.8s ease-in forwards' : undefined,
  };
  
  const textStyle: React.CSSProperties = {
      animation: 'intro-text-fade 3s ease-in-out forwards',
  };

  const logoStyle: React.CSSProperties = {
    animation: step < 2 
        ? 'intro-logo-enter 1s ease-out forwards'
        : 'intro-logo-exit 0.8s ease-in forwards',
  };
  
  const finalTitleStyle: React.CSSProperties = {
      animation: 'intro-title-enter 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards'
  }

  return (
    <div 
        style={containerStyle}
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-center p-4"
    >
      {/* Ensure starry background is visible for the intro regardless of theme */}
      <div className="absolute inset-0">
          <div className="stars"></div>
          <div className="nebula"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
      </div>
      
      <div className="relative w-full h-48 flex items-center justify-center">
        {step < 2 && (
            <div style={logoStyle} className="absolute inset-0 flex flex-col items-center justify-center">
                <svg
                    className="w-24 h-24 text-brand-gold"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo"
                >
                    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="4" opacity="0.6" />
                    <path d="M50 35 C 65 45, 65 60, 50 70 C 35 60, 35 45, 50 35 Z" fill="currentColor" opacity="0.9" />
                    <path d="M50 20 L 50 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M35 32 L 42 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M65 32 L 58 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <p style={textStyle} key={step} className="mt-6 text-xl font-serif text-brand-gold/80 tracking-widest">
                    {INTRO_TEXTS[step]}
                </p>
            </div>
        )}
        {step === 2 && (
             <div style={finalTitleStyle}>
                <h1 className="text-5xl md:text-7xl tracking-widest text-brand-gold title-decorative">GURU KRIPA SHORTZ</h1>
                <p className="text-lg mt-2 tracking-wider text-white/80">VIDEOS</p>
             </div>
        )}
      </div>

      <button
        onClick={handleFinish}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-wider"
      >
        SKIP
      </button>
    </div>
  );
};

export default IntroAnimation;
