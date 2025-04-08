import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses, ShieldCheck, Gauge, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Opticals = () => {
  return (
    <>
      <Helmet>
        <title>Opticals - De Cure Center</title>
        <meta name="description" content="De Cure Center features a well-equipped optical department offering a wide selection of high-quality eyeglasses and frames to meet diverse visual needs and preferences with expert fitting services." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Opticals</h1>
            <p className="text-lg text-neutral-700">
              High-quality eyeglasses and vision correction
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Premium Eyewear Solutions</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our optical department offers a comprehensive selection of high-quality eyeglasses, frames, and lenses to meet the diverse visual needs and style preferences of our patients. We believe that eyewear should be both functional and fashionable, enhancing your vision while complementing your personal style.
              </p>
              <p className="text-neutral-800">
                Our experienced opticians provide expert fitting and dispensing services, ensuring that your eyeglasses fit comfortably and precisely. From helping you select the perfect frames to recommending the most appropriate lens options for your prescription and lifestyle, our team is committed to enhancing your visual experience with premium eyewear solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Optical display with various eyeglass frames"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Glasses className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Premium Frames</h3>
                <p className="text-neutral-700">
                  Explore our curated collection of designer and boutique frames, featuring the latest styles and timeless classics from leading brands. Our selection includes options for every face shape, style preference, and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Advanced Lenses</h3>
                <p className="text-neutral-700">
                  Access the latest in lens technology, including high-index, progressive, transition, and blue light-filtering options. Our opticians will recommend the ideal lens type based on your prescription and lifestyle needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Gauge className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Expert Fitting</h3>
                <p className="text-neutral-700">
                  Benefit from professional frame fitting and adjustments by our skilled opticians. We ensure your eyeglasses sit perfectly on your face for optimal comfort, vision correction, and appearance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-100">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Efficient Service</h3>
                <p className="text-neutral-700">
                  Experience our streamlined process from comprehensive eye exam to glasses delivery. Our on-site lab allows for faster turnaround times, getting you your new eyewear quickly without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Eyewear Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Prescription Eyeglasses</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Single vision lenses</li>
                    <li>Bifocal lenses</li>
                    <li>Progressive lenses</li>
                    <li>Computer glasses</li>
                    <li>Reading glasses</li>
                    <li>High-index lenses for stronger prescriptions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Specialty Lenses</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Transition lenses (photochromic)</li>
                    <li>Polarized lenses</li>
                    <li>Blue light filtering lenses</li>
                    <li>Anti-reflective coatings</li>
                    <li>Scratch-resistant coatings</li>
                    <li>UV-protective treatments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Frame Collection</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                    <li>Designer brands</li>
                    <li>Budget-friendly options</li>
                    <li>Hypoallergenic materials</li>
                    <li>Lightweight frames</li>
                    <li>Sports eyewear</li>
                    <li>Children's frames</li>
                    <li>Rimless and semi-rimless options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">The Optical Experience at De Cure Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Comprehensive Eye Examinations</h3>
                <p className="text-neutral-700 mb-4">
                  Before selecting eyewear, our optometrists conduct thorough eye examinations to determine your precise prescription needs. These comprehensive exams also assess your overall eye health, ensuring that your vision correction addresses all aspects of your visual function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Personalized Frame Selection</h3>
                <p className="text-neutral-700 mb-4">
                  Our opticians take the time to understand your lifestyle, preferences, and facial features to recommend frames that complement your appearance and meet your practical needs. We consider factors like face shape, skin tone, and personal style to help you find the perfect frames.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Advanced Lens Consultation</h3>
                <p className="text-neutral-700 mb-4">
                  We discuss your daily activities, work environment, and visual requirements to recommend the most appropriate lens types and treatments. Whether you spend long hours on digital devices, enjoy outdoor activities, or require precision vision for detailed tasks, we have lens solutions to enhance your visual experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Precision Fitting and Adjustments</h3>
                <p className="text-neutral-700 mb-4">
                  After selecting your frames and lenses, our opticians ensure a precise fit through careful measurements and adjustments. Even after you take your new glasses home, we provide ongoing adjustments to maintain comfort and optimal vision correction as needed.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">See the Difference with Quality Eyewear</h2>
            <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
              Visit De Cure Center's optical department to explore our extensive collection of eyewear and experience our personalized approach to vision correction. Whether you need your first pair of glasses or are looking to update your eyewear collection, our team is ready to help you find the perfect solution for your vision needs and personal style.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Schedule an Eye Exam
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Opticals;