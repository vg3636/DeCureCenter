import { Stethoscope, Globe, HeartPulse, Brain, Microscope, Users } from 'lucide-react';

interface Technology {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const technologies: Technology[] = [
  {
    icon: <Microscope className="w-12 h-12" />,
    title: "Cutting-Edge Diagnostics",
    description: "State-of-the-art diagnostic equipment for accurate assessment and early detection of medical conditions."
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Advanced Treatment Modalities",
    description: "Innovative therapeutic approaches combining traditional and modern techniques for optimal patient outcomes."
  },
  {
    icon: <HeartPulse className="w-12 h-12" />,
    title: "Personalized Care Plans",
    description: "Tailored treatment strategies designed to address each patient's unique medical needs and health goals."
  },
  {
    icon: <Stethoscope className="w-12 h-12" />,
    title: "Expert Medical Team",
    description: "Highly qualified specialists with extensive experience in their respective fields of medicine."
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "International Standards",
    description: "Medical care adhering to global best practices and protocols ensuring quality and safety."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Holistic Approach",
    description: "Comprehensive care addressing physical, emotional, and social aspects of health and wellbeing."
  }
];

const TechnologySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          Advanced Technology & Expertise
        </h2>
        <p className="section-subtitle text-center">
          Experience excellence in healthcare through our comprehensive approach
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg transition-all duration-300 bg-white border border-gray-100 shadow-sm hover:shadow-md group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d4a63] to-[#345977] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="text-brand-secondary group-hover:text-[#345977] mb-4 flex justify-center transition-colors duration-300">
                {tech.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center text-brand-primary">{tech.title}</h3>
              
              <p className="text-brand-light text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
