
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const loans = [
  {
    title: "Conventional Loans",
    description: "Traditional mortgage loans with competitive rates for borrowers with strong credit profiles, offering flexible down payment options.",
    link: "/loan-options/conventional",
    icon: "🏠"
  },
  {
    title: "FHA Loans",
    description: "Government-backed loans with more flexible credit requirements and down payments as low as 3.5% for first-time homebuyers.",
    link: "/loan-options/fha",
    icon: "🔑"
  },
  {
    title: "VA Loans",
    description: "Exclusive loans for veterans and service members with no down payment required and competitive interest rates.",
    link: "/loan-options/va",
    icon: "🎖️"
  },
  {
    title: "USDA Loans",
    description: "Rural development loans with no down payment requirements for eligible rural and suburban Wyoming homebuyers.",
    link: "/loan-options/usda",
    icon: "🌱"
  }
];

const LoanTypes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-brand-lightBlue text-brand-navy px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">Loan Programs</span>
        <h2 className="mortgage-header mt-4">Find the Perfect Loan for Your Needs</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a variety of mortgage solutions tailored specifically for Wyoming residents, with competitive rates and personalized service.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {loans.map((loan, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div className="p-6">
              <div className="mb-4 text-4xl">{loan.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{loan.title}</h3>
              <p className="text-gray-600 mb-6">{loan.description}</p>
              <Link 
                to={loan.link}
                className="inline-flex items-center text-brand-navy font-medium hover:text-brand-gold transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/loan-options">
          <Button className="btn-primary">
            View All Loan Options
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoanTypes;
