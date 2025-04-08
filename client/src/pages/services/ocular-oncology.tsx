import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target, Microscope, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const OcularOncology = () => {
  return (
    <>
      <Helmet>
        <title>Ocular Oncology - De Cure Center</title>
        <meta name="description" content="De Cure Center houses a dedicated ocular oncology unit specializing in the diagnosis and treatment of eye tumors and cancers affecting the eyelids, conjunctiva, cornea, orbit, and intraocular structures." />
      </Helmet>

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f8fafc] to-[#e6f7ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1e3a52] mb-4">Ocular Oncology</h1>
            <p className="text-lg text-gray-700">
              Specialized treatment for eye tumors and cancers
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#2d4a63] mb-4">Expert Care for Eye Tumors and Cancers</h2>
              <p className="text-gray-700 mb-4">
                De Cure Center houses a dedicated ocular oncology unit specializing in the diagnosis and treatment of eye tumors and cancers. Our multidisciplinary team of specialists provides world-class care for conditions affecting the eyelids, conjunctiva, cornea, orbit, and intraocular structures.
              </p>
              <p className="text-gray-700">
                We combine advanced diagnostic techniques, surgical expertise, and the latest therapeutic approaches to deliver personalized treatment plans focused on preserving vision and eye function while effectively treating the cancer. Our team works closely with other oncology specialists to ensure comprehensive care for each patient.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Ocular oncology specialist examining a patient"
                className="rounded-lg shadow-md border border-[#d0e8f2] w-full h-auto transition-all duration-300 hover:shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Target className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Diagnostic Services</h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive evaluation and accurate diagnosis of eye tumors and cancers using advanced imaging and testing techniques.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>High-resolution ultrasound</li>
                      <li>Optical coherence tomography (OCT)</li>
                      <li>Fluorescein angiography</li>
                      <li>MRI and CT imaging</li>
                      <li>Biopsy procedures</li>
                      <li>Genetic testing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Microscope className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Treatment Modalities</h3>
                    <p className="text-gray-700 mb-4">
                      State-of-the-art treatment options tailored to your specific condition, with a focus on preserving vision whenever possible.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Surgical resection</li>
                      <li>Radiation therapy (plaque brachytherapy)</li>
                      <li>Laser photocoagulation</li>
                      <li>Transpupillary thermotherapy</li>
                      <li>Cryotherapy</li>
                      <li>Chemotherapy (local and systemic)</li>
                      <li>Immunotherapy options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] rounded-lg p-8 mb-16 border border-[#d0e8f2] shadow-md">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6 text-center">Conditions We Treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Intraocular Tumors</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Uveal melanoma</li>
                    <li>Retinoblastoma</li>
                    <li>Choroidal metastasis</li>
                    <li>Choroidal hemangioma</li>
                    <li>Vitreoretinal lymphoma</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Conjunctival and Corneal Tumors</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Conjunctival melanoma</li>
                    <li>Ocular surface squamous neoplasia</li>
                    <li>Conjunctival lymphoma</li>
                    <li>Corneal intraepithelial neoplasia</li>
                    <li>Papillomas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Eyelid and Orbital Tumors</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Basal cell carcinoma</li>
                    <li>Squamous cell carcinoma</li>
                    <li>Sebaceous gland carcinoma</li>
                    <li>Orbital lymphoma</li>
                    <li>Lacrimal gland tumors</li>
                    <li>Orbital metastasis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6 text-center">Our Multidisciplinary Approach</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  At De Cure Center, we believe in a collaborative approach to ocular oncology. Our specialists work closely with medical oncologists, radiation oncologists, pathologists, and other healthcare professionals to provide comprehensive cancer care.
                </p>
                <p className="text-gray-700 mb-4">
                  This team-based approach ensures that your treatment plan incorporates the latest advances in cancer care while addressing the unique challenges of eye tumors. We consider all aspects of your health and quality of life when developing your personalized treatment strategy.
                </p>
                <p className="text-gray-700">
                  Throughout your treatment journey, our team provides supportive care, including psychological support, pain management, and rehabilitation services to help you cope with the physical and emotional challenges of diagnosis and treatment.
                </p>
              </div>
              <div className="md:w-1/2">
                <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Shield className="h-12 w-12 text-[#2d4a63]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Patient-Centered Care</h3>
                    <p className="text-gray-700 mb-4">
                      Our ocular oncology services are designed with your needs at the center. We provide:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Detailed explanation of diagnosis and treatment options</li>
                      <li>Coordination of care across specialties</li>
                      <li>Support for decision-making</li>
                      <li>Regular follow-up and surveillance</li>
                      <li>Management of treatment side effects</li>
                      <li>Psychological support and counseling</li>
                      <li>Access to clinical trials when appropriate</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6">Expert Care When You Need It Most</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              If you've been diagnosed with an eye tumor or cancer, or have concerns about a possible eye condition, contact De Cure Center to schedule a consultation with our ocular oncology team. We're committed to providing expert, compassionate care throughout your treatment journey.
            </p>
            <Link href="/contact">
              <Button className="bg-[#1e3a52] hover:bg-[#0f2942] text-white shadow-md hover:shadow-lg transition-all duration-300">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default OcularOncology;