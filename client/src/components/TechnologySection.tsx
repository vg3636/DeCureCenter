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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary-600 mb-4">
          Advanced Technology & Expertise
        </h2>
        <p className="text-center text-neutral-800 mb-12">
          Experience excellence in healthcare through our comprehensive approach
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-neutral-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-primary-600 text-3xl mb-4 flex justify-center">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{tech.title}</h3>
              <p className="text-neutral-800 text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
