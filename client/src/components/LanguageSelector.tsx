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

// Define context interface
interface LanguageContextType {
  currentLang: string;
  setLanguage: (code: string) => void;
  t: (text: string) => string;
}

// Create language context for the entire application
export const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  setLanguage: (code: string) => {},
  t: (text: string) => text
});

// Sample translations - in a real app, these would come from an API or JSON files
const translations: Record<string, Record<string, string>> = {
  'hi': {
    'Book Appointment': 'अपॉइंटमेंट बुक करें',
    'Book Your Consultation': 'अपना परामर्श बुक करें',
    'Our Services': 'हमारी सेवाएँ',
    'Specialized eye care services at De Cure Center including ocular prosthetics, surgical procedures, and treatments for various eye conditions.': 'डी क्योर सेंटर में विशेष नेत्र देखभाल सेवाएं जिनमें ऑक्युलर प्रोस्थेटिक्स, सर्जिकल प्रक्रियाएं और विभिन्न नेत्र स्थितियों के लिए उपचार शामिल हैं।',
    'Specialized eye care and ocular prosthetics': 'विशेष नेत्र देखभाल और ऑक्युलर प्रोस्थेटिक्स',
    'About': 'हमारे बारे में',
    'Contact': 'संपर्क',
    'Services': 'सेवाएँ',
    'FAQ': 'सामान्य प्रश्न',
    'Home': 'होम',
    'Why Choose De Cure Center': 'डी क्योर सेंटर को क्यों चुनें',
    'Ready to Take the First Step?': 'पहला कदम उठाने के लिए तैयार हैं?',
    'Schedule your consultation today and let us help you restore your confidence with a custom prosthetic eye solution.': 'आज ही अपना परामर्श निर्धारित करें और हम आपको एक कस्टम प्रोस्थेटिक आई सॉल्यूशन के साथ आपका आत्मविश्वास बहाल करने में मदद करेंगे।',
    'Footer': 'फुटर',
    'Contact Us': 'हमसे संपर्क करें',
    'Submit': 'जमा करें',
    'Gallery': 'गैलरी',
    'Featured Services': 'विशेष सेवाएं',
    'Explore our medical services': 'हमारी चिकित्सा सेवाओं का अन्वेषण करें',
    'Learn More': 'और जानें',
    'Working Hours': 'कार्य समय',
    'Monday - Friday': 'सोमवार - शुक्रवार',
    'Saturday': 'शनिवार',
    'Sunday': 'रविवार',
    'Closed': 'बंद',
    'All rights reserved.': 'सर्वाधिकार सुरक्षित।',
    'Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.': 'व्यापक चिकित्सा देखभाल में अग्रणी विशेषज्ञ जिनके पास 12 वर्षों से अधिक का अनुभव है जो हमारे रोगियों को स्वास्थ्य और आत्मविश्वास वापस लाते हैं।',
    'Experience excellence in medical care with our expert team and advanced technology.': 'हमारी विशेषज्ञ टीम और उन्नत तकनीक के साथ चिकित्सा देखभाल में उत्कृष्टता का अनुभव करें।',
    'Natural Appearance': 'प्राकृतिक उपस्थिति',
    'Our specialists ensure treatments that maintain your natural look and restore functionality.': 'हमारे विशेषज्ञ यह सुनिश्चित करते हैं कि उपचार आपके प्राकृतिक रूप को बनाए रखें और कार्यक्षमता को बहाल करें।',
    'Comfortable Fit': 'आरामदायक फिट',
    'Custom-tailored care ensures maximum comfort and satisfaction across all our services.': 'कस्टम-टेलर्ड देखभाल हमारी सभी सेवाओं में अधिकतम आराम और संतुष्टि सुनिश्चित करती है।',
    'Expert Care': 'विशेषज्ञ देखभाल',
    'Backed by 12+ years of specialized experience in comprehensive medical services.': 'व्यापक चिकित्सा सेवाओं में 12+ वर्षों के विशेषज्ञ अनुभव द्वारा समर्थित।',
    'Ophthalmology': 'नेत्र विज्ञान',
    'Vision Rehabilitation': 'दृष्टि पुनर्वास',
    'Ocular Oncology': 'नेत्र ऑन्कोलॉजी',
    'Prosthetic Services': 'प्रोस्थेटिक सेवाएँ',
    'Opticals': 'ऑप्टिकल्स',
    'Low Vision Aids': 'कम दृष्टि सहायता',
    'Eye Plastic Surgery': 'नेत्र प्लास्टिक सर्जरी',
    'Contact Lens': 'कॉन्टैक्ट लेंस',
    'Hospitality': 'आतिथ्य सेवा',
    'Medical Checkup': 'चिकित्सा जांच',
    'Medical Tourism': 'चिकित्सा पर्यटन',
    'Medical Advisory': 'चिकित्सा सलाह',
    'Cosmetology & Aesthetics': 'कॉस्मेटोलॉजी और सौंदर्य',
    'Plastic Surgery': 'प्लास्टिक सर्जरी',
    'Oncology': 'ऑन्कोलॉजी',
    'Alternative Medicine': 'वैकल्पिक चिकित्सा'
  },
  'fr': {
    'Book Appointment': 'Prendre Rendez-vous',
    'Book Your Consultation': 'Réservez Votre Consultation',
    'Our Services': 'Nos Services',
    'Specialized eye care services at De Cure Center including ocular prosthetics, surgical procedures, and treatments for various eye conditions.': 'Services de soins oculaires spécialisés au De Cure Center, comprenant des prothèses oculaires, des procédures chirurgicales et des traitements pour diverses affections oculaires.',
    'Specialized eye care and ocular prosthetics': 'Soins oculaires spécialisés et prothèses oculaires',
    'About': 'À Propos',
    'Contact': 'Contact',
    'Services': 'Services',
    'FAQ': 'FAQ',
    'Home': 'Accueil',
    'Why Choose De Cure Center': 'Pourquoi Choisir De Cure Center',
    'Ready to Take the First Step?': 'Prêt à Faire le Premier Pas?',
    'Schedule your consultation today and let us help you restore your confidence with a custom prosthetic eye solution.': 'Planifiez votre consultation aujourd\'hui et laissez-nous vous aider à retrouver votre confiance avec une solution d\'œil prothétique personnalisée.',
    'Footer': 'Pied de page',
    'Contact Us': 'Contactez-nous',
    'Submit': 'Soumettre',
    'Gallery': 'Galerie',
    'Featured Services': 'Services Vedettes',
    'Explore our medical services': 'Explorez nos services médicaux',
    'Learn More': 'En Savoir Plus',
    'Working Hours': 'Heures d\'ouverture',
    'Monday - Friday': 'Lundi - Vendredi',
    'Saturday': 'Samedi',
    'Sunday': 'Dimanche',
    'Closed': 'Fermé',
    'All rights reserved.': 'Tous droits réservés.',
    'Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.': 'Spécialistes de premier plan dans les soins médicaux complets avec plus de 12 ans d\'expérience redonnant santé et confiance à nos patients.',
    'Experience excellence in medical care with our expert team and advanced technology.': 'Découvrez l\'excellence des soins médicaux avec notre équipe d\'experts et notre technologie de pointe.',
    'Natural Appearance': 'Apparence Naturelle',
    'Our specialists ensure treatments that maintain your natural look and restore functionality.': 'Nos spécialistes garantissent des traitements qui préservent votre apparence naturelle et restaurent la fonctionnalité.',
    'Comfortable Fit': 'Ajustement Confortable',
    'Custom-tailored care ensures maximum comfort and satisfaction across all our services.': 'Des soins sur mesure garantissent un confort et une satisfaction maximale pour tous nos services.',
    'Expert Care': 'Soins Experts',
    'Backed by 12+ years of specialized experience in comprehensive medical services.': 'Soutenu par plus de 12 ans d\'expérience spécialisée dans les services médicaux complets.',
    'Ophthalmology': 'Ophtalmologie',
    'Vision Rehabilitation': 'Réhabilitation Visuelle',
    'Ocular Oncology': 'Oncologie Oculaire',
    'Prosthetic Services': 'Services Prothétiques',
    'Opticals': 'Optiques',
    'Low Vision Aids': 'Aides pour Basse Vision',
    'Eye Plastic Surgery': 'Chirurgie Plastique des Yeux',
    'Contact Lens': 'Lentilles de Contact',
    'Hospitality': 'Hospitalité',
    'Medical Checkup': 'Bilan Médical',
    'Medical Tourism': 'Tourisme Médical',
    'Medical Advisory': 'Conseil Médical',
    'Cosmetology & Aesthetics': 'Cosmétologie et Esthétique',
    'Plastic Surgery': 'Chirurgie Plastique',
    'Oncology': 'Oncologie',
    'Alternative Medicine': 'Médecine Alternative'
  },
  'es': {
    'Book Appointment': 'Reservar Cita',
    'Book Your Consultation': 'Reserve Su Consulta',
    'Our Services': 'Nuestros Servicios',
    'Specialized eye care services at De Cure Center including ocular prosthetics, surgical procedures, and treatments for various eye conditions.': 'Servicios especializados de cuidado ocular en De Cure Center que incluyen prótesis oculares, procedimientos quirúrgicos y tratamientos para diversas afecciones oculares.',
    'Specialized eye care and ocular prosthetics': 'Cuidado ocular especializado y prótesis oculares',
    'About': 'Acerca de',
    'Contact': 'Contacto',
    'Services': 'Servicios',
    'FAQ': 'Preguntas Frecuentes',
    'Home': 'Inicio',
    'Why Choose De Cure Center': '¿Por Qué Elegir De Cure Center?',
    'Ready to Take the First Step?': '¿Listo para Dar el Primer Paso?',
    'Schedule your consultation today and let us help you restore your confidence with a custom prosthetic eye solution.': 'Programe su consulta hoy y permítanos ayudarle a restaurar su confianza con una solución de ojo protésico personalizada.',
    'Footer': 'Pie de página',
    'Contact Us': 'Contáctenos',
    'Submit': 'Enviar',
    'Gallery': 'Galería',
    'Featured Services': 'Servicios Destacados',
    'Explore our medical services': 'Explore nuestros servicios médicos',
    'Learn More': 'Saber Más',
    'Working Hours': 'Horario de Trabajo',
    'Monday - Friday': 'Lunes - Viernes',
    'Saturday': 'Sábado',
    'Sunday': 'Domingo',
    'Closed': 'Cerrado',
    'All rights reserved.': 'Todos los derechos reservados.',
    'Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.': 'Especialistas líderes en atención médica integral con más de 12 años de experiencia devolviendo salud y confianza a nuestros pacientes.',
    'Experience excellence in medical care with our expert team and advanced technology.': 'Experimente la excelencia en atención médica con nuestro equipo de expertos y tecnología avanzada.',
    'Natural Appearance': 'Apariencia Natural',
    'Our specialists ensure treatments that maintain your natural look and restore functionality.': 'Nuestros especialistas garantizan tratamientos que mantienen su aspecto natural y restauran la funcionalidad.',
    'Comfortable Fit': 'Ajuste Cómodo',
    'Custom-tailored care ensures maximum comfort and satisfaction across all our services.': 'La atención personalizada garantiza el máximo confort y satisfacción en todos nuestros servicios.',
    'Expert Care': 'Atención Experta',
    'Backed by 12+ years of specialized experience in comprehensive medical services.': 'Respaldado por más de 12 años de experiencia especializada en servicios médicos integrales.',
    'Ophthalmology': 'Oftalmología',
    'Vision Rehabilitation': 'Rehabilitación Visual',
    'Ocular Oncology': 'Oncología Ocular',
    'Prosthetic Services': 'Servicios Protésicos',
    'Opticals': 'Óptica',
    'Low Vision Aids': 'Ayudas para Baja Visión',
    'Eye Plastic Surgery': 'Cirugía Plástica Ocular',
    'Contact Lens': 'Lentes de Contacto',
    'Hospitality': 'Hospitalidad',
    'Medical Checkup': 'Chequeo Médico',
    'Medical Tourism': 'Turismo Médico',
    'Medical Advisory': 'Asesoría Médica',
    'Cosmetology & Aesthetics': 'Cosmetología y Estética',
    'Plastic Surgery': 'Cirugía Plástica',
    'Oncology': 'Oncología',
    'Alternative Medicine': 'Medicina Alternativa'
  },
  'ar': {
    'Book Appointment': 'حجز موعد',
    'Book Your Consultation': 'احجز استشارتك',
    'Our Services': 'خدماتنا',
    'Specialized eye care services at De Cure Center including ocular prosthetics, surgical procedures, and treatments for various eye conditions.': 'خدمات رعاية العيون المتخصصة في مركز دي كيور بما في ذلك العيون الاصطناعية والإجراءات الجراحية وعلاجات مختلف حالات العيون.',
    'Specialized eye care and ocular prosthetics': 'رعاية العيون المتخصصة والعيون الاصطناعية',
    'About': 'معلومات عنا',
    'Contact': 'اتصل بنا',
    'Services': 'الخدمات',
    'FAQ': 'الأسئلة الشائعة',
    'Home': 'الصفحة الرئيسية',
    'Why Choose De Cure Center': 'لماذا تختار مركز دي كيور',
    'Ready to Take the First Step?': 'هل أنت مستعد لاتخاذ الخطوة الأولى؟',
    'Schedule your consultation today and let us help you restore your confidence with a custom prosthetic eye solution.': 'حدد موعد استشارتك اليوم ودعنا نساعدك على استعادة ثقتك بحل العين الاصطناعية المخصص.',
    'Footer': 'تذييل الصفحة',
    'Contact Us': 'اتصل بنا',
    'Submit': 'إرسال',
    'Gallery': 'معرض الصور',
    'Featured Services': 'الخدمات المميزة',
    'Explore our medical services': 'استكشف خدماتنا الطبية',
    'Learn More': 'اعرف المزيد',
    'Working Hours': 'ساعات العمل',
    'Monday - Friday': 'الاثنين - الجمعة',
    'Saturday': 'السبت',
    'Sunday': 'الأحد',
    'Closed': 'مغلق',
    'All rights reserved.': 'جميع الحقوق محفوظة.',
    'Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.': 'متخصصون رائدون في الرعاية الطبية الشاملة مع أكثر من 12 عامًا من الخبرة في إعادة الصحة والثقة إلى مرضانا.',
    'Experience excellence in medical care with our expert team and advanced technology.': 'اختبر التميز في الرعاية الطبية مع فريقنا من الخبراء والتكنولوجيا المتقدمة.',
    'Natural Appearance': 'مظهر طبيعي',
    'Our specialists ensure treatments that maintain your natural look and restore functionality.': 'يضمن المتخصصون لدينا علاجات تحافظ على مظهرك الطبيعي وتستعيد الوظائف.',
    'Comfortable Fit': 'ملاءمة مريحة',
    'Custom-tailored care ensures maximum comfort and satisfaction across all our services.': 'الرعاية المصممة خصيصًا تضمن أقصى قدر من الراحة والرضا في جميع خدماتنا.',
    'Expert Care': 'رعاية خبيرة',
    'Backed by 12+ years of specialized experience in comprehensive medical services.': 'مدعومة بأكثر من 12 عامًا من الخبرة المتخصصة في الخدمات الطبية الشاملة.',
    'Ophthalmology': 'طب العيون',
    'Vision Rehabilitation': 'إعادة تأهيل البصر',
    'Ocular Oncology': 'أورام العيون',
    'Prosthetic Services': 'خدمات الأطراف الاصطناعية',
    'Opticals': 'النظارات',
    'Low Vision Aids': 'مساعدات ضعف البصر',
    'Eye Plastic Surgery': 'جراحة تجميل العين',
    'Contact Lens': 'العدسات اللاصقة',
    'Hospitality': 'الضيافة',
    'Medical Checkup': 'الفحص الطبي',
    'Medical Tourism': 'السياحة الطبية',
    'Medical Advisory': 'الاستشارات الطبية',
    'Cosmetology & Aesthetics': 'التجميل والجماليات',
    'Plastic Surgery': 'الجراحة التجميلية',
    'Oncology': 'علم الأورام',
    'Alternative Medicine': 'الطب البديل'
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
