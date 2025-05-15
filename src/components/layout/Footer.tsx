
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Wyoming<span className="text-brand-gold">Mortgage</span></h3>
            <p className="mb-4">
              Your trusted mortgage partner in Wyoming, helping you secure the best home financing options since 2005.
            </p>
            <p>NMLS #123456</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/loan-options" className="hover:text-brand-gold transition-colors">Loan Options</Link></li>
              <li><Link to="/rates" className="hover:text-brand-gold transition-colors">Rates</Link></li>
              <li><Link to="/apply" className="hover:text-brand-gold transition-colors">Apply Now</Link></li>
              <li><Link to="/application-status" className="hover:text-brand-gold transition-colors">Check Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/mortgage-calculator" className="hover:text-brand-gold transition-colors">Mortgage Calculator</Link></li>
              <li><Link to="/faq" className="hover:text-brand-gold transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
              <li><Link to="/glossary" className="hover:text-brand-gold transition-colors">Mortgage Glossary</Link></li>
              <li><Link to="/resources" className="hover:text-brand-gold transition-colors">First-Time Buyers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>1234 Mountain View Drive</p>
              <p>Cheyenne, WY 82001</p>
              <p className="mt-2">(307) 555-1234</p>
              <p className="mt-2">info@wyomingmortgage.com</p>
            </address>
            <div className="mt-4">
              <Link to="/contact" className="text-brand-gold hover:text-white transition-colors">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} Wyoming Mortgage. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
              <Link to="/licensing" className="hover:text-brand-gold transition-colors">Licensing Info</Link>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-400">
              Equal Housing Opportunity. Wyoming Mortgage is licensed in the State of Wyoming. 
              NMLS #123456. This is not a commitment to lend. Restrictions apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
