import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TechnologySection from '../components/TechnologySection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>De Cure Center - Ocular Prosthetics Specialists</title>
        <meta name="description" content="De Cure Center provides expert care in ocular prosthetics with over 5,000 custom prosthetic eyes fitted by India's leading oculists." />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <TechnologySection />
      <CTASection />
    </>
  );
};

export default Home;
