import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Brush, PenTool, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const ProstheticServices = () => {
  return (
    <>
      <Helmet>
        <title>Prosthetic Services - De Cure Center</title>
        <meta name="description" content="At De Cure Center, we offer comprehensive prosthetic services for patients who have lost an eye or require a cosmetic shell, providing custom-made, natural-looking prosthetic eyes that ensure comfort, proper fit, and enhanced aesthetics." />
      </Helmet>

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f8fafc] to-[#e6f7ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1e3a52] mb-4">Prosthetic Services</h1>
            <p className="text-lg text-gray-700">
              Custom-made prosthetic eyes with natural appearance
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#2d4a63] mb-4">Artistry and Precision in Ocular Prosthetics</h2>
              <p className="text-gray-700 mb-4">
                At De Cure Center, we understand the profound impact that losing an eye can have on a person's life. Our prosthetic eye services blend artistic craftsmanship with medical expertise to create custom-made prosthetic eyes that are virtually indistinguishable from natural eyes.
              </p>
              <p className="text-gray-700">
                With over 5,000 custom prosthetic eyes fitted by India's leading ocularists, we have built a reputation for excellence in creating comfortable, natural-looking prostheses that restore not just appearance but confidence and quality of life. Each prosthetic eye is meticulously handcrafted to match your remaining eye's color, size, and even tiny blood vessels with remarkable accuracy.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Ocularist working on a custom prosthetic eye"
                className="rounded-lg shadow-md border border-[#d0e8f2] w-full h-auto transition-all duration-300 hover:shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] rounded-lg p-8 mb-16 border border-[#d0e8f2] shadow-md">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6 text-center">Our Prosthetic Eye Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Eye className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Custom Prosthetic Eyes</h3>
                      <p className="text-gray-700 mb-3">
                        Individually crafted prosthetic eyes designed to match your natural eye in appearance and provide comfortable wear.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Detailed color matching process</li>
                        <li>Hand-painted iris and sclera</li>
                        <li>Custom sizing for optimal comfort</li>
                        <li>Natural-looking blood vessel patterns</li>
                        <li>Smooth, biocompatible acrylic material</li>
                        <li>Polished to ensure comfort and durability</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <PenTool className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Ocular Implants</h3>
                      <p className="text-gray-700 mb-3">
                        Surgical implants that provide a foundation for prosthetic eyes, enhancing mobility and natural appearance.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Integrated implant systems</li>
                        <li>Porous materials that integrate with tissue</li>
                        <li>Implants with motility pegs</li>
                        <li>Custom-sized orbital implants</li>
                        <li>Post-implant fitting coordination</li>
                        <li>Collaboration with ophthalmologists</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6 text-center">The Prosthetic Eye Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a52] text-white flex items-center justify-center text-xl font-semibold shadow-md">1</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Initial Consultation</h3>
                  <p className="text-gray-700">
                    Our ocularist will conduct a thorough evaluation of your eye socket, discuss your expectations, and explain the prosthetic eye process. We'll address any concerns and develop a personalized plan for your prosthetic eye.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a52] text-white flex items-center justify-center text-xl font-semibold shadow-md">2</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Impression and Design</h3>
                  <p className="text-gray-700">
                    We take a precise impression of your eye socket to ensure a perfect fit. Our skilled ocularists then create a wax model for trying in the socket, making adjustments for optimal comfort and movement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a52] text-white flex items-center justify-center text-xl font-semibold shadow-md">3</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a52] mb-3 text-center">Fabrication and Delivery</h3>
                  <p className="text-gray-700">
                    Using advanced techniques, we create your prosthetic eye with meticulous attention to detail. The iris is hand-painted to match your natural eye, and the sclera is crafted with realistic blood vessels. Once complete, we ensure proper fit and provide comprehensive care instructions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Brush className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Specialized Services</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>
                        <span className="font-medium">Pediatric Ocular Prosthetics:</span> Specially designed prosthetic eyes for children, with considerations for growth and development.
                      </li>
                      <li>
                        <span className="font-medium">Cosmetic Shells:</span> Thin prosthetic covers for eyes that are disfigured but still present, restoring normal appearance.
                      </li>
                      <li>
                        <span className="font-medium">Custom Scleral Shells:</span> Specialized prosthetics for challenging cases, including contracted sockets or unusual anatomy.
                      </li>
                      <li>
                        <span className="font-medium">Prosthetic Eye Polishing:</span> Professional cleaning and polishing to maintain the appearance and extend the life of your prosthetic eye.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#d0e8f2] shadow-md hover:shadow-lg hover:border-[#2d4a63] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Sparkles className="h-8 w-8 text-[#2d4a63] mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e3a52] mb-3">Ongoing Care and Support</h3>
                    <p className="text-gray-700 mb-3">
                      Our commitment to your care continues long after you receive your prosthetic eye. We provide:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Detailed instructions for daily care and maintenance</li>
                      <li>Regular follow-up appointments to ensure optimal fit</li>
                      <li>Adjustments as needed to maintain comfort and appearance</li>
                      <li>Professional cleaning and polishing services</li>
                      <li>Socket health evaluations</li>
                      <li>Emotional support and resources for adjusting to life with a prosthetic eye</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1e3a52] mb-6">Restore Your Confidence and Appearance</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're seeking a prosthetic eye following eye loss or need to replace an existing prosthesis, our team at De Cure Center is dedicated to providing you with a natural-looking, comfortable solution. Contact us today to schedule a consultation and take the first step toward restoring your appearance and confidence.
            </p>
            <Link href="/contact">
              <Button className="bg-[#1e3a52] hover:bg-[#0f2942] text-white shadow-md hover:shadow-lg transition-all duration-300">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProstheticServices;