import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Zap, Droplet } from 'lucide-react';
import CTASection from '../../components/CTASection';

const CosmetologyAesthetics = () => {
  return (
    <>
      <Helmet>
        <title>Cosmetology & Aesthetics - De Cure Center</title>
        <meta name="description" content="Advanced cosmetology and aesthetic treatments at De Cure Center including facial rejuvenation, skin care, and non-invasive body procedures." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Cosmetology & Aesthetics</h1>
            <p className="text-lg text-neutral-700">
              Advanced treatments for skin and aesthetic care
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Beauty Meets Science</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we combine artistry with medical expertise to provide cutting-edge aesthetic treatments that enhance your natural beauty and boost your confidence. Our cosmetology and aesthetics department offers a comprehensive range of non-invasive and minimally invasive procedures tailored to your unique needs and goals.
              </p>
              <p className="text-neutral-800">
                Our team of skilled dermatologists, aestheticians, and cosmetic specialists work together to deliver safe, effective treatments using advanced techniques and state-of-the-art equipment. We focus not only on visible improvements but also on the health and long-term condition of your skin.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Aesthetician performing facial treatment"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="facial" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="facial">Facial Treatments</TabsTrigger>
              <TabsTrigger value="skin">Skin Therapies</TabsTrigger>
              <TabsTrigger value="body">Body Procedures</TabsTrigger>
            </TabsList>

            <TabsContent value="facial">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Sparkles className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Dermal Fillers</h3>
                    <p className="text-neutral-700 mb-4">
                      Injectable treatments that restore volume, smooth lines, and enhance facial contours with natural-looking results.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Nasolabial fold correction</li>
                      <li>Lip enhancement</li>
                      <li>Cheek augmentation</li>
                      <li>Jawline definition</li>
                      <li>Tear trough correction</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Zap className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Botulinum Toxin</h3>
                    <p className="text-neutral-700 mb-4">
                      Precision injections to reduce dynamic wrinkles and fine lines by relaxing specific facial muscles.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Forehead lines treatment</li>
                      <li>Crow's feet reduction</li>
                      <li>Frown line smoothing</li>
                      <li>Neck band treatment</li>
                      <li>Masseter reduction</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Droplet className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Chemical Peels</h3>
                    <p className="text-neutral-700 mb-4">
                      Controlled exfoliation treatments to improve skin texture, tone, and address various skin concerns.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Superficial peels</li>
                      <li>Medium-depth peels</li>
                      <li>Deep chemical peels</li>
                      <li>Customized formula selection</li>
                      <li>Post-peel care</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skin">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Laser Skin Resurfacing</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced laser technology to improve skin texture, reduce scarring, and address pigmentation issues.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Fractional laser treatments</li>
                      <li>CO2 laser resurfacing</li>
                      <li>Erbium laser treatments</li>
                      <li>Acne scar reduction</li>
                      <li>Photorejuvenation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Microdermabrasion</h3>
                    <p className="text-neutral-700 mb-4">
                      Gentle exfoliation technique that removes the outermost layer of dead skin cells to reveal fresher, younger-looking skin.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Crystal microdermabrasion</li>
                      <li>Diamond-tip microdermabrasion</li>
                      <li>Hydra-dermabrasion</li>
                      <li>Customized treatment intensity</li>
                      <li>Series treatments for optimal results</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">PRP Therapy</h3>
                    <p className="text-neutral-700 mb-4">
                      Platelet-Rich Plasma treatments that harness your body's natural healing abilities to rejuvenate skin.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Facial rejuvenation</li>
                      <li>Hair restoration</li>
                      <li>Scar treatment</li>
                      <li>Microneedling with PRP</li>
                      <li>Under-eye area rejuvenation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="body">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Non-Surgical Fat Reduction</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced technologies to reduce stubborn fat deposits without surgery or significant downtime.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Cryolipolysis (fat freezing)</li>
                      <li>Ultrasound fat reduction</li>
                      <li>Radiofrequency treatments</li>
                      <li>Targeted area treatments</li>
                      <li>Body composition analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Skin Tightening</h3>
                    <p className="text-neutral-700 mb-4">
                      Non-invasive procedures that improve skin laxity and promote collagen production for firmer, more youthful-looking skin.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Radiofrequency treatments</li>
                      <li>Ultrasound therapy</li>
                      <li>Laser skin tightening</li>
                      <li>Thread lifts</li>
                      <li>Collagen stimulation treatments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Cellulite Reduction</h3>
                    <p className="text-neutral-700 mb-4">
                      Specialized treatments targeting the appearance of cellulite for smoother, more even skin texture.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Acoustic wave therapy</li>
                      <li>Subcision techniques</li>
                      <li>Massage-based treatments</li>
                      <li>Injectable treatments</li>
                      <li>Combination therapy approaches</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-neutral-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Approach to Aesthetic Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Personalized Treatment Plans</h3>
                <p className="text-neutral-700 mb-4">
                  We understand that each individual's skin and aesthetic goals are unique. Our specialists begin with a comprehensive assessment to understand your concerns, skin type, and desired outcomes. Based on this evaluation, we develop a customized treatment plan that may combine various procedures for optimal results.
                </p>
                <p className="text-neutral-700">
                  Our approach emphasizes natural-looking results that enhance your features while maintaining your unique appearance. We believe in progressive treatments that provide noticeable improvements while avoiding an overdone or artificial look.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Safety and Expertise</h3>
                <p className="text-neutral-700 mb-4">
                  All our aesthetic procedures are performed by qualified medical professionals with specialized training in cosmetic treatments. We adhere to strict safety protocols and use only FDA-approved products and technologies.
                </p>
                <p className="text-neutral-700">
                  Before any procedure, we conduct a thorough medical history review to ensure the selected treatments are appropriate for you. We also provide detailed aftercare instructions and follow-up support to optimize your results and minimize any potential side effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CosmetologyAesthetics;
