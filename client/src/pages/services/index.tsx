import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../lib/constants';
import CTASection from '../../components/CTASection';

const ServicesIndex = () => {
  return (
    <>
      <Helmet>
        <title>Services - De Cure Center</title>
        <meta name="description" content="Explore our comprehensive range of medical services including ocular prosthetics, alternative medicine, medical tourism, and more." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Our Services</h1>
            <p className="text-lg text-neutral-700">
              Comprehensive healthcare solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary-600">{service.name}</CardTitle>
                  <CardDescription className="text-neutral-600">{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 mb-4 overflow-hidden rounded-md">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-neutral-700 mb-4">{service.excerpt}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full flex items-center justify-center" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">Our Approach to Care</h2>
            <p className="text-neutral-700 mb-6">
              At De Cure Center, we believe in a holistic approach to healthcare. Our team of specialists works together to provide coordinated care that addresses all aspects of your health and wellbeing.
            </p>
            <p className="text-neutral-700">
              Whether you're seeking specialized treatment or comprehensive medical services, we're committed to delivering exceptional care with compassion and precision.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesIndex;
