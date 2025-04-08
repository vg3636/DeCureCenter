import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown, X } from 'lucide-react';
import LanguageSelector, { useTranslation } from './LanguageSelector';
import { SERVICES } from '../lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path || (path !== '/' && location.startsWith(path));
  };

  const navLinkClass = () => {
    return `relative px-3 py-2 text-gray-700 transition-all duration-200 rounded hover:bg-[#e6f7ff] hover:text-[#2d4a63]`;
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="bg-gradient-to-r from-[#2d4a63] to-[#345977] bg-clip-text text-transparent font-bold text-xl cursor-pointer">De Cure Center</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about">
            <span data-nav-item className={`${navLinkClass()} cursor-pointer`}>{t('About')}</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-nav
                className={`flex items-center ${navLinkClass()}`}
              >
                {t('Services')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 shadow-lg rounded-md border border-[#d0e8f2] overflow-hidden p-2 bg-white">
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild className="p-0 focus:bg-transparent hover:bg-transparent">
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="w-full block px-3 py-2.5 text-gray-700 transition-all duration-200 rounded hover:bg-[#e6f7ff] hover:text-[#1e3a52] hover:translate-x-1"
                    >
                      {t(service.name)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/faq">
            <span data-nav-item className={`${navLinkClass()} cursor-pointer`}>{t('FAQ')}</span>
          </Link>

          <Link href="/contact">
            <span data-nav-item className={`${navLinkClass()} cursor-pointer`}>{t('Contact')}</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          
          <Link href="/contact">
            <Button className="hidden md:inline-block bg-gradient-to-r from-[#2d4a63] to-[#1e3a52] hover:opacity-95 text-white shadow-sm">
              {t('Book Appointment')}
            </Button>
          </Link>
          
          <button
            className="md:hidden text-brand-secondary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/about">
              <span
                data-nav-item
                className={`block py-2 font-medium ${navLinkClass()} cursor-pointer hover:text-[#2d4a63] transition-colors duration-200`}
                onClick={closeMenu}
              >
                {t('About')}
              </span>
            </Link>

            <div className="py-2">
              <div className="font-medium mb-2 text-[#2d4a63]">{t('Services')}</div>
              <div className="pl-2 flex flex-col space-y-1">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={closeMenu}
                    className="block py-2 px-3 rounded text-gray-700 cursor-pointer hover:bg-[#e6f7ff] hover:text-[#1e3a52] hover:translate-x-1 transition-all duration-200"
                  >
                    {t(service.name)}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faq">
              <span
                data-nav-item
                className={`block py-2 font-medium ${navLinkClass()} cursor-pointer hover:text-[#2d4a63] transition-colors duration-200`}
                onClick={closeMenu}
              >
                {t('FAQ')}
              </span>
            </Link>

            <Link href="/contact">
              <span
                data-nav-item
                className={`block py-2 font-medium ${navLinkClass()} cursor-pointer hover:text-[#2d4a63] transition-colors duration-200`}
                onClick={closeMenu}
              >
                {t('Contact')}
              </span>
            </Link>

            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-[#2d4a63] to-[#1e3a52] hover:opacity-95 text-white" onClick={closeMenu}>
                {t('Book Appointment')}
              </Button>
            </Link>

            <div className="flex justify-end pt-4 mt-2 border-t border-gray-100">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
