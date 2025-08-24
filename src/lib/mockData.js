export const mockProducts = [
  {
    id: '1',
    name: '3M N95 Respirator Mask',
    description: 'High-quality N95 respirator mask for industrial use',
    price: 15.99,
    category: 'Safety Equipment',
    brand: '3M',
    image: '/images/3m-mask.png',
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    tags: ['safety', 'respirator', 'industrial'],
    specifications: {
      'Type': 'N95',
      'Certification': 'NIOSH',
      'Material': 'Polypropylene'
    }
  },
  {
    id: '2',
    name: 'Daikin HVAC System Controller',
    description: 'Smart HVAC controller for commercial buildings',
    price: 899.99,
    category: 'HVAC',
    brand: 'Daikin',
    image: '/images/daikin-controller.png',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ['hvac', 'controller', 'smart', 'commercial'],
    specifications: {
      'Compatibility': 'Daikin VRV Systems',
      'Connectivity': 'WiFi, Ethernet',
      'Display': '7" Touchscreen'
    }
  },
  {
    id: '3',
    name: 'GE Digital Pressure Sensor',
    description: 'Industrial pressure sensor with digital output',
    price: 234.50,
    category: 'Sensors',
    brand: 'GE',
    image: '/images/ge-sensor.png',
    rating: 4.5,
    reviewCount: 156,
    inStock: false,
    tags: ['sensor', 'pressure', 'digital', 'industrial'],
    specifications: {
      'Range': '0-1000 PSI',
      'Output': '4-20mA',
      'Accuracy': '±0.25%'
    }
  },
  {
    id: '4',
    name: 'Airwheel Electric Scooter',
    description: 'Professional electric scooter for facility maintenance',
    price: 1299.99,
    category: 'Mobility',
    brand: 'Airwheel',
    image: '/images/airwheel-scooter.png',
    rating: 4.3,
    reviewCount: 67,
    inStock: true,
    tags: ['electric', 'scooter', 'mobility', 'maintenance'],
    specifications: {
      'Range': '25 miles',
      'Speed': '15 mph',
      'Battery': 'Lithium-ion'
    }
  },
  {
    id: '5',
    name: 'Amentum Safety Harness',
    description: 'Fall protection harness for construction work',
    price: 189.99,
    category: 'Safety Equipment',
    brand: 'Amentum',
    image: '/images/amentum-harness.png',
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    tags: ['safety', 'harness', 'fall-protection', 'construction'],
    specifications: {
      'Weight Capacity': '350 lbs',
      'Certification': 'ANSI Z359',
      'Material': 'Polyester webbing'
    }
  }
];

export const categories = [
  'Safety Equipment',
  'HVAC',
  'Sensors',
  'Mobility',
  'Tools',
  'Electrical',
  'Mechanical'
];

export const brands = [
  '3M',
  'Daikin',
  'GE',
  'Airwheel',
  'Amentum',
  'Honeywell',
  'Siemens'
];