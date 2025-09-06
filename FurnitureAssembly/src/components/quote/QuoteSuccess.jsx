import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Phone, Mail, Home, MessageSquare } from "lucide-react";

export default function QuoteSuccess({ quote }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quote Submitted Successfully!
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thank you for choosing AssemblyPro! We've received your quote request 
            and will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quote Summary */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Quote Request</h2>
              
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-700">Name:</span>
                  <span className="ml-2 text-gray-600">{quote.customer_name}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-gray-600">{quote.email}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="ml-2 text-gray-600">{quote.phone}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Service Type:</span>
                  <span className="ml-2 text-gray-600 capitalize">
                    {quote.service_type?.replace(/_/g, ' ')}
                  </span>
                </div>
                {quote.preferred_date && (
                  <div>
                    <span className="font-medium text-gray-700">Preferred Date:</span>
                    <span className="ml-2 text-gray-600">
                      {new Date(quote.preferred_date).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Within 24 Hours</h3>
                    <p className="text-gray-600">We'll review your request and send you a detailed quote via email.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Follow-up Call</h3>
                    <p className="text-gray-600">Our team will call to discuss details and schedule your service.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Service</h3>
                    <p className="text-gray-600">Our expert team will arrive on time and complete your assembly.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-blue-100 mb-6">
            Have questions about your quote? Don't hesitate to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0401 562 682</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">Text us anytime</span>
            </div>
          </div>
        </div>

        {/* Return Home Button */}
        <div className="text-center">
          <Link to={createPageUrl("Home")}>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}