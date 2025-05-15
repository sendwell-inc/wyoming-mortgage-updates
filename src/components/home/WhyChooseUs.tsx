
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Local Wyoming Expertise",
    description: "We understand the unique Wyoming housing market and regional lending requirements better than anyone."
  },
  {
    title: "Transparent Process",
    description: "No hidden fees or surprises. We clearly explain each step of the mortgage process."
  },
  {
    title: "Personalized Service",
    description: "Every client gets a dedicated mortgage advisor who knows your unique situation."
  },
  {
    title: "Competitive Rates",
    description: "We work with multiple lenders to ensure you get the most competitive rates possible."
  },
  {
    title: "Digital Convenience",
    description: "Apply online, upload documents securely, and track your application status 24/7."
  },
  {
    title: "SMS Status Updates",
    description: "Get real-time updates on your mortgage application directly to your phone."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mortgage-header">Why Choose Wyoming Mortgage</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've helped thousands of Wyoming families achieve their homeownership dreams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-brand-navy">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
