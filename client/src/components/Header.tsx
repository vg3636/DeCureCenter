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
    return `text-neutral-800 hover:text-primary-600 transition duration-200 ${
      isActive(path) ? 'font-semibold text-primary-600' : ''
    }`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-primary-600 font-semibold text-xl">De Cure Center</a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about">
            <a className={navLinkClass('/about')}>About</a>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center ${navLinkClass('/services')}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`}>
                    <a className="w-full block px-2">{service.name}</a>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/faq">
            <a className={navLinkClass('/faq')}>FAQ</a>
          </Link>

          <Link href="/contact">
            <a className={navLinkClass('/contact')}>Contact</a>
          </Link>

          <LanguageSelector />
        </nav>

        <div className="flex items-center">
          <Link href="/contact">
            <Button className="hidden md:inline-block bg-primary-600 hover:bg-primary-700 text-white">
              Book Appointment
            </Button>
          </Link>
          <button
            className="md:hidden text-neutral-800 focus:outline-none ml-4"
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
              <a
                className={`block ${navLinkClass('/about')}`}
                onClick={closeMenu}
              >
                About
              </a>
            </Link>

            <div className="py-2">
              <div className="font-medium mb-2">Services</div>
              <div className="pl-4 flex flex-col space-y-2">
                {SERVICES.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <a
                      className={`block ${navLinkClass(`/services/${service.slug}`)}`}
                      onClick={closeMenu}
                    >
                      {service.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faq">
              <a
                className={`block ${navLinkClass('/faq')}`}
                onClick={closeMenu}
              >
                FAQ
              </a>
            </Link>

            <Link href="/contact">
              <a
                className={`block ${navLinkClass('/contact')}`}
                onClick={closeMenu}
              >
                Contact
              </a>
            </Link>

            <Link href="/contact">
              <Button className="w-full" onClick={closeMenu}>
                Book Appointment
              </Button>
            </Link>

            <div className="flex justify-end pt-2 border-t border-gray-200">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
