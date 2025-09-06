import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/entities/Testimonial";
import { 
  Wrench, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight, 
  Users, 
  Zap,
  Award,
  Phone
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const data = await Testimonial.filter({ featured: true }, '-created_date', 6);
    setTestimonials(data);
  };

  const stats = [
    { icon: Users, label: "Happy Customers", value: "2,500+" },
    { icon: Wrench, label: "Projects Completed", value: "5,000+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSection testimonials={testimonials} />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free, no-obligation quote for your furniture assembly project. 
            Professional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Quote")}>
              <Button size="lg" className="bg-blue border-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}