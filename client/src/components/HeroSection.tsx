import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-brand-primary">Comprehensive</span> 
              <span className="bg-gradient-to-r from-[#2d4a63] to-[#345977] bg-clip-text text-transparent"> Medical Care</span>
              <span className="block mt-2 text-brand-secondary">with a Personal Touch</span>
            </h1>
            <p className="text-brand-light text-lg mb-8">
              Specialized medical services by India's leading healthcare professionals
            </p>
            <div>
              <Link href="/contact">
                <Button className="bg-brand-gradient hover:opacity-90 text-white py-3 px-6 rounded">
                  Schedule Your Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2d4a63] to-[#345977] rounded-lg blur-sm opacity-75"></div>
            <img
              src="https://images.unsplash.com/photo-1579684453377-48ec05e6f15d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Medical examination with advanced equipment"
              className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/800x500/2d4a63/ffffff?text=De+Cure+Center";
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
