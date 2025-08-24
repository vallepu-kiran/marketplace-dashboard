'use client';

import { useState } from 'react';
import { type Product } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductGrid({ 
  products, 
  loading, 
  currentPage, 
  totalPages, 
  onPageChange 
}: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getProductImage = (product: Product, index: number) => {
    // Cycle through available review images
    const reviewImages = [
      '/review-img.png',      // 3M Welding Helmet
      '/review-img (1).png',  // MSA Hard Hat
      '/review-img (2).png',  // 3M Respirator
      '/review-img (3).png',  // Safety Gloves
    ];
    return reviewImages[index % reviewImages.length];
  };

  const getBrandLogo = (vendor: string) => {
    const brandName = vendor.split(' ')[0].toLowerCase();
    switch (brandName) {
      case '3m':
        return '/Frame 1000002647.png';
      case 'general':
      case 'ge':
        return '/Frame 1000002652.png';
      case 'honeywell':
        return '/Frame 1000002654.png';
      default:
        return '/Frame 1000002647.png';
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            {/* Product Image */}
            <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
              <img
                src={getProductImage(product, index)}
                alt={product.name}
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-product.svg';
                }}
              />
              
              {/* Status Badge */}
              {product.status === 'active' && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  ACTIVE
                </div>
              )}
              
              {/* Brand Logo */}
              <div className="absolute top-3 right-3 w-12 h-12 bg-white rounded p-1 shadow-sm">
                <img
                  src={getBrandLogo(product.vendor)}
                  alt={product.vendor}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                {product.vendor}
              </p>
              
              <p className="text-sm text-gray-500 mb-3 uppercase">
                Category: {product.category}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(product.price)}
                </div>
                <div className="text-sm text-gray-500">
                  Stock: {product.stock}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                Send Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 text-sm border rounded ${
                  currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}
          
          {totalPages > 5 && (
            <>
              <span className="px-2 text-gray-500">...</span>
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}