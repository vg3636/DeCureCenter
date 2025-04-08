import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useTranslation } from './LanguageSelector';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="consultation" className="py-16 cta-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {t('Ready to Take the First Step?')}
        </h2>
        <p className="mb-8 max-w-2xl mx-auto opacity-85">
          {t('Schedule your consultation today and let us help you restore your confidence with a custom prosthetic eye solution.')}
        </p>
        <Link href="/contact">
          <Button className="bg-white text-[#2d4a63] hover:bg-gray-100 font-medium py-3 px-8 rounded">
            {t('Book Your Consultation')}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
