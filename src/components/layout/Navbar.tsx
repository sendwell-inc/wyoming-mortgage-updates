
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-brand-navy">Wyoming<span className="text-brand-gold">Mortgage</span></span>
            </Link>
          </div>
          
          {/* Phone number - always visible */}
          <div className="hidden md:flex items-center text-brand-navy border-l border-gray-200 pl-4">
            <Phone className="mr-2 h-5 w-5" /> 
            <span className="font-medium">(307) 555-1234</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-navy font-medium">Home</Link>
            <Link to="/loan-options" className="text-gray-700 hover:text-brand-navy font-medium">Loan Options</Link>
            <Link to="/rates" className="text-gray-700 hover:text-brand-navy font-medium">Rates</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-navy font-medium">About Us</Link>
            <Link to="/resources" className="text-gray-700 hover:text-brand-navy font-medium">Resources</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-navy font-medium">Contact</Link>
          </nav>
          
          <div className="hidden md:flex">
            <Link to="/apply">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue text-white">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-brand-navy focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">Home</Link>
            <Link to="/loan-options" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">Loan Options</Link>
            <Link to="/rates" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">Rates</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">About Us</Link>
            <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">Resources</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-navy font-medium">Contact</Link>
            <Link to="/apply" className="block px-3 py-2">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue text-white w-full">
                Apply Now
              </Button>
            </Link>
          </div>
          {/* Mobile phone number */}
          <div className="px-5 py-4 border-t border-gray-200 flex items-center">
            <Phone className="mr-2 h-5 w-5 text-brand-navy" /> 
            <span className="font-medium">(307) 555-1234</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
