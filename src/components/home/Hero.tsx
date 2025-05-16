
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Your Wyoming Home Financing Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            We make mortgage lending simple, transparent, and accessible for all Wyoming residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply">
              <Button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy font-bold text-lg px-8 py-6">
                Apply Now
              </Button>
            </Link>
            <Link to="/loan-options">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-brand-navy/50 hover:bg-white/20 hover:border-white text-lg px-8 py-6 transition-all duration-300"
              >
                Explore Loan Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
