
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Local Wyoming Experts",
    description: "Our team has unmatched knowledge of Wyoming's housing market and unique regional lending requirements."
  },
  {
    title: "Transparent Process",
    description: "No hidden fees or surprises. We provide clear information at every step of your mortgage journey."
  },
  {
    title: "Personalized Service",
    description: "Every client receives a dedicated advisor who understands your unique financial situation and goals."
  },
  {
    title: "Competitive Rates",
    description: "We work with multiple lenders to ensure you get the most favorable rates available in today's market."
  },
  {
    title: "Digital Convenience",
    description: "Apply online, upload documents securely, and monitor your application progress 24/7 through our portal."
  },
  {
    title: "Real-Time Updates",
    description: "Stay informed with SMS notifications about important milestones and updates on your application."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-brand-navy text-white px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">Why Choose Us</span>
        <h2 className="mortgage-header mt-4">Wyoming's Trusted Mortgage Partner</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We've helped thousands of Wyoming families achieve their homeownership dreams with personalized service and expert guidance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-brand-gold hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="mr-4 p-2 rounded-full bg-brand-lightBlue">
                <CheckCircle className="text-brand-navy h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
