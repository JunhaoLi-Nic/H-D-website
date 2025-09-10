import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/entities/Testimonial";
import { 
  Star, 
  StarIcon,
  MessageSquare, 
  ThumbsUp, 
  Calendar,
  MapPin,
  Wrench,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({ average: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    customer_name: '',
    rating: '',
    review: '',
    service_type: '',
    location: ''
  });

  const [starHover, setStarHover] = useState(0);

  useEffect(() => {
    loadReviews();
    loadStats();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await Testimonial.getAll();
      setReviews(data);
    } catch (err) {
      setError('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const average = await Testimonial.getAverageRating();
      const total = await Testimonial.getTotalReviews();
      setStats({ average, total });
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating.toString()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.customer_name || !formData.rating || !formData.review) {
        throw new Error('Please fill in all required fields');
      }

      if (formData.review.length < 10) {
        throw new Error('Review must be at least 10 characters long');
      }

      const result = await Testimonial.create(formData);
      
      if (result.success) {
        setSuccess(true);
        setFormData({
          customer_name: '',
          rating: '',
          review: '',
          service_type: '',
          location: ''
        });
        
        // Reload reviews and stats
        await loadReviews();
        await loadStats();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating, size = "w-5 h-5", interactive = false, hoverRating = 0) => {
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      const isActive = interactive 
        ? (hoverRating || parseInt(formData.rating)) >= starNumber
        : rating >= starNumber;
        
      return (
        <Star
          key={index}
          className={`${size} cursor-pointer transition-colors ${
            isActive ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
          onClick={interactive ? () => handleRatingClick(starNumber) : undefined}
          onMouseEnter={interactive ? () => setStarHover(starNumber) : undefined}
          onMouseLeave={interactive ? () => setStarHover(0) : undefined}
        />
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              See what our customers say about our furniture assembly services
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex">
                    {renderStars(Math.round(stats.average), "w-6 h-6")}
                  </div>
                  <span className="text-2xl font-bold">{stats.average}</span>
                </div>
                <p className="text-blue-100">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{stats.total}</div>
                <p className="text-blue-100">Total Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Write a Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium">Review Submitted!</p>
                      <p className="text-green-700 text-sm mt-1">
                        Thank you for your feedback. Your review will be published after moderation.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="customer_name">Your Name *</Label>
                    <Input
                      id="customer_name"
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <Label>Rating *</Label>
                    <div className="flex items-center gap-1 mt-2">
                      {renderStars(0, "w-8 h-8", true, starHover)}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Click to rate our service
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="service_type">Service Type</Label>
                    <Select
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select service type</option>
                      {Testimonial.getServiceTypes().map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Melbourne, Richmond"
                    />
                  </div>

                  <div>
                    <Label htmlFor="review">Your Review *</Label>
                    <Textarea
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience..."
                      rows={4}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Minimum 10 characters ({formData.review.length}/10)
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Review'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                All Reviews ({stats.total})
              </h2>
              <p className="text-gray-600">
                Read what our customers have to say about our services
              </p>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900">{review.customer_name}</h3>
                          {review.featured && (
                            <Badge variant="outline" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          {review.service_type && (
                            <div className="flex items-center gap-1">
                              <Wrench className="w-4 h-4" />
                              {review.service_type}
                            </div>
                          )}
                          {review.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {review.location}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(review.created_date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      "{review.review}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {reviews.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                <p className="text-gray-600">Be the first to leave a review!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 