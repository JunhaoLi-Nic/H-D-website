import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/entities/Testimonial";
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Star, 
  HeartHandshake, 
  CheckCircle, 
  Wrench,
  Phone,
  MessageSquare,
  MapPin
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "We build relationships based on honesty, integrity, and reliability.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description: "Your needs come first. We listen, adapt, and deliver beyond expectations.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Excellence",
    description: "We strive for perfection in every assembly project we undertake.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Wrench,
    title: "Expertise",
    description: "Our team brings years of specialized knowledge to every job.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Clock,
    title: "Attention to Detail",
    description: "Every screw, every joint, every finish - we get it right.",
    color: "bg-green-100 text-green-600"
  }
];

export default function About() {
  const [achievements, setAchievements] = useState([
    { number: "0+", label: "Happy Customers" },
    { number: "500+", label: "Projects Completed" },
    { number: "0", label: "Average Rating" },
    { number: "5+", label: "Years Experience" },
    { number: "24hr", label: "Response Time" },
    { number: "100%", label: "Satisfaction Rate" }
  ]);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const totalReviews = await Testimonial.getTotalReviews();
    const averageRating = await Testimonial.getAverageRating();
    
    setAchievements([
      { number: `${totalReviews}+`, label: "Happy Customers" },
      { number: "500+", label: "Projects Completed" },
      { number: `${averageRating}/5`, label: "Average Rating" },
      { number: "5+", label: "Years Experience" },
      { number: "24hr", label: "Response Time" },
      { number: "100%", label: "Satisfaction Rate" }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Trusted Since 2014
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About AssemblyPro
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a team of passionate professionals dedicated to making your furniture 
                assembly experience stress-free and perfect. With over 10 years of experience, 
                we've built a reputation for excellence and customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Quote")}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
                    Get Started Today
                  </Button>
                </Link>
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team at work"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded in 2019</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AssemblyPro was founded with a simple mission: to take the frustration out of 
                      furniture assembly. What started as a small local service has grown into the 
                      area's most trusted furniture assembly company, serving thousands of happy customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team consists of skilled furniture assembly professionals with years of experience. 
                      We're passionate about what we do and take pride in delivering exceptional service on every job.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our reputation is built on happy customers. We've maintained a near-perfect rating 
                      throughout our years of service, with thousands of successful projects completed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for themselves. We're proud of what we've accomplished.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch today for a free quote on your furniture assembly needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Quote")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-500">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}