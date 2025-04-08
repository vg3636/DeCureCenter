import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Activity, ShieldCheck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const ContactLens = () => {
  return (
    <>
      <Helmet>
        <title>Contact Lens - De Cure Center</title>
        <meta name="description" content="De Cure Center provides comprehensive contact lens services, including professional fittings for various types of contact lenses, such as soft, rigid gas permeable, and specialty lenses." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Contact Lens</h1>
            <p className="text-lg text-neutral-700">
              Professional fitting and specialized contact lenses
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Expert Contact Lens Services</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we provide comprehensive contact lens services designed to meet the diverse needs of our patients. Our experienced optometrists and contact lens specialists offer professional fittings for a wide range of contact lenses, from standard soft lenses to specialized options for complex eye conditions.
              </p>
              <p className="text-neutral-800">
                We understand that proper contact lens fit is essential for comfort, clear vision, and long-term eye health. Our team takes a thorough, personalized approach to contact lens fitting, ensuring that you receive the most appropriate lenses for your prescription, lifestyle, and eye health needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1609840532227-1fe3c8c1b6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Contact lens specialist fitting contact lenses for a patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Eye className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Comprehensive Eye Exam</h3>
                <p className="text-neutral-700">
                  Before prescribing contact lenses, we conduct a thorough eye examination to assess your vision needs and eye health, ensuring that contacts are appropriate for your specific situation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Activity className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Expert Fitting</h3>
                <p className="text-neutral-700">
                  Our specialists take precise measurements of your eyes and evaluate important factors such as tear production to determine the optimal lens size, curvature, and material for your eyes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Personalized Education</h3>
                <p className="text-neutral-700">
                  We provide comprehensive training on proper insertion, removal, cleaning, and maintenance of your contact lenses to ensure safe wear and optimal eye health.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Ongoing Support</h3>
                <p className="text-neutral-700">
                  Our care continues with regular follow-up appointments to assess how your contacts are performing, make adjustments as needed, and ensure your eyes remain healthy with contact lens wear.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Contact Lens Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Soft Contact Lenses</h3>
                  <p className="text-neutral-700 mb-3">
                    Comfortable, flexible lenses suitable for most prescriptions and eye types.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Daily disposable lenses</li>
                    <li>Two-week replacement lenses</li>
                    <li>Monthly replacement lenses</li>
                    <li>Extended wear options</li>
                    <li>Toric lenses for astigmatism</li>
                    <li>Multifocal lenses for presbyopia</li>
                    <li>Colored and tinted lenses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Rigid Gas Permeable (RGP) Lenses</h3>
                  <p className="text-neutral-700 mb-3">
                    Durable lenses that provide exceptional visual clarity and are suitable for certain eye conditions.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Standard RGP lenses</li>
                    <li>Toric RGP lenses</li>
                    <li>Bifocal and multifocal RGP lenses</li>
                    <li>Daily wear options</li>
                    <li>Extended wear options</li>
                    <li>Custom-designed RGP lenses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Specialty Contact Lenses</h3>
                  <p className="text-neutral-700 mb-3">
                    Advanced lens options for complex eye conditions and specific visual needs.
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Scleral lenses for irregular corneas</li>
                    <li>Hybrid lenses (RGP center with soft skirt)</li>
                    <li>Prosthetic lenses for cosmetic correction</li>
                    <li>Orthokeratology (corneal reshaping) lenses</li>
                    <li>Lenses for keratoconus</li>
                    <li>Bandage contact lenses for corneal healing</li>
                    <li>Custom-designed specialty lenses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Specialized Contact Lens Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Contact Lenses for Complex Conditions</h3>
                  <p className="text-neutral-700 mb-4">
                    Our specialists have extensive experience fitting contact lenses for patients with challenging eye conditions, including:
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Keratoconus:</span> We offer specialized rigid gas permeable lenses, hybrids, and scleral lenses that vault over the irregular cornea to provide clear, comfortable vision.
                    </li>
                    <li>
                      <span className="font-medium">Post-Surgical Eyes:</span> Custom contact lens solutions for patients who have undergone corneal transplants, LASIK, or other eye surgeries.
                    </li>
                    <li>
                      <span className="font-medium">Severe Dry Eye:</span> Special lenses and fitting techniques for patients with dry eye syndrome, ensuring comfortable wear with minimal irritation.
                    </li>
                    <li>
                      <span className="font-medium">High Astigmatism:</span> Advanced toric lens designs that provide stable, clear vision for patients with significant astigmatism.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Specialty Lens Applications</h3>
                  <p className="text-neutral-700 mb-4">
                    Beyond vision correction, we offer contact lenses for various specialized purposes:
                  </p>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Orthokeratology:</span> Specially designed RGP lenses worn overnight to temporarily reshape the cornea, allowing for clear vision during the day without lenses—often used for myopia control in children.
                    </li>
                    <li>
                      <span className="font-medium">Prosthetic Lenses:</span> Custom-tinted lenses to improve the appearance of damaged or disfigured eyes, or to address conditions like aniridia (absence of the iris).
                    </li>
                    <li>
                      <span className="font-medium">Therapeutic Lenses:</span> Bandage contact lenses that protect the cornea and promote healing after injury or surgery.
                    </li>
                    <li>
                      <span className="font-medium">Sports Vision:</span> Specialized contact lenses designed for athletes, providing optimal vision, comfort, and stability during physical activity.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Experience Clear, Comfortable Vision with Contact Lenses</h2>
            <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
              Whether you're new to contact lenses or looking for a more comfortable or effective option, our team at De Cure Center is here to help. Contact us today to schedule a comprehensive eye examination and contact lens consultation to discover the right contact lens solution for your unique visual needs.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Schedule a Contact Lens Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactLens;