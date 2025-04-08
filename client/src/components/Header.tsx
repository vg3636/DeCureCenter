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
import LanguageSelector from './LanguageSelector';
import { SERVICES } from '../lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path || (path !== '/' && location.startsWith(path));
  };

  const navLinkClass = (path: string) => {
    return `text-brand-light hover:text-brand-primary transition-all duration-200 ${
      isActive(path) ? 'font-semibold text-brand-primary' : ''
    }`;
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
            <span className={`${navLinkClass('/about')} cursor-pointer`}>About</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center ${navLinkClass('/services')}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 border-brand-light">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.slug} onClick={() => {
                  window.location.href = `/services/${service.slug}`;
                }}>
                  <span className="w-full block px-2 text-brand-light hover:text-brand-primary">{service.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/faq">
            <span className={`${navLinkClass('/faq')} cursor-pointer`}>FAQ</span>
          </Link>

          <Link href="/contact">
            <span className={`${navLinkClass('/contact')} cursor-pointer`}>Contact</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          
          <Link href="/contact">
            <Button className="hidden md:inline-block bg-brand-gradient hover:opacity-90 text-white">
              Book Appointment
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
                className={`block ${navLinkClass('/about')} cursor-pointer`}
                onClick={closeMenu}
              >
                About
              </span>
            </Link>

            <div className="py-2">
              <div className="font-medium mb-2 text-brand-primary">Services</div>
              <div className="pl-4 flex flex-col space-y-2">
                {SERVICES.map((service) => (
                  <span
                    key={service.slug}
                    className={`block ${navLinkClass(`/services/${service.slug}`)} cursor-pointer`}
                    onClick={() => {
                      window.location.href = `/services/${service.slug}`;
                      closeMenu();
                    }}
                  >
                    {service.name}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/faq">
              <span
                className={`block ${navLinkClass('/faq')} cursor-pointer`}
                onClick={closeMenu}
              >
                FAQ
              </span>
            </Link>

            <Link href="/contact">
              <span
                className={`block ${navLinkClass('/contact')} cursor-pointer`}
                onClick={closeMenu}
              >
                Contact
              </span>
            </Link>

            <Link href="/contact">
              <Button className="w-full bg-brand-gradient hover:opacity-90" onClick={closeMenu}>
                Book Appointment
              </Button>
            </Link>

            <div className="flex justify-end pt-2 border-t border-gray-100">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
