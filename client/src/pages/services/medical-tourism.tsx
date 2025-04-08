import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Plane, Hotel, User, Globe, FileCheck, Phone } from 'lucide-react';
import CTASection from '../../components/CTASection';

const MedicalTourism = () => {
  return (
    <>
      <Helmet>
        <title>Medical Tourism - De Cure Center</title>
        <meta name="description" content="De Cure Center provides comprehensive medical tourism services for international patients seeking quality healthcare in India, including travel arrangements and accommodation." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Medical Tourism</h1>
            <p className="text-lg text-neutral-700">
              World-class healthcare for international patients
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Healthcare Without Borders</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we understand that seeking specialized medical care often requires traveling beyond borders. Our comprehensive medical tourism services are designed to make your healthcare journey to India smooth, comfortable, and stress-free.
              </p>
              <p className="text-neutral-800">
                We offer end-to-end assistance, from initial consultations and treatment planning to travel arrangements, accommodation, and post-treatment care. Our dedicated team of medical tourism coordinators ensures that every aspect of your visit is meticulously planned and executed, allowing you to focus solely on your health and recovery.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="International patient consultation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primary-600 mb-8 text-center">Our Medical Tourism Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <FileCheck className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Pre-Arrival Consultation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Detailed medical history review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Virtual consultations with specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Treatment planning and cost estimates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Required medical documents guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Travel Coordination</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Visa assistance and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Flight booking recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Airport pickup and transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Language interpretation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Hotel className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Accommodation Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Hotel recommendations and bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Patient-friendly accommodation options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Extended stay arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Dietary requirements coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-neutral-100 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <User className="h-10 w-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Personalized Patient Care</h3>
                    <p className="text-neutral-700 mb-3">
                      Our dedicated medical tourism coordinator will be your single point of contact throughout your treatment journey, providing:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">24/7 assistance during your stay</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Coordination between medical departments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Regular updates to family members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Discharge planning and follow-up care</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Plane className="h-10 w-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Post-Treatment Support</h3>
                    <p className="text-neutral-700 mb-3">
                      Our care extends beyond your treatment at our facility:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Detailed discharge instructions in your language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Medication guidance and procurement assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Virtual follow-up consultations after return</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-neutral-700">Coordination with local healthcare providers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Why Choose India for Medical Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert Specialists</h3>
                <p className="text-sm text-neutral-700">Highly qualified doctors with international training and expertise in specialized treatments</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <FileCheck className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Advanced Technology</h3>
                <p className="text-sm text-neutral-700">State-of-the-art medical facilities with the latest equipment and techniques</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Cost-Effective Care</h3>
                <p className="text-sm text-neutral-700">High-quality medical care at a fraction of the cost in Western countries</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">Start Your Medical Journey</h2>
            <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
              We're here to make your medical journey to India as smooth and comfortable as possible. Our team is ready to provide personalized assistance and answer any questions you may have.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Request Medical Tourism Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default MedicalTourism;
