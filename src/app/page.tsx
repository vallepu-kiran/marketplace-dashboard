'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FiltersSection from '@/components/FiltersSection';
import ProductGrid from '@/components/ProductGrid';
import TrustedClients from '@/components/TrustedClients';
import Footer from '@/components/Footer';
import { type Product } from '@/lib/mockData';

interface ProductsResponse {
  success: boolean;
  data: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    category: '',
    businessType: '',
    subCategory: '',
    search: '',
  });

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '8',
        sortBy: 'createdAt',
        sortOrder: 'desc',
        ...(filters.category && { category: filters.category }),
        ...(filters.search && { search: filters.search }),
      });

      const response = await fetch(`/api/products?${params}`);
      const data: ProductsResponse = await response.json();
      
      if (data.success) {
        setProducts(data.data);
        setCurrentPage(data.pagination.currentPage);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [filters, currentPage]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchProducts(page);
  };

  const handleSearch = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, search: searchTerm }));
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 flex-shrink-0">
            <FiltersSection
              filters={filters}
              onFiltersChange={handleFilterChange}
            />
          </div>

          {/* Main Content - Product Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Products
                </button>
                <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
                  Companies
                </button>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                <span className="text-blue-600 font-medium">Showing Result for:</span> latest equipment planning and design
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 border border-gray-300 rounded text-sm"
                    value={filters.search}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <select className="px-4 py-2 border border-gray-300 rounded text-sm">
                    <option>Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <ProductGrid 
              products={products} 
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <TrustedClients />
      <Footer />
    </div>
  );
}