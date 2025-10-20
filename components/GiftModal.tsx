
import React, { useEffect, useState } from 'react';

interface GiftModalProps {
  onClose: () => void;
  instagramUrl: string;
}

const GiftModal: React.FC<GiftModalProps> = ({ onClose, instagramUrl }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
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

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      style={{ animation: isClosing ? 'fade-out-down 0.3s ease-in' : 'fade-in-up 0.3s ease-out' }}
    >
      <div 
        className="glass-card relative w-full max-w-md bg-brand-cream dark:bg-black/20 rounded-lg shadow-2xl shadow-brand-maroon/20 dark:shadow-brand-gold/40 overflow-hidden p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 md:top-2 md:right-2 z-10 w-10 h-10 rounded-full bg-brand-maroon dark:bg-brand-gold text-white dark:text-brand-maroon flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-brand-maroon/10 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold">
          {/* Feedback Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <h2 className="text-3xl font-serif text-brand-maroon dark:text-brand-gold mb-3">Your Feedback</h2>
        <p className="text-md text-black/70 dark:text-white/80 mb-6">
          Follow my Instagram account and DM me the feedback of my site.
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose} // Close modal with animation on click
          className="inline-flex items-center justify-center py-3 px-8 rounded-md text-lg font-bold btn-premium"
        >
          {/* Instagram Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.483.011-4.69.068-2.61.12-3.843 1.349-3.963 3.963-.057 1.206-.068 1.572-.068 4.69s.011 3.483.068 4.69c.12 2.61 1.349 3.843 3.963 3.963 1.207.057 1.572.068 4.69.068s3.483-.011 4.69-.068c2.61-.12 3.843-1.349 3.963-3.963.057-1.207.068-1.572.068-4.69s-.011-3.483-.068-4.69c-.12-2.61-1.349-3.843-3.963-3.963-1.207-.057-1.572-.068-4.69-.068zm0 3.882c-2.39 0-4.338 1.948-4.338 4.338s1.948 4.338 4.338 4.338 4.338-1.948 4.338-4.338-1.948-4.338-4.338-4.338zm0 7.238c-1.597 0-2.9-1.303-2.9-2.9s1.303-2.9 2.9-2.9 2.9 1.303 2.9 2.9-1.303 2.9-2.9 2.9zm4.333-8.032c-.596 0-1.078.482-1.078 1.078s.482 1.078 1.078 1.078 1.078-.482 1.078-1.078-.482-1.078-1.078-1.078z"/>
          </svg>
          Go to Instagram
        </a>

      </div>
    </div>
  );
};

export default GiftModal;