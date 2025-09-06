import React, { useState } from "react";
import { Quote } from "@/entities/Quote";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone, MessageSquare, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import QuoteForm from "../components/quote/QuoteForm";
import QuoteSuccess from "../components/quote/QuoteSuccess";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  const handleSubmitQuote = async (quoteData) => {
    // Note: Currently storing quotes in memory (mockData)
    // In production, this would send to your backend API or email service
    console.log('Quote submitted:', quoteData);
    const newQuote = await Quote.create(quoteData);
    setSubmittedQuote(newQuote);
    setSubmitted(true);
  };

  if (submitted) {
    return <QuoteSuccess quote={submittedQuote} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your furniture assembly project and we'll provide you with 
              a detailed estimate within 24 hours.
            </p>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            "Free detailed estimates",
            "Same-day service available", 
            "100% satisfaction guarantee"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Options - Left Side */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 h-fit sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Prefer to Talk?
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Contact us directly for immediate assistance!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-xl font-bold text-blue-600 mb-1">(555) 123-4567</p>
                      <p className="text-xs text-gray-500">Mon-Sat 8AM-7PM</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Text Us</h3>
                      <p className="text-xl font-bold text-blue-600 mb-1">(555) 123-4567</p>
                      <p className="text-xs text-gray-500">Quick responses 7 days</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-center gap-2 text-yellow-800">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">
                      Response time: Under 30 min
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Section - Right Side */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Detailed Quote
              </h2>
              <p className="text-gray-600">
                Fill out the form below for a comprehensive estimate
              </p>
            </div>
            
            <QuoteForm onSubmit={handleSubmitQuote} />
          </div>
        </div>
      </div>
    </div>
  );
}