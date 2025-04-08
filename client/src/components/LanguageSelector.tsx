import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

const LanguageSelector = () => {
  const [mounted, setMounted] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Function to load the Google Translate script
  const loadGoogleTranslateScript = () => {
    if (document.getElementById('google-translate-script')) {
      setScriptLoaded(true);
      return;
    }

    // Create Google Translate element container
    if (!document.getElementById('google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }

    // Define the initialization function
    window.googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false,
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
      setScriptLoaded(true);
    };

    // Create and load the script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    setMounted(true);
    loadGoogleTranslateScript();
  }, []);

  if (!mounted) return null;

  const changeLanguage = (langCode: string) => {
    if (!scriptLoaded) {
      loadGoogleTranslateScript();
      setTimeout(() => changeLanguage(langCode), 1000);
      return;
    }

    // Try both potential selectors
    const selectElement = 
      document.querySelector('.goog-te-combo') as HTMLSelectElement || 
      document.querySelector('.VIpgJd-ZVi9od-xl07Ob-lTBxed') as HTMLSelectElement;
    
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      console.log('Google Translate element not found');
      // If selector not found, try using the direct API
      try {
        const gtCombo = document.getElementsByClassName('goog-te-combo')[0] as HTMLSelectElement;
        if (gtCombo) {
          gtCombo.value = langCode;
          gtCombo.dispatchEvent(new Event('change'));
        }
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Select language">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('hi')}>Hindi</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('fr')}>French</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('es')}>Spanish</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('de')}>German</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('zh-CN')}>Chinese</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ar')}>Arabic</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ja')}>Japanese</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default LanguageSelector;
