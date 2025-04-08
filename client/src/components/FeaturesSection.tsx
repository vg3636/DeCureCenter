import { Eye, Heart, Shield } from 'lucide-react';
import { useTranslation } from './LanguageSelector';

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Eye className="w-10 h-10" />,
      title: t('Natural Appearance'),
      description: t('Our specialists ensure treatments that maintain your natural look and restore functionality.')
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: t('Comfortable Fit'),
      description: t('Custom-tailored care ensures maximum comfort and satisfaction across all our services.')
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t('Expert Care'),
      description: t('Backed by 12+ years of specialized experience in comprehensive medical services.')
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#e6f7ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1e3a52] mb-4">
          {t('Why Choose De Cure Center')}
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          {t('Experience excellence in medical care with our expert team and advanced technology.')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-[#d0e8f2] flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#2d4a63]"
            >
              <div className="text-[#2d4a63] mb-5 bg-[#e6f7ff] p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-[#1e3a52]">{feature.title}</h3>
              <p className="text-gray-700 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;