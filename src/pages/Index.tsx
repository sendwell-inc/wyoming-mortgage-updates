
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import LoanTypes from '@/components/home/LoanTypes';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';
import SMSOptIn from '@/components/sms/SMSOptIn';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Loan Programs Section */}
        <section className="py-20 bg-gray-50">
          <LoanTypes />
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 section-gradient">
          <WhyChooseUs />
        </section>
        
        {/* SMS Opt-In Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 accent-gradient"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-gray-100 opacity-70"></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gray-100 opacity-70"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="bg-gray-100 text-brand-navy px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">Stay Connected</span>
              <h2 className="mortgage-header mt-4">Get Real-Time Updates on Your Application</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sign up for SMS notifications to stay informed about your mortgage application status at every step of the process.
              </p>
            </div>
            <SMSOptIn />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-brand-lightBlue">
          <TestimonialSection />
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
