import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Activity, Shield, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const EyePlasticSurgery = () => {
  return (
    <>
      <Helmet>
        <title>Eye Plastic Surgery - De Cure Center</title>
        <meta name="description" content="The eye plastic surgery department at De Cure Center specializes in cosmetic and reconstructive procedures around the eyes, including eyelid surgery, tear duct surgery, and orbital surgery." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Eye Plastic Surgery</h1>
            <p className="text-lg text-neutral-700">
              Cosmetic and reconstructive procedures for the eye area
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Specialized Oculoplastic Expertise</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our eye plastic surgery department specializes in cosmetic and reconstructive procedures around the eyes and surrounding structures. Our skilled oculoplastic surgeons combine advanced surgical techniques with artistic precision to improve both the function and appearance of the eyes.
              </p>
              <p className="text-neutral-800">
                Whether you're seeking treatment for a medical condition affecting the eyelids, tear ducts, or orbit, or you're interested in cosmetic enhancements to the eye area, our specialists provide personalized care with a focus on natural-looking results and improved ocular health and function.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Oculoplastic surgeon examining a patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Scissors className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Eyelid Procedures</h3>
                    <p className="text-neutral-700 mb-3">
                      Surgical interventions to address functional issues and aesthetic concerns related to the eyelids.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Blepharoplasty (eyelid lift) for drooping upper lids or puffy lower lids</li>
                      <li>Ptosis repair for eyelids that obstruct vision</li>
                      <li>Entropion correction (inward-turning eyelids)</li>
                      <li>Ectropion repair (outward-turning eyelids)</li>
                      <li>Eyelid reconstruction following trauma or cancer removal</li>
                      <li>Removal of eyelid growths and tumors</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Activity className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Tear Duct Surgery</h3>
                    <p className="text-neutral-700 mb-3">
                      Procedures to address obstructions and abnormalities in the tear drainage system.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Dacryocystorhinostomy (DCR) to create a new tear drainage pathway</li>
                      <li>Punctoplasty to open narrowed tear duct openings</li>
                      <li>Canalicular repair for damaged tear ducts</li>
                      <li>Tear duct probing and irrigation</li>
                      <li>Endoscopic approaches to tear duct surgery</li>
                      <li>Conjunctivodacryocystorhinostomy (CDCR) with tube insertion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Specialized Oculoplastic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Shield className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-3">Orbital Surgery</h3>
                      <p className="text-neutral-700 mb-3">
                        Specialized procedures addressing conditions affecting the eye socket and surrounding structures.
                      </p>
                      <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                        <li>Orbital decompression for thyroid eye disease</li>
                        <li>Orbital tumor removal</li>
                        <li>Socket reconstruction</li>
                        <li>Fracture repair following trauma</li>
                        <li>Enucleation and evisceration (eye removal) with implant placement</li>
                        <li>Exenteration procedures for advanced orbital conditions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Layers className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-3">Facial Aesthetic Procedures</h3>
                      <p className="text-neutral-700 mb-3">
                        Minimally invasive and surgical techniques to rejuvenate the eye area and surrounding facial structures.
                      </p>
                      <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                        <li>Botulinum toxin (Botox) injections for wrinkles and crow's feet</li>
                        <li>Dermal fillers for tear troughs and facial volume restoration</li>
                        <li>Laser skin resurfacing around the eyes</li>
                        <li>Midface lift procedures</li>
                        <li>Brow lift surgery</li>
                        <li>Asian blepharoplasty (double eyelid surgery)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Approach to Eye Plastic Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">1</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Comprehensive Consultation</h3>
                  <p className="text-neutral-700">
                    Our oculoplastic surgeons conduct thorough evaluations to understand your specific concerns and goals. We assess both the functional and aesthetic aspects of your condition, discussing all appropriate treatment options and developing a personalized surgical plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">2</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Advanced Surgical Techniques</h3>
                  <p className="text-neutral-700">
                    We utilize the latest surgical approaches, including minimally invasive techniques when appropriate, to achieve optimal results with reduced recovery time. Our surgeons prioritize precision and attention to detail to ensure natural-looking outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">3</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Comprehensive Aftercare</h3>
                  <p className="text-neutral-700">
                    Your care continues beyond surgery with detailed post-operative instructions, scheduled follow-up visits, and ongoing support throughout your recovery process. We monitor your healing and ensure you achieve the best possible functional and aesthetic outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Why Choose De Cure Center for Eye Plastic Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Specialized Expertise</h3>
                <p className="text-neutral-700 mb-4">
                  Our oculoplastic surgeons specialize exclusively in procedures around the eyes and face, combining ophthalmological knowledge with plastic surgery techniques. This focused expertise ensures the highest level of care for these delicate procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Balanced Approach</h3>
                <p className="text-neutral-700 mb-4">
                  We prioritize both function and aesthetics, ensuring that surgical interventions improve vision and eye health while also enhancing appearance. This comprehensive approach leads to optimal outcomes that address all aspects of your condition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Personalized Care</h3>
                <p className="text-neutral-700 mb-4">
                  We recognize that each patient has unique concerns and goals. Our treatment plans are customized to your specific needs, taking into account your medical history, anatomical features, and desired results to achieve outcomes that are right for you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Integrated Services</h3>
                <p className="text-neutral-700 mb-4">
                  As part of De Cure Center, our oculoplastic surgery department works closely with other eye care specialists to provide coordinated care. This multidisciplinary approach ensures comprehensive treatment for complex conditions affecting both the appearance and function of your eyes.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Transform Your Eye Health and Appearance</h2>
            <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
              Whether you're experiencing functional issues with your eyelids or tear ducts, or you're interested in aesthetic enhancements to the eye area, our oculoplastic surgery team is here to help. Contact De Cure Center today to schedule a consultation and take the first step toward improved eye function and appearance.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default EyePlasticSurgery;