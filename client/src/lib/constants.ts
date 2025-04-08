import { ReactNode } from 'react';

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  excerpt: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    name: "Alternative Medicine",
    slug: "alternative-medicine",
    shortDescription: "Complementary approaches to health and wellness",
    excerpt: "Explore non-conventional treatments including Cryolipolysis, EMS, Body Sculpting, Laser Cavitation, and more for holistic healing and wellness.",
    image: "https://images.unsplash.com/photo-1573811046880-d8a9ed7c3680?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Medical Advisory",
    slug: "medical-advisory",
    shortDescription: "Expert guidance for informed healthcare decisions",
    excerpt: "Get personalized consultations, health assessments, treatment planning, and second opinions from our experienced medical team.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Medical Checkup",
    slug: "medical-checkup",
    shortDescription: "Comprehensive health assessments and screenings",
    excerpt: "Preventive care through basic health screenings, executive health packages, and specialized examinations for early detection.",
    image: "https://images.unsplash.com/photo-1581595219315-a2f6a94b61b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Medical Tourism",
    slug: "medical-tourism",
    shortDescription: "World-class healthcare for international patients",
    excerpt: "Comprehensive services for international patients seeking quality healthcare in India, including travel arrangements and accommodation.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cosmetology & Aesthetics",
    slug: "cosmetology-aesthetics",
    shortDescription: "Advanced treatments for skin and aesthetic care",
    excerpt: "Non-invasive and minimally invasive procedures for facial rejuvenation, skin treatments, and body contouring.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Plastic Surgery",
    slug: "plastic-surgery",
    shortDescription: "Reconstructive and cosmetic surgical procedures",
    excerpt: "Comprehensive range of plastic surgery procedures performed by experienced surgeons using advanced techniques.",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Oncology",
    slug: "oncology",
    shortDescription: "Comprehensive cancer care and treatment",
    excerpt: "Multidisciplinary approach to cancer diagnosis, treatment, and support with cutting-edge therapies and personalized care.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ophthalmology",
    slug: "ophthalmology",
    shortDescription: "Specialized eye care and ocular prosthetics",
    excerpt: "Expert care for eye conditions, surgical procedures, and custom ocular prosthetics with natural appearance and comfort.",
    image: "https://images.unsplash.com/photo-1579684453377-48ec05e6f15d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
