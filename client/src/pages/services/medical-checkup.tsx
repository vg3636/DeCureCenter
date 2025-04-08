import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Activity, Heart, Eye, Brain, Shield } from 'lucide-react';

const MedicalCheckup = () => {
  return (
    <>
      <Helmet>
        <title>Medical Checkup - De Cure Center</title>
        <meta name="description" content="Comprehensive medical checkup services at De Cure Center including basic health screenings, specialized examinations, and executive health packages." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Medical Checkup</h1>
            <p className="text-lg text-neutral-700">
              Comprehensive health assessments for preventive care and early detection
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Proactive Health Monitoring</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we believe that prevention and early detection are key to maintaining optimal health. Our comprehensive medical checkup programs are designed to assess your current health status, identify potential risk factors, and detect any issues before they become serious concerns.
              </p>
              <p className="text-neutral-800">
                Our medical checkups combine thorough physical examinations, laboratory tests, and specialized screenings tailored to your age, gender, medical history, and specific health concerns. Each assessment is conducted by experienced healthcare professionals using state-of-the-art diagnostic equipment.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581595219315-a2f6a94b61b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Doctor conducting medical checkup"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primary-600 mb-8 text-center">Our Checkup Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-primary-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Basic Health Screening</h3>
                <p className="text-neutral-700 mb-4">Essential health assessment for all ages</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Complete physical examination</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Blood pressure and heart rate</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">BMI and body composition</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Basic blood tests (CBC, lipid profile)</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Urinalysis</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Vision and hearing tests</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="font-semibold text-xl mb-4">₹4,500</p>
                  <Link href="/contact">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Most Popular</div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Comprehensive Health Assessment</h3>
                <p className="text-neutral-700 mb-4">Thorough evaluation for overall wellness</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">All Basic Screening tests</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Extended blood tests (liver and kidney function)</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Thyroid function tests</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">ECG (Electrocardiogram)</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Chest X-ray</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Abdominal ultrasound</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Nutritional consultation</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="font-semibold text-xl mb-4">₹12,000</p>
                  <Link href="/contact">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-primary-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Executive Health Package</h3>
                <p className="text-neutral-700 mb-4">Premium assessment with specialized tests</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">All Comprehensive Assessment tests</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Stress test (Treadmill)</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Full body CT scan</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Bone density scan</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Advanced cancer markers</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Specialized consultations</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Detailed health report and plan</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="font-semibold text-xl mb-4">₹25,000</p>
                  <Link href="/contact">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold text-primary-600 mb-8 text-center">Specialized Examinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <Eye className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">Ocular Health Assessment</h3>
                  <p className="text-neutral-700 mb-3">
                    Comprehensive eye examination to evaluate vision health and detect eye conditions early.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Visual acuity testing</li>
                    <li>• Intraocular pressure measurement</li>
                    <li>• Retinal examination</li>
                    <li>• Ophthalmoscopy</li>
                    <li>• Color vision testing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <Heart className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">Cardiac Health Screening</h3>
                  <p className="text-neutral-700 mb-3">
                    Thorough assessment of heart health to identify risk factors and cardiac conditions.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Electrocardiogram (ECG)</li>
                    <li>• Echocardiogram</li>
                    <li>• Cardiac stress test</li>
                    <li>• Lipid profile</li>
                    <li>• Blood pressure monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <Activity className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">Metabolic Health Assessment</h3>
                  <p className="text-neutral-700 mb-3">
                    Evaluation of metabolic functions and identification of metabolic syndrome risk factors.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Blood glucose testing</li>
                    <li>• Insulin resistance assessment</li>
                    <li>• HbA1c measurement</li>
                    <li>• Thyroid function tests</li>
                    <li>• Body composition analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <Brain className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">Neurological Health Screening</h3>
                  <p className="text-neutral-700 mb-3">
                    Assessment of neurological function and early detection of neurological disorders.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Cognitive function tests</li>
                    <li>• Nerve conduction studies</li>
                    <li>• Reflex testing</li>
                    <li>• Balance and coordination assessment</li>
                    <li>• Cranial nerve examination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-neutral-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Medical Checkup Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Pre-Assessment</h3>
                <p className="text-sm text-neutral-700">Initial questionnaire and health history review</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Examination</h3>
                <p className="text-sm text-neutral-700">Physical examination and diagnostic tests</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Analysis</h3>
                <p className="text-sm text-neutral-700">Comprehensive analysis of all test results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-neutral-700">Detailed review of findings and personalized recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MedicalCheckup;
