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
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Trusted by leading Clients
        </h2>
        
        <div className="relative">
          {/* Desktop Layout with Arrows */}
          <div className="hidden md:block">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Clients Grid */}
            <div className="flex items-center justify-center gap-8 px-16">
              {clients.map((client, index) => (
                <div key={client.name}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-40 max-h-30 object-contain filter grayscale hover:grayscale-0 transition-all"
                    onError={(e) => {
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
          
          {/* Mobile Layout - Scrollable */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {clients.map((client, index) => (
                <div key={client.name} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-24 h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-sm font-bold text-gray-600">${client.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}