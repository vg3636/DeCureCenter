import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { lazy, Suspense, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageSelector";

// Import loading indicator
import LoadingIndicator from './components/LoadingIndicator';

// Lazy load pages for better performance
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ServicesIndex = lazy(() => import("./pages/services/index"));

// Lazy load service pages
const AlternativeMedicine = lazy(() => import("./pages/services/alternative-medicine"));
const MedicalAdvisory = lazy(() => import("./pages/services/medical-advisory"));
const MedicalCheckup = lazy(() => import("./pages/services/medical-checkup"));
const MedicalTourism = lazy(() => import("./pages/services/medical-tourism"));
const CosmetologyAesthetics = lazy(() => import("./pages/services/cosmetology-aesthetics"));
const PlasticSurgery = lazy(() => import("./pages/services/plastic-surgery"));
const Oncology = lazy(() => import("./pages/services/oncology"));
const Ophthalmology = lazy(() => import("./pages/services/ophthalmology"));
const VisionRehabilitation = lazy(() => import("./pages/services/vision-rehabilitation"));
const OcularOncology = lazy(() => import("./pages/services/ocular-oncology"));
const ProstheticServices = lazy(() => import("./pages/services/prosthetic-services"));
const Opticals = lazy(() => import("./pages/services/opticals"));
const LowVisionAids = lazy(() => import("./pages/services/low-vision-aids"));
const EyePlasticSurgery = lazy(() => import("./pages/services/eye-plastic-surgery"));
const ContactLens = lazy(() => import("./pages/services/contact-lens"));
const Hospitality = lazy(() => import("./pages/services/hospitality"));

// Add scroll to top behavior
function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add event listener for navigation clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.closest('a') || 
          target.closest('button[data-nav]') ||
          target.closest('[role="link"]') ||
          target.closest('[data-nav-item]')) {
        // This is a navigation element, scroll to top
        setTimeout(() => window.scrollTo(0, 0), 100);
      }
    };
    
    // Listen for click events on navigation elements
    document.addEventListener('click', handleClick);
    
    // Listen for popstate events (browser back/forward)
    const handlePopState = () => window.scrollTo(0, 0);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Suspense fallback={<LoadingIndicator />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/services" component={ServicesIndex} />
            <Route path="/services/alternative-medicine" component={AlternativeMedicine} />
            <Route path="/services/medical-advisory" component={MedicalAdvisory} />
            <Route path="/services/medical-checkup" component={MedicalCheckup} />
            <Route path="/services/medical-tourism" component={MedicalTourism} />
            <Route path="/services/cosmetology-aesthetics" component={CosmetologyAesthetics} />
            <Route path="/services/plastic-surgery" component={PlasticSurgery} />
            <Route path="/services/oncology" component={Oncology} />
            <Route path="/services/ophthalmology" component={Ophthalmology} />
            <Route path="/services/vision-rehabilitation" component={VisionRehabilitation} />
            <Route path="/services/ocular-oncology" component={OcularOncology} />
            <Route path="/services/prosthetic-services" component={ProstheticServices} />
            <Route path="/services/opticals" component={Opticals} />
            <Route path="/services/low-vision-aids" component={LowVisionAids} />
            <Route path="/services/eye-plastic-surgery" component={EyePlasticSurgery} />
            <Route path="/services/contact-lens" component={ContactLens} />
            <Route path="/services/hospitality" component={Hospitality} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
