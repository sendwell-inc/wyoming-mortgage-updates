
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

// Sample historical rate data
const rateHistoryData = [
  { month: 'Jan', conventional: 5.8, fha: 5.6, va: 5.5, usda: 5.7 },
  { month: 'Feb', conventional: 5.9, fha: 5.7, va: 5.6, usda: 5.8 },
  { month: 'Mar', conventional: 6.1, fha: 5.9, va: 5.8, usda: 6.0 },
  { month: 'Apr', conventional: 6.3, fha: 6.1, va: 6.0, usda: 6.2 },
  { month: 'May', conventional: 6.2, fha: 6.0, va: 5.9, usda: 6.1 },
  { month: 'Jun', conventional: 6.1, fha: 5.9, va: 5.8, usda: 6.0 },
  { month: 'Jul', conventional: 6.0, fha: 5.8, va: 5.7, usda: 5.9 },
  { month: 'Aug', conventional: 5.9, fha: 5.7, va: 5.6, usda: 5.8 },
  { month: 'Sep', conventional: 5.7, fha: 5.5, va: 5.4, usda: 5.6 },
  { month: 'Oct', conventional: 5.6, fha: 5.4, va: 5.3, usda: 5.5 },
  { month: 'Nov', conventional: 5.5, fha: 5.3, va: 5.2, usda: 5.4 },
  { month: 'Dec', conventional: 5.4, fha: 5.2, va: 5.1, usda: 5.3 },
];

// Sample current rates
const currentRates = {
  conventional: {
    '30yr': { rate: 5.375, apr: 5.498, points: 0.8 },
    '20yr': { rate: 5.125, apr: 5.287, points: 0.7 },
    '15yr': { rate: 4.875, apr: 5.046, points: 0.6 },
    '10yr': { rate: 4.750, apr: 4.951, points: 0.5 },
  },
  fha: {
    '30yr': { rate: 5.250, apr: 6.312, points: 0.7 },
    '15yr': { rate: 4.750, apr: 5.823, points: 0.5 },
  },
  va: {
    '30yr': { rate: 5.125, apr: 5.312, points: 0.5 },
    '15yr': { rate: 4.625, apr: 4.836, points: 0.4 },
  },
  usda: {
    '30yr': { rate: 5.325, apr: 5.812, points: 0.5 },
  },
};

