import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "(555) 123-4567",
    action: "tel:+15551234567",
    color: "bg-green-100 text-green-600",
    available: "Mon-Sat: 8AM-7PM, Sun: 10AM-5PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions",
    contact: "hello@assemblypro.com",
    action: "mailto:hello@assemblypro.com",
    color: "bg-blue-100 text-blue-600",
    available: "24/7 - We respond within 2 hours"
  },
  {
    icon: MessageSquare,
    title: "Text Message",
    description: "Quick questions via SMS",
    contact: "(555) 123-4567",
    action: "sms:+15551234567",
    color: "bg-purple-100 text-purple-600",
    available: "Mon-Fri: 9AM-6PM"
  }
];

const serviceAreas = [
  "Downtown Metro",
  "North District",
  "South Hills",
  "East Valley",
  "West End",
  "Suburban Areas",
  "Business Districts",
  "Surrounding Communities"
];

const faqItems = [
  {
    question: "How much does furniture assembly cost?",
    answer: "Our pricing starts at $65/hour for simple assembly, with most furniture pieces having flat-rate pricing starting at $75. We provide free, detailed quotes for all projects."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day service when available. Contact us early in the day to check availability for urgent assembly needs."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed, bonded, and insured for your complete peace of mind and protection."
  },
  {
    question: "What brands of furniture do you assemble?",
    answer: "We assemble all major furniture brands including IKEA, Wayfair, Amazon, Target, Walmart, and custom furniture from any manufacturer."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to get started? Have questions? We're here to help! 
              Contact us today for your free quote and consultation.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  <a 
                    href={method.action}
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors block mb-4"
                  >
                    {method.contact}
                  </a>
                  
                  <Badge variant="outline" className="text-xs">
                    {method.available}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Professional Assembly?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your free quote today and join thousands of satisfied customers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Quote")}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6">
                  Get Free Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 5:00 PM</span>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Same-day service available</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    Emergency assembly services by appointment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  We proudly serve the greater metro area and surrounding communities:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium">Don't see your area listed?</p>
                  <p className="text-sm text-blue-600 mt-1">
                    Contact us! We may still be able to serve your location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? We'd love to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: (555) 123-4567
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Email: hello@assemblypro.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Emergency Assembly Service?
          </h2>
          <p className="text-red-100 mb-6">
            We offer emergency and same-day assembly services for urgent needs
          </p>
          <a href="tel:+15551234567">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Line: (555) 123-4567
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}