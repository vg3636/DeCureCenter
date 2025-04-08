import { Eye, Heart, Shield } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary-600 mb-4">
          Why Choose De Cure Center
        </h2>
        <p className="text-center text-neutral-800 mb-12 max-w-2xl mx-auto">
          Experience excellence in medical care with our expert team and advanced technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 flex flex-col items-center">
            <div className="text-primary-600 text-3xl mb-4">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Natural Appearance</h3>
            <p className="text-neutral-800 text-center">
              Our specialists ensure treatments that maintain your natural look and restore functionality.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 flex flex-col items-center">
            <div className="text-primary-600 text-3xl mb-4">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Comfortable Fit</h3>
            <p className="text-neutral-800 text-center">
              Custom-tailored care ensures maximum comfort and satisfaction across all our services.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 flex flex-col items-center">
            <div className="text-primary-600 text-3xl mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Expert Care</h3>
            <p className="text-neutral-800 text-center">
              Backed by 12+ years of specialized experience in comprehensive medical services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
