'use client';

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
      </div>

      {/* Table Header */}
      <div className="px-6 py-4 bg-gray-50 border-b">
        <div className="grid grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="grid grid-cols-8 gap-4 items-center">
              {/* Product with image */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
              
              {/* Other columns */}
              {Array.from({ length: 6 }).map((_, colIndex) => (
                <div key={colIndex} className="h-4 bg-gray-200 rounded w-20"></div>
              ))}
              
              {/* Actions */}
              <div className="flex gap-2">
                {Array.from({ length: 3 }).map((_, actionIndex) => (
                  <div key={actionIndex} className="w-4 h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
          <div className="flex items-center gap-2">
            <div className="h-8 bg-gray-200 rounded w-20"></div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-8 h-8 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}