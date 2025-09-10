import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Edit3 } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-200" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">
                    {testimonial.customer_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.service_type} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Had a great experience with us?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your experience and help other customers choose the best furniture assembly service. 
              Your review makes a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Reviews")}>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Write a Review
                </Button>
              </Link>
              <Link to={createPageUrl("Reviews")}>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Star className="w-4 h-4 mr-2" />
                  View All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}