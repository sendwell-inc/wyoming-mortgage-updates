
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Wyoming Mortgage made buying our first home incredibly smooth. Their team was always available to answer our questions, and we secured a great rate. The SMS updates were particularly helpful!",
    author: "Sarah Johnson",
    location: "Cheyenne, WY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a first-time homebuyer, I was nervous about the mortgage process. The team walked me through every step and found me a loan that fit my budget perfectly. Couldn't be happier!",
    author: "Michael Robinson",
    location: "Casper, WY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The SMS updates were a game-changer during our home buying process. I always knew exactly what was happening with my application. Highly recommend their services to everyone!",
    author: "Jennifer Williams",
    location: "Jackson, WY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1541779408-c1c2e1911cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-white text-brand-navy px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">Testimonials</span>
        <h2 className="mortgage-header mt-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what Wyoming homeowners have to say about working with our team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
            {/* Quote icon */}
            <div className="absolute -top-4 -left-4 bg-brand-gold rounded-full p-2 shadow-lg">
              <Quote className="w-5 h-5 text-white" />
            </div>
            
            {/* Rating */}
            <div className="mb-6 flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</blockquote>
            
            {/* Author */}
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden h-12 w-12 mr-4">
                <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
