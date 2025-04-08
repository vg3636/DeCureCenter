import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { useTranslation } from './LanguageSelector';

// Create a context to keep track of whether we should refresh all translations
const TranslationRefreshContext = createContext<{
  forceRefresh: number;
  triggerRefresh: () => void;
}>({
  forceRefresh: 0,
  triggerRefresh: () => {}
});

/**
 * This provider ensures all translations are refreshed when language changes
 */
export const TranslationRefreshProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [forceRefresh, setForceRefresh] = useState(0);
  const triggerRefresh = useCallback(() => {
    setForceRefresh(prev => prev + 1);
  }, []);

  return (
    <TranslationRefreshContext.Provider value={{ forceRefresh, triggerRefresh }}>
      {children}
    </TranslationRefreshContext.Provider>
  );
};

/**
 * Higher-Order Component that wraps any component and ensures translation
 * context is applied to all its children
 */
export const withTranslation = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithTranslation: React.FC<P> = (props) => {
    // Access translation context
    const { t, currentLang } = useTranslation();
    const { triggerRefresh } = useContext(TranslationRefreshContext);
    
    useEffect(() => {
      // Trigger translation refresh throughout the app
      triggerRefresh();
      
      // Force document to update with new language
      document.documentElement.lang = currentLang;
      
      // Apply RTL styling for Arabic language
      if (currentLang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }, [currentLang, triggerRefresh]);
    
    return <Component {...props} />;
  };
  
  return WithTranslation;
};

/**
 * A React Context Provider that ensures translation context is applied
 * to all text content within it
 */
export const TranslatedContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { t } = useTranslation();
  const { forceRefresh } = useContext(TranslationRefreshContext);
  
  // Add forceRefresh to deps to ensure re-render when language changes
  const memoizedChildren = React.useMemo(() => {
    // Process all child text nodes to apply translation
    const processChildren = (children: React.ReactNode): React.ReactNode => {
      return React.Children.map(children, (child, index) => {
        // If child is a string, translate it
        if (typeof child === 'string') {
          return <span className="inline" key={`${index}-${forceRefresh}`}>{t(child)}</span>;
        }
        
        // If child is a React element with children, process those too
        if (React.isValidElement(child) && child.props.children) {
          let translatedChildren;
          
          // Handle different types of children
          if (typeof child.props.children === 'string') {
            // Direct string child
            translatedChildren = <span className="inline" key={`${index}-${forceRefresh}`}>{t(child.props.children)}</span>;
          } else if (React.Children.count(child.props.children) > 0) {
            // Multiple children or nested structure
            translatedChildren = processChildren(child.props.children);
          } else {
            // Not a string or has no children, return as is
            translatedChildren = child.props.children;
          }
          
          // Clone the element with translated children
          return React.cloneElement(child, {
            ...child.props,
            key: `${child.key || index}-${forceRefresh}`,
            children: translatedChildren,
          });
        }
        
        // If not a string or React element with children, return as is
        return child;
      });
    };
    
    return processChildren(children);
  }, [children, t, forceRefresh]);
  
  return <div className="contents">{memoizedChildren}</div>;
};

/**
 * A simple component to translate a single string
 * This will auto-update when language changes
 */
export const T: React.FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();
  const { forceRefresh } = useContext(TranslationRefreshContext);
  
  // Include forceRefresh to ensure this re-renders when language changes
  const content = t(text);
  return <span className="inline" key={forceRefresh}>{content}</span>;
};