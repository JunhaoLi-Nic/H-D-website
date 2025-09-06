import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Shield, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium inline-flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Licensed & Insured Professionals
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Expert
              <span className="block text-blue-600">Furniture Assembly</span>
              <span className="block text-gray-600 text-3xl md:text-4xl">You Can Trust</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Professional furniture assembly services for your home or office. 
              Fast, reliable, and backed by our 100% satisfaction guarantee.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Same-day service available",
                "All brands and types",
                "Professional cleanup included",
                "100% satisfaction guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Quote")}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-gray-50">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9/5 (2,500+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional furniture assembly"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5,000+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9 Stars</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}