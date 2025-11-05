import React, { useState, useEffect, useCallback } from 'react';
import { VIDEOS, SATSANG_CLIPS, BOOKS } from './constants';
import VideoCard from './components/VideoCard';
import BookCard from './components/BookCard';
import IntroAnimation from './components/IntroAnimation';
import ThemeToggle from './components/ThemeToggle';
import SurveyModal, { SurveyData } from './components/SurveyModal';
import RatingModal from './components/RatingModal';
import { useLanguage } from './contexts/LanguageContext';

type Tab = 'satsang' | 'books' | 'videos';

// --- Main App Component ---
const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
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
  const [activeTab, setActiveTab] = useState<Tab>('satsang');

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

  // Add scroll listener for header effects
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
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
    setPlayingVideoId(prevId => (prevId === videoId ? null : videoId));
  };

  if (showIntro) {
    return <IntroAnimation onFinish={() => setShowIntro(false)} />;
  }
  
  return (
    <div className="min-h-screen text-gray-800 dark:text-white" style={{animation: 'fade-in-up 0.8s ease-out both'}}>
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
      </div>
      
      <header className="py-8 sticky top-0 z-10">
        <div className="container mx-auto text-center px-4 relative">
          <h1 className="text-4xl md:text-6xl tracking-widest text-brand-maroon dark:text-brand-gold title-decorative transition-font-size duration-400">{t.headerTitle}</h1>
          <p className="text-lg mt-2 tracking-wider text-black/60 dark:text-white/80">{t.headerSubtitle}</p>
           
           <div className="h-16 flex items-center justify-center mt-2">
              <div className="relative w-full h-10 flex items-center justify-center">
                  <p 
                  className={`transition-all duration-500 ease-in-out text-sm md:text-base italic text-black/70 dark:text-white/70 absolute inset-0 ${isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
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
        <nav className="my-8 flex justify-center items-center gap-2 md:gap-4 p-4">
            <div className="flex items-center bg-brand-maroon/5 dark:bg-brand-gold/5 p-1 rounded-full">
                <button onClick={() => setActiveTab('satsang')} className={`tab-button ${activeTab === 'satsang' ? 'tab-active' : ''}`}>
                    {t.satsangSectionTitle}
                </button>
                <button onClick={() => setActiveTab('books')} className={`tab-button ${activeTab === 'books' ? 'tab-active' : ''}`}>
                    {t.booksSectionTitle}
                </button>
                <button onClick={() => setActiveTab('videos')} className={`tab-button ${activeTab === 'videos' ? 'tab-active' : ''}`}>
                    {t.sectionTitle}
                </button>
            </div>
        </nav>

        <div key={activeTab} style={{ animation: 'fade-in-up 0.6s ease-out both' }}>
          {activeTab === 'satsang' && (
            <section className="my-12 mx-auto max-w-7xl p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {SATSANG_CLIPS.map((video, index) => (
                  <div 
                    className="card-container" 
                    key={`${video.id}-${index}`}
                    style={{ animation: `fade-in-up 0.5s ${index * 0.05}s ease-out both` }}
                  >
                    <VideoCard 
                      video={video} 
                      videoNumber={index + 1}
                      isPlaying={playingVideoId === video.id}
                      onPlay={handlePlayVideo}
                      titlePrefix={t.clipTitlePrefix}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'books' && (
            <section className="my-12 mx-auto max-w-7xl p-5">
              <div className="flex justify-center gap-8 flex-wrap">
                {BOOKS.map((book, index) => (
                  <div
                    className="card-container w-full max-w-xs"
                    key={book.id}
                    style={{ animation: `fade-in-up 0.5s ${index * 0.05}s ease-out both` }}
                  >
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'videos' && (
            <section className="my-12 mx-auto max-w-7xl p-5">
              <div className="flex justify-center items-center mb-12 w-full">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
                <button
                  onClick={handleOpenRatingModal}
                  title={t.viewRating}
                  aria-label={t.viewRating}
                  className="mx-4 group"
                >
                  <svg 
                    className="w-24 h-24 text-brand-maroon/80 dark:text-brand-gold/80 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l1.5-3.5 1.5 3.5h-3zm4-1.5l1.5-3.5 1.5 3.5h-3zm4.5 1.5l1.5-3.5 1.5 3.5h-3zM12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </button>
                <div className="w-24 h-px bg-gradient-to-l from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {VIDEOS.map((video, index) => (
                  <div 
                    className="card-container" 
                    key={`${video.id}-${index}`}
                    style={{ animation: `fade-in-up 0.5s ${index * 0.05}s ease-out both` }}
                  >
                    <VideoCard 
                      video={video} 
                      videoNumber={index + 1}
                      isPlaying={playingVideoId === video.id}
                      onPlay={handlePlayVideo}
                      titlePrefix={t.videoTitlePrefix}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
