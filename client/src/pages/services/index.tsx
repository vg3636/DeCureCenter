import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../lib/constants';

const ServicesIndex = () => {
  // Handle image error by replacing with a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://placehold.co/800x500/2d4a63/ffffff?text=${encodeURIComponent(target.alt || 'De Cure Center')}`;
    target.onerror = null; // Prevent infinite error loops
  };

  return (
    <>
      <Helmet>
        <title>Services - De Cure Center</title>
        <meta name="description" content="Explore our comprehensive range of medical services including ocular prosthetics, alternative medicine, medical tourism, and more." />
      </Helmet>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">Our Services</h1>
            <p className="text-lg text-brand-light max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card 
                key={service.slug} 
                className="service-card overflow-hidden border border-gray-100"
              >
                <CardHeader className="pb-2 border-b border-gray-50">
                  <CardTitle className="service-card-title text-xl text-brand-primary">{service.name}</CardTitle>
                  <CardDescription className="text-brand-light">{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-40 mb-4 overflow-hidden rounded-md">
                    <img
                      src={service.image}
                      alt={service.name}
                      onError={handleImageError}
                      className="service-image w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-brand-light mb-4 line-clamp-3">{service.excerpt}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button 
                      className="service-button w-full flex items-center justify-center border-brand-light" 
                      variant="outline"
                    >
                      Learn More <ArrowRight className="service-icon ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-center">Our Approach to Care</h2>
            <p className="text-brand-light mb-6">
              At De Cure Center, we believe in a holistic approach to healthcare. Our team of specialists works together to provide coordinated care that addresses all aspects of your health and wellbeing.
            </p>
            <p className="text-brand-light">
              Whether you're seeking specialized treatment or comprehensive medical services, we're committed to delivering exceptional care with compassion and precision.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServicesIndex;
