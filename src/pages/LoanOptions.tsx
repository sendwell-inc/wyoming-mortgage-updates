
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const LoanOptions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Loan Options</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We offer a variety of mortgage products tailored to meet the unique needs of Wyoming homebuyers.
            </p>
          </div>
        </section>
        
        {/* Loan Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="conventional" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="conventional">Conventional Loans</TabsTrigger>
                <TabsTrigger value="fha">FHA Loans</TabsTrigger>
                <TabsTrigger value="va">VA Loans</TabsTrigger>
                <TabsTrigger value="usda">USDA Loans</TabsTrigger>
              </TabsList>
              
              <TabsContent value="conventional" className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mortgage-subheader mb-4">Conventional Loans</h2>
                    <p className="text-gray-600 mb-6">
                      Conventional loans are traditional mortgage loans for borrowers with strong credit profiles. These loans are not guaranteed by the government and typically require a higher credit score and down payment than government-backed options.
                    </p>
                    
                    <div className="mb-8 space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Competitive Interest Rates</h3>
                          <p className="text-gray-600">Qualify for some of the best rates available with good credit.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Flexible Down Payment Options</h3>
                          <p className="text-gray-600">Down payments as low as 3-5% for qualified borrowers.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">No Upfront Mortgage Insurance</h3>
                          <p className="text-gray-600">Unlike FHA loans, PMI can be removed once you reach 20% equity.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/apply">
                      <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                        Apply for a Conventional Loan
                      </Button>
                    </Link>
                  </div>
                  
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle>Conventional Loan Details</CardTitle>
                      <CardDescription>Key information about our conventional loan products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Down Payment</span>
                        <span>3-20%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Credit Score Minimum</span>
                        <span>620+</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Loan Terms</span>
                        <span>15, 20, or 30 years</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Rate Types</span>
                        <span>Fixed or Adjustable</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">PMI Required</span>
                        <span>Yes, if down payment less than 20%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Max Loan Amount</span>
                        <span>$726,200 (2023 limit)</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="fha" className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mortgage-subheader mb-4">FHA Loans</h2>
                    <p className="text-gray-600 mb-6">
                      Federal Housing Administration (FHA) loans are government-backed mortgages designed to help homebuyers with lower credit scores or smaller down payments qualify for a mortgage. These loans are particularly popular among first-time homebuyers.
                    </p>
                    
                    <div className="mb-8 space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Lower Credit Score Requirements</h3>
                          <p className="text-gray-600">Qualify with credit scores as low as 580.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Minimal Down Payment</h3>
                          <p className="text-gray-600">Down payments as low as 3.5% for qualified borrowers.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Flexible Debt-to-Income Ratios</h3>
                          <p className="text-gray-600">More lenient DTI requirements than conventional loans.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/apply">
                      <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                        Apply for an FHA Loan
                      </Button>
                    </Link>
                  </div>
                  
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle>FHA Loan Details</CardTitle>
                      <CardDescription>Key information about our FHA loan products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Down Payment</span>
                        <span>3.5% with 580+ credit score</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Credit Score Minimum</span>
                        <span>580+ (3.5% down), 500-579 (10% down)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Loan Terms</span>
                        <span>15 or 30 years</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Mortgage Insurance</span>
                        <span>Upfront and Annual MIP</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Loan Limits</span>
                        <span>Varies by county</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="va" className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mortgage-subheader mb-4">VA Loans</h2>
                    <p className="text-gray-600 mb-6">
                      VA loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs. These loans offer significant benefits to veterans, active-duty service members, and eligible surviving spouses, including no down payment and no private mortgage insurance.
                    </p>
                    
                    <div className="mb-8 space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">No Down Payment Required</h3>
                          <p className="text-gray-600">Eligible borrowers can finance 100% of the home's value.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">No Private Mortgage Insurance</h3>
                          <p className="text-gray-600">Save thousands compared to conventional or FHA loans.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Competitive Interest Rates</h3>
                          <p className="text-gray-600">Generally lower than conventional loan rates.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/apply">
                      <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                        Apply for a VA Loan
                      </Button>
                    </Link>
                  </div>
                  
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle>VA Loan Details</CardTitle>
                      <CardDescription>Key information about our VA loan products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Down Payment</span>
                        <span>0% in most cases</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Credit Score Minimum</span>
                        <span>No official minimum (typically 620+)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Funding Fee</span>
                        <span>1.25% - 3.3% (waived for some veterans)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Loan Terms</span>
                        <span>15 or 30 years</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Private Mortgage Insurance</span>
                        <span>None</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Eligibility</span>
                        <span>Veterans, active military, eligible spouses</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="usda" className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mortgage-subheader mb-4">USDA Loans</h2>
                    <p className="text-gray-600 mb-6">
                      USDA loans are mortgage loans backed by the U.S. Department of Agriculture as part of its Rural Development program. These loans offer borrowers in eligible rural and suburban areas the opportunity to purchase a home with no down payment.
                    </p>
                    
                    <div className="mb-8 space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">No Down Payment Required</h3>
                          <p className="text-gray-600">100% financing for eligible rural and suburban homes.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Lower Mortgage Insurance</h3>
                          <p className="text-gray-600">More affordable than FHA mortgage insurance.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="text-brand-navy h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Competitive Interest Rates</h3>
                          <p className="text-gray-600">Rates are often lower than conventional loans.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/apply">
                      <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                        Apply for a USDA Loan
                      </Button>
                    </Link>
                  </div>
                  
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle>USDA Loan Details</CardTitle>
                      <CardDescription>Key information about our USDA loan products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Down Payment</span>
                        <span>0%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Credit Score Minimum</span>
                        <span>640+ (recommended)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Income Limits</span>
                        <span>Must not exceed 115% of area median income</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Property Location</span>
                        <span>Must be in eligible rural area</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Guarantee Fee</span>
                        <span>1% upfront, 0.35% annual</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b pb-2">
                        <span className="font-medium">Loan Terms</span>
                        <span>30 years</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Compare Loan Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-12">Compare Loan Types</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="border p-3 text-left">Loan Feature</th>
                    <th className="border p-3 text-left">Conventional</th>
                    <th className="border p-3 text-left">FHA</th>
                    <th className="border p-3 text-left">VA</th>
                    <th className="border p-3 text-left">USDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-3 font-medium">Min Down Payment</td>
                    <td className="border p-3">3-5%</td>
                    <td className="border p-3">3.5%</td>
                    <td className="border p-3">0%</td>
                    <td className="border p-3">0%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border p-3 font-medium">Min Credit Score</td>
                    <td className="border p-3">620+</td>
                    <td className="border p-3">580+</td>
                    <td className="border p-3">No set minimum</td>
                    <td className="border p-3">640+ (typically)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-3 font-medium">Mortgage Insurance</td>
                    <td className="border p-3">PMI if less than 20% down</td>
                    <td className="border p-3">Required MIP</td>
                    <td className="border p-3">None</td>
                    <td className="border p-3">Guarantee fee</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border p-3 font-medium">Property Types</td>
                    <td className="border p-3">All types</td>
                    <td className="border p-3">Primary residence only</td>
                    <td className="border p-3">Primary residence only</td>
                    <td className="border p-3">Rural/suburban only</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-3 font-medium">Special Eligibility</td>
                    <td className="border p-3">None</td>
                    <td className="border p-3">None</td>
                    <td className="border p-3">Military service</td>
                    <td className="border p-3">Rural location</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-6">
                Not sure which loan type is right for you? Our mortgage experts can help you choose the best option for your unique situation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                    Contact a Loan Officer
                  </Button>
                </Link>
                <Link to="/apply">
                  <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                    Start Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoanOptions;
