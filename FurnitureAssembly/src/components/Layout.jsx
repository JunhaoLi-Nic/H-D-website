import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, FileText, Wrench, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Home",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "Services",
    url: createPageUrl("Services"),
    icon: Wrench,
  },
  {
    title: "Get Quote",
    url: createPageUrl("Quote"),
    icon: FileText,
  },
  {
    title: "About",
    url: createPageUrl("About"),
    icon: Users,
  },
  {
    title: "Contact",
    url: createPageUrl("Contact"),
    icon: Phone,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AssemblyPro</h1>
                <p className="text-xs text-blue-600 font-medium">Expert Furniture Assembly</p>
              </div>
            </Link>

            {/* Navigation - Now responsive without hamburger menu */}
            <nav className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                    location.pathname === item.url
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:block">{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl("Quote")}>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AssemblyPro</h3>
                  <p className="text-blue-300 text-sm">Expert Furniture Assembly</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Professional furniture assembly services with guaranteed satisfaction. 
                We handle everything from IKEA furniture to complex custom pieces.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">Licensed & Insured</p>
                  <p className="text-sm text-gray-400">Fully bonded professionals</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>IKEA Furniture Assembly</li>
                <li>Office Furniture Setup</li>
                <li>Bedroom Assembly</li>
                <li>Furniture Repair</li>
                <li>Disassembly Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 (555) 123-4567</p>
                <p>✉️ hello@assemblypro.com</p>
                <p>📍 Serving Greater Metro Area</p>
                <p>🕒 Mon-Sat: 8AM-7PM</p>
                <p>🕒 Sunday: 10AM-5PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AssemblyPro. All rights reserved. Licensed, Bonded & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}