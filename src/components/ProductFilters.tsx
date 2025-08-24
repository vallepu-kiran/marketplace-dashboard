'use client';

import { FilterIcon, XIcon } from 'lucide-react';
import { type ProductFilters } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  categories: string[];
  vendors: string[];
  filters: ProductFilters;
  onChange: (key: keyof ProductFilters, value: any) => void;
  onClear: () => void;
}

export default function ProductFilters({
  categories,
  vendors,
  filters,
  onChange,
  onClear,
}: ProductFiltersProps) {
  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'out-of-stock', label: 'Out of Stock' },
    { value: 'discontinued', label: 'Discontinued' },
  ];

  const hasActiveFilters = filters.category || filters.status || filters.search;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Category Filter */}
      <div className="min-w-[140px]">
        <select
          value={filters.category || ''}
          onChange={(e) => onChange('category', e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}
      <div className="min-w-[120px]">
        <select
          value={filters.status || ''}
          onChange={(e) => onChange('status', e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Status</option>
          {statusOptions.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <XIcon className="w-4 h-4 mr-1" />
          Clear
        </button>
      )}

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          {filters.category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Category: {filters.category}
              <button
                onClick={() => onChange('category', undefined)}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                <XIcon className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {filters.status && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Status: {filters.status.replace('-', ' ')}
              <button
                onClick={() => onChange('status', undefined)}
                className="ml-1 text-green-600 hover:text-green-800"
              >
                <XIcon className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {filters.search && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Search: &quot;{filters.search}&quot;
              <button
                onClick={() => onChange('search', undefined)}
                className="ml-1 text-yellow-600 hover:text-yellow-800"
              >
                <XIcon className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}