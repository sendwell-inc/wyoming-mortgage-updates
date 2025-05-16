
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          q: 'What does Wyoming Mortgage do?',
          a: 'Wyoming Mortgage is a mortgage lending company specializing in providing home loans to residents of Wyoming. We offer various mortgage products including conventional, FHA, VA, and USDA loans, and guide our clients through the entire mortgage process from application to closing.'
        },
        {
          q: 'How do I know which mortgage is right for me?',
          a: 'The right mortgage depends on your financial situation, credit score, down payment amount, and long-term goals. Our loan officers work with you to assess your needs and recommend the best option. We consider factors like how long you plan to stay in the home, your income stability, and your comfort level with payment changes.'
        },
        {
          q: 'How long does the mortgage process take?',
          a: 'Typically, the mortgage process takes 30-45 days from application to closing. However, this timeline can vary based on your specific situation, the type of loan, and current market conditions. Our SMS update system keeps you informed about your application status every step of the way.'
        }
      ]
    },
    {
      id: 'application',
      title: 'Application Process',
      questions: [
        {
          q: 'What documents do I need to apply for a mortgage?',
          a: 'Generally, you\'ll need: proof of income (W-2s, pay stubs, tax returns), proof of assets (bank statements, investment accounts), identification (driver\'s license, Social Security number), credit history, and employment verification. Specific requirements may vary based on your situation and loan type.'
        },
        {
          q: 'Can I apply for a mortgage online?',
          a: 'Yes! We offer a convenient online application process. You can start your application from our website, upload documents securely, and track your application status online. If you prefer, you can also apply in person at our office or by phone with one of our loan officers.'
        },
        {
          q: 'What credit score do I need to qualify for a mortgage?',
          a: 'Credit score requirements vary by loan type. Generally, conventional loans require a score of 620 or higher, FHA loans may accept scores as low as 580, and VA loans have no official minimum (though lenders typically require 620+). We work with various lenders and can help find options that match your credit profile.'
        }
      ]
    },
    {
      id: 'loan-types',
      title: 'Loan Types and Programs',
      questions: [
        {
          q: 'What\'s the difference between fixed-rate and adjustable-rate mortgages?',
          a: 'A fixed-rate mortgage maintains the same interest rate throughout the loan term, providing predictable monthly payments. An adjustable-rate mortgage (ARM) has an interest rate that changes periodically after an initial fixed period, potentially resulting in payment changes. Fixed-rate loans offer stability, while ARMs may offer lower initial rates.'
        },
        {
          q: 'What are the benefits of a VA loan?',
          a: 'VA loans offer significant benefits to veterans and active military, including: no down payment requirement, no private mortgage insurance, competitive interest rates, limited closing costs, and more flexible credit requirements. These loans are guaranteed by the Department of Veterans Affairs and are an excellent option for those who qualify.'
        },
        {
          q: 'Do you offer loans for first-time homebuyers?',
          a: 'Yes, we offer several programs specifically designed for first-time homebuyers, including those with low down payment requirements and more flexible qualification criteria. We also connect eligible buyers with state and local down payment assistance programs to help make homeownership more affordable.'
        }
      ]
    },
    {
      id: 'costs',
      title: 'Mortgage Costs and Fees',
      questions: [
        {
          q: 'How much down payment will I need?',
          a: 'Down payment requirements vary by loan type: Conventional loans typically require 3-20%, FHA loans require 3.5% with good credit, VA and USDA loans may offer 0% down payment options for qualified borrowers. The amount you put down affects your monthly payment and whether you\'ll need mortgage insurance.'
        },
        {
          q: 'What closing costs should I expect?',
          a: 'Closing costs typically range from 2-5% of the loan amount and may include: loan origination fees, appraisal fees, title insurance, escrow fees, attorney fees, recording fees, and prepaid items like property taxes and homeowners insurance. We provide a detailed Loan Estimate early in the process so you know what to expect.'
        },
        {
          q: 'What is mortgage insurance and when is it required?',
          a: 'Mortgage insurance protects the lender if you default on your loan. Private Mortgage Insurance (PMI) is required on conventional loans when the down payment is less than 20%. FHA loans require Mortgage Insurance Premium (MIP) regardless of down payment. VA loans don\'t require mortgage insurance but have a funding fee. USDA loans have a guarantee fee instead of mortgage insurance.'
        }
      ]
    },
    {
      id: 'sms-updates',
      title: 'SMS Updates',
      questions: [
        {
          q: 'How do the SMS updates work?',
          a: 'Our SMS update system sends you text message notifications about important milestones and status changes in your mortgage application process. You\'ll receive updates when your application is received, documents are reviewed, underwriting is complete, and when you\'re clear to close, among other key stages.'
        },
        {
          q: 'How often will I receive SMS updates?',
          a: 'You\'ll receive updates whenever there\'s a significant change in your application status or when action is required from you. This typically means several messages throughout the process, but not so many as to be overwhelming. The frequency depends on your specific application timeline.'
        },
        {
          q: 'Can I opt out of SMS updates?',
          a: 'Yes, you can opt out at any time by replying STOP to any of our text messages. You can also contact your loan officer if you prefer to receive updates by phone or email instead. We\'re committed to communicating with you in the way that works best for you.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Find answers to common questions about mortgages and our services.
            </p>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="bg-white border-b py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-medium">Jump to:</span>
              {faqCategories.map((category) => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`} 
                  className="text-brand-navy hover:text-brand-gold transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-12 scroll-mt-24">
                <h2 className="mortgage-subheader mb-6">{category.title}</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-item-${index}`} className="border rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
            
            <div className="mt-10 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                If you didn't find the answer you were looking for, please don't hesitate to contact us directly. Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                    Contact Us
                  </Button>
                </Link>
                <a href="tel:3075551234">
                  <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                    Call (307) 555-1234
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* SMS Opt-In Promotion */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mortgage-subheader mb-4">Stay Updated on Your Application</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't miss important updates about your mortgage application. Sign up for our SMS notification service to stay informed every step of the way.
            </p>
            <Link to="/application-status">
              <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                Enroll in SMS Updates
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
