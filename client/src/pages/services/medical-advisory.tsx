import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import CTASection from '../../components/CTASection';

const MedicalAdvisory = () => {
  return (
    <>
      <Helmet>
        <title>Medical Advisory - De Cure Center</title>
        <meta name="description" content="Comprehensive medical advisory services at De Cure Center including personalized health assessments, treatment planning, and expert second opinions." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Medical Advisory</h1>
            <p className="text-lg text-neutral-700">
              Expert guidance for informed healthcare decisions
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Personalized Medical Consultations</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our medical advisory services provide you with expert guidance to navigate complex healthcare decisions. Our team of experienced medical professionals offers comprehensive consultations to help you understand your health conditions, treatment options, and preventive care strategies.
              </p>
              <p className="text-neutral-800">
                Whether you're seeking a second opinion, assistance with treatment planning, or advice on managing chronic conditions, our advisory team provides clear, objective information tailored to your specific needs. We coordinate with specialists across disciplines to ensure you receive holistic care recommendations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical consultation with patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Health Assessment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Comprehensive medical history review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Analysis of existing diagnostic results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Identification of risk factors and health concerns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Personalized health risk assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Treatment Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Evaluation of treatment options and alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Explanation of benefits and risks of each approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Development of personalized treatment strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Coordination with specialists as needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Second Opinions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Objective review of existing diagnoses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Fresh perspective on complex medical conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Verification of proposed treatments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Recommendations for alternative approaches when appropriate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-neutral-100 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Our Advisory Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-neutral-700">Comprehensive review of your medical history and concerns</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-neutral-700">Detailed evaluation of your health status and needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Recommendations</h3>
                <p className="text-sm text-neutral-700">Personalized guidance and treatment options</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Follow-up</h3>
                <p className="text-sm text-neutral-700">Ongoing support and adjustment of recommendations as needed</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical team discussion"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Specialized Advisory Services</h2>
              <p className="text-neutral-800 mb-4">
                In addition to our general medical advisory services, we offer specialized consultations for specific conditions and situations:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700"><span className="font-medium">Ocular Prosthetics Consultation:</span> Expert advice on options for eye prosthetics and related care.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700"><span className="font-medium">Chronic Disease Management:</span> Strategies for effectively managing long-term health conditions.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700"><span className="font-medium">Pre-Surgical Consultation:</span> Preparing for surgery and understanding options and outcomes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700"><span className="font-medium">Preventive Health Planning:</span> Creating personalized strategies for maintaining optimal health.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default MedicalAdvisory;
