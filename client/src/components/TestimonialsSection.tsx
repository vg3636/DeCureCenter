import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Dr. Michael and his team gave me back my confidence. Their expert care and attention to detail made a real difference.",
    author: "Roger K.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The care and attention to detail at De Cure Center is exceptional. Their team made what could have been a difficult process so much easier.",
    author: "Priya M.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "As a patient, I was worried about my recovery after surgery. The expert experience at De Cure Center made all the difference.",
    author: "Sam T.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary-600 mb-4">
          Patient Stories
        </h2>
        <p className="text-center text-neutral-800 mb-12">
          Hear from our patients about their experience at De Cure Center
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-800 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author} avatar`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-neutral-800">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
