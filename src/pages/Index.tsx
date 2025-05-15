
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
        <LoanTypes />
        <WhyChooseUs />
        <TestimonialSection />
        
        {/* SMS Opt-In Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mortgage-header">Stay Updated on Your Application</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sign up for SMS updates to receive real-time notifications about your mortgage application status.
              </p>
            </div>
            <SMSOptIn />
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
