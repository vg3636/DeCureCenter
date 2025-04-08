import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedServicesSection from '../components/FeaturedServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TechnologySection from '../components/TechnologySection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>De Cure Center - Comprehensive Eye Care Services</title>
        <meta name="description" content="De Cure Center offers comprehensive eye care services including ophthalmology, vision rehabilitation, ocular oncology, prosthetic services, opticals, and more." />
      </Helmet>
      <HeroSection />
      <FeaturedServicesSection />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <TechnologySection />
      <CTASection />
    </>
  );
};

export default Home;
