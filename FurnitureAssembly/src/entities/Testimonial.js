export class Testimonial {
  static mockData = [
    {
      id: 1,
      customer_name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely fantastic service! They assembled my entire IKEA bedroom set in under 3 hours. Professional, clean, and efficient.",
      service_type: "IKEA Assembly",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-15"
    },
    {
      id: 2,
      customer_name: "Michael Chen",
      rating: 5,
      review: "The team was punctual, professional, and did an amazing job with my office furniture. Highly recommend!",
      service_type: "Office Furniture",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-10"
    },
    {
      id: 3,
      customer_name: "Emily Davis",
      rating: 4,
      review: "Great service and fair pricing. They handled our complex dining room setup with care and expertise.",
      service_type: "Dining Room Assembly",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-08"
    },
    {
      id: 4,
      customer_name: "David Wilson",
      rating: 5,
      review: "Exceptional work! They not only assembled my furniture but also helped arrange it perfectly in the room.",
      service_type: "Bedroom Assembly",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-05"
    },
    {
      id: 5,
      customer_name: "Lisa Brown",
      rating: 5,
      review: "Fast, reliable, and affordable. Will definitely use their services again for future furniture needs.",
      service_type: "Living Room Setup",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-03"
    },
    {
      id: 6,
      customer_name: "James Taylor",
      rating: 4,
      review: "Professional service with attention to detail. They cleaned up after themselves too!",
      service_type: "IKEA Assembly",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-01"
    }
  ];

  static async filter(criteria = {}, sortBy = '-created_date', limit = null) {
    let filtered = this.mockData;

    // Apply filters
    Object.keys(criteria).forEach(key => {
      filtered = filtered.filter(item => item[key] === criteria[key]);
    });

    // Apply sorting
    if (sortBy.startsWith('-')) {
      const field = sortBy.substring(1);
      filtered.sort((a, b) => new Date(b[field]) - new Date(a[field]));
    } else {
      filtered.sort((a, b) => new Date(a[sortBy]) - new Date(b[sortBy]));
    }

    // Apply limit
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }

  static async getAll() {
    return this.mockData;
  }

  static async getById(id) {
    return this.mockData.find(item => item.id === id);
  }
} 