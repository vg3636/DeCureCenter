import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AlternativeMedicine = () => {
  return (
    <>
      <Helmet>
        <title>Alternative Medicine - De Cure Center</title>
        <meta name="description" content="Explore alternative medicine treatments at De Cure Center including Cryolipolysis, EMS, Body Sculpting, and more." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Alternative Medicine</h1>
            <p className="text-lg text-neutral-700">
              Complementary approaches to health and wellness
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Holistic Healing Approaches</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we recognize the importance of complementary approaches to health and wellness. Our alternative medicine services combine traditional wisdom with modern techniques to offer comprehensive solutions for various health concerns.
              </p>
              <p className="text-neutral-800">
                Our specialists are trained in multiple disciplines, allowing them to create personalized treatment plans that address your unique needs. Whether you're seeking treatments for weight management, pain relief, or aesthetic improvements, our alternative medicine options provide effective, non-invasive alternatives.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573811046880-d8a9ed7c3680?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Alternative medicine practitioner with patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="body-contouring" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="body-contouring">Body Contouring</TabsTrigger>
              <TabsTrigger value="energy-medicine">Energy Medicine</TabsTrigger>
              <TabsTrigger value="laser-therapy">Laser Therapy</TabsTrigger>
            </TabsList>

            <TabsContent value="body-contouring">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Cryolipolysis</h3>
                    <p className="text-neutral-700 mb-4">
                      A non-invasive fat-reduction procedure that uses controlled cooling to eliminate stubborn fat cells. The procedure specifically targets fat cells while leaving surrounding tissues unaffected.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>No surgery or anesthesia required</li>
                      <li>Minimal downtime</li>
                      <li>Results visible within 1-3 months</li>
                      <li>FDA-approved technology</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Body Sculpting</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced techniques that reshape and contour the body by removing excess fat and tightening skin. These procedures offer alternatives to invasive surgery.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Customized treatment plans</li>
                      <li>Targets multiple body areas</li>
                      <li>Progressive results with multiple sessions</li>
                      <li>Combines well with lifestyle modifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Body Contouring Machine</h3>
                    <p className="text-neutral-700 mb-4">
                      State-of-the-art equipment that uses various technologies to reshape the body, reduce cellulite, and improve skin texture and tone.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Multiple treatment modalities in one device</li>
                      <li>Comfortable, non-invasive procedures</li>
                      <li>Suitable for various body types</li>
                      <li>Clinically proven results</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="energy-medicine">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">EMS (Electrical Muscle Stimulation)</h3>
                    <p className="text-neutral-700 mb-4">
                      A technique that uses electrical impulses to cause muscle contractions, helping to strengthen muscles, rehabilitate injuries, and enhance physical performance.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Stimulates muscle growth and recovery</li>
                      <li>Helps with muscle re-education after injury</li>
                      <li>Can be targeted to specific muscle groups</li>
                      <li>Complements traditional exercise regimens</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Acupuncture</h3>
                    <p className="text-neutral-700 mb-4">
                      An ancient healing practice that involves inserting thin needles into specific points on the body to promote natural healing, reduce pain, and improve function.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Addresses a wide range of health conditions</li>
                      <li>Minimal side effects</li>
                      <li>Can be combined with other treatments</li>
                      <li>Performed by certified practitioners</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Magnetic Therapy</h3>
                    <p className="text-neutral-700 mb-4">
                      The use of magnetic fields to improve circulation, reduce inflammation, and promote healing in various tissues and systems of the body.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Non-invasive pain management</li>
                      <li>Enhances cellular repair processes</li>
                      <li>Improves blood flow to treated areas</li>
                      <li>Complementary to conventional treatments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="laser-therapy">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Laser Cavitation</h3>
                    <p className="text-neutral-700 mb-4">
                      A non-invasive treatment that uses ultrasound waves to break down fat cells, which are then naturally eliminated by the body's lymphatic system.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Targeted fat reduction</li>
                      <li>No recovery time needed</li>
                      <li>Immediate results that improve over time</li>
                      <li>Safe for most body areas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Diode Laser</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced laser technology used for hair removal, skin rejuvenation, and various aesthetic and therapeutic applications.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Precise targeting of specific tissues</li>
                      <li>Suitable for various skin types</li>
                      <li>Minimal discomfort during treatment</li>
                      <li>Long-lasting results</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Low-Level Laser Therapy (LLLT)</h3>
                    <p className="text-neutral-700 mb-4">
                      A therapeutic approach using low-intensity lasers to stimulate healing, reduce inflammation, and relieve pain in various conditions.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Accelerates tissue repair</li>
                      <li>Reduces inflammation and pain</li>
                      <li>No heat or tissue damage</li>
                      <li>Effective for chronic conditions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-neutral-100 rounded-lg">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Personalized Treatment Plans</h2>
            <p className="text-neutral-700 mb-4">
              Our alternative medicine specialists work closely with you to develop a personalized treatment plan that considers your health goals, medical history, and lifestyle factors.
            </p>
            <p className="text-neutral-700">
              During your initial consultation, we'll conduct a comprehensive assessment to determine which alternative medicine approaches would be most beneficial for your specific situation. Many patients benefit from combining multiple modalities for optimal results.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default AlternativeMedicine;
