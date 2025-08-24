'use client';

export default function HeroBanner() {
  return (
    <div 
      className="bg-gradient-to-r from-black/80 to-black/60 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('/Rectangle 263.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center">
          <div className="flex-1 pr-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Durable Construction: The 3M 6200 half face respirator,<br />
              ensuring a durable and long-lasting product.
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-32 w-24 h-24 border border-white rotate-45"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 border border-white rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-white rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-white rotate-12"></div>
      </div>
    </div>
  );
}