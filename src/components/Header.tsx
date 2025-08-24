'use client';

import { useState } from 'react';
import { ChevronDownIcon, SearchIcon, MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

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
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="text-xl md:text-2xl font-bold text-blue-600 tracking-wider">iPROCURE</div>';
                  }
                }}
              />
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
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

            {/* Mobile Search Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden sm:flex items-center gap-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded text-sm hover:bg-blue-50 transition-colors">
                Register
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {mobileSearchOpen && (
            <div className="md:hidden pb-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex flex-col gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded bg-white text-sm">
                    <option>Products</option>
                    <option>Services</option>
                    <option>Companies</option>
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for products"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <SearchIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
              <div className="flex flex-col gap-2">
                <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded text-sm hover:bg-blue-50 transition-colors">
                  Register
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar - Blue */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-12">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-between w-full text-sm font-medium"
              >
                <span>Navigation</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="block py-2 text-sm font-medium hover:text-blue-200 transition-colors">
                  Products
                </a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-blue-200 transition-colors">
                  Suppliers
                </a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-blue-200 transition-colors">
                  Services
                </a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-blue-200 transition-colors">
                  Service Providers
                </a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-blue-200 transition-colors">
                  RFQ Marketplace
                </a>
              </nav>
            </div>
          )}
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