import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VIDEOS } from './constants';
import VideoCard from './components/VideoCard';
import IntroAnimation from './components/IntroAnimation';
import ThemeToggle from './components/ThemeToggle';
import SurveyModal, { SurveyData } from './components/SurveyModal';
import RatingModal from './components/RatingModal';
import { useLanguage } from './contexts/LanguageContext';

// --- Main App Component ---
const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);
  const { language, toggleLanguage, t } = useLanguage();
  const QUOTES = t.quotes;

  // --- Survey and Rating State ---
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [hasUserRated, setHasUserRated] = useState(false);
  const [averageRatingInfo, setAverageRatingInfo] = useState({ rating: 0, count: 0 });
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [ratingModalPosition, setRatingModalPosition] = useState<{ top: number; left: number } | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });
  
  const calculateAverageRating = useCallback(() => {
    try {
      const storedRatings = localStorage.getItem('gks_ratings');
      const ratings: number[] = storedRatings ? JSON.parse(storedRatings) : [];
      if (ratings.length > 0) {
        const sum = ratings.reduce((acc, r) => acc + r, 0);
        const average = sum / ratings.length;
        setAverageRatingInfo({ rating: average, count: ratings.length });
      }
    } catch (error) {
      console.error("Failed to parse ratings from localStorage", error);
    }
  }, []);
  
  useEffect(() => {
    calculateAverageRating();
    if (localStorage.getItem('gks_hasRated')) {
      setHasUserRated(true);
    }
  }, [calculateAverageRating]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.3;
        // Autoplay is handled by the browser, we request it, but it might be blocked.
        audioRef.current.play().catch(() => {
            console.warn("Background music autoplay was prevented. User interaction is required to start audio.");
        });
    }
  }, []);
  
  useEffect(() => {
    if(showIntro) return; // Don't start quote interval during intro

    const quoteInterval = setInterval(() => {
      setIsQuoteVisible(false); // Start fade out
      setTimeout(() => {
        setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % QUOTES.length);
        setIsQuoteVisible(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 7000); // Change quote every 7 seconds

    return () => clearInterval(quoteInterval);
  }, [showIntro, QUOTES.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prevMuted => {
      if (prevMuted && audioRef.current?.paused) {
         audioRef.current?.play().catch(e => console.warn("Could not play audio", e));
      }
      return !prevMuted;
    });
  };
  
  const handleSurveySubmit = (data: SurveyData) => {
    try {
      const storedRatings = localStorage.getItem('gks_ratings');
      const ratings: number[] = storedRatings ? JSON.parse(storedRatings) : [];
      ratings.push(data.rating);
      localStorage.setItem('gks_ratings', JSON.stringify(ratings));
      localStorage.setItem('gks_hasRated', 'true');
      setHasUserRated(true);
      calculateAverageRating(); // Recalculate and update display
    } catch (error) {
      console.error("Failed to save rating to localStorage", error);
    }
  };

  const handleOpenRatingModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRatingModalPosition({
      top: rect.bottom + 12, // 12px below the icon
      left: rect.left + rect.width / 2, // Centered horizontally
    });
    setIsRatingModalOpen(true);
  };

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  if (showIntro) {
    return <IntroAnimation onFinish={() => setShowIntro(false)} />;
  }
  
  return (
    <div className="min-h-screen text-gray-800 dark:text-white" style={{animation: 'fade-in-up 0.8s ease-out both'}}>
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/audio/2022/11/22/audio_2c4a4033b0.mp3" 
        loop 
        aria-hidden="true"
      />
      
      {isSurveyOpen && (
        <SurveyModal
          isOpen={isSurveyOpen}
          onClose={() => setIsSurveyOpen(false)}
          onSubmit={handleSurveySubmit}
        />
      )}
      
      
      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={() => {
            setIsRatingModalOpen(false);
            setRatingModalPosition(null);
        }}
        rating={averageRatingInfo.rating}
        count={averageRatingInfo.count}
        position={ratingModalPosition}
      />
      
      
      {!hasUserRated && (
        <button
          onClick={() => setIsSurveyOpen(true)}
          className="fixed bottom-6 right-6 z-20 w-16 h-16 rounded-full btn-premium shadow-lg flex items-center justify-center animate-gentle-bounce transform-gpu"
          aria-label={t.feedbackButton}
          title={t.feedbackButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      )}

      <div className="fixed top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={toggleLanguage}
          className="p-2 w-10 h-10 flex items-center justify-center rounded-full btn-premium-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold font-bold text-lg"
          aria-label={t.toggleLanguage}
          title={t.toggleLanguage}
        >
          {language === 'en' ? 'हि' : 'EN'}
        </button>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button
          onClick={toggleMute}
          className="p-2 rounded-full btn-premium-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
          aria-label={isMuted ? t.unmute : t.mute}
          title={isMuted ? t.unmute : t.mute}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25-2.25M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      </div>
      
      <header className="header-bg py-8 sticky top-0 z-10">
        <div className="header-flourish left text-brand-maroon dark:text-brand-gold">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M50.7,76.8c-2.5-2.8-5.5-4.8-8.8-6.1C33.6,67.2,26,62,20.2,55.1c-4.2-5-6.5-11.2-6.5-17.8c0-5.4,1.4-10.4,4-14.7 C21.4,17.9,26.4,14,32.1,11.5c2.6-1.1,5.3-1.8,8.2-1.8c2.9,0,5.7,0.6,8.2,1.8c5.8,2.4,10.7,6.3,14.4,11.1 c2.6,3.4,4,7.4,4,11.7c0,3.3-0.7,6.4-2.1,9.2c-2.1,4.2-5.4,7.5-9.4,9.6c-4.4,2.3-9.3,3.4-14.4,3.4c-2.4,0-4.8-0.3-7-0.8 c-4-1-7.6-2.9-10.7-5.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10"></path></svg>
        </div>
        <div className="header-flourish right text-brand-maroon dark:text-brand-gold">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M50.7,76.8c-2.5-2.8-5.5-4.8-8.8-6.1C33.6,67.2,26,62,20.2,55.1c-4.2-5-6.5-11.2-6.5-17.8c0-5.4,1.4-10.4,4-14.7 C21.4,17.9,26.4,14,32.1,11.5c2.6-1.1,5.3-1.8,8.2-1.8c2.9,0,5.7,0.6,8.2,1.8c5.8,2.4,10.7,6.3,14.4,11.1 c2.6,3.4,4,7.4,4,11.7c0,3.3-0.7,6.4-2.1,9.2c-2.1,4.2-5.4,7.5-9.4,9.6c-4.4,2.3-9.3,3.4-14.4,3.4c-2.4,0-4.8-0.3-7-0.8 c-4-1-7.6-2.9-10.7-5.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10"></path></svg>
        </div>
        <div className="container mx-auto text-center px-4 relative">
          <h1 className="text-4xl md:text-6xl tracking-widest text-brand-maroon dark:text-brand-gold title-decorative">{t.headerTitle}</h1>
          <p className="text-lg mt-2 tracking-wider text-black/60 dark:text-white/80">{t.headerSubtitle}</p>
           
           <div className="h-16 flex items-center justify-center mt-2">
              <div className="relative w-full h-10 flex items-center justify-center">
                  <p 
                  className={`transition-opacity duration-500 ease-in-out text-sm md:text-base italic text-black/70 dark:text-white/70 absolute inset-0 ${isQuoteVisible ? 'opacity-100' : 'opacity-0'}`}
                  >
                  "{QUOTES[currentQuoteIndex].text}"
                  <br/>
                  <span className="font-semibold not-italic">- {QUOTES[currentQuoteIndex].author}</span>
                  </p>
              </div>
          </div>
        </div>
      </header>

      <main>
        <section className="my-16 mx-auto max-w-7xl p-5">
          <h2 className="text-4xl font-serif text-brand-maroon dark:text-brand-gold mb-4 text-center">{t.sectionTitle}</h2>
          <div className="flex justify-center items-center mb-12 w-full">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
            <button
              onClick={handleOpenRatingModal}
              title={t.viewRating}
              aria-label={t.viewRating}
              className="mx-4 group"
            >
              <svg 
                className="w-20 h-20 text-brand-maroon/80 dark:text-brand-gold/80 transition-transform duration-300 group-hover:scale-110 third-eye-glow-effect" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                  <path d="M50 20 C 30 40, 30 60, 50 80 C 70 60, 70 40, 50 20 Z" stroke="currentColor" strokeWidth="3.5" fill="none" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
            </button>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {VIDEOS.map((video, index) => (
              <div 
                className="card-container" 
                key={video.id}
                style={{ animation: `fade-in-up 0.5s ${index * 0.05}s ease-out both` }}
              >
                <VideoCard 
                  video={video} 
                  videoNumber={index + 1}
                  isPlaying={playingVideoId === video.id}
                  onPlay={handlePlayVideo}
                />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;