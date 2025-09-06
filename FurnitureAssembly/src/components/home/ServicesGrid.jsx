import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building, 
  Sofa, 
  Utensils, 
  TreePine,
  Puzzle,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Bedroom Furniture",
    description: "Complete bedroom setup including beds, wardrobes, nightstands, and dressers",
    features: ["Same-day assembly", "Professional tools", "Cleanup included"],
    price: "From $80",
    popular: false
  },
  {
    icon: Building,
    title: "Office Furniture",
    description: "Professional office setup with desks, chairs, storage units, and meeting furniture",
    features: ["Corporate rates", "Bulk discounts", "Weekend service"],
    price: "From $100",
    popular: true
  },
  {
    icon: Sofa,
    title: "Living Room",
    description: "Complete living room assembly including sofas, entertainment centers, and coffee tables",
    features: ["Heavy furniture specialists", "Wall mounting", "Layout advice"],
    price: "From $120",
    popular: false
  },
  {
    icon: Utensils,
    title: "Dining Room",
    description: "Dining tables, chairs, buffets, and china cabinets assembled with precision",
    features: ["Level adjustment", "Chair matching", "Table extension setup"],
    price: "From $90",
    popular: false
  },
  {
    icon: TreePine,
    title: "Outdoor Furniture",
    description: "Patio sets, garden furniture, and outdoor storage solutions",
    features: ["Weather-resistant assembly", "Seasonal service", "UV protection tips"],
    price: "From $110",
    popular: false
  },
  {
    icon: Puzzle,
    title: "IKEA Specialists",
    description: "Expert IKEA furniture assembly with all the right tools and experience",
    features: ["IKEA certified", "Pickup service", "Fastest assembly"],
    price: "From $60",
    popular: true
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional assembly services for all types of furniture. 
            No project too big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                {/* Service Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link to={createPageUrl("Quote")}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 group/btn">
                        <span className="flex items-center justify-center gap-2">
                          Get Quote
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Furniture Type?
          </h3>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We handle custom assemblies, specialty furniture, and unique projects. 
            Our experts can tackle any challenge you throw at us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Quote")}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 transition-all duration-300 group">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              Same Day Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}