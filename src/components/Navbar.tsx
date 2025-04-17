import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={cn(
            "font-serif text-xl md:text-2xl font-bold transition-colors duration-300",
            isScrolled ? "text-forest-800" : "text-white"
          )}>
            Misty Meadows
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "nav-link font-medium transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white/90 hover:text-white"
            )}
          >
            Home
          </Link>
          <Link 
            to="/accommodations" 
            className={cn(
              "nav-link font-medium transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white/90 hover:text-white"
            )}
          >
            Accommodations
          </Link>
          <Link 
            to="/experiences" 
            className={cn(
              "nav-link font-medium transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white/90 hover:text-white"
            )}
          >
            Experiences
          </Link>
          <Link 
            to="/gallery" 
            className={cn(
              "nav-link font-medium transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white/90 hover:text-white"
            )}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "nav-link font-medium transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white/90 hover:text-white"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden transition-colors duration-300",
            isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-black/80 backdrop-blur-md',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <Link
            to="/"
            className={cn(
              "nav-link font-medium py-2 transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/accommodations"
            className={cn(
              "nav-link font-medium py-2 transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Accommodations
          </Link>
          <Link
            to="/experiences"
            className={cn(
              "nav-link font-medium py-2 transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiences
          </Link>
          <Link
            to="/gallery"
            className={cn(
              "nav-link font-medium py-2 transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={cn(
              "nav-link font-medium py-2 transition-colors duration-300",
              isScrolled ? "text-forest-800 hover:text-forest-900" : "text-white hover:text-white/90"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
