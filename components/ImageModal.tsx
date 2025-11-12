

import React, { useEffect, useState } from 'react';
import type { GalleryImage } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ImageModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t, language } = useLanguage();
  
  const image = currentIndex !== null ? images[currentIndex] : null;

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
        // Fix: Call onNext from props instead of the undefined handleNext.
        if (e.key === 'ArrowRight') onNext();
        // Fix: Call onPrev from props instead of the undefined handlePrev.
        if (e.key === 'ArrowLeft') onPrev();
      };
      window.addEventListener('keydown', handleKeyDown);
      // Preload next and previous images
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      new Image().src = images[nextIndex].fullUrl;
      new Image().src = images[prevIndex].fullUrl;
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [currentIndex, onNext, onPrev, images]);

  useEffect(() => {
    // Reset loaded state when image changes
    setImageLoaded(false);
  }, [currentIndex]);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };
  
  if (currentIndex === null || !image) return null;

  const animationClass = isClosing ? 'fade-out-down' : 'fade-in-up';

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      style={{ animation: `${animationClass} 0.3s ease-out` }}
    >
        <div 
          className="relative max-w-full max-h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-brand-gold"></div>
                </div>
            )}
             <img 
                src={image.fullUrl} 
                alt={language === 'hi' ? image.altHi : image.altEn}
                className={`max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-black/50 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
            />
          </div>

           <p className="mt-4 text-white/80 text-center">{language === 'hi' ? image.altHi : image.altEn}</p>
        </div>


        <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white z-10"
            aria-label={t.close}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            aria-label={t.previous}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            aria-label={t.next}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
  );
};
export default ImageModal;
