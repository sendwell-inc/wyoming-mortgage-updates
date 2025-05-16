
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Michael Johnson",
      title: "CEO & Principal Loan Officer",
      bio: "Michael has over 20 years of mortgage industry experience and has helped thousands of Wyoming families achieve their homeownership dreams.",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Sarah Williams",
      title: "Senior Loan Officer",
      bio: "With 15 years in mortgage lending, Sarah specializes in helping first-time homebuyers navigate the complexities of the mortgage process.",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "David Chen",
      title: "Loan Officer",
      bio: "David brings 10 years of financial expertise to our team, with a focus on VA loans and helping veterans secure home financing.",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Jennifer Rodriguez",
      title: "Operations Manager",
      bio: "Jennifer ensures that all loan applications are processed smoothly and efficiently, providing exceptional customer service along the way.",
      imageSrc: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Wyoming Mortgage</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Your trusted mortgage partner in Wyoming since 2005, helping thousands of families achieve the dream of homeownership.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mortgage-header mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Wyoming Mortgage, our mission is to make homeownership accessible, transparent, and achievable for all Wyoming residents. We believe that owning a home is not just a financial decision but a cornerstone of building strong communities and families.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We are committed to providing personalized mortgage solutions that meet the unique needs of each client, delivered with integrity, transparency, and exceptional service. Our goal is not just to close loans, but to build lasting relationships with our clients and communities.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you're buying your first home, upgrading to accommodate a growing family, or refinancing to better match your financial goals, we're here to guide you through every step of the process.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Wyoming Mortgage team meeting" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy bg-opacity-30" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Company History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-12">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2005</div>
                  <h3 className="text-xl font-semibold mb-3">Founded in Cheyenne</h3>
                  <p className="text-gray-600">
                    Wyoming Mortgage was established with a simple goal: to provide honest, transparent mortgage services to Wyoming residents.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2010</div>
                  <h3 className="text-xl font-semibold mb-3">Expanded Services</h3>
                  <p className="text-gray-600">
                    Added specialized loan programs for rural homebuyers and expanded our team to serve more Wyoming communities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2015</div>
                  <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                  <p className="text-gray-600">
                    Launched our digital application platform, making it easier than ever for clients to apply for and track their mortgages.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2018</div>
                  <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                  <p className="text-gray-600">
                    Established the Wyoming Homeownership Foundation to promote financial literacy and homeownership in underserved communities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2020</div>
                  <h3 className="text-xl font-semibold mb-3">Virtual Services</h3>
                  <p className="text-gray-600">
                    Implemented fully virtual mortgage consultations and closings to safely serve clients during the pandemic.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-brand-navy font-bold text-2xl mb-2">2023</div>
                  <h3 className="text-xl font-semibold mb-3">SMS Updates Launch</h3>
                  <p className="text-gray-600">
                    Introduced our innovative SMS update system, keeping clients informed in real-time throughout the mortgage process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our experienced team of mortgage professionals is dedicated to providing exceptional service and finding the right financing solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-brand-navy font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="bg-brand-navy hover:bg-brand-darkBlue">
                  Meet With Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We believe in honest communication, transparent processes, and always doing what's right for our clients, even when it's not the easiest path.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  As Wyoming natives, we're invested in the growth and prosperity of our local communities and committed to making a positive impact.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from the advice we provide to the service experience we deliver to every client.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mortgage-header mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <blockquote className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Working with Wyoming Mortgage made buying our first home a breeze. They explained everything clearly and were always available to answer our questions."
                </p>
                <cite className="font-semibold block">— James & Emma Thompson, Cheyenne</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "The SMS updates were fantastic! I always knew exactly what was happening with my application and what was needed next. Highly recommend!"
                </p>
                <cite className="font-semibold block">— Marcus Wilson, Jackson</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "As a veteran, I appreciated their expertise with VA loans. They made the process simple and got me a great rate on my family's new home."
                </p>
                <cite className="font-semibold block">— Sarah Martinez, Casper</cite>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Mortgage Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is ready to help you achieve your homeownership dreams with personalized mortgage solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/apply">
                <Button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy font-bold text-lg px-8 py-6">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Contact Us
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

export default About;
