import React from 'react';

interface AverageRatingDisplayProps {
  rating: number;
  count: number;
}

const Star: React.FC<{ type: 'full' | 'half' | 'empty' }> = ({ type }) => {
  const StarIcon = ({ path }: { path: string }) => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );

  switch (type) {
    case 'full':
      return <StarIcon path="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />;
    case 'half':
      return <StarIcon path="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292zM10 5.103v9.336l2.033 1.478-0.77-2.385 1.728-1.25-2.4-.21-1.07-2.18-1.07 2.18-2.4.21 1.727 1.25-0.77 2.385L10 14.439V5.103z" />;
    case 'empty':
    default:
      return <StarIcon path="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />;
  }
};

const AverageRatingDisplay: React.FC<AverageRatingDisplayProps> = ({ rating, count }) => {
  if (count === 0) {
    return (
      <div className="flex items-center text-sm text-black/60 dark:text-white/70">
        Be the first to rate this app!
      </div>
    );
  }

  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Rounds to nearest 0.5
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<Star key={i} type="full" />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<Star key={i} type="half" />);
    } else {
      stars.push(<Star key={i} type="empty" />);
    }
  }

  return (
    <div className="flex items-center space-x-2 text-brand-maroon dark:text-brand-gold">
      <div className="flex">{stars}</div>
      <span className="text-sm font-semibold text-black/70 dark:text-white/80">
        {rating.toFixed(1)} ({count} {count === 1 ? 'rating' : 'ratings'})
      </span>
    </div>
  );
};

export default AverageRatingDisplay;
