import React, { useState, useEffect } from 'react';
import AverageRatingDisplay from './AverageRatingDisplay';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  rating: number;
  count: number;
  position: { top: number; left: number } | null;
}

const RatingModal: React.FC<RatingModalProps> = ({ isOpen, onClose, rating, count, position }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset for next open
    }, 300); // Match animation duration
  };

  if (!isOpen || !position) {
    return null;
  }

  return (
    // Click-away listener
    <div
      className="fixed inset-0 z-50"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Positioned container with forced dark theme */}
      <div
        className="dark absolute"
        style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Animated content */}
        <div
          className="glass-card rounded-lg p-6 w-80 max-w-sm relative text-center"
          style={{ animation: isClosing ? 'pop-out-to-top 0.3s ease-in forwards' : 'pop-in-from-top 0.3s ease-out forwards' }}
        >
          <h2 className="text-3xl font-serif text-brand-gold mb-4">
            Community Rating
          </h2>
          <p className="mb-6 text-white/80">
            This is the average rating provided by our community. Thank you!
          </p>
          <div className="flex items-center justify-center scale-125">
            <AverageRatingDisplay rating={rating} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;