const Rates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Mortgage Rates</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Competitive rates updated daily for Wyoming homebuyers and homeowners.
            </p>
            <p className="mt-6 text-sm">
              Rates last updated: December 15, 2023 at 9:00 AM MST
            </p>
          </div>
        </section>
        
        {/* Current Rates */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="conventional" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="conventional">Conventional</TabsTrigger>
                <TabsTrigger value="fha">FHA</TabsTrigger>
                <TabsTrigger value="va">VA</TabsTrigger>
                <TabsTrigger value="usda">USDA</TabsTrigger>
              </TabsList>
              
              <TabsContent value="conventional">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">Conventional Loan Rates</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Loan Term</th>
                            <th className="border p-3 text-left">Interest Rate</th>
                            <th className="border p-3 text-left">APR</th>
                            <th className="border p-3 text-left">Points</th>
                            <th className="border p-3 text-left"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(currentRates.conventional).map(([term, data]) => (
                            <tr key={term} className="border-b">
                              <td className="border p-3 font-medium">{term.replace('yr', '-Year Fixed')}</td>
                              <td className="border p-3">{data.rate}%</td>
                              <td className="border p-3">{data.apr}%</td>
                              <td className="border p-3">{data.points}</td>
                              <td className="border p-3">
                                <Link to="/apply">
                                  <Button size="sm" className="bg-brand-navy hover:bg-brand-darkBlue">
                                    Apply Now
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      * The rates shown above are based on a loan amount of $300,000, a down payment of 20%, and a credit score of 740 or higher. Your actual rate may differ based on your specific circumstances.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fha">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">FHA Loan Rates</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Loan Term</th>
                            <th className="border p-3 text-left">Interest Rate</th>
                            <th className="border p-3 text-left">APR</th>
                            <th className="border p-3 text-left">Points</th>
                            <th className="border p-3 text-left"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(currentRates.fha).map(([term, data]) => (
                            <tr key={term} className="border-b">
                              <td className="border p-3 font-medium">{term.replace('yr', '-Year Fixed')}</td>
                              <td className="border p-3">{data.rate}%</td>
                              <td className="border p-3">{data.apr}%</td>
                              <td className="border p-3">{data.points}</td>
                              <td className="border p-3">
                                <Link to="/apply">
                                  <Button size="sm" className="bg-brand-navy hover:bg-brand-darkBlue">
                                    Apply Now
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      * APR includes FHA Mortgage Insurance Premium. Rates shown are based on a loan amount of $300,000, a down payment of 3.5%, and a credit score of 680 or higher.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="va">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">VA Loan Rates</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Loan Term</th>
                            <th className="border p-3 text-left">Interest Rate</th>
                            <th className="border p-3 text-left">APR</th>
                            <th className="border p-3 text-left">Points</th>
                            <th className="border p-3 text-left"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(currentRates.va).map(([term, data]) => (
                            <tr key={term} className="border-b">
                              <td className="border p-3 font-medium">{term.replace('yr', '-Year Fixed')}</td>
                              <td className="border p-3">{data.rate}%</td>
                              <td className="border p-3">{data.apr}%</td>
                              <td className="border p-3">{data.points}</td>
                              <td className="border p-3">
                                <Link to="/apply">
                                  <Button size="sm" className="bg-brand-navy hover:bg-brand-darkBlue">
                                    Apply Now
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      * APR includes VA funding fee. Rates shown are based on a loan amount of $300,000, no down payment, and military service eligibility.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="usda">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">USDA Loan Rates</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Loan Term</th>
                            <th className="border p-3 text-left">Interest Rate</th>
                            <th className="border p-3 text-left">APR</th>
                            <th className="border p-3 text-left">Points</th>
                            <th className="border p-3 text-left"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(currentRates.usda).map(([term, data]) => (
                            <tr key={term} className="border-b">
                              <td className="border p-3 font-medium">{term.replace('yr', '-Year Fixed')}</td>
                              <td className="border p-3">{data.rate}%</td>
                              <td className="border p-3">{data.apr}%</td>
                              <td className="border p-3">{data.points}</td>
                              <td className="border p-3">
                                <Link to="/apply">
                                  <Button size="sm" className="bg-brand-navy hover:bg-brand-darkBlue">
                                    Apply Now
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      * APR includes USDA guarantee fees. Rates shown are based on a loan amount of $300,000, no down payment, and property in an eligible rural area.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Rate History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-4">Mortgage Rate Trends</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Track how mortgage rates have changed over the past year to make an informed decision about when to lock in your rate.
            </p>
            
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">30-Year Fixed Rate Mortgage Trend (2023)</h3>
                
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={rateHistoryData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[5, 6.5]} />
                      <Tooltip />
                      <Area type="monotone" dataKey="conventional" name="Conventional" stroke="#0A2463" fill="#0A2463" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="fha" name="FHA" stroke="#5DBCD2" fill="#5DBCD2" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="va" name="VA" stroke="#8A4F7D" fill="#8A4F7D" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="usda" name="USDA" stroke="#FB8B24" fill="#FB8B24" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <p className="text-sm text-gray-500 mt-6">
                  Note: This historical data is provided for informational purposes only. Past rate trends are not indicative of future rate movements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Rate Disclaimer and CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="mortgage-subheader mb-4">Understanding Mortgage Rates</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Mortgage rates change daily and are influenced by economic factors, Federal Reserve policies, inflation rates, and market conditions. The rates displayed above are subject to change without notice.
                  </p>
                  <p>
                    The Annual Percentage Rate (APR) includes the interest rate plus other charges or fees. For adjustable-rate mortgages (ARMs), rates may increase after consummation.
                  </p>
                  <p>
                    Points are fees paid to the lender at closing in exchange for a reduced interest rate. One point equals one percent of your loan amount.
                  </p>
                  <p>
                    The rates shown above assume certain conditions, including a loan-to-value ratio (LTV) of 80% or less for conventional loans, a credit score of 740 or higher, debt-to-income ratio within our guidelines, and purchase of a single-family primary residence.
                  </p>
                  <p>
                    To get personalized rate quotes based on your specific situation, please contact one of our mortgage loan officers or apply online today.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Lock in Today's Rates</h3>
                <p className="text-gray-600 mb-6">
                  Ready to secure your home financing at today's competitive rates? Start your application process now.
                </p>
                <div className="space-y-4">
                  <Link to="/apply" className="w-full block">
                    <Button className="w-full bg-brand-navy hover:bg-brand-darkBlue">
                      Apply Now
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full block">
                    <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                      Speak with a Loan Officer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rates;
