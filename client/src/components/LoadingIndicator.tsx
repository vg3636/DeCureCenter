import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-brand-primary animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-brand-secondary animate-spin" style={{ animationDirection: 'reverse', opacity: 0.7 }}></div>
        <div className="mt-4 text-center text-brand-primary font-medium">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingIndicator;