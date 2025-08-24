'use client';

import { PackageIcon, XIcon } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClear?: () => void;
}

export default function EmptyState({
  title = "No products found",
  description = "Try adjusting your search or filters to find what you're looking for.",
  onClear,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <PackageIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        {description}
      </p>
      {onClear && (
        <button
          onClick={onClear}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <XIcon className="w-4 h-4 mr-2" />
          Clear filters
        </button>
      )}
    </div>
  );
}