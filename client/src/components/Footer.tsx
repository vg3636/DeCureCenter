import { Link } from 'wouter';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink, Calendar, Clock, FileText, Home } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { useTranslation } from './LanguageSelector';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1e3a52] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">De Cure Center</h3>
            <p className="text-white">
              {t('Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.')}
            </p>
            <div className="mt-6 space-y-2">
              <Link to="/" className="flex items-center text-white hover:text-[#8ecdf7] transition-colors duration-200">
                <Home className="w-4 h-4 mr-2" />
                <span>{t('Home')}</span>
              </Link>
              <Link to="/about" className="flex items-center text-white hover:text-[#8ecdf7] transition-colors duration-200">
                <FileText className="w-4 h-4 mr-2" />
                <span>{t('About')}</span>
              </Link>
              <Link to="/gallery" className="flex items-center text-white hover:text-[#8ecdf7] transition-colors duration-200">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>{t('Gallery')}</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Services')}</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-white hover:text-[#8ecdf7] transition-colors duration-200 cursor-pointer"
                  >
                    {t(service.name)}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-white flex items-center hover:text-[#8ecdf7] transition-colors duration-200 cursor-pointer mt-2"
                >
                  <span>{t('View All Services')}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-[#8ecdf7]" />
                <span className="text-white">42 Healthcare Avenue<br />Mumbai, Maharashtra 400001<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#8ecdf7]" />
                <span className="text-white">+91 2233 445566</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#8ecdf7]" />
                <a href="mailto:contact@decurecenter.com" className="text-white hover:text-[#8ecdf7] transition-colors duration-200">contact@decurecenter.com</a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center text-white bg-[#2d4a63] hover:bg-[#345977] transition-colors duration-200 px-4 py-2 rounded-md mt-2 inline-block"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{t('Book Appointment')}</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Working Hours')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 text-[#8ecdf7]" />
                <div>
                  <p className="text-white font-medium">{t('Monday - Friday')}</p>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 text-[#8ecdf7]" />
                <div>
                  <p className="text-white font-medium">{t('Saturday')}</p>
                  <p className="text-white">9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 text-[#8ecdf7]" />
                <div>
                  <p className="text-white font-medium">{t('Sunday')}</p>
                  <p className="text-white">{t('Closed')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d4a63] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white mb-4 md:mb-0">&copy; {new Date().getFullYear()} De Cure Center. {t('All rights reserved.')} | <Link to="/faq" className="hover:text-[#8ecdf7] transition-colors duration-200">{t('FAQ')}</Link></p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#8ecdf7] transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#8ecdf7] transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#8ecdf7] transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
