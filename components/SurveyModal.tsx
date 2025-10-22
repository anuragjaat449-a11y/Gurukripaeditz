import React, { useState, useEffect } from 'react';
import StarRatingInput from './StarRatingInput';
import { useLanguage } from '../contexts/LanguageContext';

export interface SurveyData {
  rating: number;
  comments: string;
}

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SurveyData) => void;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [showThanks, setShowThanks] = useState(false);
  const { t } = useLanguage();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setShowThanks(false); // Reset for next time
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    onSubmit({ rating, comments });
    setShowThanks(true);
    setTimeout(handleClose, 1500); // Show thanks message then close
  };

  if (!isOpen) return null;

  return (
    // This div acts as an invisible full-screen click-away listener.
    <div
      className="fixed inset-0 z-40"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* This is the actual popover content. */}
      <div
        className="fixed bottom-24 right-6 w-full max-w-sm z-50"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        style={{ animation: isClosing ? 'fade-out-down 0.3s ease-in forwards' : 'fade-in-up 0.3s ease-out forwards' }}
      >
        <div className="bg-brand-cream dark:bg-gray-900 border-2 border-brand-maroon/40 dark:border-brand-gold/40 rounded-lg p-6 text-center shadow-2xl dark:shadow-black/50">
            {showThanks ? (
                <div className="flex flex-col items-center justify-center h-56">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-maroon dark:text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-serif text-brand-maroon dark:text-brand-gold mt-4">{t.thankYou}</h2>
                    <p className="mt-2 text-black/80 dark:text-white/80">{t.feedbackAppreciated}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-serif text-brand-maroon dark:text-brand-gold mb-2">{t.surveyTitle}</h2>
                    <p className="mb-4 text-sm text-black/70 dark:text-white/70">{t.surveySubtitle}</p>

                    <div className="mb-4 flex justify-center">
                        <StarRatingInput rating={rating} setRating={setRating} />
                    </div>

                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder={t.surveyPlaceholder}
                        className="w-full h-24 p-3 rounded-md bg-white dark:bg-gray-800 border border-brand-maroon/30 dark:border-brand-gold/40 focus:ring-2 focus:ring-brand-gold focus:outline-none transition"
                    />

                    <div className="mt-4 flex justify-center space-x-4">
                        <button type="button" onClick={handleClose} className="py-2 px-8 rounded-md text-sm font-bold btn-premium-secondary">
                        {t.cancel}
                        </button>
                        <button
                        type="submit"
                        disabled={rating === 0}
                        className={`py-2 px-8 rounded-md text-sm font-bold ${rating === 0 ? 'btn-disabled' : 'btn-premium'}`}
                        >
                        {t.submit}
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;
