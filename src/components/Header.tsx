'use client';

import { useState } from 'react';
import { ChevronDownIcon, SearchIcon, MenuIcon } from 'lucide-react';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <>
      {/* Top Header - White */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/image 3.png" 
                alt="iPROCURE" 
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to text if logo doesn't load
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="text-2xl font-bold text-blue-600 tracking-wider">iPROCURE</div>';
                  }
                }}
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex">
                  <select className="px-4 py-2 border border-gray-300 rounded-l bg-white text-sm">
                    <option>Products</option>
                    <option>Services</option>
                    <option>Companies</option>
                  </select>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search for products"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="w-full px-4 py-2 border-t border-b border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors"
                  >
                    <SearchIcon className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded text-sm hover:bg-blue-50 transition-colors">
                Register
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Blue */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-12">
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors">
                Products
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors">
                Suppliers
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors">
                Services
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors">
                Service Providers
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-200 transition-colors">
                RFQ Marketplace
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-10 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Product</span>
          </div>
        </div>
      </div>
    </>
  );
}