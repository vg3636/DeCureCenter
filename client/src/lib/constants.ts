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
    name: "Ophthalmology",
    slug: "ophthalmology",
    shortDescription: "Specialized eye care and ocular prosthetics",
    excerpt: "Our comprehensive ophthalmology department offers a full spectrum of eye care services, from routine eye exams to the diagnosis and treatment of complex eye conditions.",
    image: "https://images.unsplash.com/photo-1579684453377-48ec05e6f15d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vision Rehabilitation",
    slug: "vision-rehabilitation",
    shortDescription: "Services to improve visual function and quality of life",
    excerpt: "We provide specialized vision rehabilitation services to help individuals with vision loss regain independence and improve their quality of life.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ocular Oncology",
    slug: "ocular-oncology",
    shortDescription: "Specialized treatment for eye tumors and cancers",
    excerpt: "Our dedicated ocular oncology unit specializes in the diagnosis and treatment of eye tumors and cancers affecting the eyelids, conjunctiva, cornea, orbit, and intraocular structures.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Prosthetic Services",
    slug: "prosthetic-services",
    shortDescription: "Custom-made prosthetic eyes with natural appearance",
    excerpt: "We offer comprehensive prosthetic services for patients who have lost an eye or require a cosmetic shell, providing custom-made, natural-looking prosthetic eyes.",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Opticals",
    slug: "opticals",
    shortDescription: "High-quality eyeglasses and vision correction",
    excerpt: "Our optical department offers a wide selection of high-quality eyeglasses and frames to meet diverse visual needs and preferences with expert fitting services.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Low Vision Aids",
    slug: "low-vision-aids",
    shortDescription: "Specialized devices for visual impairment",
    excerpt: "We offer a range of low vision aids and devices to assist individuals with impaired vision in performing daily tasks and maximizing their remaining sight.",
    image: "https://images.unsplash.com/photo-1581595219315-a2f6a94b61b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Eye Plastic Surgery",
    slug: "eye-plastic-surgery",
    shortDescription: "Cosmetic and reconstructive procedures for the eye area",
    excerpt: "Our eye plastic surgery department specializes in cosmetic and reconstructive procedures around the eyes, including eyelid surgery, tear duct surgery, and orbital surgery.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Contact Lens",
    slug: "contact-lens",
    shortDescription: "Professional fitting and specialized contact lenses",
    excerpt: "We provide comprehensive contact lens services, including professional fittings for various types of contact lenses, from soft to rigid gas permeable and specialty lenses.",
    image: "https://images.unsplash.com/photo-1609840532227-1fe3c8c1b6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    shortDescription: "Comfortable and supportive patient experience",
    excerpt: "We are committed to providing a comfortable and supportive experience for all our patients and their families with hospitality services designed for a seamless visit.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
