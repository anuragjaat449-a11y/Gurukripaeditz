import React, { useEffect, useState } from 'react';

interface VideoPlayerModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ videoId, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
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

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the video player
      >
        <div className="video-responsive">
          <iframe
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 md:top-2 md:right-2 z-10 w-10 h-10 rounded-full bg-brand-maroon dark:bg-brand-gold text-white dark:text-brand-maroon flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          aria-label="Close video player"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerModal;