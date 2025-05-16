
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const calculators = [
    {
      title: "Mortgage Payment Calculator",
      description: "Estimate your monthly mortgage payments based on loan amount, interest rate, and term.",
      link: "/calculators/mortgage-payment"
    },
    {
      title: "Affordability Calculator",
      description: "Determine how much house you can afford based on your income and expenses.",
      link: "/calculators/affordability"
    },
    {
      title: "Refinance Calculator",
      description: "Compare your current mortgage to a potential refinanced mortgage.",
      link: "/calculators/refinance"
    },
    {
      title: "Rent vs. Buy Calculator",
      description: "Analyze whether it makes more financial sense to rent or buy a home.",
      link: "/calculators/rent-vs-buy"
    }
  ];
  
  const articles = [
    {
      title: "First-Time Homebuyer's Guide",
      description: "Everything you need to know when purchasing your first home.",
      category: "Buying",
      link: "/articles/first-time-homebuyer-guide"
    },
    {
      title: "Understanding Mortgage Pre-Approval",
      description: "Learn what mortgage pre-approval is and why it's important in the home buying process.",
      category: "Buying",
      link: "/articles/understanding-mortgage-pre-approval"
    },
    {
      title: "When to Refinance Your Mortgage",
      description: "Factors to consider when deciding whether to refinance your home loan.",
      category: "Refinancing",
      link: "/articles/when-to-refinance"
    },
    {
      title: "How to Improve Your Credit Score for a Better Mortgage Rate",
      description: "Tips and strategies to boost your credit score before applying for a mortgage.",
      category: "Credit",
      link: "/articles/improve-credit-score-for-mortgage"
    },
    {
      title: "Understanding Closing Costs",
      description: "A breakdown of the fees and expenses you'll pay at your mortgage closing.",
      category: "Buying",
      link: "/articles/understanding-closing-costs"
    },
    {
      title: "Home Down Payment Strategies",
      description: "Options for saving and funding your down payment on a home purchase.",
      category: "Buying",
      link: "/articles/down-payment-strategies"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Resources</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Tools, guides, and resources to help you make informed decisions about your mortgage.
            </p>
          </div>
        </section>
        
        {/* Mortgage Calculators */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-4">Mortgage Calculators</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Use our interactive calculators to help plan your mortgage and understand the financial implications of different scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calculator, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{calculator.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{calculator.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-navy hover:bg-brand-darkBlue">
                      Open Calculator
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Educational Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-4">Educational Articles</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Browse our library of articles to learn more about mortgages, home buying, refinancing, and more.
            </p>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Articles</TabsTrigger>
                  <TabsTrigger value="buying">Buying</TabsTrigger>
                  <TabsTrigger value="refinancing">Refinancing</TabsTrigger>
                  <TabsTrigger value="credit">Credit</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="h-full flex flex-col">
                      <CardHeader>
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600">{article.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                          Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="buying" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles
                    .filter(article => article.category === "Buying")
                    .map((article, index) => (
                      <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                          <div className="mb-2">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                              {article.category}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-gray-600">{article.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                            Read Article
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="refinancing" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles
                    .filter(article => article.category === "Refinancing")
                    .map((article, index) => (
                      <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                          <div className="mb-2">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                              {article.category}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-gray-600">{article.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                            Read Article
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="credit" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles
                    .filter(article => article.category === "Credit")
                    .map((article, index) => (
                      <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                          <div className="mb-2">
                            <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                              {article.category}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-gray-600">{article.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                            Read Article
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                View All Resources
              </Button>
            </div>
          </div>
        </section>
        
        {/* First-Time Homebuyers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mortgage-header mb-4">First-Time Homebuyer Resources</h2>
                <p className="text-gray-600 mb-4">
                  Buying your first home is an exciting milestone, but it can also be overwhelming. We provide special resources, programs, and guidance specifically for first-time homebuyers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand-navy font-bold mr-2">•</span>
                    <span className="text-gray-600">Down payment assistance programs in Wyoming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-navy font-bold mr-2">•</span>
                    <span className="text-gray-600">Educational workshops and seminars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-navy font-bold mr-2">•</span>
                    <span className="text-gray-600">First-time homebuyer loan options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-navy font-bold mr-2">•</span>
                    <span className="text-gray-600">One-on-one guidance through the process</span>
                  </li>
                </ul>
                <div className="space-x-4">
                  <Link to="/first-time-homebuyers">
                    <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                      First-Time Buyer Guide
                    </Button>
                  </Link>
                  <Link to="/apply">
                    <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                      Start Application
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="First-time homebuyers receiving keys" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mortgage Glossary Teaser */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mortgage-header mb-4">Mortgage Glossary</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Understanding mortgage terminology is crucial when navigating the home buying process. Our comprehensive mortgage glossary explains key terms in plain language.
            </p>
            <Link to="/glossary">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                Browse Mortgage Glossary
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
