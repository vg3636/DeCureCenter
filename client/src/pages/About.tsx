import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - De Cure Center</title>
        <meta name="description" content="Learn about De Cure Center's history, mission, and our expert team dedicated to providing the highest quality ocular prosthetics." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">About De Cure Center</h1>
            <p className="text-lg text-neutral-700">Dedicated to restoring confidence and improving quality of life through specialized ocular care</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Story</h2>
              <p className="text-neutral-800 mb-4">
                Founded in 2011, De Cure Center has been at the forefront of ocular prosthetics in India. What began as a small specialized clinic has grown into a renowned center of excellence, trusted by patients and medical professionals across the country and internationally.
              </p>
              <p className="text-neutral-800 mb-4">
                Our journey has been driven by a singular mission: to provide life-changing care through custom ocular prosthetics that restore not just appearance, but confidence and quality of life.
              </p>
              <p className="text-neutral-800">
                Today, with over 5,000 successful procedures, we continue to innovate and improve our techniques, combining traditional craftsmanship with cutting-edge technology.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals at De Cure Center"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Approach</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we understand that each patient has unique needs and concerns. Our patient-centered approach ensures personalized care at every step, from consultation to fitting and follow-up.
              </p>
              <p className="text-neutral-800 mb-4">
                We combine artistic skill with medical precision to create prosthetic eyes that are virtually indistinguishable from natural eyes, matching color, size, and even tiny blood vessels with remarkable accuracy.
              </p>
              <p className="text-neutral-800 mb-6">
                Our team works closely with ophthalmologists, maxillofacial surgeons, and other specialists to provide comprehensive care, especially for complex cases.
              </p>
              <Link href="/contact">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  Book a Consultation
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical team examining ocular prosthetics"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary-600 mb-12">
            Meet Our Expert Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Rajesh Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Dr. Rajesh Sharma</h3>
              <p className="text-primary-600 mb-3">Medical Director</p>
              <p className="text-neutral-700">
                With over 15 years of experience in ocular surgery and prosthetics, Dr. Sharma leads our medical team with expertise and compassion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Priya Mehta"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Dr. Priya Mehta</h3>
              <p className="text-primary-600 mb-3">Ocularist</p>
              <p className="text-neutral-700">
                A specialist in custom prosthetic design, Dr. Mehta combines technical precision with an artist's eye for natural-looking results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Anand Patel"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Dr. Anand Patel</h3>
              <p className="text-primary-600 mb-3">Ophthalmologist</p>
              <p className="text-neutral-700">
                Specializing in ocular health and prosthetic integration, Dr. Patel ensures optimal comfort and functionality for every patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
