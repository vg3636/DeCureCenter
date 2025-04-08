import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

// Language options for our custom translation dropdown
const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ja', name: 'Japanese' }
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const handleChangeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    if (langCode === 'en') {
      // If English, reset the page to original content
      window.location.reload();
      return;
    }
    
    // Create the URL for the translation API
    const currentUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?sl=auto&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`;
    
    // Open in a new tab with translation
    window.open(translateUrl, '_blank');
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Select language" className="bg-brand-gradient text-white hover:opacity-90">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="border-brand-light">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={currentLang === lang.code ? "bg-brand-primary/10 text-brand-primary font-medium" : ""}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
