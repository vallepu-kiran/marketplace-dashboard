export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive' | 'out-of-stock' | 'discontinued';
  vendor: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  specifications?: Record<string, string>;
  rating?: number;
  reviewCount?: number;
}

export interface ApiResponse<T> {
  data: T;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  meta?: Record<string, any>;
}

export interface ProductFilters {
  category?: string;
  status?: string;
  search?: string;
  sortBy?: 'name' | 'price' | 'stock' | 'createdAt' | 'vendor';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

const categories = [
  'Safety Equipment',
  'HVAC Systems',
  'Industrial Sensors',
  'Power Tools',
  'Electrical Components',
  'Mechanical Parts',
  'Construction Materials',
  'Personal Protective Equipment',
  'Automation Equipment',
  'Testing Equipment'
];

const vendors = [
  '3M Corporation',
  'General Electric',
  'Honeywell International',
  'Siemens AG',
  'Schneider Electric',
  'ABB Group',
  'Emerson Electric',
  'Rockwell Automation',
  'Johnson Controls',
  'Bosch Industrial',
  'Parker Hannifin',
  'Eaton Corporation'
];

const statuses: Product['status'][] = ['active', 'inactive', 'out-of-stock', 'discontinued'];

// Helper function to generate random dates
const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

// Generate mock products
export const mockProducts: Product[] = Array.from({ length: 85 }, (_, index) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const vendor = vendors[Math.floor(Math.random() * vendors.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const createdAt = getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31));
  
  // Product names based on categories
  const productNames: Record<string, string[]> = {
    'Safety Equipment': [
      'N95 Respirator Mask', 'Safety Goggles', 'Hard Hat', 'Safety Vest', 'Cut-Resistant Gloves',
      'Fall Protection Harness', 'Safety Boots', 'Hearing Protection', 'First Aid Kit', 'Emergency Eyewash'
    ],
    'HVAC Systems': [
      'Air Handler Unit', 'Heat Exchanger', 'Variable Speed Drive', 'Thermostat Controller',
      'Ductwork Assembly', 'Air Filter System', 'Condensing Unit', 'Evaporator Coil', 'Blower Motor'
    ],
    'Industrial Sensors': [
      'Pressure Sensor', 'Temperature Sensor', 'Flow Meter', 'Proximity Sensor', 'Level Sensor',
      'Vibration Sensor', 'Gas Detector', 'pH Sensor', 'Humidity Sensor', 'Motion Detector'
    ],
    'Power Tools': [
      'Cordless Drill', 'Circular Saw', 'Impact Wrench', 'Angle Grinder', 'Reciprocating Saw',
      'Rotary Hammer', 'Belt Sander', 'Jigsaw', 'Multi-Tool', 'Nail Gun'
    ],
    'Electrical Components': [
      'Circuit Breaker', 'Transformer', 'Motor Starter', 'Control Relay', 'Electrical Panel',
      'Junction Box', 'Cable Tray', 'Conduit Fitting', 'Switch Gear', 'Power Supply Unit'
    ],
    'Mechanical Parts': [
      'Ball Bearing', 'Coupling', 'Drive Belt', 'Gear Motor', 'Linear Actuator',
      'Pneumatic Cylinder', 'Hydraulic Pump', 'Valve Assembly', 'Seal Kit', 'Mounting Bracket'
    ],
    'Construction Materials': [
      'Concrete Mix', 'Steel Beam', 'Insulation Panel', 'Roofing Material', 'Drainage Pipe',
      'Foundation Anchor', 'Waterproof Membrane', 'Expansion Joint', 'Structural Adhesive'
    ],
    'Personal Protective Equipment': [
      'Face Shield', 'Chemical Gloves', 'Protective Suit', 'Knee Pads', 'Safety Harness',
      'Respirator Filter', 'Safety Glasses', 'Steel Toe Boots', 'Hi-Vis Jacket'
    ],
    'Automation Equipment': [
      'PLC Controller', 'HMI Display', 'Servo Motor', 'Variable Frequency Drive', 'Encoder',
      'Photoelectric Sensor', 'Pneumatic Valve', 'Robot Arm', 'Conveyor System'
    ],
    'Testing Equipment': [
      'Multimeter', 'Oscilloscope', 'Function Generator', 'Power Analyzer', 'Calibrator',
      'Insulation Tester', 'Clamp Meter', 'Logic Analyzer', 'Spectrum Analyzer'
    ]
  };

  const categoryProducts = productNames[category] || ['Industrial Product'];
  const baseName = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
  const modelNumber = `${vendor.split(' ')[0].toUpperCase()}-${Math.floor(Math.random() * 9000) + 1000}`;
  
  return {
    id: (index + 1).toString(),
    name: `${baseName} ${modelNumber}`,
    description: `Professional grade ${baseName.toLowerCase()} designed for industrial applications with superior performance and reliability.`,
    price: Math.round((Math.random() * 2000 + 10) * 100) / 100,
    stock: status === 'out-of-stock' ? 0 : Math.floor(Math.random() * 500) + 1,
    category,
    status,
    vendor,
    images: [
      `/images/products/product-${index + 1}-1.jpg`,
      `/images/products/product-${index + 1}-2.jpg`
    ],
    createdAt,
    updatedAt: getRandomDate(new Date(createdAt), new Date()),
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
    reviewCount: Math.floor(Math.random() * 300) + 5,
    tags: [
      category.toLowerCase().replace(' ', '-'),
      vendor.toLowerCase().split(' ')[0],
      'industrial',
      'professional'
    ],
    specifications: {
      'Model': modelNumber,
      'Manufacturer': vendor,
      'Warranty': `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? 's' : ''}`,
      'Certification': Math.random() > 0.5 ? 'ISO 9001' : 'CE Certified'
    }
  };
});

// Sort by newest first (default requirement)
mockProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export { categories, vendors, statuses };

// Helper functions for API simulation
export const getProducts = (filters: ProductFilters = {}): ApiResponse<Product[]> => {
  let filteredProducts = [...mockProducts];
  
  // Apply filters
  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  
  if (filters.status) {
    filteredProducts = filteredProducts.filter(p => p.status === filters.status);
  }
  
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.vendor.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }
  
  // Apply sorting
  if (filters.sortBy) {
    filteredProducts.sort((a, b) => {
      const aVal = a[filters.sortBy!];
      const bVal = b[filters.sortBy!];
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return filters.sortOrder === 'desc' 
          ? bVal.localeCompare(aVal)
          : aVal.localeCompare(bVal);
      }
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return filters.sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
      }
      
      return 0;
    });
  } else {
    // Default sort by creation date (newest first)
    filteredProducts.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  // Apply pagination
  const page = filters.page || 1;
  const limit = filters.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return {
    data: paginatedProducts,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(filteredProducts.length / limit),
      totalItems: filteredProducts.length,
      itemsPerPage: limit
    }
  };
};

export const getProductById = (id: string): Product | null => {
  return mockProducts.find(p => p.id === id) || null;
};