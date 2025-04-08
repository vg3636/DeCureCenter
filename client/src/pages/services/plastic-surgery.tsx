import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';
import CTASection from '../../components/CTASection';

const PlasticSurgery = () => {
  return (
    <>
      <Helmet>
        <title>Plastic Surgery - De Cure Center</title>
        <meta name="description" content="Comprehensive plastic surgery procedures at De Cure Center including facial surgeries, body contouring, and reconstructive procedures performed by expert surgeons." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Plastic Surgery</h1>
            <p className="text-lg text-neutral-700">
              Reconstructive and cosmetic surgical procedures
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Art and Science of Transformation</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our plastic surgery department combines surgical expertise with an artistic vision to deliver results that are not only aesthetically pleasing but also functionally optimal. Whether you're seeking a cosmetic enhancement or reconstructive procedure, our team of board-certified plastic surgeons is dedicated to helping you achieve your goals with safety and precision.
              </p>
              <p className="text-neutral-800">
                We offer a comprehensive range of surgical procedures using the latest techniques and technologies. Our approach emphasizes natural-looking results, minimal scarring, and reduced recovery time. Each surgical plan is tailored to your specific anatomy, desired outcomes, and lifestyle considerations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Plastic surgeon consulting with patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="facial" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="facial">Facial Procedures</TabsTrigger>
              <TabsTrigger value="body">Body Contouring</TabsTrigger>
              <TabsTrigger value="reconstructive">Reconstructive Surgery</TabsTrigger>
            </TabsList>

            <TabsContent value="facial">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Rhinoplasty</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical reshaping of the nose to improve its appearance and/or function. Our surgeons use advanced techniques to create harmony with your facial features.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Correction of nose size and shape</li>
                      <li>Nasal tip refinement</li>
                      <li>Correction of breathing difficulties</li>
                      <li>Revision rhinoplasty</li>
                      <li>Ethnic rhinoplasty</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Facelift & Neck Lift</h3>
                    <p className="text-neutral-700 mb-4">
                      Procedures to address facial aging by tightening underlying tissues and removing excess skin, resulting in a more youthful appearance.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Traditional full facelift</li>
                      <li>Mini facelift</li>
                      <li>Neck lift</li>
                      <li>SMAS lift technique</li>
                      <li>Natural-looking rejuvenation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Eyelid Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Blepharoplasty procedures to correct drooping eyelids, remove excess skin and fat, and rejuvenate the eye area.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Upper eyelid surgery</li>
                      <li>Lower eyelid surgery</li>
                      <li>Double eyelid procedure</li>
                      <li>Transconjunctival approach</li>
                      <li>Combined with brow lift when appropriate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Facial Implants</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical enhancement of facial contours using custom-selected implants to create balance and proportion.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Chin augmentation</li>
                      <li>Cheek implants</li>
                      <li>Jaw angle enhancement</li>
                      <li>Custom implant design</li>
                      <li>Natural-feeling results</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Liposuction</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical fat removal to contour specific areas of the body that are resistant to diet and exercise.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Traditional liposuction</li>
                      <li>Tumescent liposuction</li>
                      <li>Power-assisted liposuction</li>
                      <li>VASER liposuction</li>
                      <li>High-definition liposculpting</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Abdominoplasty</h3>
                    <p className="text-neutral-700 mb-4">
                      Tummy tuck procedures to remove excess skin and fat, tighten muscles, and create a firmer abdominal profile.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Full abdominoplasty</li>
                      <li>Mini-abdominoplasty</li>
                      <li>Extended abdominoplasty</li>
                      <li>Combined with liposuction</li>
                      <li>Post-pregnancy restoration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Breast Procedures</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical procedures to enhance, reduce, or lift the breasts for improved proportion and contour.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Breast augmentation</li>
                      <li>Breast reduction</li>
                      <li>Breast lift (mastopexy)</li>
                      <li>Breast reconstruction</li>
                      <li>Male breast reduction (gynecomastia)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Body Lift Procedures</h3>
                    <p className="text-neutral-700 mb-4">
                      Comprehensive procedures to remove excess skin and reshape body contours, often after significant weight loss.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Lower body lift</li>
                      <li>Arm lift (brachioplasty)</li>
                      <li>Thigh lift</li>
                      <li>Back lift</li>
                      <li>Post-bariatric body contouring</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reconstructive">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Ocular Reconstruction</h3>
                    <p className="text-neutral-700 mb-4">
                      Specialized procedures to reconstruct the eye area following trauma, cancer, or congenital conditions.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Eyelid reconstruction</li>
                      <li>Orbital reconstruction</li>
                      <li>Socket reconstruction for prosthetic eye</li>
                      <li>Lacrimal system restoration</li>
                      <li>Coordination with ocular prosthetics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Scar Revision</h3>
                    <p className="text-neutral-700 mb-4">
                      Procedures to improve the appearance of scars resulting from injuries, surgery, or burns.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Surgical scar revision</li>
                      <li>Z-plasty and W-plasty techniques</li>
                      <li>Tissue expansion</li>
                      <li>Laser scar treatment</li>
                      <li>Combination therapy approaches</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Burn Reconstruction</h3>
                    <p className="text-neutral-700 mb-4">
                      Comprehensive surgical care for burn survivors, addressing functional and aesthetic concerns.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Acute burn reconstruction</li>
                      <li>Contracture release</li>
                      <li>Skin grafting</li>
                      <li>Tissue expansion</li>
                      <li>Functional restoration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Hand Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Specialized procedures to address injuries, deformities, and conditions affecting hand function and appearance.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Tendon repair</li>
                      <li>Nerve reconstruction</li>
                      <li>Microsurgical procedures</li>
                      <li>Dupuytren's contracture treatment</li>
                      <li>Arthritis management</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-neutral-50 p-8 rounded-lg border border-primary-100">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Important Information About Plastic Surgery</h3>
                <p className="text-neutral-700 mb-4">
                  All surgical procedures carry inherent risks and require careful consideration. At De Cure Center, we prioritize patient safety and ensure you're fully informed about:
                </p>
                <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                  <li>Potential risks and complications specific to each procedure</li>
                  <li>Expected recovery time and post-operative care requirements</li>
                  <li>Realistic outcomes and limitations of surgical interventions</li>
                  <li>Alternative treatment options, both surgical and non-surgical</li>
                  <li>The importance of following pre and post-operative instructions</li>
                </ul>
                <p className="text-neutral-700 mt-4">
                  During your consultation, our surgeons will conduct a thorough assessment of your health history, discuss your goals in detail, and help you make an informed decision about whether plastic surgery is right for you.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-8 text-center">Our Surgical Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Comprehensive Consultation</h3>
                <p className="text-sm text-neutral-700">Detailed assessment of your goals, anatomy, and health history to create a personalized surgical plan</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Advanced Surgical Techniques</h3>
                <p className="text-sm text-neutral-700">Utilization of the latest surgical innovations to maximize results while minimizing scarring and recovery time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Comprehensive Aftercare</h3>
                <p className="text-sm text-neutral-700">Detailed post-operative support and follow-up care to ensure optimal healing and long-lasting results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PlasticSurgery;
