import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CTASection from '../components/CTASection';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const beforeAfterImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1627933540891-1b6b1c86e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Before and after ocular prosthetic fitting - Case 1",
    caption: "Patient with congenital condition before and after prosthetic fitting. Notice the natural appearance of the prosthetic eye."
  },
  {
    src: "https://images.unsplash.com/photo-1576089073624-b5db3f76ff45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Before and after ocular prosthetic fitting - Case 2",
    caption: "Trauma case before and after fitting. The prosthetic matches the natural eye's color and appearance perfectly."
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Before and after ocular prosthetic fitting - Case 3",
    caption: "Patient after eye removal due to cancer, shown before and after prosthetic fitting. The prosthetic provides a natural appearance."
  },
  {
    src: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Before and after ocular prosthetic fitting - Case 4",
    caption: "Child patient before and after receiving a custom prosthetic eye, showing excellent symmetry with the natural eye."
  }
];

const facilityImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "De Cure Center reception area",
    caption: "Our modern reception area designed to make patients feel welcome and comfortable."
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Consultation room at De Cure Center",
    caption: "One of our consultation rooms equipped with advanced diagnostic equipment."
  },
  {
    src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Prosthetic fabrication laboratory",
    caption: "Our state-of-the-art laboratory where custom prosthetic eyes are meticulously crafted."
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Recovery area at De Cure Center",
    caption: "Comfortable recovery area where patients can rest after procedures."
  }
];

const procedureImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1576670159375-d741737de3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Initial consultation and measurement",
    caption: "Specialist taking detailed measurements for a custom prosthetic eye."
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Creating wax model",
    caption: "Crafting a wax model to ensure perfect fit and shape before final production."
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Hand-painting the prosthetic",
    caption: "Artist hand-painting details to match the patient's natural eye color and pattern."
  },
  {
    src: "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Final fitting and adjustment",
    caption: "Final fitting session ensuring comfort and natural appearance of the prosthetic eye."
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Gallery - De Cure Center</title>
        <meta name="description" content="View our gallery showcasing before and after results, our facility, and prosthetic procedures at De Cure Center." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Gallery</h1>
            <p className="text-lg text-neutral-700">
              Explore images of our work, facility, and procedures
            </p>
          </div>

          <Tabs defaultValue="before-after" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="before-after">Before & After</TabsTrigger>
              <TabsTrigger value="facility">Our Facility</TabsTrigger>
              <TabsTrigger value="procedures">Procedures</TabsTrigger>
            </TabsList>

            <TabsContent value="before-after">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {beforeAfterImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facility">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {facilityImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="procedures">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {procedureImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              {selectedImage && (
                <>
                  <DialogTitle className="text-xl font-semibold text-primary-600">
                    {selectedImage.alt}
                  </DialogTitle>
                  <div className="my-4">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <DialogDescription className="text-neutral-700">
                    {selectedImage.caption}
                  </DialogDescription>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <CTASection />
    </>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <div
        className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={onClick}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 bg-white">
          <p className="font-medium text-neutral-800">{image.alt}</p>
        </div>
      </div>
    </DialogTrigger>
  </Dialog>
);

export default Gallery;
