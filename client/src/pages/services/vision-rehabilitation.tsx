import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Activity, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const VisionRehabilitation = () => {
  return (
    <>
      <Helmet>
        <title>Vision Rehabilitation - De Cure Center</title>
        <meta name="description" content="De Cure Center provides specialized vision rehabilitation services to help individuals with vision loss regain independence and improve their quality of life." />
      </Helmet>

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f8fafc] to-[#e6f7ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1e3a52] mb-4">Vision Rehabilitation</h1>
            <p className="text-lg text-gray-700">
              Services to improve visual function and quality of life
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#2d4a63] mb-4">Restore Independence and Quality of Life</h2>
              <p className="text-gray-700 mb-4">
                At De Cure Center, our vision rehabilitation services are designed to help individuals with vision loss maximize their remaining vision and regain independence. Our specialized programs combine adaptive techniques, assistive devices, and tailored strategies to help patients navigate daily challenges and improve their quality of life.
              </p>
              <p className="text-gray-700">
                Whether you're experiencing vision loss from age-related conditions, eye disease, or injury, our multidisciplinary team works together to create personalized rehabilitation plans that address your specific needs, goals, and lifestyle requirements.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Patient working with vision rehabilitation specialist"
                className="rounded-lg shadow-md border border-[#d0e8f2] w-full h-auto transition-all duration-300 hover:shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Eye className="h-10 w-10 text-[#2d4a63]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Functional Vision Assessment</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive evaluation of your current visual abilities and limitations to develop targeted rehabilitation strategies.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Visual acuity and visual field testing</li>
                  <li>Contrast sensitivity evaluation</li>
                  <li>Reading assessment</li>
                  <li>Activities of daily living assessment</li>
                  <li>Environmental evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Activity className="h-10 w-10 text-[#2d4a63]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Adaptive Training</h3>
                <p className="text-gray-700 mb-4">
                  Learn new techniques and strategies to perform daily activities with greater independence and confidence.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Eccentric viewing training</li>
                  <li>Scanning techniques</li>
                  <li>Mobility and orientation training</li>
                  <li>Adaptive computer skills</li>
                  <li>Home management strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Brain className="h-10 w-10 text-[#2d4a63]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Assistive Technology</h3>
                <p className="text-gray-700 mb-4">
                  Expert guidance on selecting and using assistive devices that enhance visual function and independence.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Magnification devices</li>
                  <li>Electronic reading systems</li>
                  <li>Adaptive computer technology</li>
                  <li>Lighting solutions</li>
                  <li>Daily living aids</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] rounded-lg p-8 mb-16 border border-[#d0e8f2] shadow-md">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6 text-center">Our Comprehensive Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#d0e8f2] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#2d4a63] mb-3">Individualized Programs</h3>
                <p className="text-gray-700 mb-4">
                  Every patient receives a customized rehabilitation plan designed to address their specific visual challenges, personal goals, and lifestyle needs. Our programs evolve as your skills improve and your needs change.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#d0e8f2] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#2d4a63] mb-3">Multidisciplinary Care</h3>
                <p className="text-gray-700 mb-4">
                  Our team includes vision rehabilitation therapists, orientation and mobility specialists, occupational therapists, and social workers who collaborate to provide comprehensive support for all aspects of living with vision impairment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#d0e8f2] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#2d4a63] mb-3">Family Involvement</h3>
                <p className="text-gray-700 mb-4">
                  We recognize the important role that family members and caregivers play in successful rehabilitation. We provide education and training to help your support network understand vision impairment and assist in your rehabilitation journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#d0e8f2] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#2d4a63] mb-3">Ongoing Support</h3>
                <p className="text-gray-700 mb-4">
                  Our commitment to your visual independence extends beyond your initial rehabilitation program. We offer follow-up services, support groups, and resources to help you continue to thrive as your vision or circumstances change.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6">Ready to Improve Your Visual Independence?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact De Cure Center today to schedule a consultation with our vision rehabilitation team. We're committed to helping you maximize your visual potential and improve your quality of life.
            </p>
            <Link href="/contact">
              <Button className="bg-[#1e3a52] hover:bg-[#0f2942] text-white shadow-md hover:shadow-lg transition-all duration-300">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default VisionRehabilitation;