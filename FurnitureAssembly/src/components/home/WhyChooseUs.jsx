import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  Users, 
  Star,
  Award,
  Zap,
  HeartHandshake
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Licensed ",
    description: "Fully licensed, bonded,  for your peace of mind.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your time and always arrive when scheduled.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all our assembly work.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with years of assembly expertise.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Zap,
    title: "Quick Service",
    description: "Same-day and next-day service options available.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Your satisfaction is our top priority, always.",
    color: "bg-rose-100 text-rose-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose AssemblyPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another assembly service. We're your trusted partners 
            in creating the perfect space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-8 h-8" />
              <h3 className="text-3xl font-bold">Trusted by Thousands</h3>
            </div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Over 10 years of experience serving homeowners and businesses. 
              Join our satisfied customers who trust us with their furniture assembly needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}