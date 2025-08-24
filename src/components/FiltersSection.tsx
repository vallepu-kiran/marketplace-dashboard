'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface FiltersSectionProps {
  filters: {
    category: string;
    businessType: string;
    subCategory: string;
    search: string;
  };
  onFiltersChange: (filters: any) => void;
}

export default function FiltersSection({ filters, onFiltersChange }: FiltersSectionProps) {
  const [expandedSections, setExpandedSections] = useState({
    businessType: true,
    category: true,
    subCategory: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const businessTypes = [
    { name: 'All', count: 18 },
    { name: 'Supplier', count: 12 },
    { name: 'Service Provider', count: 29 },
    { name: 'Manufacturer', count: 27 },
    { name: 'Distributor', count: 34 },
    { name: 'Contractor Services', count: 12 },
  ];

  const categories = [
    { name: 'General Civil Engineering', count: 18 },
    { name: 'Utilities and Services', count: 13 },
    { name: 'Earthworks and Site Preparation', count: 23 },
    { name: 'Concrete Works', count: 67 },
    { name: 'Steel and Structural Works', count: 34 },
    { name: 'Masonry and Finishing Works', count: 12 },
  ];

  const subCategories = [
    { name: 'Water Supply', count: 16 },
    { name: 'Electrical', count: 36 },
    { name: 'Sewerage Systems', count: 23 },
    { name: 'Drainage Management', count: 67 },
    { name: 'Stormwater Management', count: 34 },
    { name: 'Gas Pipeline Installation', count: 12 },
  ];

  const clearAllFilters = () => {
    onFiltersChange({
      category: '',
      businessType: '',
      subCategory: '',
      search: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-blue-600 text-sm hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      {/* Business Type */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('businessType')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <h4 className="font-medium text-gray-900">Business Type</h4>
          {expandedSections.businessType ? (
            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.businessType && (
          <div className="mt-3 space-y-2">
            {businessTypes.map((type) => (
              <label key={type.name} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.businessType === type.name}
                  onChange={(e) => onFiltersChange({
                    ...filters,
                    businessType: e.target.checked ? type.name : ''
                  })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type.name}</span>
                <span className="ml-auto text-xs text-gray-500">({type.count})</span>
              </label>
            ))}
            <button className="text-blue-600 text-sm hover:text-blue-700">
              Show more
            </button>
          </div>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <h4 className="font-medium text-gray-900">Category</h4>
          {expandedSections.category ? (
            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.category && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.category === category.name}
                  onChange={(e) => onFiltersChange({
                    ...filters,
                    category: e.target.checked ? category.name : ''
                  })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">({category.count})</span>
              </label>
            ))}
            <button className="text-blue-600 text-sm hover:text-blue-700">
              Show more
            </button>
          </div>
        )}
      </div>

      {/* Sub Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('subCategory')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <h4 className="font-medium text-gray-900">Sub Category</h4>
          {expandedSections.subCategory ? (
            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.subCategory && (
          <div className="mt-3 space-y-2">
            {subCategories.map((subCategory) => (
              <label key={subCategory.name} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.subCategory === subCategory.name}
                  onChange={(e) => onFiltersChange({
                    ...filters,
                    subCategory: e.target.checked ? subCategory.name : ''
                  })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{subCategory.name}</span>
                <span className="ml-auto text-xs text-gray-500">({subCategory.count})</span>
              </label>
            ))}
            <button className="text-blue-600 text-sm hover:text-blue-700">
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}