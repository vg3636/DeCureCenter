import { useEffect, useRef, useState } from 'react';

interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

const statistics: Statistic[] = [
  { value: 5000, suffix: '+', label: 'Successful Procedures' },
  { value: 12, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Partner Hospitals' },
  { value: 98, suffix: '%', label: 'Patient Satisfaction' },
];

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 statistics-section border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Delivering excellence in healthcare with proven results and patient satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="mb-3 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-[#2d4a63] to-[#345977] rounded"></div>
              </div>
              <p className="statistic-value bg-gradient-to-r from-[#2d4a63] to-[#345977] bg-clip-text text-transparent">
                {isVisible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </p>
              <p className="statistic-label font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  suffix: string;
}

const CountUp = ({ end, suffix }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count < end) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const increment = end / 50;
          const newCount = prevCount + increment;
          return newCount >= end ? end : newCount;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [count, end]);
  
  return <>{Math.floor(count)}{suffix}</>;
};

export default StatisticsSection;
