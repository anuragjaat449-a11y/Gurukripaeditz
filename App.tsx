

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BOOKS, POETRY, Poem } from './constants';
import BookCard from './components/BookCard';
import PoetryCard from './components/PoetryCard';
import IntroAnimation from './components/IntroAnimation';
import ThemeToggle from './components/ThemeToggle';
import SurveyModal, { SurveyData } from './components/SurveyModal';
import RatingModal from './components/RatingModal';
import { useLanguage } from './contexts/LanguageContext';
import CarouselNavigator, { CarouselTab } from './components/CarouselNavigator';
import PhotoGallery from './components/PhotoGallery';

const TABS: CarouselTab[] = [
  { id: 'poetry', titleKey: 'poetrySectionTitle', imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop' },
  { id: 'books', titleKey: 'booksSectionTitle', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop' },
  { id: 'gallery', titleKey: 'photoGallerySectionTitle', imageUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-001-xl.jpg' },
];

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);
  const { language, toggleLanguage, t } = useLanguage();
  const QUOTES = t.quotes;
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [hasUserRated, setHasUserRated] = useState(false);
  const [averageRatingInfo, setAverageRatingInfo] = useState({ rating: 0, count: 0 });
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [ratingModalPosition, setRatingModalPosition] = useState<{ top: number; left: number } | null>(null);
  const [activeTab, setActiveTab] = useState<string>('poetry');
  const [scrolled, setScrolled] = useState(false);
  const ratingButtonRef = useRef<HTMLButtonElement>(null);
  
  const [poetryToDisplay, setPoetryToDisplay] = useState<Poem[]>([]);
  const [showPoetryResetMessage, setShowPoetryResetMessage] = useState(false);

  useEffect(() => {
    const initializePoetry = () => {
      let seenIds: string[] = [];
      try {
        const storedIds = localStorage.getItem('seenPoemIds');
        if (storedIds) {
          seenIds = JSON.parse(storedIds);
        }
      } catch (e) {
        console.error("Failed to parse seenPoemIds from localStorage", e);
        seenIds = [];
      }
      
      const seenIdSet = new Set(seenIds);
      let unseenPoems = POETRY.filter(p => !seenIdSet.has(p.id));

      if (unseenPoems.length === 0 && POETRY.length > 0) {
        setShowPoetryResetMessage(true);
        localStorage.removeItem('seenPoemIds');
        unseenPoems = [...POETRY]; // Show all again
      } else {
        setShowPoetryResetMessage(false);
      }

      const shuffled = unseenPoems.sort(() => Math.random() - 0.5);
      setPoetryToDisplay(shuffled);
    };

    initializePoetry();
  }, []);

  const handlePoemBecameVisible = useCallback((id: string) => {
    try {
      const storedIds = localStorage.getItem('seenPoemIds');
      const seenIds = storedIds ? new Set<string>(JSON.parse(storedIds)) : new Set<string>();
      if (!seenIds.has(id)) {
        seenIds.add(id);
        localStorage.setItem('seenPoemIds', JSON.stringify(Array.from(seenIds)));
      }
    } catch (e) {
      console.error("Failed to update seenPoemIds in localStorage", e);
    }
  }, []);
  
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

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setIsQuoteVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex(prev => (prev + 1) % QUOTES.length);
        setIsQuoteVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(quoteTimer);
  }, [QUOTES.length]);

  const handleFeedbackClick = () => setIsSurveyOpen(true);

  const handleSurveySubmit = (data: SurveyData) => {
    try {
      const ratings = JSON.parse(localStorage.getItem('gks_ratings') || '[]');
      ratings.push(data.rating);
      localStorage.setItem('gks_ratings', JSON.stringify(ratings));
      localStorage.setItem('gks_hasRated', 'true');
      setHasUserRated(true);
      calculateAverageRating();
    } catch (error) {
      console.error("Could not save rating", error);
    }
  };

  const handleRatingButtonClick = () => {
    if (ratingButtonRef.current) {
      const rect = ratingButtonRef.current.getBoundingClientRect();
      setRatingModalPosition({ top: rect.bottom + 10, left: rect.left + rect.width / 2 });
    }
    setIsRatingModalOpen(true);
  };

  const renderActiveTabContent = () => {
    const animationClass = "animate-[fade-in-up_0.5s_ease-out]";
    switch(activeTab) {
      case 'poetry':
        return (
          <>
            {showPoetryResetMessage && (
              <div className={`mb-8 p-4 text-center glass-card text-brand-maroon dark:text-brand-gold ${animationClass}`}>
                <p className="font-semibold">{t.poetryResetTitle}</p>
                <p>{t.poetryResetSubtitle}</p>
              </div>
            )}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${animationClass}`}>
              {poetryToDisplay.map(poem => <PoetryCard key={poem.id} poem={poem} onBecameVisible={handlePoemBecameVisible} />)}
            </div>
          </>
        );
      case 'books':
        return <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${animationClass}`}>{BOOKS.map(book => <BookCard key={book.id} book={book} />)}</div>;
      case 'gallery':
        return <div className={animationClass}><PhotoGallery /></div>;
      default: return null;
    }
  };

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  const currentQuote = QUOTES[currentQuoteIndex];

  return (
    <>
      <header className={`sticky top-0 z-30 px-4 md:px-8 py-6 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif-decorative tracking-widest text-brand-maroon dark:text-brand-gold title-decorative transition-all duration-300">{t.headerTitle}</h1>
            <p className="mt-2 text-sm md:text-base text-black/70 dark:text-white/70">{t.headerSubtitle}</p>
            <div className="relative mt-4 h-16 w-full max-w-3xl flex items-center justify-center overflow-hidden">
                <div className={`transition-all duration-500 ease-in-out ${isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <p className="text-base md:text-lg italic text-black/80 dark:text-white/80">"{currentQuote.text}"</p>
                    <p className="mt-1 text-sm text-black/60 dark:text-white/60">- {currentQuote.author}</p>
                </div>
            </div>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button onClick={toggleLanguage} className="p-2 w-10 h-10 rounded-full btn-premium-secondary" title={t.toggleLanguage}>
                    <span className="font-bold text-lg">{language === 'en' ? 'हि' : 'En'}</span>
                </button>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-8">
        <CarouselNavigator tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">{renderActiveTabContent()}</div>
      </main>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {averageRatingInfo.count > 0 && (
          <button ref={ratingButtonRef} onClick={handleRatingButtonClick} className="py-2 px-4 rounded-full text-sm font-bold btn-premium-secondary flex items-center gap-2" title={t.viewRating}>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span>{averageRatingInfo.rating.toFixed(1)}</span>
          </button>
        )}
        {!hasUserRated && (
          <button onClick={handleFeedbackClick} className="py-2 px-4 rounded-full text-sm font-bold btn-premium animate-gentle-bounce" title={t.feedbackButton}>
            {t.feedbackButton}
          </button>
        )}
      </div>
      
      <SurveyModal isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} onSubmit={handleSurveySubmit} />
      <RatingModal isOpen={isRatingModalOpen} onClose={() => setIsRatingModalOpen(false)} rating={averageRatingInfo.rating} count={averageRatingInfo.count} position={ratingModalPosition} />
    </>
  );
};

export default App;
