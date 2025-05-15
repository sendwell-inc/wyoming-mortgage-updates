
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const loans = [
  {
    title: "Conventional Loans",
    description: "Traditional mortgage loans for borrowers with strong credit profiles, typically requiring a 3-20% down payment.",
    link: "/loan-options/conventional"
  },
  {
    title: "FHA Loans",
    description: "Government-backed loans with more flexible credit requirements and down payments as low as 3.5%.",
    link: "/loan-options/fha"
  },
  {
    title: "VA Loans",
    description: "Loans for veterans, service members, and eligible surviving spouses, often with no down payment required.",
    link: "/loan-options/va"
  },
  {
    title: "USDA Loans",
    description: "Rural development loans with no down payment requirements for eligible rural and suburban homebuyers.",
    link: "/loan-options/usda"
  }
];

const LoanTypes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mortgage-header">Loan Programs for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a variety of mortgage products tailored to meet the unique needs of Wyoming homebuyers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loans.map((loan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-navy">{loan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{loan.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={loan.link} className="w-full">
                  <Button variant="outline" className="w-full text-brand-navy hover:text-brand-navy hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/loan-options">
            <Button className="bg-brand-navy hover:bg-brand-darkBlue text-white">
              View All Loan Options
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
