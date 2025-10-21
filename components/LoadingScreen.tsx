import React from 'react';

const LoadingScreen: React.FC = () => {
  // This is a placeholder component.
  // It can be built out with a loading animation later.
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-brand-cream dark:bg-black">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-maroon dark:border-brand-gold"></div>
    </div>
  );
};

export default LoadingScreen;
