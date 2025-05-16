
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Glossary terms
  const glossaryTerms = [
    {
      term: "Adjustable-Rate Mortgage (ARM)",
      definition: "A mortgage with an interest rate that changes periodically based on market conditions. ARMs typically start with a lower fixed rate for an initial period before adjusting."
    },
    {
      term: "Amortization",
      definition: "The process of paying off a loan over time through regular payments. A portion of each payment goes toward the principal balance and interest."
    },
    {
      term: "Annual Percentage Rate (APR)",
      definition: "The total yearly cost of a mortgage expressed as a percentage, including interest rate and other costs like origination fees and mortgage insurance."
    },
    {
      term: "Appraisal",
      definition: "A professional assessment of a property's market value, typically required by lenders before approving a mortgage."
    },
    {
      term: "Closing Costs",
      definition: "Fees paid at the closing of a real estate transaction, including loan origination fees, title insurance, appraisal fees, and more."
    },
    {
      term: "Conventional Loan",
      definition: "A mortgage not insured or guaranteed by a government agency like FHA, VA, or USDA. These loans typically require higher credit scores and down payments."
    },
    {
      term: "Debt-to-Income Ratio (DTI)",
      definition: "The percentage of your gross monthly income that goes toward paying debts. Lenders use this ratio to determine your ability to repay a mortgage."
    },
    {
      term: "Down Payment",
      definition: "The initial payment made when purchasing a home. It represents a percentage of the total purchase price and is not financed in the mortgage."
    },
    {
      term: "Equity",
      definition: "The difference between your home's market value and the amount you owe on your mortgage. As you pay down your mortgage and/or your home appreciates in value, your equity increases."
    },
    {
      term: "Escrow",
      definition: "An account held by a third party that holds funds for payments like property taxes and homeowners insurance. Often included in monthly mortgage payments."
    },
    {
      term: "Fixed-Rate Mortgage",
      definition: "A mortgage with an interest rate that remains the same throughout the entire term of the loan, providing consistent monthly payments."
    },
    {
      term: "FHA Loan",
      definition: "A mortgage insured by the Federal Housing Administration, designed to help borrowers with lower credit scores and smaller down payments qualify for a home loan."
    },
    {
      term: "Homeowners Insurance",
      definition: "Insurance that covers damage to your home from disasters, accidents, and theft. Mortgage lenders typically require borrowers to maintain homeowners insurance."
    },
    {
      term: "Loan-to-Value Ratio (LTV)",
      definition: "The ratio of your mortgage amount to the appraised value of your home. A higher LTV means higher risk for the lender and may require private mortgage insurance."
    },
    {
      term: "Mortgage Insurance",
      definition: "Insurance that protects the lender if you default on your mortgage. Required for conventional loans with less than 20% down payment (PMI) and for FHA loans (MIP)."
    },
    {
      term: "Pre-Approval",
      definition: "An evaluation by a lender that determines how much money you can borrow for a mortgage. Involves verification of income, assets, and credit history."
    },
    {
      term: "Principal",
      definition: "The original amount of money borrowed in a mortgage loan, not including interest or other costs."
    },
    {
      term: "Private Mortgage Insurance (PMI)",
      definition: "Insurance required by lenders when borrowers put down less than 20% on a conventional mortgage. Protects the lender if the borrower defaults."
    },
    {
      term: "Refinance",
      definition: "The process of replacing an existing mortgage with a new one, often to secure a lower interest rate, reduce monthly payments, or tap into home equity."
    },
    {
      term: "Title Insurance",
      definition: "Insurance that protects the lender and/or homeowner against legal problems with the title (legal ownership) of a property."
    },
    {
      term: "Underwriting",
      definition: "The process by which a lender evaluates the risk of lending money to a potential borrower by analyzing their credit history, income, assets, and the property's value."
    },
    {
      term: "USDA Loan",
      definition: "A mortgage loan guaranteed by the United States Department of Agriculture for rural and some suburban homebuyers. Often offers zero down payment options for eligible borrowers."
    },
    {
      term: "VA Loan",
      definition: "A mortgage loan guaranteed by the Department of Veterans Affairs for eligible veterans, active-duty service members, and certain surviving spouses. Often requires no down payment."
    }
  ];
  
  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group terms by first letter
  const groupTermsByLetter = () => {
    const grouped = {};
    
    filteredTerms.forEach(item => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(item);
    });
    
    return grouped;
  };
  
  const groupedTerms = groupTermsByLetter();
  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Glossary</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Understanding mortgage terminology is crucial when navigating the home buying process.
            </p>
          </div>
        </section>
        
        {/* Search & Index */}
        <section className="bg-white border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search glossary terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6"
                />
              </div>
            </div>
            
            {/* Alphabet Index */}
            <div className="flex flex-wrap justify-center gap-2">
              {alphabet.map(letter => (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-navy text-white hover:bg-brand-gold transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Glossary Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTerms.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold mb-2">No matching terms found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <Button onClick={() => setSearchTerm('')} variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  Clear Search
                </Button>
              </div>
            ) : (
              alphabet.map(letter => (
                <div key={letter} id={`section-${letter}`} className="mb-10 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-brand-navy border-b pb-2 mb-6">{letter}</h2>
                  <dl className="space-y-6">
                    {groupedTerms[letter].map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-none">
                        <dt className="text-xl font-semibold mb-2">{item.term}</dt>
                        <dd className="text-gray-600">{item.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))
            )}
          </div>
        </section>
        
        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mortgage-subheader mb-4">Learn More About Mortgages</h2>
            <p className="text-gray-600 mb-8">
              Take advantage of our educational resources to better understand the mortgage process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                Mortgage Guides
              </Button>
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                FAQ
              </Button>
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                Blog Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
