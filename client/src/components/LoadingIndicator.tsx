import React, { useEffect, useState, memo } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from './LanguageSelector';

interface LoadingIndicatorProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = memo(({ 
  message,
  fullScreen = false
}) => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [loadingText, setLoadingText] = useState(message || t('Loading...'));
  const [timeElapsed, setTimeElapsed] = useState(0);
  const isServicePage = location.startsWith('/services/');
  
  // Initialize with appropriate message based on page type
  useEffect(() => {
    if (isServicePage && !message) {
      setLoadingText(t('Loading service details...'));
    }
  }, [isServicePage, message, t]);
  
  // If loading takes more than 2 seconds, show a more detailed message
  useEffect(() => {
    // Only set additional timers if still loading after 2 seconds
    if (timeElapsed === 0) {
      const timer = setTimeout(() => {
        setTimeElapsed(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [timeElapsed]);

  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[60vh]'}`}>
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-600 animate-spin"></div>
        <div 
          className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-400 animate-spin" 
          style={{ animationDirection: 'reverse', opacity: 0.7, animationDuration: '1.2s' }}
        ></div>
      </div>
      <div className="mt-4 text-center text-primary-700 font-medium">
        {loadingText}
      </div>
      {timeElapsed > 0 && isServicePage && (
        <div className="mt-2 text-sm text-gray-500 max-w-md text-center px-4">
          {t('The first load of service pages may take a moment. This content will be cached for faster access next time.')}
        </div>
      )}
    </div>
  );
});

export default LoadingIndicator;