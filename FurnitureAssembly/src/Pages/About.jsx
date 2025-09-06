import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Shield, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  Heart,
  Target,
  Zap
} from "lucide-react";

const teamMembers = [
  {
    name: "Mike Johnson",
    role: "Founder & Lead Assembly Expert",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    specialties: ["IKEA Expert", "Custom Furniture", "Office Setup"]
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    specialties: ["Project Management", "Quality Control", "Customer Relations"]
  },
  {
    name: "David Rodriguez",
    role: "Senior Assembly Technician",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    specialties: ["Complex Assembly", "Repair Services", "Training"]
  }
];

const values = [
  {
    icon: Shield,
    title: "Trustworthy Service",
    description: "Licensed, bonded, and insured professionals you can count on.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for perfection in every assembly project we complete.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction and happiness is our top priority always.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "Every screw, every joint, every finish - we get it right.",
    color: "bg-green-100 text-green-600"
  }
];

const achievements = [
  { number: "2,500+", label: "Happy Customers" },
  { number: "5,000+", label: "Projects Completed" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "10+", label: "Years Experience" },
  { number: "24hr", label: "Response Time" },
  { number: "100%", label: "Satisfaction Rate" }
];

export default function About() {
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded in 2014</h3>
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
                      Our team consists of skilled professionals with extensive experience in furniture 
                      assembly. Each team member is carefully selected, trained, and committed to 
                      delivering exceptional service with attention to every detail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To provide professional, reliable, and stress-free furniture assembly services 
                      that exceed customer expectations. We believe everyone deserves to enjoy their 
                      new furniture without the hassle of complicated assembly instructions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The skilled professionals behind your perfect assembly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  
                  <Badge variant="outline" className="mb-4">
                    {member.experience}
                  </Badge>
                  
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak to our commitment and expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust AssemblyPro 
            with their furniture assembly needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Quote")}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}