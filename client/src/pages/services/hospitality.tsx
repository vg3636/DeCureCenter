import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, GripHorizontal, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import CTASection from '../../components/CTASection';

const Hospitality = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality - De Cure Center</title>
        <meta name="description" content="At De Cure Center, we are committed to providing a comfortable and supportive experience for all our patients and their families with hospitality services designed for a seamless visit." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Hospitality</h1>
            <p className="text-lg text-neutral-700">
              Comfortable and supportive patient experience
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Patient-Centered Care Experience</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we understand that exceptional healthcare goes beyond medical expertise—it encompasses the entire patient experience. Our hospitality services are designed to ensure your visit is as comfortable, convenient, and stress-free as possible from the moment you schedule your appointment until after your treatment is complete.
              </p>
              <p className="text-neutral-800">
                We are committed to providing a welcoming environment where patients and their families feel respected, informed, and supported throughout their healthcare journey. Our dedicated hospitality team assists with inquiries, appointments, and ensures a seamless experience, allowing you to focus on what matters most—your health and recovery.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hospitality staff assisting a patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Personalized Assistance</h3>
                <p className="text-neutral-700">
                  Our hospitality team provides individualized support to patients and their families, addressing specific needs and concerns to ensure a comfortable and positive experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Efficient Scheduling</h3>
                <p className="text-neutral-700">
                  We streamline the appointment booking process, offering flexible scheduling options and timely reminders to help you manage your healthcare visits with minimal disruption to your daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <GripHorizontal className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Coordinated Care</h3>
                <p className="text-neutral-700">
                  We facilitate seamless coordination between different departments and specialists, ensuring that all aspects of your treatment plan are well-organized and communicated effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Globe className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">International Patient Support</h3>
                <p className="text-neutral-700">
                  For patients traveling from abroad, we provide specialized assistance with travel arrangements, accommodation, translation services, and cultural considerations to ensure a comfortable experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Hospitality Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Patient Reception and Support</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Welcoming Environment:</span> Our reception area is designed to be comfortable and calming, with staff ready to greet you warmly and assist with check-in procedures.
                    </li>
                    <li>
                      <span className="font-medium">Patient Orientation:</span> For first-time visitors, we provide a thorough orientation to our facility, ensuring you know where to go and what to expect during your visit.
                    </li>
                    <li>
                      <span className="font-medium">Concierge Services:</span> Our hospitality team can assist with various practical needs during your visit, from wheelchair assistance to arranging transportation.
                    </li>
                    <li>
                      <span className="font-medium">Amenities:</span> Access to comfortable waiting areas, refreshments, Wi-Fi, reading materials, and other amenities to make your time with us more pleasant.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Administrative Assistance</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Insurance Coordination:</span> Help with understanding and navigating insurance coverage, claims, and payment processes.
                    </li>
                    <li>
                      <span className="font-medium">Paperwork Management:</span> Assistance with completing necessary forms and documentation, with clear explanations of all requirements.
                    </li>
                    <li>
                      <span className="font-medium">Appointment Scheduling:</span> Efficient booking of initial consultations, follow-up visits, and procedures, with options for online, phone, or in-person scheduling.
                    </li>
                    <li>
                      <span className="font-medium">Medical Records:</span> Support in accessing, understanding, and managing your medical information through our secure patient portal.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Special Accommodation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">International Patient Program</h3>
                  <p className="text-neutral-700 mb-3">
                    Comprehensive support services for patients traveling from abroad for treatment at De Cure Center.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Travel planning assistance</li>
                    <li>Visa support documentation</li>
                    <li>Airport pickup arrangements</li>
                    <li>Accommodation recommendations and booking</li>
                    <li>Language interpretation services</li>
                    <li>Cultural orientation and support</li>
                    <li>Post-treatment travel coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Family Support Services</h3>
                  <p className="text-neutral-700 mb-3">
                    Resources and assistance for family members and caregivers accompanying patients.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Comfortable family waiting areas</li>
                    <li>Regular updates during procedures</li>
                    <li>Nearby accommodation information</li>
                    <li>Caregiver education and support</li>
                    <li>Local amenities and services guide</li>
                    <li>Children's area with age-appropriate activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Accessibility Services</h3>
                  <p className="text-neutral-700 mb-3">
                    Ensuring our facility and services are accessible to all patients, regardless of physical limitations.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Wheelchair accessibility throughout the facility</li>
                    <li>Assistive listening devices</li>
                    <li>Sign language interpretation (by appointment)</li>
                    <li>Documents in accessible formats</li>
                    <li>Special assistance for elderly patients</li>
                    <li>Accommodations for service animals</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">The De Cure Center Hospitality Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Anticipating Your Needs</h3>
                <p className="text-neutral-700 mb-4">
                  Our hospitality team is trained to anticipate and respond to patient needs proactively. We consider the details that make a difference in your experience, from ensuring comfortable room temperatures to providing reading materials relevant to your interests during wait times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Continuity of Care</h3>
                <p className="text-neutral-700 mb-4">
                  Our hospitality services extend beyond your in-person visit. We follow up after appointments to ensure you have all the information and resources needed for recovery or ongoing treatment, addressing any questions or concerns that may arise after you leave our facility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Personalized Communication</h3>
                <p className="text-neutral-700 mb-4">
                  We recognize that each patient has unique communication preferences. Our team adapts to your preferred methods of contact—whether that's phone, email, or through our patient portal—and ensures all information is clear, timely, and accessible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Feedback-Driven Improvement</h3>
                <p className="text-neutral-700 mb-4">
                  We value your input and actively seek feedback about your experience at De Cure Center. Your suggestions help us continuously refine our hospitality services to better meet patient needs and exceed expectations in every interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Experience Healthcare With a Personal Touch</h2>
            <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
              At De Cure Center, we believe that exceptional healthcare includes exceptional hospitality. Contact us today to learn more about how we can make your medical experience as comfortable and stress-free as possible. Our hospitality team is ready to assist with your specific needs and ensure your visit exceeds expectations.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Contact Our Hospitality Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Hospitality;