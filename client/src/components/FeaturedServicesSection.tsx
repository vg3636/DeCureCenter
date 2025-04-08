import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '../lib/constants';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from './LanguageSelector';

const FeaturedServicesSection = () => {
  const { t } = useTranslation();
  
  // Handle image error by replacing with a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://placehold.co/800x500/2d4a63/ffffff?text=${encodeURIComponent(target.alt || 'De Cure Center')}`;
    target.onerror = null; // Prevent infinite error loops
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-center">{t('Our Services')}</h2>
          <p className="section-subtitle text-center">
            {t('Explore our medical services')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card 
              key={service.slug} 
              className="service-card overflow-hidden shadow-sm hover:shadow-xl border border-gray-100"
            >
              <div className="h-48 overflow-hidden bg-neutral-50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2d4a63]/5 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="service-image w-full h-full object-cover" 
                  onError={handleImageError}
                />
              </div>
              <CardContent className="p-5">
                <h3 className="service-card-title text-xl font-semibold text-brand-primary mb-3">{service.name}</h3>
                <p className="text-brand-light mb-4 line-clamp-3">{service.excerpt}</p>
                <Link href={`/services/${service.slug}`} data-nav-item>
                  <Button 
                    variant="outline" 
                    className="service-button w-full group border-brand-light transition-all duration-300"
                  >
                    {t('Learn More')}
                    <ChevronRight className="service-icon ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;