import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Bed, 
  Briefcase, 
  Sofa, 
  ChefHat, 
  TreePine,
  Hammer,
  RotateCcw,
  Wrench,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "IKEA Furniture Assembly",
    description: "Expert assembly of all IKEA products with guaranteed satisfaction.",
    features: ["Kitchen cabinets", "PAX wardrobes", "Bedroom furniture", "Office desks", "Living room sets"],
    pricing: "Starting at $75",
    duration: "1-4 hours",
    popular: true
  },
  {
    icon: Bed,
    title: "Bedroom Furniture",
    description: "Complete bedroom setup including beds, dressers, and nightstands.",
    features: ["Bed frames & headboards", "Dressers & armoires", "Nightstands", "Vanities", "Closet systems"],
    pricing: "Starting at $85",
    duration: "2-5 hours"
  },
  {
    icon: Briefcase,
    title: "Office Furniture",
    description: "Professional office setup for maximum productivity.",
    features: ["Executive desks", "Office chairs", "Filing cabinets", "Bookcases", "Conference tables"],
    pricing: "Starting at $95",
    duration: "2-6 hours"
  },
  {
    icon: Sofa,
    title: "Living Room Furniture",
    description: "Transform your living space with expert assembly.",
    features: ["Entertainment centers", "Coffee tables", "Bookshelves", "Storage units", "Media consoles"],
    pricing: "Starting at $80",
    duration: "1-4 hours"
  },
  {
    icon: ChefHat,
    title: "Dining Room Furniture",
    description: "Complete dining room setup for family gatherings.",
    features: ["Dining tables", "Chairs & benches", "China cabinets", "Bar stools", "Kitchen islands"],
    pricing: "Starting at $90",
    duration: "2-5 hours"
  },
  {
    icon: TreePine,
    title: "Outdoor Furniture",
    description: "Weather-resistant outdoor furniture assembly.",
    features: ["Patio sets", "Gazebos & pergolas", "Outdoor storage", "Fire pit tables", "Garden furniture"],
    pricing: "Starting at $100",
    duration: "2-6 hours"
  }
];

const additionalServices = [
  {
    icon: RotateCcw,
    title: "Furniture Disassembly",
    description: "Safe and careful disassembly for moving or storage.",
    pricing: "Starting at $60"
  },
  {
    icon: Wrench,
    title: "Furniture Repair",
    description: "Fix and restore your existing furniture pieces.",
    pricing: "Starting at $70"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional furniture assembly services for every room in your home or office. 
              Expert craftsmanship with guaranteed satisfaction.
            </p>
          </div>

          {/* Service Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
              { icon: Clock, text: "Same-Day Service Available" },
              { icon: Star, text: "Licensed & Insured" },
              { icon: DollarSign, text: "Transparent Pricing" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                <benefit.icon className="w-6 h-6 text-green-600" />
                <span className="font-medium text-gray-900">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Main Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete furniture assembly solutions for every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Starting Price:</span>
                      <span className="font-bold text-green-600 text-lg">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold text-gray-900">{service.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-blue-600 text-sm font-medium">
                          +{service.features.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized services to meet all your furniture needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-green-600 mb-6">
                    {service.pricing}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            No hidden fees or surprise charges. Get a detailed quote upfront.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Hourly Rate</h3>
              <p className="text-3xl font-bold mb-2">$65/hr</p>
              <p className="text-blue-100 text-sm">For simple assemblies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Flat Rate Projects</h3>
              <p className="text-3xl font-bold mb-2">$75+</p>
              <p className="text-blue-100 text-sm">Most furniture pieces</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Large Projects</h3>
              <p className="text-3xl font-bold mb-2">Custom</p>
              <p className="text-blue-100 text-sm">Volume discounts available</p>
            </div>
          </div>

          <Link to={createPageUrl("Quote")}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}