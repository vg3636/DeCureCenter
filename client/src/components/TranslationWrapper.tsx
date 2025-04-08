import React, { useEffect } from 'react';
import { useTranslation } from './LanguageSelector';

/**
 * Higher-Order Component that wraps any component and ensures translation
 * context is applied to all its children
 */
export const withTranslation = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithTranslation: React.FC<P> = (props) => {
    // Access translation function
    const { t, currentLang } = useTranslation();
    
    useEffect(() => {
      // This helps identify when language changes for debugging
      console.log('Language changed to:', currentLang);
      
      // Force re-render of component when language changes
      // by adding a timestamp to document title temporarily
      const originalTitle = document.title;
      document.title = `${originalTitle} [${Date.now()}]`;
      setTimeout(() => {
        document.title = originalTitle;
      }, 10);
    }, [currentLang]);
    
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
  
  // Process all child text nodes to apply translation
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      // If child is a string, translate it
      if (typeof child === 'string') {
        return t(child);
      }
      
      // If child is a React element with children, process those too
      if (React.isValidElement(child) && child.props.children) {
        let translatedChildren;
        
        // Handle different types of children
        if (typeof child.props.children === 'string') {
          // Direct string child
          translatedChildren = t(child.props.children);
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
          children: translatedChildren,
        });
      }
      
      // If not a string or React element with children, return as is
      return child;
    });
  };
  
  return <>{processChildren(children)}</>;
};

/**
 * A simple component to translate a single string
 */
export const T: React.FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();
  return <>{t(text)}</>;
};