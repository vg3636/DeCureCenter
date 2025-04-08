import { Cpu, Languages, BarChart3 } from 'lucide-react';

interface Technology {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const technologies: Technology[] = [
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Advanced Medical Technology",
    description: "State-of-the-art equipment and techniques for precise diagnosis and effective treatment."
  },
  {
    icon: <Languages className="w-12 h-12" />,
    title: "Multilingual Support",
    description: "Comprehensive care available in multiple languages for international patients."
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "3D Visualization",
    description: "Interactive 3D models to help you visualize results before treatment across all our services."
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
          Experience the latest innovations in medical care
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-neutral-100 p-8 rounded-lg">
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
