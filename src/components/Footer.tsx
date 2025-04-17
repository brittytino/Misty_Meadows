
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-misty-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Resort Information */}
          <div>
            <h3 className="font-serif text-xl mb-4">Misty Meadows Resort</h3>
            <p className="text-gray-300 mb-4">
              Discover tranquility and luxury in the heart of Ooty's lush landscapes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-gray-300 hover:text-white transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-gray-300 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-forest-400" />
                <span className="text-gray-300">+91 9786350537</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-forest-400" />
                <span className="text-gray-300">info@mistymeadowsooty.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-forest-400" />
                <span className="text-gray-300">
                  Upper Lake Road, Ooty, Tamil Nadu 643001, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-3">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-3 bg-misty-800 text-white border border-misty-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-forest-400 w-full"
              />
              <button className="bg-forest-600 hover:bg-forest-700 py-2 px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-misty-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Misty Meadows Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
