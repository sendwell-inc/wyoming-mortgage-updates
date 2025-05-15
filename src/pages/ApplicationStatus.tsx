
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SMSOptIn from '@/components/sms/SMSOptIn';
import { Button } from '@/components/ui/button';

const ApplicationStatus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Mortgage Application</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Stay informed about your mortgage application's progress every step of the way.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="mortgage-subheader">Check Your Application Status</h2>
                <p className="text-gray-600 mb-6">
                  If you've already started an application, you can check its status through our online portal or by contacting your loan officer directly.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2 text-brand-navy">Online Application Portal</h3>
                    <p className="text-gray-600 mb-4">
                      Log in to our secure portal to check your application status, upload documents, and communicate with your loan officer.
                    </p>
                    <Link to="https://portal.wyomingmortgage.com" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                        Login to Portal
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2 text-brand-navy">Contact Your Loan Officer</h3>
                    <p className="text-gray-600 mb-4">
                      Reach out to your assigned loan officer directly for updates on your application status.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-brand-lightBlue p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-brand-navy">Understanding Our Process</h3>
                  <p className="text-gray-700 mb-4">
                    The mortgage application process typically includes these stages:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Application Submission</li>
                    <li>Document Collection</li>
                    <li>Underwriting Review</li>
                    <li>Conditional Approval</li>
                    <li>Clear to Close</li>
                    <li>Closing</li>
                  </ol>
                </div>
              </div>
              
              {/* SMS Opt-In Form */}
              <div>
                <h2 className="mortgage-subheader">Get SMS Updates</h2>
                <p className="text-gray-600 mb-6">
                  Sign up to receive text message notifications about important updates to your application status.
                </p>
                <SMSOptIn />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-subheader text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2 text-brand-navy">How long does the mortgage process take?</h3>
                <p className="text-gray-600">
                  Typically, the mortgage process takes 30-45 days from application to closing, but timelines can vary based on your specific situation and loan type.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2 text-brand-navy">What documents will I need to provide?</h3>
                <p className="text-gray-600">
                  You'll need to provide proof of income, employment verification, bank statements, tax returns, and identification documents. Your loan officer will provide a complete checklist.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2 text-brand-navy">How often will I receive updates?</h3>
                <p className="text-gray-600">
                  If you enroll in our SMS updates, you'll receive notifications whenever there's a significant change in your application status or when action is required.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2 text-brand-navy">Can I opt out of SMS updates?</h3>
                <p className="text-gray-600">
                  Yes, you can opt out at any time by replying STOP to any of our text messages or contacting your loan officer.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/faq">
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationStatus;
