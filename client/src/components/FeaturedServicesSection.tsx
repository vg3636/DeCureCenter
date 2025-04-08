import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '../lib/constants';
import { ChevronRight } from 'lucide-react';

const FeaturedServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary-600 mb-3">Our Services</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            De Cure Center offers a comprehensive range of eye care and medical services
            to meet all your healthcare needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">{service.name}</h3>
                <p className="text-neutral-700 mb-4 line-clamp-3">{service.excerpt}</p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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