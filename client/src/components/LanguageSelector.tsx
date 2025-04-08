import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create an empty div for Google Translate if it doesn't exist
    if (!document.getElementById('google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }
  }, []);

  if (!mounted) return null;

  const changeLanguage = (langCode: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
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
