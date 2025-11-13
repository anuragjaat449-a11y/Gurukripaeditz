import React, { useState } from 'react';

interface StarRatingInputProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={starValue}
            className={`transition-transform duration-200 ease-in-out text-4xl ${
              starValue <= (hover || rating) ? 'text-brand-gold scale-125' : 'text-gray-400 dark:text-gray-600'
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${starValue} out of 5 stars`}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;