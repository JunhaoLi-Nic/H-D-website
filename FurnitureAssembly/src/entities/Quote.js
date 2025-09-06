export class Quote {
  static mockData = [];

  static async create(quoteData) {
    // PRODUCTION NOTE: In a real application, this would:
    // 1. Send quote data to your backend API
    // 2. Email the quote to your business email
    // 3. Save to a database (PostgreSQL, MongoDB, etc.)
    // 4. Potentially integrate with CRM systems
    // 5. Send confirmation email to customer
    
    // For now, we're just storing in memory for demo purposes
    const newQuote = {
      id: Date.now(),
      ...quoteData,
      status: 'pending',
      estimated_price: this.calculateEstimate(quoteData),
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString()
    };
    
    this.mockData.push(newQuote);
    
    // In production, you might do something like:
    // await fetch('/api/quotes', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newQuote)
    // });
    
    return newQuote;
  }

  static async getAll() {
    return this.mockData;
  }

  static async getById(id) {
    return this.mockData.find(quote => quote.id === id);
  }

  static calculateEstimate(quoteData) {
    let basePrice = 0;
    
    // Base pricing by service type
    const servicePricing = {
      'bedroom_furniture': 80,
      'office_furniture': 100,
      'living_room': 120,
      'dining_room': 90,
      'outdoor_furniture': 110,
      'ikea_furniture': 60,
      'custom_assembly': 150,
      'disassembly': 40,
      'furniture_repair': 80
    };

    basePrice = servicePricing[quoteData.service_type] || 80;

    // Add cost per furniture item
    if (quoteData.furniture_items && quoteData.furniture_items.length > 0) {
      const itemCost = quoteData.furniture_items.reduce((total, item) => {
        return total + (item.quantity * 20); // $20 per item
      }, 0);
      basePrice += itemCost;
    }

    // Urgency multiplier
    if (quoteData.urgency === 'urgent') {
      basePrice *= 1.5;
    } else if (quoteData.urgency === 'same_day') {
      basePrice *= 2;
    }

    // Round to nearest $10
    return Math.ceil(basePrice / 10) * 10;
  }

  static getServiceTypeLabel(serviceType) {
    const labels = {
      'bedroom_furniture': 'Bedroom Furniture',
      'office_furniture': 'Office Furniture',
      'living_room': 'Living Room',
      'dining_room': 'Dining Room',
      'outdoor_furniture': 'Outdoor Furniture',
      'ikea_furniture': 'IKEA Furniture',
      'custom_assembly': 'Custom Assembly',
      'disassembly': 'Disassembly Service',
      'furniture_repair': 'Furniture Repair'
    };
    return labels[serviceType] || serviceType;
  }
} 