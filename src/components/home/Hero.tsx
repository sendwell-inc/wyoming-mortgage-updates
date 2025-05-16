
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-32 md:py-40 lg:py-48 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white mb-5 backdrop-blur-sm">
            Leading Wyoming's Mortgage Solutions
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your Path to <span className="relative">
              Homeownership
              <span className="absolute bottom-2 left-0 w-full h-2 bg-brand-gold opacity-40 rounded-full"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Innovative mortgage solutions with personalized service and competitive rates for Wyoming residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/apply" className="group">
              <Button className="btn-primary text-lg group-hover:shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/loan-options">
              <Button 
                variant="outline" 
                className="btn-outline border-3 border-white text-white text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore Loan Options
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Design elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-to-l from-white/5 to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-brand-gold opacity-10 blur-2xl"></div>
      <div className="absolute bottom-1/3 left-10 w-40 h-40 rounded-full bg-brand-gold opacity-5 blur-3xl"></div>
    </div>
  );
};

export default Hero;
