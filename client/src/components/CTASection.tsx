import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="consultation" className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Take the First Step?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Schedule your consultation today to see how our advanced ocular prosthetics can transform your life.
        </p>
        <Link href="/contact">
          <Button className="bg-white text-primary-600 hover:bg-neutral-100 font-medium py-3 px-8">
            Book Your Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
