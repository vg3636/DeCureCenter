import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Book, Monitor, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const LowVisionAids = () => {
  return (
    <>
      <Helmet>
        <title>Low Vision Aids - De Cure Center</title>
        <meta name="description" content="De Cure Center offers a range of low vision aids and devices to assist individuals with impaired vision in performing daily tasks and maximizing their remaining sight." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Low Vision Aids</h1>
            <p className="text-lg text-neutral-700">
              Specialized devices for visual impairment
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Maximizing Your Remaining Vision</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, we offer a comprehensive range of low vision aids and devices designed to help individuals with impaired vision perform daily tasks and maximize their remaining sight. Our specialists provide personalized assessments and recommendations for appropriate low vision solutions tailored to your specific condition and needs.
              </p>
              <p className="text-neutral-800">
                Low vision refers to visual impairment that cannot be fully corrected with standard glasses, contact lenses, medication, or surgery. Our goal is to enhance your independence and quality of life by providing tools and techniques that make the most of your functional vision, regardless of the underlying cause of your vision loss.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581595219315-a2f6a94b61b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Person using a magnifier to read text"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Search className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Magnification Devices</h3>
                <p className="text-neutral-700">
                  Enhance your ability to see details with our range of optical and electronic magnifiers designed for various tasks and environments.
                </p>
                <ul className="list-disc pl-5 text-neutral-700 space-y-1 mt-3">
                  <li>Handheld magnifiers</li>
                  <li>Stand magnifiers</li>
                  <li>Electronic magnifiers</li>
                  <li>Magnifying reading glasses</li>
                  <li>Pocket magnifiers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Book className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Reading Aids</h3>
                <p className="text-neutral-700">
                  Continue enjoying books, newspapers, and other reading materials with specialized tools designed to make reading accessible.
                </p>
                <ul className="list-disc pl-5 text-neutral-700 space-y-1 mt-3">
                  <li>Reading stands and bookholders</li>
                  <li>Large print materials</li>
                  <li>Reading lights with adjustable brightness</li>
                  <li>Page magnification sheets</li>
                  <li>Reading slits and guides</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Monitor className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Electronic Assistive Technology</h3>
                <p className="text-neutral-700">
                  Leverage modern technology to overcome visual challenges with sophisticated electronic devices and software.
                </p>
                <ul className="list-disc pl-5 text-neutral-700 space-y-1 mt-3">
                  <li>Video magnifiers (CCTVs)</li>
                  <li>Screen reading software</li>
                  <li>Text-to-speech converters</li>
                  <li>Accessible smartphones and tablets</li>
                  <li>Audio description devices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Settings className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Daily Living Aids</h3>
                <p className="text-neutral-700">
                  Maintain independence in everyday activities with practical tools designed for those with visual impairments.
                </p>
                <ul className="list-disc pl-5 text-neutral-700 space-y-1 mt-3">
                  <li>High-contrast clocks and watches</li>
                  <li>Talking devices (scales, thermometers)</li>
                  <li>Tactile markers for appliances</li>
                  <li>Signature guides</li>
                  <li>Adaptive kitchen tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Low Vision Assessment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">1</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Comprehensive Evaluation</h3>
                  <p className="text-neutral-700">
                    Our low vision specialists conduct a thorough assessment of your visual function, including acuity, contrast sensitivity, visual field, and how your vision affects daily activities. We also discuss your specific visual goals and challenges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">2</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Personalized Solutions</h3>
                  <p className="text-neutral-700">
                    Based on your assessment, we recommend appropriate low vision aids and strategies tailored to your specific needs. You'll have the opportunity to try different devices to determine which ones work best for you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">3</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Training and Support</h3>
                  <p className="text-neutral-700">
                    We provide comprehensive training on how to use your recommended low vision aids effectively. Our ongoing support ensures you can adapt to your devices and continue to benefit from them as your needs evolve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Conditions We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Age-Related Conditions</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Age-related Macular Degeneration (AMD):</span> We offer specialized magnification devices and electronic aids to help with central vision loss.
                    </li>
                    <li>
                      <span className="font-medium">Cataracts:</span> While waiting for surgery or if surgery is not an option, our lighting solutions and contrast-enhancing aids can help improve vision.
                    </li>
                    <li>
                      <span className="font-medium">Glaucoma:</span> For peripheral vision loss, we provide training in scanning techniques and specialized visual field enhancement devices.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Other Visual Impairments</h3>
                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>
                      <span className="font-medium">Diabetic Retinopathy:</span> Depending on the pattern of vision loss, we recommend appropriate magnification and contrast-enhancing devices.
                    </li>
                    <li>
                      <span className="font-medium">Retinitis Pigmentosa:</span> We provide specialized lighting solutions and mobility aids for navigating with reduced peripheral vision.
                    </li>
                    <li>
                      <span className="font-medium">Stroke-Related Vision Loss:</span> Our rehabilitation approaches address hemianopia and other visual field defects resulting from stroke.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Enhance Your Visual Independence</h2>
            <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
              If you're experiencing vision impairment that affects your daily life, contact De Cure Center to schedule a low vision assessment. Our specialists will work with you to identify the most effective aids and strategies to help you maintain independence and improve your quality of life.
            </p>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Schedule a Low Vision Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default LowVisionAids;