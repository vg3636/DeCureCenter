import { useState, useEffect, createContext, useContext } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

// Language options for our custom translation dropdown
const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'ar', name: 'Arabic' }
];

// Create language context for the entire application
export const LanguageContext = createContext({
  currentLang: 'en',
  setLanguage: (code: string) => {},
  t: (text: string) => text
});

// Sample translations - in a real app, these would come from an API or JSON files
const translations: Record<string, Record<string, string>> = {
  'hi': {
    'Book Appointment': 'अपॉइंटमेंट बुक करें',
    'Our Services': 'हमारी सेवाएँ',
    'About': 'हमारे बारे में',
    'Contact': 'संपर्क',
    'Services': 'सेवाएँ',
    'FAQ': 'सामान्य प्रश्न',
    'Home': 'होम'
  },
  'fr': {
    'Book Appointment': 'Prendre Rendez-vous',
    'Our Services': 'Nos Services',
    'About': 'À Propos',
    'Contact': 'Contact',
    'Services': 'Services',
    'FAQ': 'FAQ',
    'Home': 'Accueil'
  },
  'es': {
    'Book Appointment': 'Reservar Cita',
    'Our Services': 'Nuestros Servicios',
    'About': 'Acerca de',
    'Contact': 'Contacto',
    'Services': 'Servicios',
    'FAQ': 'Preguntas Frecuentes',
    'Home': 'Inicio'
  },
  'ar': {
    'Book Appointment': 'حجز موعد',
    'Our Services': 'خدماتنا',
    'About': 'معلومات عنا',
    'Contact': 'اتصل بنا',
    'Services': 'الخدمات',
    'FAQ': 'الأسئلة الشائعة',
    'Home': 'الصفحة الرئيسية'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    // Get language from localStorage or default to English
    return localStorage.getItem('preferred-language') || 'en';
  });

  useEffect(() => {
    // Store language preference
    localStorage.setItem('preferred-language', currentLang);
    
    // Handle RTL languages
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Add a class to the body for language-specific styling
    document.body.className = document.body.className
      .replace(/lang-\w+/, '')
      .trim() + ` lang-${currentLang}`;
      
  }, [currentLang]);
  
  // Translation function
  const t = (text: string) => {
    if (currentLang === 'en') return text;
    return translations[currentLang]?.[text] || text;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLang, 
        setLanguage: setCurrentLang,
        t 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use translations
export const useTranslation = () => {
  return useContext(LanguageContext);
};

const LanguageSelector = () => {
  const { currentLang, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Select language" className="text-gray-600 hover:text-brand-primary">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
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
