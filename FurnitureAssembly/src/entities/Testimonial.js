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
      service_type: "Kitchen Assembly",
      location: "Melbourne",
      featured: true,
      created_date: "2024-01-01"
    },
    {
      id: 7,
      customer_name: "Rebecca Martinez",
      rating: 5,
      review: "Amazing service! They assembled my daughter's bunk bed perfectly and it's rock solid. Very impressed with their attention to safety.",
      service_type: "Bedroom Assembly",
      location: "Richmond",
      featured: false,
      created_date: "2023-12-28"
    },
    {
      id: 8,
      customer_name: "Thomas Anderson",
      rating: 5,
      review: "Quick and professional. They had my office desk and chair set up in no time. Great value for money!",
      service_type: "Office Furniture",
      location: "South Yarra",
      featured: false,
      created_date: "2023-12-25"
    },
    {
      id: 9,
      customer_name: "Amanda Foster",
      rating: 4,
      review: "Very happy with the service. They were patient with my complex wardrobe assembly and explained everything clearly.",
      service_type: "IKEA Assembly",
      location: "Fitzroy",
      featured: false,
      created_date: "2023-12-22"
    },
    {
      id: 10,
      customer_name: "Kevin Wong",
      rating: 5,
      review: "Excellent work on my outdoor furniture set. They even helped move it to the perfect spot on my deck.",
      service_type: "Outdoor Furniture",
      location: "Brighton",
      featured: false,
      created_date: "2023-12-20"
    },
    {
      id: 11,
      customer_name: "Jessica Parker",
      rating: 5,
      review: "Professional team that knows what they're doing. My living room looks amazing now!",
      service_type: "Living Room Setup",
      location: "Carlton",
      featured: false,
      created_date: "2023-12-18"
    },
    {
      id: 12,
      customer_name: "Mark Thompson",
      rating: 4,
      review: "Good service, arrived on time and finished the job efficiently. Would recommend to others.",
      service_type: "General Assembly",
      location: "Prahran",
      featured: false,
      created_date: "2023-12-15"
    },
    {
      id: 13,
      customer_name: "Sophie Williams",
      rating: 5,
      review: "They saved me hours of frustration! My dining table and chairs are perfectly assembled and sturdy.",
      service_type: "Dining Room Assembly",
      location: "St Kilda",
      featured: false,
      created_date: "2023-12-12"
    },
    {
      id: 14,
      customer_name: "Robert Kim",
      rating: 5,
      review: "Outstanding service! They assembled my entertainment unit and mounted my TV perfectly. Very skilled technicians.",
      service_type: "Living Room Setup",
      location: "Hawthorn",
      featured: false,
      created_date: "2023-12-10"
    },
    {
      id: 15,
      customer_name: "Catherine Liu",
      rating: 4,
      review: "Professional and courteous. They took care of my kitchen island assembly with precision and care.",
      service_type: "Kitchen Assembly",
      location: "Toorak",
      featured: false,
      created_date: "2023-12-08"
    }
  ];

  // Generate additional reviews to reach 250+ total
  static generateAdditionalReviews() {
    const names = [
      "John Smith", "Mary Johnson", "Peter Brown", "Anna Wilson", "Chris Davis", "Emma Thompson", "Daniel Garcia", "Olivia Miller", "Matthew Jones", "Isabella Rodriguez",
      "Andrew Taylor", "Sophia Anderson", "Joshua Thomas", "Charlotte Jackson", "Michael White", "Amelia Harris", "David Martin", "Mia Thompson", "James Moore", "Evelyn Lewis",
      "Ryan Clark", "Abigail Rodriguez", "Nicholas Walker", "Emily Hall", "Brandon Allen", "Madison Young", "Tyler King", "Elizabeth Wright", "Aaron Scott", "Sofia Torres",
      "Justin Green", "Avery Adams", "Samuel Baker", "Ella Nelson", "Benjamin Carter", "Scarlett Mitchell", "Nathan Perez", "Grace Roberts", "Caleb Turner", "Aria Phillips",
      "Lucas Campbell", "Chloe Parker", "Henry Evans", "Layla Edwards", "Owen Collins", "Victoria Stewart", "Eli Sanchez", "Natalie Morris", "Carter Rogers", "Samantha Reed",
      "Luke Cook", "Aubrey Bailey", "Gabriel Rivera", "Brooklyn Cooper", "Isaac Richardson", "Lillian Cox", "Jayden Howard", "Addison Ward", "Levi Torres", "Lily Peterson",
      "Sebastian Gray", "Hannah Ramirez", "Mason James", "Zoe Watson", "Lincoln Brooks", "Nora Kelly", "Oliver Sanders", "Stella Price", "Elijah Bennett", "Hazel Wood",
      "William Barnes", "Violet Ross", "Connor Henderson", "Aurora Coleman", "Ethan Jenkins", "Savannah Perry", "Jacob Powell", "Audrey Long", "Aiden Patterson", "Claire Hughes",
      "Jackson Flores", "Leah Washington", "Noah Butler", "Anna Simmons", "Logan Foster", "Paisley Gonzales", "Alexander Bryant", "Skylar Alexander", "Mason Russell", "Bella Griffin",
      "Michael Diaz", "Genesis Hayes", "Elijah Myers", "Naomi Ford", "Oliver Hamilton", "Elena Graham", "Lucas Sullivan", "Ivy Wallace", "Henry Woods", "Melody Barnes",
      "Sebastian West", "Jordyn Cole", "Jack Chapman", "Harmony Reynolds", "Owen Fisher", "Trinity Rice", "Wyatt Porter", "Faith Bell", "Grayson Hunt", "Hope Ward"
    ];

    const locations = [
      "Melbourne", "Richmond", "South Yarra", "Fitzroy", "Brighton", "Carlton", "Prahran", "St Kilda", "Hawthorn", "Toorak",
      "Collingwood", "Northcote", "Kew", "Camberwell", "Malvern", "Armadale", "Windsor", "Albert Park", "Port Melbourne", "Docklands",
      "Southbank", "East Melbourne", "North Melbourne", "West Melbourne", "Parkville", "Brunswick", "Thornbury", "Preston", "Reservoir", "Coburg",
      "Essendon", "Moonee Ponds", "Footscray", "Yarraville", "Seddon", "Newport", "Williamstown", "Altona", "Sunshine", "Braybrook",
      "Flemington", "Kensington", "Ascot Vale", "Maribyrnong", "Aberfeldie", "Strathmore", "Pascoe Vale", "Oak Park", "Glenroy", "Broadmeadows"
    ];

    const serviceTypes = this.getServiceTypes();

    const reviewTemplates = [
      "Excellent service! Professional and efficient work. Highly recommended.",
      "Great job assembling my furniture. Very satisfied with the quality of work.",
      "Professional team that arrived on time and completed the job perfectly.",
      "Amazing service! They made the whole process stress-free and easy.",
      "Very impressed with their attention to detail and craftsmanship.",
      "Fast and reliable service. Will definitely use them again in the future.",
      "Outstanding work! They exceeded my expectations in every way.",
      "Professional, courteous, and skilled. Couldn't ask for better service.",
      "They did an amazing job with my furniture assembly. Highly recommend!",
      "Quick, efficient, and professional. Very happy with the results.",
      "Excellent service from start to finish. Very pleased with their work.",
      "Great team that knows what they're doing. Perfect assembly job!",
      "Very professional and reliable. They made everything look perfect.",
      "Fantastic service! They were careful, thorough, and very skilled.",
      "Amazing attention to detail. My furniture looks absolutely perfect.",
      "Professional service at a great price. Will definitely recommend to others.",
      "They were punctual, professional, and did excellent work. Very satisfied.",
      "Great job on my furniture assembly. Clean, efficient, and professional.",
      "Excellent service! They took care of everything and cleaned up afterwards.",
      "Very impressed with their professionalism and quality of work.",
      "Outstanding service! They made sure everything was perfect before leaving.",
      "Professional team with great attention to detail. Highly recommended.",
      "Amazing work! They assembled everything quickly and professionally.",
      "Very satisfied with their service. Professional, clean, and efficient.",
      "Great experience! They were helpful, professional, and did excellent work.",
      "Fantastic service! They made the whole process easy and stress-free.",
      "Professional assembly service with great attention to quality and detail.",
      "Excellent work! They were careful, thorough, and very professional.",
      "Very happy with their service. Quick, efficient, and professionally done.",
      "Outstanding job! They exceeded expectations and delivered perfect results."
    ];

    const additionalReviews = [];
    for (let i = 16; i <= 255; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomService = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
      const randomReview = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
      const randomRating = Math.random() < 0.7 ? 5 : (Math.random() < 0.9 ? 4 : 3); // 70% 5-star, 20% 4-star, 10% 3-star
      
      // Generate dates going back over the past 2 years
      const daysAgo = Math.floor(Math.random() * 730); // Random day in past 2 years
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      const formattedDate = date.toISOString().split('T')[0];

      additionalReviews.push({
        id: i,
        customer_name: randomName,
        rating: randomRating,
        review: randomReview,
        service_type: randomService,
        location: randomLocation,
        featured: false,
        created_date: formattedDate
      });
    }

    return additionalReviews;
  }

  static getAllData() {
    if (this.mockData.length < 50) {
      // Only generate additional reviews if we haven't already
      const additionalReviews = this.generateAdditionalReviews();
      this.mockData = [...this.mockData, ...additionalReviews];
    }
    return this.mockData;
  }

  static async filter(criteria = {}, sortBy = '-created_date', limit = null) {
    let filtered = this.getAllData();

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
    return this.getAllData();
  }

  static async getById(id) {
    return this.getAllData().find(item => item.id === id);
  }

  static async create(reviewData) {
    // In production, this would send data to your backend API
    const allData = this.getAllData();
    const newReview = {
      id: allData.length + 1,
      customer_name: reviewData.customer_name,
      rating: parseInt(reviewData.rating),
      review: reviewData.review,
      service_type: reviewData.service_type || 'General Service',
      location: reviewData.location || 'Melbourne',
      featured: false, // New reviews need approval before featuring
      created_date: new Date().toISOString().split('T')[0]
    };

    // Add to mock data (in production, this would be handled by backend)
    this.mockData.unshift(newReview);
    
    return {
      success: true,
      message: 'Thank you for your review! It will be published after moderation.',
      review: newReview
    };
  }

  static async getAverageRating() {
    const allData = this.getAllData();
    if (allData.length === 0) return 0;
    const total = allData.reduce((sum, review) => sum + review.rating, 0);
    return (total / allData.length).toFixed(1);
  }

  static async getTotalReviews() {
    return this.getAllData().length;
  }

  static getServiceTypes() {
    return [
      'IKEA Assembly',
      'Office Furniture',
      'Bedroom Assembly',
      'Living Room Setup',
      'Dining Room Assembly',
      'Kitchen Assembly',
      'Outdoor Furniture',
      'Custom Furniture',
      'General Assembly'
    ];
  }
} 