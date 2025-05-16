
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-darkBlue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-darkBlue to-transparent"></div>
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-brand-gold opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-brand-gold opacity-5 blur-3xl"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-navy/50 backdrop-blur-lg rounded-2xl p-12 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Ready to Start Your<br />
                <span className="text-brand-gold">Home Ownership Journey?</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Whether you're buying your first home, refinancing, or investing in property, our team of Wyoming experts is ready to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button className="btn-primary group text-lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="btn-outline text-white group text-lg">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-gold/20 to-brand-lightBlue/20 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Get Pre-Qualified Today</h3>
                <ul className="space-y-3 mb-6">
                  {["Quick online application", "No impact on credit score", "Know your budget before you shop", "Strengthen your offer"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-6 h-6 flex-shrink-0 rounded-full bg-brand-gold/20 flex items-center justify-center mr-3">
                        <Check className="w-4 h-4 text-brand-gold" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/apply" className="block w-full">
                  <Button className="w-full bg-white text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-colors">
                    Get Pre-Qualified
                  </Button>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border border-white/10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Check icon component
const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default CTASection;
