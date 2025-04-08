import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">
              Comprehensive Medical Care with a Personal Touch
            </h1>
            <p className="text-neutral-800 mb-8">
              Specialized medical services by India's leading healthcare professionals
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6">
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579684453377-48ec05e6f15d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Medical examination with advanced equipment"
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/800x500/195570/ffffff?text=De+Cure+Center";
                target.onerror = null;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
