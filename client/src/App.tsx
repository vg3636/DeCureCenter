import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import ServicesIndex from "./pages/services/index";
import AlternativeMedicine from "./pages/services/alternative-medicine";
import MedicalAdvisory from "./pages/services/medical-advisory";
import MedicalCheckup from "./pages/services/medical-checkup";
import MedicalTourism from "./pages/services/medical-tourism";
import CosmetologyAesthetics from "./pages/services/cosmetology-aesthetics";
import PlasticSurgery from "./pages/services/plastic-surgery";
import Oncology from "./pages/services/oncology";
import Ophthalmology from "./pages/services/ophthalmology";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
