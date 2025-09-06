import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Calendar, MapPin, User, Phone, Mail } from "lucide-react";

const SERVICE_TYPES = [
  { value: "bedroom_furniture", label: "Bedroom Furniture" },
  { value: "office_furniture", label: "Office Furniture" },
  { value: "living_room", label: "Living Room" },
  { value: "dining_room", label: "Dining Room" },
  { value: "outdoor_furniture", label: "Outdoor Furniture" },
  { value: "ikea_furniture", label: "IKEA Furniture" },
  { value: "custom_assembly", label: "Custom Assembly" },
  { value: "disassembly", label: "Disassembly Service" },
  { value: "furniture_repair", label: "Furniture Repair" }
];

const COMPLEXITY_OPTIONS = [
  { value: "simple", label: "Simple (basic assembly)" },
  { value: "medium", label: "Medium (moderate complexity)" },
  { value: "complex", label: "Complex (advanced assembly)" }
];

export default function QuoteForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: "",
    service_type: "",
    furniture_items: [{ item_name: "", brand: "", quantity: 1, complexity: "medium" }],
    preferred_date: "",
    preferred_time: "",
    additional_notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.furniture_items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, furniture_items: newItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      furniture_items: [...prev.furniture_items, { item_name: "", brand: "", quantity: 1, complexity: "medium" }]
    }));
  };

  const removeItem = (index) => {
    setFormData(prev => ({
      ...prev,
      furniture_items: prev.furniture_items.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <Card className="shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Request Your Quote</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5" />
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customer_name">Full Name *</Label>
                <Input
                  id="customer_name"
                  value={formData.customer_name}
                  onChange={(e) => handleInputChange("customer_name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Service Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Full address where service is needed"
                rows={2}
                required
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Service Details
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="service_type">Service Type *</Label>
              <Select 
                value={formData.service_type} 
                onChange={(e) => handleInputChange("service_type", e.target.value)}
                placeholder="Select service type"
              >
                {SERVICE_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          {/* Furniture Items */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Furniture Items</h3>
              <Button type="button" onClick={addItem} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
            
            <div className="space-y-4">
              {formData.furniture_items.map((item, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label>Item Name</Label>
                        <Input
                          value={item.item_name}
                          onChange={(e) => handleItemChange(index, "item_name", e.target.value)}
                          placeholder="e.g., Office desk"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Brand</Label>
                        <Input
                          value={item.brand}
                          onChange={(e) => handleItemChange(index, "brand", e.target.value)}
                          placeholder="e.g., IKEA, Wayfair"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Complexity</Label>
                        <div className="flex gap-2">
                          <Select 
                            value={item.complexity} 
                            onChange={(e) => handleItemChange(index, "complexity", e.target.value)}
                          >
                            {COMPLEXITY_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </Select>
                          {formData.furniture_items.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => removeItem(index)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scheduling */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Preferred Scheduling
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="preferred_date">Preferred Date</Label>
                <Input
                  id="preferred_date"
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => handleInputChange("preferred_date", e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred_time">Preferred Time</Label>
                <Select 
                  value={formData.preferred_time} 
                  onChange={(e) => handleInputChange("preferred_time", e.target.value)}
                  placeholder="Select preferred time"
                >
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="additional_notes">Additional Notes</Label>
            <Textarea
              id="additional_notes"
              value={formData.additional_notes}
              onChange={(e) => handleInputChange("additional_notes", e.target.value)}
              placeholder="Any special instructions, access codes, or additional information..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}