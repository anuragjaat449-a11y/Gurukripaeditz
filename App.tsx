

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VIDEOS } from './constants';
import VideoCard from './components/VideoCard';
import IntroAnimation from './components/IntroAnimation';
import ThemeToggle from './components/ThemeToggle';
import VideoPlayerModal from './components/VideoPlayerModal';
import GiftModal from './components/GiftModal';


const QUOTES = [
  { text: "Meditation is the journey from the head to the heart.", author: "Sant Rajinder Singh Ji Maharaj" },
  { text: "Love is the only way back to God.", author: "Sant Darshan Singh Ji Maharaj" },
  { text: "Spirituality is a living and practical subject. It is a science of the soul.", author: "Sant Kirpal Singh Ji Maharaj" },
  { text: "The soul is a drop from the ocean of all-consciousness.", author: "Sant Rajinder Singh Ji Maharaj" },
  { text: "In the silence of meditation, we can hear the voice of our soul.", author: "Sant Rajinder Singh Ji Maharaj" },
  { text: "The purpose of human life is to know oneself and to know God.", author: "Sant Kirpal Singh Ji Maharaj" },
  { text: "Let us become ambassadors of peace and love in the world.", author: "Sant Darshan Singh Ji Maharaj" },
  { text: "We are all children of the same one God, and our souls are parcels of that divine light.", author: "Sant Rajinder Singh Ji Maharaj" },
];

// --- Main App Component ---
const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

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
  }, [showIntro]);

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
  
  const handleWatchVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleClosePlayer = useCallback(() => {
    setPlayingVideoId(null);
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(e => console.warn("Could not resume music.", e));
    }
  }, [isMuted]);

  const openGiftModal = () => {
    setIsGiftModalOpen(true);
  };

  const closeGiftModal = useCallback(() => {
    setIsGiftModalOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosePlayer();
        closeGiftModal();
      }
    };

    if (playingVideoId || isGiftModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playingVideoId, isGiftModalOpen, handleClosePlayer, closeGiftModal]);


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

      <div className="fixed top-4 right-4 z-20 flex items-center space-x-2">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button
          onClick={toggleMute}
          className="p-2 rounded-full btn-premium-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
          aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
          title={isMuted ? 'Unmute background music' : 'Mute background music'}
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
      
      <button
        onClick={openGiftModal}
        className="fixed bottom-6 right-6 z-20 w-16 h-16 rounded-full btn-premium flex items-center justify-center shadow-lg animate-pulse"
        aria-label="Share feedback"
        title="Share your feedback"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <header className="header-bg py-8 sticky top-0 z-10">
        <div className="header-flourish left text-brand-maroon dark:text-brand-gold">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M50.7,76.8c-2.5-2.8-5.5-4.8-8.8-6.1C33.6,67.2,26,62,20.2,55.1c-4.2-5-6.5-11.2-6.5-17.8c0-5.4,1.4-10.4,4-14.7 C21.4,17.9,26.4,14,32.1,11.5c2.6-1.1,5.3-1.8,8.2-1.8c2.9,0,5.7,0.6,8.2,1.8c5.8,2.4,10.7,6.3,14.4,11.1 c2.6,3.4,4,7.4,4,11.7c0,3.3-0.7,6.4-2.1,9.2c-2.1,4.2-5.4,7.5-9.4,9.6c-4.4,2.3-9.3,3.4-14.4,3.4c-2.4,0-4.8-0.3-7-0.8 c-4-1-7.6-2.9-10.7-5.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10"></path></svg>
        </div>
        <div className="header-flourish right text-brand-maroon dark:text-brand-gold">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M50.7,76.8c-2.5-2.8-5.5-4.8-8.8-6.1C33.6,67.2,26,62,20.2,55.1c-4.2-5-6.5-11.2-6.5-17.8c0-5.4,1.4-10.4,4-14.7 C21.4,17.9,26.4,14,32.1,11.5c2.6-1.1,5.3-1.8,8.2-1.8c2.9,0,5.7,0.6,8.2,1.8c5.8,2.4,10.7,6.3,14.4,11.1 c2.6,3.4,4,7.4,4,11.7c0,3.3-0.7,6.4-2.1,9.2c-2.1,4.2-5.4,7.5-9.4,9.6c-4.4,2.3-9.3,3.4-14.4,3.4c-2.4,0-4.8-0.3-7-0.8 c-4-1-7.6-2.9-10.7-5.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10"></path></svg>
        </div>
        <div className="container mx-auto text-center px-4 relative">
          <h1 className="text-4xl md:text-6xl tracking-widest text-brand-maroon dark:text-brand-gold title-decorative">GURU KRIPA SHORTZ</h1>
          <p className="text-lg mt-2 tracking-wider text-black/60 dark:text-white/80">VIDEOS</p>
           <div className="h-16 flex items-center justify-center mt-2">
            <div className="relative w-full">
                <p 
                className={`transition-opacity duration-500 ease-in-out text-sm md:text-base italic text-black/70 dark:text-white/70 ${isQuoteVisible ? 'opacity-100' : 'opacity-0'}`}
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
          <h2 className="text-4xl font-serif text-brand-maroon dark:text-brand-gold mb-4 text-center">Guru Kripa Shortz</h2>
          <a 
            href="https://www.instagram.com/anurag.singhindoliya?igsh=MWNzemdwc3dkMm96ZA==" 
            target="_blank"
            rel="noopener noreferrer"
            title="Discover More"
            aria-label="Discover more on Instagram"
            className="flex justify-center items-center mb-12 group cursor-pointer"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
            <svg className="ornamental-divider w-16 h-16 mx-4 text-brand-maroon/80 dark:text-brand-gold/80 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                <path d="M50 15 a 20 20 0 0 1 0 70 a 20 20 0 0 1 0 -70" stroke="currentColor" strokeWidth="1"/>
                <path d="M15 50 a 20 20 0 0 1 70 0 a 20 20 0 0 1 -70 0" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5"/>
                <path d="M50,25 A25,25,0,1,1,25,50" stroke="currentColor" strokeWidth="2" />
                <path d="M50,25 A25,25,0,1,0,75,50" stroke="currentColor" strokeWidth="2" />
                <path d="M50,75 A25,25,0,1,1,75,50" stroke="currentColor" strokeWidth="2" />
                <path d="M50,75 A25,25,0,1,0,25,50" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="currentColor" className="pulse-center" />
            </svg>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-brand-maroon/50 to-brand-maroon/50 dark:via-brand-gold/50 dark:to-brand-gold/50"></div>
          </a>
          
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
                  onWatchClick={handleWatchVideo}
                />
              </div>
            ))}
          </div>
        </section>

      </main>

      {playingVideoId && (
        <VideoPlayerModal videoId={playingVideoId} onClose={handleClosePlayer} />
      )}
      {isGiftModalOpen && (
        <GiftModal 
          onClose={closeGiftModal} 
          instagramUrl="https://www.instagram.com/anurag.singhindoliya?igsh=MWNzemdwc3dkMm96ZA=="
        />
      )}
    </div>
  );
};

export default App;