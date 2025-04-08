import { Link } from 'wouter';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { useTranslation } from './LanguageSelector';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">De Cure Center</h3>
            <p className="text-gray-200">
              {t('Leading specialists in comprehensive medical care with over 12 years of experience bringing health and confidence back to our patients.')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Services')}</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-gray-200 hover:text-white hover:underline transition duration-200 cursor-pointer"
                  >
                    {t(service.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-300" />
                <span className="text-gray-200">123 Medical Plaza, Mumbai, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 text-primary-300" />
                <span className="text-gray-200">+91 1234 567 890</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-primary-300" />
                <span className="text-gray-200">info@decurecenter.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('Working Hours')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">{t('Monday - Friday')}: 9am - 6pm</li>
              <li className="text-gray-200">{t('Saturday')}: 9am - 4pm</li>
              <li className="text-gray-200">{t('Sunday')}: {t('Closed')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 mb-4 md:mb-0">&copy; {new Date().getFullYear()} De Cure Center. {t('All rights reserved.')}</p>
            <div className="flex space-x-4">
              <span className="text-primary-300 hover:text-white transition duration-200 cursor-pointer" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </span>
              <span className="text-primary-300 hover:text-white transition duration-200 cursor-pointer" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </span>
              <span className="text-primary-300 hover:text-white transition duration-200 cursor-pointer" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
