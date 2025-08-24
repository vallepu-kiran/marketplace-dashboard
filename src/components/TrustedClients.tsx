'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function TrustedClients() {
  const clients = [
    { name: '3M', logo: '/Frame 1000002647.png' },
    { name: 'Amentum', logo: '/Frame 1000002648.png' },
    { name: 'Daikin', logo: '/Frame 1000002649.png' },
    { name: 'GE', logo: '/Frame 1000002652.png' },
    { name: 'Airwheel', logo: '/Frame 1000002654.png' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by leading Clients
        </h2>
        
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Clients Grid */}
          <div className="flex items-center justify-center gap-8 px-16">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center w-32 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-20 max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    // Fallback to text if logo doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-lg font-bold text-gray-600">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}