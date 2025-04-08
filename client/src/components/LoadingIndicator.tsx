import React, { useEffect, useState, memo, useMemo } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from './LanguageSelector';

interface LoadingIndicatorProps {
  message?: string;
  fullScreen?: boolean;
}

// Optimized Loading Indicator Component
const LoadingIndicator: React.FC<LoadingIndicatorProps> = memo(({ 
  message,
  fullScreen = false
}) => {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Memoize service page check to avoid recalculation
  const isServicePage = useMemo(() => 
    location.startsWith('/services/'), [location]);
    
  // Set initial loading text immediately rather than in useEffect
  const defaultText = isServicePage && !message 
    ? 'Loading service details...' 
    : 'Loading...';
    
  const [loadingText] = useState(message || t(defaultText));
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  // Only run the timeout once
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeElapsed(1);
    }, 1500); // Reduced from 2000ms for better user experience
    
    return () => clearTimeout(timer);
  }, []); // Empty deps array means this runs once on mount

  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[50vh]'}`}>
      <div className="relative">
        <div className="h-14 w-14 rounded-full border-t-3 border-b-3 border-primary-600 animate-spin"></div>
        <div 
          className="absolute top-0 left-0 h-14 w-14 rounded-full border-t-3 border-b-3 border-primary-400 animate-spin" 
          style={{ animationDirection: 'reverse', opacity: 0.6, animationDuration: '1s' }}
        ></div>
      </div>
      <div className="mt-3 text-center text-primary-700 font-medium">
        {loadingText}
      </div>
      {timeElapsed > 0 && isServicePage && (
        <div className="mt-2 text-xs text-gray-500 max-w-md text-center px-4">
          {t('Loading content...')}
        </div>
      )}
    </div>
  );
});

export default LoadingIndicator;