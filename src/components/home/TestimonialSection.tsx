
import React from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Wyoming Mortgage made the home buying process incredibly smooth for our family. Their team was always available to answer our questions, and we secured a great rate.",
    author: "Sarah Johnson",
    location: "Cheyenne, WY",
    rating: 5
  },
  {
    quote: "As a first-time homebuyer, I was nervous about the mortgage process. The team at Wyoming Mortgage walked me through every step and found me a loan that fit my budget perfectly.",
    author: "Michael Robinson",
    location: "Casper, WY",
    rating: 5
  },
  {
    quote: "The SMS updates were a game-changer. I always knew exactly what was happening with my application and what was needed next. Highly recommend their services!",
    author: "Jennifer Williams",
    location: "Jackson, WY",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-brand-lightBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mortgage-header">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Wyoming homeowners have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-md bg-white">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
              
              <div>
                <p className="font-semibold text-brand-navy">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
