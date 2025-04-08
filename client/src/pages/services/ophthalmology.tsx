import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Droplet, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import CTASection from '../../components/CTASection';

const Ophthalmology = () => {
  return (
    <>
      <Helmet>
        <title>Ophthalmology - De Cure Center</title>
        <meta name="description" content="Specialized eye care services at De Cure Center including ocular prosthetics, surgical procedures, and treatments for various eye conditions." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Ophthalmology</h1>
            <p className="text-lg text-neutral-700">
              Specialized eye care and ocular prosthetics
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Comprehensive Eye Care</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our ophthalmology department is dedicated to providing exceptional eye care services, from routine examinations to complex surgical procedures and specialized ocular prosthetics. Our team of experienced ophthalmologists, ocularists, and vision specialists work together to deliver personalized care using the latest diagnostic equipment and treatment techniques.
              </p>
              <p className="text-neutral-800">
                We understand the profound impact that vision has on quality of life, and we're committed to preserving, restoring, and enhancing your eye health. Whether you're seeking treatment for an eye condition, exploring ocular prosthetic options, or need routine vision care, our comprehensive services are designed to meet your needs with compassion and expertise.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579684453377-48ec05e6f15d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Ophthalmologist examining patient's eye"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="prosthetics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="prosthetics">Ocular Prosthetics</TabsTrigger>
              <TabsTrigger value="treatments">Eye Treatments</TabsTrigger>
              <TabsTrigger value="surgeries">Surgical Procedures</TabsTrigger>
            </TabsList>

            <TabsContent value="prosthetics">
              <div className="mb-8">
                <Card className="bg-primary-50 border-primary-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                        <Eye className="h-16 w-16 text-primary-600" />
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Ocular Prosthetics Expertise</h3>
                        <p className="text-neutral-700 mb-4">
                          De Cure Center is renowned for our exceptional ocular prosthetics service. With over 5,000 custom prosthetic eyes fitted by India's leading oculists, we specialize in creating lifelike, comfortable, and functional prosthetic eyes that are virtually indistinguishable from natural eyes.
                        </p>
                        <p className="text-neutral-700">
                          Our team combines artistic craftsmanship with medical precision to match color, size, and even tiny blood vessels with remarkable accuracy, restoring not just appearance but confidence and quality of life.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Custom Prosthetic Eyes</h3>
                    <p className="text-neutral-700 mb-4">
                      Individually crafted prosthetic eyes designed to match your natural eye in appearance and movement.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Detailed color matching process</li>
                      <li>Hand-painted iris and sclera</li>
                      <li>Custom sizing for optimal comfort</li>
                      <li>Natural-looking blood vessel patterns</li>
                      <li>Smooth, biocompatible acrylic material</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Ocular Implants</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical implants that provide a foundation for prosthetic eyes, enhancing mobility and natural appearance.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Integrated implant systems</li>
                      <li>Porous materials that integrate with tissue</li>
                      <li>Implants with motility pegs</li>
                      <li>Custom-sized orbital implants</li>
                      <li>Post-implant fitting coordination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Prosthetic Fitting Process</h3>
                    <p className="text-neutral-700 mb-4">
                      Our comprehensive fitting process ensures optimal comfort, appearance, and functionality.
                    </p>
                    <ol className="list-decimal pl-5 text-neutral-700 space-y-1">
                      <li>Initial consultation and assessment</li>
                      <li>Socket impression and measurements</li>
                      <li>Wax model fitting and adjustments</li>
                      <li>Detailed color matching session</li>
                      <li>Final prosthetic fabrication</li>
                      <li>Delivery and wear instructions</li>
                      <li>Follow-up adjustments as needed</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Pediatric Ocular Prosthetics</h3>
                    <p className="text-neutral-700 mb-4">
                      Specialized care for children with congenital conditions or those who have experienced eye loss.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Child-friendly approach to fitting</li>
                      <li>Growth considerations and adjustments</li>
                      <li>Support for families and caregivers</li>
                      <li>Coordination with pediatric ophthalmologists</li>
                      <li>Regular replacement as child grows</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Prosthetic Eye Care</h3>
                    <p className="text-neutral-700 mb-4">
                      Comprehensive maintenance services and education to ensure longevity of your prosthetic eye.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Professional cleaning and polishing</li>
                      <li>Surface restoration</li>
                      <li>Detailed care instructions</li>
                      <li>Replacement assessment</li>
                      <li>Socket health evaluation</li>
                      <li>Regular maintenance schedule</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="treatments">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Eye className="h-10 w-10 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 mb-3">Glaucoma Management</h3>
                        <p className="text-neutral-700 mb-3">
                          Comprehensive approach to treating and managing glaucoma to preserve vision and prevent progression.
                        </p>
                        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                          <li>Intraocular pressure monitoring</li>
                          <li>Visual field testing</li>
                          <li>Medical therapy options</li>
                          <li>Laser treatment procedures</li>
                          <li>Surgical interventions when indicated</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Droplet className="h-10 w-10 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 mb-3">Dry Eye Treatment</h3>
                        <p className="text-neutral-700 mb-3">
                          Relief for dry eye syndrome through various therapeutic approaches tailored to your specific condition.
                        </p>
                        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                          <li>Comprehensive dry eye evaluation</li>
                          <li>Artificial tear recommendations</li>
                          <li>Punctal plug insertion</li>
                          <li>LipiFlow thermal pulsation</li>
                          <li>Prescription medications</li>
                          <li>Nutritional guidance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Retinal Disorder Management</h3>
                    <p className="text-neutral-700 mb-3">
                      Specialized care for conditions affecting the retina, including diabetic retinopathy and macular degeneration.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Advanced retinal imaging</li>
                      <li>Intravitreal injections</li>
                      <li>Laser photocoagulation</li>
                      <li>Anti-VEGF therapy</li>
                      <li>Monitoring and management protocols</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Corneal Conditions</h3>
                    <p className="text-neutral-700 mb-3">
                      Diagnosis and treatment of various corneal disorders to preserve clarity and vision.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Keratoconus management</li>
                      <li>Corneal infection treatment</li>
                      <li>Corneal abrasion care</li>
                      <li>Dystrophy management</li>
                      <li>Contact lens fittings for corneal conditions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="surgeries">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Microscope className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Cataract Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced cataract removal with premium lens options for improved vision at all distances.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Phacoemulsification technique</li>
                      <li>Laser-assisted cataract surgery</li>
                      <li>Monofocal lens implants</li>
                      <li>Multifocal lens options</li>
                      <li>Toric lenses for astigmatism</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Eye className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">LASIK & Refractive Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Vision correction procedures to reduce dependence on glasses and contact lenses.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>LASIK surgery</li>
                      <li>PRK (Photorefractive Keratectomy)</li>
                      <li>SMILE procedure</li>
                      <li>Refractive lens exchange</li>
                      <li>Comprehensive pre-operative evaluation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Droplet className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Glaucoma Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Surgical interventions for glaucoma when medication and laser treatments are insufficient.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Trabeculectomy</li>
                      <li>Tube shunt procedures</li>
                      <li>Minimally invasive glaucoma surgery (MIGS)</li>
                      <li>Selective laser trabeculoplasty (SLT)</li>
                      <li>Cyclophotocoagulation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Corneal Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Procedures to restore corneal function and clarity for improved vision.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Corneal transplantation (PK, DALK, DSEK, DMEK)</li>
                      <li>Pterygium removal</li>
                      <li>Corneal crosslinking for keratoconus</li>
                      <li>Amniotic membrane grafting</li>
                      <li>Intrastromal corneal ring segments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Oculoplastic Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Reconstructive and cosmetic procedures for the eyelids, tear ducts, and orbit.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Eyelid ptosis repair</li>
                      <li>Blepharoplasty</li>
                      <li>Entropion/ectropion correction</li>
                      <li>Tear duct surgery</li>
                      <li>Orbital reconstruction</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Vitreoretinal Surgery</h3>
                    <p className="text-neutral-700 mb-4">
                      Microsurgical interventions for conditions affecting the vitreous and retina.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Retinal detachment repair</li>
                      <li>Macular hole surgery</li>
                      <li>Vitrectomy for diabetic retinopathy</li>
                      <li>Epiretinal membrane peeling</li>
                      <li>Complex retinal cases</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 p-8 bg-primary-50 rounded-lg border border-primary-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Why Choose De Cure Center for Ocular Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Expertise in Ocular Prosthetics</h3>
                  <p className="text-neutral-700 mb-3">
                    With over 5,000 successful prosthetic fittings, our team has unparalleled experience in creating natural-looking, comfortable ocular prosthetics. Our oculists combine artistic skill with medical precision to achieve results that restore not just appearance, but confidence.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Expert color matching techniques</li>
                    <li>Natural movement integration</li>
                    <li>Customized comfort adjustments</li>
                    <li>Long-term care support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Comprehensive Eye Care Approach</h3>
                  <p className="text-neutral-700 mb-3">
                    Beyond our specialization in ocular prosthetics, we provide complete eye care services with a patient-centered approach. Our ophthalmologists are board-certified specialists with expertise in various eye conditions and surgical procedures.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Advanced diagnostic technology</li>
                    <li>Minimally invasive techniques</li>
                    <li>Personalized treatment plans</li>
                    <li>Integrated care coordination</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                    Schedule Your Ophthalmology Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Ophthalmology;
