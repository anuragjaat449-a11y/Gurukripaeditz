import React, { useEffect, useState } from 'react';

interface VideoPlayerModalProps {
  videoId: string;
  onClose: () => void;
  onMinimize: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ videoId, onClose, onMinimize }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [origin, setOrigin] = useState<string | null>(null);

  useEffect(() => {
    // Set origin on the client side to avoid SSR issues and ensure window is defined.
    // This is crucial for YouTube's embedded player to work correctly.
    setOrigin(window.location.origin);

    // Add class to body to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  };

  if (!videoId) return null;

  // Render a loader while waiting for the origin to be set.
  // This prevents the iframe from attempting to load with an incomplete src, which can cause error 153.
  if (!origin) {
    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-gold"></div>
      </div>
    );
  }

  // Construct videoSrc only when origin is available.
  const videoSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      style={{ animation: isClosing ? 'fade-out-down 0.3s ease-in' : 'fade-in-up 0.3s ease-out' }}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl shadow-brand-maroon/20 dark:shadow-brand-gold/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
      >
        <div className="video-responsive">
          <iframe
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="absolute top-2 right-2 z-10 flex items-center space-x-2">
            <button
                onClick={onMinimize}
                className="w-10 h-10 rounded-full bg-brand-maroon dark:bg-brand-gold text-white dark:text-brand-maroon flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-label="Minimize video player"
                title="Minimize"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
            </button>
             <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-brand-maroon dark:bg-brand-gold text-white dark:text-brand-maroon flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-label="Close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;